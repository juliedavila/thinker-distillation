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

// The cold reader. One reviewer who has seen no transcript, no verdict history and no other
// seat's reasoning reads every page after its last review round, whatever that round was.
//
// It began on 2026-09-17 as a temporary control on the adjudicated round 3, meant to be retired
// once a few runs agreed with the adjudicator. Five pages later it had come back stricter three
// times and more lenient never, and every finding it filed was the kind no script reaches. A
// 2026-09-25 Council rejected restoring five seats and asked for this instead: keep the fresh
// eyes, permanently, and never let them gate. So it runs on every page (adjudicated, escalated
// and one-round alike), an editor applies what it confirms, and anything the editor declines
// goes to the top of the merge request, where Julie reads it before she merges.
//
// Its placement is the lesson of its first run. It reads the page AFTER the last editor, because
// on 2026-09-22 it read the round 2 text and three of its fourteen findings were already fixed.
const COLD_READER = {
  when: 'every page, after its last review round and the editor that follows it',
  runs_after: 'the last editor, so it reads the text that would ship',
  sees: 'the finished pages, their grounding packs, claims maps and ledgers, and nothing under _working/_council/',
  writes: 'cold-reader.md in the council directory; its editor writes cold-reader-editor-<slug>.md',
  gates: false,
  reads_as: 'an editor applies what it confirms; what the editor declines, and any REVISE or REJECT, opens the merge request description. Stricter than the last round is recorded as a catch the anchored review missed',
};

type Plan = {
  slug: string;
  doctrine_mode: string;
  rounds: number;
  transcript_suffix: 'debate' | 'quick';
  seats_by_round: Record<string, number[]>;
  // 'adjudication' means one pass that reads rounds 1 and 2 and calls it, instead of five seats.
  // An empty seat list in seats_by_round is what that looks like.
  round3_mode?: 'cold-reader' | 'adjudication' | 'full';
  // The cold reader, on every plan. Never a gate.
  control: {
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
      // Round 3 is the cold reader. From 2026-09-17 it was one adjudicator reading the round 1 and 2
      // transcripts; on three runs in a row (Terhorst-North, Hollnagel, Shortridge) that adjudicator's
      // own work introduced, preserved or argued for a defect the cold reader then caught, and Julie
      // dropped it on 2026-09-28 under the rule she set that morning. When round 2 is unanimous there
      // is no third transcript-reading pass; the cold reader, which reads no transcript and whose
      // editor applies what it confirms, is the third read. Round 3 still becomes all five seats
      // when round 2 leaves dissent. Set round3_mode to 'adjudication' to restore the old pass.
      seats_by_round: { '1': ALL_SEATS, '2': ALL_SEATS, '3': [] },
      round3_mode: 'cold-reader',
      control: COLD_READER,
      reason: 'mode-a pages carry doctrine, so SCHEMA section 7 step 5 requires three reads. Rounds 1 and 2 are the full Council; the cold reader is the third.',
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
    control: COLD_READER,
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
      console.log(`  round ${round}: ${seats.length ? `seats ${seats.join(', ')}` : (p.round3_mode === 'adjudication' ? 'one adjudication pass over the rounds 1 and 2 transcripts' : 'no reviewer: the cold reader below is the third read')}`);
    }
    {
      console.log(`  cold reader: one unanchored pass, ${p.control.when}`);
      console.log(`    runs after: ${p.control.runs_after}`);
      console.log(`    sees: ${p.control.sees}`);
      console.log(`    writes: ${p.control.writes}`);
      console.log(`    gates shipping: ${p.control.gates ? 'yes' : 'no, an editor applies its findings and the rest go to Julie'}`);
      console.log(`    how to read it: ${p.control.reads_as}`);
    }
    console.log(`  why: ${p.reason}`);
    console.log(`  escalation: ${p.escalation}`);
  }
}
