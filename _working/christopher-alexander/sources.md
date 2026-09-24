# Christopher Alexander: verified sources

Research pass run 2026-09-22 for candidate issue #42. The candidate case was treated as unverified
throughout, per the Fournier and Saxe precedents. Every claim below that will reach a page has a
matching `[S:n]` line in `facts.md`.

Canonical home: <https://www.patternlanguage.com/> (Alexander and the Center for Environmental
Structure; the keynote transcript used heavily below carries the CES copyright line).
Status: **deceased** — died 17 March 2022 `[S:1]`. `live_edge_visible` stays false and `live_edge` is
absent. Ross Anderson is the only worked precedent for a deceased thinker on this site.

**A note on the session's search budget.** The 200-call WebSearch allowance was already exhausted
when this pass began, so every source below was reached by fetching a known URL directly
(c2.com, patternlanguage.com, en.wikipedia.org, openlibrary.org, katarxis3.com over curl). That is a
constraint on *discovery*, not on verification: everything recorded here was read at its source.
Where it bites is section 5, the independent-uptake question the candidate issue raised, and the
unverifiable claim about the Gang of Four epigraph in section 4.

---

## 0. Inbound claims, carried from `scripts/inbound-claims.ts`

Four lines, on two live pages. Reconciled one at a time. **Nothing here is reversed. Three of the
four hold as written; one overstates a date by nine years, and the same nine years plus a dropped
co-author list need narrowing in a frame credit.**

| # | Live page | The claim it publishes | Verdict |
|---|-----------|------------------------|---------|
| 1 | `martin-fowler` | `antecedent` edge, secondary, deep: "The pattern-language form Fowler's catalogs descend from. Alexander's later critique of how programmers used patterns is itself part of why Fowler's catalog discipline matters: naming is necessary but not sufficient." | **Holds.** |
| 2 | `ward-cunningham` | `antecedent` edge, secondary: "A Pattern Language (1977) gave the word pattern its architectural sense, and the 1987 report with Beck credits him inside its own proposal sentence, adapting concepts from his work. The software pattern movement, the Portland Pattern Repository and the wiki built to hold its literature all descend from that borrowing." | **Holds, with one narrowing.** |
| 3 | `ward-cunningham` | Frame `pattern-languages-for-programs`, `co_originators` entry: Alexander "originated pattern languages in A Pattern Language (1977), credited inside the paper's own proposal sentence." | **Holds in part; two corrections.** |
| 4 | `ward-cunningham` | Prose inside the same frame's gloss: "in the sense Christopher Alexander gave the term for buildings. The paper credits the borrowing inside its own proposal sentence." | **Holds exactly.** |

### 1: the Fowler edge holds, including the hard half

The claim that Alexander later critiqued how programmers used patterns is the part that could have
been invented, and it is not. The durable artifact is his October 1996 OOPSLA keynote in San Jose
`[S:22]`. He grants the format — "I see the format of a pattern (context, problem, solution, and so
forth). It is a nice and useful format" `[S:24]` — and then names three things he says did not come
across: a moral component, the aim of coherence, and generativity `[S:25]`. He also names the
specific mechanism that was dropped: both his books say a pattern language is used sequentially, and
"In practice, however, this feature dropped out of site, and was not emphasized in use" `[S:26]`.

The edge's second sentence ("naming is necessary but not sufficient") is the site's own argument
about why Fowler's catalog discipline matters. It reads as the site's, not as Alexander's, so it
passes the calibration item about compressed phrasing put in a thinker's mouth. Leave it alone.

### 2: "gave the word pattern its architectural sense" is nine years late

Everything in this label about the 1987 report is verbatim correct. The proposal sentence reads: "We
propose a radical shift in the burden of design and implementation, using concepts adapted from the
work of Christopher Alexander, an architect and founder of the Center for Environmental Structures"
`[S:16]`. The Portland Pattern Repository, 1995, is confirmed independently `[S:18]`.

The narrowing is the date. Alexander published *A pattern language which generates multi-service
centers* through the Center for Environmental Structure in 1968 `[S:9]` — the phrase is in the title,
nine years before the book. So 1977 is where *the software borrowing* took the term, which is what
the rest of the label is about, and not where the term was given its sense. The honest form of the
label is that the 1977 book is the one the 1987 report cites. The new page must not repeat the 1977
origination date, and the Cunningham label should be narrowed in the same merge request.

This also affects Cunningham's `further_in`, which reads "Christopher Alexander's *A Pattern
Language* (1977) for the source of the pattern idea." As a reading recommendation that is fine; as a
claim about the source it carries the same nine-year slip. Recommend leaving the recommendation and
dropping "the source of."

### 3: the frame credit drops the co-authors its own cited source keeps

Two corrections, and the second is the more interesting one.

**The date**, as in #2: 1968 `[S:9]`, not 1977.

**The byline.** The credit reads "originated pattern languages in A Pattern Language (1977)," sole
credit to Alexander. The book's byline is Christopher Alexander, Sara Ishikawa and Murray
Silverstein, with further writing credits to Max Jacobson, Ingrid Fiksdahl-King and Shlomo Angel
`[S:10]`. The 1987 report that this very frame cites preserves the plurality in its own
bibliography — "[Alex77] Christopher Alexander **et al.**, *A Pattern Language*, Oxford University
Press, New York, 1977" `[S:17]` — and the site dropped what its source kept. This is exactly the
calibration item requiring every co-author of a coined term to be named in `co_originators` and
wherever the term appears in prose. The 1968 paper's byline is itself disputed, Open Library
recording Alexander alone against Wikipedia's "with Ishikawa and Silverstein" `[S:9]`, so the fix is
to name Ishikawa and Silverstein on the 1977 credit, where the byline is not in doubt, and to stay
vague on 1968.

Consequence for the new page: the `pattern-language` frame here cannot be `original` with a solo
`primary_author`. On the evidence it is `co-authored`, with Ishikawa and Silverstein in
`co_originators`. The Council should settle this rather than the drafter.

### 4: holds exactly

"The sense Christopher Alexander gave the term for buildings" and "credits the borrowing inside its
own proposal sentence" are both the primary record, word for word `[S:16]`. Cunningham's Body of Work
note, that the report "cites A Pattern Language in the bibliography," is also exactly right `[S:17]`.

---

## 1. Corrections to candidate issue #42

The issue is short and unusually careful — it flags its own unknowns — so there are two real
corrections rather than the three to six the Fournier and Saxe cases produced.

**Correction 1. "author of *A Pattern Language* (1977)" is a solo credit the book does not carry.**
Three names on the byline, three more credited inside `[S:10]`. The issue repeats the same defect the
live Cunningham page has, which is worth noting because it means the error has now been made twice
independently, and a page drafted straight from the issue would make it a third time.

**Correction 2. "the book that gave software the idea of a design pattern" compresses two different
things.** The book software cited is the 1977 one `[S:17]`. The book where the phrase first appears is
not: that is the 1968 CES paper `[S:9]`. The issue's own framing question ("Is this a page about
Alexander, or a page about what software did to Alexander?") is sharpened by this, because the
nine-year gap is the first small instance of the larger pattern the page is about — software met a
compressed version of a longer body of work.

**Not corrections, recorded so the Council does not re-litigate them.**

- "Austrian-born British-American architect who died in 2022" — born Vienna, 4 October 1936, died
  Binsted, Sussex, 17 March 2022 `[S:1]`. The nationality compound is the source's own description
  and was not independently verified; prefer "born in Vienna, educated in England, taught in
  California" on the page, which is all directly sourced `[S:1]` `[S:2]` `[S:3]`.
- "He is not a software thinker, which the site has already handled once with Ray Dalio" — true as
  far as it goes, but Dalio is a `mode-b` page built on a named artifact. Alexander's shape is
  different and `doctrine_mode` is a live Council question, section 6 below.
- "He died in 2022, so the page has no live work to describe" — correct, and the fields simply stay
  absent. Anderson is the precedent and it is two days old, as the issue says.

---

## 2. Life and career

Born Vienna 1936, died Binsted, Sussex, 2022 `[S:1]`. Trinity College, Cambridge for a bachelor's in
architecture and a master's in mathematics; Harvard for a PhD in Architecture in 1962, recorded as
the first architecture PhD Harvard awarded; work at MIT in transportation theory and computer science
`[S:2]`. The mathematics is not decoration on this page: the first book is a dissertation about
decomposing design problems formally `[S:7]`, and the essay that travelled furthest outside
architecture is built on a lattice-theoretic distinction `[S:8]`.

He went to Berkeley in 1963 as Professor of Architecture and held the post "for almost 40 years"
`[S:3]`. **The exact end date and any emeritus title are unverified**, so `active_years` should read
as a range with the start hard and the end soft, and `background` must not claim an emeritus title.

He founded and directed the Center for Environmental Structure, which published his book series
`[S:4]`. **The founding year is unverified.** The 1987 software report introduces him as "founder of
the Center for Environmental Structures," pluralised `[S:4]`, which is a small but usable detail:
the form in which a generation of programmers first met his name was already slightly off.

Awards: AIA First Medal for Research 1972, Fellow of the American Academy of Arts and Sciences 1996,
Vincent Scully Prize 2009, Global Award for Sustainable Architecture 2014 `[S:5]`.

He built. Eishin Campus near Tokyo, the West Dean Visitors Centre, the Julian Street Inn in San Jose,
the Sala House, the Martinez House, low-cost housing in Mexicali `[S:6]`. **No years were verified
for any of them**, so the page may say he built and may name the projects, and may not date them.
This matters for the page's honesty: a theorist whose theory was tested in built work is a different
claim from a theorist whose books travelled.

---

## 3. The corpus, in the order it was written

- **1964** *Notes on the Synthesis of Form*, Harvard University Press. It "influenced a number of
  leading software writers, including Larry Constantine, Ed Yourdon, Alan Cooper, and Tom DeMarco"
  `[S:7]`. **Audit 2026-09-22:** this entry also read "out of the dissertation" and quoted the book
  as having "been cited by researchers in computer science since the late 1960s." The second
  sentence is not on the cited page in any form, and the first is not what the page says either —
  it records a shared case study, the village of Bavra, between dissertation and book. Both removed
  here and in the ledger. **Open question flagged:** Alexander is widely said to have repudiated this book's
  method in a later preface. The source consulted says instead that he evolved rather than abandoned
  it, and the preface itself was not reached `[S:7]`. **The page must not assert either version.**
- **1965** "A City Is Not a Tree," *Architectural Forum* 122(1), April 1965, pp. 58–62: planners
  impose trees, living cities are semi-lattices `[S:8]`.
- **1968** *A pattern language which generates multi-service centers*, CES. Earliest verified use of
  the phrase; byline disputed `[S:9]`.
- **1975** *The Oregon Experiment*, Oxford University Press, CES series Volume III, with Murray
  Silverstein, Shlomo Angel, Sara Ishikawa and Denny Abrams `[S:12]`. **Audit 2026-09-22:** the
  co-authors and publisher were marked unverified because the ledger cited the wrong article. Both
  are on the book's own page; [S:12] is re-sourced there.
- **1977** *A Pattern Language: Towns, Buildings, Construction*, Oxford University Press, CES series
  Volume 2. Alexander, Ishikawa, Silverstein, with Jacobson, Fiksdahl-King and Angel. 253 patterns:
  "All 253 patterns together form a language." The book presents patterns as hypotheses, "our current
  best guess" `[S:10]`. That last point is worth carrying: the form software borrowed presents itself
  as provisional, and the borrowing hardened it.
- **1979** *The Timeless Way of Building*, Oxford University Press, CES series Volume 1, solo. It
  carries "the quality without a name," defined by circling it rather than stating it `[S:11]`.
  Published two years after Volume 2 and written as its introduction `[S:11]`.
- **1987** *A New Theory of Urban Design* `[S:14]`.
- **2002–2004** *The Nature of Order*, four volumes, in order: *The Phenomenon of Life*, *The
  Process of Creating Life*, *A Vision of a Living World*, *The Luminous Ground*. Centers,
  wholeness, structure-preserving transformations, the fifteen geometric properties, living
  structure `[S:13]`. **The source for this one carries a Wikipedia neutrality warning for fan
  point of view**, so the titles and the date range are usable and its characterisations are not.
  **Audit 2026-09-22:** the publisher (CES) and a year per volume both came off this line. The
  source gives neither, and Open Library dates *The Luminous Ground* to 2003 against the 2004 the
  ledger had. Volume order is safe; the range is safe; a year on a single volume is not.
- **2012** *The Battle for the Life and Beauty of the Earth* `[S:14]`.
- **1996** He also wrote the introduction to Richard P. Gabriel's *Patterns of Software*, Oxford
  University Press `[S:15]` `[S:15a]` — the one piece of his writing aimed at a software audience.
  **Audit 2026-09-22:** the authorship of that introduction now cites Alexander's own first-person
  sentence in the keynote (new line [S:15a]) rather than the Open Library catalogue record, which
  cannot speak to who wrote a front-matter essay.

---

## 4. The software borrowing, from the primary record

The chain is unusually well documented, and the page can state it without hedging.

**1987, the borrowing.** Beck and Cunningham's technical report CR-87-43, dated 17 September 1987,
credits Alexander inside its own proposal sentence and cites *A Pattern Language* as its one Alexander
source, "et al." included `[S:16]` `[S:17]`. Beck is first byline, Cunningham second. Both have pages
here, and both pages already carry this fact correctly.

**1994–1995, the descendants.** *Design Patterns* by Gamma, Helm, Johnson and Vlissides,
Addison-Wesley; the first PLoP conference the same year; the Portland Pattern Repository the next
`[S:18]`. The GoF book has sold over 500,000 copies in English plus thirteen other languages `[S:19]`.

**One thing I could not verify, and the page must not claim it.** The best-known evidence for the
credit is that *Design Patterns* opens by quoting Alexander's own definition of a pattern. The
Wikipedia article on the book does not mention Alexander at all `[S:19]`, the Hillside Group patterns
page does not credit him either, and c2's wiki page for him would not render. With WebSearch spent I
could not reach the book's front matter. **So the page's uptake claim rests on the 1987 primary
source and the field-history record `[S:16]` `[S:18]`, which is stronger evidence anyway, and the GoF
epigraph stays off the page until someone verifies it.** Logged as open question 2.

**1996, the author's reply.** OOPSLA brought him to San Jose to keynote, nine years after the report
`[S:22]`. That invitation is itself uptake evidence, and it produced the single most useful document
for this page.

---

## 5. Uptake check — PASSES, and not narrowly

Run before anything else, per stage 1. The Saxe failure mode is a frame under two years old with no
use outside the thinker. This is the opposite case on every axis.

| Frame | First dated | Use by practitioners other than Alexander |
|-------|-------------|-------------------------------------------|
| Pattern language | 1968 `[S:9]`, popularised 1977 `[S:10]` | Beck and Cunningham 1987 `[S:16]`; GoF 1994; PLoP 1994; Portland Pattern Repository 1995 `[S:18]`; pedagogical patterns late 1990s; systems architecture 2007; design science 2007/2015; Schuler 2008; Group Works 2011; permaculture; wikis `[S:20]` |
| The pattern form (context / problem / solution) | 1977 `[S:10]` | The whole GoF template and its 500,000-copy reach `[S:19]`; Alexander himself confirms the format is what software took `[S:24]` |
| Tree versus semilattice | 1965 `[S:8]` | Verified as "widely cited" and "a landmark text" in urban design, with a 2015 edition carrying commentaries from other architects, engineers and physicists `[S:8]`. **Software uptake of this specific frame is NOT verified** — see open question 3 |
| The quality without a name | 1979 `[S:11]` | Not separately verified outside architecture. Do not claim software uptake for this one |
| Generative schemes / generativity | stated 1996, traced by him to his earlier work `[S:27]` | Named by Alexander as the thing software did *not* take `[S:25]`, which is a use of the frame by the site and not by practitioners. Treat as a frame the page explains, not one it credits with uptake |
| Centers, wholeness, structure-preserving transformation, living structure | 2002–2004 `[S:13]` | Not verified outside Alexander's own circle. The one source available is flagged for fan point of view `[S:13]` |

The oldest outside use is thirty-eight years old and the phrase is in daily professional use by
people who have never read him. `uptake_passes: true`. Where the check bites is *which* frames go in
the foreground: two of the six have verified outside uptake, and the *Nature of Order* vocabulary has
none that I could verify. That is a drafting constraint, not a reason to park.

---

## 6. The critic: Peter Eisenman, and all three conditions hold

This is the most error-prone thing on a page, so each condition has its own ledger line.

1. **Durable artifact.** "Contrasting Concepts of Harmony in Architecture," the debate at Harvard's
   Graduate School of Design on 17 November 1982, first published in *Lotus International* 40 (1983)
   pp. 60–68 and reprinted in *Studio Works* 7, Princeton Architectural Press (2000) pp. 50–57
   `[S:29]`. A twice-published transcript clears the bar comfortably.
2. **It names him.** Throughout, and to his face `[S:30]`.
3. **It argues against him.** Eisenman calls the relationship adversarial in his opening breath, says
   Alexander's dissertation "so infuriated me, that I was moved to do a Ph.D. thesis myself... an
   attempt to dialectically refute the arguments made in his book," and states that Alexander "again
   presents an argument which I find the need to contest" `[S:31]`. The disagreement is substantive
   and is about the core of Alexander's project: whether harmony and comfort are what architecture
   owes people at all `[S:31]`.

**Nothing here is a Forsgren case.** Eisenman is not defending Alexander, not extending him, and not
being summarised by a third party.

Two things the drafter must handle. Eisenman has no page on this site and does not clear the
inclusion filter, so the edge is `strength: secondary` per SCHEMA 4.11. And the byline test needs a
conscious answer: naming an architecture-internal opponent is a move the site can make as a matter of
record, since the debate is published, but the page must not adopt Eisenman's side of an argument
Julie has no standing in. Recommend the label report what he argued and stop there.

**The exchange is hot, and the site should not be prim about it, and it has to get the target
right.** In the transcript, Alexander says "I also feel incredibly angry because he is fucking up
the world" about Rafael Moneo's deliberately disharmonious building, which Eisenman had raised and
defended. What he says to Eisenman is a different sentence: "people who believe as you do are
really fucking up the whole profession of architecture right now by propagating these beliefs"
`[S:32]`. The editors note most of the exchange was "generally good-natured" and that the swearing
is all many readers know of it `[S:32]`. **Audit 2026-09-22:** this paragraph read "Alexander told
Eisenman he was 'fucking up the world' in that room." The page's editors' introduction glosses it
that way, but the transcript underneath does not, and a page repeating the gloss would be putting a
sentence about a third architect's building into Eisenman's mouth. A page that
cites the debate and hides the temperature is doing the thing Alexander complained about.

**A constraint on this finding.** With no WebSearch I could not sweep for other critics, so read
section 6 as "one critic found and fully verified," not "one critic exists." A software-side critic
of Alexander specifically, as opposed to a critic of design patterns, was not found and was not
ruled out.

---

## 7. Antecedents, checked before anything is called original

Per the calibration item, I read the opening of the talk the page will cite. **The 1996 keynote
credits no borrowed premise in its opening** `[S:23]` — it opens on his own disorientation in front of
a football field of programmers and on the $3,000 dinner invitation that first told him software had
taken his work up. No Dijkstra-at-the-first-slide case here.

Inside the text he credits people, but as interlocutors rather than sources of the idea: Jim Coplien,
Richard Gabriel, Greg Bryant, Bill Joy, John Gage, Mark Sewell `[S:23]`.

The one antecedent he does name for his own core frame is not a person: "When I first constructed the
pattern language, it was based on certain generative schemes that exist in traditional cultures"
`[S:27]`. So the antecedent of pattern languages, on his own account, is vernacular building
practice. That is a real finding and it should reach the page, because it makes the frame's
attribution honest without handing credit to a named originator the record does not support.

**Two antecedent questions I could not close.** "A City Is Not a Tree" borrows *semilattice* from
lattice theory, which the essay's own argument makes plain `[S:8]`, but I could not verify whether
Alexander credits the borrowing. And Jane Jacobs' "the kind of problem a city is" (1961) is the
obvious antecedent for the organised-complexity framing — the site hosting the Eisenman debate runs a
whole article titled "The Kind of Problem Architecture is: Jane Jacobs, Christopher Alexander and
Since" — but I did not verify that Alexander credits Jacobs anywhere. **No frame on this page should
be marked `original` for the tree/semilattice idea until one of these is closed.** Logged as open
question 4.

---

## 8. What the page is about: my read

The issue's framing question is the right one and I think the research answers it. A page about "what
software did to Alexander" would be the site putting words in a dead man's mouth. But the correction
is not the site's to make, because **he made it himself, on stage, to the people who did it, and the
transcript is a primary source** `[S:24]` `[S:25]` `[S:26]` `[S:28]`. So the page can be about
Alexander and still carry the misreading as its spine, because the misreading is one of his own
positions, sourced like any other.

The spine that falls out of the record: a pattern language was designed as a *sequence* that
generates a coherent whole, with a moral claim about what buildings owe the people in them. Software
took the *format* — context, problem, solution — and left the sequence, the coherence aim and the
moral component `[S:24]` `[S:25]` `[S:26]`. Alexander's own word for what was lost is generativity
`[S:27]`, and he told the room the unfinished work was now theirs `[S:28]`.

That is a page about a vocabulary that outran its meaning, which is a thing the roster already knows
how to argue about from the Cunningham page's side of it. The Lens position and the novelty check
against neighbouring extensions are a stage 5 job; flagging here only that Cunningham is the nearest
neighbour and the two pages will be arguing about the same borrowing from opposite ends.

**`doctrine_mode`: I recommend `mode-a`, and the Council should confirm it.** His frames are his own
and richly named, and a page that coins new names for Alexander's ideas would be committing the exact
sin the page is about. `mode-a` also buys three review rounds, which a page this far outside the
site's field should have.

---

## 9. Open questions for the inclusion Council

1. **Independent-of-patterns uptake among software practitioners was not measured.** The issue asked
   for this explicitly and I could not run it with the search budget spent. What is verified is that
   his vocabulary travels enormously *through* the patterns movement and its descendants `[S:18]`
   `[S:19]` `[S:20]`, plus a separate and older channel through *Notes on the Synthesis of Form* to
   Constantine, Yourdon, Cooper and DeMarco `[S:7]`. Two independent channels is a better answer than
   the issue expected, and it is still not the measurement it asked for.
2. **The Gang of Four epigraph is unverified** and must stay off the page until it is `[S:19]`.
3. **Whether the tree/semilattice frame has software uptake** — plausible, unverified `[S:8]`.
4. **Whether Alexander credits lattice theory or Jane Jacobs** for that frame `[S:8]`.
5. **Whether he repudiated *Notes on the Synthesis of Form*.** Sources disagree; the preface was not
   read `[S:7]`. The page stays silent either way.
6. **Whether the 1996 keynote was also published as a journal article.** It is commonly cited as an
   IEEE Software piece, and the page hosting the transcript makes no such claim `[S:22]`. Cite the
   keynote transcript; do not cite IEEE Software.
7. **Byline test on the Eisenman edge** — section 6.
8. **The 1968 paper's co-authors** are disputed between two records `[S:9]`.
9. Unverified frame candidates that a seat may reach for and that have no ledger line: piecemeal
   growth (*The Oregon Experiment*), the fifteen properties as a usable frame rather than a title,
   and "a pattern is a hypothesis." The third is nearly there on `[S:10]`'s "our current best guess"
   and needs the book's own framing to close.

---

## 10. Verification constraints, stated plainly

- **WebSearch was unavailable for the whole pass** (budget exhausted before it began). Discovery was
  limited to URLs I could name; verification was done at source in every case.
- **Wikipedia carries more of this ledger than is ideal** — `[S:1]` `[S:2]` `[S:3]` `[S:5]` `[S:6]`
  `[S:7]` `[S:8]` `[S:10]` `[S:11]` `[S:12]` `[S:13]` `[S:14]` `[S:18]` `[S:19]` `[S:20]` `[S:21]`.
  (`[S:12]` added to this list 2026-09-22 by the round 1 editor: the adversarial audit re-sourced it
  from one Wikipedia article to another, and this list was not re-counted, so it read fifteen where
  the ledger held sixteen. `inclusion_rationale` had taken its number from here.) The
  precedent exists (`[S:3]` on the Majors page is a Wikipedia line) but the concentration here is
  higher than on any page built so far, and one of those sources is flagged for neutrality `[S:13]`.
  The load-bearing claims — the borrowing, the author's own verdict, the critic — all rest on primary
  documents `[S:16]` `[S:17]` `[S:22]`–`[S:32]`. The biographical middle does not, and a recheck
  should replace the Berkeley dates, the CES founding year and the built-work years with an obituary
  of record or a Berkeley source. **Partly done on 2026-09-24: Alexander's own curriculum vitae at
  `https://www.patternlanguage.com/bios/vitae.htm` now carries the Berkeley appointment and his CES
  title as `[S:3a]`, and the 1968 byline as `[S:9a]`. It gives 1963-98 for the chair and an emeritus
  title from 1998, which contradicts Wikipedia's "almost 40 years" and its 2002 retirement, so the
  page states no end date. The vitae does not date the founding of the Center, and the built-work
  years are still unsourced.**
- **`katarxis3.com` is unreliable in both schemes.** https fails certificate validation; plain http
  answered on 2026-09-22 and returned 504 Gateway Time-out on 2026-09-24. The document was re-read
  on 2026-09-24 over https with verification disabled, and matched the earlier copy byte for byte in
  length. Any citation should expect a browser warning, and should not promise that the http form
  works.

---

## 11. Added during review round 1, 2026-09-22

**Fowler credits Alexander by name, and now has a ledger line.** Review seat 3 found that the Fowler
edge label asserts "he keeps the attribution attached and credits Alexander for the pattern-language
form by name" while its claims line cited `[S:24]` and `[S:26]`, both of which are Alexander's own
OOPSLA sentences and name nobody else. Fowler's "Writing Software Patterns" (his own site, dated
01 August 2006) was fetched and read: it names Alexander three times and says of pattern languages,
"The idea behind a pattern language comes again from Alexander." That is now `[S:34]` and the claims
line cites it first.

What `[S:34]` does **not** cover, and what a later round still has to settle: the same edge label
opens "Fowler runs the pattern form at industrial scale." No line on this ledger says anything about
the size of Fowler's own catalogue. It reads as characterisation rather than a discrete fact, which
is why it was left standing rather than cut, and it is recorded here so the judgment is visible
instead of implicit.

**The repudiation clause is gone, which is what section 9 item 5 asked for.** That item recorded
"Sources disagree; the preface was not read `[S:7]`. The page stays silent either way," and the page
did not stay silent: `body_of_work[4]` carried "Whether he later repudiated it is disputed and this
page takes no side." `[S:7]`'s URL was re-opened on 2026-09-22 and carries no repudiation, disavowal
or dispute of one; its "Alexander's later work" section describes a change of direction and its last
paragraph argues the works reconcile. The clause is cut. Sourcing a dispute needs both sides on file
and neither is.

**WebSearch was unavailable again in this round** (session budget exhausted, 200 of 200), so the two
verifications above were done with direct fetches of URLs already named. One seat-asserted claim
could not be checked at all for that reason, and it is recorded as unverified rather than as a fact:
see the round 1 editor's resolution notes under `_working/_council/2026-09-22/`.
