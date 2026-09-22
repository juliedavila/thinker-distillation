# Ross Anderson: page claims map

Which fact carries which factual field. `scripts/fact-ledger.ts` derives the required list from the
page itself, so a new frame, a new critic edge or a new book adds a line here automatically.
Format: `- <field path> [S:n] [S:n]`.

Interpretation is not listed here. The Editorial Reading has its own map in `reading-claims.md`,
and the Councils judge the rest. Lines below the required set are here so a verified fact that the
page states somewhere other than a required field does not read as dropped in the ledger's
`warn unused` output.

## Required by the ledger

- active_years [S:17] [S:40] [S:2]
- background [S:1] [S:3] [S:4] [S:5] [S:6] [S:7] [S:8] [S:9] [S:10] [S:11] [S:39] [S:2]

- named_frames[0].attribution [S:18] [S:19] [S:17] [S:60]
- named_frames[1].attribution [S:21] [S:22] [S:29] [S:31] [S:33] [S:39]
- named_frames[1].co_originators[0] [S:22] [S:28] [S:29] [S:31] [S:33] [S:34]
- named_frames[2].attribution [S:24] [S:25] [S:21] [S:35]
- named_frames[2].co_originators[0] [S:24]
- named_frames[3].attribution [S:44] [S:45] [S:45a] [S:59]
- named_frames[3].co_originators[0] [S:44] [S:59]
- named_frames[4].attribution [S:40] [S:41] [S:43]
- named_frames[4].co_originators[0] [S:40]
- named_frames[4].co_originators[1] [S:40]
- named_frames[4].co_originators[2] [S:40]
- named_frames[4].co_originators[3] [S:40]
- named_frames[4].co_originators[4] [S:40]
- named_frames[5].attribution [S:12] [S:12a] [S:14] [S:8] [S:9] [S:54]
- named_frames[6].attribution [S:50] [S:51] [S:52] [S:53]

- adjacent_thinkers[3] [S:22] [S:28] [S:29] [S:31] [S:33] [S:34]
- adjacent_thinkers[4] [S:57]

- body_of_work[0] [S:17] [S:18] [S:19] [S:60]
- body_of_work[1] [S:15] [S:16] [S:39] [S:56]
- body_of_work[2] [S:20] [S:21] [S:22] [S:55]
- body_of_work[3] [S:24] [S:25]
- body_of_work[4] [S:44] [S:45]
- body_of_work[5] [S:40] [S:41] [S:42]
- body_of_work[6] [S:27]
- body_of_work[7] [S:46] [S:47]

## Not required, recorded anyway

These fields carry facts the ledger does not compel, so the source is written down here rather than
left to a reader's trust. The Councils still judge the wording.

- canonical_url [S:13]
- tagline [S:5] [S:18] [S:14] [S:60]
- thirty_second_take [S:1] [S:3] [S:7] [S:5] [S:6] [S:18] [S:19] [S:23] [S:29] [S:27] [S:44] [S:45] [S:60] [S:39] [S:14]
- why_they_matter_as_a_thinker [S:18] [S:35] [S:39] [S:44] [S:45] [S:45a] [S:59] [S:60]
- thesis [S:18] [S:19] [S:21] [S:23] [S:27] [S:52] [S:14] [S:58]
- working_line [S:23] [S:20]
- inclusion_rationale [S:13] [S:17] [S:21] [S:22] [S:24] [S:35] [S:36] [S:40] [S:44] [S:45] [S:45a] [S:50] [S:51] [S:59]
- limits[0] [S:21] [S:23]
- limits[1] [S:5] [S:6] [S:27] [S:52]
- limits[2] [S:14] [S:21] [S:22] [S:24] [S:40] [S:44] [S:50] [S:51] [S:59]
- limits[3] [S:19] [S:37] [S:37a] [S:37b]
- limits[4] [S:57]
- still_load_bearing_despite [S:14] [S:18] [S:23] [S:36] [S:58] [S:60]
- adjacent_thinkers[0] [S:18] [S:19] [S:58]
- adjacent_thinkers[1] [S:44] [S:45a]
- adjacent_thinkers[2] [S:38] [S:46] [S:47]
- adjacent_thinkers[5] [S:48] [S:49]
- further_in.if_you_want_depth [S:15] [S:16]
