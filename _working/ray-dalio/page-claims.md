# Ray Dalio: page claims map

Which fact carries which factual field. `scripts/fact-ledger.ts` derives the required list from the
page itself. Format: `- <field path> [S:n] [S:n]`.

Backfilled 2026-10-15 against the page as shipped. A field is mapped only when the cited lines
support it as the page states it. Four required fields are deliberately left unmapped because the
record contradicts them or does not support them, so the gate fails on exactly those four:
`background`, `named_frames[0].attribution`, `named_frames[1].attribution` and
`adjacent_thinkers[3]`. `ledger-findings.md` says why for each.

Interpretation is not listed here. The Editorial Reading has its own map in `reading-claims.md`.

- active_years [S:1] [S:26]

- named_frames[2].attribution [S:15] [S:14] [S:20]
- named_frames[3].attribution [S:14] [S:11] [S:21]
- named_frames[4].attribution [S:16] [S:22]

- body_of_work[0] [S:5] [S:27]
- body_of_work[1] [S:7] [S:8]
- body_of_work[2] [S:27] [S:9]
- body_of_work[3] [S:10]
- body_of_work[4] [S:12] [S:11]

Audit, 2026-10-15: `body_of_work[2]` now cites S:27 first, because the principles.com page (S:9) gives
no publication date and only implies 2018 through "the tenth anniversary of the 2008 financial crisis."
`body_of_work[0]` also cites S:27 as a second source for the 2017 date. The four unmapped fields stay
unmapped; the audit found nothing that lets any of them map as the page states it.
