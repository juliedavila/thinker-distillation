# Martin Fowler: page claims map

Which fact carries which factual field on `src/content/thinkers/martin-fowler.md`.
`scripts/fact-ledger.ts` derives the required list from the page. Format: `- <field path> [S:n] [S:n]`.

Backfilled 2026-10-15 against the shipped page. A field whose claim the record contradicts, or
does not support, has NO line here, on purpose: citing a line that does not support the field
would make the gate pass on a claim the sources do not carry. Those fields are listed with the
reason in `ledger-findings.md`, and the gate fails on each of them, which is the correct result.

Not mapped (see ledger-findings.md): background, named_frames[1].co_originators[0],
named_frames[2].attribution, named_frames[3].attribution, named_frames[4].attribution,
named_frames[6].attribution, body_of_work[0], body_of_work[1], body_of_work[2], body_of_work[3],
body_of_work[4], body_of_work[5]. The audit of 2026-10-15 removed three mappings whose cited
lines did not carry the field (named_frames[1].co_originators[0], named_frames[2].attribution,
body_of_work[2]); its section in ledger-findings.md gives the reasons.

- active_years [S:12] [S:27] [S:29]

- named_frames[0].attribution [S:10] [S:11] [S:26]
- named_frames[0].co_originators[0] [S:26] [S:10]
- named_frames[0].co_originators[1] [S:10] [S:13] [S:39]
- named_frames[0].derived_from [S:26] [S:10]

- named_frames[1].attribution [S:2] [S:39]
- named_frames[1].co_originators[1] [S:39]

- named_frames[2].co_originators[0] [S:3] [S:40]

- named_frames[4].co_originators[0] [S:6]
- named_frames[4].co_originators[1] [S:7] [S:31]
- named_frames[4].co_originators[2] [S:7] [S:31]

- named_frames[5].attribution [S:18] [S:35]

- named_frames[6].co_originators[0] [S:1]

- named_frames[7].attribution [S:8] [S:9] [S:37] [S:42]
- named_frames[7].co_originators[0] [S:37] [S:42]

- adjacent_thinkers[1] [S:23] [S:24] [S:1]
- adjacent_thinkers[4] [S:25] [S:30]
- adjacent_thinkers[5] [S:21] [S:38]
- adjacent_thinkers[8] [S:29] [S:21]

