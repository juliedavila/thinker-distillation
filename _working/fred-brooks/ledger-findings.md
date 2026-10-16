# Fred Brooks: ledger findings

Backfilled on 2026-10-15 against the shipped page `src/content/thinkers/fred-brooks.md`. Each
factual claim was treated as a hypothesis and tested against the record. Five fields the gate
requires could not be mapped: four because a source says something different from the page, and
one because no source could be found. The gate fails on exactly those five, which is the expected
honest result. Most of the page held up well: the dates of the books, the essay, Brooks's Law,
conceptual integrity, the second-system effect and the no-silver-bullet claim all check out
against Brooks's own text.

## Contradicted

### active_years

- **Page says:** `1956–2022`.
- **Source says:** He joined IBM in 1956 [S:1], and 2022 is the year he died [S:1]. IEEE Spectrum's
  obituary says he "retired from teaching in 2013" and "was still active in the university's
  research program ... until 2020" [S:7]. No source found records work in 2021 or 2022.
- **Plain reading:** the end of the span is his death year, not the end of his working life.
  `1956–2020` matches the record.

### background

Most of this field holds: born 1931 in Durham and died 2022 in Chapel Hill [S:1]; project manager
for System/360 hardware and manager of the OS/360 software [S:4] [S:30]; founded the UNC department
in 1964 [S:3] [S:8]; Turing Award in 1999 [S:3]. Two clauses do not hold.

- **Page says:** "Left IBM in 1964 to found the Computer Science department".
  **Source says:** ACM lists his IBM years as "1956 – 1965" and UNC "from 1964" [S:1]. The years
  overlap: he founded the department in 1964 and left IBM in 1965.
- **Page says:** "where he taught and wrote until his death."
  **Source says:** he "retired from teaching in 2013" and was active in research until 2020 [S:7];
  Wikipedia gives his retirement as 2015 [S:5]. Either way, he did not teach until his death.
- **Worth a look, not a contradiction:** "at the time the largest software project ever attempted."
  IEEE Spectrum says OS/360 was "the world's largest software project at the time" [S:7]. ACM is
  more careful: "perhaps the largest operating system project of its time" [S:2]. The sources
  differ on how certain to be, so a hedged wording would be safer.

### named_frames[2].attribution (Essential vs. accidental complexity, marked `original`)

- **Page says:** `attribution_kind: original`, by Brooks alone.
- **Source says:** Brooks credits two antecedents himself. The essay reads "Following Aristotle, I
  divide them into essence ... and accidents" [S:15]. The preface to the 1995 edition says the
  analysis "was inspired by Nancy Greenwood Brooks, who used such analysis in a paper on Suzuki
  violin pedagogy" [S:14]. The antecedent search is recorded at [S:16].
- **Plain reading:** applying the distinction to software is Brooks's contribution, and the
  distinction itself is older, as he said. The schema's rule for a frame the thinker built on is
  `extended` with the originator in `co_originators`.

### named_frames[5].attribution (The surgical team, marked `original`)

- **Page says:** `attribution_kind: original`, by Brooks alone, and the gloss calls it "the
  prescription that came with Brooks's Law".
- **Source says:** the central section of chapter 3 is titled "Mills's Proposal" [S:23]. Wikipedia
  says Brooks describes the chief programmer team "as proposed by Harlan Mills in 1971", citing
  Mills's IBM report FSC71-5108 [S:24]. The antecedent search is recorded at [S:25].
- **Plain reading:** the surgical team is Mills's model, which Brooks presented and popularized. It
  should be `extended` with Harlan Mills as co-originator. The structural limit on the page ("Brooks
  proposed organizing software work around small specialist teams") carries the same
  misattribution.

## Unsupported

### body_of_work[3] (Turing Award Lecture: The Design of Design, talk, 2000)

- **Page says:** a talk titled "The Design of Design", given in 2000 "on receipt of the 1999 Turing
  Award", about an hour long.
- **What I searched:** ACM's listing of Turing lectures has no entry for Brooks and none for the 1999
  award year [S:6]; his ACM laureate profile lists no lecture; two web searches for the lecture by
  title and by year found nothing. The Turing Lecture Brooks is recorded as giving is a different
  series (the IET and BCS lecture) in 2005, on "Collaboration and Telecollaboration in Design" [S:5].
- **Partial lead:** two secondary sources describe a 2002 talk at Carnegie Mellon titled "The Design
  of Design" as "an updated version of his Turing Award lecture" [S:28] [S:29]. So a Turing Award
  lecture on design probably existed, but no source gives its title, its year or its length.
- **Plain reading:** the item should either point to the 2002 CMU talk, which is documented, or drop
  the title and year it cannot support.

## Outside the gate, noted for completeness

These are not fields the gate checks, but they make factual claims and the record was read for them.

- **adjacent_thinkers[0] (Komoroske):** the label says "The lineage is explicit; Komoroske attributes
  Brooks throughout." Komoroske's own ledger, re-verified today, records that the Coordination
  Headwind deck and his other texts "contain no mention of Brooks, The Mythical Man-Month or Brooks's
  Law" (`_working/alex-komoroske/facts.md`, [S:13] there). The connection is real in substance, and
  it is the site's reading rather than a credit Komoroske gives. This disagrees with the page.
- **adjacent_thinkers (Forsgren):** "Forsgren's research gives Brooks's coordination-cost claim an
  empirical measure." Forsgren's ledger records that no source shows *Accelerate* citing Brooks
  ([S:31] there), and my search found none either. It reads best as the site's argument.
- **Superlatives:** "the single most cited book" and "the single most cited essay" in software
  engineering (`inclusion_rationale`, `body_of_work[1].editorial_note`) were not tested and have no
  source on this ledger.
- **No silver bullet gloss:** the essay's claim is bounded "within a decade" [S:12], and it goes on
  to propose attacks on the essential parts, such as buying instead of building and rapid
  prototyping [S:12]. The gloss "only accidental complexity yields to tooling" is a fair summary of
  the past gains he describes, and somewhat stronger than his forward-looking claim.

## Inbound claims from other pages

From `bun scripts/inbound-claims.ts fred-brooks`:

- **Rich Hickey's page** credits Brooks with accidental complexity, from "No Silver Bullet" (1986).
  That agrees with the page, and both leave out the antecedents Brooks names himself (Aristotle and
  Nancy Greenwood Brooks, [S:14] [S:15]). If `named_frames[2]` changes to `extended`, Hickey's
  credit should be read again in the same pass.
- **Alex Komoroske's page** credits Brooks as the original source of coordination headwind (1975).
  The direction is consistent with the record on Brooks's Law [S:17] [S:18]. The claim on this page
  that Komoroske himself names Brooks is the one the record does not support (see above).
- **Nicole Forsgren's page** says Forsgren "empirically vindicated Brooks's structural claim." Her
  own ledger already flags that as the site's argument rather than a stated relationship.
- **Camille Fournier, Martin Fowler, John Allspaw:** nothing found that disagrees with this ledger.
  These were not independently tested here.

## Audit, 2026-10-15

An independent audit of this backfill. I re-fetched the load-bearing sources myself (ACM profile,
ACM lecture listing, the Anniversary Edition sample pages, the No Silver Bullet PDF, Wikiquote,
Wikipedia on chief programmer teams and on the second-system effect, IEEE Spectrum, the USF notes,
the classiccmp thread and the arXiv abstract) into `_working/fred-brooks/audit/` and checked every
quoted fragment on the ledger against them. I reopened all 30 original lines. Every quotation is
present at its URL, apart from the transcription slips below, and the page's No Silver Bullet link
(`http://worrydream.com/refs/Brooks-NoSilverBullet.pdf`) redirects to the PDF the ledger cites.

### Lines repaired

- **[S:17]** said Wikiquote quotes "The Mythical Man-Month (1975 ed.), page 25". Wikiquote says
  its page numbers "refer to the substantially expanded Anniversary Edition (2nd Edition), 1995".
  The quotation is right and the edition label was not; the line now records what Wikiquote says.
- **[S:19]** carried the same page numbering without saying so; it now names the 1995 edition.
- **[S:20]** recorded "The Jargon File and Wikipedia credit Brooks" against a mailing-list URL that
  says neither. The Wikipedia credit is now its own line at its own URL, [S:33]; the Jargon File
  claim is dropped because I did not read that source. The thread quote now follows the post's
  wording, including its spelling "Streeker".
- **[S:22]** quoted the Reims Cathedral epigraph against the arXiv URL, where it does not appear.
  The epigraph is in the publisher sample pages, so it now lives at [S:32] and [S:22] points to it.
- **[S:26]** quoted the essay as "bullets of silver that can magically lay them to rest". The PDF
  reads "than can"; the line now quotes the source as printed, marked [sic].

### Lines added

- **[S:31]** Jim Waldo's OOPSLA 2006 paper "On system design" cites "Brooks F. P. The Design of
  Design Turing Award Lecture ... 2000", linking a SIGGRAPH 2001 special-session page whose path is
  `2000TuringLecture-DesignOfDesign`. That page has no Wayback snapshot.
- **[S:32]** the Reims epigraph, at the sample-pages URL (split out of [S:22]).
- **[S:33]** Wikipedia: "Fred Brooks introduced the phrase in The Mythical Man-Month (1975)".

### page-claims.md changes

- `body_of_work[3]` is now mapped to [S:31] [S:28] [S:29]. See the dispute below.
- `named_frames[3].attribution` adds [S:32]; `named_frames[4].attribution` adds [S:33], so neither
  rests on a sentence whose source is elsewhere.
- Every other mapping was rechecked and stands: each cited line says what it claims at its URL and
  bears on the field that cites it.

### Findings disputed

- **body_of_work[3] was filed as unsupported, and it is partly supported.** The title "The Design of
  Design" and the year 2000 for a Turing Award lecture appear in a peer-reviewed paper's reference
  list [S:31], which agrees with the two sources that call the 2002 CMU talk an update of his Turing
  Award lecture [S:28] [S:29]. ACM's own listing omits it [S:6], and the ledger has no primary
  record, so this is support from secondary citation and I have labelled it that way. What remains
  unsourced is the editorial note's "one-hour" length, and "the talk version of the 2010 book" is
  the site's reading. A gentler wording on the page would keep the title and year and drop the
  length.

### Findings upheld

- **active_years.** Other deceased thinkers on the site end the span at the end of their working
  life rather than at death (Alexander 2012, Rasmussen 2005, Reason 2016), so the convention backs
  the author's reading. IEEE Spectrum's "still active ... until 2020" [S:7] is the most specific
  record, and `1956–2020` fits it.
- **background.** ACM's "IBM Corporation (1956 – 1965); University of North Carolina (from 1964)"
  [S:1] is confirmed in a fresh fetch, as is "retired from teaching in 2013" [S:7]. Both clauses
  stay unmapped. The overlap is easy to understand, since he founded the department while still at
  IBM, and the page can say so plainly.
- **named_frames[2] and named_frames[5].** Confirmed in the fresh fetches: "Following Aristotle"
  in the essay, the Nancy Greenwood Brooks credit in the preface, "Mills's Proposal" in the table
  of contents, and Wikipedia's "as proposed by Harlan Mills in 1971". Brooks is generous with
  these credits himself, so moving both frames to `extended` follows his own account rather than
  taking anything from him.

### Findings added

- **inclusion_rationale says Brooks "Coined or named" essential vs accidental complexity and the
  surgical team.** The same record that moves those two frames to `extended` [S:14] [S:15] [S:23]
  [S:24] applies here. "Named for software" or "brought into software engineering" would be
  accurate.
- **named_frames[0] maps Brooks's Law to the concept `coordination-headwind`, and
  inclusion_rationale says Brooks "Coined or named coordination headwind".** The attribution field
  is supported for Brooks's Law as Brooks's own [S:2] [S:17] [S:18]. The phrase "coordination
  headwind" is Komoroske's, and his ledger finds no credit from him to Brooks (see above). One
  reasonable reading is that Brooks named the underlying cost and Komoroske named the
  generalization; the current wording credits Brooks with the term as well.
- **tagline: "The first person to name what makes software hard, and the first to argue that no
  tool ever fixes the essential parts."** No line supports either "first", and Brooks himself
  credits Aristotle for the essence and accident distinction [S:15]. The second clause is also
  stronger than the essay, which bounds its claim to "one order-of-magnitude improvement within a
  decade" [S:12] and goes on to recommend attacks on the essence. Not a gated field, and worth the
  same care as the frames.

## Remediation, 2026-10-15

The page was corrected to the record above in a claim-delta pass; the table is
`_working/fred-brooks/claim-delta-2026-10.md`. All four contradicted fields are now mapped in
`page-claims.md`: `active_years` is 1956–2020; `background` gives the 1964 founding while still at
IBM, the 1965 exit, the 2013 (or 2015) retirement and research until 2020, and hedges OS/360 to
ACM's "perhaps the largest"; essential vs accidental complexity and the surgical team are
`extended`, crediting Aristotle and Nancy Greenwood Brooks, and Harlan Mills. The carriers of those
credits in `inclusion_rationale`, `why_they_matter_as_a_thinker`, the surgical-team gloss and
`limits[0]` were lowered in the same pass. The tagline's two "first" claims, both superlatives,
the "one-hour" length, the "talk version of the 2010 book" reading and the Komoroske credit
sentence were removed. The silver-bullet claim now carries the essay's own bound ("within a
decade") in every field that states it.
