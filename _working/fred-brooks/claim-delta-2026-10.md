# Fred Brooks: claim-delta table, remediation pass 2026-10-15

Page: `src/content/thinkers/fred-brooks.md`. Ledger: `_working/fred-brooks/facts.md`. One row per
changed sentence or field. Non-SAME rows first. One row is NEW (the tagline's first clause, relabelled in the review below); no row is WIDENED.

| field | before (short quote) | after (short quote) | delta | supporting |
|---|---|---|---|---|
| active_years | "1956–2022" | "1956–2020" | CORRECTED | [S:1] [S:7] |
| background | "Left IBM in 1964 to found the Computer Science department" | "Founded the Computer Science department ... in 1964 while still at IBM, which he left in 1965" | CORRECTED | [S:1] [S:3] [S:8] |
| background | "where he taught and wrote until his death" | "Retired from teaching in 2013 by IEEE Spectrum's account (2015 by Wikipedia's) and stayed active in the university's research until 2020" | CORRECTED | [S:5] [S:7] |
| background | "at the time the largest software project ever attempted" | "IEEE Spectrum calls OS/360 \"the world's largest software project at the time\"; ACM, more cautiously, \"perhaps the largest operating system project of its time.\"" | NARROWED ("ever attempted" to "at the time", attributed to both sources; revised in review) | [S:7] [S:2] |
| background | "Led the team that built the IBM System/360 hardware and OS/360 operating system" | "Managed the development of the IBM System/360 hardware and then the OS/360 operating system" | NARROWED | [S:4] [S:30] |
| named_frames[2].attribution_kind | "original" (Brooks alone) | "extended", co_originators aristotle and nancy-greenwood-brooks with roles as Brooks credits them | CORRECTED | [S:14] [S:15] [S:16] |
| named_frames[5].attribution_kind | "original" (Brooks alone) | "extended", co_originator harlan-mills, "proposed the chief programmer team in 1971 (IBM report FSC71-5108)" | CORRECTED | [S:23] [S:24] [S:25] |
| named_frames[5].one_line_gloss | "The prescription that came with Brooks's Law" | "Harlan Mills proposed it in 1971 as the chief programmer team, and Brooks presents it in chapter 3 ... under the heading \"Mills's Proposal\"" | CORRECTED | [S:23] [S:24] |
| named_frames[5].one_line_gloss | "do not scale teams linearly when you can scale narrowly" | Deletion | Deletion | |
| limits[0].elaboration | "Brooks proposed organizing software work around small specialist teams" | "Brooks presented Harlan Mills's proposal for organizing software work around small specialist teams" | CORRECTED | [S:23] [S:24] |
| inclusion_rationale | "Coined or named ... essential vs accidental complexity, the surgical team" | "applied to software the essence and accident distinction he credits to Aristotle; and presented Harlan Mills's surgical team" | CORRECTED | [S:15] [S:23] [S:24] |
| inclusion_rationale | "Coined or named coordination headwind (as Brooks's Law), conceptual integrity, the second-system effect" | "Named Brooks's Law, conceptual integrity and the second-system effect" | NARROWED | [S:18] [S:22] [S:33] |
| inclusion_rationale | "the single most cited book in software engineering ... and the single most cited essay" | "Wrote *The Mythical Man-Month* (1975) and *No Silver Bullet* (1986)." | NARROWED | [S:9] [S:11] |
| why_they_matter_as_a_thinker | "The names he produced (... surgical team, essential vs accidental complexity ...)" | "The names he produced (...) and the ones he built on others' work and credited (the surgical team, from Harlan Mills; essential vs accidental complexity, following Aristotle)" | CORRECTED (revised in review) | [S:14] [S:15] [S:16] [S:23] [S:24] |
| tagline | "The first person to name what makes software hard" | "Split software's difficulties into essence and accident, following Aristotle" | NEW (relabelled from CORRECTED in review: the "first" superlative is deleted and a different proposition takes its place; it is sourced and already stated in thirty_second_take, so it stays and goes to the domain check) | [S:12] [S:15] |
| tagline | "the first to argue that no tool ever fixes the essential parts" | "argued that no single development promised an order-of-magnitude gain within a decade" | NARROWED ("would bring" to "promised" in review, the essay's verb) | [S:12] |
| thirty_second_take | "no single technology would reduce essential complexity by an order of magnitude" | "no single development, in technology or management, promised even one order-of-magnitude improvement within a decade" | NARROWED | [S:12] |
| thirty_second_take | "survived fifty years of attempted refutation" | "survived decades of attempted refutation" | NARROWED | [S:9] [S:11] |
| thesis | "promise to reduce *essential* complexity ... are silver bullets and they do not exist" | "promise an order-of-magnitude cut in *essential* complexity ... are the silver bullets, and Brooks argued that no single development promised one within a decade" | NARROWED | [S:12] |
| named_frames[1].one_line_gloss | "No single technology or methodology will reduce *essential* complexity by an order of magnitude; only accidental complexity yields to tooling" | "No single development, in technology or management, promises even one order-of-magnitude improvement within a decade; most past gains came from removing accidental difficulties" | NARROWED | [S:12] |
| reading | "no single development shrinks the essential part by an order of magnitude" | "no single development promises an order-of-magnitude gain within a decade" | NARROWED | [S:12] |
| limits[1].elaboration | "essential complexity would not yield an order of magnitude in any decade" | "no single development promised an order-of-magnitude gain within a decade" | NARROWED ("would bring" to "promised" in review) | [S:12] |
| limits[1].elaboration | "He was right about essential." | "On the essential difficulties he was right." | SAME (reworded in review; the remediated first sentence no longer named essential complexity, so the old sentence dangled) | |
| body_of_work[1].editorial_note | "The single most-cited essay in software engineering." | Deletion | Deletion | |
| body_of_work[1].editorial_note | "Names essential vs accidental complexity" | "Applies to software the essence and accident distinction that Brooks credits to Aristotle" | CORRECTED | [S:15] |
| body_of_work[1].editorial_note | "predicts no order-of-magnitude productivity tool inside a decade, and holds up forty years on" | "It predicts no order-of-magnitude productivity tool inside a decade and holds up forty years on" | SAME (sentence split in review) | |
| body_of_work[1].editorial_note | "should be read against this essay, not in ignorance of it" | "should be read against this essay" | Deletion (review; "X, not Y" cadence) | |
| body_of_work[3].editorial_note | "The talk version of the 2010 book" | Deletion | Deletion | |
| body_of_work[3].editorial_note | "given on receipt of the 1999 Turing Award" | "Given on receipt of the 1999 Turing Award, as later citations record it" | NARROWED | [S:28] [S:29] [S:31] |
| body_of_work[3].editorial_note | "A useful one-hour introduction to Brooks's late thinking" | "An introduction to Brooks's late thinking" | NARROWED | (length deleted; no line supports it) |
| further_in.then_read[2] | "Brooks's 1999 Turing Award Lecture (the talk version of *The Design of Design*)" | "Brooks's Turing Award lecture, *The Design of Design* (cited as 2000)" | CORRECTED | [S:31] |
| adjacent_thinkers[0].edge_label | "The lineage is explicit; Komoroske attributes Brooks throughout." | Deletion | Deletion | (Komoroske ledger [S:13] there records no mention of Brooks) |
| adjacent_thinkers[0].edge_type | "extends" | "parallel" | NARROWED (review; matches the Komoroske page's edge back, which moved antecedent to parallel) | (Komoroske ledger [S:13] there) |
| adjacent_thinkers[0].edge_label | "Komoroske generalized Brooks's narrow engineering-team claim into coordination headwind: the same physics, applied to all coordination work." | "Komoroske's coordination headwind covers ground similar to Brooks's narrow engineering-team claim, for all collaborative work. Komoroske's homepage says his argument started when he was studying Wikipedia's user community and was informed by web standards work. His deck, his Schelling-points essay and his notes do not mention Brooks, so the pairing is this site's reading." | CORRECTED (review; the derivation is not in the record, and his own account of his route is) | (Komoroske ledger [S:1] [S:4] [S:9] [S:13] [S:34] there) |
| adjacent_thinkers[0].edge_label | "Read in this order: Brooks 1975 → Komoroske 2018." | "Read Brooks's 1975 book first, then the Coordination Headwind deck (online by 2021)." | CORRECTED (review; no source dates the headwind work to 2018) | (Komoroske ledger [S:19] there) |
| thirty_second_take | "what Komoroske later generalized as coordination headwind" | "ground that Komoroske's coordination headwind later covered for all collaborative work" | NARROWED (review; drops the derivation claim) | (Komoroske ledger [S:13] there) |
| named_frames[0].one_line_gloss | "is what Komoroske later generalized as coordination headwind" | "covers ground similar to what Komoroske later called coordination headwind; the pairing is this site's reading" | NARROWED (review; drops the derivation claim) | (Komoroske ledger [S:13] there) |
| still_load_bearing_despite | "weight earned over fifty years of attempted refutation" | "weight earned over decades of attempted refutation" | NARROWED (review; the same lowering as thirty_second_take, since No Silver Bullet dates from 1986) | [S:9] [S:11] |
| last_updated | "2026-05-25" | "2026-10-15" | SAME (metadata) | |
| adjacent_thinkers[8].edge_label | "Forsgren's research gives Brooks's coordination-cost claim an empirical measure, lead time for changes" | "On this site's reading, lead time for changes, the measure in Forsgren's research, is one way to measure Brooks's coordination cost" | NARROWED | (Forsgren ledger [S:31] there: no source shows *Accelerate* citing Brooks) |
| background | "born 1931 in Durham ... died 2022 in Chapel Hill"; "lessons from running OS/360 became *The Mythical Man-Month* in 1975"; "Won the Turing Award in 1999" (reflowed only) | unchanged wording | SAME | [S:1] [S:2] [S:3] |

## Review, 2026-10-15

An independent review of the pass above against `git diff origin/main`, the ledger lines each row
cites, and SCHEMA section 8. Every page change in the diff had a row, and every row matched the
diff. The corrections to Mills, Aristotle and Nancy Greenwood Brooks follow section 8: they state
what Brooks's own text and preface say and pass no verdict on anyone. What I changed:

- **Tagline relabelled NEW.** The "first person to name what makes software hard" superlative was
  deleted and a different proposition (the essence and accident split, following Aristotle) took
  its place. That is a new proposition for the field, so CORRECTED was the wrong label. It is
  sourced [S:15] and already stated in `thirty_second_take`, so it stays for the domain check.
- **"would bring" to "promised"** in the tagline and `limits[1]`. The essay's claim is that no
  development "promises" an order-of-magnitude improvement [S:12]; "would bring" turned it into a
  forecast of outcomes the ledger does not quote.
- **OS/360 restored to source strength.** The pass kept only ACM's hedged "perhaps the largest
  operating system project," although IEEE Spectrum, on the same ledger, says "the world's largest
  software project at the time" [S:7]. Keeping only the weaker source softened a fact below a
  source the ledger holds. `background` now quotes both, attributed.
- **The Komoroske derivation survived in three fields.** The pass deleted "Komoroske attributes
  Brooks throughout" but left "Komoroske generalized Brooks's claim" in `thirty_second_take`,
  `named_frames[0].one_line_gloss` and the edge label, plus "Komoroske 2018", a date the Komoroske
  page has already withdrawn (his ledger [S:19] there: online by 2021, nothing dates it to 2018).
  All three now present the pairing as the site's reading. The edge label gives his own account of
  his route (his ledger [S:1] there), as section 8 and the convergence rule in section 4 ask, and
  the edge type moves from `extends` to `parallel` to match the Komoroske page's edge back.
- **"fifty years of attempted refutation"** survived in `still_load_bearing_despite` after the pass
  lowered the same phrase in `thirty_second_take`. Now "decades".
- **Wording.** `why_they_matter_as_a_thinker` said Brooks "credited to others" the surgical team and
  essential vs accidental complexity, which undersells the record in the other direction: the
  application to software is his [S:16]. It now says he built on others' work and credited it,
  naming Mills and Aristotle. The comma chain "which he credits to Aristotle, to software" in
  `inclusion_rationale` and `body_of_work[1]` was restructured. `limits[1]`'s "He was right about
  essential" no longer had a referent and was reworded. "not in ignorance of it" was deleted from
  `body_of_work[1]`. `last_updated` moved to 2026-10-15.

Left as found, with reasons:

- `named_frames[0]` still maps Brooks's Law to the concept slug `coordination-headwind`, which the
  audit flagged. Changing it touches the concept page, which is outside this slug's files.
- The Forsgren edge keeps `edge_type: extends`. It mirrors the `antecedent` edge on Forsgren's page,
  which her ledger leaves standing on chronology ([S:31] there); the label already says the
  measure is this site's reading. Forsgren's own label ("empirically vindicated") is hers to fix.
- Rich Hickey's page credits Brooks with accidental complexity without the antecedents. The ledger
  asks for that credit to be reread now that `named_frames[2]` is `extended`; it is on Hickey's
  page, outside these files.
- Contrast cadence in fields the pass did not touch (`thesis` "topology, not by individual
  programmer productivity"; `body_of_work[2]`; `limits[2]` headline) predates this pass. Rewriting
  it is a separate style pass with its own claim-delta rows.
- `[S:6]` is verified but uncited on the page; it supports the finding rather than a field.

Gates after review: `bun scripts/fact-ledger.ts fred-brooks` PASS (15 factual fields cited, one
unused-fact warning for [S:6]); `bun scripts/reading-gates.ts fred-brooks` PASS.
