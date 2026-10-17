# Martin Fowler: page claims map

Which fact carries which factual field on `src/content/thinkers/martin-fowler.md`.
`scripts/fact-ledger.ts` derives the required list from the page. Format: `- <field path> [S:n] [S:n]`.

Backfilled 2026-10-15 against the shipped page. The backfill left twelve fields unmapped because
the record contradicted them or did not carry them (reasons in `ledger-findings.md`). The
remediation pass of 2026-10-15 rewrote each of those fields to what its lines say, and mapped it
here; the before and after of every change is in `claim-delta-2026-10.md`. Four lines were added
in that pass ([S:43] to [S:46]), each recording what its source says.

- active_years [S:12] [S:27] [S:29]
- background [S:13] [S:27] [S:14] [S:15] [S:28] [S:12] [S:1]

- named_frames[0].attribution [S:10] [S:11] [S:26]
- named_frames[0].co_originators[0] [S:26] [S:10]
- named_frames[0].co_originators[1] [S:10] [S:13] [S:11] [S:39]
- named_frames[0].derived_from [S:26] [S:10]

- named_frames[1].attribution [S:2] [S:39]
- named_frames[1].co_originators[0] [S:2]
- named_frames[1].co_originators[1] [S:39]

- named_frames[2].attribution [S:3] [S:40]
- named_frames[2].co_originators[0] [S:3] [S:40]

- named_frames[3].attribution [S:4] [S:33] [S:32]
- named_frames[3].co_originators[0] [S:32] [S:33]
- named_frames[3].co_originators[1] [S:33]

- named_frames[4].attribution [S:6] [S:34] [S:5]
- named_frames[4].co_originators[0] [S:6]
- named_frames[4].co_originators[1] [S:7] [S:31]
- named_frames[4].co_originators[2] [S:7] [S:31]

- named_frames[5].attribution [S:18] [S:35]

- named_frames[6].attribution [S:1] [S:36] [S:14]
- named_frames[6].co_originators[0] [S:1]

- named_frames[7].attribution [S:8] [S:9] [S:37] [S:42]
- named_frames[7].co_originators[0] [S:37] [S:42]

- body_of_work[0] [S:17] [S:41]
- body_of_work[1] [S:43] [S:10] [S:26] [S:13] [S:11] [S:44]
- body_of_work[2] [S:16] [S:12]
- body_of_work[3] [S:5] [S:6] [S:31]
- body_of_work[4] [S:19] [S:20]
- body_of_work[5] [S:22] [S:38] [S:3]

- adjacent_thinkers[1] [S:23] [S:24] [S:1]
- adjacent_thinkers[4] [S:25] [S:30]
- adjacent_thinkers[5] [S:21] [S:38]
- adjacent_thinkers[8] [S:29] [S:21]

Outside the gate, for the record: `why_they_matter_as_a_thinker` [S:43] [S:12]; `working_line` (deleted 2026-10-16: it put Kent Beck's sentence in the slot the template credits to Fowler as "paraphrased")
[S:45]; `limits[0]` and `reading` sentence 5 [S:19] [S:20]; `adjacent_thinkers[0]` [S:2] [S:11]
[S:13]; `adjacent_thinkers[2]` [S:3] [S:40]; `further_in.start_here` [S:41]; the long-read
preface [S:1] [S:2] [S:5] [S:6] [S:10] [S:12] [S:13] [S:14] [S:16] [S:19] [S:20] [S:21] [S:26] [S:27]
[S:32] [S:38] [S:41] [S:43] [S:44] [S:46] [S:47]. The review of 2026-10-15 added [S:47] (the CQRS entry, crediting Greg Young).

Sourcing pass of 2026-10-17 (before and after of every change in `sourcing-delta-2026-10.md`).
Seven lines added, [S:48] to [S:54], each recording what its source says. These fields sit
outside the gate's required list and are mapped here so the record shows what carries them:

- limits[1] [S:54]
- limits[2] [S:48] [S:49]
- still_load_bearing_despite [S:48] [S:49]
- adjacent_thinkers[0] [S:2] [S:11] [S:13] [S:45]

The long-read preface now also rests on [S:48] (test pyramid, credited to Mike Cohn), [S:50]
(branch by abstraction, credited to Paul Hammant for the name and Stacy Curl for the technique),
[S:51] (the microservices article's credit for the term), [S:52] (the Gang of Four form) and
[S:53] (Mocks Aren't Stubs, first published 2004). Deleted in this pass with no line behind
them: the bliki maturity badges (gloss and preface, twice) and "the two-hat rule" in the Kent
Beck label.
