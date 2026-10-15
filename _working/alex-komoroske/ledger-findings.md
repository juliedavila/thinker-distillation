# Alex Komoroske: ledger findings

Backfilled 2026-10-15 against the shipped page. Twelve of the twenty-one factual fields the gate
requires could not be mapped: five because the record says something different from the page
(contradicted), seven because no source was found for the claim (unsupported). Nine fields
are supported and mapped. Fact ids refer to `_working/alex-komoroske/facts.md`.

A note on reading these. Most of the gaps share one cause: the page was written from a synthesis
of Komoroske's ideas, and some of the lineage, dates and titles in that synthesis came from the
synthesis rather than from his own documents. The ideas themselves hold up well on the record.
Where the record differs, it usually differs on who said a thing first, when, or under what name.

## Contradicted

**body_of_work[0], "The Coordination Headwind Essay," essay, 2018** (also `further_in.start_here`
and the Fred Brooks page's "Brooks 1975 → Komoroske 2018").
The work is a slide deck, "Coordination Headwind: How Organizations Are Like Slime Molds," at
komoroske.com/slime-mold, and the deck carries no date (S:4). The earliest archive capture of that
address is 2021-10-22, and his Schelling-points essay of 2021-12-13 already refers to it as
"that deck" (S:9, S:19). No source found dates it to 2018. The record supports "slide deck, 2021."

**body_of_work[1], "On Schelling Points in Organizations," 2019.**
Medium dates the essay 2021-12-13 (S:9). The page's long read gives the right month already
("Medium, December 2021"). Separately, the page's `source_link` for this frame drops the
essay's id suffix and returns a Medium 404 (S:25).

**named_frames[3].attribution, "Gardener vs. architect," original.**
Two things differ. First, the pairing Komoroske uses is gardener and *builder*: "Focus less on
being a builder ... think of yourself more as a gardener" (S:8) and "Think gardener, not builder"
(S:21). Second, the architect-to-gardener contrast was in circulation before his work: Brian
Eno's "Composers as Gardeners" (Edge, 2011) is framed as "the shift from 'architect' to
'gardener'," and McChrystal's *Team of Teams* (2015) describes "leading like a gardener" (S:26,
S:27). This does not diminish what he did with the metaphor in platform work; it means the record
supports `extended`, with Eno or McChrystal as antecedents, and a display name of "Gardener vs.
builder."

**named_frames[4].attribution, "The heroics smell," original.**
The deck does argue that heroics are a symptom of the headwind and a poor response to it (S:7).
The phrase "heroics smell," and the gloss "if your system requires heroes to keep working, your
system is broken," were not found in his work. The underlying idea, that dependence on heroics
marks an immature process, appears in the SEI Capability Maturity Model in 1993, whose Level 1 is
"Initial (chaotic, ad hoc, individual heroics)" (S:28, S:29). His distinct contribution on the
record is the feedback loop: heroics add churn, churn raises the headwind, which demands more
heroics.

**background, employers and roles.**
The page says "Google Chrome and Salesforce platforms, Stripe Climate and identity." The bios
on the record name thirteen years at Google (Search, DoubleClick, leading Chrome's Open Web
Platform, Augmented Reality in Google Maps) and Stripe as Head of Corporate Strategy, then a
startup (S:3, S:20, S:22). No source names a Salesforce role or a Stripe Climate or identity role
(S:24). Listed as contradicted rather than unsupported because the Stripe role the record gives
is a different one from the page's. The "long arc of writing on Medium" is supported (S:2, S:20).

## Unsupported

**active_years, 2014 to present.**
The oldest dated public writing found is a Medium post of 2016-07-07, visible in a 2018 archive of
his profile (S:20). The homepage says the ideas began in undergrad and in web-standards work, with
no date (S:1). Nothing found places a start in 2014. "2016 to present" is what the record shows,
with the caveat that older posts may exist below what the archive captured.

**named_frames[0].attribution, "Coordination headwind," extended (from Brooks), and
named_frames[0].co_originators[0], Fred Brooks.**
Brooks's 1975 observation about communication overhead is verified (S:12), and the overlap with
the headwind is real. What the record does not show is Komoroske building on Brooks: the deck and
the Schelling essay never mention Brooks, *The Mythical Man-Month* or Brooks's Law, and searches
found no place he draws the line himself (S:4, S:13). On the record the term "coordination
headwind" is his own coinage, presented as emerging from his own agent-based model. The lineage
is a fair reader's observation, and the page can say so as the site's reading; it is not yet a
lineage on the record.

**adjacent_thinkers[0], Fred Brooks, antecedent.**
Same evidence as above (S:12, S:13). The first sentence of the edge label (Brooks named the cost
in 1975) holds. The second ("Komoroske generalized the same physics") is an inference, and the
gate requires an antecedent by the record. A `parallel` edge, or an antecedent edge labelled as
the site's reading, would fit what the record shows.

**adjacent_thinkers[4], Kauffman via Johnson, antecedent.**
"Adjacent possible" is Kauffman's term and Johnson popularized it in *Where Good Ideas Come
From* (2010) (S:17, S:18), so the frame's co-originator lines are supported and mapped. The edge
says Komoroske "borrows directly from Kauffman via Johnson's book." His essay on the idea and his
platforms deck use the term without crediting either, and a search found nothing linking him to
them (S:16, S:21). The route through Johnson is not on the record.

**body_of_work[2], "The Bramble / Slime Mold Essay."**
No separate essay by that name was found. The slime-mold piece is the Coordination Headwind deck
itself, whose subtitle is "How Organizations Are Like Slime Molds" (S:4), so this entry and
body_of_work[0] appear to describe one work. "Bramble bushes" appear in a different essay, "The
Doorbell in the Jungle," as a metaphor for friction in product demand (S:31).

**body_of_work[3], "Platform conference talks (Google, Stripe)."**
The record shows a 2015 Chrome Dev Summit leadership panel (S:22), the Gardening Platforms talk
at Summer of Protocols in 2023 (S:21), the O'Reilly AI Codecon opening talk in 2025 (S:23), and
many podcasts. No Stripe talk was found. An entry for "Gardening Platforms (deck and Summer of
Protocols talk, 2023)" would be supported as written.

## Outside the gate, worth a look

These fields are not on the gate's list, so nothing fails on them, but they read differently from
the source and Julie may want them in view.

- **The slime mold's role in the argument.** The page's `thesis`, `working_line` and long read
  present the slime mold as the remedy that most organizations fail to copy ("Most
  organizations work like the opposite of the slime mold"). The deck makes a related but
  different argument: many tech organizations already *are* slime molds, the headwind rises with
  "a more bottom up culture," and the advice is to accept that and lean into what slime molds do
  well (S:5). Both readings arrive at gardening rather than command, so the prescription survives;
  the description of where the headwind comes from is closer to the source if it follows the deck.
- **The Schelling gloss.** "Make the secure default the obvious one" is the site's application of
  the frame to security, which is a good one, but it is not in the essay (S:9, S:10). It could be
  marked as the site's reading.
- **"Komoroske borrows it explicitly" (Schelling).** Mapped as supported, with a nuance: the
  essay uses the eponymous term and Schelling's own Grand Central example, but does not name
  Thomas Schelling or cite *The Strategy of Conflict* (S:10, S:11).
- **The Tokyo slime-mold experiment.** Supported. The deck credits a 2010 Wired story rather than
  the paper; the paper is Tero et al., *Science* 327 (2010), first author Atsushi Tero (S:6, S:14).
  The co-originator slug `tero-atsushi` reverses the name order.
- **"Blog corpus on komoroske.com."** Mapped as supported: the Bits and Bobs notes corpus is
  reached at komoroske.com/bits-and-bobs, though it is hosted as a Google Doc (S:2, S:30).

## Other pages that make claims about him

From `bun scripts/inbound-claims.ts alex-komoroske`:

- **Fred Brooks page, return edge:** "The lineage is explicit; Komoroske attributes Brooks
  throughout. Read in this order: Brooks 1975 → Komoroske 2018." This disagrees with the record on
  both points. No attribution to Brooks was found in his work (S:4, S:13), and the headwind deck
  dates to 2021 on the record (S:19).
- **Nicole Forsgren page, `antecedent` edge, and her `further_in` mention of "Komoroske's
  coordination-headwind essay."** The edge is interpretive (headwind predicts what DORA measures)
  and does not claim either cited the other, which is fine as a reading. Two things to check: the
  work is a deck rather than an essay, and with the deck dated to 2021, Forsgren's DORA research
  may predate it, which would make "antecedent" a conceptual ordering rather than a historical
  one. Her dates were not verified in this pass.
- **David Woods page:** refers to "Komoroske's gardener-vs-architect frame." His own term is
  gardener versus builder (S:8, S:21).
- **Martin Fowler and Ray Dalio pages, `parallel` edges:** interpretive comparisons, no factual
  disagreement found.
- **Coordination Headwind concept page:** says Komoroske's generalization extends Brooks's
  intuition. Same lineage question as above; the overlap is real, a stated lineage was not found.

## Audit, 2026-10-15

An independent pass by a reviewer who did not write the ledger. Every line, S:1 through S:31, was
reopened against its source: the local copies under `_working/alex-komoroske/src/` for the decks,
the homepage and the two Medium essays, and fresh fetches for everything else (Lenny's episode
page, both Wikipedia articles on Schelling and Brooks, TEDx Tallinn, the Johnson and CMM articles,
Edge, Enlivening Edge, the Chrome Dev Summit page, "The Doorbell in the Jungle," the Wayback
captures and the Crossref record). Most lines held up well. The changes below are mostly
precision: places where a line said slightly more than its source, or left out a sentence that
bears on a field.

### Lines repaired

- **S:1.** Restored the homepage sentence "I've developed various versions of the argument in
  various contexts and forms over the years." It was left out, and it matters for dating, because
  it allows that the deck now online is not the first version.
- **S:9.** "Toy agent-based model" was a paraphrase. The essay says "toy model"; the "agent based"
  label is the homepage's own description of the essay. Both now quoted.
- **S:14.** The line linked the Crossref record to the Wired story by inference. The Wired story is
  now a line of its own (S:32), and it agrees: Science, Jan. 22, 2010, a team led by Nakagaki.
- **S:16.** The quoted phrase "almost certain to work" is not in the essay. The essay says "the set
  of next actions that you can take that will almost certainly work," introduced with "This is
  sometimes known as your adjacent possible." The list of outbound links was also incomplete
  (Glazkov's primer and a Goodreads page were missing). Neither change alters the finding that he
  credits no one for the term, though "sometimes known as" shows he presents it as existing usage.
- **S:18.** Removed a quoted gilesorr.com review that had no URL on the line, so a reader could not
  check it from the ledger. The Wikipedia quote, which carries the claim, remains.
- **S:19.** The line read the first archive capture (2021-10-22) as placing the deck "in late
  2021," which is the creation-date reading the line itself cautions against. It now says the deck
  was online by that date, and that an earlier version is possible on the homepage's own account.
- **S:20.** "The oldest posts visible" now says what the capture holds: three post records (2016,
  2016, 2018) on a paginated profile, so older posts are not ruled out. It also notes the 2015
  Chrome Dev Summit panel as the earliest dated public appearance, and a 2014 search that found
  nothing.
- **S:21.** Added the deck's opening contrast of "sleek, modern skyscrapers" with gardens, which is
  close to an architect image, while noting his paired word is still "builder."
- **S:27.** The URL redirects; it now points at the final address and names the review's author
  and date (Mike Pym, 2016-01-13). The quotes were confirmed there.
- **S:28 and S:29.** The CMM wording "Initial (chaotic, ad hoc, individual heroics)" was attributed
  to Paulk et al. (1993). It is Wikipedia's summary of the level. The 1993 technical report could
  not be retrieved (DTIC returned 403, the SEI copy 404), so the original phrasing is unverified.
  The antecedent stands on the record as an idea; the quotation is now labelled as a summary.
  S:28 also records two searches the audit added: the Bits and Bobs corpus (S:34) and a fresh web
  search for the gloss sentence and "heroics smell."
- **S:13.** Records that the audit repeated the Brooks search and extended it to Bits and Bobs,
  with the same result.
- **S:31.** Added the essay's publication date (2022-03-07).

### Lines added

- **S:32**, the Wired story behind the deck's image credit.
- **S:33**, Wikipedia on Stuart Kauffman (theoretical biologist; known for the adjacent possible),
  which supports the co-originator role "origin in evolutionary biology" more directly than the
  TEDx page alone.
- **S:34**, a search of the Bits and Bobs corpus, which the original pass named (S:30) but did not
  search. It is the largest body of his writing, so it was the most likely place for a credit to
  Brooks, Kauffman, Johnson or Schelling, or for the phrase "heroics smell." None turned up. It
  does contain "Think like a gardener, not a builder" again and a related heroics passage.
  Whether the mobile view holds the whole document was not established, so this is a strong
  negative rather than a complete one.

### Lines deleted

None. No line was found that its source fails to support once repaired.

### page-claims.md

- `named_frames[1].co_originators[0]` now also cites S:32.
- `named_frames[5].co_originators[0]` now also cites S:33.
- Every other mapping was checked against the field it supports and kept. Two notes for the
  record: `named_frames[5].co_originators[1]` ("popularized in *Where Good Ideas Come From*")
  rests on the book being a general-audience title that adopts and credits the term; no source
  uses the word "popularized." `body_of_work[4]` ("Blog corpus on komoroske.com") rests on a
  corpus reached through a komoroske.com address and hosted on Google Docs. Both are fair readings
  and both are noted here so nobody mistakes them for verbatim support.

### Findings reviewed

All twelve findings above were checked against the sources. None is disputed outright, and none
reflects poorly on the page's author: in each case the page's version is a plausible reading of
his work, and the record simply points somewhere slightly different. Two need a gentler label than
the one they carry:

- **body_of_work[0] is contradicted on type and unsupported on date, not contradicted on both.**
  The work is a deck, not an essay, which the record does contradict. On the year, the record shows
  no 2018 source and the deck online by October 2021, but the homepage says the argument went
  through "various versions ... over the years" (S:1). An earlier, undated version is a reasonable
  possibility the record does not rule out. "Slide deck, online by 2021" is what the record
  supports; "2021" as a creation year is a little stronger than the evidence.
- **active_years.** The finding's "2016 to present" is close. The record also shows a public
  Chrome Dev Summit panel in 2015 (S:22), so "2015 to present" is defensible if the field counts
  public appearances rather than writing.

The remaining findings hold as written. Two refinements: on the heroics frame, his own notes come
near the gloss ("the system secretly has a non-scalable, breaking point," S:34), which supports
the reading that the idea is his in substance even though the phrase and the originality claim
are not on the record; and on the Brooks lineage, the extended search (S:13, S:34) found no
credit, which leaves "a fair reader's observation" as the right description.

### Findings added

- **The Tokyo experiment's co-originator.** The page's slug `tero-atsushi` names the first author,
  which the paper supports (S:14). Wired describes the team as "led by Toshiyuki Nakagaki" (S:32),
  who is the last author and is often cited as the lead on Physarum work. The page is not wrong,
  but "Tero et al." or a Nakagaki mention may serve readers better. The slug's name order is
  already noted above.
- **Bits and Bobs was not searched in the original pass.** It is now (S:34). Nothing it contains
  changes a finding, but it confirms "gardener, not builder" as his consistent wording across the
  deck, the platforms deck, the podcast and his notes.
