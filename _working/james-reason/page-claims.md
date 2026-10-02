# James Reason: page claims map

Which fact carries which factual field. `scripts/fact-ledger.ts` derives the required list from the
page itself. Format: `- <field path> [S:n] [S:n]`. Interpretation is not listed in the required
block; the Editorial Reading has its own map in `reading-claims.md`.

## Required fields

- active_years [S:2] [S:13]
- background [S:1] [S:2] [S:3] [S:4] [S:5] [S:6] [S:7] [S:8] [S:21] [S:33]

- named_frames[0].attribution [S:14] [S:15] [S:16] [S:17] [S:18] [S:23] [S:48] [S:53]
- named_frames[0].co_originators[0] [S:15] [S:21]
- named_frames[0].co_originators[1] [S:17] [S:53]
- named_frames[1].attribution [S:17] [S:18] [S:21] [S:22] [S:23] [S:39]
- named_frames[1].co_originators[0] [S:17] [S:21]
- named_frames[1].co_originators[1] [S:17]
- named_frames[1].co_originators[2] [S:17]
- named_frames[2].attribution [S:24] [S:25] [S:26] [S:49]
- named_frames[2].co_originators[0] [S:25]
- named_frames[2].co_originators[1] [S:25]
- named_frames[3].attribution [S:23] [S:50]
- named_frames[4].attribution [S:7] [S:10] [S:28] [S:29] [S:30]
- named_frames[4].co_originators[0] [S:29] [S:30]
- named_frames[4].co_originators[1] [S:10]
- named_frames[5].attribution [S:30]
- named_frames[5].co_originators[0] [S:30]

- body_of_work[0] [S:23]
- body_of_work[1] [S:9] [S:14]
- body_of_work[2] [S:11] [S:18] [S:20] [S:26]
- body_of_work[3] [S:24] [S:25]
- body_of_work[4] [S:22] [S:21]
- body_of_work[5] [S:14] [S:15] [S:16] [S:17] [S:38]
- body_of_work[6] [S:12]

- adjacent_thinkers[3] [S:17] [S:30]
- adjacent_thinkers[4] [S:17] [S:21]
- adjacent_thinkers[5] [S:38] [S:39] [S:40] [S:45] [S:46] [S:47]

## Other factual prose, traced (not required by the script)

- tagline [S:15] [S:16] [S:18] [S:21] [S:22] [S:23]
- thirty_second_take [S:2] [S:6] [S:10] [S:14] [S:15] [S:16] [S:20] [S:22] [S:23] [S:24] [S:33] [S:34] [S:39]
- why_they_matter_as_a_thinker [S:33] [S:34] [S:35] [S:36]
- thesis [S:17] [S:22] [S:23] [S:24] [S:39] [S:47] [S:51]
- inclusion_rationale [S:2] [S:13] [S:33] [S:35] [S:36] [S:37] [S:42] [S:44] [S:24] [S:26] [S:31] [S:49]
- limits[0] [S:19] [S:20]
- limits[1] [S:40] [S:46]
- limits[2] [S:42] [S:33]
- limits[3] [S:23]
- still_load_bearing_despite [S:20] [S:24] [S:46] [S:47]
- adjacent_thinkers[0] [S:31] [S:35]
- adjacent_thinkers[1] [S:42]
- adjacent_thinkers[2] [S:14] [S:42]
- further_in [S:23] [S:24] [S:14] [S:9] [S:11] [S:45] [S:31]

## Unused ledger lines, and why nothing cites them

Line S:27: Brazier's obituary on the Culpability Decision Tree: secondary, and the just-culture frame is carried by Reason's own 1998 paper [S:24] [S:25]; the tree is not a frame here.
Line S:32: The 2006 report on "sharp end, blunt end": the page keeps sharp end off its frames until *Human Error* is read for the verbatim terms. The line carries the Cook correction in `return-edges.md`.
Line S:41: Leveson 2004: names-him and argues-against are only PLAUSIBLE, so no edge and no limit rest on it (inclusion Council, all seats).
Line S:52: Reason's 1979 "Actions not as planned", an index record only: it bounds the slip priority and supports no field, so the slips gloss attributes Norman's priority to the secondary account [S:30] instead of citing this line for anything.
Line S:43: Larouzée and Le Coze 2020: a defence of the model, read only as an abstract; nothing on the page needs it.
