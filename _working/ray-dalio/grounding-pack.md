# Grounding pack: Ray Dalio

Generated 2026-10-17 by scripts/grounding-pack.ts. Every claim in the reading must cite at least one ID below.

thinker_type: principles-distiller · doctrine_mode: mode-b

## The thinker (spine, handles, limits)

- **[T:thesis]** Most consequential mistakes are made because the decision algorithm was tacit, contradictory, or unexamined. The fix is to write the algorithm down (as numbered principles), expose it to critique from anyone willing to engage seriously, weight people's input by their *demonstrated* track record on the question at hand, and treat painful evidence that the algorithm is wrong as the primary source of improvement. Most organizations can't do this because they cannot tolerate the radical transparency required to surface the disagreements honestly. Therefore most organizations make systematic mistakes they could have avoided.
- **[T:working-line]** Pain + reflection = progress. (*Principles*, 2017; the personal algorithm in three terms.)
- **[F:principles]** Principles (extended, with benjamin-franklin): Numbered, written-down, publicly-defensible decision rules that a person or organization commits to, and that evolve under revision when they produce bad outcomes. The genre predates him: Benjamin Franklin kept thirteen numbered virtues, each with a written precept, and revised them. What appears to be Dalio's own is running a whole firm against one long, living, published principles document.
- **[F:radical-transparency]** Radical transparency (extended, with chris-anderson-wired): The institutional posture of opening much more of an organization's problems, and how people are handling them, to its members than is typical; his example of the practice is taping all of Bridgewater's meetings. Dalio's case is that it forces problems to the surface and lets the whole organization work on them. He allows a few exceptions, such as private health matters and security issues, and says to keep them very rare. The phrase had appeared before his earliest dated use in 2010, in a 2001 *Foreign Affairs* argument, in a 2006 blog post by Chris Anderson and in *Wired* in 2007; the Bridgewater practice is his.
- **[F:believability-weighted-decision-making]** Believability-weighted decision-making (original): An aggregation rule for collective decisions: weight each participant's input by their demonstrated track record on this *kind* of question, not by their position in the org chart.
- **[F:idea-meritocracy]** Idea meritocracy (original): The cultural target: an organization where the best argument wins regardless of who is making it, sustained through radical transparency and believability weighting.
- **[F:pain-plus-reflection-equals-progress]** Pain + reflection = progress (original): The personal algorithm: painful experience is the primary learning signal, and the work is to reflect on it disciplinedly rather than to suppress or rationalize it. The personal version of post-incident learning.
- **[L:1]** How Bridgewater ran the principles is contested (structural): The radical-transparency culture at Bridgewater produced significant employee distress, multiple lawsuits, and reporting (Copeland, *The Fund*, 2023) that paints the day-to-day experience as substantially different from the principles document's stated ideal. The form is right; the specific implementation has known failure modes. Importing "principles" without importing the failure modes is the move.
- **[L:2]** Believability-weighting assumes a measurable track record (structural): Dalio's aggregation rule works when there is a clean signal about whose judgment has been right on a *specific kind* of question. In security work, signals are noisier, feedback loops longer, and the most consequential calls (didn't happen because we caught it) often unrecognizable. The believability machinery underdetermines in domains with adversarial / counterfactual structure.
- **[L:3]** Principles documents become compliance theater under low autonomy (local): The principles-distiller move requires real organizational willingness to revise the document under pressure. In organizations where written principles function as audit-defense rather than operating doctrine, the form survives but the substance evaporates. The move requires the org be able to publicly admit a principle was wrong; most organizations cannot.
- **[T:still-load-bearing]** Even with the problems in how Bridgewater ran it, the principles-distiller move is durable. The genre (writing your decision algorithm down as numbered, public, contestable principles and running your organization against the document) works at the personal scale (the *Principles* book's first chapters), at the team scale (engineering principles documents), and at the program scale (security risk frameworks). Carrying the form forward while leaving the specific Bridgewater transparency norms behind is the working move.

## Outbound edges (this page points at)

- **[E:out:martin-fowler]** parallel, primary → Martin Fowler (has a page): The cartographer move applied to a different domain. Fowler writes down the *vocabulary* of software design; Dalio writes down the *decision algorithm* of running an organization. Same instinct (make the implicit explicit, then make it revisable), different content.
- **[N:martin-fowler:thesis]** Martin Fowler's thesis: Software is a perishable medium for shared understanding. It rots when nobody is tending it, and the cost of letting it rot is paid not in some distant future but in next week's velocity. The way to keep software cheap to change is to evolve practice in public: name the moves, share the vocabulary, run the build-test-deploy loop tight, place the boundaries where change wants to flow, model the domain in the language the team already uses with the customer, and write the practice down as you discover it. Quality IS speed. Naming the implicit is how the argument becomes negotiable. The catalog, the bliki entry, the pattern, the named refactoring, the smell: these are the cartographer's instruments.
- **[E:out:alex-komoroske]** parallel, secondary → Alex Komoroske (has a page): Both are cartographers of organizational complexity, but from opposite ends. Komoroske argues *don't centralize the algorithm, garden the conditions*; Dalio argues *centralize the algorithm, publish it, run the org against it*. Honest readers carry both and choose by context.
- **[N:alex-komoroske:thesis]** Alex Komoroske's thesis: Complex systems work best when they are gardened, not built. The leader's job is not to plan the optimal answer and propagate it downward; the leader's job is to make defensible answers focal enough that local actors converge on them without being told. Large organizations pay a coordination tax that grows super-linearly and stays mostly invisible, even when everyone in them is competent and collaborative. This is coordination headwind. The standard responses (more meetings, more reorgs, more hiring) make it worse. The fix is to push decisions to where local information lives, accept the messiness, and aim for eventual convergence, because in a complex environment a top-down approach is brittle.
- **[E:out:charlie-munger]** parallel, secondary → Charlie Munger: Same genre at adjacent contents. Munger's *Poor Charlie's Almanack* is the principles-distiller move applied to Berkshire Hathaway-style investing and life rationality. Different temperament; same form.
- **[E:out:nassim-taleb]** parallel, secondary → Nassim Taleb: A counterposition by method. Taleb's warnings about reasoning from stable historical priors and under-modeling tail risk sit against the kind of macro modeling Dalio does, though no Taleb essay, book or paper on Dalio's framework has been found; the one exchange found, a 2019 interview, is a disagreement about capitalism. Either way, the principles-distiller method does not produce robustness to genuinely-novel regimes.

## Inbound edges (other pages point here)

- **[E:in:martin-fowler]** Martin Fowler → Ray Dalio, parallel: Dalio writes down an organization's decision rules the way Fowler writes down design vocabulary: explicit, named, and open to revision.
- **[E:in:alex-komoroske]** Alex Komoroske → Ray Dalio, parallel: The opposite answer to the same problem. Dalio centralizes the decision algorithm and publishes it; Komoroske gardens the conditions for good local decisions.

## Shared concepts (frames other pages also hold)


## Two hops out (names only, for reach)

- **[H:kent-beck]** Kent Beck (via martin-fowler, extends)
- **[H:ward-cunningham]** Ward Cunningham (via martin-fowler, antecedent)
- **[H:eric-evans]** Eric Evans (via martin-fowler, extends)
- **[H:christopher-alexander]** Christopher Alexander (via martin-fowler, antecedent)
- **[H:melvin-conway]** Melvin Conway (via martin-fowler, antecedent)
- **[H:rich-hickey]** Rich Hickey (via martin-fowler, parallel)
- **[H:fred-brooks]** Fred Brooks (via alex-komoroske, parallel)
- **[H:zhamak-dehghani]** Zhamak Dehghani (via martin-fowler, hosts)
- **[H:simon-willison]** Simon Willison (via martin-fowler, parallel)
- **[H:jez-humble]** Jez Humble (via martin-fowler, parallel)
- **[H:gene-kim]** Gene Kim (via martin-fowler, parallel)
- **[H:dan-north]** Daniel Terhorst-North (via martin-fowler, parallel)
- **[H:dave-farley]** Dave Farley (via martin-fowler, parallel)
- **[H:thomas-schelling]** Thomas Schelling (via alex-komoroske, antecedent)
- **[H:peter-senge]** Peter Senge (via alex-komoroske, parallel)
- **[H:stuart-kauffman]** Stuart Kauffman / Steven Johnson (via alex-komoroske, antecedent)
- **[H:nicole-forsgren]** Nicole Forsgren (via alex-komoroske, extends)

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

- **[R:martin-fowler]** In Fowler's account, software is a medium for shared understanding, and it decays whenever nobody tends it. The cost of that decay arrives quickly, in next week's velocity, and his design stamina hypothesis makes a parallel claim that internal quality pays back within weeks. His method is to write the moves down by name (refactoring, code smell, strangler fig, bounded context), attribute each to its origin, and revise them in public on the bliki. Naming turns tacit design choices into distinctions a team can argue about. His 2014 microservices article with James Lewis said it was too early for a full judgement, and his 2015 entries warned against teams too eager to adopt; the record supports reading those entries either as a correction of the article or as its stated caution worked out.
- **[R:alex-komoroske]** Komoroske's central claim is that coordination has a cost most organizations never see: every decision depends on agreements, and the drag of those agreements grows faster than headcount. His answer is a change of leadership stance, from builder to gardener, in which the leader sets conditions that make good local choices the obvious ones. Heroics are the symptom that goes with the headwind, and a poor answer to it, because the churn they create raises the drag they were meant to beat. The frame earns its place by making costs an organization was paying invisibly show up where they can be counted.

## Current reading (input only when redrafting, not a source)

> Dalio argues that most consequential mistakes come from decision rules that were tacit, contradictory, or never examined. His remedy is the principles document: numbered, written-down rules that anyone may challenge and that get revised when they produce bad outcomes. Radical transparency and believability-weighted decisions support the document, the first by exposing rationales and the second by weighting each person's input by their track record on that kind of question. The personal version is pain plus reflection equals progress. Reporting on Bridgewater describes a daily experience far harsher than the document's ideal, which makes the form and its implementation worth judging separately.

> Believability weighting struggles in security, because the best security calls leave no trace: a breach that never happened builds nobody's track record. The principles move still transfers when it attaches to decisions instead of people, although what transfers is the written rule, and the track-record weighting that made the frame distinctive stays behind. A security organization can write its standing positions as numbered principles, each with its reasoning and the evidence that would change it. Treating prompt injection as architecturally unsolvable, and therefore something to mitigate, is a principle of this kind: stated plainly, open to challenge, and revisable if the architecture changes. Taleb's tail-risk argument lands hard here, since a written principle says nothing about the attack nobody has written a principle for yet. The other risk is the compliance theater the page already names, where the document survives audits and stops steering decisions.

