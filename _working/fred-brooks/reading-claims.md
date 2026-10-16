# Reading claims: Fred Brooks

Protocol v1. One line per sentence of `reading` and `extension`, each with the grounding-pack IDs it rests on.

## reading

- For Brooks, software is a communication problem before it is an engineering problem, and the cost of coordinating the people building a system grows faster than the team. [T:thesis]
- Brooks's Law follows directly: adding people to a late project makes it later. [F:coordination-headwind]
- No Silver Bullet sharpens the claim by separating essential complexity, which lives in the problem, from accidental complexity, which the tools add. [F:no-silver-bullet] [F:essential-vs-accidental-complexity]
- Tooling can remove accidental complexity, sometimes dramatically, while no single development promises an order-of-magnitude gain within a decade. [F:no-silver-bullet] [T:working-line] [L:2]
- The prediction dates from 1986 and still stands, which is why the vocabulary carries weight in any honest conversation about engineering. [T:working-line] [T:still-load-bearing]

## extension

- AI code generation is one of the largest attacks yet on accidental complexity, since it removes much of the labor of writing code. [F:essential-vs-accidental-complexity] [P:4]
- The line between essential and accidental has moved before, and AI may move it again. [L:2]
- What stays fixed is that someone has to understand what shipped and why. [F:essential-vs-accidental-complexity] [P:4]
- Security review depends on that understanding, because judging whether code is safe starts with explaining what it does, so code that outpaces comprehension also outpaces review. [P:4]
- Conceptual integrity, the property Brooks ranked above all others, is what erodes first. [F:conceptual-integrity] [P:4]
- The Brooks question for any AI security product follows: does it attack the essential problem of comprehension, or the accidental cost of producing and scanning code? [F:no-silver-bullet] [F:essential-vs-accidental-complexity]
