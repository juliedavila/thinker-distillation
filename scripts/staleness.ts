// What is due for a recheck, and nothing else.
// Usage: bun scripts/staleness.ts [--strict] [--json]
//
// Backstage by design. This prints to a terminal and to merge-request checks; it renders nothing
// to a reader. The Council of 2026-09-20 was unanimous that a reader-facing staleness badge earns
// distrust by the opposite mechanism to the "Where This Breaks" section: limits are argued,
// specific and signed, and a badge is generic and unargued. Readers get one plain provenance line,
// "This reading: <date>", with no threshold and no colour, and the reader supplies the judgment.
//
// --strict exits non-zero when anything is due. Run it on merge requests, NEVER inside
// `astro build`. `.gitlab-ci.yml` builds every commit on the default branch, so a time-based
// failure inside the build would one day block deploying an unrelated typo fix. Same check, same
// six lines, no time bomb.
//
// THE TRIGGER
//
//   due = pages where volatileFields > 0 AND daysSince(last_updated) > 365
//
// Both halves matter. The 365 comes from Ahmadzai 2013, where an annual cadence beat six-monthly
// and about 70% of rechecks came back low priority; it is a cadence, not a prediction about any
// page. The volatile count comes from `decay.ts`, and it is what stops this from being a clock
// that fires on everything: a deceased thinker's employers are a closed set, so Brooks has zero
// volatile fields and never surfaces however old the page gets.
//
// The trigger is computed here rather than watched by anyone. Every trigger this project has
// written in prose has gone unwatched, including a "refresh pending" badge that sat on a page for
// four months. It fires at merge or it does not fire.
import { existsSync, readFileSync } from 'node:fs';
import { join } from 'node:path';
import { loadThinkers, daysSince, ROOT } from './lib';
import { volatileCount } from './decay';

// Parked candidates are due on their own clock, read from `_working/_parked.md`. They live here
// rather than in a separate script because "what is due" should have one answer and one place to
// ask it. `attempts` is the give-up rule: past three, the next recheck is not scheduled
// automatically.
const GIVE_UP_AFTER_ATTEMPTS = 3;
type Parked = { slug: string; why: string; recheck: string; attempts: number; days: number; due: boolean };

function loadParked(): Parked[] {
  const p = join(ROOT, '_working', '_parked.md');
  if (!existsSync(p)) return [];
  const out: Parked[] = [];
  for (const line of readFileSync(p, 'utf8').split('\n')) {
    const m = line.match(/^-\s+(\S+)\s*\|(.*)\|\s*recheck\s+(\d{4}-\d{2}-\d{2})\s*\|\s*attempts\s+(\d+)/);
    if (!m) continue;
    const days = daysSince(m[3]);
    out.push({ slug: m[1], why: m[2].trim(), recheck: m[3], attempts: Number(m[4]), days, due: days >= 0 });
  }
  return out;
}

const argv = process.argv.slice(2);
const strict = argv.includes('--strict');
const json = argv.includes('--json');

const RECHECK_AFTER_DAYS = 365;
// Above this many pages due at once, a one-seat recheck is no longer the right shape and the full
// machinery should be convened instead.
const ESCALATE_ABOVE = 5;
// The existing Live Edge mechanism, which predates all of this and stays as it is.
const LIVE_EDGE_STALE_DAYS = 90;

type Row = {
  slug: string;
  status: string;
  last_updated: string;
  days: number;
  volatile_fields: number;
  live_edge_days: number | null;
  due: boolean;
  reason: string;
};

const rows: Row[] = [];
for (const [slug, d] of loadThinkers()) {
  const days = daysSince(d.last_updated);
  const volatile_fields = volatileCount(d);
  const observed = d.live_edge?.last_observed;
  const live_edge_days = observed ? daysSince(observed) : null;
  const due = volatile_fields > 0 && days > RECHECK_AFTER_DAYS;
  const liveEdgeDue = live_edge_days !== null && live_edge_days > LIVE_EDGE_STALE_DAYS;
  rows.push({
    slug,
    status: String(d.status ?? ''),
    last_updated: String(d.last_updated).slice(0, 10),
    days,
    volatile_fields,
    live_edge_days,
    due: due || liveEdgeDue,
    reason: due
      ? `${volatile_fields} volatile field(s), ${days} days since last revision`
      : liveEdgeDue
        ? `live edge last observed ${live_edge_days} days ago`
        : volatile_fields === 0
          ? 'nothing on this page can go out of date'
          : `${RECHECK_AFTER_DAYS - days} days until due`,
  });
}
rows.sort((a, b) => Number(b.due) - Number(a.due) || b.days - a.days);

const due = rows.filter((r) => r.due);
const parked = loadParked();
const parkedDue = parked.filter((p) => p.due);

if (json) {
  // The shape the pipeline's run plan reads to decide whether a recheck rides along with a batch.
  console.log(JSON.stringify({ recheck_after_days: RECHECK_AFTER_DAYS, escalate_above: ESCALATE_ABOVE, due: due.map((r) => ({ slug: r.slug, days: r.days, volatile_fields: r.volatile_fields, reason: r.reason })), parked_due: parkedDue, parked, rows }, null, 2));
} else {
  console.log('page                 status         revised      days  volatile  note');
  for (const r of rows) {
    console.log(
      `${r.slug.padEnd(20)} ${r.status.padEnd(14)} ${r.last_updated}  ${String(r.days).padStart(5)}  ${String(r.volatile_fields).padStart(8)}  ${r.due ? 'DUE: ' : ''}${r.reason}`,
    );
  }
  const frozen = rows.filter((r) => r.volatile_fields === 0);
  console.log(`\n${due.length} of ${rows.length} page(s) due for recheck (cadence: ${RECHECK_AFTER_DAYS} days).`);
  if (frozen.length) {
    console.log(`${frozen.length} page(s) can never come due, because nothing on them is generated by anything still happening: ${frozen.map((r) => r.slug).join(', ')}.`);
  }
  if (parked.length) {
    console.log(`\nparked candidates: ${parked.length}, of which ${parkedDue.length} due.`);
    for (const p of parked) {
      const note = p.due
        ? p.attempts >= GIVE_UP_AFTER_ATTEMPTS
          ? `DUE, and parked ${p.attempts} times already: take this one to Julie rather than rescheduling it`
          : 'DUE for a fresh inclusion case, which must answer the last rejection rather than repeat the last case'
        : `due ${p.recheck}, in ${-p.days} days`;
      console.log(`  ${p.slug.padEnd(20)} attempts ${p.attempts}  ${note}`);
    }
  }
  if (due.length > ESCALATE_ABOVE) {
    console.log(`\nMore than ${ESCALATE_ABOVE} due at once. A one-seat recheck is the wrong shape for that; convene the full review instead.`);
  }
  if (strict && due.length) {
    console.log(`\nFAIL --strict: ${due.length} page(s) due. Run a recheck for ${due.map((r) => r.slug).join(', ')} before merging.`);
  }
}

// A page is only ever surfaced here. Nothing in this script edits a page, and nothing it prints
// reaches a reader. What happens next is `review-policy.ts --recheck <slug>`.
process.exit(strict && (due.length || parkedDue.length) ? 1 : 0);
