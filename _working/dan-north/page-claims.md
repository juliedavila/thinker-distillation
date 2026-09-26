# Daniel Terhorst-North (dan-north): page claims map

Which fact carries which factual field. `scripts/fact-ledger.ts` derives the required list from the
page itself. Format: `- <field path> [S:n] [S:n]`. Positional indices were derived from the page as
drafted on 2026-09-25; re-derive them if an edge or frame is inserted anywhere but the end.

Interpretation is not listed as a requirement. The second block covers the prose fields anyway,
so the map says what each of them rests on; `reading` and `extension` have their own map in
`reading-claims.md`.

## Required

- active_years [S:14] [S:27] [S:36]
- background [S:8] [S:1] [S:4] [S:5] [S:6] [S:7] [S:9] [S:10] [S:11]

- named_frames[0].attribution [S:14] [S:17] [S:18] [S:38] [S:12] [S:13] [S:16]
- named_frames[0].co_originators[0] [S:15]
- named_frames[0].derived_from [S:12]
- named_frames[1].attribution [S:15] [S:20] [S:17] [S:41]
- named_frames[1].co_originators[0] [S:15] [S:20]
- named_frames[2].attribution [S:21] [S:22] [S:40] [S:23] [S:37]
- named_frames[3].attribution [S:26] [S:27] [S:39] [S:25]
- named_frames[4].attribution [S:33] [S:34] [S:3]
- named_frames[4].co_originators[0] [S:33] [S:34]
- named_frames[4].co_originators[1] [S:33] [S:34]
- named_frames[5].attribution [S:35]
- named_frames[5].co_originators[0] [S:35]

- body_of_work[0] [S:12]
- body_of_work[1] [S:22] [S:23]
- body_of_work[2] [S:27] [S:28]
- body_of_work[3] [S:26]
- body_of_work[4] [S:33]
- body_of_work[5] [S:9]
- body_of_work[6] [S:10]
- body_of_work[7] [S:36]

- adjacent_thinkers[4] [S:29] [S:30] [S:31] [S:25] [S:45]
- adjacent_thinkers[5] [S:32] [S:25] [S:46]
- adjacent_thinkers[6] [S:23] [S:37] [S:22]

## Prose fields, beyond the required set

- tagline [S:14] [S:15] [S:20]
- thirty_second_take [S:12] [S:13] [S:14] [S:15] [S:47] [S:20] [S:22] [S:26] [S:27]
- why_they_matter_as_a_thinker [S:41] [S:15] [S:24] [S:28]
- thesis [S:12] [S:13] [S:15] [S:22] [S:27]
- working_line [S:14]
- inclusion_rationale [S:14] [S:27] [S:41] [S:3] [S:16] [S:23] [S:37]
- limits[0] [S:3] [S:2] [S:13] [S:15] [S:16] [S:33] [S:35]
- limits[1] [S:19]
- limits[2] [S:15] [S:22] [S:42]
- limits[3] [S:23] [S:22] [S:37] [S:24]
- still_load_bearing_despite [S:15] [S:22] [S:41]
- adjacent_thinkers[0] [S:33] [S:34] [S:35]
- adjacent_thinkers[1] [S:20] [S:35]
- adjacent_thinkers[2] [S:36]
- adjacent_thinkers[3] [S:15] [S:20]
- further_in [S:12] [S:20] [S:22] [S:27] [S:9] [S:23] [S:29] [S:37]
- reading [S:45] [S:46]
- extension [S:43] [S:44]

Notes on scope. `limits[2]` is the site's inference from two of his frames and says so in its own
text; its citations support the premises, never the conclusion. `thesis` names the site's
unifying reading and labels it as the site's, per every inclusion seat. `why_they_matter` claims
"two years" for CUPID's three write-ups: first write-up 2021-03-16 [S:26], latest of the three
2022-09-10 [S:28].

Round 1 editor additions (2026-09-25). `limits[2]` now quotes Aslak Hellesøy [S:42]; the sentence after the quotation is the site's and says so. `extension` has a line of its own because one sentence carries two outside facts no grounding-pack ID holds: [S:43] for a rerun failing at temperature 0, [S:44] for a fixed attack string saying little about an adaptive variant. `adjacent_thinkers[0]` adds [S:35] for the blue-green pairing; its "first of three authors" rests on the author order in [S:33].

Round 2 editor changes (2026-09-25), no citation added or removed. `named_frames[1]` gloss now attributes the Ivan Moore credit to Fowler's footnote report in [S:20], where it had printed Fowler's wording as Terhorst-North's own. `named_frames[2]`, `limits[3]` and `adjacent_thinkers[6]` now mark Armour's "2nd Order Ignorance" as Needham's quotation [S:37], since [S:23] records that Armour's text was not read. `limits[2]` now names the harm [S:42] actually states, a common understanding across roles, and lost its closing sentence about security findings. `adjacent_thinkers[0]` no longer puts the requirements turn after the 2006 paper; [S:15] dates it to the end of 2004. `named_frames[4]` lost "first", which neither [S:33] nor [S:34] supports. `body_of_work[2]` lost "the least outside uptake", which [S:28] (three write-ups) against [S:24] (one) contradicts.

Round 3 editor changes (2026-09-25), no citation added or removed. `adjacent_thinkers[1]` sentence 1 now says the bliki recorded "two of" the joint-work credits, where "both" miscounted a set of three; the third, the pipeline, rests on [S:33] [S:34], which this edge does not cite and does not need to. `limits[3].headline` now names second-order ignorance as the older item, where "central term" read as the name Deliberate Discovery, which [S:40] finds no earlier holder of; the headline is carried by the unchanged elaboration's [S:23] [S:22] [S:37] [S:24].

Cold reader editor changes (2026-09-25). `adjacent_thinkers[4]` (Martin) now carries the single responsibility charge and the "far more likely" irony wording, both on [S:45], which also records the absence check behind "does not address BDD". `adjacent_thinkers[5]` adds [S:46] for its target being the talk alone. `reading` gets a line of its own for sentence 7, "neither addresses CUPID or BDD", on [S:45] [S:46]; its other sentences cite pack IDs in `reading-claims.md`. `thirty_second_take` now orders agiledox and the "should" convention before the name and Matts after it, on [S:47]. `body_of_work[5]` and `background` drop "sixth of six" for the alphabetical reason now recorded on [S:9]. `background` marks "first tech employee" as the profile's account [S:5]. `limits[0]` no longer offers author order as evidence against "co-invented" [S:33]. `limits[1].headline` now matches [S:19] (the teaching of TDD). `limits[3].headline`, `inclusion_rationale` and `further_in` now carry the Needham qualifier on Armour [S:23] [S:37]. `still_load_bearing_despite` routes the requirements turn through Matts [S:15]. `thesis` no longer files CUPID under planning [S:27].
