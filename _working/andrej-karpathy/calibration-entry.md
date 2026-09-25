# Calibration entry: Andrej Karpathy, shipped 2026-09-24

For a later stage to merge into `.claude/skills/add-thinker/calibration.md`. Nothing here edits that
file. Written in the same change that ships the page, per the note under the run log that the stage
recording what a run taught is the stage that gets dropped when a run ends badly.

## Run log row

| Date | Page(s) | Inclusion | Review rounds | Review verdicts | Notable catches |
|------|---------|-----------|---------------|-----------------|-----------------|
| 2026-09-24 | Karpathy (new page, `mode-a`, batched with Alexander and Kim) | 5 accept | 3 (round 2 left nothing below ACCEPT-WITH-EDITS, so round 3 was the single adjudication pass, its third live run) | R1: 1 revise, 4 accept-with-edits; R2: 5 accept-with-edits; R3: accept-with-edits (**unanchored control: REVISE, one step stricter, 10 findings**) | A frame gloss opened on Willison's definition while the same field, three sentences later, said the definition was Willison's, in a frame filed `original` to Karpathy; `co_originators` promoted a narrower to a co-originator; `thesis` and a limit headline slid from "coding models stop helping him" to "the method failing", which is the slide his own interview warns about; a present-tense claim that he "now spends his effort on small repositories" against a ledger line putting him at Anthropic since 2026-05-19; the coinage date asserted flatly in three fields on a snowflake decode that is the whole of the evidence; a `structural` limit dating the state of interpretability work to 2026 on a citation to a 2017 essay; the return-edge plan closing a reader-facing label on a backticked schema value |

## Second sightings, for promotion out of "Caught once"

**Site bookkeeping printed in reader-facing fields. Second sighting, 2026-09-24, and the first in a
return-edge label.** The item entered on the Cunningham page as four instances of frame glosses and
editorial notes explaining the site's own filing and research budget. Here the planned Beck return
edge closed on "The edge is `parallel` because the argument reaches the word and never its author",
which prints a schema value and a backtick to a reader. A grep of every `edge_label` on the roster
finds no other label naming its own `edge_type`, so this would have been the first. The leading
clause was deleted at Ship and the rest of the sentence kept.

What makes the return-edge case worse than the Cunningham case, and is the reason to promote rather
than to log: the control seat found the Cunningham and Kim instances because a control reads
reader-facing fields. No reviewer of any kind reads a return-edge label, so the same defect in a
label survives to publication unless the Ship stage catches it by hand. The check to add:
**before applying a return-edge label, grep it for backticks and for the six `edge_type` values.**

**Two documents state one rule, disagree, and each is read on its own so the conflict never
surfaces. Second sighting, 2026-09-24, on `reading_review.dissent`.** The first sighting is already
in this file: `SKILL.md` and `SCHEMA.md` disagreed on whether an ACCEPT-WITH-EDITS adjudication
ships, and nobody noticed for three rounds. The `dissent` flag now has three incompatible
applications on the record inside three days:

- `SCHEMA.md` section 7: dissent fires when a seat ended the **final** round below
  ACCEPT-WITH-EDITS, and explicitly not when a seat objected early and was answered.
- The Gene Kim transcript, 2026-09-24: `dissent: true` "because two seats ended **round 1** below
  ACCEPT-WITH-EDITS", which is the case SCHEMA excludes by name.
- `ward-cunningham.md`, 2026-09-22: `dissent: false` with a round 1 REVISE **and** an unanchored
  control at REVISE, which is the same evidence shape as this page and the opposite flag.

This page carries `dissent: true`, because both live readings of the rule reach `true` on it and the
flag only reorders Julie's own audit. The conflict is carried to her in the merge request. The rule
decides the order in which she reads pages before approving them, so a flag applied three ways
carries no information at all, which is the same failure as a three-round rule that lived in one
document.

**A ledger line that editorialises past its own quotation gets promoted to the page. Third
sighting, 2026-09-24, and the first where the editorial clause is in the ledger line rather than in
the field.** The promoted checklist item says a source in `facts.md` does not make a claim sourced,
and that the ledger LINE has to record the part of the document the claim rests on. Both earlier
sightings were fields citing a line that recorded something else. Here the line itself carries the
defect. `[S:11]` quotes Willison's narrowing correctly and then closes on a clause of its own: "the
review step is his addition." Four fields took that clause as the fact, in the site's voice, while
`[S:9]` on the same ledger reproduces Karpathy's own post saying "I 'Accept All' always, I don't
read the diffs anymore." `fact-ledger.ts` cannot reach this, the field does cite a line, and the
line does support the words it was asked for. The unanchored control found it cold.

The check this suggests: **a ledger line's own closing judgment is not a fact, and a field may not
cite it.** A line's job is to record what the document says. Where it draws a conclusion, the
conclusion needs the same treatment as a seat's assertion.

**A page arriving at review with no word budget. Second sighting, 2026-09-24.** Humble's `reading`
was at 160 of 160 and `extension` at 159 of 160. This page's `reading` was at 160 of 160 and
`extension` at 158 of 160, and the control filed it as K4 independently, having been given the
counts by nobody. Both editor passes had to fund every additive edit by a deletion chosen alone, and
round 2 seat 2 and seat 4 spent a whole exchange on a one-word swap for that reason. The cheap
repair is the one already recorded: put the field word counts in the review brief.

## New patterns, first sighting

**1. The control's findings landed in the text the rounds had edited, not in the text they had
left alone, which is the reverse of the two runs before it.** Counted against the round 1, 2 and 3
edit lists on this page: K1 sits in `named_frames[1].one_line_gloss`, `limits[0]` and
`inclusion_rationale`, all three edited in round 1 (edits 6, 7 and 8); K2 objects to the exact
wording round 1 edit 7 authored; K5 is `limits[4]`, edited twice in round 1 and once in round 2; K9
is `why_they_matter_as_a_thinker`, edited in round 1. Only K3 (`body_of_work[5].link`) and K8 (two
edge labels) are in text no round touched, and K4 and K7 are process rather than fields.

That matters because the standing explanation for why the control works is Bornmann's, recorded in
this file: the anchored pass reads the newest text closely and does not reread what it was told was
resolved, so the control goes back into the older fields. On Humble and Kim the counts supported it,
five of Kim's eleven findings sitting in fields neither round touched. On this page the counts run
the other way, and the mechanism has to be something else: **three rounds read a clause repeatedly,
edited the sentences around it, and endorsed it each time.** Round 1 seat 5 quoted the clause
approvingly while fixing the field it sits in. A finding filed as resolved is not reread, and
neither is a clause quoted in support of a fix.

**2. A correction applied in round 1 can be the thing the control objects to.** Round 1 seat 3
found the coinage date asserted flatly and round 1 edit 7 lowered it to "a post dated 2025-02-02,
which Willison's account gives as February 6th." K2 accepts the arithmetic and objects to the
asymmetry the repair leaves a reader: the site's own unpublished computation is printed as the date
while the one published account, by a thinker with a page here, is printed as his "account." The
repair is not wrong and the reader cannot see why one side wins. Worth watching because the review
rounds have no move for it: each round audits whether a repair is supported, and none asks whether a
supported repair reads fairly.

**3. A `primary_author` correction on a shared frame slug changes nothing a reader sees and
everything a genealogy would.** `vibe-coding` now exists on two pages, filed `original` to Karpathy
here and `extended` to Willison there, and Willison's `primary_author` read `simon-willison` on the
exact point the new page is about. The site's convention is one primary author per frame
(`code-smell` carries `kent-beck` on both holders, `dora-four-keys` carries `nicole-forsgren` on
both). `[slug].astro` prints `display_name`, `attribution_kind` and `one_line_gloss` and nothing
else, so the fix is invisible on the page and load-bearing for any future concept page's genealogy
order. Fixing it while the two pages are in front of one reader costs nothing; finding it later
costs a recheck. The check: **when a new page shares a `concept_slug` with a live page, compare
`primary_author` on both before shipping**, because it is the one frame field no reader can see and
no gate compares.

**4. A return-edge plan's build prediction can be right about the ranking and wrong about the
counts, because it was measured in a tree holding a sibling branch's page.** This plan recorded 17
warning lines without the new page and 18 with it. On this branch, cut from `main`, the build prints
eight either way. The structural prediction held exactly, `simon-willison: collapsed
andrej-karpathy` becoming `simon-willison: collapsed riley-goodside`, and only the counts were off,
because the plan was measured on 2026-09-22 in a sandbox whose `src/content/thinkers/` also held
Gene Kim's page and its four return edges. This is the third sighting of the Kim entry's own item,
that the tree a prediction is computed against has to be stated and has to be the branch's, and the
first where the wrong tree left the ranking right and the counts wrong. A count is the part of a
prediction that looks checkable, so it is the part that gets trusted.

## The unanchored control, fourth measurement

**REVISE, one step stricter than the adjudicator, 10 findings, and the report was on disk before
this entry was written.** Both process defects recorded on 2026-09-22 stayed closed: the control ran
after the round 3 editor, so it read the shipping text, and it wrote
`round-3-unanchored-control.md` beside the adjudicator's report.

Four measurements now exist. Cunningham stricter with 14 findings, Humble matching with 8, Kim
matching with 11, Karpathy stricter with 10. On the rule `SKILL.md` states in advance, a stricter
control is the result that reverses the 2026-09-17 narrowing of round 3, and that result has now
arrived twice in four runs. Every one of the four filed live findings the anchored pass did not. On this
page the count is precise: of its nine numbered findings, seven are live in the text that ships
(K1, K2, K3, K5, K6, K8, K9), K4 is a process item about what the review brief hands a seat, and K7
is closed by the return edges applied at Ship. The narrowing should be treated as failing
rather than as thin: the question it was narrowed on was whether a single adjudicator can carry the
last read on a quiet page, and half the measured answers are no.

The control is also now the only reader on the record who has caught a defect in a field three
rounds of five seats read and endorsed. That is a different and stronger claim than "it reads the
fields they skipped", and it is the first evidence for it.

Not repaired on the branch, and carried to Julie in the merge request instead: K1, K2, K3, K5, K6,
K8 and K9. Nothing on the page changed after the round 3 editor pass, so the control's report
describes the shipping text exactly, which is what its brief promises and what the 2026-09-22 run
could not say. K7, the missing Beck return edge, is closed by the return edges applied at Ship.
K4 is a process item.

## Things this run confirms rather than adds

- The 230-word seat cap and the instruction to skip `sources.md` held across a three-page batch, the
  largest run so far. No agent stalled; round 2 reports came in between 5.7KB and 7.6KB.
- Round 2 leaving nothing below ACCEPT-WITH-EDITS is the outcome on all five pages reviewed since
  2026-09-22, Humble and Cunningham then Alexander, Kim and Karpathy, so the adjudication branch is
  the normal branch and not the exception. The Kim entry counts the same five; this page is one of
  them and adds none.
- `inbound-claims.ts` at stage 1 earned its place again. The three live claims it surfaced on
  `simon-willison.md` were all wrong by four days, and all three were corrected in the same change
  that shipped the page rather than left as two published pages disagreeing.
- The return-edge re-read at Ship caught the schema value in the Beck label, on a plan that had
  already been re-read against the finished page on 2026-09-24 and had two near-same-words defects
  repaired in that pass. A plan re-read once is not a plan re-read enough.
