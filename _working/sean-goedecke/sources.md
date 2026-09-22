# Sean Goedecke: research record

Stage 1 of the add-a-thinker skill, run 2026-09-22 against candidate issue #30. The machine-checkable
half is `facts.md`; everything below points at an `[S:n]` line there. Nothing here has been through a
Council, and the issue's own case was treated as unverified throughout.

---

## 1. What the roster already claims about him

Run first, before any research, per the skill. `bun scripts/inbound-claims.ts sean-goedecke` returns
two live published claims and no frame credits. Both hold, and both were checked against the primary
rather than against the Larson working set that produced them.

**Claim 1 — the edge.** The Will Larson page carries `critiques`, secondary, pointing here, glossed:
*"Why I don't like the 'staff engineer archetypes'" (2026) argues the archetypes fail as goals,
because important projects are assigned top-down and nobody becomes a technical leader by trying to
be one. He is fair about where the fault lies, granting that Larson wrote anthropological description
and readers turned it into a how-to, and he opens by calling the essay the most influential writing
about staff engineers in a decade.*

**Holds, clause by clause** [S:20]. The essay is dated 2026-05-03. It names Larson. "Archetypes do not
make good goals" is a section claim; "You don't become a technical leader by trying really hard to be
a technical leader" is verbatim; the concession is verbatim — "Larson is pretty clear that these
archetypes are more of an anthropological description of some of the varied niches staff engineers
fill, not a how-to guide"; and the essay's **first sentence** is "The most influential piece of writing
about staff engineers in the last decade has to be Will Larson's *Staff engineer archetypes*", so
"opens by calling" is exact rather than approximate.

This is the rare `critiques` edge that survives the three-part test cleanly: durable artifact, names
the thinker, argues against them. Contrast Forsgren, where three of three failed.

**Claim 2 — the prose mention.** Larson's limit [L:1], "The archetypes are an artifact of who was
interviewed", uses Goedecke's argument as corroboration from a different route. Holds [S:20]. Nothing
in the primary contradicts the limit's use of him.

**Nothing to correct.** Both inbound claims survive. That is the first clean inbound-claims run since
the view was added, and it is worth saying plainly rather than passing over: the Larson researcher
did this one right, and `facts.md` line [S:29] on that page already recorded the distinction between
Goedecke's genuine critique and Alex Ewerlöf's, which is not one.

---

## 2. Uptake check — run before anything else, and it passes

The skill puts this first because it decides whether five Council seats are worth spending. Saxe cost
five seats to learn late. The rule: if **every** frame is under two years old **and** has no use by
practitioners other than the thinker, park it.

| Candidate frame | First dated | Age at 2026-09-22 | Use by others |
|---|---|---|---|
| Shipping / "done" is a social construct | 2024-11-09 [S:10] | 22 months | Simon Willison, 2 days later [S:11]; Gergely Orosz podcast, 6 weeks later [S:12]; Ben Werdmuller [S:13]; Antoine Buteau [S:18] |
| Legible vs illegible work in a software company | 2025-09-03 [S:15] | 12 months | Alex Dong, endorsing and republishing it by name [S:17]; Buteau names "legibility" as an organizing theme [S:18] |
| Ratchet effects on engineer reputation | 2025-01-05 [S:19] | 20 months | **none verified** |
| Archetypes are not goals (the Larson critique) | 2026-05-03 [S:20] | 4 months | this site's own Larson page |

**`uptake_passes`: true.** The oldest frame is 22 months and carries documented outside use by four
named practitioners, one of whom (Willison) has a page here. The failure condition needs both halves
and neither holds for frame 1.

**The honest qualifier, which belongs in front of the Council rather than in a footnote.** Twenty-two
months is *under* the two-year bar in absolute terms. Goedecke passes on the strength of uptake, not
on age. He dates his own breakthrough to November 2024 [S:6], and before that he was writing "a post
every few months". So the body of work the site would draw on is essentially two years old. That is
the Saxe shape in the age column and the opposite of Saxe in the uptake column, and the Council should
be shown both rather than the favourable one.

**Reach, kept separate from uptake because it is not the same thing.** 412 Hacker News story
submissions from his domain, the top at 1,425 points [S:7]; and 141 posts in 2025, 33 of them at the
top of HN — **a figure asserted by his interviewer Cynthia Dunlop, not by him** [S:6a], and one the
audit could not confirm from any first-person source. Cite it with her name on it or not at all.
Submission and voting data measures attention. Practitioners
building on the vocabulary is what the site means by uptake, and that evidence is the four names
above, not the point totals.

*One reach claim I could not verify and am not carrying: a Hacker News post ranking seangoedecke.com
as the second most popular personal blog of 2025 with 11,243 points appeared in a search result
summary, but the thread itself returned HTTP 429 and I could not read it. It has no `[S:n]` line and
must not reach the page.*

---

## 3. Corrections to candidate issue #30

The issue is unusually honest about its own weakness, which makes the corrections small. They are
corrections of emphasis more than of fact, and one is a genuine factual fix.

**3.1 "Corpus size, publication span and employer all need verification, and corpus span is the thing
that decides this one."** All three are now verified, and the span does not decide it the way the
issue expected. Employer: GitHub, Staff Software Engineer since March 2023, on GitHub Models
[S:1][S:4]. Span: November 2024 to September 2026, about twenty-two months of the work that matters,
though his career runs to 2016 [S:1][S:8]. Volume: 74 posts on his own "popular" index alone [S:8],
and 141 posts in 2025 on his interviewer's count [S:6a]. **The span is short
and the corpus is not thin.** Those are different axes and the issue collapses them.

**3.2 "Likely too thin for a page on its own."** Recorded as the seats' reservation, and it needs
restating rather than repeating. The thinness is not in output, which is prolific, and not in
attention, which is large. If there is a thinness it is in **portable named vocabulary that other
people carry**, and on that axis the honest count is one strong frame and one credited extension, not
four. See section 5.

**3.3 The route into the site understates him.** The issue introduces him as "the one durable
published critic of the staff engineer archetypes." True [S:20], and it is not what he is known for.
The archetypes essay is nowhere near his most-read work; "How I ship projects at big tech companies"
carries 1,425 HN points against it [S:7] and is what Willison and Orosz picked up [S:11][S:12]. A
Council briefed only on the critique would be judging the wrong corpus.

**3.4 A biographical error in the ambient record, which the issue does not repeat but a drafter would
have inherited.** Secondary summaries describe him as holding "a degree in mathematics and an MA in
moral philosophy." His own resume [S:2]: Melbourne University, MA in **Philosophy** (2015–2016),
annotated "Research in perceptual moral epistemology"; BA with Honours double-majoring in
**Philosophy and Creative Writing** (2010–2014), with the Hastie Prize; and a **Diploma** in
Mathematical Science (2013–2014).

*Corrected by the adversarial audit, because the first version of this section over-corrected.* Only
half the ambient claim is wrong. Mathematics is a diploma rather than a degree, and that correction
stands. But the MA's stated research area is moral epistemology, so "MA in moral philosophy" is loose
about the title and right about the subject — a drafter told flatly that "the MA is not moral
philosophy" would ship a second error in place of the first. State the title and the research line
together, or leave the MA's subject alone.

The creative-writing half of the honours degree is the detail that actually explains the prose, and
every secondary summary drops it.

**3.5 "the 2026 essay the Larson page cites."** Confirmed, 2026-05-03 [S:20]. No correction, recorded
so the date is not re-derived later.

---

## 4. Career and background, from primary sources

His own published resume [S:1] gives the full ladder, and it is a tidier story than the summaries:

- SBL Tech, Programming Assistant, Jul–Aug 2016
- Zendesk: Intern (Aug 2016) → Associate (Feb 2017) → Software Engineer (Jul 2018) → Senior / Tech
  Lead (Jul 2019) → **Staff** (Mar 2021)
- GitHub: **Senior** (Sep 2021) → **Staff** (Mar 2023), currently on GitHub Models [S:4]

The shape worth noting, because it is load-bearing for anything the page says about large-company
dynamics: **he reached staff at Zendesk, then took a demotion in title to join GitHub, and climbed
back in eighteen months.** He has therefore held the staff title at two companies and lost it once in
between, which is an unusual vantage point for someone writing about how reputation forms and how
work gets recognised.

Education [S:2] as above: philosophy and creative writing, then a philosophy MA, with mathematics as a
diploma alongside.

Output beyond the blog: one self-published book, *Software Engineering after the Vibe Shift*, via
Lulu, no co-author, priced at cost with a free PDF, which he describes as a restructuring of the blog
posts rather than new material [S:9]. Two LeadDev articles [S:5]. One GitHub Blog post [S:4].

---

## 5. The candidate frames, and what the attribution actually is

This is where the run found the most, and most of it constrains the page rather than enabling it.
Every frame below was checked for a credited premise at the opening, per the "Simple Made Easy" rule.
**Three of the five checks changed an attribution.**

### 5.1 Shipping, and "done", as a social construct — the strongest frame

"How I ship projects at big tech companies" (2024-11-09) [S:10]:

> Shipping is a social construct within a company. Concretely, that means that a project is shipped
> when the important people at your company believe it is shipped.

The 2024 essay credits nobody [S:10]. **The follow-up gestures at a lineage, and the audit found the
first version of this section overstated how firm that gesture is.** "Getting things 'done' in large
tech companies" (2025-05-06) restates the same move — work is done when "executives at the company
understand what's happened, and are happy with it" — anticipates the objection in his own voice
("Lots of engineers will want a more solid definition than 'it's a social construct'"), and says "as
someone with a philosophy background, I have a healthy respect for social constructs" [S:14].

The Kovesi reference is a **footnote recommending further reading** on social constructs in general —
"my favourite book of underappreciated moral philosophy, *Moral Notions* by Julius Kovesi" — hanging
off a sentence about chairs. He does not say Kovesi gave him the frame, and he credits nobody for the
shipping argument itself. So the philosophy MA is visibly showing through, and that is worth saying on
the page; but **Kovesi is not a co-originator and must not be recorded as one.** The honest position
for the Council: the frame has no credited antecedent, which leaves `original` open on the evidence,
with the philosophical debt noted in prose rather than in an attribution field. That is a weaker
constraint than this section originally claimed, and it makes frame 1 stronger, not weaker.

Uptake is the best on the page: Willison two days later, quoting the frame verbatim and calling the
essay "fantastic" [S:11]; Orosz six weeks later with a full podcast episode [S:12]; Werdmuller [S:13];
Buteau [S:18].

### 5.2 Legible and illegible work — credited premise, real extension

"Seeing like a software company" (2025-09-03) **opens on the credit**, first sentence: "The big idea of
James C. Scott's *Seeing Like A State*…" [S:15]. So `attribution_kind: extended`, with Scott as
originator in `co_originators`. There is no version of this page where that frame is `original`.

What is genuinely his is the software-side operationalisation [S:16]: legible work as "predictable,
well-estimated, has a paper trail, and doesn't depend on any contingent factors" against illegible
work as "asking for and giving favors, using tacit knowledge that isn't or can't be written down,
fitting in unscheduled changes, and drawing on interpersonal relationships."

**Corrected by the adversarial audit: Alex Dong does not extend this, he republishes it** [S:17]. His
page is three sentences of his own — an appreciation, and a summary adding that legibility "can also
lead to a loss of nuance and a disconnect from the actual work being done" — wrapped around a long
blockquote of Goedecke's essay. The enterprise-customer argument this section previously credited to
Dong is inside that blockquote and is Goedecke's own. The uptake is real and it is by a named
practitioner, but it is of the linking kind. **Frame 2 therefore has no verified instance of another
practitioner building on the vocabulary**, which puts it closer to frame 3 than the uptake table
implied, and the Council should weigh it on that footing.

**Note for whoever drafts the adjacency: this frame sits next to Komoroske's coordination headwind and
Fournier on glue work, and the page should say how it differs rather than let the reader assume.**
Scott's legibility is about what an institution can *see*; the headwind is about what coordination
*costs*. They are not the same claim and a careless edge would merge them.

### 5.3 Ratchet effects on reputation — no credit, and the term is not his

"Ratchet effects determine engineer reputation at large companies" (2025-01-05) [S:19]. Mechanism:
"reputation is quick to form but very slow to change. If an executive decides you're good, it takes a
lot to make them change their mind." **Credits no source for "ratchet effect"**, which is long
established in economics and political science.

No outside practitioner use verified. So: not `original` on this evidence, and no uptake to carry it.
**Recommend it goes to the `deep` tier or off the page.** It is the frame most likely to be proposed
by a Council seat who liked the essay, and it is the one with the least behind it.

### 5.4 Two essays that are not frames, and one title that is a trap

**"Do the simplest thing that could possibly work" (2025-08-28)** is his third-most-read post [S:7] and
would look like a frame. It is not. A footnote credits the phrase outright: "I also want to credit Ward
Cunningham and Kent Beck for inventing the expression — I genuinely thought I'd just come up with the
wording myself, but I almost certainly just remembered it" [S:21]. He agrees with the principle. **Kent
Beck has a page here**, so this is an `extends` edge to `kent-beck`, and it is a good one, but it
supplies no vocabulary.

**"Glue work considered harmful" (2024-12-16) is the trap.** The title reads as an attack and the essay
is not one. First sentence: "'Glue work' is an concept Tanya Reilly came up with in 2019" [S:22]. He
calls the concept excellent and adds a prescription — do glue work tactically on projects you lead —
on the argument that "It is better to execute that mission at 60% efficiency than to spend all your
time increasing efficiency in general." **A Reilly edge is `extends`, not `critiques`.** This is the
Forsgren failure mode with the polarity reversed: there, sympathetic artifacts were filed as critiques
because the site expected critics. Here an adversarial *title* invites the same error. Reilly has no
page on this site.

**"'Make invalid states unrepresentable' considered harmful" (2025-09-08)** [S:23] argues the maxim is
wrong but **names no one**, calling it "popular advice". The maxim is usually attributed to Yaron
Minsky. Because the essay never names him, an edge to Minsky is `parallel` and cannot be `critiques`.
Same rule that demoted Kent Beck's edge on Forsgren.

---

## 6. Critics of Goedecke: none found

Searched and came up empty [S:24]. The HN story index returns **81** hits on "Goedecke" (the audit
re-ran the query; 74 was wrong, and it collided confusingly with the 74 posts on his popular index):
eight of his own posts, two promotional features — the Dunlop blogging interview and a February 2026
podcast — and seventy-one unrelated name collisions. No rebuttal essay hosted off his domain. Note
that the Pragmatic Engineer episode is *not* in this index, and that Orosz's show notes record reader
criticism of the shipping essay, which is comment-thread argument rather than a durable artifact.

Recorded as a finding rather than an absence of effort. Per SCHEMA 4.11 a page ships without a critic
when none exists, and this one would. If the Council wants one, the honest answer is that his
positions are contrarian in tone but rarely contested in print — which is itself a fact about the
corpus and possibly a limit for the page.

---

## 7. Open questions for the Council

1. **Is one strong frame plus one credited extension enough for a page?** That is the real question,
   and it is the issue's own question restated with evidence. The shipping frame is genuinely portable
   and genuinely picked up. Legible/illegible is Scott's, well applied. Ratchet effects is thin.
   Everything else in the corpus is excellent commentary that names nothing new.
2. **Is the critique better served where it already is?** The Larson page carries the archetypes
   argument in a `critiques` edge and inside a limit, both accurately [S:20]. A page here would not
   improve that claim. It would have to earn its place on the shipping frame instead.
3. **The philosophy lineage.** He credits Kovesi [S:14] and Scott [S:15] openly. Does that make him a
   translator of philosophy into engineering practice — a real and distinctive position on this site —
   or does it mean the vocabulary belongs to the people he credits?
4. ~~**Book publication year is unverified.**~~ **CLOSED by the adversarial audit.** The Lulu
   catalogue record was reached: *Software Engineering after the Vibe Shift*, paperback, published
   **19 April 2025**, one contributor, "Sean Goedecke — By (author)", no ISBN [S:25]. The page may
   carry the year.
5. **The LeadDev article dates are unverified** [S:5]. The contributor page shows no dates.
6. **`doctrine_mode` leans `mode-a`.** He names his own things and credits his antecedents carefully.
   A page that coins portable names on his behalf would be inventing vocabulary for someone who
   demonstrably would have named it himself if he thought it needed a name. If the Council accepts,
   recommend `mode-a`, which means three review rounds — confirm with `bun scripts/review-policy.ts`
   rather than from memory.

---

## 8. Recommendation

**Proceed to the inclusion Council.** The uptake check passes on evidence rather than on benefit of the
doubt, both inbound claims hold, the biographical record is primary-sourced, and the antecedent work
that usually costs a review round is done in advance: Kovesi, Scott, Cunningham and Beck, and Reilly
are all identified and correctly typed before drafting.

Convene it with the case *and* the qualifier in front of it: a twenty-two-month corpus, one frame that
clears the bar comfortably, one that is explicitly Scott's, one that should probably not ship, and no
critic anywhere. The issue guessed "too thin" for the wrong reason and may still land in the right
place. That is a judgment five seats exist to make, and the evidence is now good enough for them to
make it in one round.
