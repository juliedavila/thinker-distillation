# Alex Komoroske: page claims map

Which fact carries which factual field. `scripts/fact-ledger.ts` derives the required list from the
page itself. Format: `- <field path> [S:n] [S:n]`.

Backfilled on 2026-10-15 against the shipped page. Every cited fact is post-publication and is
marked `re-verified` in `facts.md`. A field whose claim the record contradicts, or does not
support, has NO line here, so the gate fails on it by design. Those fields, with what the record
says instead, are in `ledger-findings.md`:

active_years, background, named_frames[0].attribution, named_frames[0].co_originators[0],
named_frames[3].attribution, named_frames[4].attribution, adjacent_thinkers[0],
adjacent_thinkers[4], body_of_work[0], body_of_work[1], body_of_work[2], body_of_work[3].

Audited 2026-10-15 (independent pass): every mapped field was re-read against its cited lines. Two mappings gained a line (S:32, S:33); none was removed. The twelve unmapped fields stay unmapped, because the audit found no source that supports them as written.

Interpretation is not listed here. The Editorial Reading has its own map in `reading-claims.md`.

- named_frames[1].attribution [S:5] [S:15]
- named_frames[1].co_originators[0] [S:14] [S:6] [S:32]
- named_frames[2].attribution [S:9] [S:10] [S:11]
- named_frames[2].co_originators[0] [S:11]
- named_frames[5].attribution [S:16] [S:21] [S:17] [S:18]
- named_frames[5].co_originators[0] [S:17] [S:18] [S:33]
- named_frames[5].co_originators[1] [S:18]

- adjacent_thinkers[1] [S:10] [S:11]

- body_of_work[4] [S:2] [S:30]
