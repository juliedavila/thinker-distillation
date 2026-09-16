# Grounding pack: John Allspaw

Generated 2026-09-16 by scripts/grounding-pack.ts. Every claim in the reading must cite at least one ID below.

thinker_type: mixed · doctrine_mode: mode-c

## The thinker (spine, handles, limits)

- **[T:thesis]** An incident is not a defect to be eliminated; it is a sample drawn from your system's actual operating envelope, telling you things about how the work is done that no design document, runbook, or simulation can show you. The way to honor that signal is to set up the conditions where engineers will tell you honestly what happened, what they thought was happening, what they almost did, and what they would do differently. That requires removing blame as a default, recognizing the gap between *work-as-imagined* and *work-as-done*, and treating the human side of the system as the primary source of expertise about how the system actually behaves.
- **[T:working-line]** Blame is the enemy of safety. (The Etsy postmortem doctrine, 2012.)
- **[F:blameless-postmortem]** Blameless postmortem (popularized, with sidney-dekker, james-reason): An incident review whose stated goal is learning, not accountability, conducted under conditions where engineers can be honest about what they thought, did, and decided without career risk.
- **[F:above-the-line-below-the-line]** Above the line / below the line (co-authored, with richard-cook): A distinction between the visible artifacts of a system (code, configs, dashboards: *below the line*) and the cognitive work that goes into operating it (mental models, attention, sensemaking, team coordination: *above the line*). Most postmortems only document below; the learning is mostly above.
- **[F:dark-debt]** Dark debt (co-authored, with richard-cook, laura-maguire): Latent failure modes that exist in complex systems' interactions, unknown until an incident reveals them, and that are not discoverable by inspection of any individual component. Different from tech debt; closer to "unknown unknowns" as a structural class.
- **[F:adaptive-capacity]** Adaptive capacity (extended, with david-woods, john-allspaw): A system's ability to absorb disturbances and continue functioning, not by being robust to known threats, but by having human and organizational reserves that can recognize and respond to novel ones. The resilience-engineering core concept.
- **[F:work-as-imagined-vs-work-as-done]** Work-as-imagined vs. work-as-done (extended, with erik-hollnagel, john-allspaw): The distinction between how leadership / documentation / design thinks the work happens (imagined) and how it actually happens under real conditions (done). The gap is where adaptive capacity lives, and where incidents originate.
- **[L:1]** The "blameless" label gets misapplied (structural): Allspaw's blameless framing is about creating the conditions for honest learning, not about removing accountability. The industry has partially adopted the label without the discipline. "Blameless" becomes a euphemism for "no consequences," which produces a different failure mode: incidents recur because no one feels ownership. The argument is harder than the label.
- **[L:2]** The model assumes a learning-receptive organization (structural): The Allspaw move works when leadership wants to learn from incidents. In organizations where incidents are treated as reputation events (public companies under regulatory pressure, vendors fighting churn, security orgs measured on incident count), the conditions for blameless analysis cannot be created from the bottom. The framework has no story for getting executives to tolerate the truth the framework would surface.
- **[L:3]** Adaptive-capacity vocabulary stays inside the resilience tradition (local): Outside the small community of practitioners who have done the Hollnagel / Woods / Cook / Dekker reading, the vocabulary doesn't translate cleanly. Most engineering orgs that use "blameless postmortem" don't recognize the full resilience-engineering frame underneath; the vocabulary spreads faster than the substrate. Worth naming the gap when carrying the work.
- **[T:still-load-bearing]** The Etsy blameless-postmortem essay is the most influential twelve-page essay in operations engineering of the last fifteen years, measured by how many engineering orgs reorganized their incident-response defaults around it. The Adaptive Capacity Labs work is the deeper version that the next decade of incident-response practitioners will keep returning to. Carrying Allspaw forward is how the resilience-engineering tradition stays in working contact with the software industry.

## Outbound edges (this page points at)

- **[E:out:david-woods]** extends, primary → David Woods (has a page): Allspaw's theoretical predecessor and Adaptive Capacity Labs co-founder. Woods built the resilience-engineering frame in academic safety science; Allspaw carried it into software ops. Read Woods on graceful extensibility before Allspaw on dark debt and the lineage clicks.
- **[N:david-woods:thesis]** David Woods's thesis: Complex systems are not stable artifacts; they are continuously adapting joint cognitive systems made up of humans, organizations, and machines. Their survival depends not on being robust to known threats (that property is locally useful but globally fragile), but on having reserves of adaptive capacity that humans supply in real time when surprises arrive. Every optimization push consumes that capacity; performance-pressured systems operate closer to their limits and absorb less surprise. Graceful extensibility (the ability to stretch performance under previously-unimagined conditions) is what you actually want, and it is exactly the property that efficiency-focused management most reliably destroys.
- **[E:out:sidney-dekker]** extends, primary → Sidney Dekker (has a page): Allspaw's PhD advisor at Lund. The "new view of human error" and *just culture* tradition that the blameless-postmortem move operationalizes for software. Same lineage; Dekker is the safety side, Allspaw the engineering side.
- **[N:sidney-dekker:thesis]** Sidney Dekker's thesis: Treat human error as a *consequence*, not a cause. The investigator's job is not to determine what someone failed to do, but to reconstruct how the situation made sense to them at the time, because if it made sense, it will make sense again, and the next operator in that position will make the same choice. *Just culture* names the institutional posture that makes this kind of investigation possible. *Drift into failure* names the slow-motion process by which good organizations end up in bad places without anyone making a single obviously wrong decision. *Safety differently* names the prescription: invest in human adaptive capacity, not procedural compliance.
- **[E:out:fred-brooks]** parallel, secondary → Fred Brooks (has a page): The vocabulary move at a different scale. Brooks named the large-scale physics of software engineering; Allspaw names the incident-as-sample physics of running it in production. Same cartographer instinct, different layer of the stack.
- **[N:fred-brooks:thesis]** Fred Brooks's thesis: Software is fundamentally a communication problem dressed up as an engineering problem. The cost of building large systems is mostly the cost of coordinating the people building them; that cost grows superlinearly with team size and is bounded below by communication topology, not by individual programmer productivity. Therefore: adding people to a late project makes it later (Brooks's Law). Therefore: conceptual integrity is the single most important property of a system and must be defended by keeping the design in a small number of heads. Therefore: tools and methodologies that target *accidental* complexity (syntax, memory, type errors) can yield big productivity gains; tools and methodologies that promise to reduce *essential* complexity (the problem domain itself) are silver bullets and they do not exist.
- **[E:out:nora-jones]** parallel, secondary → Nora Jones: Co-host of *Learning From Incidents*; co-author of the *Howie* method. The next-generation carry of the same tradition into industry incident-analysis practice.
- **[E:out:richard-cook]** extends, primary → Richard Cook: Adaptive Capacity Labs co-founder and *How Complex Systems Fail* author. The medical-error-and-complex-systems lineage that Allspaw's software-ops work is built from.

## Inbound edges (other pages point here)

- **[E:in:nicole-forsgren]** Nicole Forsgren → John Allspaw, parallel: Allspaw's operability work shares the time-to-restore variable with DORA's stability axis. Resilience engineering and DORA measurement converge on the same system property, how fast the team recovers, from different methodological angles.
- **[E:in:david-woods]** David Woods → John Allspaw, extends: The carrier into software ops. Allspaw is Woods's most successful industry translator. The resilience-engineering substrate became working ops vocabulary largely through Allspaw's Etsy work and the Adaptive Capacity Labs collaboration.
- **[E:in:sidney-dekker]** Sidney Dekker → John Allspaw, extends: Dekker's PhD student at Lund and the most successful carrier of the just-culture / new-view tradition into software operations. The blameless-postmortem move is Dekker's just-culture argument translated for engineering practice.

## Shared concepts (frames other pages also hold)

- **[S:adaptive-capacity:david-woods]** David Woods also holds Adaptive capacity: A system's reserve ability to absorb surprises that exceed its designed-for operating envelope, supplied by humans, teams, and organizational arrangements that are mostly invisible until they are needed.
- **[S:work-as-imagined-vs-work-as-done:sidney-dekker]** Sidney Dekker also holds Work-as-imagined vs. work-as-done: The gap between how procedures, designs, and management imagine the work happens (imagined) and how it actually happens under real constraints (done). Most "human error" lives in this gap.
- **[S:adaptive-capacity:sidney-dekker]** Sidney Dekker also holds Adaptive capacity: The reserve human and organizational capacity that absorbs surprises beyond the designed-for envelope. Dekker's safety- differently prescription is mostly about investing in this.
- **[C:adaptive-capacity]** Concept page Adaptive Capacity: The reserves a complex system has for absorbing surprises it was not designed for. Mostly invisible until consumed; supplied by humans, teams, and organizational arrangements that efficiency pressure systematically depletes.

## Two hops out (names only, for reach)

- **[H:erik-hollnagel]** Erik Hollnagel (via sidney-dekker, parallel)
- **[H:jens-rasmussen]** Jens Rasmussen (via sidney-dekker, antecedent)
- **[H:james-reason]** James Reason (via sidney-dekker, antecedent)
- **[H:alex-komoroske]** Alex Komoroske (via fred-brooks, extends)
- **[H:martin-fowler]** Martin Fowler (via fred-brooks, parallel)
- **[H:melvin-conway]** Melvin Conway (via fred-brooks, parallel)
- **[H:david-parnas]** David Parnas (via fred-brooks, parallel)
- **[H:edsger-dijkstra]** Edsger Dijkstra (via fred-brooks, parallel)

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
- **[R:sidney-dekker]** The *just culture* distinction (accountable for willful violations, not for honest mistakes) is the move I keep importing into security conversations about engineer behavior. Security cultures default to punitive responses for engineer "errors" (clicked the phishing email, pushed the credential to GitHub, misconfigured the IAM policy) without doing the Dekker move of asking what the system made easy, hard, obvious, or invisible. The investigation should produce the same conclusion most aviation investigations produce: an honest mistake in conditions that made the mistake very likely. Punishing the human doesn't change the conditions; the system will produce the same mistake from the next engineer.
- **[R:fred-brooks]** Vendors sell silver bullets constantly. Every quarter brings a new tool that will "transform" security posture, "eliminate" risk classes, "solve" the AI-supply-chain problem. The Brooks question (is this attacking essential complexity or accidental?) separates the real from the rhetorical fast. If accidental, fine: that is where order-of-magnitude wins are real. If essential (the underlying problem of threat modeling, blast-radius reasoning, identity-and-access decisions, adversarial dynamics), no tool will deliver an order of magnitude. Same essay, applied forty years later, still works.

## Prior section 6 draft (input only, not a source; Camila-drafted)

> Security incident response fails the learning test for exactly the reasons Allspaw described: blame culture, the gap between work-as-imagined and work-as-done, the habit of reducing the analysis to a root cause that pins the failure on the most-junior person whose hands were on the keyboard. The Allspaw move (set up conditions where engineers will be honest, treat the human side as the expertise about how the system works) is exactly what security IR needs and almost never gets. Importing the resilience-engineering vocabulary into security is one of the highest-leverage cultural changes a security org can make.

> Allspaw built the model for software ops. Security adds an adversarial layer Allspaw did not model: an opponent actively optimizing against the detection-and-response loop, alongside everything else the ops model already accounts for. The blameless framing still works, *above-the-line / below-the-line* still works, the work-as-imagined / work-as-done gap is still the source of failure. But adaptive capacity has to be sized for an adversary who is also adaptive. The resilience-engineering frame needs an explicit adversarial-modeling axis added when ported to security work; otherwise you end up with a calm, blameless, thoroughly documented system getting reliably owned.

