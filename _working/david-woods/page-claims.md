# David Woods: page claims map

Which fact carries which factual field. `scripts/fact-ledger.ts` derives the required list from the
page itself. Format: `- <field path> [S:n] [S:n]`.

Backfilled on 2026-10-15 against the shipped page. Every cited line is post-publication and says so
in `facts.md`. Five required fields have NO line here, on purpose, because the record contradicts or does not
support what the page says: `active_years`, `background`, `named_frames[0].attribution`,
`named_frames[4].attribution` and `body_of_work[4]`. Each one is explained in `ledger-findings.md`.
The gate fails on those five, which is the honest result. (The audit of 2026-10-15 mapped a sixth,
`named_frames[4].co_originators[1]`, to a source the backfill had not found [S:21].)

Interpretation is not listed here. The Editorial Reading has its own map in `reading-claims.md`.

- named_frames[1].attribution [S:5] [S:9] [S:6]
- named_frames[2].attribution [S:2] [S:11]
- named_frames[2].co_originators[0] [S:2]
- named_frames[3].attribution [S:16] [S:14]
- named_frames[3].co_originators[0] [S:14] [S:16]
- named_frames[4].co_originators[0] [S:17] [S:21]
- named_frames[4].co_originators[1] [S:21]

- body_of_work[0] [S:12] [S:13]
- body_of_work[1] [S:14]
- body_of_work[2] [S:15] [S:20]
- body_of_work[3] [S:6]

- adjacent_thinkers[4] [S:10] [S:2]
