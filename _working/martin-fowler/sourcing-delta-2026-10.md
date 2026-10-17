# Martin Fowler: sourcing delta, 2026-10-17

Sourcing pass on the claims the remediation of 2026-10-15 left open with no ledger line, plus the
two credit additions Julie and the Council approved subject to a line. Seven lines were added to
`facts.md` ([S:48] to [S:54]), each written from the fetched source (copies in
`_working/martin-fowler/src/`). Every change is below, one row per proposition. Julie reviews
the ADDITION rows; NARROWED and CORRECTED rows need a domain check only if the supporting line
reads differently to her.

Files touched: `src/content/thinkers/martin-fowler.md`, `src/content/long-read/martin-fowler/00-preface.md`,
`facts.md`, `page-claims.md`, `reading-claims.md`, and the regenerated `grounding-pack.md`.

| field | before | after | SAME / NARROWED / CORRECTED / ADDITION / Deletion | supporting [S:n] |
|---|---|---|---|---|
| named_frames[6].one_line_gloss (bliki) | "mark the maturity (`growing`, `stable`)" | removed | Deletion | none found: no badge appears on the bliki index, What Isa Bliki or the entries fetched |
| limits[1].elaboration | Kerievsky's book "is both extension and pointed critique: mechanical refactoring without a pattern-target can produce code that is cleaner-but-not-better" | removed | Deletion | none: the publisher page describes no critique |
| limits[1].elaboration | (none) | *Refactoring to Patterns* (2004), "published in Fowler's own signature series with a foreword by him", builds "pattern-directed refactorings" that move a design "to, towards, or away from pattern implementations" | ADDITION | [S:54] |
| limits[1].elaboration | the critique (Kerievsky's) shows mechanical refactoring lacks a destination | "The site reads that pairing as pointing at a gap in the catalog form, which names how to change code and leaves the reader to supply where the design should end up" | NARROWED (moved from Kerievsky's claim to the site's labeled reading) | [S:54] |
| limits[1].elaboration | "The 2nd edition of *Refactoring* (2018) responds, but the critique is live" | removed | Deletion | none: no source says the 2018 edition responds to Kerievsky |
| limits[1].elaboration | "a named move with no design destination is still motion without direction" | same sentence | SAME | (site reading) |
| limits[2].headline | "The test pyramid is a heuristic, not a law" | "Rival test shapes dispute the pyramid's balance" | ADDITION (review: was NARROWED; the headline asserts that rival shapes exist and dispute the balance, a proposition the old headline lacked) | [S:48] [S:49] |
| limits[2].elaboration | "Vladimir Khorikov, Sam Newman and others argue strict pyramid orthodoxy can starve integration testing where the actual bugs live" | the honeycomb and trophy shapes "call for few unit tests and mostly integration tests" (Khorikov, Newman and "where the actual bugs live" removed) | CORRECTED | [S:49] |
| limits[2].elaboration | (none) | Fowler's entry (2012, etymology added 2017) credits the pyramid to Mike Cohn's *Succeeding with Agile* (2009), first drawn in conversation with Lisa Crispin; Jason Huggins reached it independently | ADDITION | [S:48] |
| limits[2].elaboration | (none) | the entry's further reading "now mentions" writers who prefer "more integration tests and few unit tests" and links to the 2021 article (review: was "the 2012 entry already mentioned", but the line links to the 2021 article and so cannot date from 2012) | ADDITION | [S:48] [S:49] |
| limits[2].elaboration | (none) | in 2021 Fowler argued the dispute turns on what each side means by "unit test", and quoted Justin Searls that debating percentages is "a distraction" | ADDITION | [S:49] |
| limits[2].elaboration | "Treat the pyramid as the *shape* of a reasonable starting place, not as the answer to where test effort belongs" | "Treat the pyramid as a reasonable starting shape, and ask what each side means by its terms before weighing their ratios" | ADDITION (the second clause is Fowler's 2021 take-away) | [S:49] |
| still_load_bearing_despite | "even with the test-pyramid orthodoxy risk" | "even with the dispute over the test pyramid's shape" (review: "open" removed, no source dates the dispute past 2021 and Fowler there calls it "moot") | CORRECTED (review: was NARROWED; a dispute over the shape is a new proposition, carried by [S:49]) | [S:48] [S:49] |
| adjacent_thinkers[0].edge_label (Kent Beck) | "contributed the two-hat rule" | removed | Deletion | none: secondary write-ups disagree on whose metaphor it is, and the book text was not reachable |
| adjacent_thinkers[0].edge_label (Kent Beck) | "and the 'make the change easy' motto" | "and contributed the 'make the change easy' motto" | SAME | [S:45] |
| preface, bliki paragraph | "marking entries with maturity badges (`growing`, `stable`) so readers can tell whether he is still figuring something out or has settled" | removed | Deletion | none |
| preface, Where to find him | "with maturity badges and public revision history" | "with public revision history" | Deletion | none |
| preface, attribution sentence | "the Gang of Four for the pattern catalog form" | "the Gang of Four for the structured pattern form of the book that, in his words, 'really launched patterns into the software world'" (review: the quoted clause modifies the book in the source, not the form) | CORRECTED ("catalog form" to "structured form") plus ADDITION (the quoted launch claim; review: was NARROWED) | [S:52] |
| preface, attribution sentence | "James Lewis for the microservices definition" | "the architects who discussed the term microservice at a 2011 workshop near Venice and settled on the name in 2012 (in the article he wrote with James Lewis ...)" (review: the 2011 workshop only "discussed" the term; the group "decided on" it in May 2012) | CORRECTED | [S:51] |
| preface, attribution sentence | (none) | the article "also names Lewis, Fred George, Adrian Cockcroft and others for early work on the style" (review: "and others" added; the footnote also names Joe Walnes, Daniel Terhorst-North, Evan Botcher and Graham Tackley) | ADDITION (George and Cockcroft newly credited) | [S:51] |
| preface, Where to find him | "*Mocks Aren't Stubs* (2007)" | "*Mocks Aren't Stubs* (2004, revised 2007)" | CORRECTED | [S:53] |
| preface, Named or carried | (test pyramid removed 2026-10-15) | the test pyramid, "Mike Cohn's, from *Succeeding with Agile*, 2009", described in Fowler's 2012 entry, whose 2017 etymology credits Cohn, notes Crispin and Huggins | ADDITION (Cohn newly credited; "popularizer" for Fowler NOT added, no line carries it) | [S:48] |
| preface, Named or carried | (branch by abstraction removed 2026-10-15) | branch by abstraction, "a technique Fowler says 'has been around for a long time'; Paul Hammant introduced the name while arguing for trunk-based development, and Fowler reports that Hammant credits Stacy Curl with 'originally coming up with it'" (review: was "crediting Stacy Curl with the technique", which resolves an ambiguous "it" the source leaves open) | ADDITION (Hammant and Curl newly credited) | [S:50] |

## Not changed, for the record

- No frame warning fired before or after this pass (`bun run build | rg "martin-fowler: frame .* names no originator"` returns nothing), so no frame attribution changed.
- `reading` and `extension` are unchanged. The grounding pack was regenerated from the page, so
  [L:2], [L:3], [F:bliki], [T:still-load-bearing] and [E:out:kent-beck] now carry the new text;
  `T:working-line` dropped out because the page no longer has a `working_line`, and no reading
  sentence cited it.
- Register: Khorikov and Newman are removed without comment on their work; the page now names
  only writers whose words are on file. The Kerievsky limit describes his book from its publisher
  page and labels the gap as the site's reading.

## Review, 2026-10-16

An independent review reopened every fetched copy behind [S:48] to [S:54] and checked each row
against `git diff origin/main` for the page, the long-read preface and `facts.md`. Every page
change has a row and every row matches the diff. Seven rows changed, all corrected in place above:

- **Test pyramid, "already mentioned".** The Further Reading sentence in [S:48] links to
  `/articles/2021-test-shapes.html`, so it was written in 2021 or later. "The entry already
  mentioned" placed it in the 2012 text. The page now says the entry "now mentions" those writers
  and links to the 2021 article; [S:48] records the link.
- **Test pyramid headline.** Relabelled NARROWED to ADDITION: "Rival test shapes dispute the
  pyramid's balance" asserts something the old headline did not. It is supported by [S:49].
- **still_load_bearing_despite.** "open dispute" became "dispute": nothing on file dates the
  dispute past 2021, and Fowler's 2021 article calls it "moot". Relabelled NARROWED to CORRECTED.
- **Gang of Four.** In [S:52] "that really launched patterns into the software world" attaches to
  "the seminal Gang of Four book", not to the form. The preface had pinned the quotation to the
  form. It now reads "the structured pattern form of the book that, in his words, ...". Relabelled
  NARROWED to CORRECTED plus ADDITION, since the launch claim is new.
- **Microservices term.** The footnote says the 2011 workshop "discussed" the term and the same
  group "decided on" it in May 2012. Crediting "a 2011 workshop" for the term overstated what
  happened in 2011. The credit now goes to the architects, with both dates.
- **Microservices early work.** The footnote goes on to name Joe Walnes, Daniel Terhorst-North,
  Evan Botcher and Graham Tackley alongside Cockcroft. Naming three people as if they were the
  full list narrowed the article's credit, so the preface now says "and others", and [S:51]
  carries the rest of the quotation.
- **Branch by abstraction.** In [S:50] "he credits Stacy Curl with originally coming up with it"
  follows "introduced the term", and "it" may mean the term or the technique. The pass chose "the
  technique". The preface now quotes the phrase and keeps Fowler as the reporter of Hammant's
  credit (SCHEMA section 8, state the record attributed).

Checked and left as written: the Kerievsky rows (the publisher page carries every quoted phrase,
the series, the 2004 date and both forewords; the gap is labelled as the site's reading), the
deletion of the bliki maturity badges (neither the index copy nor What Is a Bliki has one), the
Mocks Aren't Stubs dates, the Cohn, Crispin and Huggins credits, and the 2021 article rows. The
"two-hat rule" deletion stands. One search ("Kent Beck came up with a metaphor" "two hats") found
no primary text crediting Beck, and secondary write-ups credit Fowler, so restoring the claim
would need the book itself. Corrections about people use the section 8 register: each records
what a source says and when, with no verdict on anyone. No em-dashes in the page, the preface or
`facts.md`.
