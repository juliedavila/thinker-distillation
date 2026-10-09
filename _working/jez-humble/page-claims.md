# Jez Humble: page claims map

Which fact carries which factual field. `scripts/fact-ledger.ts` derives the required list from the
page itself, so a new frame, a new critic edge or a new book adds a line here automatically.
Format: `- <field path> [S:n] [S:n]`.

Interpretation is not listed here. The Editorial Reading has its own map in `reading-claims.md`,
and the Councils judge the rest. Lines below the required set exist so that a fact the page relies
on in prose is traceable too, and so the ledger's `warn unused` output means what it says.

Two of these lines carry a correction to the inclusion Council and are called out here so the
merge request can repeat them. `named_frames[2].attribution` is `co-authored` where four of five
seats proposed `original`: the antecedent search those seats made a condition of shipping
`original` was re-run at this stage and returned an earlier dated description of the practice
[S:26], and [S:7] locates the distinction itself in the co-authored book. And
`named_frames[3].co_originators[0]` resolves Daniel Terhorst-North and Dan North to one slug on
[S:27], which closes seat 5's UNVERIFIED rather than assuming it.

Round 1 resolution, 2026-09-22. Two lines changed. `body_of_work[2]` picks up [S:3] because the
note now states an interval rather than a rounded one, "seventeen days after the book," and that
interval is arithmetic over two ledgered dates: the book on 2010-07-27 [S:3] and the post on
2010-08-13 [S:7]. Both fields stating it therefore cite both dates. No line was added to facts.md
for the interval itself, because a ledger line records what a document says and no document says
seventeen. And `named_frames[5].attribution` picks up [S:29], which is the first line in the
ledger that actually names the four DORA measures; [S:17] and [S:18] were carrying an enumeration
neither of them states.

Round 2 resolution, 2026-09-22. One line added. `limits[3]` now closes by stating how far the
reading behind its absence claim goes, and the page count and the publisher's listing it names are
[S:3]. The rest of that closing sentence is a statement about this page's own research record
rather than about the world, so it takes no new ledger line: what it reports is that no line in
`facts.md` is a reading of the book's text, which is checkable by reading `facts.md` and cannot be
sourced to a URL.

Round 3 resolution, 2026-09-22. No line changed. `limits[3]` keeps [S:3] for the page count and the
publisher's listing, and the closing sentence now reports the same research-depth fact from the
reader's side rather than the working files': every claim the page makes about what the book says
rests on that listing and on other people's accounts of it. The two are the same state of the
record seen from two places, and the reader-facing form is the one a cold reader can check, since
the book's entry in `body_of_work` carries the publisher's link and names Fowler, while `facts.md`
sits outside the rendered page. The rest of the limit is an
absence claim about the sources and takes no ledger line, unchanged from round 2.

- active_years [S:4] [S:1]
- background [S:1] [S:2] [S:21] [S:6] [S:18]

- named_frames[0].attribution [S:5] [S:4] [S:31]
- named_frames[0].co_originators[0] [S:4] [S:5]
- named_frames[0].co_originators[1] [S:4] [S:5] [S:27]
- named_frames[0].co_originators[2] [S:31] [S:32]
- named_frames[0].co_originators[3] [S:31]
- named_frames[0].co_originators[4] [S:33] [S:31]
- named_frames[1].attribution [S:22] [S:9] [S:23] [S:3]
- named_frames[1].co_originators[0] [S:3]
- named_frames[2].attribution [S:7] [S:26] [S:3]
- named_frames[2].co_originators[0] [S:7] [S:3]
- named_frames[3].attribution [S:12]
- named_frames[3].co_originators[0] [S:12] [S:27]
- named_frames[4].attribution [S:8]
- named_frames[4].co_originators[0] [S:8]
- named_frames[4].co_originators[1] [S:8]
- named_frames[5].attribution [S:17] [S:18] [S:29]
- named_frames[5].co_originators[0] [S:17] [S:18]
- named_frames[5].co_originators[1] [S:17] [S:18]

- body_of_work[0] [S:3] [S:24] [S:10]
- body_of_work[1] [S:4] [S:6]
- body_of_work[2] [S:7] [S:28] [S:3]
- body_of_work[3] [S:8]
- body_of_work[4] [S:17]
- body_of_work[5] [S:16]
- body_of_work[6] [S:15]

- adjacent_thinkers[6] [S:19]

Dave Farley ship, 2026-10-09. The deployment pipeline gloss no longer says the 2006 paper "first
describes" the pipeline: Humble's February 2010 post [S:31] credits Dave Farley and Mark Rickmeier
with the idea in 2004 and a 2005 Sam Newman blog entry with its first public documentation, so the
gloss now calls the paper an early conference write-up and reports that credit. Farley, Rickmeier
and Newman join the frame's `co_originators` on [S:31], [S:32] and [S:33], copied from the Farley
ledger. The Terhorst-North and Chris Read edge labels lose the same priority
wording ("first wrote up", "whenever"), `limits[2]` adds the 2010 credit, and the Farley edge label is rewritten. `attribution_kind`
and `primary_author` are unchanged; whether they should change is Julie's call on the Farley
merge request.

Beyond the required set, so nothing the page asserts in prose is untraceable:

- why_they_matter_as_a_thinker [S:14] [S:6] [S:11] [S:30]
- adjacent_thinkers[1] [S:13] [S:11] [S:3] [S:10]
- limits[0] [S:19] [S:20]
- limits[1] [S:25] [S:20]
- limits[2] [S:5] [S:8] [S:12] [S:17] [S:3] [S:31]
- adjacent_thinkers[4] [S:3] [S:31] [S:32] [S:7]
- adjacent_thinkers[5] [S:4]
- adjacent_thinkers[7] [S:4] [S:5]
- limits[3] [S:3]
