# Jens Rasmussen: page claims map

Which fact carries which factual field. `scripts/fact-ledger.ts` derives the required list from the
page itself. Format: `- <field path> [S:n] [S:n]`. Interpretation is not listed in the required
block; the Editorial Reading has its own map in `reading-claims.md`.

## Required fields

- active_years [S:3] [S:34]
- background [S:1] [S:2] [S:3] [S:4] [S:5] [S:7] [S:31]

- named_frames[0].attribution [S:8] [S:10] [S:11] [S:14] [S:15] [S:37] [S:52]
- named_frames[1].attribution [S:26] [S:27] [S:28] [S:47]
- named_frames[2].attribution [S:20] [S:21] [S:22] [S:48] [S:7]
- named_frames[3].attribution [S:44] [S:24]
- named_frames[3].co_originators[0] [S:44]
- named_frames[4].attribution [S:32]
- named_frames[4].co_originators[0] [S:32]
- named_frames[5].attribution [S:33] [S:45] (the 1990 Rasmussen and Vicente paper in the gloss rests on [S:33])
- named_frames[5].co_originators[0] [S:33] [S:45]

- body_of_work[0] [S:8] [S:6] [S:10] [S:12] [S:13]
- body_of_work[1] [S:26] [S:27]
- body_of_work[2] [S:20]
- body_of_work[3] [S:44] [S:36]
- body_of_work[4] [S:31]
- body_of_work[5] [S:31] [S:5]
- body_of_work[6] [S:31] [S:46]

## Other factual prose, traced (not required by the script)

- tagline [S:10] [S:27] [S:2]
- thirty_second_take [S:3] [S:6] [S:10] [S:12] [S:13] [S:26] [S:27] [S:20] [S:23]
- why_they_matter_as_a_thinker [S:15] [S:16] [S:17] [S:34] [S:38] [S:18] [S:42] [S:30]
- thesis [S:12] [S:9] [S:13] [S:27] [S:26]
- working_line [S:13]
- inclusion_rationale [S:3] [S:46] [S:34] [S:15] [S:16] [S:17] [S:18] [S:38] [S:23] [S:42] [S:29] [S:44] [S:24] [S:32] [S:33] [S:35] [S:43] [S:11]
- limits[0] [S:12] [S:13] (the adversary sentence is the site's reading, labelled in the headline and the body)
- limits[1] [S:38] [S:50] [S:49] [S:14]
- limits[2] [S:30] [S:15] [S:16] [S:17] [S:25] [S:18]
- limits[3] [S:17]
- still_load_bearing_despite [S:10] [S:12] [S:27] [S:49] [S:50]
- extension [S:51] (the privilege-advice sentence only, whose closing consequence for the improvement review is the site's inference; every other sentence is interpretation, mapped in `reading-claims.md`)
- adjacent_thinkers[0] [S:35]
- adjacent_thinkers[1] [S:38]
- adjacent_thinkers[2] [S:28] [S:41] [S:39]
- adjacent_thinkers[3] [S:34]
- adjacent_thinkers[4] [S:37]
- adjacent_thinkers[5] [S:30]
- adjacent_thinkers[6] [S:15] [S:16] [S:25]
- further_in [S:8] [S:26] [S:34] [S:17] [S:31] [S:46] [S:44] [S:30] [S:38]

## Unused ledger lines, and why nothing cites them

Line S:19: Marsden's "drift to danger" is a misattribution; the line exists to keep it off the page, and the page carries no Marsden claim.
Line S:40: the Rasmussen and Pedersen 1984 record, unread; the Reason edge cites Reason's account of it ([S:39]) rather than the paper.
