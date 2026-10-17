# Nancy Leveson: page claims map

Which fact carries which factual field. `scripts/fact-ledger.ts` derives the required list from the
page itself. Format: `- <field path> [S:n] [S:n]`. Interpretation is not listed in the required
block; the Editorial Reading has its own map in `reading-claims.md`.

## Required fields

- active_years [S:3] [S:1]
- background [S:3] [S:1] [S:4] [S:5]

- named_frames[0].attribution [S:11] [S:12] [S:30] [S:38] [S:39] [S:41]
- named_frames[0].co_originators[0] [S:12]
- named_frames[0].co_originators[1] [S:12]
- named_frames[1].attribution [S:49] [S:14] [S:15] [S:34] [S:42]
- named_frames[1].co_originators[0] [S:49] [S:14]
- named_frames[1].co_originators[1] [S:15]
- named_frames[1].derived_from [S:14] [S:37]
- named_frames[2].attribution [S:33] [S:46] [S:14] [S:24] [S:47] [S:25]
- named_frames[2].derived_from [S:34] [S:37]
- named_frames[3].attribution [S:16] [S:36]
- named_frames[3].co_originators[0] [S:16]
- named_frames[3].derived_from [S:16]
- named_frames[4].attribution [S:17] [S:18] [S:50]
- named_frames[4].derived_from [S:18] [S:50]

- body_of_work[0] [S:11] [S:12] [S:35]
- body_of_work[1] [S:7] [S:37]
- body_of_work[2] [S:15] [S:45]
- body_of_work[3] [S:33] [S:45]
- body_of_work[4] [S:19] [S:44]
- body_of_work[5] [S:20] [S:21]
- body_of_work[6] [S:6] [S:5]
- body_of_work[7] [S:16]
- body_of_work[8] [S:17] [S:29]
- body_of_work[9] [S:8]

- adjacent_thinkers[0] [S:12] [S:38]
- adjacent_thinkers[1] [S:29]
- adjacent_thinkers[2] [S:28] [S:26]
- adjacent_thinkers[3] [S:24] [S:47]
- adjacent_thinkers[4] [S:37]
- adjacent_thinkers[5] [S:9] [S:10]
- adjacent_thinkers[6] [S:12]

## Other factual prose, traced (not required by the script)

- tagline [S:11] [S:34] [S:33]
- thirty_second_take [S:38] [S:35] [S:49] [S:14] [S:15] [S:34] [S:33] [S:16] [S:19] [S:21]
- why_they_matter_as_a_thinker [S:38] [S:35] [S:23] [S:24] [S:26] [S:28] [S:43]
- thesis [S:35] [S:38] [S:12]
- working_line [S:11] [S:35]
- inclusion_rationale [S:3] [S:1] [S:23] [S:24] [S:26] [S:12] [S:49] [S:14] [S:15] [S:16] [S:18] [S:5] [S:9] [S:10] [S:43]
- limits[0] [S:28] [S:43] [S:34] [S:4] [S:13] [S:19] (the closing instruction is the site's reading of Hochstein's objection)
- limits[1] [S:24] [S:47]
- limits[2] [S:16] [S:36] [S:40] [S:42] (the last sentence is the site's reading, labelled in the body)
- limits[3] [S:18] [S:29]
- still_load_bearing_despite [S:38] [S:35]
- further_in [S:11] [S:15] [S:33] [S:24] [S:7] [S:26] [S:17] [S:29]

## Unused ledger lines, and why nothing cites them

Line S:2: her "paradigm-changing approach" self-description; kept on the ledger so that it stays an attributed quotation, and the page does not use it.
Line S:22: intent specifications, metadata only; the Council kept it deep or omitted, and the page omits it.
Line S:27: Aven's use of the term Safety-III in a title; the page makes no claim about who else uses the label.
Line S:31: home-page wording on the 2012 book and the Therac-25 article; the page dates both from [S:7] and [S:19].
Line S:32: her "Rasmussen's Legacy" paper; the Rasmussen card here rests on the 2004 paper ([S:12]), and [S:32] is held for the return-edge plan, which checks the Rasmussen page's existing label against it.
