// Rank the candidate backlog. Usage: bun scripts/queue.ts [--json] [--top N]
//
// Why this exists. The pipeline files candidates faster than it ships pages: one run shipped two
// thinkers and filed ten, because every inclusion seat names adjacent people and stage 8 files all
// of them. Julie's call on 2026-09-20 was to keep the backlog and rank it, on the grounds that a
// healthy backlog is a good problem. So this ranks; it does not prune, and it does not decide.
//
// WHAT IT RANKS ON, AND WHAT IT REFUSES TO
//
// Only signals already on disk or already written by a Council. No hand-tuned weights and no
// invented quality score, for two reasons this project has already learned the hard way. A
// weighted sum whose coefficients someone chose by feel reintroduces exactly the opacity that
// disqualified PageRank for the neighbour ranking, and Asudeh's work on stable rankings is about
// how hard those weights are to justify. And anything a human has to maintain per candidate dies:
// exactly one of thirteen pages ever carried the site's other optional per-page field.
//
// So the ordering is lexicographic over three observable facts, not a blended score:
//
//   1. GRAPH PULL. How many existing pages already name this person, as an adjacent thinker or as
//      a frame's co-originator. This is the strongest signal because it is the least speculative:
//      those pages already decided this person mattered enough to name. Shipping them converts
//      dead names into live links and promotes edges that already exist, which is worth more to a
//      reader than an isolated new node. Counted as DISTINCT pages, not total mentions: Beck is named
//      five times but across only two pages, and two live links is what shipping him actually buys.
//   2. COUNCIL SUPPORT. How many distinct inclusion Councils named them, parsed from the issue
//      body. A candidate surfaced independently by two Councils has two panels' judgment behind
//      them rather than one.
//   3. AGE. Oldest first, but only as a tiebreak within the first two, so this does NOT stop a
//      candidate rotting at the bottom. A candidate nobody has named and no Council has argued for
//      will sit last indefinitely, and that is the correct answer to "should we do this one?" only
//      for as long as nobody revisits it. The script surfaces those separately below rather than
//      pretending the sort handles them: the honest move on a candidate that has sat unargued for
//      months is to park it with a recheck date in `_working/_parked.md`, not to leave it queued.
//
// What it deliberately does NOT rank on: any guess about whether the candidate will clear the
// inclusion filter. That is what the uptake check and the inclusion Council are for, and it needs
// research this script has not done. A high rank here means "research this one next," never
// "this one belongs on the site."
import { loadThinkers } from './lib';

const argv = process.argv.slice(2);
const json = argv.includes('--json');
const topIdx = argv.indexOf('--top');
const top = topIdx > -1 ? Number(argv[topIdx + 1]) : 0;
const PROJECT = 'juliedavila/thinker-distillery';

const run = (cmd: string[]) => {
  const p = Bun.spawnSync(cmd, { stdout: 'pipe', stderr: 'pipe' });
  return { ok: p.exitCode === 0, out: p.stdout.toString(), err: p.stderr.toString() };
};

// --------------------------------------------------------------- graph pull
const pages = loadThinkers();
const onSite = new Set(pages.keys());
const mentions = new Map<string, Set<string>>();
const noteMention = (slug: string, by: string) => {
  if (onSite.has(slug)) return; // already has a page; nothing to pull in
  mentions.set(slug, (mentions.get(slug) ?? new Set()).add(by));
};
for (const [slug, d] of pages) {
  for (const e of (d.adjacent_thinkers ?? []) as Array<Record<string, any>>) noteMention(e.target_slug, slug);
  for (const f of (d.named_frames ?? []) as Array<Record<string, any>>) {
    for (const c of (f.co_originators ?? []) as Array<Record<string, any>>) noteMention(c.slug, slug);
  }
}

// ------------------------------------------------------------------- issues
const res = run(['glab', 'api', `projects/${encodeURIComponent(PROJECT)}/issues?state=opened&per_page=100&labels=camila:candidate`]);
if (!res.ok) {
  console.error(`could not read issues from GitLab:\n${res.err.trim().slice(0, 300)}`);
  process.exit(1);
}
let issues: Array<Record<string, any>>;
try {
  issues = JSON.parse(res.out);
} catch {
  console.error('GitLab returned something that is not JSON');
  process.exit(1);
}

const toSlug = (name: string) =>
  name
    .normalize('NFD')
    .replace(/[̀-ͯ]/g, '')
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-|-$/g, '');

type Row = {
  issue: number;
  name: string;
  slug: string;
  pull: number;
  pulled_by: string[];
  councils: string[];
  age_days: number;
  ready: boolean;
};

const now = Date.now();
const rows: Row[] = issues.map((i) => {
  const name = String(i.title).replace(/^Candidate:\s*/, '').split(/\s+[-—]\s+/)[0].trim();
  const slug = toSlug(name);
  const body = String(i.description ?? '');
  // "Surfaced by the Camille Fournier inclusion Council" and similar.
  const councils = [...new Set([...body.matchAll(/Surfaced by the ([A-Z][^(,.]*?) inclusion Council/g)].map((m) => m[1].trim()))];
  const by = mentions.get(slug);
  return {
    issue: Number(i.iid),
    name,
    slug,
    pull: by?.size ?? 0,
    pulled_by: [...(by ?? [])],
    councils,
    age_days: Math.floor((now - new Date(i.created_at).getTime()) / 86_400_000),
    ready: (i.labels ?? []).includes('camila:ready-for-review'),
  };
});

// Lexicographic, never a blended score: graph pull, then Council support, then age.
rows.sort((a, b) => b.pull - a.pull || b.councils.length - a.councils.length || b.age_days - a.age_days);

const shown = top > 0 ? rows.slice(0, top) : rows;

if (json) {
  console.log(JSON.stringify({ ranked: shown, total: rows.length }, null, 2));
} else {
  console.log(`${rows.length} open candidates, ranked. Graph pull first, then how many Councils named them, then age.\n`);
  console.log('  #   candidate                   pull  councils  age   already named on');
  for (const r of shown) {
    console.log(
      `  ${String(r.issue).padStart(3)} ${r.name.slice(0, 26).padEnd(27)} ${String(r.pull).padStart(4)}  ${String(r.councils.length).padStart(8)}  ${String(r.age_days).padStart(3)}d  ${r.pulled_by.slice(0, 4).join(', ') || '(nothing yet)'}`,
    );
  }
  const connected = rows.filter((r) => r.pull > 0);
  console.log(
    `\n${connected.length} of ${rows.length} are already named on a page, so shipping them turns a dead name into a live link ` +
      `and promotes an edge that already exists. The rest would arrive as isolated nodes, which is not a reason to skip them, ` +
      `only a reason they sort lower.`,
  );
  // Age is only a tiebreak, so anything with no pull and no Council support never rises. Say so
  // rather than letting the sort quietly bury it.
  const STALE_DAYS = 60;
  const unargued = rows.filter((r) => r.pull === 0 && r.councils.length === 0 && r.age_days > STALE_DAYS);
  if (unargued.length) {
    console.log(
      `\n${unargued.length} candidate(s) have sat over ${STALE_DAYS} days with nothing naming them and no Council arguing for ` +
        `them: ${unargued.map((r) => `${r.name} (#${r.issue}, ${r.age_days}d)`).join(', ')}. Age is only a tiebreak here, so they ` +
        `will never rise on their own. Either research one or park it with a recheck date in _working/_parked.md.`,
    );
  }
  console.log(
    `\nThis ranks research order and nothing else. Whether a candidate belongs on the site is decided by the uptake check ` +
      `and the inclusion Council, on research this script has not done.`,
  );
}
