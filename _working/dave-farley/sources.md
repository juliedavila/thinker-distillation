# Dave Farley: research record (stage 1)

Candidate issue #40. Researched 2026-10-09 in a pipeline sandbox. The ledger is `facts.md`; this
file is the prose a human reads. Every `[S:n]` below is a line there. Web searches ran from the main
session; no search returned the cap message.

## Verdict up front

**Uptake check passes, and the recommendation is proceed.** Farley clears the bar on more than the
2010 co-authorship, and the strongest piece of independent record was not in the issue at all: the
deployment pipeline. Humble's own 2010 post credits Farley and Mark Rickmeier with the idea in 2004
[S:19], Farley's single-author 2007 ThoughtWorks Studios paper uses the term "Deployment Pipeline"
for the gated release-candidate model [S:18], and Farley says in 2021 that he coined the term
[S:21]. That record also means **a live page here is wrong**: the Humble page's deployment-pipeline
gloss says the 2006 Humble, Read and North paper is the first to describe it, and both live
deployment-pipeline frames (Humble and Dan North pages) omit Farley from `co_originators`. Details
under "Inbound claims", item 13.

## Inbound claims (`bun scripts/inbound-claims.ts dave-farley`)

The script printed one edge, three frame credits and prose mentions on two pages. Reconciled one by
one; every mention was read in the page file, not just matched.

1. **Jez Humble → Dave Farley, `parallel`, primary.** "Co-author of *Continuous Delivery* (2010). The
   discipline described on this page is the book's, and the book is equally his, including the
   release-versus-deploy distinction that Humble's own post attributes back to it." **Holds.** Byline
   [S:4] [S:10]; Humble's 2010 post says "As we say in the book" (Humble ledger [S:7]). Note: the edge
   is accurate as far as it goes and understates the record, since Humble's own February 2010 post
   credits Farley with the pipeline idea [S:19].
2. **Fowler's "Continuous integration" frame credits Farley "extended into Continuous Delivery."**
   **Holds.** Fowler's CI article sends readers to "Jez Humble and Dave Farley's book" (Humble ledger
   [S:13]), and Farley's own 2007 paper is subtitled "Extending the range of Continuous Integration"
   [S:18], which supports the role more directly than the book does.
3. **Humble's "Continuous delivery" frame (popularized), Farley as co-author of the 2010 book "where
   the discipline is defined."** **Holds** [S:10].
4. **Humble's "Release decoupled from deploy" frame (co-authored), Farley as co-author.** **Holds**,
   on the same basis as item 1.
5. **Fowler `body_of_work[3].editorial_note`:** "Read alongside Humble + Farley's *Continuous
   Delivery*, for which Fowler wrote the foreword." **Holds.** The publisher's sample PDF is headed
   "Foreword by Martin Fowler" [S:10].
6. **Fowler `further_in.if_you_want_breadth`:** "Humble + Farley's *Continuous Delivery*." **Holds**;
   byline order matches the CIP data [S:4].
7. **Humble `thirty_second_take`:** "The 2010 book with Dave Farley turned it into a discipline." **Holds.**
   The same field says the 2006 paper "called that route a deployment production line; the name the
   industry kept is the deployment pipeline." That is true and names no one, so it does not conflict;
   but see item 13.
8. **Humble `body_of_work[0].editorial_note`:** "Written with Dave Farley and published in Fowler's
   signature series, and a Jolt Excellence award winner in 2011." **Holds** (Humble ledger [S:3], [S:24]).
9. **Humble `reading`:** "Dave Farley on the book." **Holds.**
10. **Humble `further_in.then_read[2]`:** "*Continuous Delivery* (2010, with Dave Farley)." **Holds.**
11. **Humble "Continuous delivery" frame gloss:** "What the 2010 book with Dave Farley added is the
    discipline it defines." **Holds.**
12. **Humble → Martin Fowler edge label:** Fowler's CI article "sends readers to Humble and Farley's
    book." **Holds** (Humble ledger [S:13]).
13. **Not printed by the script, because it never names Farley, and contradicted by this research.**
    The Humble page's `deployment-pipeline` frame gloss reads: "The paper that first describes it is
    by Humble, Chris Read and Dan North ... The paper calls it a deployment production line, and the
    name that stuck arrived later." `co_originators` lists Read and North only. The Dan North page's
    copy of the same frame lists the same two. Against it:
    - Humble, 2010-02-02, first person: "Dave, along with Mark Rickmeier, came up with the idea of
      deployment pipelines back in 2004," first documented publicly "in 2005 (in a blog entry by our
      colleague Sam Newman)" [S:19].
    - Newman's own history dates his "build pipeline" posts to January and February 2005, and says
      Chris Read, one of the 2006 co-authors, was one of the two people who told him he was "perhaps
      the first person to document the concept" [S:20].
    - Farley's 2007 paper names the model "a Deployment Pipeline" [S:18]; he says in 2021 he invented
      the term [S:21].

    So "first describes it" is false on Humble's own word, and the frame omits the person Humble
    credits with the idea. "The name that stuck arrived later" is consistent with the record (the
    term is in Farley's 2007 paper; the 2006 paper said "production line"). **This goes at the top of
    the merge request.** The cheapest consistent state is to narrow the Humble gloss to "the first
    conference paper" or "an early write-up," add Farley to `co_originators` on both live copies of
    the frame, and keep the naming claim attributed to Farley himself. Rickmeier and Newman have no
    pages; they belong in the gloss, not in `co_originators` slugs. Whether `primary_author` should
    stay `jez-humble` is a choice for Julie (calibration: one primary author per frame, and the two
    live holders already agree on `jez-humble`); the record supports Farley at least as well, and I
    would not change it without her.

## Corrections to the candidate issue

1. **"the author of a second book."** There are three books after 2010, not one: *Modern Software
   Engineering* (Addison-Wesley, 2021-12-10, sole author) [S:12], *Continuous Delivery Pipelines*
   (Leanpub, self-published, first date not established) [S:16], and *The Software Developers'
   Guidebook* (Leanpub, 2025, with Bernard McCarty as editor) [S:17]. Leanpub also lists a title
   called *The Engineering Room*; nothing about it was verified and the page should not name it.
2. **"a long-running YouTube channel."** It launched in April 2020 [S:6], about five and a half years
   ago. "Long-running" by YouTube standards, not by this site's; the page should date it.
3. **"kept publishing under his own name for more than a decade after the book."** Half right. His
   solo book output starts in 2021 [S:12]. Between 2010 and 2021 the record is co-authored: the
   Disruptor paper (2011, five authors, Thompson first) [S:7] and the Reactive Manifesto v2.0 (2014,
   four authors) [S:23]. And his best independent artifact predates the 2010 book: the 2007
   pipeline paper [S:18].
4. **Education is not established.** One search summary credited Farley with an Oxford BA in Physics
   and Philosophy and an SOAS MMus in Ethnomusicology. That is Jez Humble's education, printed in
   Humble's bio in the 2011 InfoQ article [S:3]. Nothing on the page may give Farley a degree.
5. **"British"** is unverified. Nothing read states his nationality; the CIP data gives a birth year
   (1959) only [S:4]. Every employer named is London-based [S:1] [S:3], which is not the same thing.
6. **"Whether any vocabulary is his rather than the book's."** Yes, three candidates, with uptake
   (next section), and one, the deployment pipeline, is credited to him by his co-author.
7. **Not in the issue:** LMAX and the Disruptor. He was Head of Software Development at LMAX [S:1]
   [S:2], is second of five authors on the 2011 Disruptor paper [S:7], and with Thompson walked Fowler
   through the LMAX architecture for Fowler's 2011 article [S:8]. The Duke's Choice award was LMAX's,
   collected by Trisha Gee [S:9]; his bios list him as a winner [S:5]. No dates for the LMAX tenure
   were found, only the bound that he was there by May 2011 [S:7] and at ThoughtWorks in 2007 [S:18].

## Uptake check (run first)

| Candidate frame | First date | Outside use | Antecedents found |
|---|---|---|---|
| Deployment pipeline | Idea 2004 per Humble [S:19]; term in print 2007 [S:18] | Humble 2010 [S:19], Fowler bliki 2013 [S:22], the industry at large | Newman's "build pipeline," Jan 2005 [S:20]; Humble, Read and North's "deployment production line," 2006 (Humble ledger [S:4]); Fowler and Foemmel's CI paper behind Newman's [S:20] |
| Continuous delivery (co-authored, filed `popularized` on Humble) | 2010 [S:10] | Fowler calls the book "the foundation book" (Humble ledger [S:10]) | Agile Manifesto phrase, 2001 (Humble ledger) |
| Optimize for learning / optimize for managing complexity | 2021-12-10 [S:12] [S:13] | Patrick Kua, 2024 [S:25]; other reviews [S:28] | Components are older and the book cites some: Hamilton and the 1968 NATO conference for the term, Parnas, Nygard on coupling [S:14]; measures from *Accelerate*, credited [S:15]. The pairing and the definition sentence are what is his; no search was run for an earlier statement of the two-part split, so no firstness claim |
| Four-layer acceptance tests (spec, DSL, protocol driver, SUT) | Not established | Chris James, *Learn Go with Tests* [S:26] | The 2010 book's application driver layer and window driver pattern [S:11]; Fowler's window driver is likely older and was not checked |
| Reactive Manifesto v2.0 (co-authored) | 2014-09-16 [S:23] | Widely signed; not a Farley frame alone | v1.0, July 2013, no author named in its text [S:24] |

**Result:** passes. Two frames are more than two years old with outside use, and the 2021 frame has
named outside use at about two years. This is not the Saxe case.

**Antecedent and opening checks.** The 2007 paper credits no one for the model and opens on CI
being "misnamed" as continuous build [S:18]. The 2010 book's term sidebar says "we" and names no
one [S:11]. *Modern Software Engineering* is built on cited predecessors (Hamilton, NATO 1968,
Parnas, Nygard, Forsgren and co-authors) [S:14] [S:15]; the opening of chapter 1 was not in the
sample and was not read, so what it credits is open.

## Critics

**Mark Seemann, 2023, on the pull-request argument: a valid `critiques` edge** [S:27]. Durable
artifact (essay on his blog); names Farley repeatedly; argues against him ("I find it flawed").
Scope: Seemann attacks the argument from origin, says pull requests "are often misused," and
concedes his counter-examples do not show pull requests are good. A label must say it targets the
argument and not the trunk-based position as a whole. Seemann has no page here, so the edge is
`deep` or `secondary`, not `primary`.

Rejected: James Burt (2022) and Quentin Lintz (2024) reviews are favourable [S:28]; Patrick Kua's
review is favourable with one shared caveat about coupling advice [S:25]; LinkedIn and dev.to
replies to the pull-request video are social posts or comment threads and fail the durable-artifact
test. No critic of *Modern Software Engineering*'s engineering-as-science thesis was found in a
durable artifact naming him; one search summary described such criticism without a source, and
nothing was recorded from it.

## Attribution traps for drafting

- Farley's priority claims are his: "I invented the term" [S:21] and Leanpub's "inventor of the
  deployment pipeline concept" [S:16] are sales copy and self-description. The independent support
  is Humble's 2010 credit [S:19], and it credits Rickmeier alongside him. Never print "invented" or
  "coined" in site voice.
- Reactive Manifesto: one of four authors of v2.0 [S:23]. His company page says "Author of the
  Reactive Manifesto" [S:5]; do not repeat it.
- Disruptor: Thompson first of five [S:7]; Fowler names three creators [S:8]. The award was LMAX's [S:9].
- *Continuous Delivery*: Humble first; no possessives ("Farley's *Continuous Delivery*").
- *Modern Software Engineering*: sole author, foreword by Trisha Gee [S:13].
- Stability and throughput are *Accelerate*'s, and he says so [S:15]; any Forsgren edge is
  `extends` from him to her, not a frame of his.
- Self-described early agile adoption "from the early 1990s" [S:1] is his account; attribute it.

## Open questions

- LMAX tenure dates and the date he left ThoughtWorks: not found.
- First date of the four-layer acceptance-test formulation, and whether Fowler's window driver
  precedes the 2010 book's version.
- Whether the *Modern Software Engineering* chapter 1 opening credits a premise.
- Whether Julie wants Farley as `primary_author` of `deployment-pipeline`, given Humble's own credit.
- What the page says that Humble's does not (the issue's own question): the answer the record
  supports is the 2004 to 2007 pipeline origin, LMAX, and the 2021 engineering book.

## Added at drafting (stage 3, 2026-10-09)

Five lines added to `facts.md` while drafting, each from a document fetched this session:

- [S:29] Humble's August 2010 post, for the deploy/release distinction being stated "in the book"
  (needed for the deep `release-decoupled-from-deploy` frame on this page).
- [S:30] The Agile Manifesto principles, for the phrase "continuous delivery" predating the book.
- [S:31] Wikipedia's "popularized the term," the verb behind the `popularized` filing that the live
  Humble frame already uses.
- [S:32] **Open question closed.** Fowler's "Window Driver" is dated 26 August 2004, six years before
  the 2010 book's window driver section. The four-layer frame's lineage therefore names Fowler's
  pattern as well as the co-authored book. Whether the book drew on Fowler's draft is not recorded,
  so the gloss says only that the pattern is older.
- [S:33] Beck's *Tidy First?* subtitle, for the convergence Seat 5 named. No route between Beck and
  Farley on the word "empirical" was found; the edge says the routes are unrecorded.

Inclusion Council (5 ACCEPT) split three to two on filing the deployment pipeline `co-authored` or
`distributed`. The page files it `distributed`, following SCHEMA section 2 ("a frame that came from
a team or a movement" is `distributed` with `co_originators`), since the record names six people (Farley, Rickmeier, Newman, Humble,
Read and North) across 2004 to 2007. `primary_author` stays `jez-humble` to match both live
holders, and the choice goes to Julie.
