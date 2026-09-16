# Reading claims: Camille Fournier

Protocol v1. One line per sentence of `reading` and `extension`, each with the grounding-pack IDs it rests on.

## reading

- Fournier treats engineering leadership as a series of distinct jobs, and *The Manager's Path* maps them one role at a time, from mentoring to running an organization. [F:management-career-path] [T:thesis]
- Its central advice is that each step changes the work itself, so people struggle when they keep doing the job they were promoted out of. [T:thesis]
- *Platform Engineering*, written with Ian Nowland, turns the same attention to internal systems. [T:thesis] [F:over-general-swamp]
- Its core diagnosis is the over-general swamp: every team picks its own building blocks and writes its own glue, so applications get easier to build and harder to maintain. [F:over-general-swamp] [F:glue]
- The book's answer is a platform curated like a product that teams choose to use, because standards imposed by authority do not hold. [F:platform-as-product] [T:working-line]

## extension

- Security organizations often standardize by authority: a policy names the approved tool, and every team is told to comply. [T:working-line]
- Carried into security, the book's mechanism predicts the result: each team writes its own glue to meet the policy, and the security team inherits the swamp. [F:glue] [F:over-general-swamp]
- Its alternative comes down to who pays: when the security platform team absorbs the cost of a migration, such as moving every service to a new secrets manager, adoption stops depending on each team's spare capacity. [F:centralizing-migration-costs]
- Shadow security tooling becomes a signal worth reviewing: a team that builds its own scanner shows where the supported path fell short, and an ungoverned tool carries its own risk. [F:shadow-platforms]
- A curated security platform earns adoption when it makes the secure path cheaper than the alternative, the same test the book applies to any platform. [F:platform-as-product] [P:2]
- Two limits apply: it takes a funded platform team that many organizations lack, and the vocabulary is still untested in security work. [L:1] [L:4]
