# Erik Hollnagel: page claims map

Which fact carries which factual field. `scripts/fact-ledger.ts` derives the required list from the
page itself. Format: `- <field path> [S:n] [S:n]`.

The first block is the required set. The second block covers the prose fields the ledger does not
require, so a reviewer can trace them too. Interpretation is not listed; the Editorial Reading has
its own map in `reading-claims.md`. Two prose statements are the site's reading with no ledger line
by design, and are labelled on the page as such: the adversary limit (`limits[3]`), and the
still-load-bearing paragraph's judgement.

## Required

- active_years [S:3] [S:4]
- background [S:1] [S:3] [S:4]

- named_frames[0].attribution [S:11] [S:13] [S:39] [S:14] [S:41]
- named_frames[1].attribution [S:18] [S:39] [S:42]
- named_frames[2].attribution [S:24] [S:25] [S:26] [S:27] [S:30]
- named_frames[2].co_originators[0] [S:25] [S:50]
- named_frames[2].co_originators[1] [S:25] [S:50]
- named_frames[2].co_originators[2] [S:24]
- named_frames[2].co_originators[3] [S:24]
- named_frames[3].attribution [S:8] [S:9] [S:10]
- named_frames[3].co_originators[0] [S:8] [S:9] [S:10]
- named_frames[4].attribution [S:20] [S:38] [S:46] [S:43]
- named_frames[5].attribution [S:15] [S:16] [S:39] [S:40] [S:44]

- body_of_work[0] [S:13]
- body_of_work[1] [S:12]
- body_of_work[2] [S:11]
- body_of_work[3] [S:18]
- body_of_work[4] [S:9]
- body_of_work[5] [S:6] [S:5] [S:7] [S:33]
- body_of_work[6] [S:20] [S:38]
- body_of_work[7] [S:15]
- body_of_work[8] [S:34]

- adjacent_thinkers[3] [S:33] [S:45] [S:34]
- adjacent_thinkers[4] [S:32] [S:53]
- adjacent_thinkers[5] [S:14]

## Prose fields (not required by the ledger)

- tagline [S:39] [S:12] [S:18]
- thirty_second_take [S:39] [S:47] [S:18] [S:5] [S:6] [S:8] [S:9] [S:46] [S:45] [S:34]
- why_they_matter_as_a_thinker [S:28] [S:29] [S:24] [S:30] (the last sentence rests on [S:24], "WAI and WAD got a renaissance with Resilience Engineering", and [S:30], Hebert finding an English source in Hollnagel's FRAM)
- thesis [S:39] [S:18] [S:12]
- working_line [S:39]
- named_frames[0].one_line_gloss [S:39] [S:47] [S:11] [S:12] [S:14]
- named_frames[1].one_line_gloss [S:18] [S:39]
- named_frames[2].one_line_gloss [S:24] [S:25] [S:50] [S:26] [S:27]
- named_frames[3].one_line_gloss [S:8] [S:9] [S:10]
- named_frames[4].one_line_gloss [S:46] [S:38]
- named_frames[5].one_line_gloss [S:15] [S:39]
- limits[0] [S:32] [S:53]
- limits[1] [S:6] [S:45] [S:33] [S:34] [S:48] (the closing sentence quotes the white paper as a joint statement, [S:48])
- limits[2] [S:23]
- limits[3] [S:3] [S:39] [S:18] [S:12] [S:46] (the domains sentence rests on [S:3]; the success-and-failure clause on [S:18], with [S:12] and [S:46] carrying it for Safety-II and for everyday variability; the rest is the site's reading, labelled on the page. The clause "none of the critics cited here makes it" was deleted by the cold-reader editor on 2026-09-27, because Leveson was read only through her abstract and Table 1 and no line records a search of her text)
- still_load_bearing_despite [S:12] [S:39] [S:18]
- adjacent_thinkers[0] [S:8] [S:6] [S:7] [S:14]
- adjacent_thinkers[1] [S:32] [S:49] [S:24] [S:53]
- adjacent_thinkers[2] [S:29]
- adjacent_thinkers[6] [S:28]
- adjacent_thinkers[9] [S:56] (the Rasmussen return edge, added at the Rasmussen Ship on 2026-10-05)
- further_in [S:12] [S:13] [S:18] [S:33] [S:34] [S:9] [S:20] [S:25] [S:32] [S:51] [S:54] [S:55] (the Security Chaos Engineering sentence: book and authors [S:51]; attackers among the adverse events [S:54]; resilience engineering applied to software security [S:55])
- inclusion_rationale [S:28] [S:29] [S:24] [S:25] [S:6] [S:33]

## Dates held on the page, and why

- Safety-I/Safety-II: "in his lecture slides by 2012 and in print from 2013" [S:39] [S:11] [S:12]. Overrides both his own "first described (Hollnagel, 2014)" [S:14] and the inclusion Council's "2013", which predated [S:39].
- *Safety-II in Practice*: 2018, per the publisher audit [S:15].
- *From Safety to Safely*: not on the page; year unresolved [S:17].
- Career before 1999: decades only [S:1], because the bios conflict.
- "The Folly of Safety-III": 2025, the PDF creation date recorded at [S:34].
