// Reading Protocol stage 3: deterministic gates, run before any Council review.
// Usage: bun scripts/reading-gates.ts <thinker-slug>
// Reads the page's `reading` / `extension` / `margin_note` and _working/<slug>/reading-claims.md.
// Exit 0 = all gates pass; exit 1 = at least one failure (listed).
import { existsSync, readFileSync } from 'node:fs';
import { join } from 'node:path';
import { parseFrontmatter, thinkerPath, workingDir, oneLine } from './lib';

const slug = process.argv[2];
if (!slug) { console.error('usage: bun scripts/reading-gates.ts <thinker-slug>'); process.exit(1); }

const t = parseFrontmatter(thinkerPath(slug));
const fails: string[] = [];
const fail = (gate: string, msg: string) => fails.push(`${gate}: ${msg}`);

const MAX_WORDS = 160;
const BANNED = /\b(delve\w*|nuanced|multifaceted|tapestry|in the realm of|it's worth noting|operationaliz\w*)\b|(^|[.!?]\s+)(Crucially|Importantly)\b/i;
// Banned only as a verb or a metaphor, which a regex cannot tell apart: warn, do not fail.
const CONTEXTUAL = /\b(leverag\w*|navigat\w*)\b/i;
// "Not X. Y." family: the antithesis cadence the AI-pattern sweep flags.
const ANTITHESIS = [
  /\bnot (just|only|merely|simply)\b/i,
  /\bisn['’]t [^.;]{1,60}[;,] (it['’]s|but)\b/i,
  /\bnot [^.;]{1,50}, but\b/i,
  /\b(is|are) not [^.;]{1,50}\. (It|They) (is|are)\b/,
];
// Hyphen guards keep titles such as *Safety-I vs Safety-II* out of the first-person check.
const FIRST_PERSON = /(?<![\w-])(I|I['’]m|I['’]ve|I['’]d|me|my|mine|myself)(?![\w-])/;

const fields: Array<[string, string | undefined]> = [
  ['reading', t.reading],
  ['extension', t.extension],
  ['margin_note', t.margin_note],
];

// Every other editorial field on the page. The hard rules in SCHEMA.md section 8 bind all site
// prose, and until 2026-09-17 nothing checked these: a banned "not X but Y" reached a shipped
// `thesis` and a review seat caught it by hand. Length and claims apply only to reading and
// extension, so these fields get the voice checks alone. `working_line` is the thinker's own
// paraphrased words and stays exempt.
const proseFields = (): Array<[string, string]> => {
  const out: Array<[string, string]> = [];
  const add = (name: string, v: unknown) => { if (typeof v === 'string' && v.trim()) out.push([name, v]); };
  for (const f of ['tagline', 'thirty_second_take', 'background', 'why_they_matter_as_a_thinker', 'thesis', 'still_load_bearing_despite', 'inclusion_rationale']) add(f, (t as Record<string, unknown>)[f]);
  for (const [i, l] of ((t.limits as Array<Record<string, unknown>>) ?? []).entries()) {
    add(`limits[${i}].headline`, l?.headline);
    add(`limits[${i}].elaboration`, l?.elaboration);
  }
  for (const [i, f] of ((t.named_frames as Array<Record<string, unknown>>) ?? []).entries()) add(`named_frames[${i}].one_line_gloss`, f?.one_line_gloss);
  for (const [i, e] of ((t.adjacent_thinkers as Array<Record<string, unknown>>) ?? []).entries()) add(`adjacent_thinkers[${i}].edge_label`, e?.edge_label);
  for (const [i, w] of ((t.body_of_work as Array<Record<string, unknown>>) ?? []).entries()) add(`body_of_work[${i}].editorial_note`, w?.editorial_note);
  const fi = (t.further_in as Record<string, unknown>) ?? {};
  for (const k of ['start_here', 'if_you_want_depth', 'if_you_want_breadth']) add(`further_in.${k}`, fi[k]);
  return out;
};

if (!t.reading) fail('present', '`reading` is empty');
if (!t.extension) fail('present', '`extension` is empty');

for (const [name, raw] of fields) {
  if (!raw) continue;
  const text = oneLine(raw);
  // Quoted spans are the thinker's own words or terms, so voice checks skip them (SCHEMA.md section 8).
  const own = text.replace(/"[^"]*"|“[^”]*”/g, '""');
  if (own.includes('—')) fail('em-dash', `${name} contains ${own.split('—').length - 1}`);
  const b = own.match(BANNED);
  if (b) fail('banned-word', `${name}: "${b[0]}"`);
  const w = own.match(CONTEXTUAL);
  if (w) console.log(`warn ${name}: "${w[0]}" is banned as a verb or metaphor; confirm usage`);
  for (const re of ANTITHESIS) {
    const m = own.match(re);
    if (m) fail('antithesis', `${name}: "${m[0]}"`);
  }
  const words = text.split(/\s+/).length;
  if (name !== 'margin_note' && words > MAX_WORDS) fail('length', `${name} is ${words} words (max ${MAX_WORDS})`);
  // The reading speaks as the Distillery. Only Julie's margin note may say "I".
  if (name !== 'margin_note') {
    const fp = own.match(FIRST_PERSON);
    if (fp) fail('voice', `${name} uses first person ("${fp[0]}")`);
  }
}

// These are warnings, not failures. The same patterns that are always wrong in a reading are
// sometimes right here: a limit headline naming the critique's own word ("the Bridgewater
// operationalization is contested", SCHEMA section 8), an edge label reporting that a critic
// "does not name Fournier, but" argues a rival model, a frame gloss whose source contrast is the
// definition. The drafter judges each one; `--strict-prose` turns them into failures.
const strict = process.argv.includes('--strict-prose');
for (const [name, raw] of proseFields()) {
  const own = oneLine(raw).replace(/"[^"]*"|“[^”]*”/g, '""');
  const note = (gate: string, msg: string) => (strict ? fail(gate, msg) : console.log(`warn ${gate} ${name}: ${msg}`));
  if (own.includes('—')) note('em-dash', `contains ${own.split('—').length - 1}`);
  const b = own.match(BANNED);
  if (b) note('banned-word', `"${b[0]}"`);
  const w = own.match(CONTEXTUAL);
  if (w) note('contextual', `"${w[0]}" is banned as a verb or metaphor; confirm usage`);
  for (const re of ANTITHESIS) {
    const m = own.match(re);
    if (m) note('antithesis', `"${m[0]}"`);
  }
  const fp = own.match(FIRST_PERSON);
  if (fp) note('voice', `first person ("${fp[0]}")`);
}

// Grounding: every sentence of reading + extension appears in the claims file with >=1 citation,
// and every citation resolves to an ID in the grounding pack.
const dir = workingDir(slug);
const packPath = join(dir, 'grounding-pack.md');
const claimsPath = join(dir, 'reading-claims.md');
if (!existsSync(packPath)) fail('grounding', `missing ${packPath} (run scripts/grounding-pack.ts)`);
if (!existsSync(claimsPath)) fail('grounding', `missing ${claimsPath}`);

if (existsSync(packPath) && existsSync(claimsPath)) {
  const ids = new Set([...readFileSync(packPath, 'utf8').matchAll(/\*\*\[([^\]]+)\]\*\*/g)].map((m) => m[1]));
  const claims = readFileSync(claimsPath, 'utf8').split('\n').filter((l) => l.startsWith('- '));
  const norm = (s: string) => s.toLowerCase().replace(/[^a-z0-9 ]/g, '').replace(/\s+/g, ' ').trim();
  const claimed = new Map<string, string[]>();
  for (const c of claims) {
    const cites = [...c.matchAll(/\[([A-Z]:[^\]]+)\]/g)].map((m) => m[1]);
    const sentence = c.slice(2).replace(/\[[A-Z]:[^\]]+\]/g, '').trim();
    claimed.set(norm(sentence), cites);
    for (const id of cites) if (!ids.has(id)) fail('grounding', `citation [${id}] is not in the grounding pack`);
    if (cites.length === 0) fail('grounding', `uncited claim: "${sentence.slice(0, 60)}"`);
  }
  for (const [name, raw] of fields.slice(0, 2)) {
    if (!raw) continue;
    const sentences = oneLine(raw).split(/(?<=[.!?]["”]?)\s+(?=[A-Z*"“])/).filter(Boolean);
    for (const s of sentences) {
      if (!claimed.has(norm(s))) fail('grounding', `${name} sentence has no claims entry: "${s.slice(0, 60)}"`);
    }
  }
  // The extension must touch Julie's lens, or the claims file must say none applies.
  const lensCited = claims.some((c) => /\[P:\d+\]/.test(c));
  const lensWaived = /^lens: none applies/im.test(readFileSync(claimsPath, 'utf8'));
  if (!lensCited && !lensWaived) fail('lens', 'no [P:n] citation and no "lens: none applies" line');
}

if (fails.length) {
  console.log(`FAIL ${slug} (${fails.length})`);
  for (const f of fails) console.log(`  - ${f}`);
  process.exit(1);
}
console.log(`PASS ${slug}: reading gates clean`);
