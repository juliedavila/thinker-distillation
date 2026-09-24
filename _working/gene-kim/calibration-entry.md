# Calibration entry: Gene Kim, shipped 2026-09-24

For a later stage to merge into `.claude/skills/add-thinker/calibration.md`. Nothing here edits that
file. Written in the same change that ships the page, per the note under the run log that the stage
recording what a run taught is the stage that gets dropped when a run ends badly.

## Run log row

| Date | Page(s) | Inclusion | Review rounds | Review verdicts | Notable catches |
|------|---------|-----------|---------------|-----------------|-----------------|
| 2026-09-24 | Kim (new page, `mode-a`, batched with Alexander and Karpathy; a second full review of a page that had already passed three rounds on 2026-09-22) | 4 accept, 1 reject | 3 (round 2 left nothing below ACCEPT-WITH-EDITS, so round 3 was the single adjudication pass, its second live run) | R1: 2 revise, 3 accept-with-edits; R2: 5 accept-with-edits; R3: accept-with-edits (unanchored control: accept-with-edits, 11 findings) | "Systems thinking" carried the First Way in three fields and the string appears nowhere in the ledger, because it came from the researcher's own summary written for the inclusion Council; a `concept_slug` of `file-integrity-checking` would have handed Kim primary authorship of a whole category for every later holder, in the frame whose own gloss hands that category to the field; `limits[3]` described the page's strongest byline evidence as other people's testimony when he is himself an author of the citing book; a `reading` repair labelled claim-delta SAME had widened, and four seats reopened it in round 2; `limits[1]` stated why its eleven pages were picked, which no line supports; the return-edge plan's collapse prediction named the wrong neighbour because it was computed against a tree holding an untracked draft page |

## Second sightings, for promotion out of "Caught once"

**A recorded simulation of the neighbour ranking is not evidence about the current build. Second
sighting, 2026-09-24, with a new mechanism.** The first sighting (Anderson, 2026-09-20) was arithmetic
ageing against `src/lib/checks.ts`. This one is the page set: the Kim plan's table recorded which
neighbour `orderNeighbors` would move off each page, simulated on 2026-09-22 inside a sandbox clone
whose `src/content/thinkers/` held an untracked `andrej-karpathy.md` from a parallel run. `collapseRank`
weighs an off-site neighbour three points heavier than an on-site one, so with that file present
Karpathy counted as on-site on Willison's page and the simulation named Dave Chismon for the collapse.
On `main`, and therefore on the branch and in CI, Karpathy has no page, was already the collapsed edge
before this change, and the Kim edge collapses **Riley Goodside** instead. Recomputed by calling
`orderNeighbors` directly with and without the file and confirmed against `bun run build`. The check to
add: an untracked page file in the working tree is part of the simulation and not part of the branch, so
the tree the prediction is computed against has to be stated, and it has to be the branch's.

**Every phrase the rounds changed has to be chased into the return-edge plan by hand. Fourth sighting,
2026-09-24, and this time the carrier was a possessive.** The plan's Fowler label opened "Kim's
*Accelerate*", a possessive on a three-name book whose first author is Forsgren, which is exactly the
defect round 3 repaired twice on the page itself when it wrote "a novel with two co-authors" into the
tagline and the take. The plan was re-read against the finished page on 2026-09-24 and this survived the
re-read, because the re-read chased changed sentences and a possessive is a word.

## New patterns, first sighting

**1. A return-edge label can duplicate a fact the neighbour page already carries in a different edge
label.** The Kim plan's Allspaw label stated that Allspaw wrote the foreword to the first edition of
*The DevOps Handbook*. `john-allspaw.md:329` already said so, inside the existing Humble edge label,
which names Kim in the same sentence. Applied as drafted, one page would have carried one fact twice in
two adjacent cards. The existing checklist compares a return-edge label against the NEW page's label for
the same pair, which catches a repeat in one direction only. The missing check is the other direction:
grep the neighbour page for the fact before adding it, because a hub page with ten edges is where a
shared artifact is most likely to be stated already. The repair was to delete the sentence rather than
re-author it, which cost nothing, because the fact stays on the page and the label that carries it names
the new thinker.

**2. A return-edge label can reintroduce onto a neighbour's page a claim a review round deleted from the
new page, and it lands where no round will read it.** Round 2 deleted "Fowler builds a pattern language
readers consult a piece at a time" from the Kim page, because its only citation was *Accelerate* and its
forewords and carried nothing about how Fowler writes. The return-edge plan's Fowler label said "Fowler's
method is one named move at a time, revised in public", which is the same claim about the same person,
drafted before the deletion and applied after it, onto Fowler's own page, which has no source record of
its own to check it against. This is the "a ban satisfied mechanically relocates the tell" shape inside
the one prose surface no review round ever sees. The check: after any round deletes a claim about a named
neighbour, grep the return-edge plan for that neighbour's name, not just for the deleted wording.

**3. A return-edge label can carry an unbounded absence claim, because a `parallel` edge requires no
ledger line.** The planned Allspaw label closed on the foreword being "the one artifact the two men
share". Nothing on either page's ledger measures that, Allspaw's page has no ledger at all, and no gate
asks. The already-recorded reason a `parallel` edge is unchecked rather than uncontroversial covers
widening a clause; this is the same hole admitting a superlative. It went out with the sentence in
finding 1 above, so the cost this time was nothing.

## The unanchored control, third measurement

The two process defects recorded on 2026-09-22 are both closed. The control wrote
`round-3-unanchored-control.md` to disk beside the adjudicator report, so these findings were read off
disk rather than reconstructed at the close of the run. And `review-policy.ts` now prints the control
block alongside the round count, including when it runs, what it sees, that it gates nothing and how to
read it, which was the "not named where the caller looks" item.

The result: **ACCEPT-WITH-EDITS, matching the adjudicator, with 11 findings the adjudicator did not
file.** That is the Humble shape rather than the Cunningham one. Three measurements now exist: Cunningham
one step stricter with 14 findings, Humble matching with 8, Kim matching with 11. On the rule stated in
advance, a matching verdict reverses nothing, so the narrowing stands unreversed on the verdict and looks
thin underneath it, because two of three controls agreed on the verdict and all three filed live findings
the anchored pass missed. The direction Bornmann predicts holds again: the adjudicator read the newest
text closely and the control, told nothing, went back into the older fields. Counted against the round 2
and round 3 edit lists: five of the eleven findings (G1, G4, G6, G9, G11) are in fields neither round
touched, two more (G2, G3) span fields from both, three (G7, G8, G10) are in text those rounds edited,
and one (G5) is the build warning stream rather than a field.

Two of the eleven bear on Ship and are answered on the branch. G5, the eight build warnings naming this
page, are closed by the four new links. G6, which says shipping leaves two other pages asserting a
founding claim this page has established it cannot source, is carried to Julie as a decision rather than
repaired, for the reason in the merge request.

## Things this run confirms rather than adds

- The 230-word seat cap and the instruction to skip `sources.md` held again across a three-page batch.
  No agent stalled, and round 2 reports came in between 5.7KB and 7.6KB.
- Round 2 leaving nothing below ACCEPT-WITH-EDITS is now the outcome on five of five pages since
  2026-09-22, so the adjudication branch is becoming the normal branch rather than the exception, and
  the control is the only thing still reading the older fields on those pages.
- The control's cross-batch note 3 is the structural return-edge item stated from the outside: three of
  three pages in this batch state a correction to a neighbour that the tree does not contain. On this page
  the disclosure is in the present tense and stays accurate after the merge, since the two pages carrying
  the founding claim are untouched. If Julie takes the lowering option, `inclusion_rationale` has to move
  with it.
