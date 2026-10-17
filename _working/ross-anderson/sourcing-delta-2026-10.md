# Ross Anderson: sourcing delta, 2026-10-16

Sourcing pass for the one frame the build flagged as naming no originator:
`security-engineering-as-a-discipline` (`popularized`). Outcome (c): an earlier institutional use
was found and sourced, but it names no person, so no co-originator can be credited and the kind
stays `popularized`. The gloss is narrowed so it implies no origination. The build warning
therefore still fires for this frame; that is the honest state, and it is listed for Julie.

| field | before | after | SAME / NARROWED / CORRECTED / ADDITION / Deletion | supporting [S:n] |
|---|---|---|---|---|
| facts.md | no ledger line recorded an antecedent search for this frame | `[S:61]`: two searches; MIL-STD-1785 "System Security Engineering Program Management Requirements" dated 01 SEP 1989; no person named as coiner or originator; tested the phrase and an earlier engineering practice under that name, not a discipline in the frame's sense, textbook priority or the chairs (revised in review, see below) | ADDITION | [S:61] |
| named_frames[5].one_line_gloss, sentence 2 | "The phrase predates Anderson and no coiner is established here." (unsourced) | "The phrase does not start with Anderson: a US military standard of 1989 already set requirements for system security engineering programs, and no coiner is established here." | ADDITION (adds the 1989 standard as the evidence for an existing claim; the earlier "nor the discipline" extension was WIDENED past [S:61] and was removed in review) | [S:61] |
| named_frames[5].one_line_gloss, sentence 3 | "What the record supports is the building:" | "What the record supports is his part in the building:" | NARROWED ("his part" concedes others built it too, which [S:61] shows for the phrase; the BCS line says "his many contributions to building", so it supports exactly this). "academic" was removed in review because it narrowed below [S:12] and [S:12a] | [S:12] [S:12a] [S:14] [S:8] [S:9] |
| named_frames[5].attribution_kind | popularized | popularized | SAME | [S:61] |
| named_frames[5].co_originators | none | none (the earlier source is a DoD standard, not a person) | SAME | [S:61] |
| page-claims.md, named_frames[5].attribution | [S:12] [S:12a] [S:14] [S:8] [S:9] [S:54] | adds [S:61] | ADDITION (citation only) | [S:61] |
| reading-claims.md, trailing note | none | a paragraph recording that the reading sentence on this frame was checked and did not change | ADDITION (process note only; no reading sentence or ID changed; row added in review) | [S:61] |

Carriers checked by grep for any priority clause on this frame (`predates`, `coiner`, `pioneer`,
`founded the field`, `first to`, `security engineering`): the only other carrier is the reading
sentence "He wrote a standard textbook...", which claims no priority and is unchanged. No long read
exists for this page.

## Review, 2026-10-16

Independent review of the pass above, done by reopening both fetched copies under
`_working/ross-anderson/src/` and the diff against origin/main. Four defects, all fixed in place.

1. **Sentence 2 widened past its source.** "Neither the phrase nor the discipline starts with
   Anderson" rested on MIL-STD-1785, which EverySpec describes as establishing "the formats,
   contents and procedures for a contract SSE Management Program". That is evidence of a named
   engineering practice in 1989, not of a discipline in the sense sentence 1 defines (a body of
   knowledge, a textbook, named chairs), and the MITRE briefing points the other way, saying in 2017
   that "There is no security equivalent to MIL-STD-882E". The search does not bound the discipline
   claim, so it was cut. Before: "Neither the phrase nor the discipline starts with Anderson". After:
   "The phrase does not start with Anderson". Proposition before: the phrase and the discipline
   both predate him. After: the phrase predates him. NARROWED, back to the scope of the
   pre-pass sentence, which [S:61] now supports.
2. **"academic" narrowed below the source.** The BCS citation ([S:12]) credits "his many
   contributions to building security engineering into a discipline", and Computer Weekly
   ([S:12a]) says "developing security engineering as a discipline"; neither limits it to the
   academic side. "his part in the academic building" became "his part in the building".
   Proposition before (pass): the record supports his credit for the academic side only. After:
   the record supports his share of the building. WIDENED relative to the pass, and SAME as
   what [S:12] states, so it restores a fact the pass had softened.
3. **[S:61] went beyond its quotation.** It wrote "J. P. Anderson", where the briefing prints
   "J. Anderson, et al." (a 1972 Air Force planning study, so plainly not Ross Anderson), and dated
   MIL-HDBK-1785 to 1995 where the briefing gives "1995/2014". Both are now quoted as the sources
   print them, and the line's "what this search tested" clause now says it bounds the phrase and a
   practice, not the discipline.
4. **An unrowed change.** The pass appended a note to `reading-claims.md` without a table row. It
   asserts no proposition and is now rowed as a process note.

Checked and left alone: every other row matches the diff; the EverySpec title and the
01 SEP 1989 date match the fetched copy; `popularized` and an empty co-originator list are right,
since neither source names a person as coiner. The correction about Anderson follows SCHEMA
section 8: it states the record (a dated standard), passes no verdict on him, and leaves the BCS
quotation at full strength. `grounding-pack.md` still carries the pre-pass gloss; it is a
generated 2026-09-21 snapshot for the reading stage and the reading did not change, so it was not
regenerated.

Final checks after the fixes: (a) every page change is a row and every row matches the diff;
(b) every ADDITION is supported by the line it cites, reopened in the fetched source; (c) nothing
is labelled SAME or NARROWED that adds a proposition.

## Julie's direction, 2026-10-17

Frames with no person to credit are filed as shared credit (`community`), with the gloss saying why.

| field | before | after | class | supporting |
|---|---|---|---|---|
| named_frames[5].attribution_kind and gloss | `popularized`, no originator to name | `community`, plus "The frame is filed as shared credit: the discipline had many builders, and his part in the building is what the record supports." | NARROWED (the sentence restates the gloss and [S:61]) | [S:61] |
