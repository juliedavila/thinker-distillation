# John Allspaw: ledger findings

Backfilled on 2026-10-15 against the page as shipped (last_updated 2026-05-25). Each factual claim
was treated as a hypothesis and tested against the record before any support was looked for. Fact
ids refer to `facts.md` in this folder.

The gate fails on four fields: `active_years`, `background`, `body_of_work[3]` and
`body_of_work[4]`. All four are contradicted by the sources. (The 2026-10-15 audit adds a fifth, `named_frames[2].co_originators[0]`; see "Audit, 2026-10-15" below.) Nothing was left unsupported only
because a search came up empty: each of these four has a source saying something different.

Most of these look like the ordinary drift of a page written from memory before sources were
required. None of them changes what the page argues about Allspaw's ideas. They are about his
dates, degree, and the authorship of two artifacts.

## Contradicted fields (the gate fails on these)

### `active_years`

- **Page:** `2003–present`.
- **Source:** his O'Reilly bio says he moved into web infrastructure in 1997, at Salon, InfoWorld,
  Friendster and Flickr, after earlier work running vehicle crash simulations for the U.S.
  government [S:1]. Adaptive Capacity Labs says he has worked in software systems engineering and
  operations "for over twenty years" [S:3]. No source found gives 2003 as a start date.
- **Suggested correction:** `1997–present`, or an earlier start if the crash-simulation work counts.

### `background`

The paragraph has five separate claims. Two hold and three do not.

1. **"SVP of Infrastructure and Operations at Etsy (2010–2015)."** The title has support, but the
   dates do not, and the paragraph leaves out his last and most senior Etsy role.
   - He joined Etsy in November 2009 [S:32], [S:7].
   - Titles reported along the way include SVP of technical operations in April 2015 [S:4] and SVP
     of Infrastructure and Operations [S:1].
   - He was appointed CTO in September 2015 [S:5] and left in May 2017, with the CEO, in a
     leadership change [S:6], [S:7].
   - Suggested wording: "joined Etsy in 2009, led its infrastructure and operations, and was CTO
     from 2015 to 2017."
2. **"Co-author of *Web Operations* with Jesse Robbins."** The book is a collection of contributed
   chapters that the two edited. O'Reilly's release says "Edited by John Allspaw & Jesse Robbins"
   [S:11]. The page's own `body_of_work[1]` note says "Edited with Jesse Robbins", which is right,
   so the page currently disagrees with itself. The Richard Cook page also says "edited".
3. **"PhD candidate at Lund University under Sidney Dekker."** The record shows a one-year master's
   degree. Lund's student-paper record lists his 2015 thesis, *Trade-Offs Under Pressure*, as
   "H1 - Master's Degree (One Year)", with "Anthony John Smoker" as supervisor [S:9]. Every bio
   found, including his own, gives an MSc and no doctorate. A targeted search for a PhD candidacy
   or a Dekker supervision found nothing [S:10]. It is possible the page reflects a later doctoral
   enrolment that has left no public trace, but nothing found supports it. Suggested wording: "MSc
   in Human Factors and Systems Safety from Lund University (2015)."
4. **"Co-founded Adaptive Capacity Labs with Richard Cook and David Woods in 2017."** Holds
   [S:3], [S:7], [S:8].
5. **"Hosts the *Learning From Incidents* community alongside Nora Jones."** Nora Jones launched
   the community in November 2019 [S:30]. The only role found for Allspaw is speaker, including
   the closing keynote at the first LFI conference in 2023. Nothing found shows him as host or
   co-host. The LFI site could not be reached from this session, so its own about page was not
   read [S:30]. Suggested wording: "a frequent voice in the *Learning From Incidents* community
   that Nora Jones founded."

### `body_of_work[3]` (Adaptive Capacity Labs blog + talks)

- **Page:** the editorial note lists "the *Howie* guide to incident analysis (co-authored with Nora
  Jones)" as part of this corpus.
- **Source:**
  - The guide's cover names three authors: Laura Maguire, Nora Jones and Vanessa Huerta Granda. It
    came out of Jeli, not Adaptive Capacity Labs.
  - Allspaw is thanked among the reviewers and cited as a resource [S:28].
- **The same mistake appears in three more places:** the Nora Jones edge label ("co-author of the
  *Howie* method"), `further_in.then_read` ("The *Howie* incident-analysis guide (with Nora
  Jones)"), and, by implication, the `body_of_work[3]` item itself. The blog and talks exist
  [S:3], [S:20], [S:24]. The fix is to move Howie out of his body of work, or to describe it as a
  guide he reviewed.

### `body_of_work[4]` (*The Verica Open Incident Database (VOID)*: annual reports)

- **Page:** lists the VOID reports as part of Allspaw's body of work, described as a "companion
  artifact to the Adaptive Capacity Labs case-study work."
- **Source:**
  - The VOID is Verica's project, presented by Courtney Nash.
  - Allspaw appears in her slides only as the source of one quotation [S:31].
  - No source names him or Adaptive Capacity Labs as an author or partner of the reports.
- **Suggestion:** drop the item, or move the VOID to a related-reading list where it carries no
  claim of authorship.

## Fields that pass, with caveats worth knowing

- **`named_frames[1]` (above the line / below the line), attribution kind.** The page files this
  as `popularized` with Woods as primary author. The record shows the frame was set out in the
  STELLA report, which is cited as Woods's and was prepared under his supervision [S:17]. Woods and
  Cook then presented it at Velocity in October 2017 [S:19]. Allspaw explicitly credits his
  colleagues [S:20].
  - Woods as primary author holds.
  - Whether `popularized` or `original` is the better kind is a labelling question the record does
    not settle, because the workshop's participants are deliberately unnamed.
  - The Cook role says "ACM Queue, 2020". The Queue bibliography dates that issue Nov/Dec 2019 and
    recorded it in February 2020 [S:21], so "2020" matches the online date, not the cover date.
- **`named_frames[3]` (adaptive capacity).** Woods presents adaptive capacity as
  resilience-engineering theory and does not claim to have coined it [S:23]. The term is widely
  used in ecology and climate adaptation, and this backfill did not search those older uses. That
  matters only if the role "original resilience-engineering theory" is read as coinage.
- **`named_frames[4]` (work-as-imagined vs. work-as-done), Allspaw's role.** He states the gap in
  his own words in 2012 [S:13] and again in a 2018 post title [S:29]. No Allspaw text was found
  using the paired terms by name [S:27]. "Carried into ops/SRE practice" holds for the idea; the
  named pair is not shown in the record.
  - One search summary attributed a supporting quote to a 2012 Thoughtworks post. Fetching the
    post showed the quote was not there, so it was discarded [S:27].
- **`named_frames[0]` (blameless postmortem).** "Popularized" holds as far as citation goes.
  Google's SRE book cites his post for the postmortem concept [S:14], and InfoQ treats it as the
  reference text [S:15]. The SRE book itself says blameless culture began in healthcare and
  avionics, which agrees with `popularized` and with no claim of coinage.

## Outside the gate: page text the sources contradict

The gate does not check these fields, but the same sources contradict them.

- **`working_line`:** "Blame is the enemy of safety. (The Etsy postmortem doctrine, 2012.)" The
  sentence does not appear in the 2012 post [S:12]. It reads as a quotation, so it should either
  become a sentence the post actually contains or lose the attribution. One candidate from the
  post: "We believe that this detail is paramount to improving safety at Etsy."
- **"twelve pages" / "twelve-page essay"** (`still_load_bearing_despite`, `further_in.start_here`):
  the post is a blog entry of about 1,400 words [S:12] (corrected from 1,300 by the 2026-10-15 audit).
- **Sidney Dekker edge label:** "Allspaw's PhD advisor at Lund." Same problem as `background` item
  3: the thesis was a master's, supervised by Anthony Smoker [S:9].
- **Nora Jones edge label** and **`further_in.then_read`:** Howie co-authorship, as under
  `body_of_work[3]` [S:28].
- **Gap, not error:** *The Art of Capacity Planning* (O'Reilly, 2009), his first book, is in every
  bio [S:1], [S:2], [S:3] and is missing from `body_of_work`.

## Inbound claims from other pages

`bun scripts/inbound-claims.ts john-allspaw` lists nine edges and one frame credit. All but two
agree with what this backfill found.

- **Sidney Dekker → Allspaw (`extends`):** "Dekker's PhD student at Lund." The Lund record shows a
  master's student supervised by Anthony Smoker [S:9], [S:10]. This is the same error as this
  page's `background`, so it is now published in two places. The fix belongs on both pages in the
  same merge request. Dekker's influence on the 2012 post is real and is named in the post [S:12],
  so the edge itself can stay; only the supervision claim goes.
- **Nicole Forsgren → Allspaw (`parallel`)**, and this page's own Forsgren edge: both say
  resilience engineering and DORA "converge" on how fast a team recovers. Allspaw's own quoted view
  is more cautious about duration as a measure: "Two incidents of the same length can have
  dramatically different levels of surprise and uncertainty" [S:31]. This is not a factual error
  the gate would catch. A fairer framing would say the two traditions share an interest in
  recovery while differing on whether time-to-restore captures it. That presents Forsgren's view
  and Allspaw's side by side and judges neither.
- **Agree:**
  - Richard Cook's edge says Allspaw edited the 2010 book with Robbins, presented the line of
    representation in 2017 and credited the STELLA report in 2019 [S:11], [S:20].
  - Erik Hollnagel's edge cites the 2015 Lund thesis [S:9].
  - The Jez Humble and Gene Kim edges say he wrote the DevOps Handbook foreword [S:3].
  - The Adaptive Capacity Labs co-founding claims on the Cook and Woods pages hold [S:3], [S:8].
- **Frame credit, worth reconciling:** Dekker's page files work-as-imagined vs. work-as-done with
  Dekker as primary author, and this page files it with Hollnagel. Hollnagel's own account puts the
  origin in French ergonomics and says Dekker mentioned it in the first resilience-engineering book
  [S:25]. The two pages should agree on one primary author.

## Audit, 2026-10-15

An independent pass over the backfill. Every cited URL was re-fetched (copies under
`_working/john-allspaw/audit/`), and every line behind an attribution, a co-originator role, a
date or a career fact was reopened: [S:1] through [S:32], with [S:8] read on a second attempt and
[S:10]'s SKYbrary page blocked by a bot challenge. One web search was run, for the LFI keynote.

### Lines repaired

- **[S:25] put Hollnagel's words in Hebert's mouth.** The "renaissance with Resilience Engineering"
  and "Dekker mentioned it in his chapter in the first RE book" wording comes from Hollnagel's own
  quoted reply. The line now says so. This matters for the frame credit: by his own account,
  Hollnagel places an earlier English use of the pair with Dekker.
- **[S:26] carried an inference written to fit the page.** "Widely circulated ... which supports
  'popularized'" is not in the white paper. The line now records what the document shows
  (September 2013, Hollnagel first-listed, a section on the pair, 19 uses) and says that
  "popularized" is the page's judgment.
- **[S:14] cited the bibliography URL for quotations that sit on the chapter page.** The URL now
  points to the postmortem chapter, and the line names where the bibliography entries live.
- **[S:16] claimed a 2012 second edition** that the catalogue record at its URL does not show.
  Dropped. Ashgate 2007 and the subtitle hold.
- **[S:21] took its 21 January 2020 date from another ledger** and did not say so. It now cites
  the Richard Cook ledger as the source of that date.
- **[S:12] word count:** about 1,400 words in the archived body, not 1,300. The point (a blog
  post, not twelve pages) stands.
- **[S:28]:** "now hosted by PagerDuty" has no support in the PDF and is gone.
- **[S:30], [S:31]:** search-derived details (the 2023 keynote; the "VOID, Indeed, Jeli" credit)
  are now marked as not at the cited URL. The keynote has its own source line, [S:34].
- **[S:5]:** "after seven years" before September 2015 points to 2008. A note now flags the
  tension with [S:32] and [S:7]. The finding that he joined in late 2009 still holds on [S:32].
- **[S:10]:** notes that the SKYbrary page could not be re-read.
- **[S:22]:** notes that the SNAFUcatchers pointer (April 2018) is later than the post it links.

### Lines added

- **[S:33]** Allspaw's Medium post "Dark Debt", dated 2017-11-27, an excerpt from the report that
  claims no credit for the term.
- **[S:34]** the attendee write-up of the 2023 LFI conference that records his closing keynote.

### Mapping changes in page-claims.md

- **`named_frames[2].co_originators[0]` is now unmapped and contradicted.** The role says he
  "explained the term to practitioners from 2018". His own post explaining it is dated
  2017-11-27 [S:33]; the April 2018 pointer [S:22] came after it. Suggested correction: "from
  2017". The backfill had mapped [S:22], which shows a 2018 pointer but not a 2018 start.
- **`named_frames[4].co_originators[1]` no longer cites [S:27].** [S:27] is a search that came up
  empty for the named pair, so it qualifies the role and does not support it. [S:13] and [S:29]
  carry the role on their own. [S:27] stays on the ledger as the search record and is now unused.

### Findings checked

- **Disputed: none.** Each contradicted field was re-tested against its source and the
  contradiction holds: the 1997 start [S:1], the master's under Smoker [S:9], "Edited by" [S:11],
  the CTO dates [S:5], [S:6], the Howie cover byline [S:28], and Allspaw's single quotation in the
  VOID slides [S:31].
- **Added: the dark-debt role date**, above.
- **Added, a caveat for `named_frames[4]`:** two mapped roles still pass, but on softer ground than
  the backfill implied. Hollnagel's "popularized" rests on his advancing the pair in a 2013
  safety-management white paper [S:26]. His own account [S:25] credits Dekker with an earlier
  English use in 2006. This strengthens the existing note under "Inbound claims" that the
  Hollnagel and Dekker pages should agree on one primary author. It does not show the page wrong:
  Hollnagel and Dekker each have a fair claim to carrying the pair, and the page can say so.
- **Kept as written:** the `named_frames[1]` labelling question, the `named_frames[3]` coinage
  caveat, and the Forsgren framing note.
