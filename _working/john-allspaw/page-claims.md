# John Allspaw: page claims map

Which fact carries which factual field. `scripts/fact-ledger.ts` derives the required list from the
page itself. Format: `- <field path> [S:n] [S:n]`.

Backfilled on 2026-10-15 against the page as shipped. A field whose claim the record contradicts,
or which no source supports, has no line here, so the gate fails on it by design. Those fields and
the reasons are in `ledger-findings.md`:

- `active_years` (contradicted)
- `background` (contradicted)
- `body_of_work[3]` (contradicted)
- `body_of_work[4]` (contradicted)
- `named_frames[2].co_originators[0]` (contradicted on its date; removed by the 2026-10-15 audit)

Interpretation is not listed here. The Editorial Reading has its own map in `reading-claims.md`.

- named_frames[0].attribution [S:12] [S:14] [S:15]
- named_frames[0].co_originators[0] [S:12] [S:16]
- named_frames[1].attribution [S:17] [S:19] [S:20]
- named_frames[1].co_originators[0] [S:17]
- named_frames[1].co_originators[1] [S:19] [S:21]
- named_frames[1].co_originators[2] [S:20]
- named_frames[2].attribution [S:17] [S:18]
- named_frames[3].attribution [S:23] [S:24]
- named_frames[3].co_originators[0] [S:23]
- named_frames[3].co_originators[1] [S:24]
- named_frames[4].attribution [S:25] [S:26] [S:13]
- named_frames[4].co_originators[0] [S:25] [S:26]
- named_frames[4].co_originators[1] [S:13] [S:29]

- body_of_work[0] [S:12]
- body_of_work[1] [S:11]
- body_of_work[2] [S:17] [S:18]
