// The fact ledger: nothing factual reaches a page without a source line behind it.
// Usage: bun scripts/fact-ledger.ts <slug> [--concept] [--json]
//
// Why this file exists. Three times a Council seat asserted something that turned out to be false
// and it nearly shipped: a sympathetic essay called a critique (Hickey, seat 2), an uptake quote
// with no source (Hickey, seat 1), a disclosed interest called undisclosed (Saxe, seat 2). A
// human caught each one. Once the pipeline runs without a human between the seats and the page,
// that catch disappears, so the check has to be structural instead of attentive.
//
// The rule it enforces: a seat report is a research request, never a fact. A claim becomes a fact
// when it has a line in `_working/<slug>/facts.md` with a URL and the date it was checked, and
// the page's factual fields cite those lines in `_working/<slug>/page-claims.md`.
//
// This is deliberately narrow. It covers the fields where the errors actually happened:
// attribution, lineage, critics, published work, and career facts. Interpretation is not a fact
// and is not checked here; `reading-gates.ts` covers the editorial reading, and the Councils
// cover judgment.
//
// Two files, by design:
//   facts.md       one line per verified fact, the ledger.  `- [S:1] claim | url | YYYY-MM-DD`
//   page-claims.md one line per factual field, the mapping. `- named_frames[0].attribution [S:1]`
// sources.md stays what it is: the prose research record a human reads.
import { existsSync, readFileSync } from 'node:fs';
import { join } from 'node:path';
import { parseFrontmatter, thinkerPath, workingDir, ROOT, oneLine } from './lib';

const argv = process.argv.slice(2);
const json = argv.includes('--json');
const isConcept = argv.includes('--concept');
const slug = argv.find((a) => !a.startsWith('--'));
if (!slug) {
  console.error('usage: bun scripts/fact-ledger.ts <slug> [--concept] [--json]');
  process.exit(1);
}

const pagePath = isConcept ? join(ROOT, 'src/content/concepts', `${slug}.md`) : thinkerPath(slug);
const dir = isConcept ? join(ROOT, '_working/concepts', slug) : workingDir(slug);
const factsPath = join(dir, 'facts.md');
const claimsPath = join(dir, 'page-claims.md');

const fails: string[] = [];
const warns: string[] = [];
const fail = (gate: string, msg: string) => fails.push(`${gate}: ${msg}`);
const warn = (gate: string, msg: string) => warns.push(`${gate}: ${msg}`);

// ---------------------------------------------------------------- the ledger
type Fact = { id: string; claim: string; url: string; checked: string };
const facts = new Map<string, Fact>();

if (!existsSync(factsPath)) {
  fail('ledger', `missing ${factsPath}. Research writes this alongside sources.md.`);
} else {
  const lines = readFileSync(factsPath, 'utf8').split('\n');
  for (const [i, line] of lines.entries()) {
    // Top-level bullets only. An indented line is a format example in the file's own header,
    // not an entry, and parsing those was the first thing this script got wrong.
    const m = line.match(/^-\s+\[(S:[^\]]+)\]\s*(.*)$/);
    if (!m) continue;
    const id = m[1];
    const parts = m[2].split('|').map((s) => s.trim());
    const claim = parts[0] ?? '';
    const url = parts.find((p) => /^https?:\/\//.test(p)) ?? '';
    const checked = parts.find((p) => /^\d{4}-\d{2}-\d{2}$/.test(p)) ?? '';
    const where = `${id} (facts.md line ${i + 1})`;
    if (facts.has(id)) fail('ledger', `duplicate id ${where}`);
    if (!claim) fail('ledger', `${where} has no claim text`);
    if (!url) fail('ledger', `${where} has no URL. A fact with no source is a seat's opinion.`);
    if (!checked) fail('ledger', `${where} has no check date (YYYY-MM-DD)`);
    facts.set(id, { id, claim, url, checked });
  }
  if (!facts.size) fail('ledger', `${factsPath} contains no "- [S:n] claim | url | date" lines`);
}

// ------------------------------------------------- what the page must account for
// Derived from the page itself, so a new frame or a new critic cannot be forgotten.
const page = parseFrontmatter(pagePath);
const required: Array<[string, string]> = [];
const require_ = (path: string, why: string) => required.push([path, why]);

// A concept page states no career or attribution facts of its own: its holders are derived from
// the `concept_slug` on each thinker's frames, and those attributions are already covered on the
// thinker pages. So a concept run checks the ledger and the citations, with nothing required.
if (!isConcept) {
  require_('active_years', 'the span the page states');
  require_('background', 'employers, titles and dates');
  for (const [i, f] of ((page.named_frames as Array<Record<string, unknown>>) ?? []).entries()) {
    const name = f?.display_name ?? i;
    require_(`named_frames[${i}].attribution`, `"${name}" is ${f?.attribution_kind} by ${f?.primary_author}`);
    for (const [j, c] of ((f?.co_originators as Array<Record<string, unknown>>) ?? []).entries()) {
      require_(`named_frames[${i}].co_originators[${j}]`, `${c?.slug} co-originated "${name}"`);
    }
    if (f?.derived_from) require_(`named_frames[${i}].derived_from`, `"${name}" derives from ${f.derived_from}`);
  }
  for (const [i, e] of ((page.adjacent_thinkers as Array<Record<string, unknown>>) ?? []).entries()) {
    const rel = String(e?.edge_type ?? '');
    // A critique or an antecedent is a claim about the record, and the one the seats have got
    // wrong: a seat proposed Kyle Mitchell as a critic of Hickey when his essay is sympathetic.
    // "parallel" and "extends" are the site's reading of a relationship, so the Councils judge
    // those instead of the ledger.
    if (rel === 'critiques' || rel === 'antecedent') {
      require_(`adjacent_thinkers[${i}]`, `${e?.target_slug} ${rel} this thinker, by the record and not by inference`);
    }
  }
  for (const [i, w] of ((page.body_of_work as Array<Record<string, unknown>>) ?? []).entries()) {
    require_(`body_of_work[${i}]`, `"${w?.title}" (${w?.year ?? 'no year'}) exists as described`);
  }
}

// ---------------------------------------------------------------- the mapping
const covered = new Map<string, string[]>();
if (!existsSync(claimsPath)) {
  fail('claims', `missing ${claimsPath}. The drafter writes one line per factual field.`);
} else {
  for (const [i, line] of readFileSync(claimsPath, 'utf8').split('\n').entries()) {
    const m = line.match(/^-\s+([A-Za-z0-9_\[\]\.]+)\s*(.*)$/);
    if (!m) continue;
    const path = m[1];
    const cites = [...m[2].matchAll(/\[(S:[^\]]+)\]/g)].map((c) => c[1]);
    if (!cites.length) {
      fail('claims', `${path} (page-claims.md line ${i + 1}) cites nothing`);
      continue;
    }
    for (const id of cites) {
      if (!facts.has(id)) fail('claims', `${path} cites [${id}], which is not in facts.md`);
    }
    covered.set(path, [...(covered.get(path) ?? []), ...cites]);
  }
}

for (const [path, why] of required) {
  if (!covered.has(path)) fail('coverage', `${path} has no entry in page-claims.md (${why})`);
}

// A fact nobody cites is usually a seat's claim that research could not confirm and the drafter
// dropped, or a claim the page lost in a rewrite. Worth a look, not worth a failure.
for (const id of facts.keys()) {
  const used = [...covered.values()].some((cites) => cites.includes(id));
  if (!used) warn('unused', `[${id}] "${oneLine(facts.get(id)!.claim).slice(0, 60)}" is verified but nothing on the page cites it`);
}

// ---------------------------------------------------------------- report
if (json) {
  console.log(JSON.stringify({ slug, pass: !fails.length, facts: facts.size, required: required.length, failures: fails, warnings: warns }, null, 2));
} else {
  for (const w of warns) console.log(`warn ${w}`);
  if (fails.length) {
    console.log(`FAIL ${slug} fact ledger (${fails.length})`);
    for (const f of fails) console.log(`  - ${f}`);
  } else {
    console.log(`PASS ${slug}: ${facts.size} facts, ${required.length} factual fields all cited`);
  }
}
process.exit(fails.length ? 1 : 0);
