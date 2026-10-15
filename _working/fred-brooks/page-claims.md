# Fred Brooks: page claims map

Which fact carries which factual field. `scripts/fact-ledger.ts` derives the required list from the
page itself. Format: `- <field path> [S:n] [S:n]`.

Backfilled 2026-10-15 against the shipped page. The backfill left four fields unmapped because the
record contradicted them (see `ledger-findings.md`). The remediation pass of 2026-10-15 corrected
those fields on the page to what the ledger says, and they are mapped below:

    active_years: now 1956–2020, the end of his research work [S:7], not his death year [S:1]
    background: IBM 1956 to 1965 and UNC from 1964 [S:1]; retired from teaching in 2013 [S:7] (2015 by [S:5]); research until 2020 [S:7]; OS/360 as IEEE Spectrum's "world's largest software project at the time" [S:7] beside ACM's "perhaps the largest" [S:2] (review, 2026-10-15)
    named_frames[2]: now `extended`, with Aristotle [S:15] and Nancy Greenwood Brooks [S:14] as co-originators
    named_frames[5]: now `extended`, with Harlan Mills as co-originator [S:23] [S:24]

body_of_work[3] rests on a secondary citation for title and year [S:31] plus two sources that a
Turing Award lecture on design existed [S:28] [S:29]. The unsourced "one-hour" length and the
site's "talk version of the 2010 book" were removed from the page in the remediation pass.

Interpretation is not listed here. The Editorial Reading has its own map in `reading-claims.md`.

- active_years [S:1] [S:7]
- background [S:1] [S:2] [S:3] [S:4] [S:5] [S:7] [S:8] [S:30]

- named_frames[0].attribution [S:2] [S:17] [S:18]
- named_frames[1].attribution [S:12] [S:13] [S:26]
- named_frames[2].attribution [S:14] [S:15] [S:16]
- named_frames[2].co_originators[0] [S:15] [S:16]
- named_frames[2].co_originators[1] [S:14] [S:16]
- named_frames[3].attribution [S:21] [S:22] [S:32]
- named_frames[4].attribution [S:19] [S:20] [S:33]
- named_frames[5].attribution [S:23] [S:24] [S:25]
- named_frames[5].co_originators[0] [S:24] [S:23]

- body_of_work[0] [S:9] [S:10]
- body_of_work[1] [S:11] [S:12] [S:13] [S:15]
- body_of_work[2] [S:27]
- body_of_work[3] [S:31] [S:28] [S:29] [S:3]
