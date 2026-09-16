# Reading claims: Martin Fowler

Protocol v1. One line per sentence of `reading` and `extension`, each with the grounding-pack IDs it rests on.

## reading

- In Fowler's account, software is a medium for shared understanding, and it decays whenever nobody tends it. [T:thesis]
- The cost of that decay arrives quickly, in next week's velocity, and his design stamina hypothesis makes a parallel claim that internal quality pays back within weeks. [T:thesis] [F:design-stamina-hypothesis]
- His method is to name the moves (refactoring, code smell, strangler fig, bounded context), attribute each to its origin, and revise them in public on the bliki. [F:refactoring] [F:code-smell] [F:strangler-fig-application] [F:bounded-context] [F:bliki]
- Naming turns tacit design choices into distinctions a team can argue about. [T:still-load-bearing]
- The method has limits of its own: his 2014 microservices article undersold the cost of distribution, and later follow-ups had to correct it. [L:1]

## extension

- Bounded context places a boundary where the language changes. [F:bounded-context]
- That line is often a sensible place to draw an authority boundary as well, although in multi-tenant systems contexts and authority domains can cut across each other. [F:bounded-context]
- The confused deputy problem is what happens when a request crosses an authority boundary carrying authority it gathered on the other side. [P:7]
- Agent and tool integrations make this concrete: an agent working inside one context can be steered by text that came from another, and it acts with its own permissions. [P:7] [P:5]
- A trust boundary placed at the same seam as a bounded context gives a security team a concrete place to enforce authority at the infrastructure layer. [P:3] [F:bounded-context]
- The placement secures nothing until enforcement is wired to it, since a named boundary with nothing behind it is only a label. [P:3] [L:2]
- Security vocabulary drifts faster and is more vendor-driven than design vocabulary, so the naming discipline has to be kept on purpose. [L:4]
