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

- Access provisioning is a controller in STPA's terms, and each grant is one of its control actions. [F:stpa]
- Granting access can turn unsafe when the controller's process model of the requester drifts from the requester's actual standing, so that model, and the feedback that sets it, belongs in the spec beside the action. [P:6] [F:stpa]
- Her Mars Polar Lander example, a system accident in her terms, has that shape: the software took sensor noise for a landing. [F:stamp]
- A nightly employment feed or an approver since reassigned leaves every component within specification while the controller grants what it should refuse, and an attacker who can delay or forge the feedback chooses when the gap opens. [L:3] [T:thesis]
- The audit record needs the constraint, the feedback that said it held, and who could write that feedback. [P:6] [L:3]
- Hochstein doubts anyone can sketch the whole control structure in a context like his, so the record covers only the provisioning paths someone drew. [L:1] [E:out:lorin-hochstein]
