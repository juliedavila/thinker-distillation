# David Woods: page claims map

Which fact carries which factual field. `scripts/fact-ledger.ts` derives the required list from the
page itself. Format: `- <field path> [S:n] [S:n]`.

Backfilled on 2026-10-15 against the shipped page. Every cited line is post-publication and says so
in `facts.md`. The backfill left five required fields unmapped, on purpose, because the record
contradicted or did not support what the page said: `active_years`, `background`,
`named_frames[0].attribution`, `named_frames[4].attribution` and `body_of_work[4]`. Each one is
explained in `ledger-findings.md`. (The audit of 2026-10-15 mapped a sixth,
`named_frames[4].co_originators[1]`, to a source the backfill had not found [S:21].)

Remediated on 2026-10-15 (claim-delta table: `claim-delta-2026-10.md`). The page now says what the
ledger supports, and the four surviving fields are mapped below:

- `active_years` is now 1979–present, the career start the record gives [S:4].
- `background` drops "founder and former director" of CSEL, the present-tense REA presidency, the
  Three Mile Island "investigations" and the unsourced list of incident-analysis domains. It now
  states the CSE founding with Hollnagel after Three Mile Island [S:3] [S:4], the lab's own account
  of who built and runs CSEL [S:3], Professor Emeritus [S:1] [S:4], the resilience-engineering
  writing and co-authors [S:13] [S:14] [S:15] [S:20], the 2011-2013 presidency [S:1] [S:4], and
  the Rasmussen lineage [S:2].
- `named_frames[0].attribution` moved from `original` to `extended`: the term is Gunderson's in
  ecology from 2000 [S:7] [S:8], and Woods uses it without claiming it [S:5].
- `named_frames[4].attribution` moved from `co-authored` to `distributed`: Dekker credits the view
  across several sources and people, Woods prominent among them [S:21] [S:17], with *Behind Human
  Error* among the sources [S:12].
- `body_of_work[4]` (the CSEL + REA talks bundle) was deleted, so the old index no longer exists.

Interpretation is not listed here. The Editorial Reading has its own map in `reading-claims.md`.

- active_years [S:4]
- background [S:1] [S:3] [S:4] [S:13] [S:14] [S:15] [S:20] [S:2]

- named_frames[0].attribution [S:7] [S:8] [S:5]
- named_frames[1].attribution [S:5] [S:9] [S:6]
- named_frames[2].attribution [S:2] [S:11]
- named_frames[2].co_originators[0] [S:2]
- named_frames[3].attribution [S:16] [S:14]
- named_frames[3].co_originators[0] [S:14] [S:16]
- named_frames[4].attribution [S:21] [S:17] [S:12]
- named_frames[4].co_originators[0] [S:17] [S:21]
- named_frames[4].co_originators[1] [S:21]

- body_of_work[0] [S:12] [S:13]
- body_of_work[1] [S:14]
- body_of_work[2] [S:15] [S:20]
- body_of_work[3] [S:6]

- adjacent_thinkers[4] [S:10] [S:2]
