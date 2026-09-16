# Reading claims: Nicole Forsgren

Protocol v1, revision 2 (after Council round 1). One line per sentence of `reading` and `extension`, each with the grounding-pack IDs it rests on. `reading` stays close to sources; `extension` carries the Distillery's own argument and says so through its lens citations.

## reading

- The part of Forsgren that travels furthest is a finding: in well-run delivery systems, throughput and stability rise together. [F:throughput-stability-non-tradeoff] [T:working-line]
- That finding removes the most common argument for slowing change down, the belief that each additional deploy spends safety. [F:throughput-stability-non-tradeoff] [T:still-load-bearing]
- DORA's stability measures, change failure rate and time to restore, make the safety question observable: how often a change degrades service, and how fast the team recovers when one does. [F:change-failure-rate] [F:time-to-restore]
- Because DORA is itself the doctrine here, the four keys belong to the delivery system they were built to measure. [F:dora-four-keys] [T:thesis]
- Turning them into targets for teams invites the misuse the frame's own limits describe, where people manage to the number until it stops describing the system. [L:2] [L:3]

## extension

- For a security organization, the throughput finding moves the first question about a fast-moving team from how fast it ships to how well it recovers. [F:throughput-stability-non-tradeoff] [F:time-to-restore] [P:2]
- The four keys are silent on what each change does to an adversary's options, so a team can post elite scores while shipping exploitable code at the same pace. [F:dora-four-keys] [F:elite-vs-low-performers] [L:2]
- AI-assisted development is likely to widen that gap, because generated code can raise deployment frequency faster than the team's understanding of what it shipped, and the dashboard would read that as improvement. [P:4] [F:dora-four-keys]
- The security measures worth adding sit on the same pipeline: the share of deploys that pass enforced security gates, and time to remediate an exploitable finding. [P:3] [F:time-to-restore]
- Both inherit the Goodhart risk the four keys carry, so they work only as diagnostics of the delivery system. [L:2]
- Read that way, secure delivery becomes a measurable property of the system itself. [P:2]
