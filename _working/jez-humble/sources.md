# Jez Humble: verified sources

Stage 1 research pass, 2026-09-22, for candidate issue #37 (`Candidate: Jez Humble`, labels
`camila:candidate`, `queue:pulled`). The issue's case was treated as unverified throughout, per
`calibration.md`. The machine-checkable ledger is `facts.md`; the `[S:n]` IDs below point into it.

Research was done with targeted fetches from the main session. One limit on this pass is recorded
up front because it shapes what follows: the session's WebSearch budget (200 calls) was exhausted
partway through, so the last third of the pass ran on WebFetch against known URLs. The uptake
check, the antecedent checks and the book and career facts all completed. The search for a critic
of continuous delivery specifically, as distinct from a critic of *Accelerate*, did not. That is
the one gap, and it is flagged again below.

---

## Inbound claims: what the roster already publishes about him

`bun scripts/inbound-claims.ts jez-humble` returns no edges and no prose mentions, and five frame
credits. All five hold. None needed correcting, which is the first time that has happened at this
stage, and it is worth saying plainly rather than passing over.

| # | Page | Frame | Credit | Verdict |
|---|------|-------|--------|---------|
| 1 | Nicole Forsgren | DORA four key metrics (`distributed`) | Humble as "co-author *Accelerate*; *Continuous Delivery* lineage" | Holds |
| 2 | Nicole Forsgren | Change failure rate as quality proxy (`distributed`) | Humble as "co-author *Accelerate*" | Holds |
| 3 | Nicole Forsgren | Time to restore as operability (`distributed`) | Humble as "co-author *Accelerate*" | Holds |
| 4 | Nicole Forsgren | Throughput–stability non-tradeoff (`distributed`) | Humble as "co-author *Accelerate*" | Holds |
| 5 | Martin Fowler | Continuous integration (`original`) | Humble as "extended into Continuous Delivery" | Holds |

Claims 1 to 4 rest on the same verified fact: *Accelerate* is by Forsgren, Humble and Kim, IT
Revolution, 2018 [S:17]. The DORA team itself was founded by the same three people [S:18], so
`distributed` with Forsgren as `primary_author` is the right shape and the Humble credit inside it
is accurate. Claim 1's extra clause, the "*Continuous Delivery* lineage," is also supported: the
2010 book is his with Farley [S:3], and Fowler's own continuous integration article sends readers
to it for "the broader process of Continuous Delivery" [S:13].

Claim 5 holds **as stated about Humble**, and the frame it sits inside has a separate defect that
this research turned up and that the new page must not quietly inherit. See the next section.

### The one contradiction this pass found, and it is not about Humble

The Fowler page files `continuous-integration` as `attribution_kind: original` with
`primary_author: martin-fowler`, listing Kent Beck as a co-originator with the role "original XP
practice." Fowler's own article says something stronger than a co-originator role: "Continuous
Integration was developed as a practice by Kent Beck as part of Extreme Programming in the 1990s"
[S:13]. His acknowledgements open "First and foremost to Kent Beck." A frame whose own
`source_link` credits someone else with developing the practice should not be `original` to the
author of the article.

This is squarely the question issue #37 asks the Humble page to settle, and the honest answer is
that settling it corrects a neighbour rather than the new page. Beck has a page here and does not
carry the frame at all, so the fix has a place to land. Three things follow:

1. The Humble credit on that frame is correct and stays.
2. The `original` attribution on the Fowler page is a live claim contradicted by that page's own
   cited source, and correcting it belongs in this merge request's description, per the stage 3
   reconciliation rule.
3. Deciding whether Beck should hold the frame is a Council question, not a research one. Research
   can say only that the Fowler article does not support `original`.

---

## Uptake check, run first, and it passes by a wide margin

The skill puts this ahead of everything because it decides whether a Council is worth five seats.
The Saxe case failed it with every frame under thirteen months old and no outside use. Humble is
the opposite case, and the check is over quickly.

**Continuous delivery.** First dated artifact 2010-07-27, the book with Dave Farley [S:3]. Outside
use is dense and long-running: Fowler wrote a bliki entry for it in 2013 calling the book "the
foundation book on this topic" [S:10]; Wikipedia's article says the book "popularized the term"
[S:22]. Sixteen years old, used daily by people who have never read it.

**The deployment pipeline.** First dated artifact 2006-07, the Agile 2006 conference paper [S:4].
The Agile Alliance, a third party with no stake, put that paper on its practices timeline as "the
first conference article describing the core of continuous deployment" [S:6]. Fowler wrote a
separate bliki entry for the pattern in 2013 [S:11]. Twenty years old.

**Release decoupled from deploy.** First dated statement 2010-08-13, in his own post [S:7]. The
best uptake evidence on this page is a piece that does not name him: Pete Hodgson's feature-toggles
article on martinfowler.com in 2017 calls it "the Continuous Delivery principle of 'separating
[feature] release from [code] deployment'" and attributes it to nobody [S:14]. A frame that travels
without its author's name attached has finished travelling.

**The four DORA measures.** 2013 for the reports, 2018 for the book [S:17] [S:18]. Already live on
this site through the Forsgren page, which is a reason to keep them in the deep tier here rather
than a reason to count them again.

Verdict: **uptake_passes = true.** Every candidate frame is at least eight years old, three are
over fifteen, and all four have documented use by practitioners other than Humble. No Saxe risk.
Convening the inclusion Council is warranted.

---

## Corrections to candidate issue #37

The issue is in better shape than Fournier's (three errors) or Saxe's (six). Nothing it asserts is
false. What it gets wrong is attribution shape, and on a page about a man with four co-authored
books that is the failure mode that matters, exactly as the issue's own first Council question
predicted.

**1. One book is missing, and it is the one that carries him into Julie's field.**
The issue names *Continuous Delivery*, *Lean Enterprise* and *Accelerate*. There are four. *The
DevOps Handbook* (IT Revolution, 2016) is by Gene Kim, Jez Humble, Patrick Debois and John Willis,
with a second edition in 2021 adding Nicole Forsgren [S:16]. Two on-site consequences: John Allspaw
wrote the original foreword and Forsgren wrote the second edition's [S:16], so the book is a real
edge to two existing pages, not a bibliography line.

**2. "The deployment pipeline" is not his alone, and he says so himself.**
The issue lists it as vocabulary that may travel under his name. It travels, and it is
co-authored. Humble's own site: "The apparatus we used to perform these tasks ... became known as
_deployment pipelines_, which Dan North, Chris Read and I wrote up in a paper presented at the
Agile 2006 conference" [S:5]. The paper carries all three names on its title page [S:4], and the
Agile Alliance timeline records all three [S:6]. A page marking this frame `original` with
`primary_author: jez-humble` fails the byline test against a first-person source. It is
`co-authored`, with Dan North and Chris Read in `co_originators` and both names in the prose
wherever the term appears.

**3. "Continuous delivery" as a phrase predates the book by nine years.**
The Agile Manifesto's first principle, copyright 2001, reads "Our highest priority is to satisfy
the customer through early and continuous delivery of valuable software" [S:9]. Wikipedia's verb
for what the 2010 book did to the term is "popularized" [S:22], and Fowler's is "foundation book"
[S:10]. This is the "Simple Made Easy opens by quoting Dijkstra" check, and it lands the same way:
the attribution is `popularized` or `extended`, and `original` is not available. What is original
is the discipline the book defines, not the two words.

**4. The continuous delivery principles are explicitly borrowed, on his own site.**
His principles page credits W. Edwards Deming for "build quality in," Toyota's *jidoka* for
"computers perform repetitive tasks, people solve problems," and Taiichi Ohno and *kaizen* for
"relentlessly pursue continuous improvement" [S:8]. Anyone drafting these as Humble's principles is
contradicting the page they are citing. If they appear at all they are `extended`, in the deep
tier, with the lean lineage named.

**5. The CI lineage question can be settled, and the answer corrects the Fowler page.**
See the inbound-claims section above. The issue's structural argument for adding him holds. Its
implied expectation, that the correction lands on the new page, does not.

**6. Current role is missing and changes `status` and `active_years`.**
His own bio: co-founder and CTO of DORA, acquired by Google in 2018, and "He currently serves as a
member of technical staff at Anthropic" [S:1]. `status: alive-active`.

**7. Two things the issue does not mention that a drafter will reach for, and both are hedged.**
Blue-green deployment: Fowler credits the name to "some foggy combination of Daniel Terhorst-North
and Jez Humble" [S:12]. If the page carries it, the hedge carries with it. The "Jolt Award winner"
line on his own bio [S:1] gives no year, and this pass could only find 2011 in search results, so
it was left off. The adversarial audit closed it from a primary source: Fowler's book page carries
"Dr Dobbs: Jolt Excellence (2011)" [S:24], and the page may state the year.

---

## Frames, as research leaves them for the Council

Research does not choose the foreground set. What it can do is fix each frame's attribution before
a seat argues about placement.

| Candidate frame | Attribution research supports | First dated | Notes |
|---|---|---|---|
| Continuous delivery | `popularized`, co-originator Dave Farley | 2010-07-27 [S:3] | Phrase antecedent in the 2001 manifesto [S:9] [S:23]; "popularized" is Wikipedia's verb [S:22] |
| The deployment pipeline | `co-authored`, co-originators Dan North and Chris Read | 2006-07 [S:4] | First-person attribution by Humble [S:5] |
| Release decoupled from deploy | `original`, low confidence | 2010-08-13 [S:7] | No earlier credited premise found, but the antecedent search here was the one cut short by the search budget |
| Blue-green deployment | `co-authored`, co-originator Dan North, hedged | 2010-03-01 [S:12] | Fowler's own credit is "some foggy combination"; deep tier at most |
| CD principles (build quality in, small batches, jidoka, kaizen) | `extended`, lineage to Deming and Ohno | [S:8] | Probably not a frame; deep tier or omit |
| DORA four key metrics | `distributed`, `primary_author: nicole-forsgren` | 2018 [S:17] | Already published that way on her page; deep tier here, to avoid restating her page |

Dan North appears twice in that table and is already on the Forsgren page as a secondary `parallel`
edge with no page of his own. Two frame co-originations plus an existing edge is a stronger case
for him as a candidate than most of what is in the queue, and stage 8 should file him if the
Council does not.

---

## Critics

One verified critic, and a gap.

**Keunwoo Lee clears all three tests** [S:19]. Durable artifact: a long review essay on his own
site, dated 2022-06-07, not a social post and not a summary. Names the thinker: repeatedly, by name
("On Twitter, you can see *Accelerate* author J. Humble writing things like this"). Argues against
him: four stated grounds, that the metrics are "incomplete and sometimes circular," that "the
survey-based methodology is vulnerable to halo effects and other threats to validity," that "the
presentation of statistical correlations is sloppy and misleading," and that "the authors have
released neither the full survey questions nor the data gathered from them," concluding that "the
claim to have *scientifically validated* a set of superior software development practices seems
questionable." The intake pass recorded three and dropped the replication ground, which the
adversarial audit restored; it matters because replication is the ground the reply spends most
effort answering [S:20]. This is the shape the Forsgren failures were not: not a defender misfiled,
not a counterposition that never names him, not a missing artifact.

One thing for the drafter, since the last three Council errors all lived in this exact gap. Lee is
courteous: he writes "I believe that the authors are smart people who are trying their best" and
says he has tried to present the book "relatively sympathetically." Read in isolation those lines
look like a sympathetic essay, which is how a critique gets misfiled. They are civility wrapped
around a sustained argument that the book's central scientific claim does not hold. The verdict
sentence, not the courtesies, is the piece.

Two cautions on it, both for the Council rather than for the drafter.

First, **Lee critiques *Accelerate*, which is Forsgren-led work, and the Forsgren page carries no
critic edge at all.** Her page's Beck and North edges were both corrected to `parallel` precisely
because they defend or never name her. Adding Lee to the Humble page as the site's only DORA critic
leaves the page holding the measures with no critic and the co-author with one. That may be right,
since Lee names Humble and not Forsgren in the passages read, but it should be decided rather than
fallen into. It is also arguably a return-edge question for stage 4.

Second, **the reply has now been read, and it is not what the intake pass thought** [S:20]. Live
Medium returns 403 as `SKILL.md`'s gotcha says it will, but a Wayback capture serves the full text,
and the adversarial audit read it there. Three corrections follow, and the third is the one that
would have put a false sentence on the page.

The reply is **co-authored with Nicole Forsgren**. It publishes from Humble's Medium account and
Medium's author metadata names him alone, which is how the intake pass came to call it "a Humble
reply," but the article's own first line is "Jez Humble and Dr Nicole Forsgren." It argues in the
first-person plural throughout and refers to Humble in the third person wherever he appears as an
individual, including "the free software Jez wrote" and "On Jez's team at Google." Its "we" is not
Humble's own voice and the page must not quote it as such.

The **wording** the summary carried was incomplete: the actual list is "drives", "predicts", and
"impacts", and the sentence ends in a parenthetical about particle physics that the summary cut.

And the **frame was backwards**. The summary called this a concession. In the post it answers Lee's
statistics criticism, follows the authors' account of forming hypotheses before testing them, and is
followed by "we have been careful in our word choice." They are defending the vocabulary as chosen,
not conceding a limit. A limits sentence built on "Humble concedes" would have been contradicted by
its own source, and that sentence was one draft away from existing.

What the reply does offer for a limits section is an actual agreement, quoted at [S:25]: the authors
endorse Lee's "consider for yourself, from first principles, whether improvement along any given
axis is the most valuable use of your limited resources" and answer "That's correct," grounding it
in the theory of constraints and saying the book is written for people whose constraint is delivery.
That is usable, attributed to Humble and Forsgren jointly.

**The gap: no critic of continuous delivery itself was found.** The one critic on file attacks the
research programme, not the delivery practice. A page whose foreground is the pipeline and the
delivery discipline, carrying a critic who only engages the measurement work, has a limits section
pointed somewhere other than where its frames are. The search that would close this ran out of
budget. It should be re-run before the page ships rather than declared empty here.

---

## Where sources are weak

Recorded so the page stays vague on these rather than guessing.

- **Employment dates.** His own bio gives none [S:1]. Dated speaker bios give "got into IT in 2000"
  and "since 2004 ... ThoughtWorks and ThoughtWorks Studios," plus Principal Consultant and Product
  Manager for Go [S:21]. Nothing verified for the 18F years, the Chef years, or the post-2018 Google
  years. `active_years` should start from a verified artifact or from 2004, and the page should not
  attach dates to 18F or Google.
- **The degree.** His own site says a "degree in physics and philosophy from Oxford and a masters in
  ethnomusicology" [S:2]; a speaker bio says "a BA in Physics" [S:21]. Sources disagree, so the page
  uses his own wording and no abbreviation.
- **DORA's founding date and the acquisition date.** Wikipedia gives neither [S:18]; the 2018
  acquisition year rests on his own bio alone [S:1]. State the year, not a month.
- **The Jolt Award year. Now closed, 2011** [S:24]. Correction 7 left this unverified because his
  own bio gives the award without a year [S:1]. Fowler's book page for *Continuous Delivery* carries
  an Awards block reading "Dr Dobbs: Jolt Excellence (2011)," so the page may state the year.
- **The *Lean Enterprise* year is now the open one, not the Jolt year** [S:15]. The intake line said
  copyright 2015; the source it cites says no such thing, and catalogue records for that ISBN give
  2014, 2015 and 2020 against a first-publish year of 2014. O'Reilly's own catalogue page is not
  fetchable. The page states no year for this book until a publisher-primary source exists.
- **The Agile 2006 paper's page range is gone** [S:4]. The intake line gave pp. 113-118 and said the
  citation was read from the PDF. The PDF carries neither page numbers nor a DOI, and no
  bibliographic record has a range. The DOI and the author order were confirmed against Crossref.
- **[S:20] is now readable and is cited, with two constraints.** The intake line recorded it as a
  negative result, which was right at the time and wrong now: a Wayback capture serves the full
  text. The constraints are that the reply is co-authored with Nicole Forsgren and speaks of Humble
  in the third person, so its "we" is never his own voice, and that the passage the intake summary
  called a concession is a defence. See the critics section.

---

## Recommendation

**Proceed to the inclusion Council.** Uptake passes on every frame by years, not months. The
inbound claims all hold, which is rare and means the page starts without a reconciliation debt. The
issue's factual case survived verification with no errors, only attribution corrections, and those
corrections are the page's actual editorial problem: three of the six candidate frames are shared,
one is hedged by the person who named it, and one belongs to a neighbour's page already.

The two questions worth a seat's attention are the ones the issue itself raised. What does this
page hold that the Forsgren page does not, given that the measures are hers and the delivery
mechanism is his. And whether the continuous integration correction on the Fowler page ships in
this merge request or separately.
