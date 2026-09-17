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
const slugs = args.filter((a) => !a.startsWith('--'));
if (!slugs.length) {
  console.error('usage: bun scripts/review-policy.ts <slug> [slug...] [--json]');
  process.exit(1);
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
      seats_by_round: { '1': ALL_SEATS, '2': ALL_SEATS, '3': ALL_SEATS },
      reason: 'mode-a pages carry doctrine, so SCHEMA section 7 step 5 requires the full three-round debate.',
      escalation: 'Any REVISE or REJECT left after round 3 goes to Julie. Never ship over it.',
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
      console.log(`  round ${round}: seats ${seats.join(', ')}`);
    }
    console.log(`  why: ${p.reason}`);
    console.log(`  escalation: ${p.escalation}`);
  }
}
