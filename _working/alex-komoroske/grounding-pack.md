# Grounding pack: Alex Komoroske

Generated 2026-09-16 by scripts/grounding-pack.ts. Every claim in the reading must cite at least one ID below.

thinker_type: essay-corpus · doctrine_mode: mode-c

## The thinker (spine, handles, limits)

- **[T:thesis]** Complex systems work best when they are gardened, not architected. The leader's job is not to plan the optimal answer and propagate it downward; the leader's job is to make defensible answers focal enough that local actors converge on them without being told. Organizations that ignore this pay a tax that grows faster than they expect, sooner than they expect. This is coordination headwind. The standard responses (more meetings, more reorgs, more hiring) make it worse. The fix is to push decisions to where local information lives, accept the messiness, and trust that recovery time in a self-correcting system is faster than freeze-up time in a centralized one.
- **[T:working-line]** Most organizations work like the opposite of the slime mold. There is a roadmap. There are quarterly goals. There is a project manager. And somehow, despite all of this central planning, the work moves slower the bigger the organization gets.
- **[F:coordination-headwind]** Coordination headwind (extended, with fred-brooks): The invisible drag on collaborative work that grows superlinearly with headcount; the cost of every agreement a decision depends on.
- **[F:slime-mold]** The slime mold (popularized, with tero-atsushi): The working metaphor for distributed, locally-informed decision-making. No central planner; recovery faster than freeze.
- **[F:schelling-point-organizations]** Schelling-point organizations (extended, with thomas-schelling): Convergence engineered through focal-point design rather than directive planning. Make the secure default the obvious one.
- **[F:gardener-vs-architect]** Gardener vs. architect (original): Two opposing leadership stances: set conditions and prune (gardener) vs. plan and propagate (architect).
- **[F:heroics-smell]** The heroics smell (original): A diagnostic, not a solution. If your system requires heroes to keep working, your system is broken.
- **[F:adjacent-possible]** Adjacent possible (extended, with stuart-kauffman, steven-johnson): The space of next moves reachable from the current configuration: what an organization can plausibly become from where it is now.
- **[L:1]** Regulated environments shorten the recovery-time advantage (structural): The slime mold's wrong turns are recoverable only when backing out is cheap. In regulated industries (banking, healthcare, defense), wrong turns generate audit findings, breach reports, compliance debt that does not back out cheaply. The headwind frame is still correct; the "trust the recovery" prescription gets shorter the more the environment punishes recoverable mistakes.
- **[L:2]** The gardener metaphor has no story for adversarial actors (structural): A garden assumes the plants are not trying to kill you. Security, fraud, political work all involve adversaries who exploit the gardener's tolerance. The framework's silence on this shows up the minute you try to apply it where some actors are optimizing against you, and it is not a small omission, because the gardening stance becomes a liability in the face of an attacker.
- **[L:3]** 'Push decisions to where local information lives' assumes shared goals (local): In organizations with misaligned incentives, pushing decisions local doesn't reduce coordination cost; it relocates it inside a single team or person. The headwind sublimates into individual stress rather than disappearing. The fix is upstream of Komoroske's frame.
- **[L:4]** The vocabulary becomes its own jargon (local): Once a team has "coordination headwind" in their lexicon, every slow meeting gets blamed on it. The frame becomes a thought-terminator if not held carefully: a way to label the problem without analyzing it.
- **[T:still-load-bearing]** The diagnostic power of the headwind frame is enormous even with these limits. You can apply it to your own organization and immediately see costs you were paying invisibly. That's what a good framework does: makes the invisible legible. The limits are reasons to combine Komoroske with other frames (Reason on safety-critical systems, Dekker on adversarial / failure-prone systems), not reasons to ignore the headwind frame.

## Outbound edges (this page points at)

- **[E:out:fred-brooks]** antecedent, primary → Fred Brooks (has a page): Brooks named the coordination cost in 1975 for engineering teams under deadline. Komoroske generalized the same physics from engineering to all coordination work.
- **[N:fred-brooks:thesis]** Fred Brooks's thesis: Software is fundamentally a communication problem dressed up as an engineering problem. The cost of building large systems is mostly the cost of coordinating the people building them; that cost grows superlinearly with team size and is bounded below by communication topology, not by individual programmer productivity. Therefore: adding people to a late project makes it later (Brooks's Law). Therefore: conceptual integrity is the single most important property of a system and must be defended by keeping the design in a small number of heads. Therefore: tools and methodologies that target *accidental* complexity (syntax, memory, type errors) can yield big productivity gains; tools and methodologies that promise to reduce *essential* complexity (the problem domain itself) are silver bullets and they do not exist.
- **[E:out:thomas-schelling]** antecedent, primary → Thomas Schelling: Schelling's 1960 focal-point theory is the hidden physics under Komoroske's coordination work. Komoroske borrows it explicitly.
- **[E:out:martin-fowler]** parallel, secondary → Martin Fowler (has a page): Fowler builds the same kind of named-vocabulary instrument for software design that Komoroske builds for org design. Different domain, same cartographer move.
- **[N:martin-fowler:thesis]** Martin Fowler's thesis: Software is a perishable medium for shared understanding. It rots when nobody is tending it, and the cost of letting it rot is paid not in some distant future but in next week's velocity. The way to keep software cheap to change is to evolve practice in public: name the moves, share the vocabulary, run the build-test-deploy loop tight, place the boundaries where change wants to flow, model the domain in the language the team already uses with the customer, and write the practice down as you discover it. Quality IS speed. Naming the implicit is how the argument becomes negotiable. The catalog, the bliki entry, the pattern, the named refactoring, the smell: these are the cartographer's instruments.
- **[E:out:peter-senge]** parallel, secondary → Peter Senge: Same systems-thinking territory from the learning-organization angle. Komoroske rarely cites him; the absence is interesting.
- **[E:out:stuart-kauffman]** antecedent, secondary → Stuart Kauffman / Steven Johnson: Komoroske's use of "adjacent possible" borrows directly from Kauffman via Johnson's *Where Good Ideas Come From*.

## Inbound edges (other pages point here)

- **[E:in:ray-dalio]** Ray Dalio → Alex Komoroske, parallel: Both are cartographers of organizational complexity, but from opposite ends. Komoroske argues *don't centralize the algorithm, garden the conditions*; Dalio argues *centralize the algorithm, publish it, run the org against it*. Honest readers carry both and choose by context.
- **[E:in:nicole-forsgren]** Nicole Forsgren → Alex Komoroske, antecedent: Komoroske names coordination headwind as the upstream cause; Forsgren names the downstream measurement. The headwind frame predicts what DORA empirically detects: slow lead-time-for-changes is what the headwind tax looks like when you instrument it.
- **[E:in:martin-fowler]** Martin Fowler → Alex Komoroske, parallel: Same cartographer move, different domain. Fowler builds named-vocabulary instruments for software design, Komoroske builds them for organization design. Coordination headwind, Schelling-point organizations, gardener- vs-architect are the org-design equivalents of refactoring, bounded context, ubiquitous language.
- **[E:in:fred-brooks]** Fred Brooks → Alex Komoroske, extends: Komoroske generalized Brooks's narrow engineering-team claim into coordination headwind: the same physics, applied to all coordination work. The lineage is explicit; Komoroske attributes Brooks throughout. Read in this order: Brooks 1975 → Komoroske 2018.

## Shared concepts (frames other pages also hold)

- **[S:coordination-headwind:fred-brooks]** Fred Brooks also holds Brooks's Law: Adding manpower to a late software project makes it later. The underlying physics (coordination cost grows superlinearly with team size) is what Komoroske later generalized as coordination headwind.
- **[C:coordination-headwind]** Concept page Coordination Headwind: The invisible drag on collaborative work: the cost of every agreement a decision depends on. Grows superlinearly with team size and absorbs effort before any of it reaches the work.

## Two hops out (names only, for reach)

- **[H:melvin-conway]** Melvin Conway (via martin-fowler, antecedent)
- **[H:david-parnas]** David Parnas (via fred-brooks, parallel)
- **[H:edsger-dijkstra]** Edsger Dijkstra (via fred-brooks, parallel)
- **[H:kent-beck]** Kent Beck (via martin-fowler, extends)
- **[H:ward-cunningham]** Ward Cunningham (via martin-fowler, antecedent)
- **[H:eric-evans]** Eric Evans (via martin-fowler, extends)
- **[H:christopher-alexander]** Christopher Alexander (via martin-fowler, antecedent)

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

- **[R:fred-brooks]** Vendors sell silver bullets constantly. Every quarter brings a new tool that will "transform" security posture, "eliminate" risk classes, "solve" the AI-supply-chain problem. The Brooks question (is this attacking essential complexity or accidental?) separates the real from the rhetorical fast. If accidental, fine: that is where order-of-magnitude wins are real. If essential (the underlying problem of threat modeling, blast-radius reasoning, identity-and-access decisions, adversarial dynamics), no tool will deliver an order of magnitude. Same essay, applied forty years later, still works.
- **[R:martin-fowler]** Fowler's cartographer move is the most useful framework I carry into security organization design. Most security programs fail at the same layer his work attacks: implicit choices treated as too obvious to need naming, which means too obvious to be debated. Threat models, control selections, severity calls, risk-acceptance decisions are all conversations starved of vocabulary. The Fowler move is to turn those implicit calls into named, attributed, debatable objects, and the move works at the security layer for the same reason it worked at the design layer. Once a thing has a name, an engineering team can pick it up, argue with it, refuse it, extend it. Without a name it is just somebody's opinion in a meeting nobody remembers.

## Prior section 6 draft (input only, not a source; Camila-drafted)

> Most security programs fail not because the threat model is wrong but because the coordination cost of acting on the threat model exceeds the available organizational energy. That is the headwind frame, applied; once you see it in security work, you cannot unsee it. Once you have the headwind frame, you stop trying to fix slow security work by adding more security people; you start trying to reduce the coordination surface that the security work has to cross. Structural intervention, not headcount intervention.

> Komoroske writes about coordination as a general organizational physics. The security translation is that every security control is itself a coordination event with an attached headwind cost, and the right design move is to reduce the number of agreements a control depends on. Schelling points show up here too: a security culture works when the "secure default" is the focal one, the one nobody has to defend choosing. Straight Komoroske, applied to threat surface.

