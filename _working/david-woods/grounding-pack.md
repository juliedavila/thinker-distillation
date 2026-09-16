# Grounding pack: David Woods

Generated 2026-09-16 by scripts/grounding-pack.ts. Every claim in the reading must cite at least one ID below.

thinker_type: mixed · doctrine_mode: mode-c

## The thinker (spine, handles, limits)

- **[T:thesis]** Complex systems are not stable artifacts; they are continuously adapting joint cognitive systems made up of humans, organizations, and machines. Their survival depends not on being robust to known threats (that property is locally useful but globally fragile), but on having reserves of adaptive capacity that humans supply in real time when surprises arrive. Every optimization push consumes that capacity; performance-pressured systems operate closer to their limits and absorb less surprise. Graceful extensibility (the ability to stretch performance under previously-unimagined conditions) is what you actually want, and it is exactly the property that efficiency-focused management most reliably destroys.
- **[T:working-line]** Under pressure, systems are pushed to operate at the boundary of their performance envelope, where small perturbations produce large failures. (*The Law of Stretched Systems*.)
- **[F:adaptive-capacity]** Adaptive capacity (original): A system's reserve ability to absorb surprises that exceed its designed-for operating envelope, supplied by humans, teams, and organizational arrangements that are mostly invisible until they are needed.
- **[F:graceful-extensibility]** Graceful extensibility (original): The system property (distinct from robustness) of being able to *stretch* performance under conditions the system was not explicitly designed for. The actual goal of resilience engineering.
- **[F:law-of-stretched-systems]** The Law of Stretched Systems (original, with jens-rasmussen): Every system is continuously pushed toward operating at the limit of its capability, because slack reads as inefficiency to management. The closer the system runs to its envelope, the less it can absorb perturbation.
- **[F:joint-cognitive-system]** Joint cognitive system (co-authored, with erik-hollnagel): The framing that complex systems are not machines with humans attached; they are joint cognitive systems where humans and automation together perform the cognitive work. Failures live in the joint, not in either component.
- **[F:new-view-of-human-error]** The new view of human error (co-authored, with sidney-dekker, jens-rasmussen): "Human error" is not a cause; it is a *symptom* of deeper system conditions. The diagnosis stops where most postmortems start; the real work is upstream of the operator. Rooted in Rasmussen and carried by Woods and Dekker.
- **[L:1]** The vocabulary is academic-dense (structural): Reading Woods directly is harder than reading any of his industry carriers. The papers are written for the safety-science community first; the resilience-engineering taxonomy gets technical fast. This is partly why Allspaw and others have been so necessary: the substrate doesn't carry without translation.
- **[L:2]** The framework's silence on adversarial actors (structural): Woods's resilience-engineering work is rooted in industries where the disturbances are nature (weather, equipment failure, human slip) or accident (ill-formed procedures, attention lapse), not intent. The framework holds in security but the adversarial layer is bolted on, not built in. Same gap as Komoroske's gardener- vs-architect frame: silent on actors optimizing against you.
- **[L:3]** Empirical grounding is mostly outside software (local): The case studies are aviation, healthcare, nuclear, military. Software-system case studies are mostly downstream (Allspaw, Cook, Maguire). Practitioners new to the frame sometimes assume software systems work like cockpits or ORs; the analogies are useful but not perfect.
- **[T:still-load-bearing]** The four concepts of resilience (robustness, rebound, graceful extensibility, sustained adaptability) and the Law of Stretched Systems are foundational enough that you cannot do serious resilience-engineering work in software without internalizing them. Every honest argument about why high-performing engineering orgs end up brittle, why incidents cluster after efficiency pushes, why reorganizations destroy operational knowledge: Woods named the physics underneath them all.

## Outbound edges (this page points at)

- **[E:out:john-allspaw]** extends, primary → John Allspaw (has a page): The carrier into software ops. Allspaw is Woods's most successful industry translator. The resilience-engineering substrate became working ops vocabulary largely through Allspaw's Etsy work and the Adaptive Capacity Labs collaboration.
- **[N:john-allspaw:thesis]** John Allspaw's thesis: An incident is not a defect to be eliminated; it is a sample drawn from your system's actual operating envelope, telling you things about how the work is done that no design document, runbook, or simulation can show you. The way to honor that signal is to set up the conditions where engineers will tell you honestly what happened, what they thought was happening, what they almost did, and what they would do differently. That requires removing blame as a default, recognizing the gap between *work-as-imagined* and *work-as-done*, and treating the human side of the system as the primary source of expertise about how the system actually behaves.
- **[E:out:sidney-dekker]** parallel, primary → Sidney Dekker (has a page): Co-builder of the new-view-of-human-error frame. Dekker is the safety-culture side, Woods is the cognitive-systems side. Different emphases, same lineage; Rasmussen sits behind both.
- **[N:sidney-dekker:thesis]** Sidney Dekker's thesis: Treat human error as a *consequence*, not a cause. The investigator's job is not to determine what someone failed to do, but to reconstruct how the situation made sense to them at the time, because if it made sense, it will make sense again, and the next operator in that position will make the same choice. *Just culture* names the institutional posture that makes this kind of investigation possible. *Drift into failure* names the slow-motion process by which good organizations end up in bad places without anyone making a single obviously wrong decision. *Safety differently* names the prescription: invest in human adaptive capacity, not procedural compliance.
- **[E:out:erik-hollnagel]** parallel, primary → Erik Hollnagel: Co-author of *Joint Cognitive Systems* and resilience-engineering co-founder. Hollnagel's *Safety-I vs Safety-II* distinction operationalizes the same insight Woods's graceful-extensibility frame names.
- **[E:out:richard-cook]** extends, primary → Richard Cook: Long-time Woods collaborator. *How Complex Systems Fail* (Cook, 2000) is the most widely-read distillation of the joint Woods/Cook position on systemic failure.
- **[E:out:jens-rasmussen]** antecedent, secondary → Jens Rasmussen: The Danish safety-science theorist whose drift-toward-boundaries model underlies the Law of Stretched Systems. Rasmussen 1997 is the antecedent paper.

## Inbound edges (other pages point here)

- **[E:in:nicole-forsgren]** Nicole Forsgren → David Woods, parallel: Woods's graceful extensibility and adaptive capacity meet DORA's stability measurement at the resilience-as-measurable-system boundary. Woods explains what resilience is structurally; Forsgren measures one operational footprint of it.
- **[E:in:john-allspaw]** John Allspaw → David Woods, extends: Allspaw's theoretical predecessor and Adaptive Capacity Labs co-founder. Woods built the resilience-engineering frame in academic safety science; Allspaw carried it into software ops. Read Woods on graceful extensibility before Allspaw on dark debt and the lineage clicks.
- **[E:in:sidney-dekker]** Sidney Dekker → David Woods, parallel: Co-builder of the new view of human error. Woods is the cognitive-systems-engineering side; Dekker is the safety-culture side. Read them together: Woods for the theory, Dekker for the application.

## Shared concepts (frames other pages also hold)

- **[S:adaptive-capacity:john-allspaw]** John Allspaw also holds Adaptive capacity: A system's ability to absorb disturbances and continue functioning, not by being robust to known threats, but by having human and organizational reserves that can recognize and respond to novel ones. The resilience-engineering core concept.
- **[S:new-view-of-human-error:sidney-dekker]** Sidney Dekker also holds The new view of human error: Human error is a symptom of deeper system conditions, not a cause of failure. The diagnosis stops where most accident reports start.
- **[S:adaptive-capacity:sidney-dekker]** Sidney Dekker also holds Adaptive capacity: The reserve human and organizational capacity that absorbs surprises beyond the designed-for envelope. Dekker's safety- differently prescription is mostly about investing in this.
- **[C:adaptive-capacity]** Concept page Adaptive Capacity: The reserves a complex system has for absorbing surprises it was not designed for. Mostly invisible until consumed; supplied by humans, teams, and organizational arrangements that efficiency pressure systematically depletes.

## Two hops out (names only, for reach)

- **[H:fred-brooks]** Fred Brooks (via john-allspaw, parallel)
- **[H:nora-jones]** Nora Jones (via john-allspaw, parallel)
- **[H:james-reason]** James Reason (via sidney-dekker, antecedent)

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

- **[R:john-allspaw]** Security incident response fails the learning test for exactly the reasons Allspaw described: blame culture, the gap between work-as-imagined and work-as-done, the habit of reducing the analysis to a root cause that pins the failure on the most-junior person whose hands were on the keyboard. The Allspaw move (set up conditions where engineers will be honest, treat the human side as the expertise about how the system works) is exactly what security IR needs and almost never gets. Importing the resilience-engineering vocabulary into security is one of the highest-leverage cultural changes a security org can make.
- **[R:sidney-dekker]** The *just culture* distinction (accountable for willful violations, not for honest mistakes) is the move I keep importing into security conversations about engineer behavior. Security cultures default to punitive responses for engineer "errors" (clicked the phishing email, pushed the credential to GitHub, misconfigured the IAM policy) without doing the Dekker move of asking what the system made easy, hard, obvious, or invisible. The investigation should produce the same conclusion most aviation investigations produce: an honest mistake in conditions that made the mistake very likely. Punishing the human doesn't change the conditions; the system will produce the same mistake from the next engineer.

## Prior section 6 draft (input only, not a source; Camila-drafted)

> Security architecture work consistently operates at the edge of its envelope. Controls are tuned for known threats, response capacity sized for normal incident volume, the people who actually understand the system spread thin across too many programs. Woods's *Law of Stretched Systems* names this. The slack we cut as inefficiency is the adaptive capacity we will need when the threat model breaks. Every efficiency push makes this worse and the security org reads as "lean" right up until the moment a real surprise arrives. Designing security programs around graceful extensibility, not robustness to known attacks, is the move I keep coming back to.

> Woods built the theory for joint cognitive systems where humans and automation share the cognitive work. The security extension is that some of the joint cognitive work is *adversarial*: the "automation" includes attacker tooling that is also adapting. The joint cognitive system frame still holds; the adversarial axis means adaptive capacity has to be sized for an opponent who is also building adaptive capacity. The resilience-engineering instinct gets a security layer the original framework didn't model, but doesn't break under it.

