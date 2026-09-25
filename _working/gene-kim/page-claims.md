# Gene Kim: page claims map

Which fact carries which factual field. `scripts/fact-ledger.ts` derives the required list from the
page itself, so a new frame, a new critic edge or a new book adds a line here automatically.
Format: `- <field path> [S:n] [S:n]`.

Interpretation is not listed here. The Editorial Reading has its own map in `reading-claims.md`, and
the Councils judge the rest. The second block below goes past the required set so that a fact the
page relies on in prose is traceable too. What it covers there is named rather than implied, because
a claims map that asserts full coverage and does not have it is worse than one that says where it
stops: the tagline, the thirty-second take, why they matter, the thesis, every frame's
`one_line_gloss`, all five limits, the closing paragraph, all seven `parallel` edge labels, the live
edge and Further In. It does not cover `working_line`, which is a verbatim quotation from [S:5]
credited on the page as paraphrase, and it does not cover `inclusion_rationale`, which is a private
record of the Council rather than a claim to a reader.

## Five notes the merge request has to repeat

**1. The DORA founding claim is not sourced and is not on this page.** [S:26] records four bios read
for it, none of which says it. The page states the verified sequence instead, from [S:16]: Puppet
invited Kim into the 2012 study, Kim invited Humble, the two analysed 4,000 responses, Forsgren
joined for the 2014 report. The claim is live elsewhere on the site in eight places, six of which
name Kim, verified by grep on 2026-09-22: `src/content/thinkers/jez-humble.md` lines 59, 191, 198,
200, 381 and 459, and `src/content/thinkers/nicole-forsgren.md` lines 40 and 441. The inclusion
Council's highest count was seven and missed jez-humble.md:198, which carries the same unsourced
claim for Humble himself inside a `co_originators` role string. Source it with a line those pages
can cite, or lower all eight in one pass.

**2. [S:24]'s arithmetic was repaired on 2026-09-24 and `limits[1]` may now carry a denominator.**
The inconsistency this note used to flag is resolved. The old line said "Gene Kim" was "absent from
nine of the eleven, and present on two", then named Wikipedia's DevOps article and Octopus Deploy —
and Octopus Deploy was never in the enumerated eleven, so the count double-counted. The second audit
re-ran all twelve fetches: of the eleven enumerated pages, "Gene Kim" is absent from **ten** and
present on **one**, Wikipedia's DevOps article, twice and in the reference list only. Octopus Deploy
is a twelfth page and carries him three times as a reading recommendation. "Three Ways" is absent
from all eleven. `limits[1]` was written defensively as "on two of the pages checked" with no
denominator, which is still true and still shippable, so nothing on the page has to change; a
drafter who wants the sharper sentence can now write one of the eleven and say which.

**3. Two ledger lines are cited by no field on purpose, and one of them is new.** `fact-ledger.ts`
reports `warn unused` for [S:9] (the four types of work, whose enumeration is unverifiable, so no
field may state it), for [S:26] (the DORA founding claim, recorded as a gap) and now for [S:28].
[S:28] is the research that closed a round 1 seat assertion: seat 4 said whole-system judgement
cannot by itself disqualify a handoff, because separation of duties routes work to a second party on
purpose, and NIST SP 800-53 AC-5 bears that out. The finding removed a prohibition from `extension`
rather than putting anything on the page, so nothing cites it and nothing should. Read those three
warnings as records, not as dropped claims.

**5. [S:25b] is new, and the page was corrected to carry it.** The 2026-09-22
audit deleted a claim that *The Idealcast* had an episode with Nicole Forsgren and Jez Humble, on the
strength of a "Most Recent" strip that shows three items, and wrote a prohibition into the ledger
against ever asserting it. The episode exists: Episode 25, with its own permalink, listed above
episodes 24 through 21 on the author page the ledger already cites. The second audit restored it as
[S:25b] and withdrew the prohibition. One page field had already been written around the false
absence and was wrong on the page: `live_edge.summary` said the podcast's "most recently listed
episodes are Patrick Debois with John Willis, and Scott Havens twice," which was the three-item strip
mistaken for the back catalogue. It now names the Forsgren and Humble episode first and cites
[S:25b], and `last_observed` moves to 2026-09-24. `limits[1]` was corrected in the same pass for the
arithmetic in note 2: it now says his name appears on one of the eleven and on a twelfth page checked
alongside them, rather than on "two of the pages checked." Both edits narrow or correct what the page
asserts and neither adds a claim the ledger does not carry.

**6. Five round 3 edits were applied on 2026-09-24, and one of them removes a field the inclusion
Council asked for.** Round 3 stalled after seat 3 and its gene-kim edits sat unapplied. Each is a
narrowing or a correction, and none adds a proposition. (a) `why_they_matter_as_a_thinker` now quotes
[S:24b]'s own "a fundamental book that introduced" rather than firming it to "the book that
introduced", caught independently by seats 1 and 3. (b) `live_edge.summary`'s absence claim for FAAFO
and the three developer loops is bounded to "the sources read for this page", so it no longer reads as
an unbounded absence beside [S:24]'s bounded one. (c) The tagline and the thirty-second take both say
"a novel with two co-authors", because both credited a three-name book ([S:7]) on a page whose
limits[2] exists to stop exactly that; `reading` was read for the same defect and left alone, since it
lists the channels of distribution rather than attaching a possessive to the novel, and the field
stands at 158 of 160 words. (d) `still_load_bearing_despite` opens "Strip all of that away and the
sequence is still there", because "The sequence survives all of it" was `kent-beck.md:379`'s sentence
with one noun changed. (e) **`named_frames[1].co_originators` is deleted**, against inclusion Council
seats 3 and 5, who asked for Jon Smart and Geoffrey Moore there. The review Council had a mechanism
the inclusion Council did not: `scripts/decay.ts:62` renders every entry as a permanent claim reading
"jon-smart co-originated 'The Five Ideals'", which outlives the role strings' hedge, and SCHEMA 4.7
reserves the field for "frames with several originators". Neither man originated the set. Inclusion
seat 5 drew the distinction itself, "co_originators on phrases inside the set, not on the set". Both
credits still render in prose, in `named_frames[1].one_line_gloss` and in limits[2], and the role
strings' own disclaimer is now the whole of the claim. This one is a judgment call that went against
a Council, so the merge request has to name it.

**7. Eight fields changed on 2026-09-24 in the round 1 re-read, and one of them puts a proposition
into `reading` that only `thesis` carried before.** Every other change is a narrowing or a
correction. The full record, including what was rejected, is
`_working/_council/2026-09-22/round-1-editor-gene-kim.md`.

(a) **"Systems thinking" is off the page.** It carried the First Way in three fields
(`thirty_second_take`, `named_frames[0].one_line_gloss`, `reading`) and the string appears nowhere in
this ledger, verified by grep. It came from the researcher's own summary of the frame in
`sources.md`, in the list written for the inclusion Council, and was never a source's word. The two
elements the sources do give are now in its place: fast flow of work, from the novel's own statement
of the First Way [S:8], and the performance of the whole system ahead of any one silo, from the 2012
post [S:5]. All three fields already cited both lines, so no citation moved.
(b) `named_frames[0].one_line_gloss` now reads "less than five months before the novel" for an
interval of four months and nineteen days, from [S:5]'s 22 August 2012 to [S:7]'s 10 January 2013.
Both lines were already on that field's claims line.
(c) `thesis` now has Deming "credited inside it", the First Way, where it said "in the same clause",
because [S:5] holds the silo definition and the Deming parenthesis as two separate quoted strings and
supports the location without supporting the adjacency. `adjacent_thinkers[10]` has said "inside the
First Way" all along.
(d) `limits[3]` no longer closes on Orzen appearing "on no published byline", which the field's own
quotation contradicted two sentences earlier by naming his book *Lean IT*. The ground is now the
byline record the field already states, that he authors neither book the post names [S:5], beside the
four co-authors who cite the post as Kim's in print [S:6]. **[S:1] comes off this line**, since it was
carrying the wider byline claim and nothing narrower needs it.
(e) `limits[5]` no longer states what the circulating definition of vibe coding excludes. [S:21]
carries a prohibition against exactly that, appended when the Karpathy page's ledger was found to be
where the definition's wording actually sits. What the limit reports now is Willison's own charge in
his own word, that the title abuses what he calls a very clear definition.
(f) `named_frames[2].concept_slug` moves from `file-integrity-checking` to `tripwire`. The slug is a
global join key per SCHEMA 4.7, so the old value would have handed Kim primary authorship of a whole
category for every later holder, in the same frame whose gloss says the category name belongs to
nobody. Checked before the change: no other page holds either slug, no concept page exists for
either, `src/lib/graph.ts` joins on it and nothing else reads it, and `scripts/decay.ts` renders its
permanent claims from `display_name` instead. So nothing renders differently, no build warning
appears and no claims line moves. What changes is the claim the key would have made.
(g) `named_frames[1].one_line_gloss` loses its psychological-safety sentence and `extension` swaps
its Fourth Ideal sentence for a Second Way one, which leaves `limits[2]` as the only carrier of the
point that the post naming the five credits nobody for the fourth. Both deletions are deliberate and
they are recorded together, because two deletions in one pass against a proposition another field was
relied on to carry is the shape that manufactured an overclaim on the Humble page.
(h) `reading` drops its closing hedge, which was `limits[0]` and `limits[1]` compressed above the
fields that carry them in full, and gains a sentence stating the claim under the sets. That sentence
asserts no more than `thesis` does and cites `[T:thesis]`; it is flagged here as the one non-narrowing
row of the pass. **Reopened and rewritten in round 2**, see note 8(a): three seats read the wording as
widening the row rather than holding it, and the second half of the sentence above, that it "asserts
no more than `thesis` does", was wrong as written.

**8. Six fields changed on 2026-09-24 in the round 2 resolution, and one limit was deleted. Every row
is a narrowing, a correction or a deletion, and no row adds a proposition.** The full record, with the
two rejected edits and the disposition of all eight seat-asserted claims, is
`_working/_council/2026-09-22/round-2-editor-gene-kim.md`.

(a) **`reading` sentence 4 now states `thesis`'s three tests rather than one claim about what
performance is.** It read "its performance is a property of that system as a whole"; it now reads
"whose performance is set by flow, feedback and experiment." Seats 2, 3, 4 and 5 all reached the same
finding, and seat 2 supplied the test: [S:5]'s First Way is about where performance is judged, so the
old wording asserted what performance *is* and widened the row note 7(h) had labelled SAME. The new
wording tracks `thesis` clause for clause ("how work moves through it, how quickly the news of a
problem comes back, and whether the people inside it are free to experiment"), which is also what
`extension` then answers one move at a time. Citation unchanged at `[T:thesis]`. Claim delta against
`thesis`: SAME. Against the previous sentence: NARROWED.
(b) **`limits[3]` no longer describes the strongest byline evidence on the page as other people's
testimony.** The final sentence rested the `original` filing "on that byline record and on his four
co-authors citing the post as his in print." Two defects, one from seat 1 and one from seat 2. The
nearest antecedent of "that byline record" is Orzen authoring neither book, which supports nothing
about the frame, so the ground is now named outright: the post carries his byline alone [S:5]. And Kim
is himself an author of the book doing the citing, which `why_they_matter_as_a_thinker` discloses ("on
a book with four other names on the cover") and this limit did not, so the sentence now names the book
and the shared byline: "the second edition of *The DevOps Handbook*, which he wrote with four
co-authors, cites the post as his" [S:6]. Claim delta: NARROWED. Citations unchanged, [S:5] [S:6].
**(b2) `named_frames[0].one_line_gloss` carried the same description and was lowered in the same
pass.** No seat proposed this and it is editor-initiated, on the `calibration.md` item that a claim
lowered on evidence in one field has to be lowered in every field that carries it, an item whose two
sightings were both found a round late by a reader who had not made the edit. `grep -n "four
co-authors\|co-authors cit"` returns four carriers: this gloss, `limits[3]`, `why_they_matter_as_a_thinker`
and `inclusion_rationale`. The gloss read "cited back to that post by his four co-authors in the second
edition of *The DevOps Handbook*" and now reads "cited back to that post in the second edition of *The
DevOps Handbook*, which he wrote with four co-authors." `why_they_matter_as_a_thinker` already discloses
the shared byline in its own words, "on a book with four other names on the cover", and needs nothing.
`inclusion_rationale` is left as it stands: it is backstage per SCHEMA 4.1, never rendered, and it is
the Council's own record rather than a claim to a reader. Claim delta: NARROWED. Citation unchanged.
(c) **`limits[5]` is deleted, and the page now carries five limits.** It reported Willison's objection
to the *Vibe Coding* subtitle, which `adjacent_thinkers[4]` argues in full and `live_edge.summary`
reports again, so the field was a third telling of one proposition, the shape `calibration.md` names
on the Cunningham page. Two further reasons, neither seat 1's: round 2 seat 3's cross-batch note has
the field closing on "the person who had narrowed the term", which is a fact on the Karpathy ledger
that [S:21]'s appended prohibition bars this map from sourcing, and the field survived only on that
line's record of Willison's earlier post title, which it never named. SCHEMA's table at line 227 and
`src/content.config.ts` both require at least 2 limits, so five clears the gate. `limits[5] [S:21]
[S:20]` comes off the claims map; both lines are still cited by `adjacent_thinkers[4]`, `live_edge`
and `further_in`, so no `warn unused` follows. **One fact leaves the page with the field**, against
seat 1's "nothing leaves the page but a third telling": that the other book named in Willison's post
was retitled *Beyond Vibe Coding*, which is on [S:21] and which no other field carries. Nothing on the
page depended on it. A later round that wants the contrast back should put it in `live_edge.summary`
beside the unchanged subtitle, where it is one clause rather than a limit.
(d) **`limits[1]` no longer states why the eleven pages were picked.** It read "Eleven hand-picked
pages is not a survey, and they were picked because DORA's measures show up on them, which loads the
comparison"; the clause after "survey" is deleted. [S:24] supports the conditional only, "on the
reference pages where DORA's measures appear, his own named frames do not", and which of the eleven
carry the measures is nowhere on this ledger, so the page's own bounded absence was stating an
unbounded fact about its own method. `grep -in 'picked because\|measures show up\|loads the
comparison' facts.md` returns nothing, checked 2026-09-24. The two sentences either side were read
after the cut: "Both times it points at books rather than at vocabulary" still precedes it, and "The
finding is bounded to those pages and supports nothing about what practitioners use" still carries the
self-limiting force the deleted clause was adding to. Claim delta: DELETION.
(e) **`adjacent_thinkers[3]` no longer characterises Fowler's own output.** The label read "Fowler
builds a pattern language readers consult a piece at a time, while this corpus arrives as a novel, a
handbook and a conference." Its only citation is [S:15], which is *Accelerate* and its forewords and
carries nothing about how Fowler writes. The label now states this page's side alone: "Same
neighbourhood, different register. This corpus arrives as a novel, a handbook and a conference."
Claim delta: DELETION. Residual for round 3, recorded rather than repaired: "different register" is
now a comparison with one side stated, and the other side is a link away on Fowler's page.
**Closed in round 3**, see note 9(b): the residual was a punctuation repair and the comparison is
still one-sided by design.
(f) **`background` asserts no founding credit for Tripwire, Inc.** It read "He started Tripwire, Inc.
in 1997"; it now reads "Tripwire, Inc. followed in 1997, and he spent thirteen years there as CTO,
leaving in mid-2010." [S:1] says "founder and CTO" and [S:2] says "co-founded ... with rights to the
Tripwire name and technology" while naming no partner, so the two records disagree on the credit and
`SKILL.md` stage 1 says to keep the page vague where they do. The thirteen years and the mid-2010
departure are unaffected, both from [S:1]. Citations unchanged. Claim delta: NARROWED.

**Also re-checked, and no page change followed.** `adjacent_thinkers[1]` says four of the frames on
Forsgren's page credit him. Read on 2026-09-24: `dora-four-keys`, `change-failure-rate`,
`time-to-restore` and `throughput-stability-non-tradeoff` each list `gene-kim` under
`co_originators`, so the count holds exactly. This is a claim about this site rather than about the
record, so it takes no ledger line, on the same reasoning as note 1's grep of the DORA founding
claim.

**9. Two edge labels changed on 2026-09-24 in the round 3 adjudication resolution. Both rows are a
deduplication and a punctuation repair, and neither adds a proposition.** The full record, with the
disposition of every adjudicator edit, is
`_working/_council/2026-09-22/round-3-editor-gene-kim.md`. No reading or extension sentence moved, so
`reading-claims.md` is unchanged.

(a) **`adjacent_thinkers[5]` no longer restates why Lee's review is scoped where it is.** The label
read "Kim is named as one of three co-authors rather than as the argument's subject, so the target is
the measurement research"; it now reads "The review's target is the measurement research." The
deleted clause sits almost verbatim in `limits[4]` ("Kim is named there as one of three co-authors
rather than as the argument's subject, so the objection is scoped to the measurement work"), and
`limits` renders at section 7 against Adjacent Thinkers at 8, so the reader meets the reasoning
before the card that states its conclusion. Both halves are carried by the same line, [S:22], whose
scope sentence reads "the target is the book's scientific claim, which is the research half of the
corpus, and Kim is named as a co-author rather than as the argument's subject," so nothing on the
page lost its source and [S:22] is still cited twice. Citation unchanged at [S:22]. Claim delta:
DELETION. The retained sentence is SAME, re-authored from the adjudicator's "The target is" to name
its own subject, because after "the authors' careers" the bare "The target" reaches for the wrong
noun.
(b) **`adjacent_thinkers[3]` attaches "different register" to the side the page states.** It read
"Same neighbourhood, different register. This corpus arrives as a novel, a handbook and a
conference."; it now reads "Same neighbourhood, different register: this corpus arrives as a novel, a
handbook and a conference." This closes the residual recorded at note 8(e). Punctuation only: the
colon makes the stated side the content of the register claim instead of a second free-standing
assertion beside it. Citation unchanged at [S:15]. Claim delta: SAME, and narrowing if anything,
since the register claim is now bounded by what the page says about this corpus rather than standing
on its own.

**10. The unanchored control's findings were applied on 2026-09-25, and note 1 is resolved rather than
repeated.** Full record, with a claim-delta row per change:
`_working/gene-kim/control-remediation-2026-09-25.md`. The DORA founding claim note 1 calls unsourced
was sourced on two neighbour ledgers the whole time (`nicole-forsgren` [S:13], `jez-humble` [S:18]),
and DORA's own 2018 announcement is now on this ledger as [S:26a], so none of the eight places note 1
lists needs lowering and `background` now carries the fact, cited to [S:26a]. Both `original` frames
now cite their antecedent search, [S:5a] and [S:11a]. `limits[2]` cites [S:29] for the Edmondson
clause. `thirty_second_take` keeps [S:8], which still carries its Goldratt clause.

**4. Two frames the inclusion Council discussed are deliberately absent.** The four types of work
has no entry, because [S:9] verifies that the novel poses the frame and names one of the four and
that the enumeration is nowhere on this ledger, and a frame whose content cannot be stated is not
shippable. The publisher's assertion that the book teaches it is reported in `body_of_work[1]` on
[S:7], with no enumeration. FAAFO and the three developer loops appear in `live_edge.summary` only,
per SCHEMA 4.14, which forbids a frame entry linked from the live edge.

## Required set

- active_years [S:3] [S:1] [S:20]
- background [S:1] [S:2] [S:3] [S:4] [S:10] [S:12] [S:13] [S:14] [S:15] [S:17] [S:18] [S:20] [S:26a]

- named_frames[0].attribution [S:5] [S:6] [S:5a]
- named_frames[1].attribution [S:10] [S:11] [S:11a]
- named_frames[2].attribution [S:3] [S:4]
- named_frames[2].co_originators[0] [S:3] [S:4]
- named_frames[3].attribution [S:12] [S:13]
- named_frames[3].co_originators[0] [S:12] [S:13]
- named_frames[4].attribution [S:15] [S:16] [S:6]
- named_frames[4].co_originators[0] [S:15] [S:16]
- named_frames[4].co_originators[1] [S:15] [S:16]

- body_of_work[0] [S:5]
- body_of_work[1] [S:7] [S:8]
- body_of_work[2] [S:10] [S:11]
- body_of_work[3] [S:14] [S:6]
- body_of_work[4] [S:15] [S:16]
- body_of_work[5] [S:12] [S:13]
- body_of_work[6] [S:3] [S:4]
- body_of_work[7] [S:18] [S:19] [S:17]

- adjacent_thinkers[4] [S:21] [S:20]
- adjacent_thinkers[5] [S:22]
- adjacent_thinkers[6] [S:8] [S:7]
- adjacent_thinkers[10] [S:5]

## Beyond the required set

- tagline [S:5] [S:7] [S:1]
- thirty_second_take [S:5] [S:8] [S:10] [S:11] [S:12] [S:6] [S:23] [S:25]
- why_they_matter_as_a_thinker [S:6] [S:8] [S:24b] [S:23]
- thesis [S:5] [S:8] [S:11] [S:12] [S:13]
- named_frames[0].one_line_gloss [S:5] [S:6] [S:7] [S:8]
- named_frames[1].one_line_gloss [S:10] [S:11]
- named_frames[2].one_line_gloss [S:2] [S:3] [S:4]
- named_frames[3].one_line_gloss [S:12] [S:13]
- named_frames[4].one_line_gloss [S:15] [S:16] [S:6]
- adjacent_thinkers[0] [S:16] [S:14] [S:15] [S:6]
- adjacent_thinkers[1] [S:6] [S:16]
- adjacent_thinkers[2] [S:14] [S:5]
- adjacent_thinkers[3] [S:15]
- adjacent_thinkers[7] [S:12] [S:13]
- adjacent_thinkers[8] [S:3] [S:4]
- adjacent_thinkers[9] [S:18] [S:7]
- limits[0] [S:1] [S:5] [S:11] [S:6] [S:25] [S:27] [S:18] [S:19]
- limits[1] [S:24]
- limits[2] [S:5] [S:8] [S:11] [S:12] [S:13] [S:3] [S:29]
- limits[3] [S:5] [S:6]
- limits[4] [S:22] [S:15]
- still_load_bearing_despite [S:5] [S:24] [S:1]
- live_edge [S:20] [S:21] [S:1] [S:25] [S:25b]
- further_in [S:5] [S:7] [S:11] [S:14] [S:12] [S:3] [S:22] [S:21]
