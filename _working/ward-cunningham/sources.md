# Ward Cunningham: verified sources

Research pass run 2026-09-22 for candidate issue #32. The candidate case was treated as unverified
throughout, per the Fournier and Saxe precedents. Every claim below that will reach a page has a
matching `[S:n]` line in `facts.md`.

Canonical homes: <https://c2.com/~ward/> (personal pages, copyright notice stops at 2005) and
<http://ward.dojo.fed.wiki/> (his live federated wiki site, "Site Owned by: Ward Cunningham").
Status: **alive-active** — he keynoted the MediaWiki Users and Developers Conference in Portland on
17–19 April 2024 `[S:23]`.

**A note on the session's search budget.** The 200-call WebSearch allowance for this session was
already exhausted when this pass began, so every source below was reached by fetching a known URL
directly (c2.com, martinfowler.com, artima.com, agilemanifesto.org, api.github.com, openlibrary.org,
en.wikipedia.org raw wikitext, YouTube oEmbed). That is a constraint on *discovery*, not on
verification: everything recorded here was read at its source. Where it bites is the critic search
in section 6, which could not be run as a broad sweep. Read that section as "two strongest
candidates tested and both failed," not as "no critic exists."

---

## 0. Inbound claims, carried from `scripts/inbound-claims.ts`

Five lines. Reconciled one at a time. **Nothing here contradicts the research; two lines are
incomplete and one word choice needs narrowing.**

| # | Live page | The claim it publishes | Verdict |
|---|-----------|------------------------|---------|
| 1 | `martin-fowler` | `antecedent` edge, primary: "Coined 'technical debt' in 1992 and built the wiki, the form Fowler extended into the bliki. The genre of public-revision design writing starts with Cunningham; Fowler made a career of it." | **Holds, with one narrowing and one addition.** |
| 2 | `kent-beck` | `parallel` edge, secondary, deep tier: "Co-author of the one CRC cards paper, presented at OOPSLA in 1989 when Beck was at Apple and Cunningham at Wyatt Software." | **Holds exactly.** |
| 3 | `kent-beck` | Frame `crc-cards`, `co-authored`, credits Cunningham as co-author of "A Laboratory For Teaching Object-Oriented Thinking," OOPSLA 1989. | **Holds exactly.** |
| 4 | `will-larson` | Frame `exception-debt` prose: "The name borrows the debt metaphor Ward Cunningham introduced for technical debt in 1992." | **Holds, same narrowing as #1.** |
| 5 | `kent-beck` | Prose mention of "Cunningham" inside the `crc-cards` gloss. | **Holds** — same paper, same credit. |

### 1 and 4: the word "coined … in 1992"

The 1992 date is right for the **printed** record and slightly wrong for the **coinage**. The
experience report is dated 26 March 1992 and carries the metaphor in full: "Shipping first time code
is like going into debt. A little debt speeds development so long as it is paid back promptly with a
rewrite … Every minute spent on not-quite-right code counts as interest on that debt" `[S:2]`.
Fowler's own bliki hedges the same way — "As far as I can tell, Ward first introduced this concept in
an experience report for OOPSLA 1992" `[S:3]`.

But Cunningham's own account puts the coining in conversation, undated: "I coined the debt metaphor
to explain the refactoring that we were doing on the WyCash product … The explanation I gave to my
boss, and this was financial software, was a financial analogy I called 'the debt metaphor'" `[S:4]`.
That is a spoken explanation to a named audience of one, which the 1992 report then wrote down.

**Neither live page is wrong enough to need editing** — 1992 is the date every secondary source uses
and the date of the only citable artifact. The new page should say *first set down in print* in the
1992 report rather than *coined in 1992*, and should not create a fourth phrasing of the same claim
that makes the roster look inconsistent. Flag for the drafter, not a correction to file.

### 1: the Fowler edge is incomplete in Cunningham's favour

The edge says Cunningham "built the wiki, the form Fowler extended into the bliki." True as far as it
goes. What it leaves out is that **Cunningham named the bliki.** Fowler's own 2003 post defining the
term reads: "something that was a cross between a wiki and a blog — which Ward Cunningham immediately
dubbed a bliki" `[S:18]`.

Fowler's page carries the frame `bliki` as `attribution_kind: original`, `primary_author:
martin-fowler`, with no `co_originators` (`src/content/thinkers/martin-fowler.md`, lines 146–155).
**Corrected in the 2026-09-22 adversarial pass:** an earlier draft of this section said that 2003
post *was* the frame's `source_link`. It is not — line 154 reads
`source_link: https://martinfowler.com/bliki/`, the bliki index. The correction still stands, but it
rests on the post itself rather than on the frame pointing at it, and the mis-pointed `source_link`
is a second, smaller defect on the same frame.
The form and the fifteen-year practice are Fowler's and that is not in question. The *word* is
Cunningham's, sourced on the very page Fowler's frame links to.

**This is a correction to file in the merge request**: `bliki` needs a `co_originators` entry naming
`ward-cunningham` for the coinage. It is the same defect class the Beck/Forsgren critic edge was —
a live page and its own cited source disagreeing, sitting in the open because nobody looked. It is
smaller than that one and it runs in the generous direction, which is probably why it survived.

---

## 1. Uptake check, run first

This is the check that decides whether a Council is worth five seats. Cunningham is the widest-uptake
candidate researched so far, and the evidence is not close.

**Technical debt (in print 1992-03-26).** Thirty-four years old. It is the phrase the industry uses
for the thing, and the uptake is visible in four independent registers:

- **A named critic-adjacent taxonomy built on it.** Fowler's *Technical Debt Quadrant*
  (2009-10-14) partitions the metaphor into deliberate/inadvertent × prudent/reckless and locates
  Cunningham's own meaning inside it as "the kind of debt that Ward talked about" `[S:17]`.
- **A defence written by a third party.** Robert C. Martin's "A Mess is not a Technical Debt"
  (2009-09-22) opens by attributing the term to Cunningham and then polices its use `[S:16]`.
- **Tooling.** The c2 page itself records a Sonar "Technical Debt Plugin" that computes a dollar
  figure from six metrics `[S:15]` — the metaphor turned into a vendor feature.
- **On this site.** Will Larson's `exception-debt` frame borrows the metaphor by name to coin a
  second debt `[inbound 4]`. That is the purest form of travel this filter looks for: a working
  practitioner reaching for the shape of someone else's word.

**The wiki (live 1995-03-25).** Thirty-one years old. Cunningham's own history page states it plainly
— "This began on March 25, 1995 … This is the first ever wiki site" `[S:6]` — and the etymology
correspondence records the American Heritage Dictionary's etymologist writing to him in November 2003
as "the coiner of a successful new word in the English language," proposing the dictionary entry
"[Hawaiian wiki-wiki 'quick' (first applied to web software by American programmer Ward Cunningham in
1995 …)]" `[S:7]`. **A dictionary's own etymologist writing to you unprompted, to build an entry
around your name, is the outer limit of uptake**, and no other candidate researched for this site has
it. Note the limit, tightened in the 2026-09-22 adversarial pass: Taylor calls his draft "just an
example" and asks Cunningham to confirm the 1995 date. No published AHD entry was checked, so the
page may not say "wiki" entered the dictionary with this etymology.

**CRC cards (1989-10).** Thirty-seven years old, and in the standard curriculum: Wikipedia's article
on CRC cards traces them to the Beck and Cunningham paper and records that they are "popular among
expert designers" and "recommended by extreme programming practitioners," citing Fowler's *UML
Distilled* chapter 4 `[S:24]`.

**"The simplest thing that could possibly work" (in print by 2004-01-19).** Uptake so complete that
the community had to post a warning about it: the c2 page opens "Beware: The history and therefore
meaning of this phrase is lost on many people who wield it" `[S:14]`.

**Verdict: uptake passes, decisively.** Four frames, the youngest twenty-two years old, every one of
them used by practitioners who are not Cunningham, two of them still generating third-party
corrective literature. There is no version of this candidate where a Council is wasted.

---

## 2. Career, verified

The primary record is thin on dates and thick on artifacts, which is the opposite of most candidates
here. Affiliations can be read straight off the papers; the employment chronology after 2003 rests on
Wikipedia and the press it cites.

- **Education.** Purdue University, bachelor's in interdisciplinary engineering (electrical
  engineering and computer science) and a master's in computer science, graduating 1978 `[S:19]`.
  Wikipedia sources this to Andrew Lih's *The Wikipedia Revolution* p. 46, a book, not a link. **No
  primary confirmation was reached.** A page may state Purdue; it should not state 1978 as though it
  were verified from a registrar.
- **Tektronix.** Principal Engineer, Computer Research Laboratory `[S:19]`. Corroborated by paper
  byline: the 1987 OOPSLA workshop paper lists him at Tektronix, Inc. `[S:8]`.
- **Wyatt Software.** Director of R&D `[S:19]`. Corroborated twice by byline: "Wyatt Software
  Services, Inc." on the 1989 CRC paper `[S:1]`, "Wyatt Software" on the 1992 experience report
  `[S:2]`. **The Beck page's phrasing "Cunningham at Wyatt Software" in 1989 is exactly right.**
- **Cunningham & Cunningham, Inc.** Co-founded with his wife `[S:19]`. The firm's own site describes
  it as "a small consultancy that has specialized in object-oriented programming," not taking new
  clients, office closed, still hosting the Portland Pattern Repository `[S:21]`.
- **The Hillside Group / PLoP.** Founder of Hillside; program chair of the Pattern Languages of
  Programming conference `[S:19]`. **Uncited on Wikipedia itself** — the sentence carries no
  reference at all in the wikitext, so this rests on an unsourced secondary claim and may not be
  printed as verified. (Corrected 2026-09-22: an earlier draft said Wikipedia cited a hillside.net
  history page that 404s. It cites nothing.) Corroborating detail, first-person: "When we started the PLoP series of
  conferences, and realized that what we really wanted to do was start a new literature …" `[S:11]`.
- **Microsoft**, "Patterns & Practices" group, December 2003 – October 2005 `[S:19]`.
- **Eclipse Foundation**, Director of Committer Community Development, October 2005 – May 2007
  `[S:19]`.
- **AboutUs**, chief technology officer. ⚠ **The source contradicts itself.** Wikipedia's sentence
  reads "In May 2009, he joined AboutUs as its chief technology officer" and cites an *Oregonian*
  business-blog post dated **18 May 2007** titled "Inventor of the wiki has a new job in Portland"
  `[S:19]`. One of the two is wrong and the article is dead behind a blog platform that no longer
  serves it. **A page must not state a start year for AboutUs.** "Chief technology officer at
  AboutUs in Portland until 2011" is what the record supports.
- **CitizenGlobal**, chief technology officer and "Co-Creation Czar," from March 2011 `[S:19]`.
- **New Relic**, from April 2013, as a programmer `[S:19]`. **No end date was found.** Do not write
  "at New Relic" in the present tense.
- **Nike.** "Nike's first 'Code for a Better World' Fellow" `[S:19]`, sourced to a dead 2009 events
  listing. Treat as unverified colour; keep it off the page.
- **Active years.** Wikipedia's infobox says "1984–present" with no citation `[S:19]`. The first
  artifact anyone can read is September 1987 `[S:8]` and the most recent is April 2024 `[S:23]`.
  **Recommend `active_years: 1987–present`**, anchored on the first primary artifact, and say so.

---

## 3. The frames, and what is actually original

This is the section the drafter should read twice. Cunningham credits antecedents openly and often,
and three of the five candidate frames have one.

### 3.1 Technical debt — `original`, but with a credited premise

The calibration entry says: *check the opening of every talk or essay the page cites for a credited
premise.* "Simple Made Easy" opened with Dijkstra; this one opens with Lakoff.

The Debt Metaphor video's transcript begins, under the heading **Metaphor**, before the word debt
appears: "I became interested in the way metaphors influence how we think after reading George Lakoff
and Mark Johnson's *Metaphors We Live By*. An important idea is that we reason by analogy with the
metaphors that have entered our language" `[S:4]`.

So: the debt metaphor itself is Cunningham's, and he says so in the next paragraph ("I coined the
debt metaphor"). What is borrowed is the *method* — the belief that choosing the metaphor changes how
a team reasons, which is Lakoff and Johnson's thesis. **`attribution_kind: original` is correct. A
page that cites the video and does not carry the Lakoff credit is reproducing the exact failure the
Hickey run caught.**

### 3.2 The wiki — `original`, with his own HyperCard stack as the antecedent, and one contested claim

Cunningham's own history page: "An early page, WikiWikiHyperCard, traces wiki ideas back to a
HyperCard stack I wrote in the late 80's. **This same stack, by the way, spawned CrcCards**" `[S:6]`.
First-person again in 2003: "I had previously worked with a HyperCard stack that was set up to
achieve the same kind of goal. I knew people liked to read and author in that HyperCard stack, but it
was single user" `[S:11]`.

**One 1980s HyperCard stack is the common ancestor of both CRC cards and the wiki.** That is the
strongest structural fact this research turned up and it comes from Cunningham's own hand. It is also
a self-antecedent, so it does not change `attribution_kind`.

The same page carries a claim that is **not** Cunningham's: "It has been claimed by some that the
ideas that led to the Wiki concept have their origins … in the ZOG database system effort, first
materialized at Carnegie-Mellon University in 1972" `[S:6]`. Attributed to "some," on a page anyone
could edit, with no named claimant. **Contested. If the page mentions ZOG at all it must stay
contested** — calibration: *contested claims stay contested.*

The purpose, first-person: "My specific purpose for the first wiki was to create an environment where
we might link together each other's experience to discover the pattern language of programming …
I wanted people who wouldn't normally author to find it comfortable authoring" `[S:11]`. And the
precondition, which is a limit as much as a design note: "Wikis work best in environments where
you're comfortable delegating control to the users of the system … That works well if you have a
trusting community" `[S:11]`.

### 3.3 CRC cards — `co-authored` with Kent Beck

Verified from the paper itself. Title "A Laboratory For Teaching Object-Oriented Thinking"; byline
**Kent Beck, Apple Computer, Inc.** then **Ward Cunningham, Wyatt Software Services, Inc.**; OOPSLA'89
Conference Proceedings, 1–6 October 1989, New Orleans; published in SIGPLAN Notices 24(10), October
1989 `[S:1]`. DOI 10.1145/74878.74879 `[S:24]`.

**Two small traps.** Wikipedia's citation for this paper gives the year as **1986** while giving
volume 24, issue 10 — which is October 1989 `[S:24]`. Wikipedia also reverses the byline order
("originally proposed by Ward Cunningham and Kent Beck"). The paper is primary and the Beck page
already matches it. **Do not let a draft pick up 1986 or the reversed order from a search snippet.**

Reciprocity: the Beck page holds `concept_slug: crc-cards`, `attribution_kind: co-authored`,
`primary_author: kent-beck`, `co_originators: [ward-cunningham]`, `render_tier: deep`. The new page
should hold the same `concept_slug` and the same `primary_author: kent-beck` — byline order is the
only evidence either way and it favours Beck — with Beck in `co_originators`. That keeps the build's
computed "also held by" line honest in both directions. **Drafting decision, flagged, not settled
here.**

### 3.4 Pattern languages for programs — `extended` from Christopher Alexander

The 1987 OOPSLA-17-September workshop paper, Beck (Apple) and Cunningham (Tektronix), "Using Pattern
Languages for Object-Oriented Programs," states the debt in its own proposal sentence: "We propose a
radical shift in the burden of design and implementation, **using concepts adapted from the work of
Christopher Alexander**, an architect and founder of the Center for Environmental Structures," and
cites [Alex77] Christopher Alexander et al., *A Pattern Language*, Oxford University Press, 1977
`[S:8]`.

**This frame cannot be `original`.** If a draft marks it so, the antecedent search failed.

### 3.5 "The simplest thing that could possibly work" — the question is his, put to Beck

**Rewritten 2026-09-22 in the adversarial pass. The previous version of this section had the source
backwards** and is the reason the section title used to read "attribution is genuinely open." It
claimed Cunningham described the question as a shared working habit with Beck rather than his own
coinage, and told the drafter not to settle it without a second source. Read at the URL, `[S:12]`
says the opposite: Cunningham asks, Beck is asked. "When Kent Beck and I were playing with
Smalltalk … if we were stuck more than a minute, I'd stop and say, '**Kent**, what's the simplest
thing that could possibly work?'" And again: "So when **I** asked, 'What's the simplest thing that
could possibly work,' I wasn't even sure."

So the lore and the first-person source agree. The honest shape is `original`, with the Smalltalk
pairing with Beck as its setting rather than its co-authorship. Two limits still bind. Beck has a
live page and may carry his own later version of the phrase, which is a separate question this source
does not reach. And Cunningham's own qualifier — the c2 page preserves "(if you're not sure what to
do yet)" `[S:14]` — travels with the frame or the frame misstates him.

What *is* unambiguous is Cunningham's limit on it, and it is the best single quote in the research:

> "I think the advice got turned into a command: 'Do the simplest thing that could possibly work.'
> That's a little more confusing, because there isn't this notion that as soon as you've done it,
> we'll evaluate it. People ask, 'Well, how do you know it's the simplest?' In my case, we didn't
> know. We were just going to get it on the screen and look at it. But as soon as it becomes a
> command, then we have to analyze it and ask, 'Is that the simplest?' And all of a sudden it becomes
> complicated." `[S:13]`

### 3.6 Fit (Framework for Integrated Test) — `original`, low current uptake

"It was created by WardCunningham and the project is coordinated by JamesShore," latest release
v1.1, GPL, site copyright 2002 Cunningham & Cunningham `[S:20]`. Site last edited October 2007.
**Deep tier at best.** It matters for the shape of the career, not for the vocabulary.

### 3.7 Federated wiki — `original`, 2011, small uptake

The `Smallest-Federated-Wiki` repository was created 2011-06-25 and is **archived** `[S:22]`. Its
description: "This wiki innovates by: 1. federated sharing, 2. drag refactoring and 3. data
visualization." He is still working the idea — the 2024 keynote was titled "New Discoveries Mining
Federated Wiki's Recent Changes" `[S:23]` — and his own live site runs on it `[S:25]`.

**This is the one frame that would fail the uptake check on its own.** Fifteen years old, archived
flagship repo, no third-party adoption found. It belongs in `deep`, or in the Live Edge, and not in
the foreground beside a word that entered the dictionary.

---

## 4. The limit the candidate issue asked about, sourced

Issue #32 asks for "attribution for the debt metaphor's later distortion." It is on the record twice,
in Cunningham's own voice, about two different coinages. **That is the page, if the Council wants
one: the man whose vocabulary outran his meaning, twice, and who went back on camera to say so.**

**On debt** (2009-02-14, video, under the heading *Agility*):

> "A lot of bloggers at least have explained the debt metaphor and confused it, I think, with the
> idea that you could write code poorly with the intention of doing a good job later and thinking
> that that was the primary source of debt. **I'm never in favor of writing code poorly, but I am in
> favor of writing code to reflect your current understanding of a problem even if that understanding
> is partial.**" `[S:4]`

**On simplicity** (2004-01-19, interview) — the "advice turned into a command" passage at `[S:13]`,
quoted in full in 3.5 above.

**And a third, on a law that carries his name.** "Cunningham's Law" — post the wrong answer to get
the right one — was named by Steven McGeady after advice Cunningham gave him at Tektronix in the
early 1980s, not coined by Cunningham `[S:19]`. He recorded a video titled "NOT CUNNINGHAM'S LAW"
(2015-10-18) disowning it `[S:26]`. ⚠ **The video's content was not verified** — only its title,
uploader and date, via oEmbed. Wikipedia paraphrases him as calling it "a misquote that disproves
itself by propagating through the internet" `[S:19]`; **that paraphrase has not been checked against
the video and must not be quoted on the page as his words.**

There is also a definitional split recorded on the c2 wiki itself, in his own voice, undated.
The TechnicalDebt page was written up by Dave Smith with a broad definition (deferred compiler
upgrades, UI-guideline gaps); an unsigned interjection pushed back that those carry no interest; and
Cunningham closed it: "**Ron and I are most interested in the debt addressed by code refactoring. Dave includes
more than that in his definition.**" `[S:15]` The metaphor was being stretched inside his own wiki,
by name, while he watched.

---

## 5. Body of work, verified

- **The Wiki Way** (2001). Authors **Bo Leuf and Ward Cunningham**, in that order; Addison-Wesley
  Professional; ISBN 020171499X / 9780201714999 `[S:10]`. **Leuf is first author.** A page that
  writes "Cunningham's *The Wiki Way*" misattributes a co-authored book.
- **"A Laboratory For Teaching Object-Oriented Thinking"** (paper, 1989) `[S:1]`.
- **"Using Pattern Languages for Object-Oriented Programs"** (workshop paper, 1987) `[S:8]`.
- **"The WyCash Portfolio Management System"** (experience report, 1992) `[S:2]`.
- **"Debt Metaphor"** (video, 5 min, 2009-02-14) `[S:5]`, transcript on c2 under CC BY 3.0 `[S:4]`.
- **The Bill Venners interview series** (Artima, Oct 2003 – Jan 2004, five parts): "Exploring with
  Wiki" `[S:11]`, "Collective Ownership of Code and Text," "Working the Program," "To Plan or Not to
  Plan," "The Simplest Thing that Could Possibly Work" `[S:12]` `[S:13]`. The best first-person
  source on method that this pass found.
- **WikiWikiWeb / the Portland Pattern Repository** itself `[S:6]` `[S:21]`.

⚠ **Only parts I and V of the Venners series were read.** Parts II, III and IV are listed on the
series page and were not fetched. Do not summarise what they argue.

---

## 6. Critics: none verified. Two candidates tested, both failed.

Per SKILL, a `critiques` edge needs three things, each with its own ledger line: a durable artifact,
which names the thinker, and which argues against him.

**Candidate A — Robert C. Martin, "A Mess is not a Technical Debt" (2009-09-22).** Durable ✅.
Names him ✅ — "The term Technical Debt was created by Ward Cunningham to describe the engineering
trade-off's that software developers and business stakeholders must often make in order to meet
schedules and customer expectations." Argues against him ❌. It argues the opposite way: it defends
Cunningham's meaning against people who use "technical debt" to dignify a mess. "A mess is not a
technical debt. A mess is just a mess … The decision to make a mess is never rational" `[S:16]`.

**This is the Dan North shape exactly.** A well-known name, a real artifact, a critical *tone*, and
the target is somebody else. It is the single most likely wrong edge on this page and it should be
written into the working notes so the Council does not propose it from memory.

**Candidate B — Martin Fowler, "TechnicalDebtQuadrant" (2009-10-14).** Durable ✅. Names him ✅.
Argues against him ❌ — it builds a 2×2 on top of the metaphor and places Cunningham's own usage
approvingly inside it, "the kind of debt that Ward talked about" `[S:17]`. That is extension, and
Fowler's edge to Cunningham is already `antecedent`, which is the right type.

**Finding: no `critiques` edge on this page, pending a search this session could not run.**

Three reasons to expect that finding to survive a proper sweep, and one reason to doubt it:

- The two most-cited critical-sounding artifacts about technical debt both turn out to defend him.
- The recorded disputes about his ideas are disputes about *other people's* use of them, which he
  joined on the side of the narrower reading `[S:4]` `[S:13]` `[S:15]`.
- The wiki's critics argue with Wikipedia, which is a descendant, not with Cunningham.
- **The doubt:** the critique most likely to exist is of the metaphor as such — "stop saying
  technical debt," the argument that a financial analogy mismeasures engineering work. That
  literature is real and was not reachable without search. **Open question for the Council, and a
  research request if a seat names a specific piece.**

Calibration is explicit that a seat's factual assertion is a research request and never a fact, and
that seats have proposed a sympathetic essay as a critic before (Hickey, seat 2, on Kyle Mitchell).
**If a seat names a critic here, it gets verified against the three-part test before it reaches the
page, or it does not reach the page.**

---

## 7. Corrections to the candidate issue

Issue #32 is **unusually accurate** — the best-sourced candidate case researched so far. Every factual
assertion in its "Working case" holds. Three refinements and one warning:

1. **"Originated the technical debt metaphor"** — holds `[S:2]` `[S:4]`, with the printed-versus-
   spoken nuance in section 0.
2. **"Built WikiWikiWeb in 1995, the first wiki"** — holds `[S:6]`. He began coding it in 1994 and
   installed it on 1995-03-25 `[S:19]`; the launch date is the citable one, from his own page.
3. **"Co-author with Kent Beck of the 1989 OOPSLA paper on CRC cards"** — holds exactly `[S:1]`.
4. **"Signed the Agile Manifesto"** — holds `[S:9]`. He is the fifth of the seventeen listed, and
   agilemanifesto.org also credits him with the site's design and artwork. Note for the drafter: the
   Beck page already handles the seventeen-authors framing, so this should not be a frame on either
   page.
5. **"the debt metaphor's interest-and-principal extension"** — ⚠ **partly unsupported as written.**
   The 1992 report and the 2009 video both work the *interest* side hard and neither uses the word
   *principal* `[S:2]` `[S:4]`. The interest/principal pairing is how later writers formalised it.
   **This is the one line in the issue that should not be copied onto the page.**
6. **The issue's three-way framing question** — "Is the page about the metaphor, the wiki, or the
   pattern-language lineage?" — has a fourth answer the research surfaced, in section 4: the
   distortion pattern that runs through all three. Offered to the Council, not decided here.

---

## 8. Open questions for the inclusion Council

1. **What is the page about?** Four candidate spines, one of them new (section 4).
2. **"The simplest thing that could possibly work": whose frame?** **Settled in the 2026-09-22
   adversarial pass, against the earlier research:** the question is Cunningham's own, put to Beck,
   in his first-person account `[S:12]`. `original` is the supported shape. What remains open is
   only whether Beck's live page should carry a parallel edge — not who asked it. See section 3.5.
3. **Is there a critic?** Section 6 says none verified and names the gap honestly.
4. **Does federated wiki go on the page at all?** It is his live work and it is the only frame that
   fails uptake `[S:22]` `[S:23]`.
5. **Seven-neighbour cap.** Fowler and Beck are the only on-site neighbours with real edges. Larson
   is a third through `exception-debt`. The cap is not close to binding; no demotion planning needed.
6. **The `bliki` co-originator correction on Fowler's page** (section 0) — goes in the merge request
   whatever the Council decides about the rest.
