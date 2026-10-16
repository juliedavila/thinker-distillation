# Martin Fowler: claim-delta table, remediation pass 2026-10-15

One row per changed sentence or field on `src/content/thinkers/martin-fowler.md` and
`src/content/long-read/martin-fowler/00-preface.md`. Non-SAME rows first. Deletions are marked
"Deletion" and need no support. No row is NEW or WIDENED. Where a correction restates the record
in the record's own words (rows marked CORRECTED that quote a source), the quotation is what the
cited line records and replaces the claim it corrects; it is not a fresh proposition.

## Thinker page

| field | before (short quote) | after (short quote) | class | supporting |
|---|---|---|---|---|
| background | "a working consultant and writer rather than an executive or academic" | "a consultant and writer ... mostly avoided business leadership responsibilities, and he has served on the firm's primary global leadership team since 2017" | CORRECTED | [S:27] |
| background | "a role designed expressly to leave him free to think and write" | "which he calls ironic because he is 'not chief of anybody'; he describes his main role as 'helping my colleagues to capture and promulgate ...'" | CORRECTED | [S:27] [S:14] |
| background | "Joined ThoughtWorks in 2000 as Chief Scientist" | "Joined ThoughtWorks in 2000 and holds the title of Chief Scientist" | NARROWED | [S:13] [S:27] [S:15] [S:28] |
| background | "Co-author of *Refactoring* (1999, with Kent Beck)" | "Author of *Refactoring* (1999, with Kent Beck, John Brant, William Opdyke and Don Roberts)" | CORRECTED | [S:13] |
| background | "Coined the term *bliki* ... since the late 1990s" | "Has written a bliki (... a name Ward Cunningham gave his version) at martinfowler.com since 2003; the site started as a home for articles he had written for other purposes" | CORRECTED | [S:1] [S:14] |
| why_they_matter_as_a_thinker | "because the word in its current technical meaning is his" | "his 1999 book on the practice is the one he says has had 'a high impact on the world of software development'" | CORRECTED | [S:43] [S:10] |
| why_they_matter_as_a_thinker | "every time someone draws the test pyramid" | Deletion | Deletion | |
| why_they_matter_as_a_thinker | "he either named, popularized, or codified" | "he either popularized or codified" | NARROWED | [S:2] [S:3] [S:6] [S:23] |
| working_line | "Make change easy, ... (Kent Beck, the working motto Fowler quotes more than any other.)" | "Make the change easy, ... (Kent Beck's line, which Fowler quotes under Beck's name.)" | NARROWED | [S:45] |
| named_frames[0].co_originators[1].role | "practice + book co-author" | "practice; credited on the book, 'with Kent Beck'" | NARROWED | [S:11] [S:13] |
| named_frames[1].co_originators[0].role | "co-coined" | "coined the term, in Fowler's account, while helping with *Refactoring*" | CORRECTED | [S:2] |
| named_frames[2].attribution_kind | `extended` | `popularized` | NARROWED | [S:3] [S:40] |
| named_frames[2].one_line_gloss | "the boundary placed where the words change, not where the org chart changes" | "Fowler's entry explains Eric Evans's pattern and says a different model is needed 'when the language changes'" | NARROWED | [S:3] |
| named_frames[3].co_originators | none (`original`, Fowler alone) | Chris Stevenson for the practice ("a first paper on this at XP 2004"), Andy Pols as the paper's co-author; "the name and metaphor are Fowler's" | CORRECTED | [S:32] [S:33] [S:4] |
| named_frames[4].attribution_kind, primary_author | `original`, martin-fowler | `popularized`, kent-beck | CORRECTED | [S:6] [S:34] [S:5] |
| named_frames[6].attribution_kind | `original` | `distributed` | CORRECTED | [S:1] [S:36] |
| named_frames[6].one_line_gloss | (gloss implied the form is Fowler's alone) | "Ward Cunningham named Fowler's version in 2003, and by Fowler's own account the word and the form were already in use elsewhere" | CORRECTED | [S:1] [S:36] |
| named_frames[7].one_line_gloss | "and neither claims the underlying idea as new" | Deletion | Deletion | |
| body_of_work[0].title | "Is Quality Software Worth The Cost?" | "Is High Quality Software Worth the Cost?" | CORRECTED | [S:41] |
| body_of_work[0].editorial_note | "The keystone bliki essay" | "The keystone article" | CORRECTED | [S:41] [S:17] |
| body_of_work[1].editorial_note | "The book that gave the word *refactoring* its current technical meaning" | "The book Fowler says has had 'a high impact ...'. The word is older: Fowler places the practice's foundations in the Smalltalk community, reports that its creators did not know where the term came from, and cites Leo Brodie's *Thinking Forth* (1984) as its first known printed use. William Opdyke wrote 'the first thesis on refactoring' in 1992" | CORRECTED | [S:43] [S:10] [S:26] |
| body_of_work[1].editorial_note | "Co-authored with Kent Beck (and Brant, Opdyke, Roberts)" | "The first edition is credited 'With Kent Beck, John Brant, William Opdyke, and Don Roberts'" | CORRECTED | [S:13] |
| body_of_work[1].editorial_note | "Second edition rewritten solo in JavaScript, 2018" | "the 2018 second edition, again 'with Kent Beck', moved from Java to JavaScript" | CORRECTED | [S:11] [S:44] |
| body_of_work[1].editorial_note | "The rewrite is itself an argument that the moves are language-independent discipline" | Deletion | Deletion | |
| body_of_work[2].editorial_note | "The catalog that named *Domain Model* ... *Repository*" | "The catalog that sets out *Domain Model* ... *Repository* under those names, among forty or so patterns" | NARROWED | [S:16] |
| body_of_work[2].editorial_note | (no co-author credit) | "Written with Dave Rice, Matthew Foemmel, Edward Hieatt, Robert Mee and Randy Stafford" | CORRECTED | [S:16] [S:12] |
| body_of_work[2].editorial_note | "The book most enterprise software is still discussed in" | Deletion | Deletion | |
| body_of_work[3].year | 2006 | 2000 | CORRECTED | [S:5] |
| body_of_work[3].editorial_note | "The original definitive statement of CI as a named discipline" | "First published in 2000, rewritten in 2006 and revised in 2024 ... Fowler credits the practice to Kent Beck, who 'defined the practice'" | CORRECTED | [S:5] [S:6] |
| body_of_work[4].editorial_note | "The defining article" | Deletion | Deletion | |
| body_of_work[4].editorial_note | "Fowler's own public walking-back of the 2014 over-enthusiasm. The public-revision discipline at scale" | "The 2014 article closes by saying 'not enough time has passed ...'; Microservice Premium takes aim at teams 'too eager to embrace microservices'. Neither entry calls itself a correction of the article" | NARROWED | [S:19] [S:20] |
| body_of_work[5].editorial_note | "`FeatureToggle`, `TechDebtQuadrant`, `InverseConwayManeuver`" | "`FeatureFlag` (formerly `FeatureToggle`), `TechnicalDebtQuadrant`, and `ConwaysLaw`, whose third response to the law is the inverse Conway maneuver" | CORRECTED | [S:22] [S:38] |
| reading, sentence 3 | "His method is to name the moves" | "His method is to write the moves down by name" | NARROWED | [S:2] [S:3] [S:10] |
| reading, sentence 5 | "The method has limits of its own:" (lead-in tying the microservices sequence to the method) | Deletion | Deletion | |
| reading, sentence 5 | "his 2014 microservices article undersold the cost of distribution, and later follow-ups had to correct it" | "said it was too early for a full judgement ... the record supports reading those entries either as a correction of the article or as its stated caution worked out" | NARROWED | [S:19] [S:20] |
| limits[0].headline | "The 2014 microservices article was too lenient on operational cost" | "The 2014 microservices article and its 2015 follow-ups support two readings" | NARROWED | [S:19] [S:20] |
| limits[0].elaboration | "Fowler's own follow-ups (`MonolithFirst`, `MicroservicePremium`, `MicroservicePrerequisites`) are the public retraction" | the article's closing caution, quoted; Microservice Premium "took aim at teams 'too eager to embrace microservices'" and Monolith First reported that "Almost all the successful microservice stories ..."; "Neither entry calls itself a correction or a retraction" (`MicroservicePrerequisites` dropped, no line) | CORRECTED | [S:19] [S:20] |
| limits[0].elaboration | "The article undersold the price of distribution: observability, network reliability, partial-failure modes ..." | "One reading is that the article undersold the operational cost of distribution and the entries correct it; the other is that they work out the caution the article already stated" | NARROWED | [S:19] [S:20] |
| limits[0].elaboration | "not as a replacement for it" | Deletion | Deletion | |
| still_load_bearing_despite | "Even with the microservices over-enthusiasm" | "Even with the open question over the 2014 microservices article" | NARROWED | [S:19] [S:20] |
| still_load_bearing_despite | "The vocabulary you use to think about your code is mostly his" | Deletion | Deletion | |
| still_load_bearing_despite | "The reason 'let's refactor that' is a conversation rather than a fight is mostly his" | Deletion | Deletion | |
| adjacent_thinkers[0].edge_label | "Co-authored *Refactoring*" | "Credited on both editions of *Refactoring*" | NARROWED | [S:11] [S:13] |
| adjacent_thinkers[0].edge_label | "coined code smell with Fowler" | "coined code smell while helping with that book" | CORRECTED | [S:2] |
| adjacent_thinkers[0].edge_label | "the 'make change easy' motto" | "the 'make the change easy' motto" | SAME | [S:45] |
| adjacent_thinkers[2].edge_label | "bounded context, ubiquitous language, aggregate root, anti-corruption layer all enter the wider community through Fowler's foreword, bliki carries, and pattern catalog integration" | "Fowler wrote the foreword to Evans's *Domain-Driven Design* (2003) and explains its bounded context on the bliki, citing the book as 'the canonical source'" | NARROWED | [S:40] [S:3] |
| adjacent_thinkers[5].edge_label | "Fowler taxonomized into the *Inverse Conway Maneuver*" | "to which Fowler sets out three responses. The third is the *inverse Conway maneuver*, a term he credits to Jonny LeRoy and Matt Simons (2010)" | NARROWED | [S:38] [S:21] |
| further_in.start_here | "`IsQualitySoftwareWorthTheCost` (bliki)" | "*Is High Quality Software Worth the Cost?* (2019 article)" | CORRECTED | [S:41] |
| further_in.then_read[1] | "*Continuous Integration* article (2006)" | "(2000, rewritten 2006)" | CORRECTED | [S:5] |
| long_read.summary | "Every Fowler artifact (pattern, refactoring, smell, ... bounded context ...)" | "Every artifact Fowler writes up (...)" | NARROWED | [S:2] [S:3] [S:6] |
| named_frames[4].co_originators[0].role | "original XP practice" | "original XP practice; Fowler's article says 'Kent defined the practice'" | SAME | [S:6] |
| last_updated | 2026-05-25 | 2026-10-15 | SAME | (metadata) |

## Long-read preface

| field | before (short quote) | after (short quote) | class | supporting |
|---|---|---|---|---|
| para 2 | "because the word in its current meaning is his" | "his 1999 book on the practice is the one he says has had 'a high impact on the world of software development'" | CORRECTED | [S:43] [S:10] |
| para 2 | "You read him every time someone draws the test pyramid on a whiteboard" | Deletion | Deletion | |
| para 2 | "he either named, popularized, or codified" | "he either popularized or codified" | NARROWED | [S:2] [S:3] [S:6] [S:23] |
| compressed bio | "rather than as a working executive or a working academic" | Deletion (leadership record restated under "What he is not") | Deletion | |
| compressed bio | "He started out in London building enterprise systems in the early 1990s, moved to the United States in the mid-90s" | "He worked for Coopers & Lybrand and a small company called Ptech, became an independent consultant in 1991, moved to Massachusetts in 1994" | CORRECTED | [S:27] [S:13] |
| compressed bio | "a role with no executive authority and no operational responsibility, designed expressly to leave him free to think and write" | "a title whose irony he says he enjoys: 'I'm not chief of anybody and don't do any science'. He sees his main role as 'helping my colleagues ...'" | CORRECTED | [S:27] |
| compressed bio | "co-author of *Refactoring* (...; 2nd ed solo in 2018)" | "author of *Refactoring* (...; 2nd ed 2018, with Kent Beck)" | CORRECTED | [S:11] [S:13] |
| compressed bio | "two of the most influential industry books of the 2000s, both carried wider by his endorsement" | Deletion | Deletion | |
| compressed bio | "He coined the term *bliki* ... since the late 1990s" | "He has written a bliki ... since 2003. Ward Cunningham gave his version the name, and by Fowler's own account the word and the form were already in use elsewhere; the site itself started as a home for articles ..." | CORRECTED | [S:1] [S:14] [S:36] |
| compressed bio | "He gives keynotes more than he writes new books at this point" | "He retired from speaking in 2021 and still writes for and edits martinfowler.com" | CORRECTED | [S:14] |
| compressed bio | "The keynote that became most-cited in the last decade is the one that opens the *Microservices* article" | Deletion | Deletion | |
| compressed bio | "The keynote that the next generation of engineers will probably remember ..." | Deletion | Deletion | |
| accomplishments, Refactoring | "Co-authored with Kent Beck (and Brant, Opdyke, Roberts)" | "Credited 'With Kent Beck, John Brant, William Opdyke, and Don Roberts'" | CORRECTED | [S:13] |
| accomplishments, Refactoring | "The book that gave the word *refactoring* its current technical meaning" | "The book Fowler says has had 'a high impact ...'. The word is older: Fowler places the practice's foundations in the Smalltalk community, reports that its creators did not know where the term came from, and cites Leo Brodie's *Thinking Forth* (1984) as its first known printed use. William Opdyke wrote 'the first thesis on refactoring' in 1992" | CORRECTED | [S:43] [S:10] [S:26] |
| accomplishments, Refactoring | "Second edition rewritten by Fowler solo in JavaScript, 2018" | "The 2018 second edition, again 'with Kent Beck', moved from Java to JavaScript" | CORRECTED | [S:11] [S:44] |
| accomplishments, PoEAA | "The catalog that named *Domain Model*, ... *Table Module*, ... and dozens of others" | "The catalog that sets out [seven patterns] under those names, among forty or so patterns" (*Table Module* dropped, no line) | NARROWED | [S:16] |
| accomplishments, PoEAA | (no co-author credit) | "Written with Dave Rice, Matthew Foemmel, Edward Hieatt, Robert Mee and Randy Stafford" | CORRECTED | [S:16] [S:12] |
| accomplishments, PoEAA | "The book that built the vocabulary most enterprise software is still discussed in" | Deletion | Deletion | |
| accomplishments, CI | "2006 article. The original definitive statement of CI as a named discipline" | "2000 article, rewritten 2006 and revised 2024. Fowler credits the practice to Kent Beck, who 'defined the practice' ..." | CORRECTED | [S:5] [S:6] |
| accomplishments, Microservices | "The defining article" | Deletion | Deletion | |
| accomplishments, Microservices | "Later self-flagged for being too lenient on operational cost: the public-revision discipline at work" | "Followed in 2015 by Fowler's bliki entries Microservice Premium, aimed at teams 'too eager to embrace microservices', and Monolith First. Neither entry calls itself a correction of the article" | CORRECTED | [S:20] [S:19] |
| accomplishments, DSL | "The book that gave the DSL distinction its current shape" | Deletion | Deletion | |
| accomplishments, "Coined or popularized" | "bliki, code smell (with Beck), ... tech debt quadrant (extending Cunningham's 1992 metaphor), ... strangler fig application, ... inverse Conway maneuver" | "Named, or carried with the originators credited: strangler fig application (his name and metaphor, for a practice his 2004 post credits to a project Chris Stevenson was involved in), the technical debt quadrant (his division of Ward Cunningham's metaphor), the bliki (named by Cunningham), code smell (coined by Kent Beck), and the inverse Conway maneuver (coined by Jonny LeRoy and Matt Simons ...)" | CORRECTED | [S:4] [S:32] [S:46] [S:23] [S:1] [S:2] [S:21] [S:38] |
| accomplishments, "Coined or popularized" | "test pyramid", "feature toggle (taxonomy with Pete Hodgson)", "branch by abstraction", "polyglot persistence (with Sadalage)" | Deletion | Deletion | |
| accomplishments, Chief Scientist | "Author of the ThoughtWorks Technology Radar in collaboration with Rebecca Parsons, James Lewis, and others" | Deletion | Deletion | |
| accomplishments, Chief Scientist | "One of the most cited working software writers of the last twenty-five years" | Deletion | Deletion | |
| What he is not | "He is not an executive" | "In his words he has 'mostly avoided any business leadership responsibilities', and he has served on Thoughtworks's primary global leadership team since 2017" | CORRECTED | [S:27] |
| What he is not | "Kent Beck for refactoring and TDD" | "Kent Beck for continuous integration, code smell and TDD, William Opdyke and the Smalltalk community for refactoring" | CORRECTED | [S:10] [S:6] [S:2] |
| What he is not | "Greg Young for CQRS and event sourcing" | "Greg Young for CQRS" (event sourcing dropped: Fowler's CQRS entry credits Young for CQRS only) | NARROWED | [S:47] |
| Where to find him, bliki | "start with `IsQualitySoftwareWorthTheCost`, ..., `FeatureToggle`, or `TechDebtQuadrant`" | "start with `StranglerFigApplication`, `BoundedContext`, `FeatureFlag` (formerly `FeatureToggle`), or `TechnicalDebtQuadrant`" | CORRECTED | [S:22] [S:41] |
| Where to find him, articles | "*Microservices* (2014), *Continuous Integration* (2006), ..." | "*Is High Quality Software Worth the Cost?* (2019), *Microservices* (2014), *Continuous Integration* (2000, rewritten 2006), ..." (the 2019 article moved here from the bliki list) | CORRECTED | [S:41] [S:5] |
| Where to find him, thoughtworks.com | "The Tech Radar ... is one of his ongoing artifacts" | Deletion | Deletion | |
| Where to find him, GOTO | "he speaks regularly" | Deletion (he "retired from speaking in 2021", [S:14]) | Deletion | |
| What this book is not | "the bliki entry `IsQualitySoftwareWorthTheCost`. That essay is the keystone" | "the 2019 article *Is High Quality Software Worth the Cost?*. That article is the keystone" | CORRECTED | [S:41] |
| last_updated | 2026-05-23 | 2026-10-15 | SAME | (metadata) |

## Review, 2026-10-15

An independent check of the pass above against `git diff origin/main -- src/`, the ledger lines
each row cites, and SCHEMA section 8. Every page change has a row, and every row matches the diff.
No row is NEW or WIDENED. Changes made in this review:

- **Refactoring etymology, page and preface.** The pass wrote that Fowler "traces [the word] to the
  Smalltalk community and to William Opdyke's 1992 thesis". [S:10] does not say that. Fowler places
  the practice's foundations in the Smalltalk community, reports that its creators "had no idea"
  where the term came from, and cites Bill Wake's find of the first printed use in Leo Brodie's
  *Thinking Forth* (1984); Opdyke's thesis is "the first thesis on refactoring", and [S:10] does not
  name it as the word's source. Both fields now say what [S:10] and [S:26] say. Rows amended.
- **Microservices follow-ups, three fields.** "Too eager to embrace microservices" is in
  Microservice Premium only ([S:20]); the pass gave it to both 2015 entries. body_of_work[4],
  limits[0] and the preface now attach each quotation to its own entry. Rows amended.
- **Greg Young, preface "What he is not".** The pass deleted "Greg Young for CQRS and event
  sourcing" on the ground that the 2017 article does not mention Young. That article was never the
  source for the credit. Fowler's CQRS entry says it is "a pattern that I first heard described by
  Greg Young", so the CQRS half is restored, sourced to a new line, [S:47]. The event-sourcing
  half stays out, since no line records Fowler crediting Young for it. Row now NARROWED.
- **Beck's line.** The working line read "Make change easy"; [S:45] quotes "make the change easy,
  then make the easy change". The quotation is corrected in working_line and in the Kent Beck edge
  label. SAME rows.
- **Reclassified rows.** The strangler fig co-originator row added Stevenson and Pols as credited
  people the page had not named, so its class is now CORRECTED. The PoEAA rows on page and
  preface bundled the narrowed naming claim with a new co-author credit; each is now split into a
  NARROWED row and a CORRECTED row citing [S:16] and [S:12].
- **Missing row.** The deletion of the lead-in "The method has limits of its own:" in `reading`
  had no row; one is added.

Checked and left: the leadership-team and Chief Scientist corrections follow section 8 (the record
in Fowler's words, no verdict); the "two readings" limit leaves room for both; no corrected claim
survives in another field (grep for coinage, "late 1990s", solo second edition, retraction,
`TechDebtQuadrant`, `InverseConwayManeuver`, keynotes and the Tech Radar came back clean); the
open items listed at the end of `ledger-findings.md` remain open.
