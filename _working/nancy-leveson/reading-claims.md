# Reading claims: Nancy Leveson

One line per sentence of `reading` and `extension`, each with the grounding-pack IDs it rests on.

## reading

- Leveson asks what a system failed to enforce, and sets STAMP against what the STPA Handbook calls "chain-of-failure-events" models. [F:stamp] [E:out:james-reason]
- In STAMP, which she says is built on Rasmussen and Svedung's framework, the basic unit is a constraint, and an accident comes from inadequate control or enforcement of safety-related constraints, even when every component worked as specified. [F:stamp] [T:thesis] [E:out:jens-rasmussen]
- By her 2004 account most software-related accidents had been of this kind. [T:still-load-bearing]
- In her view, safety belongs to the interacting system, and reliability to one component judged against its specification. [T:thesis]
- STPA can apply the model from early concept work: draw the control structure, then search for control actions that are unsafe in a particular context. [F:stpa]
- CAST applies it after a loss, asking why the preventive structures did not work, without trying to assign blame. [F:cast]
- William Young and Leveson extend STPA to security, treating a loss alike whatever the actor intended and deferring the adversary on purpose. [F:stpa-sec] [L:3]

## extension

- In STPA's terms, access provisioning is a controller and each grant a control action. [F:stpa]
- Her handbook names four ways a control action can be unsafe: not provided; provided when it causes a hazard; provided too early, too late or out of order; stopped too soon or applied too long. [F:stpa]
- An authorization review checks only the second. [F:stpa]
- The other three can occur with every component in specification: a revocation never sent, a grant issued before its check returns, emergency access that outlives the emergency. [F:stpa]
- On this site's reading, her Mars Polar Lander case is a timing failure: the software shut down the descent engines on a false landing signal. [F:stamp]
- Writing all four into the access spec makes each checkable, and an attacker who can delay or forge the feedback can steer the controller into any of them. [P:6] [F:stpa] [L:3]
- Hochstein doubts anyone can sketch the whole control structure in a context like his, so the analysis covers only the paths someone drew. [L:1] [E:out:lorin-hochstein]
