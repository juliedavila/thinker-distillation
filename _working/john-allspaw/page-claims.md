# John Allspaw: page claims map

Which fact carries which factual field. `scripts/fact-ledger.ts` derives the required list from the
page itself. Format: `- <field path> [S:n] [S:n]`.

Backfilled on 2026-10-15 against the page as shipped. The five fields the backfill and audit found
contradicted (`active_years`, `background`, `body_of_work[3]`, `body_of_work[4]`,
`named_frames[2].co_originators[0]`) were corrected or removed in the 2026-10-15 remediation pass;
the before and after of each is in `claim-delta-2026-10.md`. `body_of_work[4]` (the VOID reports)
was deleted, so it has no line. The lines under "Fixed in the 2026-10-15 pass" map fields the gate
does not require but the pass changed.

Interpretation is not listed here. The Editorial Reading has its own map in `reading-claims.md`.

- active_years [S:1] [S:3]
- background [S:1] [S:2] [S:4] [S:5] [S:6] [S:7] [S:32] [S:11] [S:9] [S:10] [S:3] [S:8] [S:30] [S:34]

- named_frames[0].attribution [S:12] [S:14] [S:15]
- named_frames[0].co_originators[0] [S:12] [S:16]
- named_frames[1].attribution [S:17] [S:19] [S:20]
- named_frames[1].co_originators[0] [S:17]
- named_frames[1].co_originators[1] [S:19] [S:21]
- named_frames[1].co_originators[2] [S:20]
- named_frames[2].attribution [S:17] [S:18]
- named_frames[2].co_originators[0] [S:33] [S:22]
- named_frames[3].attribution [S:23] [S:24]
- named_frames[3].co_originators[0] [S:23]
- named_frames[3].co_originators[1] [S:24]
- named_frames[4].attribution [S:25] [S:26] [S:13]
- named_frames[4].co_originators[0] [S:25] [S:26]
- named_frames[4].co_originators[1] [S:13] [S:29]

- body_of_work[0] [S:12] [S:14] [S:15]
- body_of_work[1] [S:11]
- body_of_work[2] [S:17] [S:18]
- body_of_work[3] [S:3] [S:20] [S:24]

## Fixed in the 2026-10-15 pass

- inclusion_rationale [S:12] [S:14] [S:15] [S:17] [S:18] [S:20] [S:33] [S:3] [S:8]
- thirty_second_take [S:17] [S:12] [S:3] [S:8]
- why_they_matter_as_a_thinker [S:14] [S:17] [S:18] [S:20] [S:33]
- working_line [S:12]
- named_frames[0].one_line_gloss [S:12]
- still_load_bearing_despite [S:12] [S:14] [S:15]
- adjacent_thinkers[1].edge_label [S:12] [S:9]
- adjacent_thinkers[3].edge_label [S:30] [S:28]
- further_in.start_here [S:12]
- further_in.then_read [S:17] [S:18] [S:28] [S:3] [S:20]

## Added in the 2026-10-17 sourcing pass

- body_of_work[4] [S:37] [S:1] [S:2] [S:9]
- adjacent_thinkers[5].edge_label [S:36] [S:35]
