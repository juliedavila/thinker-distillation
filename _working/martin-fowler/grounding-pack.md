# Grounding pack: Martin Fowler

Generated 2026-09-16 by scripts/grounding-pack.ts. Every claim in the reading must cite at least one ID below.

thinker_type: mixed · doctrine_mode: mode-c

## The thinker (spine, handles, limits)

- **[T:thesis]** Software is a perishable medium for shared understanding. It rots when nobody is tending it, and the cost of letting it rot is paid not in some distant future but in next week's velocity. The way to keep software cheap to change is to evolve practice in public: name the moves, share the vocabulary, run the build-test-deploy loop tight, place the boundaries where change wants to flow, model the domain in the language the team already uses with the customer, and write the practice down as you discover it. Quality IS speed. Naming the implicit is how the argument becomes negotiable. The catalog, the bliki entry, the pattern, the named refactoring, the smell: these are the cartographer's instruments.
- **[T:working-line]** Make change easy, then make the easy change. (Kent Beck, the working motto Fowler quotes more than any other.)
- **[F:refactoring]** Refactoring (extended, with william-opdyke, kent-beck; derived from opdyke-thesis-1992): A disciplined structure-changing move that does not change behavior, made safe by tests. Improves the design of existing code in small, reversible steps.
- **[F:code-smell]** Code smell (co-authored, with kent-beck, martin-fowler): A surface signal that something deeper in the code is wrong; a named heuristic for what to refactor away from.
- **[F:bounded-context]** Bounded context (extended, with eric-evans): A region of the model inside which the language is consistent: the boundary placed where the words change, not where the org chart changes.
- **[F:strangler-fig-application]** Strangler fig application (original): A migration pattern: grow the new system around the old one until the old one can be removed, instead of rewriting from scratch.
- **[F:continuous-integration]** Continuous integration (original, with kent-beck, jez-humble, dave-farley): A development practice: integrate work into the mainline at least daily, verified by an automated build, so defects surface in hours not weeks.
- **[F:design-stamina-hypothesis]** Design stamina hypothesis (original): A named claim (labeled as hypothesis, not law) that internal quality pays back faster than expected. The crossover where quality work outpaces shortcut work happens in weeks, not years.
- **[F:bliki]** The bliki (original): A hybrid of blog and wiki: write up an idea while figuring it out, post it publicly, keep revising, mark the maturity (`growing`, `stable`), attribute origins. The form Fowler's argument evolves in.
- **[L:1]** The 2014 microservices article was too lenient on operational cost (structural): Fowler's own follow-ups (`MonolithFirst`, `MicroservicePremium`, `MicroservicePrerequisites`) are the public retraction. The article undersold the price of distribution: observability, network reliability, partial-failure modes, the operational tax that does not show up in the modeling argument. Read the follow-ups and Sam Newman's 2nd-edition *Building Microservices* alongside the original article, not as a replacement for it.
- **[L:2]** The catalog form can become an end in itself (structural): Joshua Kerievsky's *Refactoring to Patterns* is both extension and pointed critique: mechanical refactoring without a pattern-target can produce code that is cleaner-but-not-better. The 2nd edition of *Refactoring* (2018) responds, but the critique is live: a named move with no design destination is still motion without direction.
- **[L:3]** The test pyramid is a heuristic, not a law (local): Vladimir Khorikov, Sam Newman and others argue strict pyramid orthodoxy can starve integration testing where the actual bugs live. Treat the pyramid as the *shape* of a reasonable starting place, not as the answer to where test effort belongs.
- **[L:4]** The discipline-of-attribution scales unevenly to the security world (local): Fowler's attribution chains work because his community is small, stable, and largely self-citing. Security has weaker citation discipline, faster vocabulary drift, more vendor-driven naming, and a meaningful adversarial layer that Fowler's collaborative-design framing doesn't acknowledge. The cartographer move still applies; the cartographer's working norms partially don't.
- **[T:still-load-bearing]** The cartographer move is the most under-acknowledged contribution of the Fowler corpus. Even with the microservices over-enthusiasm, even with the test-pyramid orthodoxy risk, even with the catalog-as-end-in-itself failure mode. Turning tacit design knowledge into named, attributed, debatable distinctions is what makes engineering practice transmissible across companies, generations, and disciplines. The vocabulary you use to think about your code is mostly his. The reason "let's refactor that" is a conversation rather than a fight is mostly his. That doesn't go away when individual chapters age out.

## Outbound edges (this page points at)

- **[E:out:kent-beck]** extends, primary → Kent Beck: The deepest collaborator. Co-authored *Refactoring*, defined TDD, coined code smell with Fowler, contributed the two-hat rule and the "make change easy" motto. Most of what Fowler argues, he argues alongside Beck.
- **[E:out:ward-cunningham]** antecedent, primary → Ward Cunningham: Coined "technical debt" in 1992 and built the wiki, the form Fowler extended into the bliki. The genre of public-revision design writing starts with Cunningham; Fowler operationalized it as a career.
- **[E:out:eric-evans]** extends, primary → Eric Evans: Domain-Driven Design's bounded context, ubiquitous language, aggregate root, anti-corruption layer all enter the wider community through Fowler's foreword, bliki carries, and pattern catalog integration.
- **[E:out:alex-komoroske]** parallel, primary → Alex Komoroske (has a page): Same cartographer move, different domain. Fowler builds named-vocabulary instruments for software design, Komoroske builds them for organization design. Coordination headwind, Schelling-point organizations, gardener- vs-architect are the org-design equivalents of refactoring, bounded context, ubiquitous language.
- **[N:alex-komoroske:thesis]** Alex Komoroske's thesis: Complex systems work best when they are gardened, not architected. The leader's job is not to plan the optimal answer and propagate it downward; the leader's job is to make defensible answers focal enough that local actors converge on them without being told. Organizations that ignore this pay a tax that grows faster than they expect, sooner than they expect. This is coordination headwind. The standard responses (more meetings, more reorgs, more hiring) make it worse. The fix is to push decisions to where local information lives, accept the messiness, and trust that recovery time in a self-correcting system is faster than freeze-up time in a centralized one.
- **[E:out:christopher-alexander]** antecedent, secondary → Christopher Alexander: The pattern-language form Fowler's catalogs descend from. Alexander's later critique of how programmers used patterns is itself part of why Fowler's catalog discipline matters: naming is necessary but not sufficient.
- **[E:out:melvin-conway]** antecedent, secondary → Melvin Conway: Conway's Law (1968), Fowler taxonomized into the *Inverse Conway Maneuver*. The boundary arc of Fowler's work runs through Conway's claim that org structure ships in the system structure.

## Inbound edges (other pages point here)

- **[E:in:ray-dalio]** Ray Dalio → Martin Fowler, parallel: The cartographer move applied to a different domain. Fowler writes down the *vocabulary* of software design; Dalio writes down the *decision algorithm* of running an organization. Same instinct (make the implicit explicit, then make it revisable), different content.
- **[E:in:fred-brooks]** Fred Brooks → Martin Fowler, parallel: The cartographer move for the next generation. Brooks named the large-scale physics of software engineering once; Fowler spent twenty-five years naming the daily-practice vocabulary inside the Brooks frame. Different scales, same project: make implicit choices explicit so they can be debated.
- **[E:in:alex-komoroske]** Alex Komoroske → Martin Fowler, parallel: Fowler builds the same kind of named-vocabulary instrument for software design that Komoroske builds for org design. Different domain, same cartographer move.

## Shared concepts (frames other pages also hold)


## Two hops out (names only, for reach)

- **[H:fred-brooks]** Fred Brooks (via alex-komoroske, antecedent)
- **[H:thomas-schelling]** Thomas Schelling (via alex-komoroske, antecedent)
- **[H:peter-senge]** Peter Senge (via alex-komoroske, parallel)
- **[H:stuart-kauffman]** Stuart Kauffman / Steven Johnson (via alex-komoroske, antecedent)

## Lens: Julie's published positions

The extension must connect to at least one of these, or say plainly that none applies.

- **[P:1]** Prompt injection is architecturally unsolvable — mitigate, don't solve.
- **[P:2]** Security as emergent property, not imposed constraint. Make secure behavior the Schelling point.
- **[P:3]** Boundary enforcement over code inspection — capability-based security at infrastructure level scales where code review does not.
- **[P:4]** AI Comprehension Crisis — code generation outpaces understanding at 2.5:1; the enterprise that maintains semantic comprehension of its software estate has structural advantage.
- **[P:5]** Five Attack Surface Expansions — democratized builders + public APIs + agent access + autonomous reasoning + LLM workflows = combinatorial, not additive, threat surface.
- **[P:6]** Software Factory Ontology — specs as ontology objects, security constraints as part of the spec, end-to-end auditability.
- **[P:7]** Confused deputy problem (Hardy, 1988) is the correct framing for MCP/agent authorization failures.
- **[P:8]** "It's gotta be tough for all the right reasons." Criteria for meaningful work: autonomy, difficulty, people, mission.

## Neighbor readings (for the novelty check only; do not echo)

- **[R:alex-komoroske]** Most security programs fail not because the threat model is wrong but because the coordination cost of acting on the threat model exceeds the available organizational energy. That is the headwind frame, applied; once you see it in security work, you cannot unsee it. Once you have the headwind frame, you stop trying to fix slow security work by adding more security people; you start trying to reduce the coordination surface that the security work has to cross. Structural intervention, not headcount intervention.

## Prior section 6 draft (input only, not a source; Camila-drafted)

> Fowler's cartographer move is the most useful framework I carry into security organization design. Most security programs fail at the same layer his work attacks: implicit choices treated as too obvious to need naming, which means too obvious to be debated. Threat models, control selections, severity calls, risk-acceptance decisions are all conversations starved of vocabulary. The Fowler move is to turn those implicit calls into named, attributed, debatable objects, and the move works at the security layer for the same reason it worked at the design layer. Once a thing has a name, an engineering team can pick it up, argue with it, refuse it, extend it. Without a name it is just somebody's opinion in a meeting nobody remembers.

> Fowler writes about cheap-to-change as the central economic property of good software. I push the same logic into security: cheap-to-defend is the central economic property of a securable system, and it is downstream of the same internal-quality choices Fowler argues for. A system with legible boundaries, named seams, and tight feedback loops is also a system that can absorb a CVE, swap a dependency, rotate a credential, or contain a blast radius without rewriting itself. Internal quality shows up as the source of *security velocity* the same way it shows up as the source of feature velocity. The cartographer's instruments apply to both.

