# Will Larson: page claims map

Which fact carries which factual field. `scripts/fact-ledger.ts` derives the required list from the
page itself, so a new frame, a new critic edge or a new book adds a line here automatically.
Format: `- <field path> [S:n] [S:n]`.

Interpretation is not listed here. The Editorial Reading has its own map in `reading-claims.md`,
and the Councils judge the rest. Lines below the required set are recorded anyway, because three
inclusion seats asked for specific claims to be traceable.

- active_years [S:48] [S:49] [S:3] [S:4]
- background [S:1] [S:2] [S:3] [S:4] [S:5] [S:6] [S:32] [S:33] [S:34]

- named_frames[0].attribution [S:12] [S:13] [S:39]
- named_frames[1].attribution [S:14] [S:38] [S:39] [S:56] [S:59]
- named_frames[2].attribution [S:16] [S:42]
- named_frames[3].attribution [S:15] [S:40]
- named_frames[3].co_originators[0] [S:40]
- named_frames[3].co_originators[1] [S:40]
- named_frames[4].attribution [S:19] [S:20] [S:23] [S:24]
- named_frames[4].co_originators[0] [S:23] [S:24]
- named_frames[5].attribution [S:17] [S:47]
- named_frames[6].attribution [S:18] [S:41] [S:60]
- named_frames[6].co_originators[0] [S:60] [S:61]
- named_frames[6].co_originators[1] [S:60]
- named_frames[7].attribution [S:25] [S:10]
- named_frames[7].co_originators[0] [S:25]
- named_frames[8].attribution [S:21]

- body_of_work[0] [S:8] [S:13] [S:35] [S:50]
- body_of_work[1] [S:7] [S:35]
- body_of_work[2] [S:9] [S:35] [S:4] [S:55]
- body_of_work[3] [S:10] [S:26]
- body_of_work[4] [S:16]
- body_of_work[5] [S:15]
- body_of_work[6] [S:22]
- body_of_work[7] [S:31]

- adjacent_thinkers[3] [S:30] [S:31]
- adjacent_thinkers[4] [S:23] [S:24]
- adjacent_thinkers[5] [S:29] [S:52]
- adjacent_thinkers[6] [S:36] [S:11]
- adjacent_thinkers[7] [S:42] [S:58] [S:16]

Recorded beyond the required set:

- tagline [S:12] [S:13] [S:15] [S:16]
- thirty_second_take [S:12] [S:13] [S:14] [S:15] [S:16] [S:20] [S:43] [S:6] [S:56]
- thesis [S:12] [S:15] [S:16] [S:17] [S:20] [S:23] [S:24] [S:40]
- working_line [S:15]
- inclusion_rationale [S:12] [S:16] [S:15] [S:21] [S:23] [S:24] [S:27] [S:29] [S:48] [S:51]
- why_they_matter_as_a_thinker [S:27] [S:29] [S:38] [S:51] [S:52] [S:59]
- limits[0] [S:12] [S:29] [S:57]
- limits[1] [S:17] [S:18] [S:32] [S:33] [S:47]
- limits[2] [S:16] [S:17] [S:18] [S:21] [S:27] [S:38] [S:54]
- limits[3] [S:23] [S:24] [S:25] [S:26]

The editorial reading maps its own sentences in `reading-claims.md` against the grounding pack.
Two lines are recorded here as well, because round 1 seats asserted facts the ledger did not hold
and the research that settled them belongs where a later round will look for it.

- reading [S:43] [S:44]
- extension [S:45] [S:46] [S:53]
- further_in.if_you_want_depth [S:7] [S:17] [S:18] [S:50]

Uncited on purpose, and expected to appear as `warn unused`:

Ewerlöf's "Staff archetypes can be anti-patterns" (S:28) disclaims criticism of Larson in terms, so
he is not a critic, and the page does not need him as a counterposition it already has from
Goedecke. The author notice on that same page (S:37) asks that it not be used for machine training,
and whether to quote him on a published page is Julie's decision. Both lines stay in the ledger so
that decision stays visible rather than being quietly resolved by omission.

## Round 3, 2026-09-17

Four fields changed and three ledger lines were added. `thirty_second_take` no longer says which
titles the archetype interviewees held, because [S:12] does not say; it names Staff, Principal and
Distinguished where the Staff-plus claim is made, which [S:14] and [S:56] carry. `limits[0]` dropped
"many of them reached through a site he owns," which no source supports ([S:57]). `body_of_work[2]`
said the executive book was written after the Calm and Carta jobs; [S:55] places February 2024
inside the Carta tenure, so it now says the book was published while he was CTO at Carta. `thesis`
gained the French and Raven lineage parenthetical the frame already carried at
`named_frames[3].co_originators`, so it cites [S:40] here too.

## The Cunningham edge, added 2026-09-22

`adjacent_thinkers[7]` is the return edge from the Ward Cunningham page, appended at the end of
`adjacent_thinkers` rather than inserted, because the lines above address edges positionally and an
insertion mid-list would shift every later index. Three lines carry it: `[S:42]` for the metaphor
behind "exception debt" being Cunningham's, `[S:58]` for what the 1992 report actually says, which
is the half `[S:42]` never quoted, and `[S:16]` for exception debt and its repair in Larson's own
post.

The label says Cunningham "supplies the analogy exception debt is built on" and stops there.
`[S:16]` records that Larson credits no prior source for the name, so nothing here claims he cited
Cunningham. The derivation is the site's reading, stated as the site's, and the Cunningham page
makes the same claim in the same terms from the other side.

## Sourcing pass, 2026-10-16

Two frames named no originator. `named_frames[6]` (team sizing heuristics) now credits V. A.
Graicunas and Lyndall Urwick in `co_originators`, on the antecedent search at [S:60] and the
second source at [S:61]; its gloss says "running back at least to" Graicunas, because the same
search found both men citing a 1922 rule of thumb. `named_frames[1]` (Staff-plus) found no
originator [S:59]: the label's origin is unsettled in the record, so nobody is credited, the kind
stays `popularized`, and the gloss now says the origin is unsettled instead of implying the label
started with him. `why_they_matter_as_a_thinker` carried the same implication ("no longer needs
his name") and was lowered in the same pass. The build still warns on Staff-plus by design: a
search that found no originator is no licence to name one. Delta table:
`_working/will-larson/sourcing-delta-2026-10.md`.
