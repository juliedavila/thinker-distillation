# Fred Brooks: page claims map

Which fact carries which factual field. `scripts/fact-ledger.ts` derives the required list from the
page itself. Format: `- <field path> [S:n] [S:n]`.

Backfilled 2026-10-15 against the shipped page. A field whose claim the record contradicts, or for
which no support was found, has NO line here, so the gate fails on it by design. Those fields are
explained in `ledger-findings.md`:

    active_years (contradicted: the record ends his activity in 2020, not 2022)
    background (contradicted: left IBM in 1965, not 1964; retired from teaching in 2013 or 2015, so did not teach until his death)
    named_frames[2].attribution (contradicted: Brooks credits Aristotle and Nancy Greenwood Brooks for the essence and accident distinction, so `original` should be `extended`)
    named_frames[5].attribution (contradicted: the surgical team is Harlan Mills's proposal, which Brooks presents under the heading "Mills's Proposal")

Audit, 2026-10-15: body_of_work[3] is now mapped. Title and year rest on a secondary citation [S:31] plus two
sources that a Turing Award lecture on design existed [S:28] [S:29]; the "one-hour" length is unsourced. See
ledger-findings.md.

Interpretation is not listed here. The Editorial Reading has its own map in `reading-claims.md`.

- named_frames[0].attribution [S:2] [S:17] [S:18]
- named_frames[1].attribution [S:12] [S:13] [S:26]
- named_frames[3].attribution [S:21] [S:22] [S:32]
- named_frames[4].attribution [S:19] [S:20] [S:33]

- body_of_work[0] [S:9] [S:10]
- body_of_work[1] [S:11] [S:12] [S:13]
- body_of_work[2] [S:27]
- body_of_work[3] [S:31] [S:28] [S:29]
