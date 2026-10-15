# Rich Hickey: page claims map

Which fact carries which factual field. `scripts/fact-ledger.ts` derives the required list from the
page itself. Format: `- <field path> [S:n] [S:n]`.

Backfilled on 2026-10-15 against the shipped page. A field is mapped only where the cited lines
support what the page says. One field is deliberately left unmapped because the record contradicts
it: `named_frames[7].attribution` (situated programs filed as `original`). See `ledger-findings.md`.
The gate is expected to fail on that field and on nothing else.

Audited 2026-10-15 by a second reader: [S:43] to [S:49] added and cited above; see the audit section of `ledger-findings.md`. The situated-programs field stays unmapped.

Interpretation is not listed here. The Editorial Reading has its own map in `reading-claims.md`.

- active_years [S:3] [S:11] [S:40] [S:46]
- background [S:1] [S:2] [S:3] [S:4] [S:5] [S:9] [S:10] [S:11] [S:40]

- named_frames[0].attribution [S:12] [S:13] [S:34]
- named_frames[0].co_originators[0] [S:12]
- named_frames[1].attribution [S:14] [S:30] [S:31]
- named_frames[2].attribution [S:15] [S:17] [S:18]
- named_frames[2].co_originators[0] [S:17]
- named_frames[2].co_originators[1] [S:18] [S:6]
- named_frames[2].derived_from [S:17] [S:15]
- named_frames[3].attribution [S:21] [S:22]
- named_frames[3].co_originators[0] [S:22]
- named_frames[4].attribution [S:23] [S:24]
- named_frames[4].co_originators[0] [S:24]
- named_frames[5].attribution [S:16] [S:36]
- named_frames[6].attribution [S:19] [S:20]
- named_frames[6].co_originators[0] [S:19]
- named_frames[8].attribution [S:26] [S:43]
- named_frames[8].co_originators[0] [S:26] [S:43]
- named_frames[9].attribution [S:7]
- named_frames[9].co_originators[0] [S:7]
- named_frames[9].co_originators[1] [S:7]

- adjacent_thinkers[0] [S:17] [S:15] [S:18]
- adjacent_thinkers[2] [S:18] [S:6]
- adjacent_thinkers[3] [S:19] [S:20]
- adjacent_thinkers[4] [S:27] [S:28] [S:29] [S:45]

- body_of_work[0] [S:12] [S:32] [S:49] [S:8]
- body_of_work[1] [S:19] [S:20]
- body_of_work[2] [S:21]
- body_of_work[3] [S:23]
- body_of_work[4] [S:25] [S:42]
- body_of_work[5] [S:8] [S:48] [S:41] [S:6] [S:7]
- body_of_work[6] [S:26]
