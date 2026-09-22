# Calibration entry: jez-humble, 2026-09-22

Written at Ship for a later stage to merge into `.claude/skills/add-thinker/calibration.md`.
`calibration.md` is not edited here, per the instruction that a later stage merges these.

## Run log row

| Date | Page(s) | Inclusion | Review rounds | Review verdicts | Notable catches |
|------|---------|-----------|---------------|-----------------|-----------------|
| 2026-09-22 | Humble (new page, mode-a, batched with Cunningham) | 5 accept | 3 (round 2 left nothing below ACCEPT-WITH-EDITS, so round 3 was the single adjudication pass, the first time that branch has run) | R1: 1 revise, 4 accept-with-edits; R2: 5 accept-with-edits; R3: accept-with-edits | A Flickr quantity ("for months") sitting inside Humble's own account in two fields; the four DORA measures printed with two citations that name none of them, in a ledger exiting 0; a round 1 editor deletion nobody proposed left the round 2 closer asserting what the deleted sentence had qualified; "built, tested and signed" described a control no source on the page establishes; a reader-facing limit ended on working-file shorthand ("what the ledger holds about it") |

## New patterns, for the "Caught once" section

### An editor deletion made to fund a word budget, combined with a parked finding, manufactures an overclaim

Round 1 deleted the extension's threat-model sentence. Nobody proposed it. Two reasons, both good
on their own: it repeated `limits[3]` almost verbatim six lines further down, and `extension` was
at 159 of 160 words while two accepted edits added about thirty words between them. In the same
pass, seat 4's second finding, that an audited path guarantees nothing while a bypass exists, was
recorded as unaddressed and carried forward.

Seat 2 named the result in round 2: "Each was defensible alone; together they left the closer
asserting what the deleted sentence qualified." The field ended on "the pipeline is audited end to
end", a completeness claim the page's own limit denies. Seats 3 and 4 read it the same way
independently.

The shape is not a bad deletion and not a parked finding. It is the two in one pass. A parked
finding is a claim the page is known to be making without support, and a deletion made for budget
reasons removes whatever was qualifying it. Check every parked finding against the same pass's
deletions before closing the round.

### A page that arrives at review already sitting on the word gate moves the editing decision to the one person who is not a reviewer

`reading` was at 160 of 160 and `extension` at 159 of 160 when round 1 opened. No seat had either
number in front of it, and four of fourteen round 1 edits added words. Every addition had to be
funded by a deletion in the same field, and the funding decision was made by the editor alone.
That is how the deletion above happened. The round 1 notes recorded the constraint and carried the
numbers forward into rounds 2 and 3, which is the right repair, but the cheaper one is to give the
seats the counts in the brief so an additive edit arrives with its own funding named.

### Return-edge labels are the only reader-facing prose on the site that no review round ever sees

Two defects were found in `return-edges.md` at Ship, by reading the plan against the finished page,
and neither could have been found earlier by any existing control.

1. **A subject error.** "Fowler's article on continuous integration sends readers to *Continuous
   Delivery* for the broader process, published the book in his own signature series, and wrote the
   bliki entries..." An article cannot publish a book. Split into two sentences at Ship.
2. **Near-verbatim duplication with the new page's own label for the same pair**, which is already a
   checklist item from the Larson and Willison runs. The Allspaw label's middle sentence was word
   for word identical to a sentence in the Humble page's Allspaw label, and its third sentence
   restated that page's third sentence. Deleted the third sentence at Ship.

The existing checklist item ("write the label from the neighbour's side, opening with what the new
thinker adds, then check it against the new page's label for the same pair") was followed, and the
duplication happened anyway. Opening from the neighbour's side fixes the first sentence and leaves
the evidence sentence free to repeat. The checkable form is stricter: no sentence in a return-edge
label may appear on the new page in the same or near-same words.

The structural point behind both is that these labels are drafted at stage 4, applied at stage 7,
and reviewed by nobody in between. Every other piece of prose that reaches a reader passes five
seats at least once.

## The adjudicated round 3, recorded as `calibration.md` asks

This is the first live page to reach the narrowed branch. Round 2 left five ACCEPT-WITH-EDITS, so
the escalation condition did not fire and round 3 was one adjudication pass rather than five seats.

**What the adjudicator caught:** two defects, both in `limits[3]`, which round 2 had rewritten and
which was therefore the newest and least reviewed text on the page. "None of them addresses" reached
past its intended antecedent to a list of three concentrated items. "What the ledger holds about it"
put working-file shorthand into reader-facing prose. Both were accepted, one applied as written and
one re-authored, and both were claim-delta SAME.

**What it did not catch:** nothing in the older fields. Two rounds of five readers had passed them
and the adjudicator added no finding there.

**What was not run at all.** `SKILL.md` stage 6 requires one unanchored control seat beside every
adjudicated round 3, seeing only the finished page and its working files, with its verdict recorded
and never gating the ship. No control report exists under `_working/_council/2026-09-22/`. The
control is the only instrument that can reverse the narrowing, because a control landing stricter
than the adjudicator is the result that matters and an anchored pass cannot produce it. It was
missed on the single run that could have produced the first data point, so this run is an anecdote
about what one adjudicator caught and not evidence about the narrowing.

**The one thing the adjudicator itself flagged about its own branch:** "Both pages fail the same
way: a round 2 edit that repaired a count or a citation left the sentence beside it pointing at
nothing. That is what this branch should be watched for, since one adjudicator replaced the five
readers who would otherwise have met the newest text cold." Both of its Humble findings are that
shape, and both of its live Cunningham findings are too, which is four instances across two pages in
one round. If the pattern repeats on the next adjudicated page, it belongs in the pre-draft
checklist under Process rather than here.

## Second sightings of existing checklist items

- **A source already in `facts.md` does not mean the claim is sourced.** `named_frames[5]` printed
  the four DORA measures citing a product page and a Wikipedia entry, neither of which states them,
  and the ledger was exiting 0. This is the Beck failure exactly, found by seat 3 rather than by a
  gate, and it confirms the item rather than adding one. Closed with research in-round rather than
  carried, and a Google Cloud post naming all four in the gloss's own wording is now the citation.
- **A seat's factual assertion is a research request.** Two were asserted across three rounds. One
  held and correctly took no new ledger line, because the claim ("seventeen days") is the difference
  between two dates already on the ledger and no document states the number; writing a line whose
  URL does not carry the claim is the defect that parked the Beck page. One was half confirmed and
  half refuted, and the sentence it was proposed for was re-authored to state only the half that
  holds.
- **Re-read `return-edges.md` against the FINAL page before applying it.** Done, and it paid: see the
  two defects above. No phrase the rounds changed had drifted into the plan, which is the specific
  failure this item was written for, so the item held on its own terms and caught two others.
- **Unmerged work is invisible work**, promoted to the Process checklist earlier the same day. This
  run ends with `ward-cunningham` drafted, reviewed through the same three rounds, and uncommitted
  in the sandbox working tree with no branch and no merge request, plus `_working/sean-goedecke/`
  from earlier research. Named in the Humble merge request description rather than left for the next
  session to find. This is the third sighting of the shape inside a week.

## Open to Julie, carried in the merge request

- Issue #37 asked this run to settle the continuous integration attribution and correct both
  existing pages. Three seats asked the drafter not to, and the page follows them. Fowler's
  `continuous-integration` frame still carries `attribution_kind: original` with
  `primary_author: martin-fowler`, contradicted by its own `source_link` [S:13], which says the
  practice was developed by Kent Beck inside Extreme Programming.
- Keunwoo Lee as a `critiques` edge on the Forsgren page. His review attacks her research
  programme, her page carries no critic, and this page carries him.
- Whether to override the ranking that put the Humble edge in the collapsed tier on Forsgren's page.

## Candidates to file at stage 8

- **Dan North.** Co-originator on two frames of this page (the 2006 paper and Fowler's hedged
  blue-green credit), already carries a secondary `parallel` edge on the Forsgren page, no page of
  his own. Publishes as Daniel Terhorst-North.
- **Dave Farley.** Co-author of *Continuous Delivery*. The page's own Farley edge says any account
  filing continuous delivery under one name is missing half of where it came from, which is an
  argument for his page as much as for the edge.
