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
//                  A fact confirmed after the page shipped adds `| re-verified YYYY-MM-DD` and
//                  keeps its original date, so it can never read as sourced at intake.
//   page-claims.md one line per factual field, the mapping. `- named_frames[0].attribution [S:1]`
// sources.md stays what it is: the prose research record a human reads.
import { existsSync, readFileSync } from 'node:fs';
import { join } from 'node:path';
import { parseFrontmatter, thinkerPath, workingDir, ROOT, oneLine, recordsAntecedentSearch, exemptList } from './lib';
import { requiredFields } from './decay';

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
type Fact = { id: string; claim: string; url: string; checked: string; reverified: string };
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
    // A fact confirmed after the page shipped is re-verified, never sourced, and it says so with
    // its own date. `checked` is when the drafter took the claim FROM the source and is never
    // rewritten. The distinction matters because the two are otherwise indistinguishable on disk
    // and only one of them means anything: a ledger built at intake records where a claim came
    // from, while a ledger assembled afterwards searches for a URL that fits a claim already
    // published, which is confirmation-seeking by construction. Stamping today's date on a
    // months-old assertion would make that look freshly verified (Council, 2026-09-20).
    const reverified = (m[2].match(/re-verified\s+(\d{4}-\d{2}-\d{2})/) ?? [])[1] ?? '';
    const where = `${id} (facts.md line ${i + 1})`;
    if (facts.has(id)) fail('ledger', `duplicate id ${where}`);
    if (!claim) fail('ledger', `${where} has no claim text`);
    if (!url) fail('ledger', `${where} has no URL. A fact with no source is a seat's opinion.`);
    if (!checked) fail('ledger', `${where} has no check date (YYYY-MM-DD)`);
    facts.set(id, { id, claim, url, checked, reverified });
  }
  if (!facts.size) fail('ledger', `${factsPath} contains no "- [S:n] claim | url | date" lines`);
}

// ------------------------------------------------- what the page must account for
// Derived from the page itself, so a new frame or a new critic cannot be forgotten. The list now
// lives in `decay.ts`, shared with `staleness.ts`, so coverage and recheck read one definition.
const page = parseFrontmatter(pagePath);
const required: Array<[string, string]> = requiredFields(page, isConcept).map((f) => [f.path, f.why]);

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

// An `original` frame needs its antecedent search on the ledger, cited by the attribution line.
// SKILL.md has required the search since the first commit and nothing recorded that it happened,
// so the requirement could not fail: the cold reader found an `original` frame with no search
// behind it on Cunningham, then on three Alexander frames and two Gene Kim frames in one batch,
// while Karpathy's page in that same batch did it correctly. The convention that page set is the
// one checked here: the attribution line cites a fact whose text says "antecedent search", and
// that fact records the method and what it found. A search that finds nothing is still a line.
//
// Pages that shipped before this check are listed in antecedent-exempt.txt, which may only shrink.
// The line has to BE the search record; what counts as one is `recordsAntecedentSearch` in
// `lib.ts`, shared with `firstness.ts` so the report and the gate cannot drift apart.
const antecedentExempt = exemptList('antecedent-exempt.txt');
if (!isConcept && !antecedentExempt.has(slug)) {
  for (const [i, f] of ((page.named_frames as Array<Record<string, unknown>>) ?? []).entries()) {
    if (f?.attribution_kind !== 'original') continue;
    const path = `named_frames[${i}].attribution`;
    const searched = (covered.get(path) ?? []).some((id) => recordsAntecedentSearch(facts.get(id)?.claim ?? ''));
    if (!searched) {
      fail('antecedent', `${path} ("${f?.display_name ?? f?.concept_slug}") is original, and none of the facts it cites records an antecedent search. Add one "[S:n] The antecedent search for ..." line with its method and result, and cite it here.`);
    }
  }
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
    const rv = [...facts.values()].filter((f) => f.reverified).length;
  console.log(
    `PASS ${slug}: ${facts.size} facts${rv ? ` (${facts.size - rv} sourced at intake, ${rv} re-verified after publication)` : ''}, ${required.length} factual fields all cited`,
  );
  }
}
process.exit(fails.length ? 1 : 0);
