# Reading claims: Charity Majors

One line per sentence of `reading` and `extension`, each with the grounding-pack IDs it rests on.

## reading

- Majors judges telemetry by one test: can an engineer ask a question of a live system that nobody thought to ask while designing it. [F:observability-as-unknown-unknowns] [T:working-line]
- Pre-aggregated metrics fail that test, because the choice of what to count was made before the question existed. [T:thesis] [F:high-cardinality]
- Her answer is one wide structured record per unit of work, with its high-cardinality fields kept whole, so views can be derived from it at read time instead of being fixed at write time. [F:wide-structured-events] [F:unified-storage-versus-pillars]
- The fields she insists on keeping are the ones that identify a single request: user id, build id, feature flag. [F:high-cardinality]
- The same instinct runs through her other positions, that staging cannot reproduce production and that management is a different job rather than a rung above engineering. [F:test-in-production] [F:engineer-manager-pendulum]
- The pattern came from Scuba at Facebook, and the company she co-founded sells it, which is the context every reader needs. [F:wide-structured-events] [L:1]

## extension

- Security teams build the same shape of instrument and hit the same wall: a dashboard answers the questions someone predicted during design. [F:observability-as-unknown-unknowns] [P:1]
- Prompt injection is where that bites, since the mitigation is layered and partial and the incident arrives in a form nobody wrote a detection for. [P:1]
- Her test transfers directly: after an agent does something unexpected, can anyone ask which tool call, which prompt, which user, without shipping new instrumentation first. [F:observability-as-unknown-unknowns] [F:high-cardinality]
- That argues for one wide record per agent action, carrying the identifiers an investigation needs rather than counts of blocked attempts. [F:wide-structured-events]
- Sampling to afford that record removes the rare event an investigation wants, which is the objection her critic raises about forensics. [L:2]
- And a record of what an agent did says nothing about whether it was permitted, so this buys investigation and not assurance. [L:4]
