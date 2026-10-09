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
import { existsSync, readFileSync } from 'node:fs';
import { join } from 'node:path';
import { loadThinkers, ROOT } from './lib';
import { pullBy, suggestionsFrom, type Mention } from './queue-signals';

const argv = process.argv.slice(2);
const json = argv.includes('--json');
const sync = argv.includes('--sync');
const dryRun = argv.includes('--dry-run');
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
// Each mention carries the frame it came through, so a credit shared by several holders of one frame
// counts once (queue-signals.ts has the history).
const mentionList: Mention[] = [];
const noteMention = (slug: string, by: string, frame?: string) => {
  if (onSite.has(slug)) return; // already has a page; nothing to pull in
  mentionList.push({ candidate: slug, page: by, frame });
};
for (const [slug, d] of pages) {
  for (const e of (d.adjacent_thinkers ?? []) as Array<Record<string, any>>) noteMention(e.target_slug, slug);
  for (const f of (d.named_frames ?? []) as Array<Record<string, any>>) {
    for (const c of (f.co_originators ?? []) as Array<Record<string, any>>) noteMention(c.slug, slug, f.concept_slug);
    // A frame credited to someone else names them as surely as a co-originator does. Missing this left
    // Aaron Rinehart at zero on 2026-09-28 while the Shortridge page filed security chaos engineering
    // under his name. noteMention already ignores the page's own slug when it has a page.
    if (f.primary_author && f.primary_author !== slug) noteMention(String(f.primary_author), slug, f.concept_slug);
  }
}
const mentions = pullBy(mentionList);

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
    // A joint candidate is titled "A and B" and its edge slug is "a-b"; without this, Skelton and
    // Pais ranked at zero pull while the Fournier page named them.
    .replace(/-and-/g, '-')
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

// Council suggestions from the inclusion records posted on issues since 2026-10-05. Only issues
// updated since then can hold one, which keeps this to a few API calls.
const RECORDS_SINCE = '2026-10-05T00:00:00Z';
const recent = run(['glab', 'api', `projects/${encodeURIComponent(PROJECT)}/issues?state=all&per_page=100&labels=camila:candidate&updated_after=${RECORDS_SINCE}`]);
const noteBodies: string[] = [];
if (recent.ok) {
  for (const i of JSON.parse(recent.out) as Array<Record<string, any>>) {
    const n = run(['glab', 'api', `projects/${encodeURIComponent(PROJECT)}/issues/${i.iid}/notes?per_page=100`]);
    if (n.ok) for (const note of JSON.parse(n.out) as Array<Record<string, any>>) if (!note.system) noteBodies.push(String(note.body ?? ''));
  }
} else console.error('warning: could not read inclusion records; Council counts come from issue bodies only');
const suggested = new Map<string, Set<string>>();
for (const [name, by] of suggestionsFrom(noteBodies)) suggested.set(toSlug(name), by);

const now = Date.now();
const rows: Row[] = issues.map((i) => {
  const name = String(i.title).replace(/^Candidate:\s*/, '').split(/\s+[-—]\s+/)[0].trim();
  const slug = toSlug(name);
  const body = String(i.description ?? '');
  // "Surfaced by the Camille Fournier inclusion Council" and similar.
  const fromBody = [...body.matchAll(/(?:Surfaced|Named) by the ([A-Z][^(,.]*?) inclusion (?:Council|reviewers)/g)].map((m) => toSlug(m[1].trim()));
  const councils = [...new Set([...fromBody, ...(suggested.get(slug) ?? [])])];
  const by = mentions.get(slug);
  return {
    issue: Number(i.iid),
    name,
    slug,
    pull: by?.pull ?? 0,
    pulled_by: by?.pages ?? [],
    councils,
    age_days: Math.floor((now - new Date(i.created_at).getTime()) / 86_400_000),
    ready: (i.labels ?? []).includes('camila:ready-for-review'),
  };
});

// ------------------------------------------------------------------ labels
//
// What gets written back to an issue, and what deliberately does not.
//
// NOT the rank. A rank is a position in a list that changes every time a page ships, so a number
// written into an issue on Monday is wrong by Friday and nothing tells you. Storing a computed
// value where it can rot silently is the mistake this repository has now made twice, with a
// hand-kept Lens list that drifted inside a single run and a "refresh pending" badge that went
// unread for four months. The ordering stays computed, and `bun scripts/queue.ts` is where you
// read it.
//
// What does get written are two facts that flip only on durable events, so a stale one is visible
// rather than quietly wrong:
//
//   queue:pulled     at least one existing page already names this person. Changes only when a
//                    page ships or an edge is removed.
//   queue:unargued   nothing names them, no Council argued for them, and they have sat past the
//                    stale threshold. This is the "decide or park" flag, and it is the one the
//                    sort would otherwise bury forever.
//
// Both are recomputed and re-synced on every run, so the labels follow the graph rather than
// drifting from it. The sync only ever touches the `queue:` namespace and never replaces an
// issue's whole label set, so `camila:` labels are left alone.
const STALE_DAYS = 60;
const QUEUE_LABELS = ['queue:pulled', 'queue:unargued'];
const desiredLabels = (r: Row): string[] => {
  const want: string[] = [];
  if (r.pull > 0) want.push('queue:pulled');
  if (r.pull === 0 && r.councils.length === 0 && r.age_days > STALE_DAYS) want.push('queue:unargued');
  return want;
};

// Lexicographic, never a blended score: graph pull, then Council support, then age.
// Two kinds of open issue are not candidates, and ranking them anyway is how the queue went wrong
// on 2026-09-25: Sean Goedecke, rejected 5 to 0 and parked to 2027, ranked second, and three
// thinkers whose pages had shipped (Humble, Cunningham, Terhorst-North) sat in the queue for days.
// A parked slug is held until its recheck date, read from the same _working/_parked.md that
// staleness.ts reads, so the two scripts agree on what a park means. A slug that already has a
// page is held and named, because the fix is closing the issue, not researching the person.
const parkedUntil = new Map<string, string>();
{
  const p = join(ROOT, '_working', '_parked.md');
  if (existsSync(p)) {
    for (const line of readFileSync(p, 'utf8').split('\n')) {
      const m = line.match(/^-\s+(\S+)\s*\|.*\|\s*recheck\s+(\d{4}-\d{2}-\d{2})/);
      if (m) parkedUntil.set(m[1], m[2]);
    }
  }
}
const today = new Date(now).toISOString().slice(0, 10);
const held: Array<Row & { held: string }> = [];
for (let i = rows.length - 1; i >= 0; i--) {
  const r = rows[i];
  const until = parkedUntil.get(r.slug);
  const why = onSite.has(r.slug) ? 'has a page; close the issue' : until && until > today ? `parked until ${until}` : '';
  if (why) { held.push({ ...r, held: why }); rows.splice(i, 1); }
}

rows.sort((a, b) => b.pull - a.pull || b.councils.length - a.councils.length || b.age_days - a.age_days);

const shown = top > 0 ? rows.slice(0, top) : rows;

if (sync) {
  let changed = 0;
  for (const r of rows) {
    const current: string[] = (issues.find((i) => Number(i.iid) === r.issue)?.labels ?? []).filter((l: string) => QUEUE_LABELS.includes(l));
    const want = desiredLabels(r);
    const add = want.filter((l) => !current.includes(l));
    const remove = current.filter((l) => !want.includes(l));
    if (!add.length && !remove.length) continue;
    changed++;
    console.log(`  #${r.issue} ${r.name}: ${[...add.map((l) => `+${l}`), ...remove.map((l) => `-${l}`)].join(' ')}`);
    if (dryRun) continue;
    const args = ['glab', 'api', '--method', 'PUT', `projects/${encodeURIComponent(PROJECT)}/issues/${r.issue}`];
    if (add.length) args.push('-f', `add_labels=${add.join(',')}`);
    if (remove.length) args.push('-f', `remove_labels=${remove.join(',')}`);
    const w = run(args);
    if (!w.ok) console.error(`    failed: ${w.err.trim().slice(0, 160)}`);
  }
  console.log(changed ? `\n${changed} issue(s) ${dryRun ? 'would change' : 'updated'}.` : 'Labels already match the graph; nothing to do.');
  console.log('Only the queue: namespace is touched. The rank itself is never written to an issue, because it changes whenever a page ships.');
} else if (json) {
  console.log(JSON.stringify({ ranked: shown.map((r) => ({ ...r, labels: desiredLabels(r) })), total: rows.length, held }, null, 2));
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
  const unargued = rows.filter((r) => r.pull === 0 && r.councils.length === 0 && r.age_days > STALE_DAYS);
  if (unargued.length) {
    console.log(
      `\n${unargued.length} candidate(s) have sat over ${STALE_DAYS} days with nothing naming them and no Council arguing for ` +
        `them: ${unargued.map((r) => `${r.name} (#${r.issue}, ${r.age_days}d)`).join(', ')}. Age is only a tiebreak here, so they ` +
        `will never rise on their own. Either research one or park it with a recheck date in _working/_parked.md.`,
    );
  }
  if (held.length) {
    console.log(`\nHeld out of the ranking: ${held.map((r) => `${r.name} (#${r.issue}, ${r.held})`).join(', ')}.`);
  }
  console.log(
    `\nThis ranks research order and nothing else. Whether a candidate belongs on the site is decided by the uptake check ` +
      `and the inclusion Council, on research this script has not done.`,
  );
}
