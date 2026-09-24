# Christopher Alexander: page claims map

Which fact carries which factual field. `scripts/fact-ledger.ts` derives the required list from the
page itself, so a new frame, a new critic edge or a new book adds a line here automatically.
Format: `- <field path> [S:n] [S:n]`.

Interpretation is not listed here. The Editorial Reading has its own map in `reading-claims.md`,
and the Councils judge the rest.

## The required set

- active_years [S:7] [S:14]
- background [S:1] [S:2] [S:3] [S:3a] [S:4] [S:4a] [S:6]

- named_frames[0].attribution [S:10] [S:9] [S:9a] [S:33] [S:27]
- named_frames[0].co_originators[0] [S:10] [S:9] [S:9a]
- named_frames[0].co_originators[1] [S:10] [S:9] [S:9a]
- named_frames[1].attribution [S:27] [S:25]
- named_frames[2].attribution [S:11]
- named_frames[3].attribution [S:28] [S:13]

- body_of_work[0] [S:22] [S:23]
- body_of_work[1] [S:10] [S:17]
- body_of_work[2] [S:11] [S:4a] [S:26]
- body_of_work[3] [S:8]
- body_of_work[4] [S:7]
- body_of_work[5] [S:16] [S:17]
- body_of_work[6] [S:13]

- adjacent_thinkers[4] [S:29] [S:30] [S:31] [S:32]

## Beyond the required set

Every prose field that states a fact, so that no factual sentence on the page is untraceable. This
block exists because a claims map that covers only the required set leaves the most-read fields
uncovered, which is how an attribution defect reached a shipped `thirty_second_take` on the Humble
page while its claims file asserted full coverage.

- tagline [S:10] [S:16] [S:22] [S:23] [S:25]
- thirty_second_take [S:10] [S:26] [S:27] [S:16] [S:19] [S:24] [S:25] [S:22]
- why_they_matter_as_a_thinker [S:16] [S:17] [S:18] [S:20]
- thesis [S:10] [S:26] [S:27] [S:24] [S:25] [S:22]
- working_line [S:26] [S:22]
- inclusion_rationale [S:16] [S:19] [S:20] [S:10] [S:9] [S:9a] [S:24] [S:8] [S:13] [S:22]
- limits[0] [S:25]
- limits[1] [S:24] [S:26] [S:20] [S:18] [S:34]
- limits[2] [S:11] [S:13]
- limits[3] [S:29] [S:30] [S:31]
- still_load_bearing_despite [S:26] [S:27]
- adjacent_thinkers[0].edge_label [S:16]
- adjacent_thinkers[1].edge_label [S:16] [S:17]
- adjacent_thinkers[2].edge_label [S:34] [S:24] [S:26]
- adjacent_thinkers[3].edge_label [S:18] [S:19] [S:24] [S:22]
- further_in [S:22] [S:10] [S:11] [S:8] [S:13] [S:16] [S:7]

## Notes on lines that were nearly written and are not here

- **No line credits Alexander with the pattern form (context / problem / solution).** [S:24] is
  Alexander describing what he saw in other people's object-oriented work, and nothing on the ledger
  establishes that the 253 patterns of the 1977 book are set under those headings. Three inclusion
  seats proposed the frame; two named it the batch's clearest byline hazard. It is off the page, and
  the claim that survives, that software took the format and he granted it, is carried in `thesis`
  and `limits[1]` on [S:24] and [S:26], which is what those lines support.
- **No line marks tree versus semilattice `original`.** [S:8] carries the argument. The antecedent
  search did not close on either the `semilattice` borrowing from lattice theory or Jane Jacobs'
  1961 framing, so the frame is off the page this round and the essay stays in `body_of_work`, where
  no attribution is asserted.
- **[S:21] is now cited by no field, and that is deliberate.** Review round 1, seat 3 found the
  `adjacent_thinkers[0]` clause "the wiki he built afterwards was meant to hold its literature"
  standing flatly on [S:16] and [S:21], where [S:21] is Wikipedia reporting Cunningham and must be
  attributed as reported, and where the clause's actual substance belongs to the 2013 Cunningham and
  Mehaffy paper recorded on [S:20]. The clause was cut rather than re-sourced, because
  `why_they_matter_as_a_thinker` already carries that point on [S:20] in the authors' own reported
  words, and moving the same proposition into a second field would trade an attribution defect for
  the near-verbatim repetition calibration names. So [S:21] joins the verified-and-unused group
  below, and the paragraph kept underneath records what it may and may not support if a later round
  wants it back.
- **What [S:21] supports, kept for a later round.** It was used only for the wiki clause in
  `adjacent_thinkers[0]`, where it was reported as
  Cunningham's own statement, and [S:20]'s independent 2013 paper carries the same point in
  `why_they_matter_as_a_thinker`. Neither field puts the claim in Alexander's mouth. **The line
  itself was repaired on 2026-09-24: it had quoted Cunningham saying the first wiki "led directly
  from Alexander's work," words that are not at the URL. The edge label does not quote him and is
  unaffected, but any future field that wants his words has to go to the 2013 paper on [S:20].**
- **[S:5] (awards), [S:12] (*The Oregon Experiment*), [S:14] beyond the 2012 date, [S:15], [S:15a]
  (the Gabriel introduction) and now [S:21] are cited by no field.** They are verified and the page has no
  use for them, which is the expected state rather than a dropped claim.
- **The Wikipedia count in `inclusion_rationale` is a fact about this ledger, not about the world,
  so it has no [S:n] line and cannot have one.** Review seat 3 asserted that sixteen of the ledger's
  34 lines cite `en.wikipedia.org` against the fifteen the page claimed. Counted and confirmed on
  2026-09-22 ([S:1], [S:2], [S:3], [S:5], [S:6], [S:7], [S:8], [S:10], [S:11], [S:12], [S:13],
  [S:14], [S:18], [S:19], [S:20], [S:21]); the page read sixteen. Reproduce with
  `grep '^- \[S:' facts.md | grep -c 'en\.wikipedia\.org'`. The count moves whenever a line is
  added or re-sourced, so a later round that touches the ledger has to re-run it. Adding [S:34]
  in that round left it at sixteen, since that line is Fowler's own site. **Re-counted 2026-09-24
  after the second audit added [S:3a], [S:4a] and [S:9a]: seventeen of thirty-eight, the new
  Wikipedia line being [S:4a] and the two vitae lines being first-party. The page now reads
  seventeen of thirty-eight. The concentration did not fall by much, but two of the claims that
  rested on it hardest, the Berkeley appointment and the 1968 byline, now have Alexander's own
  vitae under them.**
- **Nothing on the page now says Alexander repudiated *Notes on the Synthesis of Form*.** The
  editorial note carried "Whether he later repudiated it is disputed and this page takes no side,"
  which review seat 3 read as unsourced, correctly: [S:7]'s URL was re-opened on 2026-09-22 and
  carries no repudiation, disavowal or dispute of one. The clause was cut rather than sourced,
  because sourcing a dispute needs both sides and neither was on file. Nothing else on the page
  rests on it.
- **[S:19] never supports the epigraph.** The line says plainly that the widely repeated claim that
  *Design Patterns* opens by quoting Alexander is unverified. No field on this page asserts it, and
  `inclusion_rationale` records that it stays off.

## Lines changed by review round 1 (2026-09-24)

- **No field now says the keynote is commonly miscited as an IEEE Software article.** Seat 3 read
  the frequency claim in `body_of_work[0]` correctly: [S:22] records that the document mentions no
  IEEE Software and is a keynote transcript, and nothing on the ledger counts how often anyone
  miscites it. The sentence was cut from `body_of_work[0]`, whose opening line already dates and
  names the artifact as a keynote recorded live, and the recheck item in `inclusion_rationale` now
  bounds the absence instead of asserting the frequency: the artifact is a keynote transcript and how
  widely it is miscited was not measured. Both carriers were lowered in the same pass, which is the
  calibration item that was caught a round late on Anderson and again on Cunningham.
- **`tagline` now cites [S:16] and [S:10].** It asserted the 1987 borrowing with no line for it, and
  the possessive "whose pattern vocabulary" was the last solo credit on the page. [S:16] carries the
  1987 report and its proposal sentence; [S:10] carries the byline of Alexander, Sara Ishikawa and
  Murray Silverstein.
- **`thirty_second_take`, `thesis`, `working_line` and `adjacent_thinkers[3]` now cite [S:22].** All
  four state or rest on the keynote's date and place, and [S:22] is the only line on this ledger that
  carries "San Jose, California, October of 1996." Raised by seat 3, applied as proposed.
- **`body_of_work[3]` matches [S:8]'s wording again.** The note read "cities that grew without a
  plan" where [S:8] quotes "successful unplanned cities have a semi-lattice structure." The page now
  reads "unplanned cities that succeeded." [S:8]'s own repair note quotes the source in full to stop
  this exact substitution, which it had already caught once on "living cities."
- **`still_load_bearing_despite` no longer ranks the individual pattern below the sequence.** Seats 2
  and 3 both found it; neither [S:26] nor [S:27] ranks the two, and [S:26] records the opposite about
  effort ("the effort went entirely onto the individual patterns"). Deletion only, so the surviving
  proposition, that the sequence did the generating, is unchanged and still rests on [S:26] and
  [S:27].
- **A seat assertion that reached no field.** Seat 4 gave, as the reason for cutting "which is what an
  enumeration was adopted to escape," that control enumerations are typically unordered and are the
  usual instrument of a compliance gate. That is a "usually" claim about practice and it has no line
  here. WebSearch was exhausted for this session (200 of 200), as it was on 2026-09-22, so nothing
  was verified and nothing was added. The edit was a deletion, which needs no support, and the
  premise stays off the page.

## Lines changed by review round 2 (2026-09-24)

- **`tagline` now cites [S:10], [S:16], [S:22], [S:23] and [S:25], and no longer cites [S:24].** Seat
  3 read the line against the tagline round 1 rewrote: [S:24] is the format grant ("It is a nice and
  useful format"), which the sentence no longer states, so it supported no clause of it, while the
  clause that carries the sentence, "supposed to do besides," is [S:25]'s ("However, that is not all
  that pattern languages are supposed to do") and was uncited. [S:23] is this editor's addition
  rather than the seat's: "a room of programmers" rests on his own "I'm addressing a room full of
  people, a whole football field full of people" on that line, with the audience's field coming from
  [S:22]'s conference name. Clause by clause the line now reads: the co-authored writing on [S:10],
  the 1987 borrowing on [S:16], the date and place on [S:22], the room on [S:23], and what a pattern
  language is for besides the format on [S:25].
- **`background` no longer gives him a chair at Berkeley.** Seat 3 found "held the chair for decades"
  against a ledger whose only chairmanship is elsewhere: [S:3a] gives "1963-98 Professor of
  Architecture" and "1999- Chairman of the Board, PatternLanguage.com." Reproduced here, since the
  assertion is about this ledger's wording: `grep -in 'chair' facts.md` matches [S:3a] alone. The
  field now reads "held that appointment for decades," which is the appointment the same sentence
  has just named. No line was added and none is needed.
- **The Fowler edge no longer says he writes patterns himself.** [S:34] states its own bound, "This
  line supports only that Fowler names Alexander and credits him for the pattern-language form," and
  the opener round 1 wrote asserted something about a living author's output that no line here
  carries. The label now opens on the crediting, which [S:34] does support. Its citations are
  unchanged ([S:34] [S:24] [S:26]).
- **`inclusion_rationale` no longer presupposes the miscitation it declines to count.** Round 1
  lowered a frequency claim to "how widely it is miscited as an IEEE Software article was not
  measured," which still asserts that it happens. [S:22] supports only that the document mentions no
  IEEE Software and is a keynote transcript. The recheck item now reads "whether anyone miscites it
  as an IEEE Software article, and how often, was not checked," which is the bounded-absence form.
  This is the second pass over the same sentence, and the lesson is that lowering a claim by one step
  can leave its presupposition standing.
- **`working_line` prints "dropped out of sight" where [S:26] records the source's "out of site."**
  The ledger line keeps the source's spelling and its own note that the spelling is the source's, so
  nothing is lost; the page stops rendering a live transcript's homophone as Alexander's word under a
  credit that reads "paraphrased" (`src/pages/thinkers/[slug].astro` line 74, `— {t.name},
  paraphrased`). The quotation-fidelity rule in SCHEMA section 8 is not in play, because the block is
  not presented as a quotation, and the same words already render with "sight" in
  `thirty_second_take` and `thesis`. No claim changes: [S:26] and [S:22] still carry the field.
- **`thirty_second_take` no longer dates the pattern language in the page's own voice.** It read
  "the pattern language he and his co-authors began in the 1970s," which dates origination against
  the promise two paragraphs above it in `inclusion_rationale`, and against [S:26]'s 1960s effort and
  [S:9a]'s 1968 byline. The decade is his, so it is now quoted from [S:25]: "the pattern language
  that we began creating in the 1970s." The field already cited [S:25].
- **The late work's unread state is down from four carriers to two.** It was in both deep frame
  glosses, in `body_of_work[6]` and in `limits[2]`. limits[2] is the field built to bound an absence
  and keeps it; `named_frames[2]` keeps the narrower form for the quality without a name, which is a
  different term; the `named_frames[3]` sentence and the `body_of_work[6]` clause are cut. No
  citation changes, and the propositions that remain are unchanged.
- **limits[2] no longer reads a maintenance tag as a verdict on the four volumes.** [S:13] carries
  the neutrality dispute and its own instruction, "treat its characterisations as weak and its titles
  and the date range as the usable part." The field had turned that into the volumes being read "as a
  fan's account." It now says the dispute bounds what the search could establish about them, which is
  what the ledger line supports. Citations unchanged ([S:11] [S:13]).
- **limits[3] no longer repeats the Eisenman publication history.** The 1983 Lotus publication and
  the 2000 Studio Works reprint are in the `adjacent_thinkers[4]` label in fuller form on [S:29],
  which still carries them. Round 1 cut the refuting-thesis clause from this limit for the same
  finding; this is the rest of it. Deletion only, and [S:29] still dates and titles the debate for
  the limit.
- **Two seat assertions that needed no ledger line, both facts about this repository.** Seat 1 gave
  the render credit at `src/pages/thinkers/[slug].astro` line 74 and it reads `— {t.name},
  paraphrased`. Seat 5 gave the roster counts behind the `extension` closer, and both reproduce:
  "The risk is" appears on `andrej-karpathy.md`, `christopher-alexander.md` and `ward-cunningham.md`
  and nowhere else, "The precondition is" on the last two only, and the openers "The order claim
  comes through intact" and "That leaves the order claim" on this page alone. `bun
  scripts/lens-index.ts christopher-alexander` prints P:6 also held by jez-humble, rich-hickey and
  sidney-dekker, and `scripts/reading-gates.ts` applies its 160-word cap to `reading` and `extension`
  alone, so the two edits outside those fields cost no words. These follow the precedent recorded
  above for the Wikipedia count: a fact about this repository has no [S:n] line and cannot have one.
  The precedent covers repository facts only, which is the narrowing round 2's seat 3 asked for after
  this batch stretched it to world facts on two other pages.
- **The second risk in `extension` is an entailment rather than a fact.** Seat 4 asked for it and
  named its licence: a dependence field makes application conditional, so a control whose
  precondition never holds never fires, which follows from the mechanism the same field proposes.
  `extension` is where inference lives (SCHEMA section 7), the sentence is cited to [L:2] and [P:6]
  in `reading-claims.md`, and nothing about the world is asserted. It is recorded here because it is
  the one proposition this pass added rather than narrowed or cut.
