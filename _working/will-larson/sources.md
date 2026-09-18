# Will Larson: verified sources

Research pass 2026-09-17 for candidate issue #12 (`Candidate: Will Larson`, opened by Julie, label
`camila:candidate`). The issue's case was treated as unverified throughout, per `calibration.md`.
The machine-checkable ledger is `facts.md`; the `[S:n]` IDs below point into it.

---

## Audit corrections, 2026-09-17

An adversarial pass re-opened all 31 source URLs. Six ledger lines were repaired; details are inline
in `facts.md`. Four of those repairs change what this prose record says, so they are restated here
rather than left to be discovered:

1. **Ewerlöf is not a critic of Larson, and the `critiques` edge below should not be built on him.**
   His piece argues the archetypes become anti-patterns *when used as job titles*, and he says so
   while disclaiming the read this record gave it: "This is not a criticism of Will but rather an
   observation that was solidified with many examples over time." He calls the book "Will's great
   book" and says he used it "as a reference hundreds of times" [S:28]. This is exactly the failure
   the pipeline was built to catch — a sympathetic essay filed as a critique. **Goedecke [S:29]
   remains a real `critiques` edge. Ewerlöf is a counterposition on the frame, not a critic of the
   thinker, and should be labelled `extends` or left off.** That leaves one critic, not two, which
   weakens the "argued against by name twice" line in the uptake check below. The uptake verdict
   still passes on LeadDev [S:27] plus Goedecke [S:29], but it passes by less than this record says.
2. **He did not found Stripe's Foundation Engineering organization.** He joined a ~30-person group
   called "Sys"; the Foundation name arrived a year later in a reorg that merged Sys with Data and
   Developer Experience [S:5]. "Founded" must not reach the page.
3. **The SocialCode roles are confirmed and no longer need to be left out.** His own career-story
   post claims Digg → acquihire → SocialCode → VP of Platform Technology in his own voice [S:33],
   which resolves the doubt recorded under "Where sources are weak" below. The month-level tenure
   caution still stands [S:34].
4. **Larson's endorsement of *The Staff Engineer's Path* is not verifiable and has been dropped**
   from the ledger [S:11]. The Reilly link that survives is the foreword, which Reilly states
   herself [S:36]. The "Crafting Engineering Strategy announced 2025-10-25" framing was also wrong:
   that post is a retrospective on a book already for sale [S:10].

One thing to put in front of a human rather than a Council seat: the Ewerlöf page carries an author
notice asking that it not be used for LLM training [S:37]. Quoting him on a published page is
Julie's call, not a seat's.

---

## Uptake check — run first, and it passes

The skill puts this ahead of everything else because it decides whether a Council is worth five
seats. Larson clears it on one frame decisively and on a second with a caveat.

**Staff engineer archetypes.** First dated 2020-04-09 on lethain.com [S:12], six years and five
months old. It is carried by practitioners who are not Larson and who name him while carrying it:

- LeadDev, a mainstream industry publication, built a career-development piece around the four
  archetypes in October 2024 and credited him in the first line [S:27].
- Alex Ewerlöf argued against them in May 2025 [S:28] and Sean Goedecke argued against them in May
  2026 [S:29]. Both name Larson. A frame that draws named counterargument six years after
  publication is a frame that travelled.

That is stronger uptake evidence than the Majors page had at the same stage, because the
counterarguments are the proof: nobody writes a rebuttal to vocabulary nobody uses.

**Engineering strategy as a written practice.** First dated 2020-11-05 [S:19], restated in 2023
[S:20] and made into a book in October 2025 [S:10]. The caveat is real and the page must not blur
it: "engineering strategy" is a generic phrase, not a Larson coinage, and what he supplies is
Rumelt's kernel applied to engineering [S:23] [S:24]. Uptake of *the practice* is visible
(O'Reilly commissioned the book; his strategy essays are widely reposted), but I did not find a
clean case of a named practitioner adopting a distinctly Larson-shaped strategy artifact and
crediting him for the shape. Treat uptake here as present but thinner than the archetypes.

**Strategy testing** [S:21] is 9 months old with no outside use found. It is a real named method
with a first-person definition, so it belongs in the record, but it fails the uptake bar on its own
and must not carry the page. Deep tier at most.

**Verdict: uptake passes.** Recommendation is to proceed to the inclusion Council. This is not the
Saxe case: Saxe's frames were 13 months old with no outside use and several were invented by the
candidate issue itself. Larson's marquee frame is six years old, taught by LeadDev, and argued
against by name twice.

---

## Corrections to candidate issue #12

The issue is unusually accurate for a candidate case — no invented frames, no invented books. Four
corrections, one of them material.

1. **The books list is incomplete and the omission is the one that matters most.** The issue names
   *An Elegant Puzzle* (2019), *Staff Engineer* (2021) and *The Engineering Executive's Primer*
   (2024). It misses **Crafting Engineering Strategy** (O'Reilly, announced 2025-10-25, 37
   chapters) [S:10], which is the book on the exact subject the issue proposes as the page's angle.
   Any page drafted from the issue alone would have described a 2024 body of work and missed the
   current one.

2. **"He already appears on the site as a critic edge on Forsgren's page (SPACE as
   pseudo-precision)" does not survive contact with his writing.** This is the material one, and it
   is a correction to a *shipped page*, not only to the issue. `src/content/thinkers/nicole-forsgren.md`
   carries `edge_type: critiques` to `will-larson` with the label "The SPACE-as-pseudo-precision
   critique… Larson is the most measured voice on this risk." The primary sources say the opposite
   of the setup:
   - In 2018 he called Accelerate's definition "quite good" and "one of the best definitions of
     developer productivity I've encountered so far" [S:30].
   - In December 2024 he named DORA, SPACE and DX Core 4 together and called them "all great
     frameworks" [S:31].
   His actual argument is a **theory-of-improvement gap**: output metrics tell you whether something
   improved and are "very bad at focusing attention towards improving that metric" [S:31]. That is
   an argument about what a metric can do next, not about whether its dimensions are commensurable.
   I found no text where he argues SPACE dimensionalizes developer experience into false precision.
   Recommendation for the inclusion Council: the Forsgren edge should be recast — `extends` or
   `parallel`, with the theory-of-improvement argument in the label — and the return-edge work in
   stage 4 should fix the existing page rather than mirror its claim onto the new one.

3. **The archetype names are not stable across his own sources.** The 2020 blog post calls the first
   archetype **Team Lead** [S:12]; staffeng.com and the book call it **Tech Lead** [S:13], which is
   also the form LeadDev and both critics use [S:27] [S:28] [S:29]. Use Tech Lead, and do not
   present the four names as fixed from 2020.

4. **"The Fournier Council described his staff engineer taxonomy as a sharper, more current take on
   the same career territory" is a Council characterization, not a fact about Larson.** It should
   not reach the page as a claim about the relationship between the two bodies of work. What is
   verifiable: Tanya Reilly's *The Staff Engineer's Path* (O'Reilly, 2022) is the other in-depth
   book in this territory [S:11], and Reilly wrote the foreword to Larson's [S:8].

---

## Career

Verified from his own site and his publisher's bio. North Carolina upbringing, computer science at
Centre College in Kentucky, a year in Japan on the JET Program, and a defunct iOS gaming startup he
co-founded [S:1]. Stripe Press's bio for *An Elegant Puzzle* gives the chain: "an engineering leader
at technology companies including Yahoo, Digg, Uber, Stripe, and Calm" [S:2]. Since then, CTO at
Carta and now CTO at Imprint, announced 2025-06-03 [S:3] [S:4].

**Where sources are weak, and the page should be vague.** Month-level dates for the Stripe, Calm and
Carta tenures come only from LinkedIn-derived aggregators, not from a first-party source [S:5]. The
same aggregators produced a set of SocialCode roles I could not confirm belong to this Will Larson,
so I left them out entirely. Keep `active_years` and `background` at year granularity. A degree type
("BS in Computer Science") also appears only in aggregator text; his own site says only that he
"studied computer science at Centre College," so say that.

---

## Frames, with what each one actually is

**Staff engineer archetypes** [S:12] [S:13]. Tech Lead, Architect, Solver, Right Hand. Attribution
is `original` and survives the antecedent check: the post credits nobody, and he describes the
taxonomy as emergent from his interviews — "The more folks I spoke with, the better their
experiences clustered into four distinct archetypes" [S:12]. Two cautions. First, he did not create
the staff engineer *role*; those titles existed at large companies long before StaffEng, and the
page must credit him with the taxonomy and the literature, never the role. Second, the taxonomy is
an artifact of a sampling method — interviews with people who already held the title — which is the
substance of Goedecke's objection [S:29] and should appear in `limits`, not be smoothed over.

**Staff-plus as a category** [S:14]. StaffEng collects stories from "Staff, Principal, or
Distinguished Engineer roles," and Larson's usage is what put one label over the three. This is
`popularized`, not `original`, and the page should say so.

**Engineering strategy as a written practice** [S:19] [S:20]. The claim that carries it: most
companies already have an engineering strategy and simply never wrote it down, so writing it down
solves half the crisis [S:20]. Attribution must be `extended` with **Richard Rumelt** in
`co_originators`. Larson credits him twice and unambiguously — "Rumelt's views have shaped how I
think about Engineering strategy" [S:24] — and the diagnosis / guiding policy / coherent action
structure is Rumelt's kernel verbatim [S:23]. Calling this frame `original` would be the Fournier
error repeated.

**Exception debt / work the policy, not the exceptions** [S:16]. 2018, named, with a concrete
prescription: batch exceptions for a month and merge the escalations into a new policy revision. No
antecedent credited. This one is the most directly portable into Julie's territory — it is an
argument about why a control regime that runs on exceptions erodes, which is the security-exception
queue problem in different clothes. Note for the drafter: the *phrase* circulates through book
summaries and quote collections, which is circulation rather than practitioner uptake. Do not claim
uptake for it on the strength of Goodreads quote pages.

**The four team states** [S:17] and **team sizing heuristics** [S:18]. Both 2018, both presented as
his own iterated frameworks with no prior source credited. The sizing numbers (6–8 engineers per
manager, 8 for an oncall rotation, "small teams (<4) are not teams") are the most-quoted numbers he
has published and also the most context-bound; they belong on the page only if a limit names that
they come from high-growth, well-funded companies.

**Authority is loaned, not held** [S:15]. "Titles come with the sort of power called organizational
authority, and that variety of authority is loaned to you by a greater organizational authority,"
and retaining it "depends on remaining deeply aligned with the bestowing sponsor." This is the
sharpest single thing in the corpus for the issue's third question (technical direction without
authority) and it is unsentimental in a way most leadership writing is not. It is also the frame
most at risk of the site putting its own security reading in his mouth — he is describing staff
engineers and sponsors, not security functions and executive cover. Any move from one to the other
is `extension`, in its own sentence.

**Strategy testing** [S:21]. 2025-12-07, defined first-person. Fails uptake on its own (see above).
Deep tier if used at all.

---

## Antecedents, checked before anything was called original

Per the calibration item that came out of "Simple Made Easy," I checked the opening of each cited
essay for a credited premise. Three found:

- **Rumelt** behind engineering strategy, credited by Larson himself, twice [S:23] [S:24].
- **Donella Meadows** behind the systems-thinking tooling in *An Elegant Puzzle*: "If you really
  want a solid grasp on systems thinking fundamentals, you should read *Thinking in Systems: A
  Primer* by Donella Meadows" [S:25]. If the page carries any stocks-and-flows frame, Meadows is the
  originator and Larson is `extended`.
- **Simon Wardley and David Anderson** behind the Wardley mapping chapters of the strategy book
  [S:26]. Larson's own account of learning it starts from Anderson's *The Value Flywheel Effect* and
  Wardley's own writing.

No antecedent found for exception debt, the four team states, the sizing heuristics, or the
archetypes. Each is presented as his own and credits nobody.

---

## Critics and counterpositions

- **Sean Goedecke, "Why I don't like the 'staff engineer archetypes'" (2026-05-03)** [S:29]. Names
  Larson, names the essay, argues the archetypes fail as goals because the work that produces a
  staff engineer is assigned top-down. He is fair about it, granting that Larson wrote description
  and readers turned it into prescription. This is the strongest `critiques` edge available:
  durable artifact, engages a specific named frame, no page here, so `strength: secondary`.
- **Alex Ewerlöf, "Staff archetypes can be anti-patterns" (2025-05-14)** [S:28]. Names Larson's
  book, argues the archetypes become anti-patterns when read as job titles, and that the best staff
  engineers are all four at once. Second `critiques` edge, secondary.
- **Tanya Reilly** is not a critic. She wrote the foreword to *Staff Engineer* [S:8] and wrote the
  other book in the territory [S:11]. `parallel` or `extends`, never `critiques`.
- **Nicole Forsgren** is not someone Larson critiques — see correction 2 above.

**Nothing found:** no durable published critique of the engineering strategy work, and no named
critic of the executive material. The book reviews that surfaced are blog-level and mostly
favourable. Ten minutes on this per SCHEMA 4.11 is done; if a seat proposes a critic, verify before
it reaches the page.

---

## Claims that did not survive verification

Recorded because the failure mode is the point, and both came from search-result summaries that read
as confident synthesis:

1. **"Larson's framework is built largely on experience at high-growth, well-funded Silicon Valley
   companies, which limits applicability in leaner environments,"** attributed by a search summary to
   Glen Thomas's review of *Crafting Engineering Strategy*. Fetching the review directly
   (blog.glen-thomas.com, 2026-07-05) shows it makes no such argument; it is a favourable review
   whose only reservation is that the book "is not a light read." The observation may still be a
   fair *limit* for the page to make in its own voice, but it has no critic behind it and must not
   be attributed to one.
2. **"Larson first heard about Wardley Mapping from Charity Majors."** The primary essay credits
   David Anderson's book, Simon Wardley's own writing, and a reader named Markus, and does not
   mention Majors [S:26]. Dropped. It would have been an attractive on-site adjacency and it is
   false.

---

## Open questions for the inclusion Council

1. **The Forsgren edge.** Does the Council accept recasting the shipped `critiques` edge on
   `nicole-forsgren.md` as `extends` or `parallel` with the theory-of-improvement argument, given
   the primary text contradicts the current label? This is a change to an existing page and should
   be decided, not done quietly.
2. **How the page stays distinct from Fournier's.** Both pages sit in engineering-leadership career
   territory. My read of the available distinction: Fournier's page is about who pays the cost of a
   migration; Larson's strongest unused material is about **how a policy regime survives its own
   exceptions** [S:16] and **where a leader's authority actually comes from** [S:15]. Neither is
   career-ladder advice, and neither is a move Fournier's page makes.
3. **Which frames go foreground.** Candidates: archetypes [S:12] [S:13], engineering strategy as
   written practice [S:19] [S:20], exception debt [S:16], loaned authority [S:15], four team states
   [S:17]. Sizing heuristics [S:18] and strategy testing [S:21] look like deep tier.
4. **Lens position and angle.** The neighborhood is crowded — Komoroske holds P:2 and P:3, Fournier
   P:2, Dalio and Majors both P:1 [calibration]. Whatever angle the Council lands on has to come
   with a position no neighbor already occupies.
5. **Is he too current to be stable?** He changed employers in June 2025 and shipped a book in
   October 2025 that reframes his own corpus. A page written today will carry an `active_years` that
   moves.

---

## Antecedent searches run at drafting time, 2026-09-17

Three of the five inclusion seats marked attribution questions UNVERIFIED and told the drafter to
search before any `original` label reached the page. All three searches were run. Two came back
with prior art, and the page's attributions changed because of it. Recording the outcomes here
because the failure mode is the point.

1. **"Authority is loaned, not held" has an antecedent, so the frame ships as `extended`.** Seats 2,
   3, 4 and 5 all named French and Raven (1959) and Barnard (1938) as places to look. French and
   Raven's legitimate power rests on designation by a legitimizing agent, and the standard summary
   of the concept states that the legitimacy "can be revoked by the original granters, their
   designees, or their inheritors" [S:40]. That is Larson's conferral-and-retraction structure
   [S:15] under an older name, and he credits nobody. The page marks the frame `extended` with
   French and Raven in `co_originators`, names them in the gloss, and keeps Larson's own wording in
   the display name and the working line. What stays his: the loan framing and the maintenance
   condition, that holding the authority "depends on remaining deeply aligned with the bestowing
   sponsor."

2. **The sizing heuristics have an antecedent, so they ship `distributed` and deep.** Span-of-control
   guidance runs back to Graicunas in 1933 and Urwick in 1956, the recommended number varies by
   author, and Davis (1951) already gave 3 to 8 for managers at higher levels [S:41]. Larson's 6 to 8
   is an iteration inside an unsettled old literature. `original` was never defensible here.

3. **Exception debt survives as `original`, with the borrowed metaphor named.** No antecedent was
   found for the diagnosis or the batching prescription. The *name* borrows Ward Cunningham's
   technical debt metaphor from 1992 [S:42], which the frame gloss now says. No `derived_from` was
   set, because `technical-debt` is not a concept slug any page on this site holds and frame slugs
   are permanent join keys.

**Uptake, one addition.** Seat 1 flagged that no ledger line showed a practitioner other than Larson
using "Staff-plus." One was found, and it is the stronger form: Gergely Orosz defined "Staff+" for
The Pragmatic Engineer's readers in January 2023 as ordinary industry vocabulary, with no mention of
Larson at all [S:38]. A label that travels without its popularizer attached is what `popularized`
is supposed to mean. Separately, the staff engineer title is documented at Google in 2010 [S:39],
which is the evidence behind the page's guard that he created the taxonomy and never the role.

**Ewerlöf is not on the page.** Both because he disclaims criticism of Larson in terms [S:28] and
because his page carries an author notice against machine use [S:37]. Whether to quote him at all
is Julie's call, not the drafter's. [S:28] and [S:37] are therefore uncited by the page and will
show as `warn unused` in the fact ledger. That is the intended state, not a dropped claim.
