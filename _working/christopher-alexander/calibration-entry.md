# Calibration entry: christopher-alexander

Written at the ship stage, 2026-09-24, in the same change that ships the page, which is what
`calibration.md` asks for after the Anderson entry sat unmerged for two days while the checklist
items it proposed were merged without it. A later pass merges this into `calibration.md`. Nothing
here edits `calibration.md` directly.

## Run log row

| Date | Page(s) | Inclusion | Review rounds | Review verdicts | Notable catches |
|------|---------|-----------|---------------|-----------------|-----------------|
| 2026-09-24 | Alexander (new page, mode-a, pipeline run, batched with gene-kim and andrej-karpathy) | 5 accept | 3 (round 2 left nothing below ACCEPT-WITH-EDITS, so round 3 was the single adjudication pass, its second live run) | R1: 1 revise, 4 accept-with-edits; R2: 5 accept-with-edits; R3: accept-with-edits (unanchored control: REVISE, stricter, 10 findings) | A `reading` sentence that made Alexander accuse programmers by construction, giving the granted format and the dropped sequence one subject and one target where `[S:26]` records the subject as his own 1960s work and forbids the field citing it for the software reading; the round 1 editor then dating the pattern-language work in page voice, "he and his co-authors began in the 1970s", where `[S:26]` puts the effort in the 1960s and `[S:9a]` bylines a 1968 paper; the page's last solo credit for the 1977 book surviving in the `tagline`, which is also the meta description and the roster line, on a page whose reason for existing is that byline; `background` reading "held the chair for decades" against `[S:3a]`'s professorship to 1998, with the only chairmanship on the ledger being PatternLanguage.com from 1999; the live `martin-fowler` page asserting the critique of programmers this page exists to rule out; the banned antithesis cadence in both of the page's own disclaimers, found by the adjudicator after two rounds of five readers had passed them |

Batch note for the trend paragraph: three `mode-a` pages through three rounds, no agent stalled, and
round 2 again left nothing below ACCEPT-WITH-EDITS, the second batch running to that condition. The
round 1 dissent was seat 3 alone, the grounding seat, which is the seat the skill predicts. Seats 3
and 5 cleared the round 2 rewrite they exist to audit, which is the same condition Cunningham and
Humble produced, and the control result below is again what it cost.

## The control measurement, second data point

`SKILL.md` stage 6 pre-registers the decision rule: a control landing stricter than the adjudicator
found something the anchored pass did not, and that reverses the 2026-09-17 narrowing; a more lenient
control means nothing. **Second consecutive adjudicated page where the control landed stricter.**
Cunningham 2026-09-22, REVISE against ACCEPT-WITH-EDITS, 14 findings. Alexander 2026-09-24, REVISE
against ACCEPT-WITH-EDITS, 10 findings.

Two things make this data point cleaner than the first.

1. **Both 2026-09-22 process defects were fixed and the fix held.** The control ran after the round 3
   editor, so it judged the text that ships rather than the round 2 text, and it wrote
   `round-3-unanchored-control.md` to disk beside the adjudicator's report. Both are now printed by
   `review-policy.ts`, along with the control seat itself, which closes the third item that run left
   for Julie. None of the ten findings here is against text already fixed, where three of Cunningham's
   fourteen were.
2. **The overlap between the adjudicator and the control is zero.** The adjudicator's two edits were
   both in text round 2 had just written. Eight of the control's ten live findings are in fields no
   round edited. That is the direction Bornmann's result predicts and the direction the instrument was
   built to test, and it now has two observations rather than one.

Eight of the ten are live in the shipped page, listed in full in the merge request description. Two
were closed by the return edges applied at ship, which is its own finding, below.

## New failure patterns

### 1. A recorded check is not evidence the check covered what it was written for. Promote on second sighting.

The return-edge item on label repetition is at its fourth sighting, and this is the first where the
item was followed and the label repeated anyway. The plan for the Beck label opened from the
neighbour's side, as the item requires, and then certified in writing that "no sentence here appears
on the Alexander page in the same or near-same words," giving as its reason a comparison of the
openers alone. Its third sentence read "Beck's later argument prices the cost of changing software, a
different question from Alexander's, so this is an antecedent to one report rather than to the
corpus." The Alexander page's own Beck label reads "Beck's own later argument is about the cost of
changing software, which is a different question from composing a coherent whole, so the pattern
language reads as an early borrowing in his corpus rather than the spine of it." Same clause order,
same three joints.

The item already anticipated this exactly: "Opening from the neighbour's side fixes the first sentence
and leaves the evidence sentence free to repeat." What is new is that the certification made the
failure harder to see, because the plan recorded a pass. **The checkable form is to record the
comparison per sentence, one line each, rather than as a verdict for the label.** A label with three
sentences gets three lines.

Re-authored at ship. The shipped sentence is "Read it as an antecedent to that one report. The
economic argument the rest of this page follows does not run through it, which is why the edge sits
in the deep tier."

### 2. A page can truthfully claim it corrects a live page and be wrong for the whole window between drafting and ship. Caught once.

`inclusion_rationale` reads "the solo credit that the live Cunningham frame and issue #42 both carry
is corrected in this merge request." Past tense, in a field a maintainer reads as a record of
completed work. The control read it cold and checked: `ward-cunningham.md` still carried the solo
credit, dated to 1977, which the same `inclusion_rationale` sentence forbids two clauses earlier. The
control was right at the moment it read, and the claim was true by the time the branch was pushed.

This is structural in the same way the return-edge staleness item is, and it is the mirror image of
it. Return edges are drafted before the page is finished and applied after it. A page field asserting
what those edges will do is therefore false for every reader between the two, and the cold reviewer is
exactly the reader positioned there. Two repairs are available and the first is cheaper: write the
claim in the tense that is true when it is written, or apply the return edges before the last review
round rather than at ship. The second changes the stage ordering that exists so two candidates cannot
collide on a shared neighbour, so the first is the one to try.

The same window produced the control's A6, the Fowler critique sentence, for the same reason.

### 3. A return-edge plan carries structured field paths that nothing re-derives. Caught once, and it is a fact about the tooling.

The plan said to add the new source to `named_frames[1].co_originators` on Cunningham. The
pattern-languages frame is `named_frames[3]`, which that page's own `page-claims.md` already showed
with two existing `co_originators` lines. `named_frames[1]` is the wiki frame and has no
`co_originators` at all. Nothing between stage 4 and stage 7 re-derives the index, and the positional
item already in this group covers only indices shifting under an insertion, not an index that was
wrong when written.

Cheap fix, in the same shape as the existing item: a plan naming a structured path also names the grep
that finds it, so the ship stage re-derives rather than trusts. The plan did this correctly for the
source id in the same section, telling the applier to "check the next `[S:n]` on that ledger before
using 29," and the ledger's highest numeric id was 27, so the check earned its place. The field path
got no equivalent.

### 4. `reading_review.dissent` has no rule for the control case, and two runs have now guessed differently. For Julie.

SCHEMA section 7 says the flag fires when "a seat ended the final round below ACCEPT-WITH-EDITS," and
its only effect is that Julie reads the page before approving rather than afterwards. The control is a
seat, it runs in the final round, and on both adjudicated pages so far it ended below
ACCEPT-WITH-EDITS. `SKILL.md` says its verdict "never gates shipping," which settles shipping and says
nothing about reading order.

Cunningham shipped `dissent: false`. This page ships `dissent: true`, with the reasoning in the
transcript and the merge request. That is a divergence in the one field whose whole job is to set
Julie's reading order, decided twice by two agents reading the same two documents. It is the same shape
as the three-round rule living in SCHEMA alone while two pages shipped with one round.
`review-policy.ts` is the place, beside the control block it already prints.

### 5. A restarted run leaves superseded seat reports in the same dated folder, distinguished only by prose. Caught once.

`_working/_council/2026-09-22/` holds `round-1-editor-christopher-alexander.md` dated 2026-09-24 and
`round-1-editor-christopher-alexander.2026-09-22.md` dated 2026-09-22, and
`round-3-seat-1.md` through `round-3-seat-3.md` from 2026-09-22 which reviewed a page state the
restart replaced. Only the round 3 editor's opening paragraph says which files are prior art, and a
transcript assembled without reading that paragraph would fold three superseded seat reports into the
round 3 record and pick the wrong round 1 resolution. Both were copied into the transcript's
`source-reports/` and labelled, and neither bears on a verdict.

The folder is named for the run's start date, so a restart inside the same day cannot separate itself
by folder. A `superseded/` subfolder would, and costs nothing.

## Checklist items this run exercised without incident

Recorded because an item that holds is worth as much as one that fires, and the "Return edges" group
carries a standing invitation from Julie to send items back if it is carrying more than it earns.

- **Plan return edges against the build, not the file, and expect the cap to bind.** Held, and
  measured rather than assumed: `main` was built in a separate worktree, its seven `[distillery]`
  warnings recorded, then this merge's four changed files applied on top and rebuilt. Byte-identical
  warning set, so no collapse fired anywhere and nothing was moved off a main list. The Beck edge is
  `render_tier: deep`, which takes no foreground slot. This is the method the "recorded simulation"
  item asks for, run forward instead of after the fact.
- **Record whether a neighbour's ledger already exits 1 before editing it.** Held. `martin-fowler`
  exits 1 on `main` for want of a `facts.md` and exits 1 after, confirmed both ways, and the Fowler
  edit was a narrowing, which adds no required line. `ward-cunningham` and `kent-beck` both passed
  before and after, at 22 and 28 cited fields.
- **Append a return edge at the end of `adjacent_thinkers`.** Held. Alexander is
  `adjacent_thinkers[7]` on Beck and no earlier index moved.
- **Read the sentence on either side of an edit that changes a count.** Fired once, in a working file
  rather than on a page: adding the third required line to `_working/kent-beck/page-claims.md` left the
  paragraph above it reading "Both required lines are listed." Corrected in the same edit.
- **Read the `warn unused` lines.** Five on this page, all five present in every round and recorded by
  the adjudicator: `[S:5]`, `[S:12]`, `[S:15]`, `[S:15a]`, `[S:21]`. `[S:15]` and `[S:15a]` are the
  pair worth a look, a book by a programmer carrying an introduction by Alexander. `[S:21]` went unused
  when round 1 recited the wiki clause to the Cunningham and Mehaffy paper.
- **`SKILL.md` and `SCHEMA.md` still disagree on what an ACCEPT-WITH-EDITS adjudication means**, and
  the contradiction has narrowed to one sentence, SCHEMA section 7 step 5. Both of SCHEMA's other
  statements of the rule now match `SKILL.md` and `review-policy.ts`. Still flagged rather than fixed,
  for the same reason: the agent making the call is the one whose own artifact the rule gates.
