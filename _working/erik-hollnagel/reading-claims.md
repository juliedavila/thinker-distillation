# Reading claims: Erik Hollnagel

One line per sentence of `reading` and `extension`, each with the grounding-pack IDs it rests on.

## reading

- Hollnagel moves the object of safety management from the rare accident to the ordinary working day. [T:thesis] [F:safety-i-and-safety-ii]
- Safety-I counts adverse outcomes and aims to minimise them, which confines its evidence to rare events. [F:safety-i-and-safety-ii] [T:thesis]
- Safety-II asks how work usually succeeds under varying conditions, and explains the occasional failure against that background. [F:safety-i-and-safety-ii] [T:working-line] [T:thesis]
- ETTO supplies the mechanism: nobody can be as efficient and as thorough as possible at once, and trading one for the other is normal work. [F:efficiency-thoroughness-trade-off] [T:thesis]
- He catalogues the shortcuts that trade produces, among them "Looks fine" and "Has been checked by someone else". [F:efficiency-thoroughness-trade-off]
- In his account, those shortcuts are how the work gets done and also what occasionally lets a failure through. [T:thesis] [F:efficiency-thoroughness-trade-off]
- The contrast is disputed at its root: Leveson says the Safety-I he describes bears little resemblance to safety engineering as practised, and Cooper groups Safety-II with other approaches into a New View whose propositions he calls untested. [L:2] [L:1] [E:out:nancy-leveson] [E:out:m-d-cooper]

## extension

- Read together, his heuristics "Will be checked by someone else" and "Has been checked by someone else" describe a chain in which each stage relies on a check it assumes another made. [F:efficiency-thoroughness-trade-off]
- Agent pipelines build the same chain: a tool call runs because an upstream step was assumed to validate the request, and that step passed it on because a later one was assumed to check. [P:7] [F:efficiency-thoroughness-trade-off]
- The result is a confused deputy built from two efficient shortcuts, exercising authority on a judgement no stage made. [P:7]
- Safety-II's attention to work that went right says where to look: trace which stage checked what on requests that went through cleanly, and find the paths where both heuristics meet, which look like success until someone aims at them. [F:safety-i-and-safety-ii] [L:4]
- Any added check would face the same trade, so the repair belongs in the structure: the tool call carries the originating requester's authority and nothing more, which requires every stage to pass the requester's identity along. [F:efficiency-thoroughness-trade-off] [P:7] [P:3]
