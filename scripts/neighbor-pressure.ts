// How much foreground churn is left in the neighbour graph, and where it comes from.
// Usage: bun scripts/neighbor-pressure.ts [--json]
//
// Why this file exists. Lane B's research says to measure churn before trying to reduce it, and
// that is right: the first diagnosis of the problem was wrong twice over.
//
// It was not "the ranking is unstable". It was not even, quite, the two-bucket jump that Lane B
// named, where publishing a thinker moves every edge citing them from rank bucket 2 or 3 to
// bucket 0. Promotion alone evicts nobody: an off-site neighbour that was already in the
// foreground stays in it and merely becomes clickable, and the totals do not move.
//
// The actual driver is narrower. A new page adds *return edges* to the pages it links to. On a
// page already at the cap, that new edge is guaranteed a slot, because an on-site neighbour is
// unconditionally foreground, so something else has to leave. Churn is therefore a function of
// how many pages sit exactly at the cap, which is what this script counts.
import { loadThinkers } from './lib';

const json = process.argv.includes('--json');
const CAP = 7;

const pages = loadThinkers();
const slugs = new Set(pages.keys());

type Row = { slug: string; onSite: number; offSiteForeground: number; foreground: number; slack: number };
const rows: Row[] = [];

for (const [slug, d] of pages) {
  const edges = (d.adjacent_thinkers ?? []) as Array<Record<string, any>>;
  const onSite = edges.filter((e) => slugs.has(e.target_slug) && e.render_tier !== 'deep').length;
  const offSiteForeground = edges.filter(
    (e) => !slugs.has(e.target_slug) && (e.render_tier ?? 'foreground') === 'foreground',
  ).length;
  const foreground = onSite + offSiteForeground;
  rows.push({ slug, onSite, offSiteForeground, foreground, slack: Math.max(CAP, onSite) - foreground });
}
rows.sort((a, b) => a.slack - b.slack || b.onSite - a.onSite);

const atCap = rows.filter((r) => r.slack <= 0);
// Each new page adds a return edge to roughly this many existing pages. Measured, not guessed:
// Larson landed 4 and Willison 3 in the 2026-09-17 run.
const RETURN_EDGES_PER_PAGE = 3.5;
const queued = Number(process.env.QUEUED ?? 7);

if (json) {
  console.log(JSON.stringify({ cap: CAP, rows, at_cap: atCap.length, queued }, null, 2));
} else {
  console.log(`page                 onSite  offSiteFg  foreground  slack`);
  for (const r of rows) {
    const flag = r.slack <= 0 ? '  <- at cap' : '';
    console.log(
      `${r.slug.padEnd(20)} ${String(r.onSite).padStart(6)} ${String(r.offSiteForeground).padStart(10)} ` +
        `${String(r.foreground).padStart(11)} ${String(r.slack).padStart(6)}${flag}`,
    );
  }
  console.log(`\n${atCap.length} of ${rows.length} pages sit exactly at the cap, so the next return edge on any of them evicts someone.`);

  const share = atCap.length / rows.length;
  const projected = Math.round(queued * RETURN_EDGES_PER_PAGE * share);
  console.log(
    `With ${queued} candidates queued and about ${RETURN_EDGES_PER_PAGE} return edges each, roughly ` +
      `${projected} more evictions are coming before the queue is drained.`,
  );

  // The cap stops binding once a page has CAP on-site neighbours, because the limit is
  // max(CAP, onSite). Off-site neighbours all collapse, which is fine, and on-site neighbours then
  // grow without any limit at all, which is not.
  const unbounded = rows.filter((r) => r.onSite >= CAP);
  console.log(
    `\n${unbounded.length} page(s) already have ${CAP} or more on-site neighbours. Past that point the cap ` +
      `stops binding: off-site neighbours all collapse and on-site ones grow unbounded, because the limit is ` +
      `max(${CAP}, onSite). At a roster of 40 to 60 that is the layout problem, not churn.`,
  );
}
