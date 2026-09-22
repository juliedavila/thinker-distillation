# Reading claims: Kent Beck

One line per sentence of `reading` and `extension`, each with the grounding-pack IDs it rests on.

## reading

- Beck's subject is the price of the next change, which Constantine's Equivalence states as cost(software) ~= cost(change). [T:thesis] [F:constantines-equivalence]
- Coupling is what makes that price high, so design is whatever brings it down. [F:constantines-equivalence]
- The work happens in tidyings, small changes to structure that leave behavior alone. [F:tidying]
- The two kinds are asymmetrical: a helper extracted can be inlined again, and a behavior change that reached customers cannot. [F:tidying]
- Small steps with a test behind each one follow from that asymmetry, and he calls the test-first technique a rediscovery whose limits he states himself. [F:test-driven-development] [L:1]
- His answer to whether to tidy first is an inequality rather than a rule, and it sometimes comes out no. [T:working-line] [F:tidying]
- Extreme Programming is the method he wrote up in 1999, out of the way of working a payroll team adopted in 1997. [F:extreme-programming]
- His 3X phases add the axis the others lack, since a practice that fits a product being explored is waste once it is being extracted. [F:three-x]

## extension

- Controls around an agent keep being revised, because prompt injection is mitigated rather than solved. [P:1]
- Nothing in the material behind this page is about security; what follows is the site's use of his pricing. [L:5]
- Each revision is a behavior change to a live control, and what it let through while it was wrong cannot be taken back. [F:tidying]
- Coupling makes revisions expensive: the decision about what an agent may reach sits in every integration. [F:constantines-equivalence]
- The structural work worth buying puts that decision in one place and wires the integrations to it, so the next revision is an edit. [F:constantines-equivalence] [F:tidying]
- His inequality is the brake, though its terms are cost alone and an attacker picks the moment. [T:working-line] [F:tidying] [L:5]
- The 3X phases say which products are still moving, and an exploring one holding real customer data has an extracting product's blast radius. [F:three-x] [L:5]
- That structural work needs an owner and a budget no feature funds, and it concentrates into one target what was spread across many. [F:tidying] [F:constantines-equivalence] [L:5]
