# Kent Beck: page claims map

Which fact carries which factual field. `scripts/fact-ledger.ts` derives the required list from the
page itself, so a new frame, a new critic edge or a new book adds a line here automatically.
Format: `- <field path> [S:n] [S:n]`.

Interpretation is not listed here. The Editorial Reading has its own map in `reading-claims.md`,
and the Councils judge the rest.

## Backstage and career

- active_years [S:16] [S:7] [S:6]
- background [S:1] [S:16] [S:3] [S:4] [S:5] [S:6] [S:7] [S:9] [S:18]
- inclusion_rationale [S:19] [S:3] [S:22] [S:23b] [S:28] [S:30b] [S:32] [S:33] [S:47]

## Frames

- named_frames[0].attribution [S:19] [S:11] [S:17] [S:32]
- named_frames[1].attribution [S:9] [S:3] [S:10] [S:10b]
- named_frames[1].co_originators[0] [S:10b] [S:10]
- named_frames[2].attribution [S:26] [S:26b]
- named_frames[2].co_originators[0] [S:26]
- named_frames[2].co_originators[1] [S:26]
- named_frames[3].attribution [S:48] [S:49] [S:15]
- named_frames[3].derived_from [S:51] [S:34]
- named_frames[4].attribution [S:21] [S:22]
- named_frames[5].attribution [S:24] [S:23b] [S:23c]
- named_frames[6].attribution [S:20] [S:47]
- named_frames[6].co_originators[0] [S:20] [S:12]
- named_frames[7].attribution [S:16]
- named_frames[7].co_originators[0] [S:16]

## Body of work

- body_of_work[0] [S:9] [S:3] [S:10]
- body_of_work[1] [S:11]
- body_of_work[2] [S:15] [S:27]
- body_of_work[3] [S:48]
- body_of_work[4] [S:26] [S:26b]
- body_of_work[5] [S:24]
- body_of_work[6] [S:16]
- body_of_work[7] [S:42] [S:44]
- body_of_work[8] [S:12] [S:20]

## Adjacent thinkers

Only `critiques` and `antecedent` edges are required by the ledger; the others are the site's
reading of a relationship and the Councils judge them. Both required lines are listed, and the
label text of the three `parallel` edges that assert facts is listed under prose below.

- adjacent_thinkers[3] [S:34]
- adjacent_thinkers[6] [S:26]

## Other factual prose on the page

Not required by the ledger script, recorded so a reviewer can check each statement against a
source without rereading `sources.md`.

- tagline [S:9] [S:19] [S:37] [S:48]
- thirty_second_take [S:64] [S:16] [S:19] [S:20] [S:21] [S:26] [S:48] [S:23b] [S:58] [S:59]
- why_they_matter_as_a_thinker [S:19] [S:22] [S:23b] [S:23c] [S:26] [S:32] [S:48]
- thesis [S:26] [S:48] [S:49]
- working_line [S:48]
- named_frames[0].one_line_gloss [S:19] [S:17] [S:32]
- named_frames[1].one_line_gloss [S:3] [S:9] [S:10] [S:10b]
- named_frames[2].one_line_gloss [S:26] [S:26b] [S:27]
- named_frames[3].one_line_gloss [S:48] [S:49]
- named_frames[4].one_line_gloss [S:21] [S:22]
- named_frames[5].one_line_gloss [S:23] [S:24] [S:25] [S:29] [S:58] [S:59] [S:64]
- named_frames[6].one_line_gloss [S:20] [S:47]
- named_frames[7].one_line_gloss [S:16]
- limits[0] [S:37]
- limits[0].severity [S:54]
- limits[1] [S:38] [S:39]
- limits[2] [S:40] [S:41]
- limits[3] [S:34]
- adjacent_thinkers[0].edge_label [S:12] [S:13] [S:20] [S:22] [S:36]
- adjacent_thinkers[1].edge_label [S:44] [S:42] [S:43] [S:45]
- adjacent_thinkers[4].edge_label [S:35] [S:36] [S:46]
- adjacent_thinkers[5].edge_label [S:16] [S:65] [S:66]
- further_in [S:48] [S:26] [S:11] [S:24] [S:15] [S:9] [S:34] [S:35] [S:36]
- live_edge.summary [S:6] [S:7] [S:8] [S:28] [S:31] [S:50]

## Two fields with no ledger line, and why

- **`limits[4]`, "No adversary appears anywhere in the material behind this page."** An absence is
  not a fact a URL can carry, so it gets no `[S:n]`. It is checkable a different way: read
  `sources.md` end to end and look for an adversary. There is none in any of the 56 lines. The
  limit is worded to claim only what that check supports, which is the material behind this page
  rather than every word Beck has written.
- **`still_load_bearing_despite`.** Editorial judgment about what survives the limits, which the
  Councils judge rather than the ledger. The two factual anchors inside it, the cost-of-change
  question and his refusal to answer it in one direction, are cited above at `thesis` and
  `working_line`.

## What this page deliberately does not claim

Recorded so a later run does not reintroduce any of them. Every bullet here starts with a bold
span on purpose: `fact-ledger.ts` reads any line beginning `- word` as a field path, and these are
prose.

- **First date for 3X.** [S:23] rules out 2016-07-19 and the durable floor is March 2017 [S:23b],
  so the frame gloss and `why_they_matter_as_a_thinker` say 2017 and the page asserts no first
  publication date at all.
- **Dates and counts the ledger refuses.** No JUnit release year [S:17]; no day-level date for
  *Tidy First?* [S:15]; no subtitle for *Tidy First?*, because [S:15] and [S:51] disagree on it;
  no "2002/2003" for *Test-Driven Development: By Example* [S:11]; no count of values, principles
  or practices attributed to the 1999 edition, since those counts belong to the 2004 rewrite with
  Cynthia Andres [S:10] [S:10b].
- **Subscriber figures stay unblended.** The page cites 126,000 to the newsletter [S:8] and never
  the 123K figure from kentbeck.com [S:7].
- **Chrysler headcount.** The page writes 9,000, the figure the body of [S:3] cites; the lead's
  "around ten thousand" is not presented as the source's only number and does not appear here.
- **"Red, green, refactor" appears nowhere**, in the frame's `display_name` or anywhere else. Four
  inclusion seats proposed it as part of that display name. No ledger line sources the phrasing to
  Beck, and [S:32] is Scott Ambler's four-step statement rather than Beck's words. The gloss states
  the steps and names no slogan.
- **No endorsement of SPACE.** [S:45] carries the narrower thing Beck and Orosz write, and the
  Forsgren edge label says only what [S:42] to [S:45] support.
- **Nothing secondhand is quoted as Beck's sentence.** [S:2] and [S:41] are Gergely Orosz narrating
  an interview. `limits[2]` attributes the Facebook material to his account by name, and [S:2] is
  left uncited entirely, because [S:16] places Beck at Apple in 1989 first-hand and the page uses
  that instead of Orosz's Tektronix and Apple dates.
- **Continuous integration and refactoring hold no frame entry here.** Fowler's page carries both
  with Beck credited [S:47], and CI's pre-XP antecedents were never searched, so `original` is
  unavailable to either page until that search runs.
- **Coplien is absent.** `rbcs-us.com` does not resolve, so whether his essay names Beck is
  unverified and it cannot support a `critiques` edge.

## Ledger lines left uncited, and why

`fact-ledger.ts` warns on these. Each was read and left deliberately.

- **[S:2]** Orosz on Tektronix and Apple. Superseded by [S:16] for the Apple placement, and the
  Tektronix end date is one the ledger tells the page not to assert.
- **[S:14]** *Contributing to Eclipse*, *Implementation Patterns* and *Smalltalk Best Practice
  Patterns*. Real books, and none of them carries a frame this page foregrounds, so the curated
  Body of Work leaves them out.
- **[S:30]** A negative finding: the Confluent podcast is not evidence of 3X travelling without
  Beck, because Beck is the guest. Nothing on the page cites it because nothing on the page makes
  that mistake.
- **[S:52]** Site-state about `charity-majors.md` and the page template, added at review round 1 to
  settle two seat assertions about sameness and about which way "below" points. It changed the
  wording of the extension opener and of `limits[4]`, and no field on the page asserts it, so it
  cites from nowhere.
- **[S:53]** Site-state about the round 1 resolution file: it answers seat 2's round 1 finding 3
  nowhere. The finding is answered on the page now, in the `extension` sentence about the
  inequality, and the ledger line records the gap rather than a claim, so nothing cites it.
- **[S:55]**, **[S:56]** and **[S:57]** Site-state about wording and Lens counts across the roster,
  added at review round 2. They decide how a sentence is worded and which position an extension
  argues through, which is not something a field on the page asserts. [S:54] is the exception in
  that group and is cited above, because `limits[0].severity` is a value on this page and the
  roster count is what moved it.
- **[S:60]**, **[S:61]**, **[S:62]** and **[S:63]** Site-state added at review round 3, on the same
  footing as the round 2 group: word counts against the gate, the severity spread the page already
  carries, the citation line this file gave `tagline` before the round, the count of one repeated
  construction, and the shape the tagline shares with `will-larson`. Each decided whether an edit
  was made or how it was worded. None of them is a claim a field on the page makes.

## One page value with a ledger line, and why

`limits[0].severity` is not a factual field and `fact-ledger.ts` does not require it. It carries a
line because round 1 promoted `limits[3]` to `structural` on an argument about how severity is used
across the site, round 2 moved `limits[0]` the other way on the same kind of argument, and neither
move is checkable from this page alone. [S:54] is the count both arguments rest on.

## Three citation lines that changed at round 3, and why

- **`named_frames[5].one_line_gloss` and `thirty_second_take` gained [S:58] and [S:59].** Round 3
  seats 3, 4 and 5 found one proposition carried in three fields with no ledger line under it: that
  the right practice differs by 3X phase, and that a practice fitting a product being explored is
  waste once it is being extracted. They were right about this file. [S:23] quotes the three phase
  definitions and stops, and [S:24] quotes the restatement and the Canon series' stated aim. The
  research the seats asked for found the claim stated in Beck's own words in both of those same
  sources, further down the page than either line had read: "Software product development requires
  different tools, techniques, and value systems in the three phases" [S:58], and "The central
  thesis of 3X: Explore/Expand/Extract is that each of these phases ... actually requires its own
  approach" with "Applying the approach from one phase to an idea in another phase kills ideas"
  [S:59]. The claim is Beck's, so the three fields keep it and the two lines now carry it. The
  `reading` sentence that rests on the same proposition cites [F:three-x] in `reading-claims.md`,
  and [F:three-x] is the frame gloss these two lines source.
- **`tagline` gained [S:37].** Round 3 seat 2 argued that "what each one costs" claims a settled
  price for every practice the page names, citing the three lines this file gave the field. The
  distributive reading was removed from the tagline in that pass. What remains is the claim that
  Beck priced practices, which [S:48] carries for tidying and [S:37] carries for test-driven
  development, in his own voice and against four named conditions. The second of those was on the
  page at `limits[0]` and missing from this line.

## The Cunningham edge, widened 2026-09-22

`adjacent_thinkers[5].edge_label` named one shared artifact, the CRC cards paper, and now names
three: the 1989 paper `[S:16]`, the 1987 pattern-languages report `[S:65]` and the Smalltalk
session behind "the simplest thing that could possibly work" `[S:66]`. The two new lines were
re-verified at their own URLs rather than copied from `_working/ward-cunningham/facts.md`. The
label also dropped "when Beck was at Apple and Cunningham at Wyatt Software": `[S:65]` places
Cunningham at Tektronix in 1987 and `[S:16]` at Wyatt Software in 1989, so the affiliation pair
was true of the 1989 paper alone and would have read as covering all three.

The edge keeps `edge_type: parallel`, `strength: secondary` and `render_tier: deep`. Nothing
structural changed, and `parallel` adds no required field to the ledger.
