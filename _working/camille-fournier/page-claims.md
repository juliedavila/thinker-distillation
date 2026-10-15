# Camille Fournier: page claims map

Which fact carries which factual field. `scripts/fact-ledger.ts` derives the required list from the
page itself. Format: `- <field path> [S:n] [S:n]`.

Backfilled 2026-10-15 against the shipped page. Every cited line is a post-publication
re-verification. Fields whose claim the record contradicts or does not support are deliberately
left unmapped, so the gate fails on them; each one is written up in `ledger-findings.md`:

    active_years: contradicted, public management writing from 2013 (facts 30 and 35)
    named_frames[1].co_originators[0]: the quoted Kua line is attributed to the 2014 book; the only located source is a 2018 talk (facts 19 and 20)
    adjacent_thinkers[0]: the located text uses "accidental complexity" without naming Brooks or the essential/accidental distinction (fact 14)

Interpretation is not listed here. The Editorial Reading has its own map in `reading-claims.md`.

- background [S:1] [S:2] [S:13] [S:15] [S:16] [S:17] [S:24]
- working_line [S:10]

- named_frames[0].attribution [S:22] [S:23] [S:3]
- named_frames[1].attribution [S:22] [S:21] [S:19]
- named_frames[2].attribution [S:4] [S:33]
- named_frames[3].attribution [S:9] [S:31] [S:6]
- named_frames[3].co_originators[0] [S:6]
- named_frames[4].attribution [S:8] [S:34] [S:37] [S:6]
- named_frames[4].co_originators[0] [S:6]
- named_frames[5].attribution [S:12] [S:6]
- named_frames[5].co_originators[0] [S:6]
- named_frames[6].attribution [S:9] [S:11] [S:6]
- named_frames[6].co_originators[0] [S:6]
- named_frames[7].attribution [S:5] [S:7]
- named_frames[7].co_originators[0] [S:32] [S:7]
- named_frames[7].co_originators[1] [S:6] [S:32]
- named_frames[8].attribution [S:29]
- named_frames[8].co_originators[0] [S:29]
- named_frames[8].derived_from [S:29]
- named_frames[9].attribution [S:24]

- body_of_work[0] [S:3] [S:21] [S:22]
- body_of_work[1] [S:6] [S:36]
- body_of_work[2] [S:3] [S:13]
- body_of_work[3] [S:29]
- body_of_work[4] [S:25] [S:36]
- body_of_work[5] [S:24]

- adjacent_thinkers[1] [S:5] [S:7]
- adjacent_thinkers[2] [S:19] [S:21] [S:22]
- adjacent_thinkers[7] [S:26] [S:27] [S:28]
