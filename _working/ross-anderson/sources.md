# Ross Anderson: verified sources

Research pass run 2026-09-20 for candidate issue #17. The candidate case was treated as unverified
throughout, per the Fournier and Saxe precedents. Every claim below that will reach a page has a
matching `[S:n]` line in `facts.md`.

> **SECOND AUDIT, 2026-09-20 — two changes that override what follows.** An independent reader
> re-checked all 58 lines again without trusting the first audit. No line was contradicted and
> nothing was deleted; the first audit's eight repairs all held. Two things changed for the Council:
> **(1) Section 5 is reversed — Safford is now sourced first-hand and is a usable named critic,
> `[S:57]`.** The old "research already looked and could not source him" verdict is dead; read the
> rewritten section 5. **(2) `[S:34]`, the Claremont car park quote, was still a first-person
> quotation carried secondhand through Stajano — the Majors failure mode. The CBI transcript itself
> has now been retrieved and the quote verified word for word, so quote it as Anderson to Yost.**
> The ledger now has 61 lines. Seven smaller precision fixes are marked in `facts.md` with
> second-pass AUDIT NOTEs.

**Read this before the Council starts.** An adversarial audit re-opened all 58 ledger lines at their
own URLs on 2026-09-20 and found eight wrong. All eight are repaired in `facts.md`, each carrying an
AUDIT NOTE. Three of them change what a seat is allowed to say:

1. **Schneier is not a co-founder of WEIS or SHB, by his own account.** `[S:38]` used to read his
   "we created the Security and Human Behavior workshop... we created the Workshop on Economics and
   Information Security" as self-inclusion among the founders. The very next sentence of the post is
   "(Okay, he created both—I helped.)" Schneier's line is the strongest third-party statement of
   Anderson's priority on this site, and it must be cited that way round.
2. **The Lovelace citation is real, the URL was wrong.** "Many contributions to building security
   engineering into a discipline" is BCS's own wording in its 16 April 2015 release `[S:12]`. It is
   not on the Cambridge department news item that `[S:38]`-era research cited, which carries only
   the generic "advancement of Information Systems" wording. The frame survives; the source moved.
3. **WEIS 2026 is in Berkeley, not at UC Berkeley** `[S:36]`. "Meeting in the founding venue" was
   rhetoric the venue page does not support.

The rest were precision failures rather than substance: a city and a year asserted past their
sources `[S:2]` `[S:7]`, one URL carrying three citation counts `[S:37]`, a twelve-language list
credited to a Wikipedia page that names seven `[S:45]`, and one of three greps overstated `[S:51]`.
Nothing in the uptake case in section 1 fell.

Canonical home: <https://www.cl.cam.ac.uk/archive/rja14/>, which is the preserved archive of his
personal web space and carries a notice of his death `[S:13]`. The older `~rja14` path still
appears in most citations and 301-redirects to the archive path, so the archive path is the one to
put on the page. Status: `deceased`. Active years: 1990 to 2024 as a publishing researcher, taking
his first listed paper as the start and the posthumous Nature paper as the end.

One thing to settle before drafting. This is the site's first deceased thinker, and SCHEMA 4.14 is
unambiguous: `live_edge_visible` is valid only with `status: alive-active`, and the build fails
otherwise. So the Live Edge question the candidate issue raises has an answer already, and the
Council does not need to invent one. What the page loses with Live Edge is a place to put the work
that is still moving, and two of his highest-uptake frames are from the last three years of his
life. They belong in Named Frames and Body of Work instead.

---

## 1. Uptake check, run first

This is the check that decides whether a Council is worth five seats. Anderson passes it more
comfortably than anyone researched so far, and the reason is structural rather than anecdotal: the
oldest frame is twenty-five years old and the institution built around it is still meeting, while
the two newest are under three years old and already in other people's vulnerability databases and
citation counts.

**Security economics and misaligned incentives, first dated December 2001.** The ACSAC paper argues
that "information insecurity is at least as much due to perverse incentives" `[S:21]`. Outside uses,
by people who are not Anderson:

- Cormac Herley at Microsoft Research builds on it by name in a peer-reviewed paper of his own:
  "Anderson et al. first proposed the comprehensive examination of security from an Economics
  perspective. He observed, for example, that economists have long studied how misaligned incentives
  often produce undesired outcomes" `[S:35]`. Read that carefully before anyone proposes Herley as a
  critic. He is extending the frame, and treating him as a critic would repeat the Hickey error where
  a sympathetic essay was called a critique.
- The workshop he convened is still running without him. WEIS 2026 is the twenty-fifth edition, on
  2 and 3 June 2026 in Berkeley, the city where the first one was held `[S:36]`. Two years after his
  death, the community is meeting where it started. Do not write "in the founding venue": the 2026
  venue is the David Brower Center downtown, not a UC Berkeley building, and the audit corrected
  that overstatement.
- Citation counts on 2026-09-20: 956 for the ACSAC paper `[S:37]`, 920 for the Science paper
  `[S:37a]`.

**Security engineering as a discipline, first dated 2001 with the book.** The BCS gave him the
Lovelace Medal "in recognition of his many contributions to building security engineering into a
discipline" `[S:12]`, a framing the Computer Weekly obituary repeats independently `[S:12a]`, and
Cambridge and Edinburgh both named chairs after the phrase `[S:8]` `[S:9]`. The Cambridge department
calls the book "a standard textbook" `[S:39]`. Note the attribution problem in section 4 before this
frame is called original.

**The threat model was wrong, first dated 1993.** Thirty-three years old, 144 citations `[S:37b]`,
and Herley cites it alongside the economics paper `[S:35]`.

**Model collapse, first dated May 2023 as a preprint and July 2024 in Nature.** 1,034 citations in
about two years `[S:42]`, plus coverage in The Atlantic, the Wall Street Journal and New Scientist
`[S:43]`. Anderson is the fifth of six authors `[S:40]`, so this is uptake of a frame he co-authored.

**Trojan Source, first dated October 2021.** The strongest concrete practitioner uptake of any frame
here: two CVE identifiers, CVE-2021-42574 and CVE-2021-42694 `[S:45]`, and compiler toolchains
patched in response, Rust in 1.56.1, a `-Wbidi-chars` warning merged for GCC 12, and similar patches
in LLVM `[S:45a]`. That is other people changing their software because of the paper.

**Verdict: uptake passes, decisively.** Five frames, all with use by people other than Anderson, the
oldest carrying a twenty-five-year-old research community and the newest carrying CVE numbers.
Nothing here resembles the Saxe case.

---

## 2. Corrections to the candidate issue

The issue got more right than the Fournier or Saxe cases did. What follows is what a drafter would
otherwise carry onto the page wrongly.

1. **"Cambridge" understates the last three years.** From 2021 he held a joint chair at Edinburgh
   and Cambridge `[S:9]`, and in his own words on his home page, "Cambridge forced me to retire in
   September 2023 when I turned 67... I am now 20% at Edinburgh and (officially) 20% at Cambridge"
   `[S:10]`. A page that says only "Cambridge" describes him as he was before 2021.

2. **The third edition was not freely available in 2020.** The issue's phrase "three editions, the
   third in 2020, freely available online" fuses two different facts. The third edition was published
   by Wiley in 2020 `[S:15]`, and in Anderson's own words, "all except seven sample chapters
   disappeared from this page for a period of 42 months; I'm afraid Wiley insisted on that. But after
   that, the whole book will be free online forever" `[S:16]`. All 29 chapters are free now. Wikipedia
   dates the free release to November 2024 `[S:56]`; the book page is the better source and the page
   should keep the publication year and the free release as two separate claims.

3. **Co-founded, with whom.** The issue asks the right question and the answer is on the record
   twice. Anderson's own ACSAC 2012 retrospective credits Hal Varian for the founding conversation:
   "Hal suggested this was classic moral hazard, and gave me a copy of 'Information Rules'" `[S:29]`,
   after "May 2000: Hal and I met at Oakland" `[S:28]`. The Royal Society memoir, written by his own
   former student, says the same independently: in 2002 "Ross spent some of his sabbatical with Hal
   at Berkeley where... they convened the first Workshop on Economics and Information Security
   (WEIS)" `[S:33]`. **No frame on this page can be marked `original` for security economics.** Varian
   belongs in `co_originators`.

4. **The 2001 paper credits Varian inside its own opening pages.** Two pages into the ACSAC paper,
   on distributed denial of service: "Varian pointed out that this was also a case of incentive
   failure" `[S:22]`. This is the Dijkstra check from `calibration.md`, and it fires. The paper also
   borrows tragedy of the commons, moral hazard, adverse selection and network externalities from
   economics `[S:21]`, which makes the vocabulary `distributed` rather than coined.

5. **"Misaligned incentives" is the co-authored phrasing, not the 2001 one.** The 2001 paper says
   "perverse incentives" `[S:21]`. "Misaligned Incentives" is a section heading in Anderson and Moore,
   Science 2006 `[S:24]`, whose opening line is "security failure is caused at least as often by bad
   incentives as by bad design" `[S:25]`. So the term the issue calls "vocabulary that travels" comes
   from the paper with Tyler Moore on it. Tyler Moore belongs in `co_originators` for that frame, and
   Herley's name-check quotes the 2006 wording back `[S:35]`.

6. **"Anderson's Rule" is a name other people gave him.** The trilemma sentence everyone quotes comes
   from a Guardian column by Henry Porter on 10 August 2009: "Anderson's Rule means you cannot
   construct a database with scale, functionality and security" `[S:50]`. That sentence is Porter's.
   I extracted the full text of Security Engineering third edition and grepped it: "Anderson's rule,"
   "scale, functionality" and "any two" appear nowhere in the book `[S:51]`. What Anderson himself
   wrote is the mechanism without the name, in section 10.4: "The likelihood that a resource will be
   abused depends on its value and on the number of people with access to it. Aggregating personal
   information into large databases increases both these risk factors at the same time" `[S:52]`.
   If the frame goes on the page it is `community` attribution with the Porter formulation credited,
   or the page states the mechanism from `[S:52]` and drops the name. It is not his coinage either way.

7. **The issue names none of the late work.** Model collapse `[S:40]` and Trojan Source `[S:44]` are
   the two frames with the fastest uptake in the whole corpus, both from the last three years of his
   life, and both are absent from the candidate case. For a 2026 security-leader audience they are
   the live ones. Both are co-authored with a first author who is not Anderson, so both are
   `co-authored` with the full author list named wherever the term appears.

8. **Date and award conflicts to keep off the page.** The Computer Weekly obituary calls "Why
   Information Security is Hard" a "2000 paper" `[S:55]`; the proceedings and his own slides say
   December 2001 `[S:20]`. The Cambridge department's obituary dates the Lovelace Medal to 2016
   `[S:54]`; the Royal Society memoir's honours list and the BCS announcement both say 2015 `[S:11]`
   `[S:12]`. Use 2001 and 2015.

9. **"Founded FIPR" is close but loose.** The department's obituary says he established it `[S:39]`;
   the memoir's honours list reads "Co-founder, FIPR, 1998" `[S:11]`. Use co-founder.

---

## 3. Career, verified

The Royal Society biographical memoir by Frank Stajano, his own PhD student, is the best single
source and is the one I leaned on `[S:1]`. It is a memoir rather than an autobiography, so where it
and Anderson's own words differ I took his words.

He was born in Wallasey near Liverpool on 15 September 1956 and the family settled in Gourock when
he was five `[S:1]`. He read maths at Trinity College, Cambridge, graduating in 1978 `[S:3]`. The
detail worth carrying is the year out in the middle of that degree, spent at Ferranti in Edinburgh
porting the Tornado fighter-bomber's inertial navigation system for submarine use `[S:4]`. The
engineering came before the mathematics finished.

Then fourteen years outside academia, which is where the economics came from. Barclays headhunted
him to look at the security of cash machines and points of sale, and he stayed three years; the
memoir credits that stint for his ATM know-how and for "what it taught him about the hierarchies,
incentives and inefficiencies of large organisations, which later resurfaced in his work on security
economics" `[S:5]`. In 1989 he went to Hong Kong for Standard Chartered, building a branch network
system for 23 countries, then worked as an independent consultant `[S:6]`. The point for a page:
the incentive argument came out of two banks and a consultancy, and only afterwards out of a
literature.

He returned to Cambridge as a mature student under Roger Needham, around 35, was approved in 1995
and took a lectureship the same year `[S:7]`. Reader in 2000, full Professor of Security Engineering
in 2003 `[S:8]`. The Edinburgh chair came in 2021 `[S:9]`. He died at home on 28 March 2024, aged 67
`[S:2]`. Two small things the audit pulled back: the memoir never gives a year for the return, so do
not write "1992" on the page, and no source checked puts the death in Cambridge in its own words,
so write "at home" and leave the city out.

Honours, from the memoir's own list: co-founder of FIPR 1998, FRS and FREng both 2009, Brandeis
Privacy Award 2012, ACM SIGSAC Outstanding Innovation Award 2015, BCS Lovelace Medal 2015, EFF
Pioneer Award 2016, IFIP Kristian Beckman Award 2021, FRSE 2023 `[S:11]`.

---

## 4. Candidate frames, with attribution already worked out

The Council will decide the foreground set. What follows is the attribution evidence for each, so
that argument runs on facts rather than on impressions.

**Security economics.** `extended` or `co-authored`, with Hal Varian in `co_originators`, never
`original`. Evidence: `[S:22]` `[S:28]` `[S:29]` `[S:33]` `[S:34]`. The distinctive claim inside it
is portable on its own and is his: "where the party who is in a position to protect a system is not
the party who would suffer the results of security failure, then problems may be expected" `[S:23]`.

**Misaligned incentives.** `co-authored` with Tyler Moore, sourced to the Science 2006 section
heading `[S:24]` and its opening claim `[S:25]`. Do not source this phrase to the 2001 paper, which
says "perverse incentives" `[S:21]`.

**The threat model was wrong.** The cleanest candidate for `original`. The 1993 paper's own section
heading is "Why the threat model was wrong" `[S:19]` and its abstract states the finding `[S:18]`.
I checked its opening for a credited premise and found an analogy rather than an attribution: the
paper opens by contrasting the crypto community with aviation's institutionalised learning
mechanism, with no named source for the comparison. Worth flagging for the Council, because that
analogy is the seam where Woods, Dekker and Allspaw already sit on this site, and an adjacency edge
is the honest way to record it rather than an antecedent edge.

**Security engineering as a discipline.** `popularized` at most. The phrase predates him, and I
could not establish him as its coiner in this pass. What the record supports is that he built the
discipline around the phrase: the BCS citation says so `[S:12]`, the memoir says "the thread that
linked his diverse contributions was to view security as an engineering discipline" `[S:14]`, and
two universities named chairs for it `[S:8]` `[S:9]`. An `original` attribution here would be the
Fournier tech-lead error repeated.

**Anderson's Rule.** `community`, with the Porter formulation credited, or omitted. See correction 6.

**Model collapse.** `co-authored`. Six authors, Anderson fifth, Shumailov first `[S:40]`. The name
is defined inside the paper's own abstract `[S:41]`. Every place the term appears in prose names the
co-authors, per the schema rule on co-coined terms.

**Trojan Source.** `co-authored` with Nicholas Boucher, who is first author `[S:44]`. This is his
own doctoral student, which is worth one sentence somewhere because community building is the thing
the memoir says he was best at `[S:14]`.

---

## 5. Critics, handled carefully

This is the weakest part of the research and the Council should know it before it starts.

**The one clean named critic is now sourced first-hand. This paragraph was reversed by the second
audit on 2026-09-20 — read the new version, not the old verdict.** David Safford at IBM Research
wrote "Clarifying Misinformation on TCPA" in October 2002, responding directly to Anderson's TCPA
FAQ. The first audit could not source it: the original IBM URL is dead, the Stanford CIS blog entry
that linked it neither names Anderson nor quotes the characterisation, and archive.org was down
when it was tried. The second audit retried the Wayback Machine, retrieved the seven-page PDF and
read it in full. It now holds a ledger line, `[S:57]`.

What the paper actually says, which is stronger than the Wikipedia paraphrase that stood in for it:
it carries a section headed "Specific Technical Comments: Ross Anderson's TCPA FAQ [8]" whose
subheadings are "Incorrectly lumps together TCPA, Palladium, and DRM:", "Is full of technical
errors:" and "Presents speculation as fact:". Those are Safford's own words about Anderson's FAQ,
not a later characterisation of them. **This is a genuine adversarial critique and survives the
Hickey test** — it is not a sympathetic piece being called a critique.

Two limits a seat must respect. The three-bullet charge in Safford's introduction is aimed at
Anderson, Bill Arbaugh and Lucky Green collectively, so it cannot be quoted as though aimed at
Anderson alone; cite the Anderson-specific subheadings instead. And Safford states "All views are my
own, not necessarily those of IBM," which is a disclosed affiliation — do not repeat the Saxe error
by describing his IBM position as an undisclosed interest. **If a seat proposes Safford, the answer
is now yes, with `[S:57]` behind it.**

**Levy and Robinson are a counterposition, and the edge type is a real question.** Ian Levy of the
NCSC and Crispin Robinson of GCHQ published "Thoughts on Child Safety on Commodity Platforms" on 21
July 2022, arguing the case for client-side scanning `[S:48]`. It cites the fourteen-author paper
Anderson co-wrote as reference [1], and that citation is the only place his name appears; the
argument text never engages him by name `[S:48]`. Anderson replied directly three months later in
"Chat Control or Child Protection?", whose abstract names them both `[S:49]`. So the exchange is
documented in both directions, and the counterposition targets a paper with fourteen authors rather
than Anderson personally. Under the site's own rule, a counterposition that never names the thinker
is a `parallel` edge. **My reading is `parallel` at `secondary`, and I am flagging it rather than
deciding it.** The byline test also applies: naming a serving GCHQ technical director as a critic on
Julie's site is a move worth thinking about before it ships.

**Herley is not a critic.** See section 1 `[S:35]`.

---

## 6. Adjacency, first pass only

Not researched to Council depth. What the evidence already suggests, for the drafter rather than for
the ledger:

- The 1993 paper's aviation-safety framing `[S:18]` puts him next to Woods, Dekker and Allspaw, who
  hold the site's learning-from-failure positions.
- The model collapse and Trojan Source work `[S:40]` `[S:44]` puts him next to Willison on AI and
  supply-chain security, and Willison's page is the site's newest.
- Hal Varian `[S:29]` and Tyler Moore `[S:24]` are off-site co-originators, not neighbours in the
  ordinary sense, and both are already carried by `co_originators` on the frames. Per the calibration
  note on the seven-neighbour cap, an edge whose whole claim is already in a frame's
  `co_originators` is the first candidate for the deep tier if the cap bites.

---

## 7. Open questions for the inclusion Council

1. Deceased status closes the Live Edge question by schema `[S:13]`. What the page does instead with
   two frames from his last three years is the real question.
2. Is the Levy and Robinson exchange a `critiques` edge or a `parallel` one, given that the
   counterposition cites a fourteen-author paper and never argues with him by name `[S:48]` `[S:49]`?
3. Does "Anderson's Rule" go on the page as a `community` frame, get restated from his own mechanism
   sentence `[S:52]` without the name, or come off?
4. Which five or six frames go in the foreground, given that the oldest has twenty-five years of
   uptake and the newest has CVE numbers?
5. `doctrine_mode`. The corpus is large, the frames are mostly named by him or by the community
   already, and the risk on this page is coining rather than under-naming, which points at `mode-a`
   and three review rounds. Worth confirming rather than assuming, and `review-policy.ts` owns the
   round count either way.
