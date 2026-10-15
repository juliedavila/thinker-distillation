# Andrej Karpathy: page claims map

Which fact carries which factual field. `scripts/fact-ledger.ts` derives the required list from the
page itself, so a new frame, a new critic edge or a new book adds a line here on its own. Format:
`- <field path> [S:n] [S:n]`.

The Editorial Reading has its own map in `reading-claims.md`. Interpretation is judged by the
Councils and is not traced here, with one exception: the prose fields a reader meets first are
listed below anyway, because the Humble control's first finding landed in a field that file had no
line for while claiming full coverage.

## Required set

- active_years [S:25] [S:24] [S:1]
- background [S:1] [S:2] [S:3] [S:4] [S:5] [S:6] [S:24] [S:29] [S:29a]

`[S:5]` and `[S:6]` joined the `background` line in round 1, because its closing sentence measures an
interval and only the hire date `[S:3]` was cited for it. The essay is dated 2017-11-11 `[S:5]`, corroborated
`[S:6]`, and the hire was reported 2017-06-20 `[S:3]`, which is four months and twenty-two days, so the
field now reads "just under five months" where it read "five months." Seat 3 raised this as arithmetic over
lines already on file rather than as a new fact, and that is what it is.

- named_frames[0].attribution [S:5] [S:6] [S:7] [S:7a]
- named_frames[1].attribution [S:9] [S:9a] [S:10] [S:11]

The `co_originators` line is gone, with the field. Round 1 seat 5 read SCHEMA 4.7, which reserves
`co_originators` for a frame with several originators, against a page that filed Willison there for
narrowing the term after the coinage, on a frame marked `original` to Karpathy. Every other use of the field
on the roster credits the earlier party on a frame the page holds as `extended` or `popularized`, which is
the inverse of this one, and Willison's own page already lists Karpathy that way. The `extends` edge and the
frame gloss carry the relation, so nothing about it left the page.

Both attribution lines cite their antecedent search, because that search is what licenses
`original` and nothing else on the line does. `[S:7a]` was filed against the Software 2.0 gloss
alone until 2026-09-24, and `[S:9a]` did not exist: vibe coding was marked `original` on the
strength of two parties crediting him and no search for earlier use. That is the defect the
Cunningham unanchored control found on a shipped page, so it is closed here rather than left for a
review round. Neither search reaches the page as prose. An absence over a bounded index is evidence
for a structured field and would be site bookkeeping in a field a reader meets.

- body_of_work[0] [S:5] [S:28]
- body_of_work[1] [S:25]
- body_of_work[2] [S:8]
- body_of_work[3] [S:20] [S:20a]
- body_of_work[4] [S:22] [S:21]
- body_of_work[5] [S:17] [S:17a] [S:18] [S:19] [S:32]
- body_of_work[6] [S:23]

- adjacent_thinkers[2] [S:13]
- adjacent_thinkers[3] [S:1] [S:2] [S:24] [S:5]

## Beyond the required set

Listed because these are the fields a reader meets first, and because a `parallel`, `extends` or
`hosts` edge adds no required line, which makes it unchecked rather than uncontroversial.

- tagline [S:5] [S:9]
- thirty_second_take [S:5] [S:27] [S:9] [S:10] [S:12] [S:23]
- why_they_matter_as_a_thinker [S:7] [S:12] [S:20] [S:21]
- thesis [S:5] [S:27] [S:9] [S:23]
- working_line [S:5]
- inclusion_rationale [S:5] [S:6] [S:7] [S:9] [S:10] [S:11] [S:12] [S:14] [S:15] [S:17] [S:17a] [S:18] [S:19]
- named_frames[0].one_line_gloss [S:5] [S:7] [S:7a] [S:27]
- named_frames[1].one_line_gloss [S:9] [S:10] [S:11]

- limits[0] [S:9] [S:10] [S:11]
- limits[1] [S:23] [S:10]
- limits[2] [S:5] [S:1] [S:3]
- limits[3] [S:28]
- limits[4] [S:13] [S:14] [S:14a] [S:14b] [S:15] [S:16]
- still_load_bearing_despite [S:28] [S:20] [S:21] [S:23]

- adjacent_thinkers[0] [S:11] [S:9] [S:10]
- adjacent_thinkers[1] [S:30]
- adjacent_thinkers[4] [S:7]

**The Beck edge was the one claim on this page sourced on a neighbour's ledger, and it is now
sourced here.** `adjacent_thinkers[1]` is `parallel`, so it takes no required line, and the
quotation it carries was verified only as `[S:28]` in `_working/kent-beck/facts.md`. Seat 3 of the
inclusion Council named that and asked for the line to be copied in before ship; the post was
re-opened at its own URL on 2026-09-24 and the quotation, the date and the absence of Karpathy's
name all hold, so the claim is `[S:30]` here. A `parallel` edge is unchecked rather than
uncontroversial, which is the general form of the reason.

- further_in [S:5] [S:25] [S:17] [S:23] [S:11] [S:13] [S:14] [S:15] [S:20] [S:21]
- extension [S:31]

**The `extension` line is the one interpretation field traced here, and only for one clause.** The field
is judged by the Councils and mapped sentence by sentence in `reading-claims.md` against grounding-pack
IDs, which is where it belongs. Its closing clause is different: after round 1 it says that a criterion
passed on a held-out set says nothing about attacker-chosen inputs, which rests on what an adversarial
example is in the field rather than on anything Karpathy wrote. Seat 4 asserted that and cited nothing, so
it was researched and is now `[S:31]`, and the line sits here so the ledger shows the clause carrying a
source instead of showing `[S:31]` as a verified fact nothing uses.

**Three fields carried the coinage day flatly and all three were lowered in one pass.** `[S:10]` records
that the day rests on decoding the post's own identifier, and that the one published account giving a day
gives February 6th. `named_frames[1].one_line_gloss` now names the disagreement where the coinage is
defined; `limits[0]` and `inclusion_rationale` now read February 2025, which is the month Wikipedia
supports and the level at which neither field needs the day. The calibration item is the Anderson and
Cunningham one: a claim lowered in one field gets lowered everywhere it is carried, in the same pass.
**What this pass could not close:** `src/content/thinkers/simon-willison.md` still reads 2025-02-06 at
lines 174, 181 and 430, so two live pages disagree about the day. Editing a neighbour is out of scope for
a round 1 resolution, and the correction is already recorded in `facts.md` `[S:10]` and `sources.md` §0. It
belongs in the return-edge pass at Ship and in the merge request description.

**Three fields also defined the coinage by the unread diff, and all three moved.** Round 1 seat 5
found the frame gloss opening on Willison's definition, "building software with an LLM without
reviewing the code it writes" `[S:11]`, three sentences before the same field says that definition is
Willison's. The gloss and the `tagline` now use the coinage post's own words `[S:9]`, giving in to the
vibes and forgetting the code exists. `thirty_second_take` carried the same apposition and was not on
the seat's list; it now reports the unread diff as his account of his own practice, which is what
`[S:9]` records ("I 'Accept All' always, I don't read the diffs anymore"), rather than as what the
word names. `[S:9]` joined that field's line in the same edit, since the field asserted it and did
not cite it. `[S:10]` left the `tagline` line, where no date claim has ever stood.

**Round 2 added no source and removed two undated claims about the present.** Neither edit needed a
new line, and both closed a field that was asserting more than its line holds. `limits[1]` cited
`[S:23]`, the Dwarkesh Patel interview of 2025-10-17, and closed on "not a stage the tooling has
since grown out of," which is a claim about the interval since. Read straight through, the ledger
carries nothing later from him on coding models: `[S:29]` and `[S:29a]` are later, May 2026, and are
about the Anthropic move; `[S:14]`, `[S:15]` and `[S:16]` are later and are other people arguing
about the practice. So the field now closes on what this page's record holds and stops where the
record does. `limits[3]` cites `[S:28]` alone, which is the essay's own 2017 limitations section, and
the headline read "it has not been paid" while the closer read "Eight years on, those are still the
open items." Both dated the state of interpretability work in 2026 off a 2017 source, and `grep -in
'interpretab' facts.md` returns nothing, so no line on this ledger dates it at all. The headline now
bounds the claim to the essay and the closer draws the judgment without dating anything. Seat 3
raised both, seat 4 endorsed both, and the second one is the field this page's only instruction about
accepting the trade sits in.

**One claim was removed because the ledger contradicts it.** `limits[4]` closed on "the word, which
now circulates with no author attached." The line for that field is `[S:13] [S:14] [S:14a] [S:14b]
[S:15] [S:16]`, none of which bears on whether the word carries his name, and two lines that do bear
on it say the opposite: `[S:9a]` records Willison's "The term was coined by Andrej Karpathy" and
`[S:12]` is a dictionary-level record of his coinage. Round 2 seat 5 found it. The sentence also
restated `limits[0]`'s correction and borrowed the closing words of `simon-willison.md`'s tagline,
which is this page's `strength: primary` neighbour. It is deleted rather than rewritten, because the
two sentences before it already carry the limit.

**The `extension` risk clause was left alone for the second round running**, so `[S:31]` still
carries it and no line was added for the silent-bias mode. Round 2 seat 2 asked again for the swap,
seat 4 argued against it, and the reasons for keeping the adversarial form are in the round 2 editor
notes. What matters for this file: the claim the swap rests on, that an evaluation set drawn from the
same data shares that data's biases, is the seat's own inference by its own account, and this session
has no web-search budget left to source it. An unsourced claim does not reach the page whoever
proposes it, so a round 3 that reverses the call has to source it first.

## What is deliberately absent

- **No `live_edge`.** The field is optional and the honest survey behind it could not be run: the
  research pass had no WebSearch budget, so discovery was limited to known URLs, and the newest
  artifact anyone reached is 2025-10-17 `[S:23]`, eleven months before `last_observed` would have
  read 2026-09-22. SCHEMA 4.14 forbids presenting stale information as current, and the calibration
  list already holds one sighting of a dated talk title rendered as present activity. Eureka Labs is
  in `background` instead, where a founding date is a fact about the past.

  **Read this next to what the 2026-09-24 re-read found.** Declining the optional field did not save
  the page from the thing the field is dangerous for: `background` still said "since July 2024 has
  run Eureka Labs," and he had been at Anthropic since 2026-05-19 `[S:29]`. A present-tense verb in
  a biography is a `live_edge` claim wearing different clothes, and it escaped because no rule made
  anyone date it. The clause is now dated and the move recorded. The restraint that failed was
  looking only where stage 1 had already looked: his own site carries neither employer, so the
  reachability limit hid a fact that two fetchable news outlets and Wikipedia all held.
- **No Software 3.0 frame, and no LLM OS or jagged intelligence.** Reasons in
  `inclusion_rationale`, `sources.md` §5 and §8.
- **`[S:26]`, the Ng objection, is verified and deliberately uncited**, so the ledger's `warn
  unused` line for it is expected rather than a claim a rewrite dropped. It is Wikipedia's summary
  of a letter nobody reached, which bars it from a `critiques` edge and from being quoted as Ng's
  words. It stays in the ledger so a later pass chases the primary instead of re-deriving that the
  objection exists.
- **No "cited by" anywhere.** `[S:7]` establishes that other authors use the term as the subject of
  their own work. The papers were not opened, so citation of him is not on the record, and the Ré
  edge label says so in its last sentence. Round 1 seat 3 found the one field that had gone past
  this: `why_they_matter_as_a_thinker` read "as the subject of other people's work rather than as a
  citation inside it," which asserts an absence nobody checked. It now reads "carried in their
  titles," which is what `[S:7]` holds. The same field's SambaNova clause was lowered with it, from
  a processor architecture named after the frame to a paper on accelerating it with dataflow, which
  is the 2021 title; the processor in it is the SN10 RDU. `inclusion_rationale` carried the same
  overreach and now reads "carrying it in their titles."
