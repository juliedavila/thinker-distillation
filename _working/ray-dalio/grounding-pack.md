# Grounding pack: Ray Dalio

Generated 2026-09-16 by scripts/grounding-pack.ts. Every claim in the reading must cite at least one ID below.

thinker_type: principles-distiller · doctrine_mode: mode-b

## The thinker (spine, handles, limits)

- **[T:thesis]** Most consequential mistakes are made because the decision algorithm was tacit, contradictory, or unexamined. The fix is to write the algorithm down (as numbered principles), expose it to critique from anyone willing to engage seriously, weight people's input by their *demonstrated* track record on the question at hand, and treat painful evidence that the algorithm is wrong as the primary source of improvement. Most organizations can't do this because they cannot tolerate the radical transparency required to surface the disagreements honestly. Therefore most organizations make systematic mistakes they could have avoided.
- **[T:working-line]** Pain + reflection = progress. (*Principles*, 2017; the personal algorithm in three terms.)
- **[F:principles]** Principles (original): Numbered, written-down, publicly-defensible decision rules that a person or organization commits to, and that evolve under revision when they produce bad outcomes. The genre is the contribution.
- **[F:radical-transparency]** Radical transparency (original): The institutional posture of making all meetings, evaluations, and decision rationales available to all participants, with the argument that information asymmetry is the largest contributor to organizational pathology.
- **[F:believability-weighted-decision-making]** Believability-weighted decision-making (original): An aggregation rule for collective decisions: weight each participant's input by their demonstrated track record on this *kind* of question, not by their position in the org chart.
- **[F:idea-meritocracy]** Idea meritocracy (original): The cultural target: an organization where the best argument wins regardless of who is making it, sustained through radical transparency and believability weighting.
- **[F:pain-plus-reflection-equals-progress]** Pain + reflection = progress (original): The personal algorithm: painful experience is the primary learning signal, and the work is to reflect on it disciplinedly rather than to suppress or rationalize it. The personal version of post-incident learning.
- **[L:1]** The Bridgewater operationalization is contested (structural): The radical-transparency culture at Bridgewater produced significant employee distress, multiple lawsuits, and reporting (Copeland, *The Fund*, 2023) that paints the day-to-day experience as substantially different from the principles document's stated ideal. The form is right; the specific implementation has known failure modes. Importing "principles" without importing the failure modes is the move.
- **[L:2]** Believability-weighting assumes a measurable track record (structural): Dalio's aggregation rule works when there is a clean signal about whose judgment has been right on a *specific kind* of question. In security work, signals are noisier, feedback loops longer, and the most consequential calls (didn't happen because we caught it) often unrecognizable. The believability machinery underdetermines in domains with adversarial / counterfactual structure.
- **[L:3]** Principles documents become compliance theater under low autonomy (local): The principles-distiller move requires real organizational willingness to revise the document under pressure. In organizations where written principles function as audit-defense rather than operating doctrine, the form survives but the substance evaporates. The Dalio move requires the org be able to publicly admit a principle was wrong; most organizations cannot.
- **[T:still-load-bearing]** Even with the Bridgewater operationalization complications, the principles-distiller move is durable. The genre (writing your decision algorithm down as numbered, public, contestable principles and running your organization against the document) works at the personal scale (the *Principles* book's first chapters), at the team scale (engineering principles documents), and at the program scale (security risk frameworks). Carrying the form forward while leaving the specific Bridgewater transparency norms behind is the working move.

## Outbound edges (this page points at)

- **[E:out:martin-fowler]** parallel, primary → Martin Fowler (has a page): The cartographer move applied to a different domain. Fowler writes down the *vocabulary* of software design; Dalio writes down the *decision algorithm* of running an organization. Same instinct (make the implicit explicit, then make it revisable), different content.
- **[N:martin-fowler:thesis]** Martin Fowler's thesis: Software is a perishable medium for shared understanding. It rots when nobody is tending it, and the cost of letting it rot is paid not in some distant future but in next week's velocity. The way to keep software cheap to change is to evolve practice in public: name the moves, share the vocabulary, run the build-test-deploy loop tight, place the boundaries where change wants to flow, model the domain in the language the team already uses with the customer, and write the practice down as you discover it. Quality IS speed. Naming the implicit is how the argument becomes negotiable. The catalog, the bliki entry, the pattern, the named refactoring, the smell: these are the cartographer's instruments.
- **[E:out:alex-komoroske]** parallel, secondary → Alex Komoroske (has a page): Both are cartographers of organizational complexity, but from opposite ends. Komoroske argues *don't centralize the algorithm, garden the conditions*; Dalio argues *centralize the algorithm, publish it, run the org against it*. Honest readers carry both and choose by context.
- **[N:alex-komoroske:thesis]** Alex Komoroske's thesis: Complex systems work best when they are gardened, not architected. The leader's job is not to plan the optimal answer and propagate it downward; the leader's job is to make defensible answers focal enough that local actors converge on them without being told. Organizations that ignore this pay a tax that grows faster than they expect, sooner than they expect. This is coordination headwind. The standard responses (more meetings, more reorgs, more hiring) make it worse. The fix is to push decisions to where local information lives, accept the messiness, and trust that recovery time in a self-correcting system is faster than freeze-up time in a centralized one.
- **[E:out:charlie-munger]** parallel, secondary → Charlie Munger: Same genre at adjacent contents. Munger's *Poor Charlie's Almanack* is the principles-distiller move applied to Berkshire Hathaway-style investing and life rationality. Different temperament; same form.
- **[E:out:nassim-taleb]** critiques, secondary → Nassim Taleb: Taleb's critique of Dalio's macro framework (over-reliant on stable historical priors, under-modeling tail risk) is the most-cited counterposition. Whether or not you buy Taleb's specific objections, the principles-distiller method does not produce robustness to genuinely-novel regimes.

## Inbound edges (other pages point here)


## Shared concepts (frames other pages also hold)


## Two hops out (names only, for reach)

- **[H:kent-beck]** Kent Beck (via martin-fowler, extends)
- **[H:ward-cunningham]** Ward Cunningham (via martin-fowler, antecedent)
- **[H:eric-evans]** Eric Evans (via martin-fowler, extends)
- **[H:christopher-alexander]** Christopher Alexander (via martin-fowler, antecedent)
- **[H:melvin-conway]** Melvin Conway (via martin-fowler, antecedent)
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

- **[R:martin-fowler]** Fowler's cartographer move is the most useful framework I carry into security organization design. Most security programs fail at the same layer his work attacks: implicit choices treated as too obvious to need naming, which means too obvious to be debated. Threat models, control selections, severity calls, risk-acceptance decisions are all conversations starved of vocabulary. The Fowler move is to turn those implicit calls into named, attributed, debatable objects, and the move works at the security layer for the same reason it worked at the design layer. Once a thing has a name, an engineering team can pick it up, argue with it, refuse it, extend it. Without a name it is just somebody's opinion in a meeting nobody remembers.
- **[R:alex-komoroske]** Most security programs fail not because the threat model is wrong but because the coordination cost of acting on the threat model exceeds the available organizational energy. That is the headwind frame, applied; once you see it in security work, you cannot unsee it. Once you have the headwind frame, you stop trying to fix slow security work by adding more security people; you start trying to reduce the coordination surface that the security work has to cross. Structural intervention, not headcount intervention.

## Prior section 6 draft (input only, not a source; Camila-drafted)

> The principles-distiller move is the most useful import I carry into security-program design. Most security organizations operate on tacit principles: "we don't accept that risk class," "we always require two-person review for these changes," "we don't allow X unless Y", that are never written down, never examined, and therefore never improved. Dalio's move is to *write the algorithm down* and treat the document as both the operating procedure and the artifact under continuous revision. The risk register, the acceptable-use policy, the security-architecture principles document. These become live artifacts in the Dalio frame, not compliance theater. Whether or not Bridgewater's specific operationalization was good, the genre is right.

> Dalio built the principles-distiller move for a single-leader organization with an unusual tolerance for radical transparency. I push it into security organizations operating inside larger enterprises that cannot tolerate radical transparency at scale: the risk surface is too public, the regulatory environment too punitive. The fix is to keep the principles-distiller form (numbered, written, revisable) while replacing radical transparency with *scoped transparency*: full disclosure inside the security org and to leadership, edited disclosure to the broader company, minimal disclosure externally. The argument that "the form is the contribution" survives this adaptation; the specific Bridgewater transparency norms don't.

