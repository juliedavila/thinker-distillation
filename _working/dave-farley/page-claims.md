# Dave Farley: page claims map

Which fact carries which factual field. `scripts/fact-ledger.ts` derives the required list from the
page itself. Format: `- <field path> [S:n] [S:n]`. Interpretation is not listed; the Editorial
Reading has its own map in `reading-claims.md`.

## Required by the ledger

- active_years [S:18] [S:6] [S:17]
- background [S:1] [S:3] [S:18] [S:2] [S:7] [S:5] [S:6]

- named_frames[0].attribution [S:19] [S:20] [S:35] [S:18] [S:21]
- named_frames[0].co_originators[0] [S:35] [S:10]
- named_frames[0].co_originators[1] [S:35]
- named_frames[0].co_originators[2] [S:35]
- named_frames[0].co_originators[3] [S:19]
- named_frames[0].co_originators[4] [S:20] [S:19]
- named_frames[1].attribution [S:12] [S:13] [S:14] [S:15] [S:25] [S:41]
- named_frames[1].derived_from [S:41] [S:42]
- named_frames[2].attribution [S:26] [S:36] [S:11] [S:32] [S:38]
- named_frames[2].co_originators[0] [S:11] [S:4]
- named_frames[3].attribution [S:31] [S:30] [S:34] [S:4]
- named_frames[4].attribution [S:29] [S:10]
- named_frames[5].attribution [S:23] [S:24]
- named_frames[5].co_originators[0] [S:23]
- named_frames[5].co_originators[1] [S:23]

- body_of_work[0] [S:18]
- body_of_work[1] [S:4] [S:10] [S:11]
- body_of_work[2] [S:12] [S:13] [S:15]
- body_of_work[3] [S:7] [S:8]
- body_of_work[4] [S:23]
- body_of_work[5] [S:16]

- adjacent_thinkers[5] [S:27]

## Beyond the required set (prose fields that state facts)

These lines are not checked by the gate. They exist so a reviewer can find the source behind each
factual clause in the most-read fields.

- tagline [S:18] [S:13]
- thirty_second_take [S:18] [S:19] [S:20] [S:35] [S:4] [S:1] [S:2] [S:7] [S:12] [S:13]
- why_they_matter_as_a_thinker [S:22] [S:25] [S:26]
- thesis [S:18] [S:13] [S:25] [S:15]
- working_line [S:13]
- limits[0] [S:21] [S:16] [S:19] [S:18]
- limits[1] [S:1] [S:5]
- limits[2] [S:27] [S:37]
- adjacent_thinkers[0] [S:19] [S:10] [S:4]
- adjacent_thinkers[1] [S:18] [S:10] [S:8] [S:32] [S:11]
- adjacent_thinkers[2] [S:15]
- adjacent_thinkers[3] [S:35] [S:18] [S:19]
- adjacent_thinkers[4] [S:13] [S:33]
- adjacent_thinkers[6] [S:7] [S:23]
- further_in [S:18] [S:12] [S:19] [S:8] [S:10] [S:20] [S:26] [S:27]
- still_load_bearing_despite [S:18] [S:13]
- extension [S:36]
- inclusion_rationale [S:41] [S:42]

## Notes for review

* The thesis opens on the site's own synthesis ("Read across the 2007 paper and the 2021 book"),
  labelled as such. "The same binary is meant to run" keeps the paper's "We want" ([S:18]).
* The antecedent search for the learning and complexity split ran in the sourcing pass
  (2026-10-16, `[S:41]`); the frame stays `extended`, now `derived_from:
  essential-vs-accidental-complexity`, and no field calls it new. `[S:14]` is cited only for "the book cites", never for what it says.
* `[S:28]` (Burt) is verified and uncited on purpose: it records a rejected critic candidate and
  supports no field.
* `[S:9]` (the Duke award went to LMAX) is uncited because the page no longer repeats the bios'
  award line; it is the fact that would bound any later mention.
* `[S:24]` supports only the absence of author names in the v1.0 text.

## Round 1 editor notes (2026-10-09)

* `named_frames[2].co_originators[1]` (Martin Fowler) is gone from the page with its claims line:
  `[S:32]` records that Fowler's 2004 Window Driver page does not show the book took the pattern
  from him and says nothing about the four-layer structure. `[S:32]` is still cited by the frame
  gloss and the Fowler edge, which state the date fact only.
* `[S:38]` is added to `named_frames[2].attribution` for the display name: "Four Layer" is his own
  company's name for the structure. It bounds no date.
* `[S:37]` carries the new `limits[2]` clause that Seemann allows the claim "may still turn out to
  be true ... perhaps for other reasons".
* `adjacent_thinkers[3]` now cites `[S:19]` ("circulated within ThoughtWorks") and `[S:35]`
  (the 2006 paper's "ThoughtWorks Limited") for the route sentence.
* `[S:39]` and `[S:40]` are verified and uncited on purpose. They record the narrowed, checked part
  of a round 1 seat assertion (seat 1) about his other grounds against pull requests. Neither
  document argues against pull requests as such, so neither supports a page field, and the page
  does not say what his other reasons are.
* `thirty_second_take` now carries Humble's credit to Farley and Rickmeier on `[S:19]`, already in
  its claims line.

## Round 2 editor notes (2026-10-09)

* `named_frames[2].one_line_gloss` now quotes his company's guide ("Four Layer Separation of
  Concerns") and its course prospectus ("Dave Farley's 'Four-Layer Model'"), both recorded word for
  word at `[S:38]`, which was already on `named_frames[2].attribution`. Attributed to the company,
  because it is the company's copy. It bounds no date and makes no firstness claim; the frame stays
  `extended`.
* `named_frames[0].one_line_gloss` and `inclusion_rationale` now say "a 2005 blog entry by Sam
  Newman", the singular of `[S:19]`; "who called it a "build pipeline"" rests on `[S:20]`, already
  on `named_frames[0].attribution`.
* `extension [S:36]` is new: the sentence crediting Chris James with the configurable-driver reuse
  point rests on his wording there, which no grounding-pack ID carries.
* `limits[0]` headline now matches its body: the sales listing (`[S:16]`) claims the pipeline, his
  interview (`[S:21]`) claims the term. No new line needed.
* `why_they_matter_as_a_thinker`: "summarizes the 2021 book" restores the referent on `[S:25]`,
  already on the field's line.

## Cold reader editor notes (2026-10-09)

* `named_frames[0].co_originators[3]` (Mark Rickmeier) rests on `[S:19]`, Humble's "Dave, along with
  Mark Rickmeier, came up with the idea of deployment pipelines back in 2004". `co_originators[3]`
  (Sam Newman) rests on `[S:20]` for "build pipeline" and January 2005, and on `[S:19]` for Humble
  naming a 2005 Newman entry as the first public documentation. Neither has a page here, which is
  also true of `chris-read`; the earlier reason for leaving them out ("no page") did not hold.
* `named_frames[2].source_link` is now his company's ATDD guide (`[S:38]`, already on the frame's
  attribution line), per SCHEMA 4.7 ("Where the thinker writes about it").
* `thirty_second_take` now says the book "proposes a definition in its preface", on `[S:13]`, whose
  line now records the preface page and the "I make the claim" and "I want to propose" wording.
* `body_of_work[2]` calls the stability and throughput material a section, on `[S:15]`, whose line
  now records that it is a section of chapter 3.
* `[S:13]` also corrected: the sample's contents are not cut off after chapter 10; they list Part III
  in full (chapters 9 to 13) and run on to Part IV. No field depended on the old note.
* The unused lines are unchanged and each still has its reason above: `[S:9]`, `[S:28]`, `[S:39]`,
  `[S:40]`. This pass made none of them unused and cited none of them.

## Sourcing pass notes (2026-10-16)

* `named_frames[1].derived_from` (Brooks's essential and accidental complexity) rests on `[S:42]`:
  the book's Part III section titles "Separating Essential and Accidental Complexity" and "Abstract
  Accidental Complexity", and its six index entries for Brooks. What those pages credit to Brooks is
  not read, so the derivation covers the complexity half only. `[S:41]` records the search and
  what it bounds.
* `inclusion_rationale` now reports the search in place of "No antecedent search ... was run",
  on `[S:41]` and `[S:42]`. Delta table: `sourcing-delta-2026-10.md`.
* `[S:43]` (McConnell, 2004) is verified and uncited on purpose: an earlier statement of the
  complexity half with no recorded route to the 2021 book. It bounds the search result and supports
  no field. Whether McConnell belongs in `co_originators` is left to Julie.
* No gloss changed. The frame's gloss already implies no origination: it describes the book's
  structure and names the sources the book cites.
