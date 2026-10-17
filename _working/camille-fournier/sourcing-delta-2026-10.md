# Camille Fournier: sourcing delta, 2026-10-16

Sourcing pass on the two frames that named no originator, the JPMorgan title, and the approved
Reilly credit on glue. One row per changed field. ADDITION rows add a proposition and are for
Julie's review. New ledger lines: [S:39] to [S:43].

| field | before | after | SAME / NARROWED / CORRECTED / ADDITION / Deletion | supporting [S:n] |
|---|---|---|---|---|
| named_frames[0].co_originators (management-career-path) | none | `ram-charan`: "*The Leadership Pipeline* (2001, with Stephen Drotter and James Noel): an earlier general-management model of six transitions, each needing new skills; no located source shows *The Manager's Path* draws on it" | ADDITION (option a: earlier holder found; credits the general-management sequence only, and says no link to her book was located) | [S:39] [S:40] |
| named_frames[0].attribution_kind | "popularized" | unchanged | SAME | [S:39] |
| named_frames[0].one_line_gloss | "Codifies a career structure the industry already had, and gives each step a job description." | unchanged; already claims no origination | SAME | [S:39] [S:40] |
| named_frames[9].derived_from (public-engineering-ladder) | none | `dual-ladder` | ADDITION (option a, as a concept: the two-track split predates her ladder; no person located as the dual ladder's originator, so it goes in `derived_from`, not `co_originators`) | [S:41] [S:42] [S:44] |
| named_frames[9].one_line_gloss, new sentence 3 | none | "The two-track split itself is older: research on engineers was already studying the dual ladder by 1989." | ADDITION | [S:42] [S:44] |
| named_frames[9].attribution_kind | "popularized" | unchanged; the search found no earlier public ladder but does not rank hers first, so no `original` refiling | SAME | [S:41] [S:24] |
| named_frames[4].co_originators (glue) | ian-nowland only | adds `tanya-reilly`: "\"Being Glue\" (talk and blog post): the human sense of glue work, which the book credits in chapter 13" | ADDITION (the brief for this pass calls it an approved credit, but this working set holds no record of the approval, see Review; the line records the book's own credit) | [S:37] |
| named_frames[4].one_line_gloss, new sentence 3 | none | "For the human sense, glue work, the book credits Tanya Reilly." | ADDITION | [S:37] |
| background, JPMorgan sentence | "joined JPMorgan Chase in 2022 as a managing director and global head of engineering and architecture" | "joined JPMorgan Chase in 2022, where she was a managing director and global head of engineering and architecture" | NARROWED (title now has a second source, a Reforge profile headline; neither source dates it, so the at-hire timing is dropped) | [S:2] [S:43] [S:15] [S:16] |
| last_updated | "2026-10-15" | "2026-10-16" | SAME (date of this pass) | n/a |

## Carriers lowered

- `sources.md` line 11 credited "managing director" to the eFinancialCareers and Hedgeweek
  reports, which give only her functional title. It now names Wikipedia and the Reforge profile
  as the title's sources. No other carrier of the title on this page or in this working set.
- The page's "managing director" appears once (background). No other page in
  `src/content/thinkers/` gives her that title.

## Searches and their bounds

- [S:39] tested the sequence-of-roles structure for management in general. It did not test the
  engineering-specific map beyond one query, and it did not read *The Leadership Pipeline*
  itself. Search summaries say its preface credits Walter Mahler's 1970s GE work; that credit is
  not on the ledger and not on the page.
- [S:41] tested two parts: the management/technical track split (older, the dual ladder, by
  1989) and public posting (nothing earlier than 26 March 2015 found). Her retrospective
  returned 403 and was not re-read for any credit she gives.

## Review, 2026-10-16

This is an independent review of the pass, run on 2026-10-17 against `git diff origin/main`. Every page change in the diff has a row above, and every row matches the diff. I reopened each new ledger line against its fetched copy in `src/`. The Computerworld quotations in [S:40], "six important transitions" and "truism" among them, match the page dated 2001-04-17. The RePEc record in [S:42] gives the Allen title, the number 3077-89 and the date 1989, and has no abstract. The Reforge headline in [S:43] matches word for word, and the profile names no other employer and gives no date. No row labelled SAME or NARROWED adds a proposition. The JPMorgan row drops the at-hire timing and keeps the title as strong as its two sources make it.

Fixed in place:

- **Nothing sourced what "dual ladder" means.** [S:41] and the page take the term to mean parallel management and technical tracks. [S:42], though, is only a title with no abstract, so it never defines the term. A new fact, [S:44], supplies the meaning: MIT OpenCourseWare slides that set a managerial ladder beside a technical one and cite Allen and Katz (1986). [S:44] is now cited on both public ladder rows and mapped in `page-claims.md` on `named_frames[9].attribution` and `derived_from`. The page wording stays as it was. "By 1989" is still true, and the earlier 1986 date stays on the ledger only, because putting it on the page would add a proposition.
- **The ladder's new gloss sentence had no mapping.** `page-claims.md` mapped [S:42] only on `derived_from`, but the new gloss sentence depends on it. [S:42] is now on `named_frames[9].attribution` too.
- **[S:2] still said it was the only source for "managing director".** Its note now says that [S:43] became the second source on 2026-10-16.
- **`reading-claims.md` said every frame gained a gloss sentence.** The manager's path frame gained a credit and no gloss sentence. The note now says so.

How far each antecedent search reaches, compared with what the page claims:

- [S:39] covered the general-management sequence and ran one software query. The Charan role claims only an earlier general-management model and says no located source links it to her book, so it stays within what was searched. The search does not show that Charan and his co-authors originated the model (the review it cites calls the idea a "truism"), and the role does not claim they did. The `popularized` filing and the gloss stay as they were.
- [S:41] found no public ladder earlier than 26 March 2015, but it left Enova's post undated, so it cannot rank her ladder first. The page only reports her own "one of the first" claim and attributes it to her, which the search supports.

Left for Julie:

- **The Reilly credit.** The row above calls the credit approved, but this working set has no record of that approval. `ledger-findings.md` only suggested that the note "could mention both" senses. The new gloss sentence is accurate to [S:37]. Adding her to `co_originators` says more, though. The schema reserves that field for frames with several originators, this frame's gloss covers the technical sense, and her role text limits her to the human sense. The wording meets SCHEMA section 8: it states the book's own credit and makes no judgment. If no one can find the approval, the gloss sentence can carry the credit by itself and the `co_originators` entry can come out.

Checks after the review: `bun scripts/fact-ledger.ts camille-fournier` PASS (44 facts, 34 fields cited), `bun scripts/reading-gates.ts camille-fournier` and `bun scripts/verify.ts`, with the results in the run return.
