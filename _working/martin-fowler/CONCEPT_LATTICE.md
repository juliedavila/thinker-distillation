# The Fowler Concept Lattice

> The actual mapping. Through-line, the six argument arcs, the concept-by-concept index with attribution chains, the cross-arc edges, the carrying metaphors, the adjacent thinkers, where Fowler is wrong or borrowing, and the meta-move that ties everything together.

## The Through-line

Software is a perishable medium for shared understanding. It rots when nobody is tending it, and the cost of letting it rot is paid not in some distant future but in next week's velocity. The way to keep software cheap to change is to evolve the practice in public — name the moves, share the vocabulary, run the loop tight, place the boundaries where change wants to flow, model the domain in language the team already speaks, and write the practice down as you discover it.

Fowler's twenty-five-year corpus is one sustained economic argument that internal quality is not in tension with speed but is itself the source of speed. The Fowler-specific move — the thing that distinguishes him from Beck, Cunningham, Feathers, and the rest of the XP community who all assent to the same economic claim — is that *he turns tacit design knowledge into a public catalog of named distinctions, so that "cheap to change" becomes a tradable argument that managers, engineers, and customers can actually negotiate over*. The catalog format, the bliki entry, the pattern, the named refactoring, the smell, the hypothesis-stated-as-hypothesis (`DesignStaminaHypothesis`, `TradeableQualityHypothesis`, `CannotMeasureProductivity`) — these are the cartographer's instruments. He is the working community's mapmaker.

Every named pattern, refactoring, smell, deploy move, bounded context, feature toggle, strangler fig, and ubiquitous language is an instrument in service of two claims working together: *internal quality is the source of speed*, and *naming the moves is how the argument becomes negotiable*. Remove either claim and the lattice collapses.

The hard-to-vary form: the corpus is not "best practices." It is a single thesis (cheap-to-change-through-legible-naming) carried by six load-bearing argument arcs, plus a meta-move (the bliki as form and the editor/platform role as practice) that is itself part of the thesis.

## The Six Argument Arcs

### Arc 1 — The Economic Argument: *Quality IS Speed*

**Claim**: Internal quality has *short-term* payoff. The crossover where high-quality work outpaces shortcut work happens in weeks, not years. Therefore "we don't have time for quality" is a category error: removing quality removes the source of speed.

**Primary sources**:
- `IsQualitySoftwareWorthTheCost` (bliki, keystone essay).
- `DesignStaminaHypothesis` (bliki, the named graph).
- `TechnicalDebt` and `TechDebtQuadrant` (bliki, the metaphor and its taxonomy).
- *Refactoring* (book), opening chapters — the economic motivation.

**The instrument**: the language of internal quality (cruft, debt, smell, design stamina) makes the economic argument debatable in concrete terms.

### Arc 2 — The Vocabulary Machine: *Naming the Implicit*

**Claim**: Design happens in conversation. Conversation requires shared vocabulary. The way to make design happen at all is to name the implicit choices people are making anyway, so they can be discussed, contested, and revised. The pattern catalog, the refactoring catalog, the smell list, the deployment-pattern taxonomy — these are vocabulary infrastructure.

**Primary sources**:
- *Patterns of Enterprise Application Architecture* — the named distinctions catalog.
- *Refactoring* — the named-move catalog.
- `CodeSmell`, `TwoHardThings`, `Yagni`, `Cruft` (bliki) — the heuristic-naming layer.
- The bliki itself as a public catalog of named concepts with attribution.

**The instrument**: the catalog format. Each entry has a name, a problem, a solution, a tradeoff, a citation chain. The catalog form makes implicit design choices into objects engineers can pick up and put back down.

### Arc 3 — The Practice Loop: *Evolution Over Planning*

**Claim**: Big design up front loses to small steps with verification. The unit of progress is the *refactoring* — a structure-changing move that does not change behavior, made safe by tests. The work is incremental, evolutionary, and reversible.

**Primary sources**:
- *Refactoring* (1st ed 1999, 2nd ed 2018) — the catalog and the workflow.
- Kent Beck's *Extreme Programming Explained* — the two-hat rule (you are either adding behavior or refactoring; never both at once).
- `WorkflowsOfRefactoring`, `PreparatoryRefactoring` (bliki).
- `MocksArentStubs` and the test-doubles vocabulary.
- `TestPyramid` — the shape that makes the loop fast.

**The instrument**: red-green-refactor as the executable loop. "Make change easy, then make the easy change" (Beck-attributed; Fowler quotes as the working motto).

### Arc 4 — The Boundary Choice: *Where Change Wants to Flow*

**Claim**: The hard architecture question is not "what components exist?" but "where are the boundaries?" Place a seam at a join that does not change together and the system gets cheap to evolve. Place it at a join that changes together and you have built distributed pain.

**Primary sources**:
- *Microservices* article (with James Lewis, 2014).
- `MicroservicePremium`, `MicroservicePrerequisites`, `MonolithFirst` (bliki).
- `BoundedContext` (Evans-coined; Fowler-carried).
- `ConwaysLaw` and `InverseConwayManeuver` (bliki).
- `StranglerFigApplication` (bliki, migration pattern).
- *Patterns of Enterprise Application Architecture* — the original boundary-placement work (presentation / domain / data source layering).

**The instrument**: the bounded context — a region of the model inside which the language is consistent. The strangler fig — a migration pattern for moving boundaries without a rewrite.

### Arc 5 — The Flow Argument: *Continuous Delivery as Default*

**Claim**: The time between *intent* and *verified-working-in-production* is the actual loop being optimized. Long batches hide defects; short batches surface them. Therefore: trunk-based development, continuous integration, continuous delivery, feature toggles for decoupling deploy from release, branch-by-abstraction for migrations, evolutionary database design.

**Primary sources**:
- *Continuous Integration* article (2006, martinfowler.com/articles/continuousIntegration.html).
- `ContinuousDelivery` (bliki) and the Humble + Farley book Fowler's foreword carried.
- `FeatureToggle`, `FeatureToggleTypes` (bliki, with Pete Hodgson).
- `BranchByAbstraction` (bliki).
- `EvolutionaryDatabase` (bliki, with Pramod Sadalage).
- `BlueGreenDeployment`, `CanaryRelease` (bliki).

**The instrument**: the deployment pipeline as a public artifact. Every commit produces a build that could go to production; the toggle decides whether it does.

### Arc 6 — The Modeling Argument: *Language as Model*

**Claim**: The expensive part of software is understanding the domain. The cheapest way to keep understanding aligned across a team is to use the same words the team uses with the customer — the ubiquitous language. Modeling is not separate from coding; the code is the model.

**Primary sources**:
- *Analysis Patterns* — object models of common domains (accounting, observation, planning).
- *UML Distilled* — modeling as sketch, never as blueprint.
- *Domain-Specific Languages* (with Rebecca Parsons) — pushing the language up to the domain.
- *NoSQL Distilled* (with Pramod Sadalage) — `PolyglotPersistence` as a modeling tactic.
- `UbiquitousLanguage`, `DomainDrivenDesign`, `AnemicDomainModel`, `DomainEvent`, `AggregateRoot`, `Saga` (bliki, Evans-attributed and Fowler-carried).
- `CQRS`, `EventSourcing` (bliki, Young-attributed and Fowler-carried).
- *Patterns of Enterprise Application Architecture* — the three-way distinction `DomainModel` / `TransactionScript` / `TableModule`.
- `GuiArchitectures` retrospective (`PassiveView`, `SupervisingController`, `PresentationModel`).

**The instrument**: the ubiquitous language inside a bounded context. The DSL as the explicit form of that language when it earns its place.

## Cross-Arc Edges

The arcs are not parallel. They feed each other. The lattice is built from edges:

1. **Arc 1 (Economic) → Arc 3 (Practice)**: the economic argument is what makes refactoring worth doing. Without the design-stamina graph, refactoring looks like indulgence. The graph is the permission slip.

2. **Arc 2 (Vocabulary) → Arc 3 (Practice)**: refactoring needs named moves. *Extract Method*, *Replace Conditional with Polymorphism*, *Introduce Parameter Object* — these are the vocabulary that lets the loop run. No name, no move.

3. **Arc 2 (Vocabulary) → Arc 4 (Boundary)**: `BoundedContext`, `AggregateRoot`, `MicroservicePremium`, `StranglerFigApplication` — boundary choice is impossible without the naming that makes seams visible.

4. **Arc 3 (Practice) → Arc 5 (Flow)**: the red-green-refactor loop is what produces builds-that-could-deploy. Without the loop running tight, continuous delivery is fiction.

5. **Arc 4 (Boundary) → Arc 5 (Flow)**: independent deployability is downstream of bounded context. Microservices that share a database are not independently deployable. The boundary choice determines the deploy unit.

6. **Arc 5 (Flow) → Arc 1 (Economic)**: short cycle time is the *measurement* of internal quality. The team that can ship a fix in an hour has more internal quality than the team that can ship a fix in a week, regardless of how their code looks. Cycle time is the visible face of the design-stamina graph.

7. **Arc 6 (Modeling) → Arc 4 (Boundary)**: bounded contexts are placed where the *language* changes, not where the org chart changes. Modeling tells you where the boundary belongs; Conway tells you whether you'll get the boundary you wanted.

8. **Arc 6 (Modeling) → Arc 2 (Vocabulary)**: the ubiquitous language is the per-team instance of Fowler's general principle that vocabulary is design infrastructure. DDD's UL is patterns-the-discipline at the team scale.

9. **Arc 2 (Vocabulary) ↔ All other arcs**: vocabulary is the medium through which the other arcs become discussable. Strip the names and the corpus collapses to "do the right thing."

10. **All arcs → The Meta-Move**: every arc shows up in bliki form. The bliki is not a publishing channel; it is the *form* in which Fowler's argument evolves. The meta-move is the genre choice.

## Carrying Metaphors (mapped to arcs)

| Metaphor | Arc | Verdict | Notes |
|---|---|---|---|
| The compounding curve (design stamina) | Arc 1 | KEEP, FRANCHISE | Render the graph. Crosses early. |
| Tech debt (Cunningham 1992) | Arc 1 | AUGMENT | Attribute to Cunningham; show Fowler's quadrant as extension. |
| Cruft | Arc 1 | KEEP | The named cost of decay. |
| Two Hard Things | Arc 2 | KEEP | Naming, cache invalidation, off-by-one. Joke as doctrine. |
| Code smell | Arc 2 ↔ Arc 3 | KEEP | Beck + Fowler. Hinge metaphor. |
| Bliki (the genre) | Meta | KEEP, FRANCHISE | Public-revision discipline. |
| Refactoring catalog | Arc 3 | AUGMENT | Couple with Kerievsky's *Refactoring to Patterns* extension. |
| Red-green-refactor | Arc 3 | KEEP | The executable loop. |
| Two-hat rule (Beck) | Arc 3 | KEEP | Behavior OR structure, never both. |
| Make change easy, then make the easy change | Arc 3 | KEEP, FRANCHISE | Beck-attributed; the working motto. |
| Test pyramid | Arc 3 | CAVEAT | Useful heuristic; flag Khorikov / Newman critiques. |
| Mocks vs. stubs (test doubles) | Arc 3 | CAVEAT | Powerful disambiguation; flag orthodoxy risk. |
| Strangler fig (Queensland tree) | Arc 4 | KEEP, FRANCHISE | Image required. Migration pattern. |
| Conway's mirror | Arc 4 | KEEP | Org chart = system chart. |
| Inverse Conway maneuver | Arc 4 | KEEP | Restructure org to get the system. |
| Bounded context | Arc 4 ↔ Arc 6 | AUGMENT | Evans-attributed; Fowler-carried. |
| Microservices article 2014 | Arc 4 | CAVEAT | Print Fowler's "too lenient on costs" retraction inline. |
| Monolith first | Arc 4 | CAVEAT | Defensible; show counterpoints. |
| Feature toggle taxonomy | Arc 5 | AUGMENT | Show all four types (release/ops/experiment/permission). |
| Branch by abstraction | Arc 5 | KEEP | The trunk-based migration move. |
| Continuous integration cadence | Arc 5 | KEEP | "Mergeable in hours, not weeks." |
| Polyglot persistence | Arc 5 ↔ Arc 6 | KEEP | Sadalage co-coined. |
| Ubiquitous language | Arc 6 | KEEP, FRANCHISE | Evans-attributed; the modeling claim. |
| UML as sketch (vs. blueprint vs. PL) | Arc 6 | KEEP | Fowler's actual position; rescue UML from over-application. |
| Domain Model vs. Transaction Script vs. Table Module | Arc 6 | KEEP | PoEAA three-way distinction. |
| Architectus Reloadus vs. Architectus Oryzus | Arc 6 | REPLACE | Use the distinction; drop the Latin if it doesn't earn space. |

## Adjacent Thinkers

| Thinker | Relation to Fowler | Where they show up |
|---------|---------------------|--------------------|
| Kent Beck | Collaborator (deepest) | Refactoring co-author, XP partner, TDD foundation, two-hat rule, "make change easy" line. Beck is everywhere. |
| Ward Cunningham | Predecessor + collaborator | Wiki (the form Fowler extended into bliki); tech debt metaphor (1992); code smell (with Beck). |
| Christopher Alexander | Predecessor (philosophical) | Pattern Language — the form Fowler's patterns descend from. Alexander's later critique of how programmers used patterns is load-bearing for Part 7. |
| Gamma, Helm, Johnson, Vlissides (GoF) | Predecessor (immediate) | *Design Patterns* (1994) is the immediate ancestor of the PoEAA catalog form. Fowler is explicit about the inheritance. |
| Eric Evans | Collaborator (intellectual) | DDD. Fowler wrote the foreword and carried `BoundedContext`, `UbiquitousLanguage`, `AggregateRoot` into wider audience. |
| James Lewis | Collaborator (direct) | Co-author of the 2014 *Microservices* article. ThoughtWorks colleague. |
| Jez Humble | Collaborator (indirect) | *Continuous Delivery* — Fowler's foreword + ongoing carry. |
| Dave Farley | Collaborator (indirect) | *Continuous Delivery* co-author with Humble. |
| Sam Newman | Extender | *Building Microservices* — direct extension of Fowler + Lewis, with second-edition softening that prints the operational cost honestly. |
| Greg Young | Predecessor (specific) | CQRS, Event Sourcing — Young-coined; Fowler explained to wider audience. |
| Pat Helland | Predecessor (specific) | *Data on the Outside vs. Inside* — distributed data essays Fowler cites for the modeling arc. |
| Pramod Sadalage | Collaborator (direct) | *NoSQL Distilled* co-author; `EvolutionaryDatabase`; `PolyglotPersistence`. |
| Rebecca Parsons | Collaborator (direct) | *Domain-Specific Languages* co-author; ThoughtWorks CTO. |
| Pete Hodgson | Collaborator (direct, specific) | `FeatureToggleTypes` co-author. |
| Joshua Kerievsky | Extender + partial critic | *Refactoring to Patterns* — extends and challenges the mechanical-refactoring catalog. |
| Michael Feathers | Extender | *Working Effectively with Legacy Code* — the "seams" concept extends refactoring into legacy contexts. |
| Vaughn Vernon | Extender | *Implementing Domain-Driven Design* — extends Evans-via-Fowler. |
| Andy Hunt + Dave Thomas | Adjacent practitioners | *The Pragmatic Programmer* — same generation, complementary register. |
| Zhamak Dehghani | Extender + platform-published | Data Mesh — published canonically on `martinfowler.com`. The editor / platform face of Fowler's late career runs through her. |
| Nicole Forsgren | Empirical backstop | *Accelerate* and the DORA research — empirical validation of the cheap-to-change hypothesis at large scale. |
| Birgitta Böckeler | Extender + platform-published | *Exploring Generative AI* memo series hosted on `martinfowler.com`. The live edge of the corpus into LLM-assisted engineering. |
| Ian Cartwright + Rob Horn | Collaborators (ThoughtWorks) | Joint bliki entries on patterns of data-intensive systems and on legacy modernization. |
| Brandon Byars | Collaborator (ThoughtWorks) | Microservice-testing pattern entries. |
| Pete Hodgson | Collaborator (specific) | `FeatureToggleTypes` co-author. |
| Mary + Tom Poppendieck | Adjacent (lean lineage) | Lean Software Development — the lean lineage Fowler's flow argument runs alongside. |
| Fred Brooks | Predecessor (deep) | *Mythical Man-Month* — conceptual integrity, the "no silver bullet" claim Fowler operates inside of. |
| David Parnas | Predecessor (deep) | Information hiding — the architectural principle Fowler's boundary arc descends from. |
| Edsger Dijkstra | Predecessor (deep) | Separation of concerns, structured programming. |
| Tony Hoare | Predecessor (deep) | Communicating sequential processes — DDD's aggregate-isolation has lineage here. |
| Melvin Conway | Predecessor (specific) | Conway's Law (1968) — Fowler taxonomized into the `InverseConwayManeuver`. |
| Eric Ries | Adjacent (lean startup) | *Lean Startup* — mentioned by Fowler in bliki entries on flow / hypothesis-driven development. |
| DHH | Critic | *TDD is dead* — triggered the *Is TDD Dead?* panel Fowler hosted with Beck. |
| Joel Spolsky | Critic (specific) | Big-rewrite counterpoint to incremental change advocacy. |
| Adele Goldberg | Predecessor (Smalltalk lineage) | The Smalltalk-MVC lineage Fowler's `GuiArchitectures` essay sits inside of. |

## Where Fowler is Wrong / Where He is Borrowing

The honest version of the corpus tells you both.

**Where he is wrong (by his own later admission or by clear critique)**:

1. **The 2014 microservices article was too lenient on operational costs.** Fowler's own follow-ups (`MicroservicePremium`, `MicroservicePrerequisites`, `MonolithFirst`) are the public-revision discipline at work. The book to read alongside is Sam Newman's second-edition *Building Microservices*, which prints the operational reality more honestly.

2. **The mechanical refactoring catalog can become an end in itself.** Joshua Kerievsky's *Refactoring to Patterns* is both extension and pointed critique: refactoring without a pattern-target can produce code that is cleaner-but-not-better. The 2nd edition of *Refactoring* (2018, JavaScript) responds to this by reorganizing the catalog around larger structural moves, but the critique remains live.

3. **The test pyramid is a heuristic, not a law.** Vladimir Khorikov, Sam Newman, and others have argued that strict pyramid orthodoxy can starve integration testing where the actual bugs live. The pyramid is the *shape* of a reasonable starting place, not the answer to where to invest test effort.

4. **UML grew beyond its sketch position.** Fowler's *UML Distilled* is explicit that UML should be a sketch, never a blueprint. The industry mostly ignored that and used UML as code-generation source. By the time the industry course-corrected, UML had a reputation Fowler had already publicly disowned.

5. **TDD-is-dead was not refuted in the *Is TDD Dead?* panel.** Fowler hosted the conversation with Beck and DHH. The panel's actual outcome was that TDD-as-discipline survives but the orthodox TDD-as-only-way-to-build does not. DHH's critique landed.

**Where he is borrowing (with attribution, which Fowler is explicit about)**:

- **The patterns form**: Christopher Alexander → GoF → Fowler. Fowler is explicit in PoEAA's preface.
- **Refactoring as a named discipline**: William Opdyke's PhD thesis (1992) and Kent Beck's practice. Fowler hoisted both into the *Refactoring* book.
- **Code smell**: Kent Beck. Fowler attributes.
- **Two-hat rule**: Kent Beck.
- **Tech debt**: Ward Cunningham 1992. Fowler attributes and taxonomizes.
- **Bounded context, ubiquitous language, aggregate root, anti-corruption layer**: Eric Evans. Fowler attributes throughout.
- **CQRS, event sourcing**: Greg Young. Fowler attributes.
- **Continuous Delivery**: Jez Humble + Dave Farley. Fowler wrote the foreword and continues to carry.
- **Conway's Law**: Melvin Conway, 1968. Fowler attributes.
- **Information hiding**: David Parnas. Fowler operates inside.

The attribution chain is itself part of the discipline. Fowler's career is a master class in *carrying other people's ideas without obscuring their origin*. Part 7 of the book should treat this as a virtue, not a deficit.

## The Meta-Move: Bliki as Form, Editor/Platform as Practice

The single most overlooked piece of Fowler's corpus is the *form* of the corpus itself. The meta-move has two faces.

### Face 1 — The bliki as form

The bliki is what happens when you write up an idea while you are still figuring it out, post it publicly, keep revising it, mark its maturity (`growing`, `stable`), attribute its origins, and treat the revision history as part of the artifact. It is the practice version of the practice. Every other thing Fowler argues — name the implicit, evolve the design, write the catalog, place the boundary, run the loop tight — he also *does to his own corpus*. The bliki entry on microservices says "this article was first published in 2014 and we have learned the following since then." The bliki entry on refactoring is one of dozens that revise the 1999 book's framing. The bliki entry on UML is the public flag that he no longer means what people heard him to mean. The 2019 rename from `StranglerApplication` to `StranglerFigApplication` is a small but values-explicit edit — "strangler" alone read as violent, the fig is the actual biology.

The hypothesis-stating discipline lives here too. `DesignStaminaHypothesis`, `TradeableQualityHypothesis`, `CannotMeasureProductivity` — Fowler labels his own claims as hypotheses, which is an epistemological move that turns assertion into something the community can debate. This is the cartographer making claims debatable rather than declaring them true.

### Face 2 — The editor / platform role

By the late 2010s, Fowler had become not only an author but a *platform* — `martinfowler.com` and the bliki served as the canonical publishing venue for other writers' canonical work. Zhamak Dehghani's *Data Mesh Principles and Logical Architecture* (2020) was first published on his site. Birgitta Böckeler's *Exploring Generative AI* memo series (2023-) lives there. James Lewis on microservices, Pramod Sadalage on evolutionary databases, Rebecca Parsons on DSLs and the ThoughtWorks Tech Radar — Fowler hosts and amplifies. This is a different kind of authorship: the practice of *running a publishing venue with a curated standard*, which is itself part of how the community-vocabulary discipline gets sustained beyond any one writer's output.

The editor / platform face is the late-career extension of the bliki form. It says: the cataloging discipline is not a personal practice; it is a venue that other practitioners can publish into when their work meets the standard. The platform becomes the durable artifact.

### Why this matters for the lattice

Read the bliki as paratext and you miss the cartographer move entirely. Read the editor / platform role as "stuff he hosts" and you miss the deliberate sustainability of the vocabulary infrastructure he spent a career building.

The book's Part 0 opens with Face 1 (bliki as form). The book's Part 7 (Where Fowler is Wrong) draws on the public-revision discipline — Fowler updating his own corpus in the open. A late part — or an extended Part 4 or Part 6 — should treat the editor / platform face explicitly, particularly because the post-2015 corpus runs through it (Data Mesh, GenAI engineering, the late-career retrospectives).

## The Live Edge — Post-2015 Coverage

The lattice cannot end at the 2014 *Microservices* article. The post-2015 corpus is shorter in book-count but heavy in argument-weight, and the cartographer move is most visible here. Material to integrate at chapter draft time:

| Post-2015 strand | Source | Carries |
|---|---|---|
| *Refactoring* 2nd edition (2018), rewritten solo in JavaScript | `martinfowler.com/books/refactoring.html` | Refactoring as language-independent discipline. The JS rewrite is itself an argument that the moves are not Java-specific. |
| `MonolithFirst` (2015), `DontStartWithMicroservices` follow-ups | bliki | Public walking-back of the 2014 microservices over-enthusiasm. Public-revision discipline at scale. |
| `StranglerFigApplication` rename (2019) | bliki | Small but values-explicit edit — biology metaphor over violence metaphor. |
| Data Mesh series — Dehghani (2019-2022) | `martinfowler.com/articles/data-mesh-principles.html` and follow-ups | Editor / platform face. Domain-thinking applied to data architecture; Fowler hosts and amplifies. |
| *Exploring Generative AI* — Birgitta Böckeler memo series (2023-) | `martinfowler.com/articles/exploring-gen-ai.html` | Live-edge material. The cartographer mapping new territory while it is still being explored. |
| *Engineering Practices for LLM Application Development* | bliki / articles | The Practice-Loop arc extending to LLM-assisted engineering. |
| *MaturityModel is harmful* and related late critique | bliki | Late-career critique of how industry frameworks (CMMI-style maturity models) misuse vocabulary. |
| Tech Radar through 2025 | `thoughtworks.com/radar` | Ongoing platform / editor work. |

The lattice's Live Edge tells the reader: this argument is not historical. The cartographer is still working.

## What This Lattice Refuses

- The catalog framing. Fowler did not produce a catalog of best practices. He produced a single economic-and-cartographic argument with six interlocking instruments and a two-faced meta-move.
- The "patterns guy" framing. Patterns are one arc. They are not the spine.
- The "refactoring guy" framing. Refactoring is one arc. It is not the spine.
- The "microservices guy" framing. Microservices is a chapter of Arc 4. The article was even self-flagged for over-enthusiasm.
- The "best practices" framing. Best practices is what you call a catalog when you have forgotten the argument that produced it.
- The decade-of-the-job framing. Fowler's corpus is not "early Fowler did patterns, late Fowler did microservices." The arcs run in parallel across the whole career; the post-2015 corpus extends every arc, not just one.
- The ended-in-2014 framing. The cartographer is still working — Data Mesh hosting, GenAI memos, late critiques, ongoing Tech Radar.

## Open structural question (for Julie)

Advisor at VERIFY (2026-05-23) suggested that the editor / platform face of the meta-move is substantial enough to deserve its own arc — making this a *seven-arc* lattice rather than six-arcs-plus-meta-move. Two options:

1. **Keep six arcs + expanded two-face meta-move** (current state of the lattice). Cleaner parallel to Komoroske's part structure; the editor / platform role stays integrated with the bliki form.
2. **Promote to seven arcs**: add **Arc 7 — The Editor / Platform** alongside Economic / Vocabulary / Practice / Boundary / Flow / Modeling. Cleaner separation of authorship from platform-curation; but the part structure stretches and the meta-move's two faces are split between Part 0 and a later part.

Recommend deciding this *before* Part 1 vertical slice drafts. See `PLAN.md` → Open decisions for Julie.

## What This Lattice Earns

A reader can pick up a single Fowler bliki entry — say, `FeatureToggle` — and see how it connects upward (to the flow argument), sideward (to feature-toggle's role in branch-by-abstraction during a strangler-fig migration), and downward (to the economic argument that justifies why decoupling deploy from release reduces cycle time, which is the visible face of design stamina). The lattice is the *map* of Fowler's argument; the corpus is the territory.

The book that follows this lattice will not be a catalog. It will be one argument, walked six ways — and a meta-move that is itself part of the thesis.
