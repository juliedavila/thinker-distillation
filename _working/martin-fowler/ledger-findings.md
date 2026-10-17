# Martin Fowler: ledger findings

Backfilled 2026-10-15 against the shipped page `src/content/thinkers/martin-fowler.md`. Each claim
was read as a hypothesis and checked against what the sources say. Fowler's own site is the main
source throughout, and on most points it is generous and exact about who did what. Most of what
follows is the page claiming a little more for him than he claims for himself. His About page puts
it plainly: "I don't come up with original ideas, but do a pretty good job of recognizing and
packaging the ideas of others" ([S:14]). That is his modesty, and a reader may fairly credit him
with more than he credits himself. But where a field says he originated something and his own text
names someone else, the field should follow the record.

Twelve fields are left unmapped. The backfill left nine (six where a source says something
different from the page, three where the record does not carry the claim), and the audit of
2026-10-15 at the end of this file unmapped three more. The gate fails on exactly these twelve.

## Contradicted

**background**
- Page: "Coined the term *bliki* (a hybrid of blog and wiki) and has been publishing under that form at martinfowler.com since the late 1990s."
- Source: the post that defines the word says the hybrid was "something that was a cross between a wiki and a blog - which Ward Cunningham immediately dubbed a bliki", and it is dated 26 May 2003 [S:1]. His About page says the bliki started "in 2003" and that the site began as a home for articles written elsewhere [S:14]. So Cunningham named it, and the bliki dates from 2003. The site itself is older.
- Also in this field, unsupported rather than contradicted: "a role designed expressly to leave him free to think and write." Fowler's own account of the title is that "I'm not chief of anybody and don't do any science" and that his role is "helping my colleagues to capture and promulgate what we've learned" [S:27]. He does say he stayed independent before Thoughtworks partly to keep time for writing, which is close to the page's point but not the same claim. He has also "served on the primary global leadership team since 2017" [S:27], which sits awkwardly beside "rather than an executive". The page could keep its point by saying he has mostly stayed out of business leadership, which are his words.
- The rest of the field holds: Walsall and 1963 [S:13], [S:27]; Thoughtworks from 2000 with the Chief Scientist title by 2001 [S:15], [S:28] (Wikipedia's Thoughtworks article says he joined in 1999; Fowler says he started working with them in spring 1999 and joined in 2000 [S:27], [S:28]); Agile Manifesto signatory [S:13], [S:15]; the books and co-authors [S:12], [S:13].
- Facts: S:1, S:14, S:27.

**named_frames[3].attribution, Strangler fig application, filed `original`**
- Page: original, Fowler alone, no co-originators.
- Source: the name and the metaphor are his, and nothing earlier turned up [S:4], [S:33]. The practice is a different matter. His own 2004 post credits a colleague's project with doing it and with publishing "a first paper on this at XP 2004" (Chris Stevenson and Andy Pols) [S:32]. Fowler named a practice he watched others carry out, and said so at the time.
- A fair fix: keep Fowler as primary author for the name, and either file it `extended` with Stevenson and Pols as co-originators for the practice, or keep `original` and add a co-originator line that says the practice came from their project. Either way the credit that sat in his first post comes back.
- Facts: S:4, S:32, S:33.

**named_frames[4].attribution, Continuous integration, filed `original` by martin-fowler**
- Page: original, with Kent Beck listed as co-originator for "original XP practice".
- Source: Fowler's own article says "Continuous Integration was developed as a practice by Kent Beck as part of Extreme Programming in the 1990s ... Kent defined the practice" [S:6]. He credits the C3 project with his first sight of it, and he notes that some people credit Grady Booch with the phrase [S:6], [S:34]. He objects to renaming the practice because the new name "rudely erases the work of those, especially Kent Beck, who championed and developed Continuous Integration in the beginning" [S:6]. What is his is the article, first published 10 September 2000 [S:5], which became the most widely read account of the practice.
- The co-originator lines for Beck, Humble and Farley hold and are mapped. Only the `original` kind with Fowler as primary author fails. On this record, `extended` with Beck as originator fits better.
- Facts: S:5, S:6, S:34.

**named_frames[6].attribution, The bliki, filed `original`**
- Page: original by Fowler, with Cunningham listed for naming it.
- Source: the same post says "The term 'bliki' has been used by others - not surprising as it's a fairly obvious contraction. Currently SnipSoft produce a GPL'd bliki in Java" [S:1], [S:36]. So by Fowler's own account the word and the blog-wiki hybrid were both around when he started his. His own bliki, and the practice of revising it in public, is his. The form is not.
- The Cunningham co-originator line holds and is mapped.
- Facts: S:1, S:36.

**body_of_work[0], "Is Quality Software Worth The Cost?" (2019)**
- Page: that title, with the editorial note calling it "the keystone bliki essay".
- Source: the essay's own title is "Is High Quality Software Worth the Cost?" and it sits under /articles/, not the bliki [S:41], [S:17]. The link, year and argument are all correct. This is a one-word title fix plus "bliki essay" changed to "article". (`further_in.start_here` also calls it `IsQualitySoftwareWorthTheCost` (bliki), and no bliki entry by that name exists.)
- Facts: S:17, S:41.

**body_of_work[1], Refactoring (1999)**
- Page: "Co-authored with Kent Beck (and Brant, Opdyke, Roberts). Second edition rewritten solo in JavaScript, 2018." Also "The book that gave the word *refactoring* its current technical meaning."
- Source: Fowler's own page credits the 2018 second edition "by Martin Fowler, with Kent Beck" [S:11], so it was not a solo book. The first edition credits the book "With Kent Beck, John Brant, William Opdyke, and Don Roberts" [S:13], a "with" credit rather than a co-author line. Fowler's account of where the word came from places it with the Smalltalk community and with Opdyke's 1992 thesis, "the first thesis on refactoring" [S:10], [S:26]. Fowler's own claim is that the book had "a high impact" [S:11], not that it gave the word its meaning. A version the record supports: the book that carried refactoring to a wide audience.
- Facts: S:10, S:11, S:13, S:26.

**body_of_work[3], Continuous Integration (2006)**
- Page: year 2006, "The original definitive statement of CI as a named discipline."
- Source: the revision history reads "10 September 2000: Original version published", "01 May 2006: Complete rewrite", and "18 January 2024: Published revised version" [S:5]. So 2006 was the rewrite, not the original, and the text at the link today is the 2024 version. The practice itself he credits to Beck [S:6]. The foreword claim in the editorial note holds: the cover of *Continuous Delivery* reads "Foreword by Martin Fowler" [S:31].
- Facts: S:5, S:6, S:31.

**body_of_work[5], The bliki at martinfowler.com**
- Page: "key entries include `BoundedContext`, `FeatureToggle`, `TechDebtQuadrant`, `InverseConwayManeuver`."
- Source: the bliki exists. `InverseConwayManeuver` is not an entry: the URL returns 404, and the maneuver is a section of the Conway's Law entry [S:22], [S:38]. `TechDebtQuadrant` also returns 404, because the entry is `TechnicalDebtQuadrant` [S:22], and `FeatureToggle` now redirects to `FeatureFlag` [S:22]. Small fixes, but a reader following the list hits a dead end.
- Facts: S:22, S:38.

## Unsupported

**body_of_work[4], Microservices (with James Lewis, 2014)**
- Page: read it with `MonolithFirst` (2015) and `MicroservicePremium`, "Fowler's own public walking-back of the 2014 over-enthusiasm."
- What the record says: the article exists, by Lewis and Fowler, dated 25 March 2014 [S:19]. Its closing section is already cautious: "we aren't arguing that we are certain that microservices are the future direction ... not enough time has passed for us to make a full judgement" [S:19]. The 2015 entries aim at the hype and at teams that are "too eager to embrace microservices" [S:20]. Neither entry calls itself a correction of the article. "Walking back" is one reading of how the three pieces relate. Reading the follow-ups as the 2014 article's own caution worked out in more detail fits the text at least as well. The record carries the order of publication. It does not carry the retraction.
- The same reading appears, more strongly, in `limits[0]` ("the public retraction") and in `reading`. Those fields are outside the gate, but the same check applies.
- Searched: the 2014 article, Microservice Premium, Monolith First, read in full.
- Facts: S:19, S:20.

## Mapped, but worth a look

- **adjacent_thinkers[5], Melvin Conway.** The label "Conway's Law (1968), Fowler taxonomized into the *Inverse Conway Maneuver*" holds if "taxonomized" means Fowler's three responses (ignore, accept, inverse maneuver) [S:38]. It can also be read as Fowler coining the maneuver, which belongs to Jonny LeRoy and Matt Simons (December 2010), as Fowler says himself [S:21]. The long read's preface says it outright ("Coined or popularized ... inverse Conway maneuver"). Naming LeRoy and Simons in the label would close off the second reading.
- **active_years "1996–present".** Mapped to the first book (Analysis Patterns, 1996 [S:12]) and to his still publishing in 2026 [S:29]. His working career starts in 1986 and he was an independent consultant from 1991 [S:27], so the span covers his public writing career, not his career as a whole.
- **named_frames[1], Code smell, filed `co-authored`.** Fowler says Beck coined the term alone [S:2]. The catalog chapter was written by both [S:39], so `co-authored` holds for the catalog, but Beck's role "co-coined" says more than the record. "Coined" is the record's word.
- **named_frames[2], Bounded context, filed `extended`.** Fowler's entry explains and credits Evans's pattern [S:3]. It adds examples and does not present an extension. The gloss "not where the org chart changes" sits a little apart from Fowler's own line that the dominant boundary factor "is human culture" [S:3]. Mapped, because `extended` here is the site's reading of a relationship rather than a claim about who came first.
- **named_frames[7], Event sourcing gloss.** "Neither claims the underlying idea as new" has no source on file. Fowler's 2005 draft presents it as a pattern and his 2017 article compares it to git and to accounting [S:8], [S:9], and the QCon SF 2007 interview is confirmed [S:37]. No quoted disclaimer of novelty from either man was found. The gloss is outside the gate, but the phrase should go or get a source.
- **body_of_work[2], Patterns of Enterprise Application Architecture.** Mapped. The book credits five contributors on its cover [S:16], and the listed patterns are all in its catalog [S:16]. "The catalog that named" them is the page's phrase; some of those patterns were contributed by the other authors.

## Other claims outside the gate

- `why_they_matter_as_a_thinker`: "the word in its current technical meaning is his" runs against [S:10], as in body_of_work[1] above.
- `working_line`: "the working motto Fowler quotes more than any other" is unsourced. The quotation itself, under Beck's name, is on the Kent Beck ledger (`_working/kent-beck/facts.md` [S:21], [S:22]).
- `limits[1]` calls Kerievsky's *Refactoring to Patterns* a "pointed critique". It is a book in Fowler's own signature series [S:12]. Not tested here as a critique, but any later `critiques` edge would need the three ledger lines the skill requires.
- The long-read preface repeats the bliki coinage, "late 1990s", the solo second edition and the inverse Conway coinage, and says the Chief Scientist role has "no executive authority" against his leadership-team seat since 2017 [S:27].

## Inbound claims from other pages

`bun scripts/inbound-claims.ts martin-fowler`, run 2026-10-15. Two other pages already state the record correctly, and this page disagrees with them:

- **Ward Cunningham's page** says Fowler's post defining the word "says Cunningham is the one who named it." That matches [S:1] and contradicts this page's `background` ("Coined the term bliki") and its `original` filing on the bliki frame.
- **Jez Humble's page** says Fowler's continuous integration article "credits Kent Beck with developing it inside Extreme Programming." That matches [S:6] and contradicts this page's `original` filing on continuous integration.

The other inbound claims checked here agree with the record: the foreword to *Continuous Delivery* (Dave Farley's page, [S:31]), Alexander's credit and the language-versus-catalog passage (Christopher Alexander's page, [S:25]), and the code smell coinage credited to Beck (Kent Beck's page, [S:2]). This page files Beck as `extends` and Beck's page files Fowler as `parallel`. That is a difference in reading, not in fact, so the ledger does not decide it.

## Audit, 2026-10-15

An independent pass over the backfill, written by a reviewer who did not build it. All 41 lines
were reopened. Every quotation was checked against the saved copy in `_working/martin-fowler/src/`
with whitespace normalized, and the four sources with no saved copy were fetched again into
`_working/martin-fowler/audit/` (two returned blocks, noted below). The backfill holds up well.
Its quotations are accurate, and its findings are careful to say what each source does say
rather than only what it does not. The changes below are mostly about mappings that let a line
stand behind a field it does not quite carry.

### Lines repaired

- **[S:31] Continuous Delivery foreword.** The line said the sample's cover reads "Foreword by
  Martin Fowler" and "A Martin Fowler Signature Book". Neither phrase is in the PDF's text layer as
  cover text. What the sample does carry is a front-matter section headed "Foreword by Martin
  Fowler" and an "About the Cover" note on "Martin Fowler's Signature Series". The line now records
  those. The fact it supports (Fowler wrote the foreword; the book is in his series) is unchanged.
- **[S:37] Greg Young.** The line quoted Gojko Adzic's 2010 write-up under the DDD Community URL,
  where that text does not appear. The DDD Community half stays as [S:37]; the Adzic half moves to
  a new line, **[S:42]**, at the post's own URL, fetched and quoted. The CQRS part of Young's
  co-originator role now has a source of its own.
- **[S:39] Bad Smells chapter.** The byline and the Grandma Beck epigraph are confirmed again
  through search results (the O'Reilly page still returns 403). The added clause that the same
  results "describe Beck's credit on the book as a whole as a contributor's" could not be found
  and is removed. The body_of_work[1] finding that leaned on it now rests on the "With" credit
  wording in [S:13].
- **[S:15] Agile Manifesto bio.** "So he held the title by 2001" read more into an undated page
  than it states. The line now says the bios read as written around 2001 and gives the internal
  evidence (a book due "fall 2001", an August 2001 article).
- **[S:26] Opdyke thesis.** "Supervised by Ralph Johnson" becomes "doctoral committee chair Ralph
  E. Johnson", the record's own wording, and the line now quotes the abstract. The record page was
  read directly this time, not only search results.
- **[S:10] Etymology.** Added the list of people Fowler consulted, Kent Beck among them, since
  named_frames[0].co_originators[1] cites this line for Beck's part in the practice and the old
  text did not mention him.

No line was deleted. Every other line matched its source as written: [S:1] through [S:9],
[S:11] through [S:14], [S:16] through [S:25], [S:27] through [S:30], [S:32] through [S:36],
[S:38], [S:40] (date and foreword re-confirmed by search across O'Reilly, Open Library, BnF and KIT
records) and [S:41]. The antecedent-search lines ([S:33] to [S:36]) record method and result and
read as search records; the searches themselves were not re-run.

### Mappings removed

Each of these was mapped by the backfill, two of them with a caveat already noted under "Mapped,
but worth a look". The caveat was right, and it is enough on its own to unmap: the gate should not
pass a field on a line that says something narrower.

**named_frames[1].co_originators[0], Kent Beck as "co-coined"** (unsupported)
- Fowler's own entry says "The term was first coined by Kent Beck while helping me with my
  Refactoring book" [S:2]. "Co-coined" suggests Fowler shared the coinage, which his account does
  not claim. "Coined" is the record's word and would map cleanly to [S:2]. The adjacent_thinkers[0]
  label ("coined code smell with Fowler") carries the same reading, outside the gate.

**named_frames[2].attribution, Bounded context filed `extended`** (unsupported)
- [S:3] itself says the bliki entry "explains and credits Evans's pattern; it does not present a
  Fowler extension of it", so the backfill had mapped a field to a line that states the opposite.
  What the record shows is Fowler explaining the pattern on the bliki and writing the book's
  foreword [S:3], [S:40]. `popularized` fits that record. `extended` may still be a fair
  reading if a source shows Fowler adding to the concept, and none on file does.
- The Evans co-originator line ("original in *Domain-Driven Design*, 2003") holds and stays mapped.

**body_of_work[2], Patterns of Enterprise Application Architecture** (unsupported)
- "The catalog that named *Domain Model*, *Transaction Script*, *Active Record*, *Data Mapper*,
  *Unit of Work*, *Service Layer*, *Repository*" is a naming claim. [S:16] shows all seven are in
  the book's catalog and that the book credits five contributing authors; it does not show the book
  was where each name first appeared. Some of these terms had earlier lives (domain modeling is far
  older than 2002), and some of the patterns were contributed by the other authors. A version the
  record supports: the catalog that set out these patterns under these names. "The book most
  enterprise software is still discussed in" has no source either.

### Mapping extended

- **named_frames[7] Event sourcing.** The attribution (`distributed`) now cites [S:37] and
  [S:42] alongside Fowler's own pieces, since a distributed filing needs the other contributor on
  the record, and Young's co-originator role cites both.

### Findings reviewed

All nine backfill findings were checked against their sources and eight stand as written:
background, named_frames[4] and [6], and body_of_work[0], [1], [3], [4] and [5]. One is
reclassified rather than disputed:

- **named_frames[3].attribution, Strangler fig.** Filed under "Contradicted", but the record does
  support `original` for the name and the metaphor [S:4], [S:33]. The gap is a missing credit:
  Fowler's own 2004 post names Chris Stevenson's project for the practice [S:32]. That makes it
  unsupported as filed, since `original` with no co-originators leaves out a credit he gave. It
  stays unmapped, and the backfill's suggested fix still fits.

### Added, outside the gate

- `reading` says the 2014 microservices article "undersold the cost of distribution, and later
  follow-ups had to correct it". This is the same reading as body_of_work[4] and limits[0]. The
  2014 article and the 2015 entries are consistent with it, and also with the follow-ups being the
  article's own stated caution worked out later [S:19], [S:20]. Both readings are open on the
  record. The page would be on firmer ground stating the sequence and letting the reader weigh it.
- `adjacent_thinkers[0]` (Kent Beck): "coined code smell with Fowler", as under named_frames[1]
  above.


## Remediation, 2026-10-15

Every field listed above as contradicted or unsupported was rewritten to what its lines say, and
each is now mapped in `page-claims.md`. The before and after of every change, with its class, is
in `claim-delta-2026-10.md`. Attribution kinds changed only where the record carries the new
value: bounded context `extended` to `popularized` ([S:3], [S:40]); continuous integration
`original` by Fowler to `popularized` with Beck as primary author ([S:6], [S:34]); the bliki
`original` to `distributed` ([S:1], [S:36]). Strangler fig stays `original` for the name and
metaphor and now names Chris Stevenson and Andy Pols for the practice ([S:32], [S:33]). The same
claims were lowered in every other field that carried them, including the long-read preface.

Four lines were added, each recording what its source says: [S:43] (the Refactoring book page on
the book's impact), [S:44] (the second edition moved from Java to JavaScript), [S:45] (the
preparatory refactoring article quoting Beck's line under his name) and [S:46] (the Technical Debt
Quadrant entry).

Still open, and left on the page because no line here decides them: the test pyramid limit and
the `still_load_bearing_despite` reference to it (the page does not credit the pyramid to Fowler,
and no ledger line covers its origin); `limits[1]`'s "pointed critique" and the claim that the
2018 edition "responds"; "contributed the two-hat rule" in the Kent Beck label; the maturity
badges in the bliki gloss and preface.

## Sourcing pass, 2026-10-17

The items left open above are closed. Each now has a line ([S:48] to [S:54]) or was deleted: the
test pyramid limit and its `still_load_bearing_despite` reference rest on Fowler's own entries
([S:48], [S:49]) with Khorikov and Newman removed; the Kerievsky limit describes the book from its
publisher page ([S:54]) with "pointed critique" and the 2018 "responds" claim deleted; "the two-hat
rule" and the maturity badges are deleted. Full table: `sourcing-delta-2026-10.md`.
