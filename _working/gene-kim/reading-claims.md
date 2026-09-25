# Reading claims: Gene Kim

One line per sentence of `reading` and `extension`, each with the grounding-pack IDs it rests on.
Updated 2026-09-24 by the round 1 editor of the re-read: `reading` loses two sentences and gains one,
`extension` swaps one. What moved and why is in
`_working/_council/2026-09-22/round-1-editor-gene-kim.md`. The earlier 2026-09-22 pass changed four
`reading` sentences and two `extension` ones, and its record is kept beside that file as
`round-1-editor-gene-kim.2026-09-22.md`.

**Round 2 changed one `reading` sentence and no `extension` one, 2026-09-24.** Sentence 4 read "its
performance is a property of that system as a whole" and now reads "whose performance is set by flow,
feedback and experiment", which is `thesis`'s three tests rather than the First Way alone. Four seats
filed it and seat 2 supplied the test. The row is SAME against `thesis` and NARROWED against the
sentence it replaces; the citation is unchanged. Record:
`_working/_council/2026-09-22/round-2-editor-gene-kim.md`.

**The Lens citations are unchanged, and the `P:2` finding is answered rather than carried.** Round 2
seat 4 asked for `P:2` beside `P:8` on the First Way line of `extension`, a finding filed in two
earlier rounds without an answer. It is declined, and the ground is fit and novelty rather than the
curation count the seat objected to. Seat 4's premise fails on the tooling's own output: `bun
scripts/lens-index.ts` reports `P:2` held by `camille-fournier`, `nicole-forsgren`, `david-woods` and
`alex-komoroske`, and `nicole-forsgren` is `adjacent_thinkers[1]` on this page at `strength: primary`,
so one of the four is a neighbour and it is the nearest one. `lens-index.ts` derives the index from
these `[P:n]` citations, so adding one makes this page a fifth holder of a position already flagged
crowded, and `SKILL.md` stage 5 requires a position no neighbouring page already uses. The novelty
check for `P:2` has never been run here: no round has read the Forsgren, Fournier, Woods or Komoroske
extensions against this sentence, and this page's angle hands the measurement argument to Forsgren's
page on purpose (see the paragraph above on the move not repeated). A citation asserting a position is
a claim, and the check for it is a research pass rather than a line appended in a resolution. If a
later round wants `P:2` on this page, the route is to read those four extensions against the First
Way sentence, starting with Forsgren's, and record the result here. Note also that seat 4 quoted the
line as ending in `P:8`; it ends in `[T:thesis] [F:the-three-ways]`, and `P:8` sits on the sentence
above it, which is where `calibration.md` says a Lens citation belongs, on the sentence making the Lens
argument.

**Why the positions above are written without square brackets.** `scripts/lens-index.ts` scrapes
`/\[(P:\d+)\]/g` over the whole of this file rather than over the claim lines alone, so a position
merely discussed in prose here registers as a position this page argues through. The first draft of the
paragraph above used the bracketed form and `bun scripts/lens-index.ts gene-kim` duly reported
"gene-kim argues through: P:2, P:8", which is the exact claim the paragraph declines to make. Brackets
dropped, re-run, and the index reports P:8 alone. The pre-existing bracketed mentions further down are
P:8, which this page does hold, so they are left as they are. **For Julie or for whoever next touches
that script:** a file that both records citations and discusses them cannot be parsed by a bare regex,
and the cheap fix is to read only the lines under the `## reading` and `## extension` headings.

**The unanchored control's round 3 changed `reading`, 2026-09-25.** Two sentences became one. The
opener "Kim's unit is the numbered set" repeated the shape of `kent-beck.md`'s "Beck's subject is",
and the second sentence was the third full statement of the Three Ways on the page, which the control
counted as the harder form of the repetition item; `thesis` and `named_frames[0]` keep the
enumeration. The flow, feedback and experiment claim survives in sentence 3 unchanged. Claim delta:
NARROWED. Record: `_working/gene-kim/control-remediation-2026-09-25.md`.

## reading

- The Three Ways were the first of Kim's numbered sets, posted in August 2012. [F:the-three-ways]
- The later sets arrive as named lists, the Five Ideals from the solo book and the post naming them, and three mechanisms with Steven Spear the book says move problem solving out of high-risk zones. [F:the-five-ideals] [F:slowification-simplification-amplification]
- Each of the sets comes at one claim, that technology work is a system whose performance is set by flow, feedback and experiment. [T:thesis]
- The distribution is the second contribution: a novel, a summit he has run since 2014, and a handbook crediting the 2012 post for the frame. [L:1] [F:the-three-ways]

## extension

- The Third Way asks for a culture where taking risks and learning from failure are ordinary, and where repetition and practice are the prerequisite to mastery. [F:the-three-ways] [T:working-line]
- Held against a security organization, that is a claim about which difficulty in the job is the right one, because mastery by repetition requires that the repeated work be the work itself. [P:8] [T:working-line]
- Where the repeated work is the approval and the sign-off, the mastery that accrues is in coordination. [T:working-line] [F:the-three-ways]
- The First Way points at the test rather than the design: judge the whole system's performance, and a control that moves work between departments has to earn its place there. [T:thesis] [F:the-three-ways]
- The Second Way asks for feedback shortened and amplified, and the loop that matters here runs from a control failing to anyone hearing of it, which no approval shortens. [T:thesis] [F:the-three-ways]
- And the transfer stops at the blast radius, since failure can be made ordinary only where it is recoverable. [F:the-three-ways]

## Angle, Lens position, and the move not repeated

Angle: the numbered set as a portable artifact, and the channel that carried it, held apart from
whether the sets are right. Lens position: [P:8], the four criteria for meaningful work, read onto
which difficulty in a security job is the right one. Larson also holds [P:8], on a different facet
(the shape of an engineering career rather than what the repeated work teaches), so the two do not
collide.

The move deliberately not repeated: Forsgren's page argues from the instrument to the practice, so
this page does not re-argue measurement, and it hands the four DORA measures back to her page rather
than restating them.

Two sameness findings from round 1 seat 1 were carried open through rounds 2 and 3. **Both are closed
on 2026-09-24.**

The closer is repaired. `still_load_bearing_despite` now opens "Strip all of that away and the
sequence is still there," which is seat 5's round 2 wording, unapplied until now. The old opener,
"The sequence survives all of it," was `kent-beck.md:379`'s sentence with one noun changed, and round
3 seat 1's cross-batch note found the wider pattern: nine of twenty-one pages open that field on
"survives" or "comes through". Grepped again on 2026-09-24 across every thinker and concept page, the
new opener is the only imperative one on the roster and shares no opening clause with any other page.
The field costs nothing at the gate, since `MAX_WORDS` binds `reading` and `extension` alone. The
sentence after it was re-read for the calibration item about stale neighbours: "Flow, then feedback,
then a culture of experiment is an ordering claim" still follows, and "all of that" still refers to
the limits the field renders directly beneath. Claim delta: SAME.

The opener is closed as no defect, which is seat 5's call rather than seat 1's. "Kim's unit is the
numbered set" was said to join Beck's and Komoroske's possessive shape. Grepping all twenty `reading`
openers, twelve of them open on the thinker's name, most of those possessively: Komoroske, Karpathy,
Beck, Dekker, Anderson, Fournier, Majors, Allspaw, Woods, Dalio, Larson, Cunningham. It is the house
form rather than a collision with two named pages, and the noun after the possessive is what does the
distinguishing. Nothing changed, and the finding is recorded closed rather than left open for a fourth
round to rediscover.

**The opener measurement, sharpened and checked, 2026-09-24.** The round 1 re-read asked for the
tighter shape to be counted instead of folded into the twelve. Reading all twenty openers on the
roster: possessive name, then an abstract singular, then a copula, then a definite noun phrase is held
by `kent-beck.md` ("Beck's subject is the price of the next change") and by this page ("Kim's unit is
the numbered set") and by nothing else, so the seat's claim holds as stated. Two further pages sit one
step off it, `alex-komoroske.md` and `sidney-dekker.md`, which take the same possessive and copula and
then a clause in place of a noun phrase. Four of twenty use the copular possessive frame and two of
those close it on a definite noun. The opener stands, because the frame is the site's and the
distinguishing work is done by the noun after it, and the count is written down here so a later round
argues with a number instead of an impression.

**What changed in `reading` on 2026-09-24, for the novelty check.** The field no longer closes on what
the page cannot claim, which the novelty seat found on all three pages of this batch and called a run
signature. The hedge it used to close on was `limits[0]` and `limits[1]` compressed, and both render
directly beneath the field, so the doubt is still in front of the reader in the fuller form and in
three other fields. The closer is now the distribution sentence. The field also states the page's own
claim for the first time, in its fourth sentence, which is the defect the advocate seat voted REVISE
on: four of six sentences were about provenance and channel, and the argument `thesis` makes never
reached the reading at all.
