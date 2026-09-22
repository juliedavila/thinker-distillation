# Calibration entry: ward-cunningham, 2026-09-22

Written at stage 8 for the Ward Cunningham run. A later stage merges this into
`.claude/skills/add-thinker/calibration.md`; nothing here edits that file directly.

## Run log row

| Date | Page(s) | Inclusion | Review rounds | Review verdicts | Notable catches |
|------|---------|-----------|---------------|-----------------|-----------------|
| 2026-09-22 | Cunningham (new page, mode-a, pipeline run, batched with Humble) | 5 accept | 3 (round 2 left nothing below ACCEPT-WITH-EDITS, so round 3 was the single adjudication pass, its first live run) | R1: 1 revise, 4 accept-with-edits; R2: 5 accept-with-edits; R3: accept-with-edits | Reading filed Cunningham's Law as one of his coinages and counted a stripped condition for it, four seats independently; the Larson claim was asserted in three fields on a citation to a page about someone else, then on a neighbour's ledger, before being re-verified into this page's as [S:27]; a clause asserting comprehension before constraint argued against the Lens position it cited; the tooling claim ran from one named plugin to an industry; limits[2] said the metaphor prices nothing where [S:2] calls the cost tolerable; round 3 found two sentences left pointing at nothing by round 2's own repairs |

Dissenting seats: seat 2 in round 1, nobody in round 2. That is a new shape. Every earlier pipeline
page had round 2 dissent from seats 3 or 5, the two that audit a rewrite for claims that were not
there before, and the skill predicts those two. Here both cleared in round 2 and the adjudicator
caught what they would have met cold.

## The adjudication branch, first live run

`calibration.md` asks for this one to be written up with more care than usual, because a single
adjudicator carried the last read on a live page for the first time. Both pages in this batch
reached that branch in the same pass, so the evidence base is one adjudication over two pages
rather than two independent runs.

**What it caught.** Two items, both in text round 2 had just edited, both defects of reference
rather than of fact. Round 2 repaired the coinage count in `reading` and left "A third carries his
name and was never his" with no referent in the sentence, which invited a reader to fill it from
the take's count of three and land on the wiki. Round 2 added `[S:27]` under the Larson edge and
left "by name" standing beside a ledger line recording that Larson credits nobody. Both were real
and neither is cosmetic: the second is the misattribution class that the Forsgren critic edges and
the Larson regulator sentence both belong to.

**What it missed** cannot be established from inside the run. That is what the control seat was for,
and it did not run (below).

**The one thing the adjudicator saw that five seats would not have.** It held both pages in the
batch and named the shape they shared, that a round 2 edit repairing a count or a citation leaves
the sentence beside it stale. A seat reviewing one page has no view of that.

## New failure patterns

**1. A repair leaves its neighbouring sentence pointing at nothing. Two sightings in one run.**
Both pages in this batch failed this way, which the adjudicator recorded as a cross-batch finding.
On Cunningham, round 2 fixed the coinage count and left an unanchored "a third," and added `[S:27]`
and left "by name" beside it. Recommended as a checklist item under **Rewrites** rather than held
in "Caught once": it has the two sightings the promotion rule asks for, though both came from the
same batch, so Julie may want to see it once more across runs before it earns a permanent line.
Proposed wording: *after an edit that changes a count, a name or a citation, read the sentence on
either side of it. The repair is usually correct and the sentence beside it usually still describes
the old state.*

**2. A `parallel` return edge can assert facts the neighbour's ledger never carried, and no gate
notices.** Found at Ship on this run. `return-edges.md` widened Beck's Cunningham label from one
shared artifact to three, and said the claim cost nothing because the facts were "already sourced on
Beck's own page." They were not: `_working/kent-beck/page-claims.md` cited `[S:16]` alone for that
edge, and Beck's ledger held no line for the 1987 pattern-languages report or for the Smalltalk
session behind "the simplest thing that could possibly work." `fact-ledger.ts` requires a line only
for `critiques` and `antecedent` edges, so a widened `parallel` label passes whatever it asserts.
The existing checklist item reads the ledger state of a neighbour as a permission question, which
edge types it can take. This is the other half: what the label says once the edge type is settled.
Proposed checklist item under **Return edges**: *before widening a neighbour's edge label, open that
neighbour's `page-claims.md` line for the edge and check every new clause against the lines it
cites. A `parallel` edge is unledgered, which means unchecked rather than uncontroversial.*

**3. A return-edge label can attribute a mechanism to the wrong artifact of the same thinker.** The
planned Larson label credited the 1992 OOPSLA report with pricing "the cost of code that no longer
matches what its team understands." The report says nothing of the kind. The alignment framing is
from the 2009 talk `[S:4]`; the report says shipping first-time code is like going into debt and
that every minute on not-quite-right code counts as interest. Both facts are on this page's ledger
and both are Cunningham's, which is what makes the swap invisible. This is the Beck round 3 park in
a new place: the line has to support the field, and a thinker with two canonical statements of one
idea is where that check is easiest to skip. Proposed as a second sighting of the existing
**Attribution** item rather than a new one.

**4. The unanchored control seat has never run, and nothing makes it run.** `SKILL.md` stage 6
requires one on every adjudicated round 3. Round 2's resolution asked for it. It did not happen, and
the first live adjudication is therefore also the run where the measurement designed to test
adjudication was skipped. The cause looks structural rather than careless: `review-policy.ts` is
designated as the only place the round rule lives, and it prints the seats for rounds 1 and 2 and
"one adjudication pass" for round 3, with no mention of a control. The three-round rule failed this
exact way before, living in SCHEMA section 7 alone while two `mode-a` pages shipped with one round.
Proposed fix, for Julie: put the control seat in `review-policy.ts` output, so a caller reading the
script sees it.

**5. `SKILL.md` and `SCHEMA.md` disagree on what an ACCEPT-WITH-EDITS adjudication means.** SCHEMA
section 7 step 5: "ACCEPT ships; anything else goes to Julie." `SKILL.md` stage 6: "Ship on the
round 3 verdict. Any REVISE or REJECT left after round 3 goes to Julie." `review-policy.ts` prints
the second. The difference decides whether this page ships or parks, and it went unnoticed through
three rounds and two editors because each document was read on its own. `SKILL.md` says to fix one
of the two in the same merge request; this run flagged it instead and left the decision to Julie,
because the agent making the call is the one whose artifact the rule gates. Recorded here so the
next run does not have to rediscover it.

## Cost and shape notes

Batching two `mode-a` pages through three rounds held. No agent stalled, and the round 2 reports
came in at 3.7KB to 5.2KB against the 12KB to 27KB that stalled the 2026-09-20 batch, so the
230-word cap and the instruction to skip `sources.md` are both doing their work.

The goal `calibration.md` set for this run was "a round 2 that leaves nothing below
ACCEPT-WITH-EDITS, since that is the condition the round 3 narrowing hangs on." That condition was
met for the first time. It cost a round 1 with four ACCEPT-WITH-EDITS and one REVISE, which is the
quietest round 1 since the Fournier page.
