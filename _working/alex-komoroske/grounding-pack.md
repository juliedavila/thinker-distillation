# Grounding pack: Alex Komoroske

Generated 2026-10-15 by scripts/grounding-pack.ts. Every claim in the reading must cite at least one ID below.

thinker_type: essay-corpus · doctrine_mode: mode-c

## The thinker (spine, handles, limits)

- **[T:thesis]** Complex systems work best when they are gardened, not built. The leader's job is not to plan the optimal answer and propagate it downward; the leader's job is to make defensible answers focal enough that local actors converge on them without being told. Large organizations pay a coordination tax that grows faster than they expect, sooner than they expect, even when everyone in them is competent and collaborative. This is coordination headwind. The standard responses (more meetings, more reorgs, more hiring) make it worse. The fix is to push decisions to where local information lives, accept the messiness, and trust that recovery time in a self-correcting system is faster than freeze-up time in a centralized one.
- **[T:working-line]** Many organizations are basically slime molds. Instead of trying to fight that, maybe lean into what slime molds are good at, and think of yourself less as a builder and more as a gardener.
- **[F:coordination-headwind]** Coordination headwind (extended): The invisible drag on collaborative work that grows superlinearly with headcount; the cost of every agreement a decision depends on.
- **[F:slime-mold]** The slime mold (popularized, with atsushi-tero): The working metaphor for distributed, locally-informed decision-making. No central planner; recovery faster than freeze.
- **[F:schelling-point-organizations]** Schelling-point organizations (extended, with thomas-schelling): Convergence engineered through focal-point design rather than directive planning.
- **[F:gardener-vs-builder]** Gardener vs. builder (extended, with brian-eno, stanley-mcchrystal): Two opposing leadership stances: set conditions and prune (gardener) vs. plan and propagate (builder).
- **[F:heroics-as-a-symptom]** Heroics as a symptom (extended): Heroics are a symptom of the headwind and a poor response to it: the churn they create raises the headwind they were meant to overcome.
- **[F:adjacent-possible]** Adjacent possible (extended, with stuart-kauffman, steven-johnson): The space of next moves reachable from the current configuration: what an organization can plausibly become from where it is now.
- **[L:1]** Regulated environments shorten the recovery-time advantage (structural): The slime mold's wrong turns are recoverable only when backing out is cheap. In regulated industries (banking, healthcare, defense), wrong turns generate audit findings, breach reports, compliance debt that does not back out cheaply. The headwind frame is still correct; the "trust the recovery" prescription gets shorter the more the environment punishes recoverable mistakes.
- **[L:2]** The gardener metaphor has no story for adversarial actors (structural): A garden assumes the plants are not trying to kill you. Security, fraud, political work all involve adversaries who exploit the gardener's tolerance. The framework's silence on this shows up the minute you try to apply it where some actors are optimizing against you, and it is not a small omission, because the gardening stance becomes a liability in the face of an attacker.
- **[L:3]** 'Push decisions to where local information lives' assumes shared goals (local): In organizations with misaligned incentives, pushing decisions local doesn't reduce coordination cost; it relocates it inside a single team or person. The headwind sublimates into individual stress rather than disappearing. The fix is upstream of Komoroske's frame.
- **[L:4]** The vocabulary becomes its own jargon (local): Once a team has "coordination headwind" in their lexicon, every slow meeting gets blamed on it. The frame becomes a thought-terminator if not held carefully: a way to label the problem without analyzing it.
- **[T:still-load-bearing]** The diagnostic power of the headwind frame is enormous even with these limits. You can apply it to your own organization and immediately see costs you were paying invisibly. That's what a good framework does: makes the invisible legible. The limits are reasons to combine Komoroske with other frames (Reason on safety-critical systems, Dekker on adversarial / failure-prone systems), not reasons to ignore the headwind frame.

## Outbound edges (this page points at)

- **[E:out:fred-brooks]** parallel, primary → Fred Brooks (has a page): Brooks described a coordination cost in 1975 for engineering teams under deadline, and the headwind covers similar ground for all collaborative work. Komoroske's homepage says his argument started when he was studying Wikipedia's user community and was informed by web standards work. His deck and his Schelling-points essay do not mention Brooks, so the pairing is this site's reading.
- **[N:fred-brooks:thesis]** Fred Brooks's thesis: Software is fundamentally a communication problem dressed up as an engineering problem. The cost of building large systems is mostly the cost of coordinating the people building them; that cost grows superlinearly with team size and is bounded below by communication topology, not by individual programmer productivity. Therefore: adding people to a late project makes it later (Brooks's Law). Therefore: conceptual integrity is the single most important property of a system and must be defended by keeping the design in a small number of heads. Therefore: tools and methodologies that target *accidental* complexity (syntax, memory, type errors) can yield big productivity gains; tools and methodologies that promise an order-of-magnitude cut in *essential* complexity (the problem domain itself) are the silver bullets, and Brooks argued that no single development promised one within a decade.
- **[E:out:thomas-schelling]** antecedent, primary → Thomas Schelling: Schelling's 1960 focal-point theory is the hidden physics under Komoroske's coordination work. His Schelling-points essay borrows the term along with Schelling's own Grand Central example.
- **[E:out:martin-fowler]** parallel, secondary → Martin Fowler (has a page): Fowler builds the same kind of named-vocabulary instrument for software design that Komoroske builds for org design. Different domain, same cartographer move.
- **[N:martin-fowler:thesis]** Martin Fowler's thesis: Software is a perishable medium for shared understanding. It rots when nobody is tending it, and the cost of letting it rot is paid not in some distant future but in next week's velocity. The way to keep software cheap to change is to evolve practice in public: name the moves, share the vocabulary, run the build-test-deploy loop tight, place the boundaries where change wants to flow, model the domain in the language the team already uses with the customer, and write the practice down as you discover it. Quality IS speed. Naming the implicit is how the argument becomes negotiable. The catalog, the bliki entry, the pattern, the named refactoring, the smell: these are the cartographer's instruments.
- **[E:out:peter-senge]** parallel, secondary → Peter Senge: Same systems-thinking territory from the learning-organization angle. Komoroske rarely cites him; the absence is interesting.
- **[E:out:stuart-kauffman]** antecedent, secondary → Stuart Kauffman / Steven Johnson: "Adjacent possible" is Kauffman's term, and Johnson's *Where Good Ideas Come From* (2010) builds on it and cites him. Komoroske presents it as existing usage ("sometimes known as your adjacent possible") and names neither.
- **[E:out:nicole-forsgren]** extends, secondary → Nicole Forsgren (has a page): Forsgren's DORA research measures what the headwind frame predicts. Slow lead time for changes is the headwind tax, instrumented.
- **[N:nicole-forsgren:thesis]** Nicole Forsgren's thesis: Engineering performance is empirically tractable, and the instruments to prove it are real. The intuition that good software organizations differ structurally from bad ones, in kind rather than merely in degree, turns out to be testable, and the testing keeps confirming the claim. Throughput and stability do not trade off in well-run systems; they correlate. Elite performers cluster; the gap between elite and low is not normally distributed. The measurement substrate is operational: deployment frequency, lead time for changes, change failure rate, time to restore service. The decomposition is multi-dimensional: satisfaction, performance, activity, communication, efficiency become the SPACE; feedback loops, cognitive load, flow state become DevEx. Each layer is a sharper instrument for the same underlying argument: engineering work is a system, the system has lawful properties, the properties can be measured, and the measurement changes how the work gets organized. The cost of skipping the empirical work is that every measurement argument stays a measurement *argument* instead of a measurement program.
- **[E:out:ray-dalio]** parallel, secondary → Ray Dalio (has a page): The opposite answer to the same problem. Dalio centralizes the decision algorithm and publishes it; Komoroske gardens the conditions for good local decisions.
- **[N:ray-dalio:thesis]** Ray Dalio's thesis: Most consequential mistakes are made because the decision algorithm was tacit, contradictory, or unexamined. The fix is to write the algorithm down (as numbered principles), expose it to critique from anyone willing to engage seriously, weight people's input by their *demonstrated* track record on the question at hand, and treat painful evidence that the algorithm is wrong as the primary source of improvement. Most organizations can't do this because they cannot tolerate the radical transparency required to surface the disagreements honestly. Therefore most organizations make systematic mistakes they could have avoided.

## Inbound edges (other pages point here)

- **[E:in:ray-dalio]** Ray Dalio → Alex Komoroske, parallel: Both are cartographers of organizational complexity, but from opposite ends. Komoroske argues *don't centralize the algorithm, garden the conditions*; Dalio argues *centralize the algorithm, publish it, run the org against it*. Honest readers carry both and choose by context.
- **[E:in:nicole-forsgren]** Nicole Forsgren → Alex Komoroske, antecedent: Komoroske names coordination headwind as the upstream cause; Forsgren names the downstream measurement. The headwind frame predicts what DORA empirically detects: slow lead-time-for-changes is what the headwind tax looks like when you instrument it.
- **[E:in:martin-fowler]** Martin Fowler → Alex Komoroske, parallel: Same cartographer move, different domain. Fowler builds named-vocabulary instruments for software design, Komoroske builds them for organization design. Coordination headwind, Schelling-point organizations, gardener- vs-architect are the org-design equivalents of refactoring, bounded context, ubiquitous language.
- **[E:in:fred-brooks]** Fred Brooks → Alex Komoroske, parallel: Komoroske's coordination headwind covers ground similar to Brooks's narrow engineering-team claim, for all collaborative work. Komoroske's homepage says his argument started when he was studying Wikipedia's user community and was informed by web standards work. His deck, his Schelling-points essay and his notes do not mention Brooks, so the pairing is this site's reading. Read Brooks's 1975 book first, then the Coordination Headwind deck (online by 2021).

## Shared concepts (frames other pages also hold)

- **[S:coordination-headwind:fred-brooks]** Fred Brooks also holds Brooks's Law: Adding manpower to a late software project makes it later. The underlying physics (coordination cost grows superlinearly with team size) covers ground similar to what Komoroske later called coordination headwind; the pairing is this site's reading.
- **[C:coordination-headwind]** Concept page Coordination Headwind: The invisible drag on collaborative work: the cost of every agreement a decision depends on. Grows superlinearly with team size and absorbs effort before any of it reaches the work.

## Two hops out (names only, for reach)

- **[H:melvin-conway]** Melvin Conway (via martin-fowler, antecedent)
- **[H:david-parnas]** David Parnas (via fred-brooks, parallel)
- **[H:edsger-dijkstra]** Edsger Dijkstra (via fred-brooks, parallel)
- **[H:camille-fournier]** Camille Fournier (via nicole-forsgren, parallel)
- **[H:john-allspaw]** John Allspaw (via nicole-forsgren, parallel)
- **[H:rich-hickey]** Rich Hickey (via martin-fowler, parallel)
- **[H:kent-beck]** Kent Beck (via nicole-forsgren, parallel)
- **[H:ward-cunningham]** Ward Cunningham (via martin-fowler, antecedent)
- **[H:eric-evans]** Eric Evans (via martin-fowler, extends)
- **[H:christopher-alexander]** Christopher Alexander (via martin-fowler, antecedent)
- **[H:zhamak-dehghani]** Zhamak Dehghani (via martin-fowler, hosts)
- **[H:simon-willison]** Simon Willison (via martin-fowler, parallel)
- **[H:jez-humble]** Jez Humble (via nicole-forsgren, parallel)
- **[H:gene-kim]** Gene Kim (via nicole-forsgren, parallel)
- **[H:dan-north]** Daniel Terhorst-North (via nicole-forsgren, parallel)
- **[H:dave-farley]** Dave Farley (via nicole-forsgren, parallel)
- **[H:david-woods]** David Woods (via nicole-forsgren, parallel)
- **[H:will-larson]** Will Larson (via nicole-forsgren, extends)
- **[H:charity-majors]** Charity Majors (via nicole-forsgren, parallel)
- **[H:kelly-shortridge]** Kelly Shortridge (via nicole-forsgren, parallel)
- **[H:charlie-munger]** Charlie Munger (via ray-dalio, parallel)
- **[H:nassim-taleb]** Nassim Taleb (via ray-dalio, parallel)

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

- **[R:fred-brooks]** For Brooks, software is a communication problem before it is an engineering problem, and the cost of coordinating the people building a system grows faster than the team. Brooks's Law follows directly: adding people to a late project makes it later. No Silver Bullet sharpens the claim by separating essential complexity, which lives in the problem, from accidental complexity, which the tools add. Tooling can remove accidental complexity, sometimes dramatically, while no single development promises an order-of-magnitude gain within a decade. The prediction dates from 1986 and still stands, which is why the vocabulary carries weight in any honest conversation about engineering.
- **[R:martin-fowler]** In Fowler's account, software is a medium for shared understanding, and it decays whenever nobody tends it. The cost of that decay arrives quickly, in next week's velocity, and his design stamina hypothesis makes a parallel claim that internal quality pays back within weeks. His method is to name the moves (refactoring, code smell, strangler fig, bounded context), attribute each to its origin, and revise them in public on the bliki. Naming turns tacit design choices into distinctions a team can argue about. The method has limits of its own: his 2014 microservices article undersold the cost of distribution, and later follow-ups had to correct it.
- **[R:nicole-forsgren]** The part of Forsgren that travels furthest is a finding: in well-run delivery systems, throughput and stability rise together. That finding removes the most common argument for slowing change down, the belief that each additional deploy spends safety. DORA's stability measures, change failure rate and time to restore, make the safety question observable: how often a change degrades service, and how fast the team recovers when one does. Because DORA is itself the doctrine here, the four keys belong to the delivery system they were built to measure. Turning them into targets for teams invites the misuse the frame's own limits describe, where people manage to the number until it stops describing the system.
- **[R:ray-dalio]** Dalio argues that most consequential mistakes come from decision rules that were tacit, contradictory, or never examined. His remedy is the principles document: numbered, written-down rules that anyone may challenge and that get revised when they produce bad outcomes. Radical transparency and believability-weighted decisions support the document, the first by exposing rationales and the second by weighting each person's input by their track record on that kind of question. The personal version is pain plus reflection equals progress. Reporting on Bridgewater describes a daily experience far harsher than the document's ideal, which makes the form and its implementation worth judging separately.

## Current reading (input only when redrafting, not a source)

> Komoroske's central claim is that coordination has a cost most organizations never see: every decision depends on agreements, and the drag of those agreements grows faster than headcount. His answer is a change of leadership stance, from builder to gardener, in which the leader sets conditions that make good local choices the obvious ones. Heroics are the symptom that goes with the headwind, and a poor answer to it, because the churn they create raises the drag they were meant to beat. The frame earns its place by making costs an organization was paying invisibly show up where they can be counted.

> Security is where the gardening stance meets its hardest limit, because a garden assumes nothing in it is working against the gardener. A security organization can hold both stances by splitting them by audience. Toward its own engineers it gardens: the secure path becomes the default nobody has to defend choosing, and each new control is judged by how many agreements it adds. Toward adversaries it builds, with boundaries enforced by infrastructure that hold whether or not anyone converges on them. The split has a weak seam, because an adversary can pass as a good-faith insider, so the enforced boundaries have to hold against insiders as well.

