# Grounding pack: Sidney Dekker

Generated 2026-09-16 by scripts/grounding-pack.ts. Every claim in the reading must cite at least one ID below.

thinker_type: book-author · doctrine_mode: mode-c

## The thinker (spine, handles, limits)

- **[T:thesis]** Treat human error as a *consequence*, not a cause. The investigator's job is not to determine what someone failed to do, but to reconstruct how the situation made sense to them at the time, because if it made sense, it will make sense again, and the next operator in that position will make the same choice. *Just culture* names the institutional posture that makes this kind of investigation possible. *Drift into failure* names the slow-motion process by which good organizations end up in bad places without anyone making a single obviously wrong decision. *Safety differently* names the prescription: invest in human adaptive capacity, not procedural compliance.
- **[T:working-line]** Underneath every simple, obvious story about an "error," there is a deeper, second story: the one where you actually have to do the thinking. (Paraphrased from *The Field Guide to Understanding Human Error*.)
- **[F:new-view-of-human-error]** The new view of human error (extended, with david-woods, jens-rasmussen): Human error is a symptom of deeper system conditions, not a cause of failure. The diagnosis stops where most accident reports start.
- **[F:just-culture]** Just culture (extended, with james-reason): An institutional posture where individuals are accountable for *willful violations* but not for honest mistakes or system-induced failures. The cultural precondition for blameless investigation.
- **[F:drift-into-failure]** Drift into failure (original): The slow-motion process by which organizations end up in unsafe states without any single obviously-wrong decision. Many small reasonable choices in the direction of efficiency, until the envelope is breached.
- **[F:safety-differently]** Safety differently (original): An alternative to compliance-centric safety: invest in human adaptive capacity, build the conditions where workers can do their jobs well, and treat the front line as the source of safety rather than the source of risk.
- **[F:work-as-imagined-vs-work-as-done]** Work-as-imagined vs. work-as-done (extended, with erik-hollnagel, sidney-dekker, john-allspaw): The gap between how procedures, designs, and management imagine the work happens (imagined) and how it actually happens under real constraints (done). Most "human error" lives in this gap.
- **[F:adaptive-capacity]** Adaptive capacity (extended, with david-woods, sidney-dekker): The reserve human and organizational capacity that absorbs surprises beyond the designed-for envelope. Dekker's safety- differently prescription is mostly about investing in this.
- **[L:1]** The frame's silence on adversaries shows under security pressure (structural): Same gap as Woods's. Dekker writes about complex systems where the disturbances come from nature, accident, or organizational drift. Security work involves disturbances that are *optimized against the system* by humans who are also reading the organization's safety culture and using its blind spots. Dekker's frame still applies; the security overlay is not built in.
- **[L:2]** *Drift into failure* can become a totalizing explanation (local): Applied loosely, "drift into failure" can be invoked to explain every incident as the inevitable product of organizational pressure, which then forecloses the question of what specific decisions could have been made differently. The frame is best when used surgically, not as a default story.
- **[L:3]** Safety-differently's "trust the front line" assumes alignment (local): Dekker's prescription works when front-line workers and the organization share goals. In organizations with severe goal misalignment (bonus structures rewarding incident suppression, ops teams under headcount cuts, security orgs measured on counter-productive metrics), "investing in adaptive capacity" gets reinterpreted into something it isn't. The framework has no story for getting management to want what the framework wants.
- **[T:still-load-bearing]** Dekker is the most-translated safety-culture writer of the last twenty-five years for a reason. *The Field Guide to Understanding Human Error* is the manual that anyone running real incident investigations, across aviation, medicine, or software, keeps coming back to. Every "blameless postmortem" in the software industry is downstream of a chain that runs through Dekker. The vocabulary moved because the prose was clear and the argument was right; both still are.

## Outbound edges (this page points at)

- **[E:out:david-woods]** parallel, primary → David Woods (has a page): Co-builder of the new view of human error. Woods is the cognitive-systems-engineering side; Dekker is the safety-culture side. Read them together: Woods for the theory, Dekker for the application.
- **[N:david-woods:thesis]** David Woods's thesis: Complex systems are not stable artifacts; they are continuously adapting joint cognitive systems made up of humans, organizations, and machines. Their survival depends not on being robust to known threats (that property is locally useful but globally fragile), but on having reserves of adaptive capacity that humans supply in real time when surprises arrive. Every optimization push consumes that capacity; performance-pressured systems operate closer to their limits and absorb less surprise. Graceful extensibility (the ability to stretch performance under previously-unimagined conditions) is what you actually want, and it is exactly the property that efficiency-focused management most reliably destroys.
- **[E:out:john-allspaw]** extends, primary → John Allspaw (has a page): Dekker's PhD student at Lund and the most successful carrier of the just-culture / new-view tradition into software operations. The blameless-postmortem move is Dekker's just-culture argument translated for engineering practice.
- **[N:john-allspaw:thesis]** John Allspaw's thesis: An incident is not a defect to be eliminated; it is a sample drawn from your system's actual operating envelope, telling you things about how the work is done that no design document, runbook, or simulation can show you. The way to honor that signal is to set up the conditions where engineers will tell you honestly what happened, what they thought was happening, what they almost did, and what they would do differently. That requires removing blame as a default, recognizing the gap between *work-as-imagined* and *work-as-done*, and treating the human side of the system as the primary source of expertise about how the system actually behaves.
- **[E:out:james-reason]** antecedent, primary → James Reason: Reason's 1990 *Human Error* and 1997 *Managing the Risks of Organizational Accidents* are the academic predecessors Dekker built from. Swiss-cheese model, just culture (originally Reason's framing) all run through here.
- **[E:out:erik-hollnagel]** parallel, secondary → Erik Hollnagel: Co-founder of resilience engineering with Woods. *Safety-I vs Safety-II* is the closest theoretical parallel to Dekker's *Safety Differently*.
- **[E:out:jens-rasmussen]** antecedent, secondary → Jens Rasmussen: Danish safety scientist whose drift-toward-boundaries model underlies *Drift Into Failure*. The intellectual grandfather of the resilience-engineering tradition.

## Inbound edges (other pages point here)

- **[E:in:john-allspaw]** John Allspaw → Sidney Dekker, extends: Allspaw's PhD advisor at Lund. The "new view of human error" and *just culture* tradition that the blameless-postmortem move operationalizes for software. Same lineage; Dekker is the safety side, Allspaw the engineering side.
- **[E:in:david-woods]** David Woods → Sidney Dekker, parallel: Co-builder of the new-view-of-human-error frame. Dekker is the safety-culture side, Woods is the cognitive-systems side. Different emphases, same lineage; Rasmussen sits behind both.

## Shared concepts (frames other pages also hold)

- **[S:adaptive-capacity:john-allspaw]** John Allspaw also holds Adaptive capacity: A system's ability to absorb disturbances and continue functioning, not by being robust to known threats, but by having human and organizational reserves that can recognize and respond to novel ones. The resilience-engineering core concept.
- **[S:work-as-imagined-vs-work-as-done:john-allspaw]** John Allspaw also holds Work-as-imagined vs. work-as-done: The distinction between how leadership / documentation / design thinks the work happens (imagined) and how it actually happens under real conditions (done). The gap is where adaptive capacity lives, and where incidents originate.
- **[S:adaptive-capacity:david-woods]** David Woods also holds Adaptive capacity: A system's reserve ability to absorb surprises that exceed its designed-for operating envelope, supplied by humans, teams, and organizational arrangements that are mostly invisible until they are needed.
- **[S:new-view-of-human-error:david-woods]** David Woods also holds The new view of human error: "Human error" is not a cause; it is a *symptom* of deeper system conditions. The diagnosis stops where most postmortems start; the real work is upstream of the operator. Rooted in Rasmussen and carried by Woods and Dekker.
- **[C:adaptive-capacity]** Concept page Adaptive Capacity: The reserves a complex system has for absorbing surprises it was not designed for. Mostly invisible until consumed; supplied by humans, teams, and organizational arrangements that efficiency pressure systematically depletes.

## Two hops out (names only, for reach)

- **[H:richard-cook]** Richard Cook (via john-allspaw, extends)
- **[H:fred-brooks]** Fred Brooks (via john-allspaw, parallel)
- **[H:nora-jones]** Nora Jones (via john-allspaw, parallel)

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

- **[R:david-woods]** Security architecture work consistently operates at the edge of its envelope. Controls are tuned for known threats, response capacity sized for normal incident volume, the people who actually understand the system spread thin across too many programs. Woods's *Law of Stretched Systems* names this. The slack we cut as inefficiency is the adaptive capacity we will need when the threat model breaks. Every efficiency push makes this worse and the security org reads as "lean" right up until the moment a real surprise arrives. Designing security programs around graceful extensibility, not robustness to known attacks, is the move I keep coming back to.
- **[R:john-allspaw]** Security incident response fails the learning test for exactly the reasons Allspaw described: blame culture, the gap between work-as-imagined and work-as-done, the habit of reducing the analysis to a root cause that pins the failure on the most-junior person whose hands were on the keyboard. The Allspaw move (set up conditions where engineers will be honest, treat the human side as the expertise about how the system works) is exactly what security IR needs and almost never gets. Importing the resilience-engineering vocabulary into security is one of the highest-leverage cultural changes a security org can make.

## Prior section 6 draft (input only, not a source; Camila-drafted)

> The *just culture* distinction (accountable for willful violations, not for honest mistakes) is the move I keep importing into security conversations about engineer behavior. Security cultures default to punitive responses for engineer "errors" (clicked the phishing email, pushed the credential to GitHub, misconfigured the IAM policy) without doing the Dekker move of asking what the system made easy, hard, obvious, or invisible. The investigation should produce the same conclusion most aviation investigations produce: an honest mistake in conditions that made the mistake very likely. Punishing the human doesn't change the conditions; the system will produce the same mistake from the next engineer.

> Dekker built the safety-culture frame for industries where the primary disturbance is nature, accident, or organizational drift. I push it into the security space where some of the disturbance is adversarial intent. The framework still holds: engineer "failures" under security pressure are mostly system-induced, but the just-culture model needs an explicit adversarial axis. The attacker is also exploiting the work-as-imagined / work-as-done gap; the gap is therefore both a security defect and a safety defect. The two frames need to meet, and Dekker is most of the way.

