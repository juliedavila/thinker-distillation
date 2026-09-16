# Reading claims: Camille Fournier

One line per sentence of `reading` and `extension`, each with the grounding-pack IDs it rests on.

## reading

- Fournier treats engineering leadership as a series of distinct jobs, and *The Manager's Path* maps them one role at a time, from mentoring to running an organization. [F:management-career-path] [T:thesis]
- Its central advice is that each step changes the work itself, so people struggle when they keep doing the job they were promoted out of. [T:thesis]
- *Platform Engineering*, written with Ian Nowland, turns the same attention to internal systems. [T:thesis] [F:over-general-swamp]
- Its core diagnosis is the over-general swamp: every team picks its own building blocks and writes its own glue, so applications get easier to build and harder to maintain. [F:over-general-swamp] [F:glue]
- The book's answer is a platform curated like a product that teams choose to use, because standards imposed by authority do not hold. [F:platform-as-product] [T:working-line]

## extension

- Security organizations often standardize by authority: a policy names the approved tool, and every team is told to comply. [T:working-line]
- The platform book's mechanism holds in security too: each team writes its own glue to meet the policy, and the security team inherits the swamp. [F:glue] [F:over-general-swamp]
- The remedies assume a funded platform team many organizations lack, and the vocabulary is untested in security work. [L:1] [L:4]
- Where that team exists, the question is who pays: when it absorbs the cost of a migration, such as moving every service to a new secrets manager, adoption depends less on each team's spare capacity. [F:centralizing-migration-costs]
- An application team that builds its own scanner shows where the supported path fell short, and the book advises staying aware of such shadow platforms, which in security means knowing what each one can reach. [F:shadow-platforms]
- A curated security platform earns adoption when it makes the secure path cheaper than the alternative, the same test the book applies to any platform. [F:platform-as-product] [P:2]
