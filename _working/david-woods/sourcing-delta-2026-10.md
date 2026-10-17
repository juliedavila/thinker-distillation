# David Woods: sourcing delta, 2026-10

Originator and left-over-claim sourcing pass, 2026-10-16. One frame warned in the build:
`adaptive-capacity` is filed `extended` and named no originator in `co_originators` or
`derived_from`. Five claims had no ledger line. One credit (Hirschhorn) was approved subject to a
line quoting Woods's own citation.

**What the search found.** The antecedent search [S:22] tested the phrase "adaptive capacity" and
its pre-2000 history in ecology, climate adaptation, organizational science and evolutionary
biology. Nothing earlier than Gunderson (2000) turned up, and Gunderson's own abstract introduces it
as "a new term" [S:7]. So outcome (a): Gunderson goes in `co_originators`, and the kind stays
`extended`. The search did not test full-text engineering or organizational literature before 2000,
the date of Woods's own first use, or whether the part of the frame that makes people and teams the
source of the reserve has an earlier holder. The role line says only what Gunderson wrote and when.

**Hirschhorn.** Woods's 2002 text cites "(e.g., Rasmussen, 1986; Hirschhorn, 1997)" for the general
law his named law belongs to, and its reference gives "Hirschhorn, L. (1997). Quoted in Cook, R. I.,
Woods, D. D. and Miller, C. (1998). A Tale of Two Stories" [S:2] [S:23]. The report's participant
list gives "Hirschhorn, Larry", Wharton Center for Applied Research [S:23], which is what the slug
rests on. What Hirschhorn said in the report is still not on the ledger, so his role repeats Woods's
citation and claims nothing more.

| field | before | after | SAME / NARROWED / CORRECTED / ADDITION / Deletion | supporting [S:n] |
|---|---|---|---|---|
| `named_frames[0].co_originators` (Adaptive capacity) | (absent) | `lance-gunderson`, role 'introduced "adaptive capacity" in ecology in 2000, calling it "a new term"' | ADDITION (newly credited person) | [S:7] [S:22] |
| `named_frames[0].attribution_kind` | `extended` | `extended` | SAME (the search supports an earlier holder of the term, and does not support `original`) | [S:7] [S:8] [S:22] |
| `named_frames[0].one_line_gloss` | "A system's reserve ability to absorb surprises ..." | unchanged | SAME (it defines the concept and implies no origination) | [S:5] |
| `named_frames[2].co_originators` (Law of Stretched Systems) | Rasmussen only | adds `larry-hirschhorn`, role 'cited with Rasmussen for the general law of adaptive systems (as quoted in Cook, Woods and Miller 1998, in Woods 2002)' | ADDITION (newly credited person, approved by Julie and a Council subject to this line) | [S:2] [S:23] |
| `inclusion_rationale`, first sentence | "Co-founded the field of resilience engineering." | "One of the founders of the field of resilience engineering." | SAME (Wikipedia's own wording, which it sources to Dekker 2019, not read here; the 2006 anthology that Hollnagel calls the record of the first workshop, co-edited by Woods, is the primary support) | [S:24] [S:15] [S:20] |
| `still_load_bearing_despite`, closing sentence | "Every honest argument about why high-performing engineering orgs end up brittle, why incidents cluster after efficiency pushes, why reorganizations destroy operational knowledge: Woods named the physics underneath them all." | "Two of those terms, graceful extensibility and the Law of Stretched Systems, are names Woods gave." | NARROWED (from naming the cause of every listed failure to naming two terms, which the record shows are his; rewritten in review: the after-text the pass wrote kept "Every honest argument ... draws on that vocabulary", a universal claim about other people's arguments that no ledger line supports and the old text did not make, so the review deleted it) | [S:5] [S:9] [S:2] [S:11] |
| `adjacent_thinkers[0].edge_label` (Allspaw), opening | "The carrier into software ops." | "A carrier into software ops." | NARROWED (matches the reading's "carriers such as Allspaw"; nothing on the ledger makes him the only one) | [S:26] [S:27] |
| `adjacent_thinkers[0].edge_label` | "Allspaw is Woods's most successful industry translator." | Deletion (a ranking no source makes) | Deletion | none |
| `adjacent_thinkers[0].edge_label` | "The resilience-engineering substrate became working ops vocabulary largely through Allspaw's Etsy work and the Adaptive Capacity Labs collaboration." | "Allspaw's 2012 Etsy post on blameless postmortems quotes *Behind Human Error* on first and second stories; in 2017 he co-founded Adaptive Capacity Labs with Woods and Richard Cook, and in 2020 the two wrote that people are "the unique source of the adaptive capacity" in incident response." | ADDITION (relabelled from NARROWED in review: the "largely through" claim about how the vocabulary spread is deleted, and three dated acts the old text did not state are added, each sourced: the 2012 post quoting *Behind Human Error*, the 2017 co-founding with Woods and Cook, and the 2020 CACM sentence) | [S:26] [S:4] [S:27] |
| `adjacent_thinkers[2].edge_label` (Hollnagel) | "both *Joint Cognitive Systems* books (2005, 2006)" | unchanged | SAME (the 2006 Patterns volume, Woods and Hollnagel, is now on the ledger) | [S:14] [S:25] |
| `adjacent_thinkers[2].edge_label` (Hollnagel), remaining clauses | "from a 1983 paper"; "a precedent he cites in *A Tale of Two Stories* (1998), a paper by Cook, Woods and Miller" | unchanged | SAME (now mapped) | [S:16] [S:28] |
| `last_updated` | 2026-10-15 | 2026-10-16 | SAME (metadata) | none |

**Carriers checked.** `rg -i "translator|largely|physics|co-founded the field|most successful|Etsy|2005, 2006"`
over the page, `grounding-pack.md`, `reading-claims.md` and `page-claims.md`. The only carriers were
the grounding pack's `[T:still-load-bearing]` and `[E:out:john-allspaw]` items, which mirror the
page; the pack was regenerated with `scripts/grounding-pack.ts`, and its only changes are these
rows plus the two new co-originators in the frame headers. The reading's "carriers such as Allspaw
brought the vocabulary into software" already makes the narrower claim, so `reading-claims.md` needs
no change. `background` says "Helped build the field of resilience engineering", which is narrower
than the rationale and stays.

**Correction register.** The Gunderson role reports his own words, dated. The Hirschhorn role
repeats Woods's citation and says nothing about what Hirschhorn argued. The Allspaw edge drops a
ranking and states what he wrote and did, with dates, and passes no verdict on anyone. Nothing in
these rows says Woods claimed more than his record does: his 2016 paper uses "adaptive capacity"
without claiming it [S:5], and the page now says the same.

## Review, 2026-10-16

An independent review of this pass, made against `git diff origin/main` on the page and
`facts.md`, with every new ledger line ([S:22] to [S:28]) reopened against the fetched copies in
`_working/david-woods/src/`. Every page change in the diff has a row, and every row matches the
diff. The quoted text holds at source: Woods 2002 cites "(e.g., Rasmussen, 1986; Hirschhorn,
1997)" and its reference list gives the "Quoted in Cook, R. I., Woods, D. D. and Miller, C. (1998)"
entry; the 1998 report's Appendix A lists "Hirschhorn, Larry", Wharton Center for Applied Research;
Wikipedia reads "Woods is one of the founders of the field of resilience engineering" and "In 2017,
Woods co-founded a consulting company, Adaptive Capacity Labs, with Richard Cook and John
Allspaw"; the Etsy post is dated May 22, 2012 and reads "From Behind Human Error here's the
difference between 'first' and 'second' stories"; the CACM piece is bylined Woods and Allspaw,
"Published: May 1, 2020", with the "unique source of the adaptive capacity" sentence; the Routledge
listing gives "By David D. Woods, Erik Hollnagel", copyright 2006; and Hollnagel's Folly paper names
Cook, Woods and Miller (1998) among "the best-known examples" of the two-term device.

**The antecedent search [S:22].** Re-run as two web searches on 2026-10-16 (pre-2000 uses of the
phrase in ecology, and in the 1990s climate-adaptation literature around Smit, Burton, Klein and
Street). Neither turned up a use earlier than Gunderson (2000); the climate search could not date
the Smit et al. framework paper from its results, so a pre-2000 climate use is neither found nor
ruled out. The search bounds what the Gunderson role says, because the role is scoped to ecology
and repeats Gunderson's own abstract ("A new term, adaptive capacity, is introduced") [S:7]. It
would not bound a claim that Gunderson was the first to use the phrase anywhere, and the page makes
none. `extended` stands: the frame names an earlier holder and does not claim the term.

**Changed in this table**

- `still_load_bearing_despite`: the pass's after-text kept "Every honest argument about why
  high-performing engineering orgs end up brittle, why incidents cluster after efficiency pushes,
  why reorganizations destroy operational knowledge, draws on that vocabulary". The old text said
  Woods named the physics underneath those arguments; the new clause says every such argument uses
  the vocabulary, which is a different universal claim, about other writers, with no ledger line
  behind it. A NARROWED row cannot carry a new proposition, so the review deleted the clause and
  kept the sourced half as its own sentence. [S:6] moved off the row's support, since it backs the
  unchanged first sentence. The grounding pack was regenerated with `scripts/grounding-pack.ts`.
- `adjacent_thinkers[0].edge_label` (Allspaw), the substrate sentence: labelled NARROWED, but the
  after-text states three propositions the old text did not (the 2012 post quoting *Behind Human
  Error*, the 2017 co-founding with Woods and Cook, the 2020 CACM sentence). Each is supported at
  full strength by the line it cites, so the text stays and the row is relabelled ADDITION.

**Page: one change.** `still_load_bearing_despite`, closing sentence, as above.

**Checked and left as they are.** The Gunderson and Hirschhorn roles report what each source says
and when, and judge nobody, as SCHEMA section 8 asks; the Hirschhorn role claims nothing about what
he argued, which [S:11] and [S:23] both say is off the ledger. "One of the founders" for "Co-founded"
is SAME. The Hollnagel rows change no page text. No em-dashes and no "not X but Y" constructions
in the changed text.

**Left for Julie.** The founding credit in `inclusion_rationale` rests on Wikipedia, which sources
it to Dekker (2019), unread here; the 2006 anthology [S:15] [S:20] shows Woods co-edited the record
of the first workshop, which supports the credit without stating it.
