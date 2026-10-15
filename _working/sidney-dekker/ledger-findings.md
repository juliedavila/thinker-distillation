# Sidney Dekker: ledger findings

Backfilled on 2026-10-15 against the shipped page. Each factual claim was treated as a question to
put to the record, and the record was read before the page was compared with it. Most of the page
holds up well. Five gated fields do not, and a few ungated lines are worth a look while the page is
open. Every case below has a reasonable explanation for how the page came to say what it says;
the point is only to state what the sources show.

## Fields the record contradicts

### background: the Allspaw advising claim, and two smaller points

**Page:** "previously Chair of Human Factors and System Safety at Lund University in Sweden, where
he advised John Allspaw's PhD work. Active commercial airline pilot (Boeing 737 ratings) kept
current through his academic career. Author of more than a dozen books since 2002. The
most-translated and most-cited writer on safety culture working today."

**What the sources say:**

- Allspaw's Lund degree was a master's, not a doctorate. His 2015 thesis title page reads
  "submitted in partial fulfillment of the requirements for the MSc in Human Factors and System
  Safety ... Under supervision of supervisors Drs Anthony Smoker & Johan Bergström", and the Lund
  repository types it a one-year master's degree [S:3]. Allspaw's own site says the same [S:4].
  Dekker is warmly thanked in the acknowledgements, for "his encouragement, patience, and 'thrown
  in the deep end' approach" [S:3], so a mentoring relationship is well attested. The record
  supports "Dekker taught in the Lund programme where Allspaw took his master's and is thanked in
  his thesis"; it does not support "advised his PhD".
- The flying: Dekker's publisher bio says "After becoming full professor, he learned to fly the
  Boeing 737, and worked part-time as an airline pilot out of Copenhagen" [S:1], and Wikipedia
  names Sterling and later Cimber [S:16]. That supports the 737 flying, but in the past tense and
  as something begun after he was a full professor, which sits awkwardly with "active" and "kept
  current through his academic career".
- "The most-translated and most-cited writer on safety culture working today": no source ranks
  him this way [S:18]. The metrics found (an h-index of 63, about 10,900 citations in OpenAlex)
  are substantial but carry no comparison, and no translation count was found. Unsupported
  rather than false.
- These parts hold: Dutch, born near Amsterdam [S:17]; Griffith professorship [S:1] [S:2];
  previously professor of human factors and system safety at Lund [S:1]; nineteen books from
  2002 on [S:16].

**Fact ids:** [S:1] [S:3] [S:4] [S:16] [S:17] [S:18]

### named_frames[2].attribution: drift into failure as `original`

**Page:** `attribution_kind: original`, with `derived_from: migration-toward-the-boundary`.

**What the sources say:** The antecedent search [S:22] found that the exact phrase "drift into
failure" first appears in the scholarly index as the title of Dekker's 2011 book, so the name and
the book-length synthesis are his. The idea it names has earlier holders, and Dekker credits them
himself. His 2013 paper with Pruchnicki writes that accumulating events "can produce a gradual
drift towards failure (Dekker 2011; Woods 2003)" [S:20], and the book's own reference lists draw
on Turner's incubation period (1978), Vaughan's normalisation of deviance (1996), Rasmussen's
migration model (1997, 2000) and Snook's practical drift (2000) [S:21]. A search result (the copy
itself was not reachable) also reports Woods using "drift toward failure" in his Columbia chapter
draft. The page already acknowledges Rasmussen through `derived_from`; the record suggests
`extended` with Woods and Rasmussen named, which credits Dekker's synthesis without overstating
priority.

**Fact ids:** [S:20] [S:21] [S:22] [S:31]

### body_of_work[0]: the 2002 Field Guide title

**Page:** title "The Field Guide to Understanding "Human Error"", year 2002, "Third edition 2014."

**What the sources say:** The 2002 book was published as *The Field Guide to Human Error
Investigations* [S:5]. The book with the page's title is the later, retitled edition, and its third
edition is indeed 2014 [S:6]. This is one book under two titles, so the fix is small: either give
the 2002 title, or keep the current title with a later year and note the 2002 original.

**Fact ids:** [S:5] [S:6]

### body_of_work[2]: the 2007 Just Culture subtitle

**Page:** title "Just Culture: Restoring Trust and Accountability in Your Organization", year 2007.

**What the sources say:** The 2007 first edition was *Just Culture: Balancing Safety and
Accountability* (Ashgate) [S:10]. "Restoring Trust and Accountability in Your Organization" is the
subtitle of the third edition, dated 2016 [S:9] [S:1]. The page's own editorial note ("Third
edition 2017") is also a year off from the 2016 the author's site and publisher bio give.

**Fact ids:** [S:1] [S:9] [S:10]

## Fields with no support found

### named_frames[4].co_originators[2]: Allspaw and work-as-imagined / work-as-done

**Page:** John Allspaw, "carried into software ops".

**What was searched:** two web searches pairing Allspaw (and Adaptive Capacity Labs) with both
phrases, and a text search of his 2015 thesis [S:27]. Nothing found. This is plausible given his
field, and a talk or post outside these searches may well use the pair, so it is unsupported rather
than shown false.

**Fact id:** [S:27]

## Ungated lines worth a look

These are not on the gate's required list, so they do not fail it, but they rest on the same
evidence.

- **The Allspaw edge label** ("Dekker's PhD student at Lund") repeats the PhD claim [S:3] [S:4].
- **Inbound claim from the John Allspaw page:** its edge to Dekker reads "Allspaw's PhD advisor at
  Lund." That disagrees with the thesis record [S:3], and the Allspaw page's own backfill ledger
  reached the same finding independently (its [S:10]). Both pages carry the claim, so a fix should
  land on both together.
- **The just-culture gloss** says individuals are accountable "for willful violations but not for
  honest mistakes". Dekker's own 2008 paper (in print 2009) questions exactly that kind of line: "The critical
  question is not where to draw the line, but who gets to draw it" [S:13]. The gloss reads closer
  to Reason's 1998 formulation [S:11] than to Dekker's. Worth rewording so the frame shows what
  Dekker added.
- **Drift Into Failure editorial note:** "The Columbia space shuttle accident reading is the
  most-cited application." The publisher confirms Columbia is one of the book's cases [S:7]; no
  source ranks it as most cited.
- **Safety Differently as late-career prescription:** the publisher calls it "a complete update of
  Ten Questions About Human Error" (2005) [S:8], so its roots are earlier than "late-career"
  suggests. The 2014 date holds (released June 2014, copyright 2015).
- **The Safety Anarchist** carries a 2018 copyright line on Routledge, with a late-2017 release
  [S:14]; 2017 is defensible.
- **Broken link:** `https://sidneydekker.com/field-guide-human-error/` (body_of_work[0]) returns
  404 as of 2026-10-15.

## Inbound claims checked

The other six inbound lines agree with what was found: Rasmussen (the 2013 paper cites Rasmussen
1997 for the drift account [S:20] [S:31]), Reason (Dekker draws on Reason and argues past the Swiss
cheese model [S:30]), Cook and Woods (the 2010 *Behind Human Error* byline, Woods as co-holder of the
new view [S:19] [S:32]), Hollnagel (Dekker used work-as-imagined and work-as-done in the first
resilience-engineering anthology [S:24]) and Larson (no factual claim about Dekker beyond the frame).

## Audit, 2026-10-15

An independent pass over this ledger, by a reader who did not write it. Every line was reopened
(all 32, plus one added), each quotation was checked against the local copy in `src/` or a fresh
fetch under `audit/`, and every attribution, date and antecedent line was read against the field
that cites it. The ledger holds up well. The quotations are faithful with one exception, the
antecedent searches reproduce exactly when rerun (162 and 223 records, 3 and 12 hits), and the five
contradicted or unsupported fields are fairly characterised. The changes below are repairs to how
sources are described, plus a few findings the backfill had no reason to look for.

### Lines repaired

- **[S:16] Wikipedia:** the pilot sentence was quoted in words the article does not use. It now
  reads as the article does ("flew as First Officer on Boeing 737s for Sterling and later Cimber
  Airlines out of Copenhagen"). The line also now records the article's own sentence that Dekker
  "coined the terms Safety Differently and Restorative Just Culture", with the note that the
  article carries an autobiography banner, so this is his account rather than an independent one.
- **[S:8] Safety Differently:** the line called its URL a CRC Press listing; the URL is Bookshop.org
  (publisher shown as CRC Press). The Routledge quotation is now marked as coming from the local
  copy of the Routledge page, which has no URL of its own on the line.
- **[S:10] Just Culture 2007:** `bookshop.canterbury.ac.uk` is the Canterbury Christ Church
  University bookshop, not the University of Canterbury. Renamed; the record itself is unchanged.
- **[S:13] "Who gets to draw the line?":** the copy read carries a 2008 Springer line. The findings
  above called it a 2009 paper; that sentence now says 2008 (in print 2009).
- **[S:14] The Safety Anarchist:** the October 2017 release rested on search snippets that were not
  fetched. The line now says so and leans on Wikipedia's 2017 and Routledge's 2018 copyright,
  both read.
- **[S:15] OpenAlex:** added a bound. The 1995 paper is linked to this Dekker by OpenAlex's author
  merge and the matching full name; a search found nothing stating it outright. The 1996
  dissertation is certainly his, so `active_years` holds at 1995 or 1996 either way.
- **[S:27] Allspaw and work-as-imagined:** a third search was run (Allspaw, the phrase, software
  incidents). It found nothing either, so the finding stands as written.

### Line added

- **[S:33] Hollnagel, HindSight 25 (2017):** Hollnagel writes that the pair "played an important
  role in the initial discussions about resilience engineering, as described by Dekker (2006),
  although the origin can be found much earlier in the French ergonomics tradition (Ombredane &
  Faverge, 1955)". Cited by `named_frames[4].attribution` and both co-originator lines.

### Findings checked

All seven gated findings above are confirmed by the sources; none is disputed. Two of them read
better with a note added:

- **background, the flying:** Dekker's own site still describes him as "professor, author, pilot,
  and chaplain" [S:2]. That gives "pilot" a fair basis as a present-tense self-description. The
  page's specific claims, "active" and "kept current through his academic career", still go
  beyond what any source says. Separately, "Chair of Human Factors and System Safety" does not
  appear in any source read: the publisher bio and Wikipedia both say "Professor of" [S:1]
  [S:16]. That may be a looser rendering of the same post, and a small edit would remove the gap.
- **body_of_work[2], Just Culture:** Wikipedia's list confirms the title history, with a 2012
  second edition still subtitled "Balancing Safety and Accountability" [S:16]. The 2016 third
  edition is the first to use the page's subtitle.

### Findings the backfill did not raise

These are ungated except the first, which sits inside a gated field that still passes.

- **Work-as-imagined and work-as-done, whose frame it is.** The page names Hollnagel as
  `primary_author` and gives Dekker the role "carried into practitioner vocabulary". Hollnagel's
  own account [S:24] [S:33] places the distinction's origin in French ergonomics and dates its
  resilience-engineering role to Dekker's 2006 chapter; he does not claim the pair himself. The
  mapping stays, since Hollnagel is well attested as the pair's main carrier in safety management
  [S:25] [S:33] and the site's convention lets `primary_author` name the main source holder. The
  record would also support a fuller role for Dekker, as one of the first to bring the pair into
  resilience engineering in English. Worth a look when the frame is next edited.
- **Safety differently, the coinage.** The ledger's antecedent search [S:23] found no earlier named
  use. Wikipedia's article adds that Dekker "coined" the term [S:16]. Both now sit behind
  `original`, with the caveat that the second is the subject's own account.
- **"Forty years of consistent body of work"** (`inclusion_rationale`) does not square with the
  page's own `active_years: 1995–present`, which the record supports [S:15]. That is about
  thirty-one years. "Over three decades", the phrasing on Dekker's own site [S:2], would fit both.
- **"Dutch safety scientist"** (`background`): Wikipedia's short description is "Dutch-Australian"
  [S:16], and he has been based at Griffith for years [S:1] [S:2]. Not wrong, just a narrower
  reading than his own sources give.

### Verification

`bun scripts/fact-ledger.ts sidney-dekker` was run at the end of this pass. It fails on the same
five fields as before and no others, which is the intended state until the page itself is edited.
