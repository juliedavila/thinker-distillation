# Fowler Corpus Inventory

> Annotated bibliography of Martin Fowler's body of work. Tagged `canon` (load-bearing source) / `supplementary` (reference-grade) / `meta-genre` (the bliki itself, the catalog format, the Tech Radar — artifacts whose existence is part of the argument). URL verification deferred to chapter-draft time. Domain prefix throughout: `martinfowler.com`.

## Books (chronological)

| Year | Title | Co-authors | Tag | Argument arc carried |
|------|-------|------------|-----|----------------------|
| 1996 | *Analysis Patterns: Reusable Object Models* | — | canon | Modeling |
| 1997 (1st), 2003 (3rd) | *UML Distilled* | — | canon | Modeling (UML-as-sketch position) |
| 1999 (1st), 2018 (2nd) | *Refactoring: Improving the Design of Existing Code* | Beck, Brant, Opdyke, Roberts (1st); rewrite solo in JS (2nd) | canon | Practice Loop |
| 2000 | *Planning Extreme Programming* | Kent Beck | canon | Practice Loop, Flow |
| 2002 | *Patterns of Enterprise Application Architecture* (PoEAA) | — | canon | Vocabulary, Modeling |
| 2010 | *Domain-Specific Languages* | Rebecca Parsons | canon | Modeling, Vocabulary |
| 2012 | *NoSQL Distilled* | Pramod Sadalage | canon | Modeling, Flow (Polyglot Persistence) |

**Forewords / endorsements that function as canon:**

- 2003 — Foreword to Eric Evans, *Domain-Driven Design: Tackling Complexity in the Heart of Software*. Fowler's foreword is the bridge that carried DDD to a wider audience.
- 2010 — Foreword to Jez Humble + Dave Farley, *Continuous Delivery: Reliable Software Releases through Build, Test, and Deployment Automation*.
- 2014 — Foreword / endorsement role for Sam Newman, *Building Microservices* (Newman's book builds directly on Fowler + Lewis 2014 article).

## Bliki entries (selected canon — ≥30 named)

> Fowler invented the term *bliki* (blog + wiki) to describe his hybrid form: short, revisable, named entries, kept in a public catalog at `martinfowler.com/bliki/`. Entries carry maturity badges (*growing*, *stable*) and are publicly revised. The bliki itself is a meta-genre artifact — part of the corpus, not paratext.

### Economic Argument arc

- `IsQualitySoftwareWorthTheCost` — `canon`. The keystone essay. Internal quality has short-term payoff (weeks, not years). Carries Part 1.
- `DesignStaminaHypothesis` — `canon`. The graph that crosses early — the named hypothesis that internal quality is what allows feature velocity to remain constant.
- `TechnicalDebt` — `canon`. The metaphor itself, attributed to Ward Cunningham 1992.
- `TechDebtQuadrant` — `canon`. Reckless / Prudent × Deliberate / Inadvertent. Fowler's taxonomy.
- `CannotMeasureProductivity` — `canon`. The corollary economic claim.

### Vocabulary arc

- `CodeSmell` — `canon`. Beck-coined, Fowler-carried. Hinge between vocabulary and practice.
- `TwoHardThings` — `canon`. Naming, cache invalidation, off-by-one. Joke-as-doctrine.
- `Bliki` — `meta-genre`. The genre Fowler invented; the entry that defines the entry-form.
- `Yagni` — `canon`. You Aren't Gonna Need It. Beck-coined, Fowler-distilled.
- `Cruft` — `canon`. The named cumulative cost of internal quality decay.

### Practice Loop arc

- `Refactoring` (entry, distinct from the book) — `canon`.
- `WorkflowsOfRefactoring` — `canon`. The how-to.
- `TestPyramid` — `canon`. The shape (unit > integration > E2E).
- `MocksArentStubs` — `canon`. The test-doubles disambiguation (mock / stub / fake / spy / dummy).
- `ContinuousIntegration` — `canon`. The original 2006 article that named the practice.
- `PreparatoryRefactoring` — `canon`. The "make change easy" move named.
- `RedBar` / `GreenBar` — `supplementary`. TDD vocabulary.

### Boundary Choice arc

- `Microservices` (with James Lewis, 2014) — `canon`. The defining article. Self-tagged "growing" for years.
- `MicroservicePremium` — `canon`. The honest accounting of what microservices cost you.
- `MicroservicePrerequisites` — `canon`. The list of things that have to be true before microservices help.
- `MonolithFirst` — `canon`. Start with the monolith; carve out services only when the seams are real.
- `BoundedContext` — `canon`. Evans-coined, Fowler-carried.
- `StranglerFigApplication` — `canon`. The migration pattern (Queensland tree image).
- `ConwaysLaw` — `canon`. The org-chart-is-the-system claim.
- `InverseConwayManeuver` — `canon`. Restructure the org to get the system you want.
- `MicroservicePrerequisites` — `canon`.
- `IntegrationDatabase` / `ApplicationDatabase` — `canon`. The shared-DB anti-pattern called out.
- `PolyglotPersistence` — `canon`. The Sadalage co-coined term.

### Flow Argument arc

- `ContinuousIntegration` — `canon` (cross-arc with Practice Loop).
- `ContinuousDelivery` — `canon`. Distilled from the Humble + Farley book.
- `BranchByAbstraction` — `canon`. The trunk-based-dev migration move.
- `FeatureToggle` — `canon`. The mechanism for decoupling deploy from release.
- `FeatureToggleTypes` — `canon`. Release / Ops / Experiment / Permission taxonomy (with Pete Hodgson).
- `BlueGreenDeployment` — `canon`. The named deploy pattern.
- `CanaryRelease` — `canon`.
- `EvolutionaryDatabase` — `canon`. Sadalage co-authored.
- `TrunkBasedDevelopment` (referenced extensively) — `canon`.

### Modeling Argument arc

- `UmlAsSketch` (vs. UmlAsBlueprint vs. UmlAsProgrammingLanguage) — `canon`. The three modes; Fowler's defense of sketch.
- `DomainDrivenDesign` — `canon`. The Evans-popularization arc.
- `UbiquitousLanguage` — `canon`. Evans-coined, Fowler-carried.
- `CQRS` — `canon`. Greg Young-coined; Fowler explained.
- `EventSourcing` — `canon`. Pattern named with full mechanism.
- `DomainEvent` — `canon`.
- `AnemicDomainModel` — `canon`. The named anti-pattern.
- `ActiveRecord` / `DataMapper` / `Repository` / `UnitOfWork` — `canon`. PoEAA patterns hoisted into bliki form.
- `DomainModel` / `TransactionScript` / `TableModule` — `canon`. The three-way distinction.
- `InversionOfControl` — `canon`.
- `DependencyInjection` — `canon`. The named refactoring out of the IoC discussion.
- `ServiceLayer` — `canon`.
- `FluentInterface` (with Eric Evans) — `canon`.
- `Saga` — `canon`. The long-running transaction pattern.
- `AggregateRoot` — `canon`. (Evans-coined, Fowler-carried in PoEAA-adjacent bliki entries.)
- `EventDrivenArchitecture` — `canon`.
- `GuiArchitectures` — `canon`. MVC / MVP / MVVM / PassiveView / SupervisingController / PresentationModel — the retrospective taxonomy.
- `PassiveView`, `SupervisingController`, `PresentationModel` — `canon`. The sub-entries.

### Meta-genre arc (the bliki itself, the catalog format, the public-revision discipline)

- `Bliki` — `meta-genre`. The form.
- `RefactoringMalapropism` — `meta-genre`. Public retraction / clarification on terminology drift.
- `MicroservicePremium` and the *Microservices* article retraction language — `meta-genre`. Public update on his own earlier work.
- `BookReviews` (the section of martinfowler.com) — `meta-genre`. The carrying-other-people's-work discipline.
- `StranglerFigApplication` rename (2019, from `StranglerApplication`) — `meta-genre`. Values-explicit edit; biology metaphor over violence metaphor.
- `MaturityModel` / *MaturityModel is harmful* — `meta-genre` + `canon`. Late-career critique of how industry frameworks misuse vocabulary.

### Live-edge / post-2015 strand (hosted canon and late-career work)

The platform / editor face of Fowler's late career. Work he authored, co-authored, or canonically hosted on `martinfowler.com`:

- ***Refactoring* 2nd edition (2018)** — rewritten solo in JavaScript. The language-switch is itself an argument that the moves are not Java-specific.
- **Data Mesh series — Zhamak Dehghani (2019-2022)** — `martinfowler.com/articles/data-mesh-principles.html` and follow-ups. *Hosted canon*. Dehghani's domain-thinking applied to data architecture, published canonically on Fowler's site.
- ***Exploring Generative AI*** — Birgitta Böckeler memo series (2023-), `martinfowler.com/articles/exploring-gen-ai.html`. Live-edge material; the cartographer mapping new territory while it is still being explored.
- ***Engineering Practices for LLM Application Development*** — Fowler and Böckeler on LLM-assisted engineering. Practice Loop arc extending forward.
- `MonolithFirst` (2015), `DontStartWithMicroservices` follow-ups — public walking-back of 2014 over-enthusiasm.
- *Patterns of Legacy Displacement* — joint work with Cartwright, Horn, and others; the late companion to the original strangler-fig pattern.
- *ThoughtWorks Tech Radar through 2025* — `thoughtworks.com/radar`. Ongoing platform / editor work. Quarterly Adopt / Trial / Assess / Hold quadrants.

## Joint articles and major pieces

- 2002 — *Refactoring* article in *IEEE Software* (the catalog form distilled before the 2nd-edition rewrite).
- 2006 — *Continuous Integration* article (martinfowler.com/articles/continuousIntegration.html). The original definitive statement.
- 2007 — *Mocks Aren't Stubs* (extended article, distinct from the bliki short form).
- 2014 — *Microservices* (martinfowler.com/articles/microservices.html), with James Lewis. The defining article; later self-flagged as too lenient on operational cost.
- 2014 — *Is TDD Dead?* panel with Kent Beck and DHH (six recorded conversations). Fowler hosted.
- 2015 — *Microservice Prerequisites*, *Microservice Premium* — the follow-ups to the 2014 article.
- 2019 (2nd-edition launch) — *Refactoring* essays accompanying the book release.

## Talks and keynotes (canonical)

- "Workflows of Refactoring" — multiple-conference talk.
- "Continuous Delivery" — talk series.
- "The State of Software Design" — annual-ish keynote, multiple venues.
- "Software Design in the 21st Century" — keynote (covers DSL, refactoring, design stamina).
- "Goto" conference keynotes — multiple.

## ThoughtWorks artifacts (Chief Scientist role)

- *ThoughtWorks Technology Radar* — Fowler is one of the shaping authors. The Adopt / Trial / Assess / Hold quadrants and the publication cadence are partly his discipline.
- ThoughtWorks Insights — Fowler-edited content.
- The *Patterns of Enterprise Application Architecture* lineage at ThoughtWorks (Sam Newman, Rebecca Parsons, Ian Cartwright, Rob Horn, James Lewis, Dave Farley) — Fowler's intellectual partners and extenders.

## Co-authored / extender works (read alongside Fowler)

| Work | Author | Relation to Fowler |
|------|--------|---------------------|
| *Extreme Programming Explained* | Kent Beck | Co-evolution; Fowler co-authored Planning XP. |
| *Test-Driven Development by Example* | Kent Beck | Practice Loop foundation. |
| *Continuous Delivery* | Jez Humble + Dave Farley | Fowler's foreword; ongoing carry. |
| *Domain-Driven Design* | Eric Evans | Fowler's foreword; bliki carry. |
| *Building Microservices* (1st, 2nd ed) | Sam Newman | Direct extension of Fowler + Lewis 2014. |
| *Refactoring to Patterns* | Joshua Kerievsky | Direct extension and partial critique of the *Refactoring* catalog. |
| *Working Effectively with Legacy Code* | Michael Feathers | Practice Loop extension; "seams" concept. |
| *Implementing Domain-Driven Design* | Vaughn Vernon | DDD extension, distinct from Evans. |
| *Data on the Outside vs. Inside* | Pat Helland | Modeling arc extension; Fowler-cited. |
| *The Pragmatic Programmer* | Andy Hunt + Dave Thomas | Adjacent practice-arc partners. |

## Critical works (read for Part 7)

- DHH, *TDD Is Dead. Long Live Testing* (blog post, 2014). Triggered the *Is TDD Dead?* panel.
- Joel Spolsky, *Things You Should Never Do, Part I* (the rewrite-from-scratch critique).
- Joshua Kerievsky, *Refactoring to Patterns* — both extension and pointed critique that mechanical refactoring without pattern-target loses architectural force.
- Vladimir Khorikov, *Unit Testing Principles, Practices, and Patterns* — critiques the test-pyramid orthodoxy.
- Sam Newman, second-edition *Building Microservices* — softens the 2014 Fowler/Lewis enthusiasm, prints the operational cost honestly.
- Christopher Alexander's later writing (post-*Pattern Language*) — the original critique that programmers misused the patterns concept by turning it into checklists.

## Notes on canon vs. supplementary

The `canon` tag means the entry is load-bearing for at least one of the six argument arcs and must be cited in the relevant chapter. The `supplementary` tag means the entry is good cross-reference but not chapter-essential. The `meta-genre` tag means the entry's *existence* is part of the argument — the bliki, the public retractions, the maturity badges, the catalog format. Meta-genre is Part 0 and Part 7 material.

## Open work for next session

- Verify every URL in this inventory at chapter-draft time.
- Pull updated counts on bliki entries (Fowler is still active — entries may have been added 2024-2025).
- Confirm the Pete Hodgson co-author credit on `FeatureToggleTypes`.
- Locate the exact retraction language Fowler used on the 2014 Microservices article (the "too lenient on costs" framing — confirm the wording).
- Decide whether to include the *PrincipalIdentity*-of-Fowler material (his keynotes, his stage register, his ThoughtWorks role) or treat the corpus as text-only.
