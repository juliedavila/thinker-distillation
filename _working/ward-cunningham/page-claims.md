# Ward Cunningham: page claims map

Which fact carries which factual field. `scripts/fact-ledger.ts` derives the required list from the
page itself, so a new frame, a new critic edge or a new book adds a line here automatically.
Format: `- <field path> [S:n] [S:n]`.

Interpretation is not listed here. The Editorial Reading has its own map in `reading-claims.md`,
and the Councils judge the rest. Lines below the required set are carried anyway, because the
factual prose in `limits`, `inclusion_rationale` and `live_edge` rests on sources too and a
reviewer should not have to find them.

Two ledger lines are deliberately uncited by this page, and that is the correct outcome rather
than a gap: `[S:6b]`, the contested ZOG origin claim attributed on c2 to unnamed "some," which the
page refuses to promote; and `[S:26]`, the existence of the "NOT CUNNINGHAM'S LAW" video, whose
content nobody watched, so the page names the misattribution from `[S:19]` and quotes nothing.

## Required fields

- active_years [S:8] [S:23]
- background [S:1] [S:2] [S:6] [S:8] [S:9] [S:11] [S:19] [S:21] [S:23]

- named_frames[0].attribution [S:2] [S:4]
- named_frames[1].attribution [S:6] [S:7] [S:11]
- named_frames[2].attribution [S:12] [S:13] [S:14]
- named_frames[3].attribution [S:8] [S:11]
- named_frames[3].co_originators[0] [S:8]
- named_frames[3].co_originators[1] [S:8]
- named_frames[4].attribution [S:1] [S:6] [S:24]
- named_frames[4].co_originators[0] [S:1]
- named_frames[5].attribution [S:22]
- named_frames[6].attribution [S:20]

- adjacent_thinkers[3] [S:8]
- adjacent_thinkers[4] [S:4]

- body_of_work[0] [S:2] [S:3]
- body_of_work[1] [S:4] [S:5]
- body_of_work[2] [S:8]
- body_of_work[3] [S:1] [S:24]
- body_of_work[4] [S:11]
- body_of_work[5] [S:12] [S:13]
- body_of_work[6] [S:10]
- body_of_work[7] [S:7]

## Factual prose carried elsewhere on the page

- inclusion_rationale [S:2] [S:7] [S:14] [S:15] [S:16] [S:17] [S:27]
- why_they_matter_as_a_thinker [S:7] [S:14] [S:15]
- thesis [S:2] [S:4] [S:11]
- working_line [S:4]
- thirty_second_take [S:2] [S:4] [S:6] [S:13]
- limits[0].elaboration [S:11]
- limits[1].elaboration [S:4] [S:13] [S:14] [S:19]
- limits[2].elaboration [S:2] [S:4] [S:17]
- limits[3].elaboration [S:22] [S:23]
- still_load_bearing_despite [S:2] [S:15] [S:11] [S:27]
- adjacent_thinkers[0].edge_label [S:1] [S:8] [S:12]
- adjacent_thinkers[1].edge_label [S:17] [S:18]
- adjacent_thinkers[2].edge_label [S:27] [S:3]
- live_edge.summary [S:22] [S:23] [S:25]

**The Larson claim now has its own ledger line, closing round 1's open item 5.**
`adjacent_thinkers[2].edge_label` (Larson, exception debt) carried a citation to `[S:15]` until round 1
of the review Council, 2026-09-22. `[S:15]` is the c2 TechnicalDebt page, which holds Dave Smith's
broad definition and the Sonar plugin and says nothing about Larson or exception debt, so the
citation was decorative and round 1 removed the line rather than rewriting it, pointing instead at
the neighbour's ledger at `_working/will-larson/facts.md` `[S:16]` and `[S:42]`. Round 2, seat 3:
"the two lines sit next door ... Open item 5 should be answered yes: re-verify both into this
page's ledger." Answered yes. `[S:27]` is the lethain.com post, re-verified against the primary
source on 2026-09-22 rather than copied from the neighbour, and the edge label, `inclusion_rationale`
and `still_load_bearing_despite` all cite it now. The second half of the neighbour's `[S:42]`, that
the metaphor behind the name is Cunningham's, needed no new line: `[S:3]` already records Fowler
attributing the coinage to him, so the edge cites `[S:27]` and `[S:3]` together.
`still_load_bearing_despite` keeps `[S:15]` as well, because the same sentence carries the tooling
claim that `[S:15]` does support.

**One thing `[S:27]` puts on the record, and what round 3 did with it.** The post credits no prior
source for the name or the metaphor. The edge label used to open "Larson borrowed the shape of the
debt metaphor by name to coin a second one," where "by name" meant borrowing the word debt.
Round 3 read it the other way, as though Larson had named Cunningham, and struck the phrase. The
label now opens "Larson borrowed the shape of the debt metaphor to coin a second one," and the
sentence after it still carries the borrowed word. Nothing on this page claims Larson credited
anyone, and `[S:27]` is the line a reader would catch it against if the sentence ever drifts back.

## Notes on the three lines most likely to be challenged

**`named_frames[0].attribution` is `original` and the Lakoff credit sits in the gloss rather than
in `co_originators`.** `[S:4]` opens, under its own "Metaphor" heading and before the word debt
appears, "I became interested in the way metaphors influence how we think after reading George
Lakoff and Mark Johnson's MetaphorsWeLiveBy." What that credits is the method, choosing a metaphor
deliberately because metaphors govern reasoning. The debt analogy itself is his, spoken to his boss
and then written down in `[S:2]`. Lakoff therefore takes an `antecedent` edge, not a co-originator
slot on the frame.

**`named_frames[3]` (pattern languages) cannot be `original`.** The 1987 report credits the
borrowing inside its own proposal sentence, "using concepts adapted from the work of Christopher
Alexander," and cites *A Pattern Language* (1977) in its bibliography `[S:8]`. Beck is first byline
on the same report, which is why both names are in `co_originators` with their roles distinguished.

Why the same evidence files two frames two ways, which is the question seat 5 raised in round 1 and
which the gloss no longer answers in full for the reader. Beck's first byline `[S:8]` is the ground
for `named_frames[3].primary_author: ward-cunningham` here and for `named_frames[4].primary_author:
kent-beck` on CRC cards, and the tiebreaker is which page carries the frame. Verified in the
repository on 2026-09-22, and it is a fact about this site rather than about the world, so it takes
no `[S:n]` line: `grep -rln "pattern-languages-for-programs" src/content/` returns this page alone,
and `src/content/thinkers/kent-beck.md` carries `concept_slug: crc-cards` with `primary_author:
kent-beck` and no pattern-languages frame. Filing pattern languages under Beck would attach
Cunningham's own foreground frame to a page that does not carry it, leaving the credit computed
against nothing site-wide. Round 2, seat 1: two sentences of that reasoning in a reader-facing gloss
"grounds an attribution in what other pages carry." One compressed sentence stays on the page, at
seat 5's call, and the reasoning lives here.

**`named_frames[4]` (CRC cards) mirrors the live Beck page rather than Wikipedia.** `primary_author`
is `kent-beck` on the printed byline order `[S:1]`. Wikipedia reverses that order and dates the
paper 1986 while citing SIGPLAN Notices volume 24 issue 10, which is October 1989 `[S:24]`. The
paper governs both.

## Dates the page deliberately does not print

  * No creation year beside Fit. The 2002 on the project site is a copyright notice on site content
  `[S:20]`, and no second source was found.
  * No start year for AboutUs. The article's prose says May 2009 while citing a story dated May 2007
  `[S:19]`.
  * No Purdue graduation year, no Hillside Group founding and no PLoP program chair. The first rests
  on an unlinked book page and the second and third carry no citation of any kind `[S:19]`. The
  page reports only what he says himself in `[S:11]`, that starting the PLoP series is what sent
  him looking for a web equivalent of his HyperCard stack.
  * No decade on the c2 definitional split, which is undated on its own page `[S:15]`.
  * No claim that "wiki" entered the American Heritage Dictionary with Taylor's etymology. He labels
  the entry a draft and an example `[S:7]`.
  * No "coined in 1992." The coining was spoken and undated `[S:4]`; 1992 is the first printed
  statement `[S:2]`, which is also how Fowler hedges it `[S:3]`.
