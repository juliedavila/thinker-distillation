// The review-round rule, as code. Usage: bun scripts/review-policy.ts <slug> [slug...] [--json]
//
// Why this file exists: on 2026-09-17 the three-round rule for `mode-a` pages was written in
// SCHEMA.md section 7 and nowhere else, and two pages shipped with one round because the skill
// that drove the work never said so. A rule that lives only in prose gets read by whoever
// remembers to read it. This script is the one place the round count is decided, and both
// SKILL.md and the pipeline workflow call it instead of restating the rule.
//
// Rounds are a floor, never a ceiling. Dissent after the last planned round raises the count
// (SCHEMA section 7 step 5), which is why `escalation` is part of the output.
import { parseFrontmatter, thinkerPath, loadThinkers } from './lib';

const args = process.argv.slice(2);
const json = args.includes('--json');
const recheck = args.includes('--recheck');
const slugs = args.filter((a) => !a.startsWith('--'));
if (!slugs.length) {
  console.error('usage: bun scripts/review-policy.ts <slug> [slug...] [--json] [--recheck]');
  process.exit(1);
}

// A recheck is not a review. A review asks whether a new page is good enough to ship; a recheck
// asks whether a page that already shipped is still true. It is deliberately the cheapest thing
// in this repository, because Butler 2023 found 30 search updates producing 3 published revisions
// and a recheck that costs what a review costs will simply never be run.
//
// Phases are separated, after Featured Article Review: the first pass surveys and returns no
// verdict at all, and only the second may change the page. That separation is what keeps a survey
// from turning into a rewrite nobody asked for.
//
// It lives here rather than in a script of its own so the round count stays in one place. The
// three-round rule for mode-a pages once lived in SCHEMA and nowhere else, and two pages shipped
// with a single round because the skill driving the work never mentioned it.
if (recheck) {
  const plan = slugs.map((slug) => {
    const page = (() => {
      try {
        return parseFrontmatter(thinkerPath(slug));
      } catch {
        console.error(`no page for "${slug}"`);
        process.exit(1);
      }
    })();
    return {
      slug,
      doctrine_mode: String(page.doctrine_mode ?? ''),
      kind: 'recheck',
      transcript_suffix: 'recheck',
      phases: [
        {
          phase: 1,
          name: 'survey',
          seats: [3],
          verdict: false,
          brief: '.claude/skills/add-thinker/briefs/recheck-survey.md',
          does: 'Re-verify every volatile field against its source and report what has changed. Returns findings only, never a verdict, and never edits the page.',
        },
        {
          phase: 2,
          name: 'adjudicate',
          seats: [0],
          verdict: true,
          brief: '.claude/skills/add-thinker/briefs/review-adjudicate.md',
          does: 'Read the survey and decide. Only this phase may change the page, and a contradiction with a live claim opens a merge request rather than a silent edit.',
        },
      ],
      escalation:
        'If the survey finds a contradiction with a claim the page makes, phase 2 opens a merge request hedging or removing that claim, with the contradiction named at the top of the description. It never unpublishes, never edits silently, and never parks a page that has already shipped.',
    };
  });
  if (json) {
    console.log(JSON.stringify({ kind: 'recheck', plans: plan }, null, 2));
  } else {
    for (const p of plan) {
      console.log(`${p.slug} (${p.doctrine_mode}): recheck, ${p.phases.length} phases, transcript suffix -${p.transcript_suffix}`);
      for (const ph of p.phases) {
        console.log(`  phase ${ph.phase} (${ph.name}): ${ph.seats[0] === 0 ? 'adjudicator' : `seat ${ph.seats[0]}`}, ${ph.verdict ? 'returns a verdict and may change the page' : 'returns findings only, no verdict, no edits'}`);
        console.log(`    ${ph.does}`);
      }
      console.log(`  escalation: ${p.escalation}`);
    }
  }
  process.exit(0);
}

const ALL_SEATS = [1, 2, 3, 4, 5];
// Seats 3 (grounding and fact auditor) and 5 (novelty and byline) are the two that catch what a
// rewrite introduces, which is the whole job of a round after the first. Every run in the
// calibration log that found a new problem in round 2 found it through one of these two.
const REWRITE_AUDIT_SEATS = [3, 5];

type Plan = {
  slug: string;
  doctrine_mode: string;
  rounds: number;
  transcript_suffix: 'debate' | 'quick';
  seats_by_round: Record<string, number[]>;
  // 'adjudication' means one pass that reads rounds 1 and 2 and calls it, instead of five seats.
  // An empty seat list in seats_by_round is what that looks like.
  round3_mode?: 'adjudication' | 'full';
  // The measurement that rides along with an adjudicated round 3, never a check. Present only
  // when there is one to run, so a caller can treat its absence as "no control this round".
  control?: {
    when: string;
    runs_after: string;
    sees: string;
    writes: string;
    gates: boolean;
    reads_as: string;
  };
  reason: string;
  escalation: string;
};

const plans: Plan[] = slugs.map((slug) => {
  const page = (() => {
    try {
      return parseFrontmatter(thinkerPath(slug));
    } catch {
      const known = [...loadThinkers().keys()].join(', ');
      console.error(`no page for "${slug}". Known slugs: ${known}`);
      process.exit(1);
    }
  })();

  const mode = String(page.doctrine_mode ?? '');
  if (mode === 'mode-a') {
    return {
      slug,
      doctrine_mode: mode,
      rounds: 3,
      transcript_suffix: 'debate',
      // Round 3 is one adjudication pass, not five seats. Across the four runs recorded in
      // calibration.md, round 3 ended in unanimous acceptance every time and changed no page,
      // while rounds 1 and 2 caught something on every run. Julie approved the narrowing on
      // 2026-09-17: rounds 1 and 2 keep all five seats, and round 3 only gets them back when
      // round 2 leaves dissent, which is the case the evidence never covered.
      seats_by_round: { '1': ALL_SEATS, '2': ALL_SEATS, '3': [] },
      round3_mode: 'adjudication',
      // The control belongs HERE, in the one place the round rule lives, and not only in the
      // workflow and the skill. Leaving it out of this output is how it went missing: on
      // 2026-09-22 the first page ever to reach the adjudicated branch shipped without the
      // measurement, and the shipping stage traced the cause straight back to this file saying
      // nothing about it. That is the identical failure to the three-round rule living in
      // SCHEMA section 7 alone, which let two mode-a pages ship with one round.
      control: {
        // Only on the adjudicated branch. An escalated round 3 is five seats again, which is the
        // thing being compared against, so there is nothing to control for.
        when: 'round3_mode is adjudication',
        runs_after: 'the round 3 editor applies the adjudicator edits, so it reads the text that ships',
        sees: 'the finished pages, their grounding packs, claims maps and ledgers, and nothing under _working/_council/',
        writes: 'round-3-unanchored-control.md, beside the adjudicator report',
        gates: false,
        reads_as: 'stricter than the adjudicator reverses the 2026-09-17 narrowing; more lenient means nothing, because it saw less',
      },
      reason: 'mode-a pages carry doctrine, so SCHEMA section 7 step 5 requires three rounds. Rounds 1 and 2 are the full Council; round 3 converges.',
      escalation:
        'If ANY verdict in round 2 is below ACCEPT-WITH-EDITS, round 3 reverts to all five seats. ' +
        'Any REVISE or REJECT left after round 3 goes to Julie. Never ship over it.',
    };
  }
  return {
    slug,
    doctrine_mode: mode || 'unset',
    rounds: 1,
    transcript_suffix: 'quick',
    seats_by_round: { '1': ALL_SEATS },
    reason: `${mode || 'unset'} pages get one round; dissent adds rounds rather than the mode adding them up front.`,
    escalation:
      `Two or more REJECT in round 1 promotes this page to the three-round debate. ` +
      `Any REVISE sends the draft back to the dissenting seats plus seats ${REWRITE_AUDIT_SEATS.join(' and ')}, ` +
      `because a rewrite can add a new unsupported claim. Two revision rounds at most; a third REVISE goes to Julie.`,
  };
});

if (json) {
  console.log(JSON.stringify({ rewrite_audit_seats: REWRITE_AUDIT_SEATS, plans }, null, 2));
} else {
  for (const p of plans) {
    console.log(`${p.slug} (${p.doctrine_mode}): ${p.rounds} round${p.rounds > 1 ? 's' : ''}, transcript suffix -${p.transcript_suffix}`);
    for (const [round, seats] of Object.entries(p.seats_by_round)) {
      console.log(`  round ${round}: ${seats.length ? `seats ${seats.join(', ')}` : 'one adjudication pass over the rounds 1 and 2 transcripts'}`);
    }
    if (p.control) {
      console.log(`  control seat: one unanchored pass, ${p.control.when}`);
      console.log(`    runs after: ${p.control.runs_after}`);
      console.log(`    sees: ${p.control.sees}`);
      console.log(`    writes: ${p.control.writes}`);
      console.log(`    gates shipping: ${p.control.gates ? 'yes' : 'no, it is a measurement'}`);
      console.log(`    how to read it: ${p.control.reads_as}`);
    }
    console.log(`  why: ${p.reason}`);
    console.log(`  escalation: ${p.escalation}`);
  }
}
