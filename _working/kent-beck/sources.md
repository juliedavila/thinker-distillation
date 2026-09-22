# Kent Beck: verified sources

Research pass 2026-09-20 for candidate issue #20 (filed by Julie 2026-09-16). The candidate case was
treated as unverified throughout. `facts.md` is the ledger; this file is the prose record.

**Audit note, 2026-09-20.** An adversarial pass re-opened every [S:n] line against its own URL and
edited both this file and `facts.md`. Repairs are marked inline in the ledger. Three claims would
have reached the page false: "fourteen principles" for XP 2nd ed, a 2016-07-19 first date for 3X,
and the Confluent podcast cited as 3X travelling without Beck when Beck is the guest. Two dead
sources were replaced and two unreadable x.com citations were corroborated or re-sourced to Beck's
own newsletter.

**Second audit note, 2026-09-20.** A second, independent adversarial pass re-checked all 50 ledger
lines and found that this prose file had not been brought into line with the first audit's repairs.
Four passages below contradicted the ledger they cite and have been corrected: the Chrysler
paragraph, the JUnit correction, the Facebook measurement chain, and the Facebook unit-testing
claim. Two more are now better sourced than "not verified": the *Test-Driven Development: By
Example* date, and the *Tidy First?* publication date. The Forsgren finding survives both audits and
is confirmed, with one narrowing noted in its own section. Full second-pass log at the top of
`facts.md`.

Two gotchas hit during the pass, both already in the skill: O'Reilly returns 403 to direct fetches, so
the *Tidy First?* catalogue facts come from the Open Library edition record for the ISBN rather than
the publisher page [S:15]; `rbcs-us.com`, which hosts Coplien's unit-testing essay, does not resolve
at all, so that essay could not be read and is not used. Both re-confirmed 2026-09-20 (second
audit): `rbcs-us.com` still returns SERVFAIL. A third gotcha to add for whoever works this slug
next: medium.com, amazon.com and techrepublic.com all refuse ordinary fetches, so [S:23b], [S:29]
and [S:40] are readable only through a text-extraction proxy, [S:15]'s Amazon citation was replaced
outright, and the Internet Archive went offline partway through the second pass. A URL that cannot
be opened is not a source, whatever it says in the ledger.

## Uptake check — run first, and it passes clearly

The skill says to run this before anything else, because it decides whether a Council is worth
convening. Beck is the opposite of the Saxe case. His vocabulary is decades old and travels without
him attached.

- **TDD and red/green/refactor.** First date 1999 via *Extreme Programming Explained* [S:9], with
  the dedicated book in 2002 [S:11]. Third-party teaching material states the
  cycle without naming Beck [S:32], which is the strongest form of uptake: the vocabulary has
  outlived its attribution.
- **Code smell.** 1999, via *Refactoring*; Fowler credits Beck for the term in 2006 [S:20], and the
  Fowler page on this site already carries it as a co-authored frame [S:47].
- **CRC cards.** 1989, Beck and Cunningham, OOPSLA [S:16].
- **"Make the change easy, then make the easy change."** 2012 [S:21], quoted under Beck's name in
  durable third-party text three years later [S:22].
- **3X.** Public and circulating under Beck's name by 2017-03-27 at the latest [S:23b], with a
  second, directly readable third-party write-up by 2017-06-15 [S:23c]. The
  2016-07-19 first date this file previously asserted does not survive the audit: the Medium post's
  own metadata says 2018-11-20 [S:23]. Jason Yip extends it into 4X [S:29]; it circulates through
  practitioner essays with Beck absent as author [S:30b]. The Confluent podcast is NOT such an
  example — Beck is the guest on it [S:30].
- **Augmented coding.** 2025 [S:28], so about fifteen months old. On its own it would fail the
  two-year test, but it already has outside use, including Simon Willison, who has a page here [S:31].
  Flag for the Council: if the page wants this in the foreground, it needs its own uptake argument
  rather than riding on the older frames.

One narrowing from the second audit that the drafter needs before touching the measurement section:
Beck and Orosz do not endorse DORA and SPACE evenly. They write that "All DORA metrics measure
outcomes or impact," but of SPACE that it is "not only outcomes and impact, as with DORA" and that
several SPACE metrics carry warnings from SPACE's own authors [S:45]. The page must not write that
Beck endorses SPACE wholesale.

**Verdict: `uptake_passes` true.** Every frame but one predates 2020 and all of them are used by
people other than Beck.

## Corrections to the candidate issue

The issue was largely accurate, which is a change from Fournier and Saxe. Five things need fixing or
softening.

1. **"*Test-Driven Development: By Example*, 2002" is correct, and the apparent dispute is
   resolved.** Corrected 2026-09-20 (second audit): the earlier text here called the date "contested,
   not settled" and told the drafter to keep the page vague. InformIT, Pearson's own storefront for
   Addison-Wesley, lists publication date 8 November 2002 with copyright 2003 [S:11]. A 2002 print
   carrying a 2003 copyright is the whole of the disagreement; Wikipedia's 2002 and the secondary
   summaries' 2003 describe the same book. The page writes 2002 and must not write "2002/2003."
2. **The issue's employment picture stops too early.** It does not mention that Beck was Chief
   Scientist at Mechanical Orchard and stepped down in November 2024 [S:6], nor Tektronix and Apple in
   the late 1980s [S:2], nor Chrysler C3 [S:3], which is where XP actually came from. `active_years`
   and any `background` field depend on these.
3. **"Signed the Agile Manifesto" understates it slightly and needs its date.** February 2001,
   Snowbird, one of seventeen [S:18].
4. **"Co-created JUnit with Erich Gamma" is right but incomplete, and carries no release year.**
   Corrected 2026-09-20 (second audit): this line previously read "JUnit, released in 2000," which is
   exactly what [S:17] rules out. Beck wrote SUnit for Smalltalk first and JUnit is the Java
   descendant, written with Erich Gamma; the year is contested between two Wikipedia articles, 1997
   and 2000, and the page asserts neither [S:17]. The rediscovery story runs through SUnit, not
   JUnit [S:19].
5. **The biggest one: the Forsgren `critiques` edge does not survive its own source.** See below.

## The Forsgren edge is the load-bearing correction

The issue asks: "Check the Forsgren page's `critiques` edge against his actual writing on metrics,
including the 2023 response to McKinsey with Gergely Orosz." Checked. It does not hold as written.

The Forsgren page currently carries Beck as `edge_type: critiques`, labelled "The
metrics-as-management-distance position … Adjacent to DHH's critique but more careful about which
measurement uses are legitimate" [S:46]. The artifact behind that claim is the Beck and Orosz response
to McKinsey [S:42]. In that response, DORA and SPACE are both named as the reference frameworks
McKinsey's additions are measured against, and Forsgren is not named anywhere, in Part 1 or Part 2
[S:45]. Part 2 mentions DORA and SPACE only in a related-articles citation [S:45]. Narrowed
2026-09-20 (second audit): the earlier wording here, "treated as legitimate, outcome-focused
measurement," is true of DORA and not of SPACE. Beck and Orosz write that "All DORA metrics measure
outcomes or impact," but of SPACE that it is "not only outcomes and impact, as with DORA" and that
several of its example metrics carry warnings from SPACE's own authors. The critique of McKinsey is
correspondingly narrow: "nearly every single one of its custom metrics which differ from DORA and
SPACE metrics, measure effort" [S:45]. The conclusion below is unaffected, and the edge still does
not hold as written, but a drafter working from the old sentence would have overstated Beck's
endorsement.

So Beck's target is McKinsey's framework and effort-or-output measurement generally [S:43], not
Forsgren's research. What Beck does hold, in his own voice and from his own experience, is the
displacement argument: at Facebook, survey scores started cropping up in performance reviews, then
became goals, then rolled up the management chain so that a manager's score was the average of their
reports' scores, after which directors pressured managers and managers negotiated with individual
contributors for better scores [S:44]. Corrected 2026-09-20 (second audit): this paragraph carried
"then manager compensation," a step the post does not contain. The word "compensation" appears
nowhere in it; what Beck writes is that the company "started to measure & incentivize (with money &
status)" changes in the measures [S:44]. That is a Goodhart argument about what happens downstream of a metric, which is close to the
spirit of the existing edge label but is not a critique of Forsgren.

This is the Larson pattern from `calibration.md`: a shipped `critiques` edge on Forsgren asserting
something the primary sources do not support. Three options for the Council, and I have no standing
to pick one alone:

- Retype the Forsgren edge to `parallel` and rewrite the label around measurement displacement, which
  is what the sources carry.
- Keep `critiques` but re-source it to something where Beck engages DORA or Forsgren by name. I did
  not find such a source, and I looked specifically for one.
- Drop the edge. It is already `render_tier: deep` and `secondary`, so the page loses little.

Note for stage 4: Forsgren's ledger needs a line for whichever option wins, because `critiques` and
`antecedent` edges are the ones the fact ledger requires evidence for.

## Career, verified

Beck read computer and information science at the University of Oregon between 1979 and 1987, taking
both a B.S. and an M.S. [S:1]. He was at Tektronix in the late 1980s working alongside Ward Cunningham
on HotDraw, where the two kept a well-thumbed physical thesaurus for arguing about names [S:2] — a
small detail that turns out to matter, since naming is most of what Beck's corpus does. He joined
Apple in 1987 on Smalltalk work and was eventually let go, by his own account for being unwilling to
be a team player [S:2].

The Chrysler Comprehensive Compensation System is where XP was born. Beck was hired in 1996 and became
project leader in March of that year; the system shipped in 1997, paying about ten thousand people,
and Chrysler cancelled the project in February 2000 [S:3]. *Extreme Programming Explained* came out of
that work in 1999 [S:9].

He was at Facebook from 2011 to 2018 [S:4], joined Gusto as a software fellow and coach in 2019 [S:5],
and served as Chief Scientist at Mechanical Orchard until stepping down in a post dated 2024-11-15
[S:6]. He now works for himself: the third book in the Empirical Software Design series, augmented
coding research, a conference built on what he calls Thinkies, and the newsletter [S:7], which has
moved from `tidyfirst.substack.com` to `newsletter.kentbeck.com` and reports over 126,000
subscribers [S:8]. The 123K figure is the one on kentbeck.com [S:7]; the two pages disagree and the
page should not blend them.
The old Substack domain still 301-redirects, which matters for any link the page carries.

`canonical_url` should be `https://kentbeck.com/`; `status` is `alive-active` on this evidence.

## Books, verified

*Extreme Programming Explained: Embrace Change*, Addison-Wesley 1999, sole author [S:9]. The second
edition, Addison-Wesley 2004, is co-authored with Cynthia Andres and was rewritten rather than
revised, widening XP from small teams to teams of any size around five values, eleven principles,
and thirteen primary plus eleven corollary practices [S:10]. *Test-Driven Development: By
Example*, Addison-Wesley, 2002 or 2003 [S:11]. *Refactoring*, Addison-Wesley 1999, is Fowler's book
with Beck, Brant, Opdyke and Roberts as co-authors [S:12]. *Planning Extreme Programming*,
Addison-Wesley 2000, with Fowler [S:13]. *Contributing to Eclipse*, 2003, with Erich Gamma;
*Implementation Patterns*, 2007; *Smalltalk Best Practice Patterns*, 1997 [S:14]. *Tidy First?*,
O'Reilly Media, 2023, first of the series [S:15]. Corrected 2026-09-20 (second audit): the day-level
date "3 November 2023" is dropped. Retailer listings disagree with each other, Dubray giving 3
November and Harvard Book Store giving 28 November, and the Open Library edition record gives the
year alone [S:15]. The page writes 2023 and no day. The "about 100 pages" this file previously
carried is unsourced and has been dropped.

One data-quality warning for whoever drafts: at least one Google Books record lists *Tidy First?* with
"Kent Beck, Larry L. Constantine" as authors. That is metadata contamination from chapter 30,
"Constantine's Equivalence." Beck is the sole author.

## Frames, with antecedents checked

The skill says to check the opening of every talk or essay for a credited premise before calling
anything original. Three of Beck's frames turn on this, and they land differently.

**TDD is `extended`, or at least not `original`, by Beck's own insistence.** He calls it a
rediscovery: an old programming book described typing the expected output tape first and programming
until the actual matched, he remembered it after building SUnit, and tried it. He reports that older
programmers answer with "Of course. How else could you program?" [S:19]. The candidate issue's word
"rediscovered" is Beck's own and should survive onto the page. The source he rediscovered is not
named in anything I found, so `co_originators` cannot carry a slug here; the gloss has to do the work.

**Code smell is `co-authored`, with Beck as originator of the term.** Fowler is unambiguous: "The term
was first coined by Kent Beck while helping me with my Refactoring book" [S:20]. The Fowler page
already models it this way [S:47], so the new page should match rather than re-litigate.

**Constantine's Equivalence is `extended`, and Beck names the antecedent himself.** He coined the name
as a tribute; the result restates Yourdon and Constantine's structured-design work on coupling and
cohesion, and Beck cites them repeatedly through *Tidy First?* [S:26]. Larry Constantine belongs in
`co_originators`. The economic argument around it — time value, optionality, reversible structure
changes, cash flows — is Beck's own assembly [S:27], and that is the part that can carry an `original`
or `extended` claim depending on how the Council reads it.

**3X has no credited premise, and one third-party antecedent claim that Beck does not make.** The
Canon post restates the three phases and credits nobody, in a series whose stated aim is "no
analogies, no persuasion, just the facts" [S:24]. Jason Yip reads 3X as a restatement of Theodore
Levitt's 1965 product life cycle [S:29], but that is Yip's claim about Beck, not a credit Beck gives,
and it must not be written as though Beck acknowledged it. Beck separately posted that he can derive
3X from the Kelly Criterion [S:25], which is a post-hoc derivation rather than a premise, and whose
date I could not verify. If the page uses the Levitt line at all it belongs in prose attributed to
Yip, never in `co_originators`.

**"Make the change easy, then make the easy change"** dates to a 2012 tweet [S:21]. A tweet is not a
durable artifact by the site's own standard for critics, but it is fine as a frame `source_link`, and
the durable version is Fowler's 2015 article, which quotes it under Beck's name twice [S:22].

**CRC cards** are co-authored with Ward Cunningham outright, one paper, 1989 [S:16]. Cunningham is
already a neighbour on the Fowler page, so this is a `co-authored` frame with Cunningham in
`co_originators`.

**Continuous integration** needs care. The Fowler page names Beck a co-originator with the role
"original XP practice" [S:47]. I did not verify CI's own antecedents in this pass, and the term
predates XP. Flag it: if the new page foregrounds CI at all, that antecedent search has to happen
first, and until it does, `original` is not available to either page.

**Augmented coding** is the live frame. Beck's distinction is sharp and quotable: in vibe coding "you
don't care about the code, just the behavior of the system," while "in augmented coding you care about
the code, its complexity, the tests, & their coverage. The value system in augmented coding is similar
to hand coding" [S:28]. First articulated at length in June 2025 after April 2025 posts that still
said "vibe coding." This is Live Edge material more than `named_frames` material, and SCHEMA 4.14 is
explicit that live-edge entries may mention emerging frames in prose but never link to frame entries.

## Critics

Ten minutes spent, per SCHEMA 4.11, and the result is thinner than Beck's stature suggests.

- **Jimmy Koppel, "Book Review: Tidy First?", Path-Sensitive, 2024-04-01.** A durable artifact by a
  named researcher that engages Beck directly and argues the repertoire is thin and the book
  mis-assembled: an "impoverished repertoire" whose tidyings "can't solve any of the refactoring
  challenges I've been running lately," and a structure that reads as if two books got their chapters
  mixed up [S:34]. This is the strongest `critiques` candidate. No page here, so `secondary`.
- **David Heinemeier Hansson.** The famous essay, "TDD is dead. Long live testing." (2014-04-23), makes
  the counterposition in the sharpest available terms — "Test-first fundamentalism is like
  abstinence-only sex ed" — but **it does not name Kent Beck** [S:35]. By the calibration rule, the
  essay alone makes DHH a `parallel`, not a critic. The complicating fact is the "Is TDD Dead?" series
  that followed: five episodes on martinfowler.com, 9 May to 4 June 2014, with Beck, Hansson and
  Fowler [S:36]. That is durable and it names Beck. But Fowler's own account is that Beck asked for
  the conversation — "Kent suggested that we continue the discussion with all three of us, and make
  the conversation public" — and Beck participates as a discussant, not a defendant [S:36]. Writing
  DHH as a critic of Beck on the strength of a dialogue Beck convened would overstate it. My
  recommendation is `parallel` with a label that names the disagreement honestly, and the Council can
  overrule me.
- **James Coplien, "Why Most Unit Testing is Waste" (2014).** Widely cited as the other pole of the
  2014 argument. I could not read it: `rbcs-us.com` does not resolve. Whether it names Beck is
  therefore unverified, and per the rule it cannot be used as a `critiques` edge until someone reads
  the actual text. Left out deliberately.
- **Omitted:** the other *Tidy First?* reviews (Vocke and Dargo verified; the other names this pass listed could not be confirmed and were dropped from the ledger [S:33]). They are real
  practitioner reactions and useful as uptake [S:33], but "I found it obvious" is not a durable
  critique by this site's standard.

## Limits material

The page needs at least two limits and the evidence here is unusually good, because much of it is
Beck's own.

1. **The practice does not travel as well as the word.** A 2020 survey found 41% of respondents saying
   their organization had fully adopted TDD while only 8% wrote tests first at least 80% of the time
   [S:40]. The vocabulary is universal; the discipline is a minority practice.
2. **The empirical case is unsettled, and has been for a decade.** Rafique and Mišić's 2013
   meta-analysis of 27 experiments found quality gains and productivity losses that are both larger in
   industry than in academia [S:38]. Ghafari, Gross, Fucci and Felderer went further in 2020 and asked
   why the literature is contradictory at all, finding five categories of study-design factors that
   change the outcome [S:39]. This is a `structural` limit: the method's strongest claims rest on
   evidence that does not converge.
3. **Beck says it himself, which is the version to lead with.** "TDD loses value as tests take longer
   to run, as the number of possible faults per test failure increases, as tests become coupled to the
   implementation, and as tests lose fidelity with the production environment" [S:37]. Calibration is
   explicit that a limit must stay a limit and not be recast as evidence the method works.
4. **Facebook is the counterexample inside his own career.** Seven years at a company that, as
   Orosz reports it, "barely did any form of unit testing, while running a massive, stable, and
   fast-growing site," and a TDD hackathon class that drew zero signups [S:41]. Corrected 2026-09-20
   (second audit): the earlier wording, "operating at scale without unit testing," is stronger than
   the source, and the clause about relearning software engineering is Orosz's framing of an
   interview, not Beck's sentence. Both are secondhand and neither may be quoted as Beck's own. The
   first-person material on measurement at [S:44] is the stronger thing to lead with.

## Open questions for the inclusion Council

1. **What does the page foreground, and how does it stay distinct from Fowler's?** The two pages share
   `code-smell`, `refactoring` and `continuous-integration` outright [S:47]. My reading is that the
   distinct Beck is the economics one — coupling as the cost of change [S:26], tidying as buying
   options [S:27] — and that the catalogue frames belong in the `deep` tier where Fowler already
   carries them. The Council should settle it.
2. **`doctrine_mode`.** Beck names his own ideas relentlessly and names them well, which argues
   `mode-a`: the page should not coin. That also means three review rounds, per
   `scripts/review-policy.ts`.
3. **The Forsgren edge**, per the section above. This needs a decision, not a note.
4. **Is DHH a critic or a parallel?** I argue parallel [S:35] [S:36].
5. **Does augmented coding go in `named_frames` or stay in Live Edge?** It is fifteen months old with
   real outside use [S:28] [S:31]. Live Edge is the conservative call.
6. **Continuous integration's antecedents** were not searched this pass and block any `original`
   claim on either page.

## Security-leader angle, for the reading

The issue proposes coupling and cohesion as the economics of change, and small safe steps as risk
reduction. The material supports it: Constantine's Equivalence makes cost of change the cost of
coupling [S:26], and *Tidy First?* frames structural work as buying reversibility [S:27]. Julie's own
positions run on adjacent ground. Note the trap for the drafter, which calibration names twice: Beck
has not written about security, so anything the site does with this has to sit in `extension` as the
site's argument, in its own sentence, and never in a relative clause that puts a security claim in
Beck's mouth.

## Not verified, deliberately left open

- ~~The exact publication date of *Test-Driven Development: By Example* [S:11].~~ Resolved
  2026-09-20 at InformIT, Pearson's own store: published 8 November 2002, copyright 2003 [S:11].
- The original first-publication date of "The Product Development Triathlon." The Medium URL says
  2018-11-20 and the earliest Wayback capture is 2019-02-14; the widely-repeated 2016 date has no
  first-party support I could find [S:23]. The frame is firmly public by March 2017 [S:23b].
- The release year of JUnit. Wikipedia's Kent Beck page says 2000; its JUnit page says the first
  version was written in 1997 on a flight to OOPSLA [S:17]. Do not assert either.
- ~~The date of Beck's Kelly Criterion post [S:25].~~ Recovered 2026-09-20 from the tweet's
  snowflake id: 2021-04-06, five years after 3X was published, which confirms post-hoc derivation.
- Whether Coplien's essay names Beck; host unreachable.
- ~~The author line on martinfowler.com's preparatory-refactoring article.~~ Confirmed 2026-09-20:
  bylined Martin Fowler, dated 05 January 2015 [S:22].
- CI's antecedents before XP.
