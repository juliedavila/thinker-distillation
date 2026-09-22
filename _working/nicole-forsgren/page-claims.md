# Nicole Forsgren: page claims map

Which fact carries which factual field. `scripts/fact-ledger.ts` derives the required list from the
page itself, so a new frame, a new critic edge or a new book adds a line here automatically.
Format: `- <field path> [S:n] [S:n]`.

Interpretation is not listed here. The Editorial Reading has its own map in `reading-claims.md`,
and the Councils judge the rest.

Written 2026-09-20, during the recheck. The page shipped on 2026-05-27 with no ledger behind any of
these fields, so every line below is new. `facts.md` explains what the two date columns mean and
why the intake dates are a reconstruction.

## Career

- active_years [S:17] [S:11] [S:12]
- background [S:1] [S:4] [S:6] [S:7] [S:8] [S:9] [S:10] [S:11] [S:12] [S:13] [S:18]

## Frames

- named_frames[0].attribution [S:14] [S:18] [S:13]
- named_frames[0].co_originators[0] [S:18] [S:13]
- named_frames[0].co_originators[1] [S:18] [S:13]
- named_frames[1].attribution [S:19]
- named_frames[1].co_originators[0] [S:19]
- named_frames[1].co_originators[1] [S:19]
- named_frames[1].co_originators[2] [S:19]
- named_frames[1].co_originators[3] [S:19]
- named_frames[1].co_originators[4] [S:19]
- named_frames[2].attribution [S:20] [S:21]
- named_frames[2].co_originators[0] [S:20]
- named_frames[2].co_originators[1] [S:20]
- named_frames[2].co_originators[2] [S:20]
- named_frames[3].attribution [S:14] [S:18]
- named_frames[4].attribution [S:14] [S:18]
- named_frames[4].co_originators[0] [S:18]
- named_frames[4].co_originators[1] [S:18]
- named_frames[5].attribution [S:14] [S:18] [S:15]
- named_frames[5].co_originators[0] [S:18]
- named_frames[5].co_originators[1] [S:18]
- named_frames[6].attribution [S:17] [S:25]
- named_frames[7].attribution [S:14] [S:18]
- named_frames[7].co_originators[0] [S:18]
- named_frames[7].co_originators[1] [S:18]

## Body of work

- body_of_work[0] [S:18]
- body_of_work[1] [S:19]
- body_of_work[2] [S:20] [S:21]
- body_of_work[3] [S:17] [S:14]
- body_of_work[4] [S:1] [S:5]

## Neighbours

- adjacent_thinkers[0] [S:30] [S:17]
- adjacent_thinkers[1] [S:31]

Recorded beyond the required set, because this pass changed three neighbour edges and the sourcing
should be visible where a later round will look for it. Two of the three are no longer in the
required class precisely because they are no longer typed `critiques`, which is exactly the case
where the evidence needs to stay on the record rather than dropping out of the check.

- adjacent_thinkers[4] (will-larson) [S:28] [S:29]
- adjacent_thinkers[5] (kent-beck) [S:26]
- adjacent_thinkers[6] (dan-north) [S:25]

## Live edge

- live_edge.current_focus [S:1] [S:20]
- live_edge.summary [S:20] [S:22] [S:23] [S:1]
- live_edge.recent_work[0] [S:20] [S:21]
- live_edge.recent_work[1] [S:22]
- live_edge.recent_work[2] [S:17]
- live_edge.recent_work[3] [S:23]

## Recorded beyond the required set

- inclusion_rationale [S:18] [S:19] [S:20] [S:21] [S:17]
- why_they_matter_as_a_thinker [S:14] [S:19] [S:20]
- thesis [S:14] [S:18] [S:19] [S:20]
- thirty_second_take [S:14] [S:18] [S:19] [S:20]
- working_line [S:18]
- limits[0] [S:17] [S:14]
- limits[1] [S:26] [S:29]
- limits[2] [S:14]
- limits[3] [S:15] [S:19] [S:20]
- further_in.start_here [S:18]
- further_in.then_read [S:19] [S:20] [S:17]

## Uncited on purpose, and expected to appear as `warn unused`

[S:2] and [S:3] corroborate the Google role but neither is openable to this pass: LinkedIn refuses
automated fetches and the ACM ByteCast page returns HTTP 403. The `background` field rests on [S:1],
which is openable, with the two corroborations held here rather than cited, so that no field on the
page depends on a source a reviewer cannot open.

[S:16] records that the shipped `source_link` on two frames had gone dead. The replacement link is
carried by [S:14], which those frames now cite, so [S:16] exists to keep the dead URL on the record.

[S:24] records the ACM Queue editorial board seat and the book list on her own site. Neither is on
the page. The board seat is a plausible addition to `background` and is left for an editor.

[S:27] records that no durable DHH critique could be found. The edge it describes was removed, so
nothing on the page cites it, and it stays here so the removal is not quietly reversed by a later
seat proposing the same neighbour.

[S:32] records the William & Mary professorship as unverified and deliberately unused.
