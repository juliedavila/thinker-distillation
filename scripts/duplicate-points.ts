// The same point made in two rendered fields of one page. A REPORT: exit 0 unless --strict.
// Usage: bun scripts/duplicate-points.ts [<slug>] [--threshold <n>] [--min-shared <n>] [--json] [--strict]
// With no slug it reads every live thinker page. --strict exits 1 when any pair is found; nothing
// runs it that way yet, and whether it becomes a gate is the diligence phase's call (DILIGENCE.md).
//
// Why this file exists. "One field should carry a point" has been on the drafting checklist since
// the opening batch, and the cold reader kept catching it anyway: Cunningham's archived-repository
// finding near-verbatim in a frame gloss, in `limits[4]` and in `live_edge.summary`; then Kim,
// Terhorst-North, Hollnagel and on through the logs, nine of the last ten cold reads by
// 2026-10-09. The calibration log asked for this scan in six consecutive entries. Five readers
// checking sentences do not see a proposition repeated in fields they read on different turns,
// and a script reading every field at once does.
//
// What it measures. Each rendered field (`renderedProse` in lib.ts) is cut into sentences, and
// each sentence into content words: lower-cased, quotations removed, stopwords dropped, a crude
// suffix strip so "archived" and "archive" meet. Two sentences in different fields score by
// weighted overlap: the summed weight of the words they share over the summed weight of the
// shorter one. Overlap rather than Jaccard because the defect is usually a short sentence (the
// take, a headline) restated inside a longer one, and Jaccard punishes the length difference.
//
// Why the weights. A word's weight is its inverse frequency across the page's own sentences. A
// term of art (STAMP, the thinker's name, "pipeline" on Farley) appears in a third of the page and
// is nearly free, so two sentences do not pair just because both use the page's vocabulary. A
// word that occurs in two sentences of the whole page and nowhere else is close to the maximum,
// and two sentences sharing several of those are what a reader recognises as the same point.
// Quoted spans are removed before counting, so a quotation repeated on purpose cannot pair.
//
// It is lexical, and so it is blind to a point restated in new words: the Cunningham aphorism
// made twice ("a word that needs a guard rail", "vocabulary that needs a warning label") shares
// almost nothing and scores low. The cold reader still owns that case.
import { ROOT, loadThinkers, renderedProse, sentences, stripQuotes, type Doc } from './lib';

// Tuned on the 28 live pages on 2026-10-15 by reading samples from each score band. Pairs found,
// with the floors below: 428 at 0.50, 282 at 0.60, 171 at 0.70, 127 at 0.75, 84 at 0.80. Between
// 0.50 and 0.60 about half the pairs were two sentences sharing a source's title, year or
// co-author while making different claims (Humble's thesis and extension both on a stage that
// rejects a change), so a threshold there floods. From 0.70 up, nearly every sampled pair was one
// proposition said twice: Larson's "writing it down solves half the problem" in five fields,
// Leveson's Safety-III "is not new" in a gloss and a limit, Cunningham's archived-repository
// finding. The floor is set
// by that last one, the calibration log's own example: its gloss and `limits[3]` pair scores 0.74,
// so 0.75 would lose the case the scan was asked for. The pages do repeat themselves at volume
// (Larson 21 pairs, Cunningham 17, Ross Anderson 15), and the report says so instead of hiding it.
export const THRESHOLD = 0.7;
// A pair needs this many shared content words as well. Short sentences ("Brooks died in 2022.")
// would otherwise reach 1.0 by sharing a name and a year with any longer one. At four, most of the
// extra pairs were bylines: two notes on Gene Kim naming Kevin Behr and George Spafford, a
// `then_read` entry repeating a book's co-author, which is a credit and not a point.
export const MIN_SHARED = 5;
// Sentences with fewer content words than this are never compared, for the same reason.
const MIN_WORDS = 5;

const STOP = new Set(
  (
    'a about above after again against all also although am an and another any are around as at be because been before being ' +
    'below between both but by can could did do does doing done down during each either else even ever every few for from ' +
    'further had has have having he her here hers herself him himself his how however i if in into is it its itself just ' +
    'least less like made make makes many may me might more most much must my neither no nor not now of off on once one ones ' +
    'only onto or other others otherwise our out over own per rather same she should since so some such than that the their ' +
    'theirs them themselves then there these they this those though through thus to too under until up upon us very was we ' +
    'were what when where whether which while who whom whose why will with within without would yet you your ' +
    // Reporting and hedging verbs, which every attributed sentence on the site carries.
    'says said say writes wrote write calls called call puts put argues argued argue account accounts page site ' +
    'two three four five first second later still well often own way ways part parts kind thing things'
  ).split(/\s+/),
);

// A crude stemmer is enough: both sides of a pair go through the same one, so it only has to be
// consistent. Plural, past and gerund endings are the ones that separate a restated point.
const stem = (w: string) =>
  w.length > 5 && w.endsWith('ies') ? w.slice(0, -3) + 'y'
  : w.length > 5 && w.endsWith('ing') ? w.slice(0, -3)
  : w.length > 4 && w.endsWith('ed') ? w.slice(0, -2)
  : w.length > 4 && w.endsWith('es') && !w.endsWith('ses') ? w.slice(0, -2)
  : w.length > 3 && w.endsWith('s') && !w.endsWith('ss') ? w.slice(0, -1)
  : w.endsWith('e') && w.length > 4 ? w.slice(0, -1)
  : w;

export function contentWords(sentence: string): Set<string> {
  const words = stripQuotes(sentence)
    .toLowerCase()
    .replace(/[’']s\b/g, '')
    .split(/[^a-z0-9]+/)
    .filter((w) => w && (w.length >= 3 || /^\d+$/.test(w)) && !STOP.has(w));
  return new Set(words.map(stem));
}

// The content words a sentence writes in lower case: what it says, as against who and when. A
// byline repeated in a reading list shares names, titles and years and nothing else ("With Kevin
// Behr, who has the first byline, and George Spafford" against the Gene Kim background; "*STPA
// Handbook* (2018, with John Thomas)" against the Leveson take), and a restated point always
// shares some of the claim's ordinary words too.
export function commonWords(sentence: string): Set<string> {
  const words = stripQuotes(sentence)
    .replace(/[’']s\b/g, '')
    .split(/[^A-Za-z0-9]+/)
    .filter((w) => /^[a-z]/.test(w) && w.length >= 3 && !STOP.has(w));
  return new Set(words.map(stem));
}
// So a pair must share at least this many of them. At 2 the Kim and Leveson bylines drop out and
// Leveson's Safety-III "is not new" pair stays in, sharing "approach" and "practice" (its other
// shared words, Safety-III and System Safety, are capitalised terms).
export const MIN_COMMON = 2;

export type Unit = { path: string; group: string; sentence: string; words: Set<string>; common: Set<string> };
export type Pair = { score: number; shared: string[]; a: Unit; b: Unit; note?: string };

// Fields that are one rendered item count as one field: a limit's headline summarises its own
// elaboration by design, and an edge's hosted items sit under that edge.
const groupOf = (path: string) => path.replace(/\.(headline|elaboration)$/, '').replace(/^(adjacent_thinkers\[\d+\]).*$/, '$1');

export function units(fields: Array<[string, string]>): Unit[] {
  const out: Unit[] = [];
  for (const [path, text] of fields) {
    for (const s of sentences(text)) out.push({ path, group: groupOf(path), sentence: s, words: contentWords(s), common: commonWords(s) });
  }
  return out;
}

// Inverse frequency over the page's own sentences, as above.
export function weights(us: Unit[]): Map<string, number> {
  const df = new Map<string, number>();
  for (const u of us) for (const w of u.words) df.set(w, (df.get(w) ?? 0) + 1);
  const n = us.length || 1;
  return new Map([...df].map(([w, d]) => [w, Math.log(1 + n / d)]));
}

export function similarity(a: Set<string>, b: Set<string>, wt: Map<string, number>): { score: number; shared: string[] } {
  const sum = (s: Iterable<string>) => [...s].reduce((acc, w) => acc + (wt.get(w) ?? 0), 0);
  const shared = [...a].filter((w) => b.has(w));
  const denom = Math.min(sum(a), sum(b));
  return { score: denom ? sum(shared) / denom : 0, shared };
}

export function duplicatePairs(
  fields: Array<[string, string]>,
  opts: { threshold?: number; minShared?: number; critics?: Set<string> } = {},
): Pair[] {
  const threshold = opts.threshold ?? THRESHOLD;
  const minShared = opts.minShared ?? MIN_SHARED;
  const us = units(fields).filter((u) => u.words.size >= MIN_WORDS);
  const wt = weights(us);
  const pairs: Pair[] = [];
  for (let i = 0; i < us.length; i++) {
    for (let j = i + 1; j < us.length; j++) {
      const [a, b] = [us[i], us[j]];
      if (a.group === b.group) continue;
      const { score, shared } = similarity(a.words, b.words, wt);
      if (score < threshold || shared.length < minShared) continue;
      if (shared.filter((w) => a.common.has(w) && b.common.has(w)).length < MIN_COMMON) continue;
      const pair: Pair = { score: Math.round(score * 100) / 100, shared, a, b };
      // SCHEMA 4.11, Julie's 2026-09-28 ruling: a critic limit repeating its critic edge is the
      // convention (the edge carries the argument, the limit its cost). Kept in the report and
      // marked, so a reader can still flag the limit that restates the argument itself.
      const groups = [a.group, b.group];
      if (opts.critics && groups.some((g) => g.startsWith('limits[')) && groups.some((g) => opts.critics!.has(g))) {
        pair.note = 'critic limit and critic edge (SCHEMA 4.11 convention; flag only if the limit restates the argument)';
      }
      pairs.push(pair);
    }
  }
  return pairs.sort((x, y) => y.score - x.score);
}

export function pagePairs(t: Doc, opts: { threshold?: number; minShared?: number } = {}): Pair[] {
  const critics = new Set(
    ((t.adjacent_thinkers as Array<Record<string, unknown>>) ?? [])
      .map((e, i) => (e?.edge_type === 'critiques' ? `adjacent_thinkers[${i}]` : ''))
      .filter(Boolean),
  );
  return duplicatePairs(renderedProse(t), { ...opts, critics });
}

// Pairs that share a sentence are one point carried in several fields, which is how the cold
// reader files it ("three propositions in five to seven fields each", Farley, 2026-10-09). On
// Larson the half-solved strategy came back as six pairs across four fields; read as pairs that
// is six findings, and it is one. Grouping is transitive over shared sentences, so a chain can
// join two sentences that do not pair directly; every member still pairs with something in it.
export type Point = { fields: string[]; top: number; pairs: Pair[] };
export function pointsOf(pairs: Pair[]): Point[] {
  const parent = new Map<Unit, Unit>();
  const find = (u: Unit): Unit => {
    const p = parent.get(u) ?? u;
    if (p === u) return u;
    const root = find(p);
    parent.set(u, root);
    return root;
  };
  for (const p of pairs) parent.set(find(p.a), find(p.b));
  const byRoot = new Map<Unit, Pair[]>();
  for (const p of pairs) byRoot.set(find(p.a), [...(byRoot.get(find(p.a)) ?? []), p]);
  return [...byRoot.values()]
    .map((ps) => ({
      fields: [...new Set(ps.flatMap((p) => [p.a.path, p.b.path]))],
      top: Math.max(...ps.map((p) => p.score)),
      pairs: ps,
    }))
    .sort((x, y) => y.top - x.top);
}

if (import.meta.main) {
  const argv = process.argv.slice(2);
  const json = argv.includes('--json');
  const strict = argv.includes('--strict');
  const ti = argv.indexOf('--threshold');
  const threshold = ti >= 0 ? Number(argv[ti + 1]) : THRESHOLD;
  const mi = argv.indexOf('--min-shared');
  const minShared = mi >= 0 ? Number(argv[mi + 1]) : MIN_SHARED;
  const target = argv.find((a, i) => !a.startsWith('--') && !['--threshold', '--min-shared'].includes(argv[i - 1]));

  const pages = loadThinkers();
  if (target && !pages.has(target)) {
    console.error(`no live thinker page "${target}" under ${ROOT}/src/content/thinkers`);
    process.exit(1);
  }
  const slugs = target ? [target] : [...pages.keys()].sort();
  const report = slugs.map((slug) => {
    const pairs = pagePairs(pages.get(slug)!, { threshold, minShared });
    return { slug, pairs, points: pointsOf(pairs) };
  });
  const plain = (p: Pair) => ({ score: p.score, shared: p.shared, a: { path: p.a.path, sentence: p.a.sentence }, b: { path: p.b.path, sentence: p.b.sentence }, note: p.note });

  if (json) {
    console.log(JSON.stringify({
      threshold,
      min_shared: minShared,
      pages: report.map((r) => ({
        slug: r.slug,
        pairs: r.pairs.length,
        points: r.points.map((pt) => ({ fields: pt.fields, top: pt.top, pairs: pt.pairs.map(plain) })),
      })),
    }, null, 2));
  } else {
    for (const r of report) {
      if (!r.pairs.length) { if (target) console.log(`${r.slug}: no candidate pairs at ${threshold}`); continue; }
      console.log(`${r.slug}: ${r.points.length} point${r.points.length === 1 ? '' : 's'} in ${r.pairs.length} candidate pair${r.pairs.length === 1 ? '' : 's'}`);
      for (const pt of r.points) {
        console.log(`  point in ${pt.fields.length} fields (top ${pt.top.toFixed(2)}): ${pt.fields.join(', ')}`);
        for (const p of pt.pairs) {
          console.log(`    ${p.score.toFixed(2)}  ${p.a.path}  <>  ${p.b.path}${p.note ? `  [${p.note}]` : ''}`);
          console.log(`          shared: ${p.shared.join(', ')}`);
          console.log(`          a: ${p.a.sentence}`);
          console.log(`          b: ${p.b.sentence}`);
        }
      }
      console.log('');
    }
    if (!target) {
      const pairs = report.reduce((n, r) => n + r.pairs.length, 0);
      const points = report.reduce((n, r) => n + r.points.length, 0);
      console.log(`duplicate-points: ${points} points in ${pairs} candidate pairs across ${slugs.length} pages (threshold ${threshold}, at least ${minShared} shared words)`);
      console.log('  points  pairs  page');
      for (const r of report.filter((r) => r.pairs.length).sort((x, y) => y.points.length - x.points.length || y.pairs.length - x.pairs.length)) {
        console.log(`  ${String(r.points.length).padStart(6)}  ${String(r.pairs.length).padStart(5)}  ${r.slug}`);
      }
    }
    console.log('A candidate is a pair to read, not a defect: one field should carry a point, and the others cite it or drop it.');
  }
  const found = report.some((r) => r.pairs.length);
  process.exit(strict && found ? 1 : 0);
}
