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

Remediated 2026-10-15 (claim-delta pass, `claim-delta-2026-10.md`): each of the twelve fields was corrected, narrowed or deleted to what the lines below support, and every one is now mapped. `adjacent_thinkers[0]` (Fred Brooks) is now a `parallel` edge, labelled as the site's reading, so the gate no longer requires a line for it; the lines that bound it are noted beside it for the record. The old `body_of_work[2]` (the "Bramble / Slime Mold Essay") was deleted, so the old `body_of_work[3]` and `[4]` are now `[2]` and `[3]`. Two `co_originators` were added to `named_frames[3]` as part of correcting its attribution from `original`; `named_frames[0]` lost its Brooks co-originator.

Interpretation is not listed here. The Editorial Reading has its own map in `reading-claims.md`.

- active_years [S:22] [S:20]
- background [S:3] [S:24] [S:21] [S:2] [S:20]

- named_frames[0].attribution [S:4] [S:9] [S:12] [S:13] [S:34]
- named_frames[1].attribution [S:5] [S:15]
- named_frames[1].co_originators[0] [S:14] [S:6] [S:32]
- named_frames[2].attribution [S:9] [S:10] [S:11]
- named_frames[2].co_originators[0] [S:11]
- named_frames[3].attribution [S:8] [S:21] [S:34] [S:26] [S:27]
- named_frames[3].co_originators[0] [S:26] [S:34]
- named_frames[3].co_originators[1] [S:27] [S:34]
- named_frames[4].attribution [S:7] [S:34] [S:28] [S:29]
- named_frames[5].attribution [S:16] [S:21] [S:17] [S:18]
- named_frames[5].co_originators[0] [S:17] [S:18] [S:33]
- named_frames[5].co_originators[1] [S:18]

- adjacent_thinkers[1] [S:10] [S:11]
- adjacent_thinkers[4] [S:16] [S:17] [S:18] [S:33]

(`adjacent_thinkers[0]`, Fred Brooks, is `parallel` and needs no line. Its label rests on S:12 for Brooks's 1975 observation, S:1 for the route Komoroske gives for his own argument, and S:4, S:9 and S:13 for the absence of any mention of Brooks in the deck and the Schelling-points essay; S:34 finds none in the notes as fetched, which the label no longer states because that view may be partial.)

- body_of_work[0] [S:4] [S:1] [S:19] [S:9]
- body_of_work[1] [S:9] [S:25]
- body_of_work[2] [S:21]
- body_of_work[3] [S:2] [S:30]
