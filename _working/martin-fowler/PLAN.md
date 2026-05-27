# "The Ways of Fowler" — Plan v1

> Voice: Camila narrates. Feminine energy. Warm, direct, unflinching. No corporate jargon, no em-dashes as stylistic flourish, no hedging. Cross-domain analogies welcome. English only. Cuts where the audience can finish the thought.

## Through-line (candidate, pre-battle-test)

*Software is a perishable medium for shared understanding. The way to keep it cheap to change is to evolve the practice in public — name the moves, share the vocabulary, run the loop tight, place the boundaries where change wants to flow. Fowler's twenty-five-year corpus is one sustained economic argument that internal quality is not in tension with speed but is itself the source of speed, and every named pattern, refactoring, smell, deploy move, and bounded context is an instrument in service of that single claim.*

The hard-to-vary form: drop any one of the six argument arcs (economic, vocabulary, practice, boundary, flow, modeling) and the corpus stops cohering. They are not best practices side-by-side. They are mutually load-bearing.

## Audience

Working engineers, tech leads, architects, and technical executives — including security executives — who operate in the world Fowler shaped, but **without assuming the reader knows Fowler by name or has read his work directly**. Many readers will recognize the vocabulary (refactoring, microservices, bounded context, code smell, continuous delivery, strangler fig) without knowing where the vocabulary came from or how the pieces hang together. The book introduces Fowler as a person and a thinker in the Preface, then walks the argument lattice for readers who are technically literate but Fowler-naive.

Secondary read: Fowler-literate engineers who can quote the moves but have never seen the spine that ties the moves together. They get the same lattice; they skim the Preface.

## Deliverable

Web-first artifact published on GitLab or GitHub Pages, with downloadable PDF for readers who want it. Two-pass structure mirroring "The Ways of Komoroske." Single markdown source compiles to both surfaces.

## Decisions (pending Julie's confirmation)

1. Through-line: stated above, battle-tested via Advisor this session (Council attempted, agent stalled — will retry at chapter draft time when prose is on the page).
2. Narrator stance: Camila as peer-translator (matches Komoroske).
3. Length: 85-115 pages initial target (was 80-110; revised after Preface added). Fowler corpus is larger than Komoroske; expect a slight overshoot. Content architecture and delivery quality govern, not page count.
4. Distribution: web-first with PDF download. Pre-publication review with Fowler offered — low probability of response, high signal if it lands.
5. Sample chapter first: yes, Part 1 vertical slice before full build (Part 1 = "The Economic Argument").
6. Voice: feminine energy, Camila as peer-translator, English only, Julie's WRITINGSTYLE applied.
7. Vertical-slice sequence: Part 1 first (the economic argument is the spine), then Part 4 (boundary choice — most-misunderstood section of the corpus), then the rest in source order.

## Structure (two-pass, parallel to Komoroske)

### Pass One: The Whole Argument in 12-15 Pages

A complete, standalone distillation. Reader can stop here and walk away with the through-line, the six argument arcs, the carrying metaphors, the field-test protocol, and the bibliography pointer. Designed to be re-read.

### Pass Two: The Long Walk (Preface + Parts 0-8)

**Preface: Who Is Martin Fowler?** (4 pp)
The bio at compression: British software engineer, born 1963, ThoughtWorks Chief Scientist since 2000, Agile Manifesto signatory, author of *Refactoring* / *PoEAA* / and others. The TLDR of what he advocates — internal quality IS speed, six argument arcs. Named accomplishments. Where to find him: `martinfowler.com`, the bliki, the articles, the books, YouTube keynotes. The pre-reading recommendation: `IsQualitySoftwareWorthTheCost` if you only read one thing first.

This Preface is the gate that lets a technically-literate but Fowler-naive reader walk into Part 0 without losing the thread. Drafted in `PREFACE.md` this session.

**Part 0: How to Read This** (2 pp)
The meta-claim: software is a design conversation, not a build phase. Why the bliki is part of the corpus, not paratext — Fowler invented the genre and used it as the medium through which his thinking evolved publicly. The two-pass design. How to use the sidebars. What this book is not.

**Part 1: The Economic Argument — Quality IS Speed** (10 pp)
Fowler's *Is High Quality Software Worth the Cost?* as the keystone essay. The design-stamina hypothesis. The graph that crosses very early — payoff in weeks, not years. Why "balancing quality vs. speed" is the wrong framing.
Carrying metaphor: the compounding curve. Companion sidebar: Cunningham's tech-debt metaphor (1992) and Fowler's later tech-debt quadrant.
Story + schema + worked example (a real refactoring backlog) + worked non-example (the place where over-investment in internal quality actually does slow a team) + reflection.

**Part 2: The Vocabulary Machine — Naming the Implicit** (9 pp)
*Patterns of Enterprise Application Architecture* as catalog of named distinctions (Domain Model vs Transaction Script vs Table Module; Active Record vs Data Mapper; Unit of Work; Service Layer). The Refactoring catalog (mechanical moves with named names). Code Smells. *Two Hard Things*. The bliki as a genre Fowler invented — the discipline of writing-while-thinking-out-loud.
Carrying metaphor: the bliki entry as living artifact (with maturity badges: *growing*, *stable*).
Companion sidebar: Christopher Alexander's original Pattern Language vs the GoF inheritance — what happened when programmers picked the patterns up.
Critique sidebar: the patterns-as-checklist failure mode, and Alexander's own complaint about it.

**Part 3: The Practice Loop — Evolution Over Planning** (10 pp)
Refactoring as the operational unit of changing structure without changing behavior. Kent Beck's two-hat rule (small steps, never both at once). The "make change easy, then make the easy change" line (Beck-attributed; Fowler quotes it as the working motto). The mechanical refactoring catalog vs. Kerievsky's *Refactoring to Patterns* extension. The testing pyramid. *Mocks Aren't Stubs* (the test-doubles disambiguation).
Carrying metaphor: the red-green-refactor loop. Companion sidebar: the design-stamina hypothesis returning from Part 1 — refactoring is what makes the curve cross.

**Part 4: The Boundary Choice — Where Change Wants to Flow** (12 pp)
The Microservices article (with James Lewis, 2014) and its definition. *MicroservicePrerequisites*. *MonolithFirst*. Bounded Context (Evans-coined, Fowler-carried to wider audience). Conway's Law (Fowler taxonomized; the inverse-Conway maneuver). *Strangler Fig Application*. The argument that boundary placement is the actual architecture question and that everything else is downstream of it.
Carrying metaphors: the strangler fig (the Queensland tree that grows around an old host and eventually replaces it) + Conway's mirror (org chart = system chart).
Companion sidebar: Sam Newman's extension in *Building Microservices*; Pat Helland on data-on-the-outside.
Caveat: Fowler himself later flagged the 2014 microservices article as too lenient on the operational costs — print the retraction inline.

**Part 5: The Flow Argument — Continuous Delivery as Default** (9 pp)
Continuous Integration (he popularized — the original IEEE Software article). Continuous Delivery (Humble + Farley wrote the book; Fowler's foreword, ongoing carry, and Tech Radar amplification). Branch by Abstraction. Feature Toggle (with the four-type taxonomy: release, ops, experiment, permission). Evolutionary Database Design (with Sadalage). Trunk-based development.
Carrying metaphor: the deployment cadence — "mergeable in hours, not weeks." Time-between-intent-and-verified-working as the actual loop being optimized.

**Part 6: The Modeling Argument** (9 pp)
*UML Distilled* — modeling under the lifestyle constraint of "use just enough." *Analysis Patterns*. *Domain-Specific Languages* (with Rebecca Parsons). *NoSQL Distilled* (with Pramod Sadalage). Domain Model vs Transaction Script vs Table Module. CQRS (Greg Young, Fowler-carried). Event Sourcing. The ubiquitous language (Evans, Fowler-carried).
Carrying metaphor: the ubiquitous language — language as model, model as language.
Companion sidebar: where modeling discipline goes wrong (UML-as-doctrine vs. UML-as-sketch; Fowler always argued for sketch).

**Part 7: Where Fowler is Wrong, Where He is Borrowing** (7 pp)
The DHH "TDD is dead" critique (2014) and the *Is TDD Dead?* panel Fowler ran with Beck and DHH. Joel Spolsky's big-rewrite counterpoint. Kerievsky's *Refactoring to Patterns* as both critique and extension. The Beck / Cunningham / Evans / Lewis / Young / Helland / Newman attribution chain — where Fowler is master synthesizer rather than originator. The patterns-as-checklist failure mode (and Alexander's own complaint about how programmers used his work). The microservices article retraction. The 2nd edition of *Refactoring* (rewritten in JavaScript) — what Fowler updated about his own catalog.
Carrying metaphor: Fowler's own bliki habit of marking entries with maturity badges (*growing*, *stable*) and posting retractions in the open — public retraction as discipline.

**Part 8: Now Stop Reading Me** (3 pp)
Six-week field-test protocol. One Fowler move per week, applied to a real decision. Short journal template. Week-six self-check: am I producing his moves without remembering the catalog that taught them to me?

**Appendix A: Source Catalog** (4 pp)
Every book, key bliki entry, joint article, foreword. URL, key concept, one-line "read this if," canonical vs. supplementary vs. meta-genre tagging. See CORPUS.md for the live inventory.

**Appendix B: Adjacent Thinkers** (3 pp)
Beck, Cunningham, Alexander, GoF (Gamma / Helm / Johnson / Vlissides), Evans, Lewis, Humble, Farley, Newman, Young, Helland, Brooks, Parnas, Dijkstra, Hoare, Conway, Poppendieck, Ries, Kerievsky, Spolsky, DHH, Goldberg, Hunt & Thomas. See CONCEPT_LATTICE.md → Adjacent Thinkers for relations and dependencies.

## Metaphor verdicts (initial — will refine at draft time)

| Metaphor | Verdict | Notes |
|---|---|---|
| Make change easy, then make the easy change | KEEP | Beck-attributed; load-bearing line. Carries Part 3. |
| Strangler fig | KEEP | Queensland tree image required. Carries Part 4 migration argument. |
| Two Hard Things | KEEP | Carries Part 2 — joke as doctrine. |
| Bliki (the genre) | KEEP | Meta-move; carries Part 0 and Part 7 (public retraction). |
| The compounding curve (design stamina) | KEEP | Carries Part 1. Render the graph inline. |
| Code smell | KEEP | Beck + Fowler. Hinge between Part 2 and Part 3. |
| Conway's mirror (org = system) | KEEP | Carries Part 4. |
| Red-green-refactor | KEEP | Carries Part 3. |
| Refactoring catalog (mechanical moves) | AUGMENT | Show the moves; couple with Kerievsky's *Refactoring to Patterns* extension. |
| Tech debt quadrant | AUGMENT | Show the quadrant; couple with Cunningham's 1992 original metaphor. |
| Bounded context | AUGMENT | Evans-attributed, Fowler-carried — show the chain. |
| Feature toggle taxonomy | AUGMENT | Show all four types (release, ops, experiment, permission). |
| Test pyramid | CAVEAT | Useful heuristic; flag Newman / Khorikov critiques. |
| Mocks vs. stubs (test doubles) | CAVEAT | Powerful disambiguation; flag where it has hardened into orthodoxy. |
| Microservices article 2014 | CAVEAT | Foundational; print Fowler's own later "too lenient on costs" flag inline. |
| Monolith first | CAVEAT | Defensible; show DHH-aligned and Newman-aligned counterpoints. |
| UML stereotypes | REPLACE | UML-as-doctrine has aged; UML-as-sketch (Fowler's actual position) survives. |
| "Architect" as title (Architectus Reloadus vs. Architectus Oryzus) | REPLACE | Use the distinction; drop the Latin if it doesn't earn its space. |

Top-3 heaviest chapter weight: the compounding curve, the strangler fig, the bliki as genre.

## Pedagogy spine (every chapter, no exceptions — matches Komoroske)

1. Open with the parable. Fowler teaches with worked examples drawn from real systems; we match the method.
2. Lift to schema. Name the underlying pattern so the worked example does not stand alone.
3. Worked example. Apply the move to a fresh problem.
4. Worked non-example. A case where the move produces the wrong answer.
5. Reflection prompt. Designed to force application within twenty-four hours.
6. Companion sidebar. One alternative framing from outside Fowler's source set (Alexander, Brooks, Parnas, Goldberg, Hunt & Thomas).
7. Critique sidebar. Where this move breaks, who else said it first, what Fowler himself flagged in retraction.
8. Primary sources callout. Paired with one outside source.

## Citation system

Footnote style at bottom of page for direct quotes. Endnote bibliography with full URLs (Fowler's bliki URLs use WardWiki CamelCase — preserve verbatim, e.g. `martinfowler.com/bliki/StranglerFigApplication.html`). Every direct quote attributed inline. All URLs verified at build time; broken links replaced with archive.org snapshots. Pre-publication: manuscript offered to Fowler for accuracy review.

## Voice reference

Camila narrates. Feminine energy throughout. Direct. Warm where the reader needs steadying, sharp where the reader needs waking up. Builds arguments through cross-domain analogy. Qualifies the premise before answering. Long sentences when the argument needs the room, short ones when it does not. No hedging, no false balance, no corporate jargon. English only.

Calibration voices: Ryan Holiday's compression. Maria Popova's quoting discipline. Kelly Shortridge's no-bullshit register. Camille Fournier's practitioner authority. Joe Hudson's warmth without softness. Add for this book: Fowler's own bliki voice — terse, named, attributed, public-revision-honest — referenced for cadence and discipline, not mimicked.

## Prose register rules (carried forward from Komoroske, applies to every chapter)

Diagnostic question before any passage ships: **"Did I write this for a reader, or for a screenshot?"**

The six rules (verbatim from Komoroske PLAN.md):

1. No three short declaratives in a row.
2. Evidence before claim. Always.
3. No address to the reader's attention.
4. One closer per chapter, at chapter-end only.
5. Length is the price of teaching.
6. No appeals to the author's authority in body prose.

## Open decisions for Julie

1. Production pipeline: VitePress + Paged.js (reuses Komoroske stack) or Quarto (new tool, academic-grade PDF)?
2. Visual identity: editorial-minimal (mirror Komoroske) or motif-driven (strangler fig / compounding curve / Conway's mirror as recurring visuals)?
3. Mobile-first design pass: do it now, before Part 2 drafts, or after the long chapters land?
4. Vertical-slice sequence: Part 1 first as proposed, or different (e.g. Part 4 first because boundary-placement is the most-misunderstood)?
5. Pre-publication review with Fowler: try ThoughtWorks back-channel via the FCAB network, or publish and pingback?
6. Companion content: make a companion bliki entry for each part (mirror Fowler's own genre move)?
7. Naming: "The Ways of Fowler" (mirror Komoroske) or distinct title — *The Single Argument* / *Fowler's Spine* / similar?
8. Scope of Pass 2 Part 7 (Where Fowler is Wrong): keep the seven sub-critiques as proposed, or compress to the three most load-bearing (microservices retraction, Kerievsky extension, attribution chain)?
9. **Arc count — 6 or 7?** Advisor at VERIFY suggested the editor / platform role (hosting Dehghani, Böckeler, Lewis, Sadalage, Tech Radar curation) is substantial enough to be its own seventh arc rather than a face of the meta-move. Two options: keep six arcs with an expanded two-face meta-move (current lattice), or promote to seven arcs (Economic / Vocabulary / Practice / Boundary / Flow / Modeling / Editor-Platform). Recommend deciding before Part 1 vertical slice drafts. See `CONCEPT_LATTICE.md` → Open structural question.
10. **Post-2015 / live-edge coverage**: Confirm we want to integrate Data Mesh hosting, GenAI memo series, Refactoring 2e meta-argument, and ongoing Tech Radar throughout, or treat them as a dedicated final part. Current lattice runs the live edge through every arc.

## Build sequence (proposed)

1. **This session (done):** workspace + ISA + PLAN + CORPUS + CONCEPT_LATTICE drafted.
2. **Julie reacts** to through-line and arc structure.
3. **Adjustments locked.**
4. **Part 1 vertical slice drafted** in voice (the economic argument).
5. **Julie reacts** to voice and density.
6. **Pass Two Parts 2-8** drafted in voice.
7. **Pass One distillation** drafted from the long chapters.
8. **Mobile-first design pass** on full text.
9. **Build site** + PDF export.
10. **URL verification pass.**
11. (Optional) attempt to send to Fowler.
12. **Publish.**

## Council artifacts

Council Quick on through-line attempted 2026-05-23T22:05Z; agent stalled at 600s no-progress watchdog. Will re-attempt when Part 1 vertical slice exists and there is prose to react to, not just structure. Through-line battle-tested this session via Advisor at VERIFY.
