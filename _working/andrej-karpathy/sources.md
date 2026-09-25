# Andrej Karpathy: verified sources

Research pass run 2026-09-22 for candidate issue #25. The candidate case was treated as unverified
throughout, per the Fournier and Saxe precedents. Every claim below that will reach a page has a
matching `[S:n]` line in `facts.md`.

Canonical home: <https://karpathy.ai/>. Secondary homes: <https://karpathy.github.io/> (the 2014 to
2019 blog), <https://karpathy.bearblog.dev/> (launched March 2025, no posts visible on the index
page when fetched), and <https://github.com/karpathy>. Status: **alive-active**. He founded Eureka
Labs on 2024-07-16 `[S:4]`, released nanochat and sat for a long technical interview on 2025-10-17
`[S:23]`.

**A note on the session's search budget.** The 200-call WebSearch allowance was already exhausted
when this pass began, so every source was reached by fetching a known URL directly: karpathy.ai,
en.wikipedia.org, techcrunch.com, eurekalabs.ai, cs231n.stanford.edu, github.com, arxiv.org,
simonwillison.net, cendyne.dev, fast.ai, bramcohen.com, dwarkesh.com, latent.space, the Hacker News
Algolia API and the OpenAlex API. That constrains **discovery**, not verification: everything here
was read at its source. Where it bites is the critic sweep in §7, which could not be run as a broad
sweep, and two candidate frames in §8 that stayed unverified because the only artifacts are posts on
X. Read §7 as "three strongest candidates tested, one passed," rather than as a complete search.

Two fetch walls worth recording for the next run. Medium returns 403, the documented gotcha, so the
Software 2.0 text was read through the `r.jina.ai` text proxy against the canonical Medium URL
`[S:5]`. web.archive.org and collinsdictionary.com are both blocked from this harness, so the Collins
Word of the Year fact rests on Wikipedia `[S:12]` and not on the dictionary's own page.

---

## 0. Inbound claims, carried from `scripts/inbound-claims.ts`

Three lines, all from one page, `simon-willison`. **All three carry the same wrong date, and the
substance of all three holds.** This is the first inbound-claims reconciliation on this roster to
return a correction, so the shape of it matters: the error is not in Willison's ledger, it is in what
the site did with an accurate ledger line.

| # | Live page | The claim it publishes | Verdict |
|---|-----------|------------------------|---------|
| 1 | `simon-willison` | `antecedent` edge, secondary: "Coined vibe coding on 2025-02-06. Willison's narrowing, building software with an LLM without reviewing the code it writes, turns the term on the review step, and his own post credits Karpathy for it." | **Date wrong, substance holds.** |
| 2 | `simon-willison` | Frame `vibe-coding`, `extended`, gloss: "Andrej Karpathy coined the term on 2025-02-06. Willison's contribution is a narrowing." | **Date wrong, substance holds.** |
| 3 | `simon-willison` | Prose mention of "Karpathy" inside that same frame gloss. | **Same line as #2, same defect.** |

### The date is 2025-02-02

Willison's post reads: "The term was coined by Andrej Karpathy just a few weeks ago (on February
6th)," and links X status 1886192184808149383 `[S:9]`. Cendyne links the same status `[S:13]`, so the
ID is the right post. Decoding it arithmetically gives 2025-02-02T23:17:15Z `[S:10]`.

**Corrected 2026-09-24.** This section previously said Wikipedia cites the status as "Karpathy, Andrej
[@karpathy] (2 February 2025)," giving the date two independent supports. It does not: the article's
`{{Cite tweet}}` carries the status number and no date field, and its prose dates the coinage to
"February 2025" without a day `[S:10]`. So the day rests on the decode alone. The decode is
deterministic and anyone can re-run it, which is a different kind of strength from a second witness,
and the merge request should describe it as the one support it is.

**So Willison's post is wrong by four days, and the site copied the error into its own voice.** That
distinction decides what gets fixed. `_working/simon-willison/facts.md` `[S:18]` there is accurate:
it records that *the post states* the term was coined on 2025-02-06, which the post does. The defect
is that the page then asserts "Andrej Karpathy coined the term on 2025-02-06" as a fact of the world,
in the site's voice, in a frame gloss and an edge label. This is the failure mode the calibration
list already names from the other direction: a ledger line that records one thing while the field
citing it asserts another.

**What to do.** Correct the date in both fields on `simon-willison` in the same merge request as this
page, three places by my count (the frame gloss, the edge label, and any prose that repeats it), and
say in the description that Willison's own post carries February 6th so a future reader does not
"fix" it back. Do not touch `[S:18]` in Willison's ledger, which is correct as written. The new
Karpathy page cites `[S:10]` for the date and never repeats the 6th.

Nothing else in the inbound set contradicts this research. The antecedent direction is right:
Karpathy coined the term, Willison narrowed it, and the narrowing is what travels `[S:11]`.

---

## 1. The uptake check, run first

`SKILL.md` puts this before everything because it decides whether a Council is worth convening. The
issue itself asks the right question: vibe coding is recent and Software 2.0 is not, so which frames
clear the bar with outside use.

**Verdict: passes, on Software 2.0, with room to spare.** This is not the Saxe case.

**Software 2.0.** First dated 2017-11-11 `[S:5]`, corroborated independently by the Hacker News
submission timestamp of the same URL `[S:6]`. Eight years and ten months old at the time of writing.
Outside use by other authors, in peer-reviewed venues, using the term in his sense as the subject of
their own work: Dilhara, Ketkar and Dig's "Understanding Software-2.0" (2021, 75 citations); Ratner
and colleagues on weak supervision in Software 2.0 (2019); Christopher Ré's "Software 2.0 and
Snorkel" (2018); two SambaNova hardware papers that put the term in the title of a chip architecture
(2021, 2022); Vasiljevic and colleagues on a compute substrate for it (2021); Borg on MLOps under it
(2022) `[S:7]`. The spread matters more than the count: a Stanford systems professor, a hardware
company naming a processor's purpose, and an empirical software-engineering study are three different
communities using one borrowed word.

**Vibe coding.** First dated 2025-02-02 `[S:10]`, so nineteen months old and inside the two-year
window. The bar the rule actually sets is age **with no outside use**, and outside use here is as
heavy as this project has ever measured: Merriam-Webster listed it as slang and trending in March
2025, and Collins named it Word of the Year for 2025 `[S:12]`. Hacker News carries dozens of
submissions whose titles use the term as a given, twenty of them above 150 points, by authors with no
connection to him `[S:14]` `[S:15]`. The frame is young and it is in the language.

**Software 3.0.** Fails as a frame of his, on authorship rather than on uptake. See §5.

The uptake case therefore rests where the issue predicted it would, on the older material, and it
does not need vibe coding to carry it.

---

## 2. Career and education

Verified twice over, with one wording conflict worth carrying.

BSc Computer Science and Physics with a Math minor, Toronto, 2005 to 2009. MSc, UBC, 2009 to 2011,
under Michiel van de Panne. PhD, Stanford, 2011 to 2015, under Fei-Fei Li, thesis "Connecting Images
and Natural Language" `[S:1]` `[S:2]`. Internships at Google Brain (2011), Google Research (2013) and
DeepMind (2015) `[S:1]`.

OpenAI, 2015 to 2017, research scientist and founding member `[S:1]`. Tesla, June 2017 to July 2022
`[S:2]`. OpenAI again, 2023-02-09 to 2024-02-13, where his own account says he built a team working
on midtraining and synthetic data `[S:1]` `[S:2]`. Eureka Labs from 2024-07-16 `[S:2]` `[S:4]`.

**The Tesla title has three wordings.** His own site says "Director of AI" `[S:1]`. Wikipedia says
"Director of Artificial Intelligence and Autopilot Vision" `[S:2]`. Tesla's own statement at the time
of hire, quoted by TechCrunch, says "Director of AI and Autopilot Vision" `[S:3]`. Per `SKILL.md`,
where sources disagree the page stays vague: use Tesla's own wording from the hire announcement, or
say he led the Autopilot vision work, and do not invent a fourth phrasing. He reported to Musk
directly `[S:3]`.

**`active_years`.** 2015 to present is the defensible span if the anchor is published output that
practitioners used: the RNN post is 2015-05-21 `[S:25]` and CS231n began in Winter 2015 `[S:24]`.
Choose it deliberately rather than reaching back to the 2011 internship.

---

## 3. The teaching corpus, and whether it is the same kind of object

This is the issue's third Council question and it deserves a straight answer: the corpus is durable,
dated, and independently countable, so it behaves like a written corpus for the site's purposes even
though its primary form is video and code.

- **CS231n**, Stanford. His own account has him as primary instructor and designer from 2015, with
  enrollment growing from 150 to 750 students by 2017 `[S:1]`. **Check this before it reaches the
  page.** The current course page names Fei-Fei Li, Ehsan Adeli, Justin Johnson, Zane Durante and
  Tiange Xiang for Spring 2026, lists previous offerings back to Winter 2015, and does not name him
  anywhere `[S:24]`. The credit is real and it is self-reported, so write it as his own account of a
  role he held nine years ago, and never as the course's description of him.
- **Neural Networks: Zero to Hero**, eight lectures from backpropagation through tokenization, with
  notebooks and exercises. 24.5k stars on the companion repository `[S:20]`.
- **nanoGPT**, 63.3k stars and 10.9k forks `[S:21]`.
- **Reach beyond the classroom.** "Let's build GPT: from scratch, in code, spelled out" took 1,110
  points on Hacker News in January 2023, and "Deep Dive into LLMs Like ChatGPT" 582 in February 2025
  `[S:22]`. The June 2025 talk took 1,481, the highest for any talk of his there, though not his
  highest item: nanoGPT's release took 1,532 and NanoChat 1,523 `[S:17]`.
- **Eureka Labs and LLM101n**, the teaching corpus turned into a company: "a new kind of school that
  is AI native," with LLM101n "an undergraduate-level class that guides the student through training
  their own AI" `[S:4]`.

Body of Work is a curated list rather than a bibliography (SCHEMA 4.8), so the candidates with
verified dates and links are: Software 2.0 (essay, 2017) `[S:5]`; the RNN post (essay, 2015)
`[S:25]`; "Building the Software 2.0 Stack" (talk, 2018) `[S:8]`; "Let's build GPT" (talk, 2023)
`[S:22]`; the Zero to Hero series (blog-series, 2022 onward) `[S:20]`; "Software in the era of AI"
(talk, 2025) `[S:17]`; the Dwarkesh Patel interview (interview, 2025) `[S:23]`.

---

## 4. Software 2.0, and the antecedent search

The frame the page should be built on.

The essay's argument, in its own words: Software 1.0 "consists of explicit instructions to the
computer written by a programmer," Software 2.0 is "written in much more abstract, human unfriendly
language, such as the weights of a neural network," and "no human is involved in writing this code."
The mechanism sentence is the one worth quoting on the page: "Software 2.0 is code written by the
optimization based on an evaluation criterion" `[S:5]`.

**Antecedent search, run per the Dijkstra precedent.** The opening of the essay was read specifically
for a credited premise, because "Simple Made Easy" opened by quoting Dijkstra and that changed an
attribution. This essay opens by rejecting a framing rather than crediting one, quoting an
unattributed "another tool in your machine learning toolbox," and it credits no earlier person, paper
or framing anywhere `[S:5]`. Negative evidence from the other side as well: the earliest indexed
scholarly work using the term in his sense is 2018, after the essay, and the two pre-2017 hits are
version numbers in unrelated domains `[S:7]`.

So `attribution_kind: original` is defensible. Two limits on that, both for the Council rather than
for me to settle:

1. Credits nobody is not the same as owes nobody. The search I could run was bounded by the loss of
   WebSearch, and the obvious near neighbours (differentiable programming, program synthesis,
   learning-based programming) were not tested for priority. Yann LeCun's differentiable-programming
   post is January 2018 and therefore later, which I know from memory rather than from a source, so
   it is not in the ledger and should not reach the page.
2. The essay's own reception is what carried the term, and one of its uptake artifacts is a hardware
   company naming a processor after it `[S:7]`. That is popularization doing work the essay did not
   plan, and the page should not read as though he designed the adoption.

---

## 5. Software 3.0: do not file this as his

The single most likely drafting error on this page, and the reason to write it down here.

The June 2025 talk is real, dated 2025-06-17 at Y Combinator's AI Startup School, and its own title
is **"Software in the era of AI"** `[S:17]`. The label "Software 3.0" attached to it came from the
writeup, and the writeup says so in its own text: "We first discussed Software 3.0 in Rise of The AI
Engineer, but it's an obvious consequence of the Software 2.0 essay" `[S:18]`. Independent uses of
the phrase predate the talk by two years, on Hacker News in April and August 2023 `[S:19]`.

Consequences for the draft: any Software 3.0 frame is `extended` or `popularized` with the
co-originator named, never `original`, and the page must not present the talk under a title it did
not carry. The devices in the talk that are his and are citable are the autonomy slider, the Iron Man
suit figure, and agents as a third consumer of digital information alongside humans and APIs `[S:18]`.
Those are talk content rather than named frames, and they belong in prose or in Body of Work notes.

---

## 6. Where this breaks: his own account is the best limit on the page

The strongest limits material is first-person, which is rare and worth using.

Nineteen months after coining vibe coding, asked about nanochat and why coding models had been so
little help on it, he answers that the repository is "not boilerplate code. It's intellectually
intense code almost, and everything has to be very precisely arranged," that the models "kept
misunderstanding the code because they have too much memory from all the typical ways of doing things
on the Internet," that what came back was "just not net useful," and that his own practice is
"autocomplete is my sweet spot," with agents useful "in specific settings" such as boilerplate
`[S:23]`. **Watch the attribution here.** "Coding models were of very little help to you in assembling
this repository" is the interviewer's question, quoting a tweet nobody reached, and an earlier draft
of this section and three page fields all carried it as Karpathy's own sentence. His answer says the
same thing in his own voice and is what the page quotes. He also moved the agent
timeline out to "the decade of agents" `[S:23]`, and the original post already hedged that vibe coding
is "not too bad for throwaway weekend projects" `[S:9]`.

Two more limits with sources on file: the definition that travels is Willison's rather than his
`[S:11]`, and the CS231n credit is self-reported and absent from the course's own current page
`[S:24]`.

One thing to avoid, flagged now because the calibration list has caught it twice: do not recast any of
this as evidence the method works. The `[S:23]` material is a limit, and a page that turns "autocomplete
is my sweet spot" into a maturity narrative has inverted it.

---

## 7. The critic search

Three candidates tested against the three tests. One passed.

**Passes: Cendyne, "'Vibe Coding' vs. Reality," 2025-03-19** `[S:13]`. Durable artifact, a published
essay on their own site. Names him: "There's a trend on social media where many repeat [Andrej
Karpathy's words]," linking the same status ID `[S:9]` and `[S:11]` link. Argues against, and closes
"'Vibe Coding' will not create the next big thing in 2025." Recommended as `critiques`,
`strength: secondary`, since Cendyne does not clear the inclusion filter and has no page here, which
is exactly what SCHEMA 4.11 specifies for that case. Carry the scope limit in the edge label: this
engages the coinage and the practice around it, not the wider body of work.

**Fails test 2: Rachel Thomas, "Breaking the spell of vibe coding," fast.ai, 2026-01-28** `[S:14]`.
The strongest candidate by author standing and by reach, 434 points. It does not name him. `parallel`
at most, and on the Forsgren precedent that means it may never be filed as `critiques`.

**Fails test 2: Bram Cohen, "The cult of vibe coding is dogfooding run amok," 2026-04-05** `[S:15]`.
616 points, argues directly against the practice, does not name him. `parallel` at most.

**Fails test 2 on available evidence: "Vibe Coding Kills Open Source," arXiv:2601.15494, 2026-01-21**
`[S:16]`. Abstract and listing make no reference to him; the full text was not read, so this is
untested rather than cleared.

**Named but unverified, do not use without checking.** Wikipedia's reception section reports that
Andrew Ng objected to the term in June 2025 and that Gary Marcus questioned an early vibe-coded app.
Neither is in the ledger. I fetched The Batch issue 304 (2025-06-04) and it discusses vibe coding in
passing without naming him, so that is the wrong issue and the right one was not found with search
unavailable. Marcus's Substack archive search returned nothing for his name. If the Council wants a
heavier critic than Cendyne, the Ng letter is the one to chase, and it needs a URL and a quote before
it can be filed.

---

## 8. Open questions and unverified material

Recorded so the next reader does not re-derive them, and so nothing here reaches a page by accident.

1. **LLM OS.** He is widely credited with framing the LLM as the kernel of an emerging operating
   system, around late 2023. Every artifact I could find is a post on X or a YouTube talk, neither
   fetchable from here, and the Hacker News index returned nothing usable. There is also a live
   antecedent question: MemGPT, "Towards LLMs as Operating Systems," was submitted 2023-10-12 with an
   explicit OS metaphor drawn from hierarchical memory systems, and if his framing is later than that
   it is convergent at best. Unverified, so it stays off the page and out of the ledger.
2. **Jagged intelligence.** Attributed to him in 2025, again on X only. Note the near neighbour,
   Dell'Acqua and colleagues' "jagged technological frontier" (2023), which would make it `extended`
   rather than `original` if it went on at all. Unverified.
3. **The RNN post's title lineage.** The post credits nobody `[S:25]`. Halevy, Norvig and Pereira's
   "The Unreasonable Effectiveness of Data" (2009) and Wigner (1960) are the obvious ancestors and
   neither is acknowledged in his text, so the page may not present the lineage as his
   acknowledgement. Leaving it out entirely is the safe call.
4. **"The hottest new programming language is English."** Quoted inside `[S:18]` as his. Corrected on
   the adversarial re-read: Latent Space does link a primary, `x.com/karpathy/status/1617979122625712128`,
   so the quote is locatable even though X cannot be fetched from this harness `[S:18]`. Still not read
   at source and still not dated from the artifact, so the same rule applies as to `[S:9]`: if the page
   wants it, mark it as reproduced rather than read.
5. **Does any uptake artifact credit him by name?** `[S:7]` establishes that other authors use the
   term as their own subject, which is what the uptake rule asks for. It does not establish that they
   credit him, and I did not open the papers. Do not write "cited by" on the strength of `[S:7]`.
6. **The Ng critique**, per §7.
7. **His X following**, sometimes offered as uptake evidence, is not verifiable from here and should
   not appear.

---

## 9. Corrections to candidate issue #25

The issue is unusually clean. No invented frames, which is what the Saxe case failed on, and no
factual error in its career claims. Four items:

1. **"He coined vibe coding on 2025-02-06" is wrong. The date is 2025-02-02** `[S:10]`. The issue
   inherited this from the Willison page, which inherited it from Willison's post. See §0.
2. **"Software 2.0 (2017)" understates the specificity available.** The date is 2017-11-11, twice
   corroborated `[S:5]` `[S:6]`.
3. **The cs231n claim needs narrowing.** It is his own account of a role held from 2015, and the
   course's current page does not name him `[S:1]` `[S:24]`.
4. **The issue omits his current employer.** Eureka Labs, founded 2024-07-16, with LLM101n as its
   first course `[S:4]`. A page on a living active thinker cannot skip it, and it is also the
   live-edge anchor together with nanochat `[S:23]`.

Two additions the issue could not have known to ask for: Software 3.0 is not his coinage and the
talk's real title is different (§5), and his own 2025 interview is the best limits material on the
page (§6).

---

## 10. Proposed frames, for the Council to settle

Attribution is the Council's call. This is what the record supports.

| Frame | Kind | First dated | Outside use | Note |
|-------|------|-------------|-------------|------|
| Software 2.0 | `original` | 2017-11-11 `[S:5]` | Peer-reviewed, 2018 to 2022, six author groups `[S:7]` | Antecedent search run and clean `[S:5]` `[S:7]`, with the two caveats in §4 |
| Vibe coding | `original`, with Willison as the narrowing extender | 2025-02-02 `[S:10]` | Merriam-Webster and Collins `[S:12]`, plus wide independent essay use `[S:13]` `[S:14]` `[S:15]` | Willison's page already files this `extended` with Karpathy as co-originator, which is consistent. His own later account limits it `[S:23]` |
| Software 3.0 | `extended` or `popularized`, or omit | 2025-06-17 talk `[S:17]`; label predates him `[S:19]` | Not measured | Never `original` `[S:18]`. Consider the deep tier or leaving it in prose |

Adjacency candidates with something on file: **Simon Willison** (`antecedent` out of Willison,
reciprocal here, the narrowing) `[S:11]`; **Cendyne** (`critiques`, secondary) `[S:13]`; **Fei-Fei
Li** (doctoral advisor, CS231n) `[S:1]` `[S:2]` `[S:24]`; **Christopher Ré** (carried the frame into
his own work) `[S:7]`; **Charles Packer and the MemGPT authors** (parallel, and possibly antecedent,
on the OS framing) if item 1 of §8 is ever resolved. Keep the total inside the seven-edge cap and
read the build warnings after return edges, since adding this page will re-rank Willison's
neighbours, where he currently sits at the cap with Karpathy already among them.

---

## 11. Added at drafting, 2026-09-22 (stage 3)

Four items. Two are new sources the draft needed, and two are corrections to this file and to the
inclusion Council's reports. Per `SKILL.md` stage 3, anything the draft adds beyond this file is
verified and appended to both halves of the record.

**New: `[S:27]`, what the essay says replaces source code.** The stage 1 pass recorded the essay's
two definitions and the mechanism sentence, which was enough to settle attribution and not enough to
write a thesis. The essay also says that in Software 2.0 "the source code comprises 1) the dataset
that defines the desirable behavior and 2) the neural net architecture," that most of the active
development becomes "curating, growing, massaging and cleaning labeled datasets," and that a failure
on a hard case is fixed by "including more labeled examples of those cases" rather than by writing
code. Read at the same URL through the same proxy as `[S:5]`.

**New: `[S:28]`, the essay's own limits section, and the one place an adversary appears in his own
text.** The essay carries a section headed "The limitations of Software 2.0" that the stage 1 pass
did not record: the accuracy-against-understanding trade ("a 90% accurate model we understand, or
99% accurate model we don't"), silent failure through training-data bias, and "the existence of
adversarial examples and attacks." This is first-person limits material for the page's central
frame, which the research pass had said was available only for vibe coding. Worth carrying into
calibration: the antecedent read of an essay stops at the point attribution is settled, and a
limits section sits after that point.

**Correction to §6 of this file, and to three Council seats.** Every one of them states that the
nanochat account comes "nineteen months after" the coinage. The coinage is 2025-02-02 `[S:10]` and
the interview is 2025-10-17 `[S:23]`, so the interval is eight and a half months. Nineteen months is
the frame's age at the date of this research pass and it is correct in that use, which is how the
error spread: §1 wrote it about the frame's age, §6 reused the number as an interval. The page writes
the interview by its date and the interval as eight months.

**Correction to the count in §0.** Two inclusion seats reported four live places carrying
2025-02-06 and one reported three. `grep -rn "2025-02-06" src/content/` returns three, all on
`simon-willison.md`: the `vibe-coding` frame gloss (line 174), that frame's `co_originators` role
(line 181), and the `andrej-karpathy` edge label (line 430). The claimed fourth, "the label's
following sentence," carries no date. `kent-beck.md` line 498 carries "February 2025," month only,
which is correct and needs no edit. The count is in `return-edges.md`, where the fix is planned.
