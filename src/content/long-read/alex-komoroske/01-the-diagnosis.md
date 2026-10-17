---
thinker_slug: alex-komoroske
chapter_number: 1
title: 'Part 1: The Diagnosis'
summary: >
  The slime mold, coordination headwind, the Schelling point underneath,
  and heroics as a symptom. The four pieces of the diagnostic stance,
  enough to ask the right question about why your organization moves
  slower the bigger it gets.
last_updated: 2026-10-15
---

## The slime mold

There is a single-celled organism, no brain, no nervous system, no leader, no map, that solves a problem human engineers spent decades on.

You take *Physarum polycephalum*, a yellow slime mold that looks like nothing so much as melted cheese, and you drop it on an agar plate. You place oat flakes around the plate in a pattern that mirrors the cities of greater Tokyo. Within twenty-six hours, the slime mold has connected those flakes with a network of nutrient channels. The network is, within a small margin of error, identical to the Tokyo rail system that thousands of human engineers and planners spent decades designing.

No one is in charge. Every part of the organism is making local decisions. There is no roadmap. There is no project manager. There is no kickoff meeting. The whole thing works.

This is the image at the center of Alex Komoroske's slide deck *Coordination Headwind: How Organizations Are Like Slime Molds*, whose Tokyo slide shows the experiment.

The title carries the claim, that organizations are like slime molds. "Many organizations today are basically a slime mold," the deck says, and it sets the slime mold against "the stereotypical example of top-down," a military. Its list for the bottom-up side reads "Unpredictable, Uncontrollable, Individual autonomy, Fluid, Messy, Resilient, Explore."

That is where the trouble starts. Komoroske's homepage describes the deck as showing "why even when everyone is competent and collaborative, you can still get hurricane-force headwinds." In the deck's words, "The force is the coordination headwind. This force emerges on its own," and it "increases super-linearly as" uncertainty grows, as project teams get larger and more spread out, and with "a more bottom up culture."

## What coordination headwind is

Coordination headwind is the cost of getting people to agree, in advance and in detail, about what they are going to do. The cost is invisible per interaction (a fifteen-minute meeting, a Slack thread, a doc review), and that invisibility is the trap. The cost compounds, because every new participant multiplies the agreements that have to hold rather than adding to them. Forty people do not have forty times the coordination cost of one person. They have something closer to forty squared.

An overlapping observation is older than Komoroske. Fred Brooks made it in 1975 in *[The Mythical Man-Month](https://en.wikipedia.org/wiki/The_Mythical_Man-Month)*. Adding people to a late software project makes it later, Brooks said, because the new people need ramp-up time and because the number of communication paths between people grows quadratically with team size. [Brooks's Law](https://en.wikipedia.org/wiki/Brooks%27s_law) was a narrow claim about engineering teams under deadline. Komoroske's deck does not mention Brooks, and reading the headwind as a wider version of Brooks's Law is this guide's comparison.

What Komoroske recognized is that headcount is only one input. There are others. Goal ambiguity. Execution uncertainty. Cascading miscommunication. The half-life of context. The number of decisions waiting on someone two layers above. The way every clarification turns into a meeting, every meeting turns into a document, every document turns into a debate. Each of these things has its own exponent. They multiply.

At small scale, none of this matters. A team of four people sitting at the same table can run on social presence alone. They overhear each other's calls. They notice each other's confusion. They self-correct without ever opening a project management tool. The work moves.

At large scale, none of that is true. Information has to be encoded, transmitted, decoded, and reconciled. Half of it gets lost. The other half arrives stale. By the time the decision reaches the person who can act on it, the situation that produced the decision has changed, and the loop starts again.

The deck calls the cost "mostly invisible": people "often don't even realize how significant this expense is," so everyone sees "only the tip of it," which "significantly underestimates the cost." The headwind does not grow linearly. It grows the way drag grows on a moving object, faster than its speed.

At small scale, when work slows down, the answer is usually that someone is failing at execution. The limiting factor is individual competence, and the right move is to coach, replace, or fire. At large scale, individual competence has stopped being the limiting factor. The limiting factor has become the coordination surface itself. The right move is to reduce that surface, not to find better people.

Most large organizations get this exactly backwards. They look at slow output, conclude that the people are the problem, and try to solve the problem with hiring, reorganization, and replacement. This usually makes the problem worse. More people increase the coordination surface. Reorganization increases it during the reorg and often after. Replacement burns the institutional knowledge that was the only thing keeping the coordination tax bearable.

Komoroske's prescription is to stop fighting the slime mold: "Instead of trying to fight it, maybe lean into what they're good at." Push decisions to where the local information lives. Reduce the number of approvals required to move. Make the coordination loops short. Accept that the slime mold's behavior is messy, and, in the deck's words, "aim for eventual convergence."

He is not naïve about this. "Slime molds have many challenges," the deck says, "but they also have some amazing abilities." It still judges that "A poorly-executed top-down approach is far, far worse than a messy bottom-up approach."

## The Schelling point underneath

Coordination headwind has a hidden physics. Komoroske writes about it in a [separate essay on Schelling points in organizations](https://medium.com/@komorama/on-schelling-points-in-organizations-e90647cdd81b), and the two arguments belong together.

The hidden physics is this. When multiple people have to choose, independently, which of several options to pursue, the probability of them choosing the same option drops fast. If there are five options and three people, the chance that all three pick the same option is one in twenty-five. If there are ten options and five people, the chance is one in ten thousand.

Coordination, in other words, is not about picking the best option. Coordination is about picking the same option.

This is what [Thomas Schelling](https://en.wikipedia.org/wiki/Thomas_Schelling) named in 1960 in *[The Strategy of Conflict](https://en.wikipedia.org/wiki/The_Strategy_of_Conflict)*, and Komoroske's essay takes the term along with Schelling's own example, a meeting at "Noon beneath the clock in Grand Central Terminal." The Schelling point is the option that is so obvious, so focal, that everyone independently lands on it without needing to communicate. When you are designing for coordination, you are not designing for optimality. You are designing for focal-ness.

This explains a lot of organizational behavior that otherwise looks irrational. The team that picks the worse vendor because everyone has already heard of them. The platform that wins not because it is best but because it is the one nobody has to defend choosing. The strategy doc that gets adopted not because it is right but because it is the one in front of everyone at the moment of decision.

Komoroske's working line is that finding the Schelling point is more valuable than finding the optimal point, because the optimal point that nobody else picks is worth nothing. You cannot coordinate around it.

The practical implication: when you are leading a complex organization, your job is not always to figure out the right answer. Sometimes your job is to make a defensible answer obvious enough that everyone picks it without you having to chase them.

## Heroics as a symptom

There is one more piece of the diagnosis, and it is the one most leaders resist.

The piece is this. In the deck, heroics are a symptom of the headwind and a poor response to it: "All of these heroics and motion create churn and more uncertainty," and "Heroics also tend to make the problem way worse."

Komoroske is direct about this. In "[A Dangerous Addiction](https://medium.com/@komorama/a-dangerous-addiction-c71e76105da6)" (2022) he writes, of his own career, that "Heroic tactical work is the lowest leverage work I could have done." When everyone in a large organization is heroic, he argues, the result is "a tumultuous sea of thrash and churn," and "In the limit it leads to situations where everyone is working harder than ever before but 90% of the overall effort is going into waste heat." Looking back, he writes that "all of the super-linear returns came from insights generated by taking a step back."

This is uncomfortable to accept, because most organizations celebrate their heroes. The engineer who pulled the all-nighter. The PM who held the cross-functional alignment meeting at 11pm on a Sunday. The leader who personally rewrote the strategy doc the night before the board meeting.

These people are real, and what they did was real, and they often saved the quarter. But Komoroske's claim is that the existence of the hero is a diagnostic. If the system worked, no hero would have been required. The hero papered over the system failure. The system failure persists. Next quarter, the org will need another hero.

The diagnosis is not about the hero. It is about the conditions that made the heroics load-bearing in the first place, and those conditions are the only place a structural fix can land.

## Worked example

Imagine an engineering organization that has grown from sixty people to two hundred over eighteen months. Velocity has not grown with headcount. By every metric the leadership team uses, the org is delivering less than it did at half the size. Plans are slipping. Releases are slipping. Cross-team work has slowed to a crawl.

The leadership team's instinct is that they have hired the wrong people. Performance reviews start to harden. Managers are coached to coach harder. The HR partner is briefed to expect a higher rate of attrition over the next two quarters.

Komoroske's diagnosis would not start there. It would start by asking how many decisions, on a normal week, have to climb past three layers of management to get approved. How many cross-team conversations require a calendar coordination of five or more people. How many shared documents have lifecycles measured in weeks because each pass-through adds another reviewer. How many engineers are blocked, at any given moment, on input from someone they have never spoken to.

The answer to those questions, in a two-hundred-person org that has grown without restructuring its coordination model, is almost always *too many*. Coordination headwind has crossed a threshold. The system is now spending more energy on agreeing about the work than on doing it.

The fix is not better people. The fix is to reduce the coordination surface. Smaller teams with clearer ownership. Fewer mandatory approval layers. Defaults that allow people to act without permission, with the understanding that some of those actions will be wrong and will need to be backed out. A culture that treats fast recovery from small wrong decisions as more valuable than slow protection against them.

This is the slime-mold prescription, applied. It does not feel safer. It is safer.

## Worked non-example

The diagnosis is not always right, and the place it goes wrong is informative.

If you apply the coordination-headwind diagnosis to a team of four engineers shipping nothing, you will produce the wrong answer. A team of four has almost no coordination surface. Reducing it further will not help. The reason that team is shipping nothing is almost certainly something else. Bad hiring, wrong scope, an executive who cannot decide, a technical problem nobody on the team has the skills to solve.

Coordination headwind is what is left after you have ruled out the simpler explanations. It is the diagnosis you reach for when the smart people are working hard and the work is still not happening. It is not the diagnosis you reach for when the work has obvious local failures you have not addressed.

The mistake most leaders make in the other direction is to refuse the diagnosis when it does apply. They look at a stalled two-hundred-person org and insist that the problem must be the people, because the alternative is admitting that the system they built and run is the problem. The diagnostic is uncomfortable because it points at the architecture, and the architect is the person who has to act on it.

## Where this lands

The way to put this diagnosis to use is to ask one question, every time the work is slow: *is this a coordination problem dressed as a competence problem?*

If the answer is yes, you are looking at headwind. The remedy is structural. Reduce the coordination surface. Push decisions toward local information. Find the Schelling point that everyone can converge on without you. Stop celebrating heroes and start removing the conditions that demanded them.

If the answer is no, you have a different problem, and the coordination-headwind frame will mislead you.

This is the diagnostic stance. It is not the whole method.

The next chapter is what to do when the diagnosis is accepted and the work still has to ship.

---

## Companion sidebar: the murmuration

The slime mold is the image Komoroske uses, but it is not the only system that makes the point. The starling murmuration makes the same point from a different angle.

If the slime mold is the case for decentralized *problem-solving*, the murmuration is the case for decentralized *coordination*, and coordination is the harder sell because what managers cannot picture is real-time alignment without a coordinator. A flock of starlings turns together because each bird is reading its seven nearest neighbors and following three local rules: stay close, match direction, avoid collision. No bird sees the flock. The flock is a property that emerges from the watching. When you are trying to convince a leadership team that decentralization can produce alignment, this is the image to reach for.

## Critique sidebar: where the diagnosis breaks

The critiques worth knowing:

**The military strawman.** Komoroske contrasts the slime mold with a hierarchical military as the worst-case command structure. Modern decentralized military doctrine, particularly the version Ukraine has demonstrated since 2022, looks much closer to the slime mold than to the strawman. The contrast is rhetorically convenient and substantively unfair.

**The false dichotomy.** Decentralized organizations have their own pathologies. Duplicate work. Lost institutional knowledge. The same problem solved badly by ten teams in parallel. [Andy Grove](https://en.wikipedia.org/wiki/Andrew_Grove)'s *[High Output Management](https://en.wikipedia.org/wiki/High_Output_Management)* (Random House, 1983) diagnosed much of this territory forty years earlier, with the operational discipline of someone running Intel through extreme scaling. Grove's organizing claim was that a manager's output equals the output of their organization plus the output of neighboring organizations they influence, which means scaling output is not a question of working harder but of identifying the activities that produce leverage across many outputs at once. He named meeting cost explicitly, classified meetings by type and purpose, and recommended pushing decisions toward what he called task-relevant maturity, giving experienced people more autonomy than inexperienced ones. The structural prescriptions overlap with what Komoroske recommends decades later: smaller decision-making surfaces, fewer mandatory approval loops, decisions pushed toward the people closest to the information. Where Komoroske adds something the older diagnosis did not capture is the multiplicative compounding of multiple coordination loads at once. Grove worked the problem primarily through the lens of meeting cost. Komoroske expands it to a system of variables that all compound on each other. Reading them together is more useful than reading either alone. The slime mold is a hook, not a manual.

**Where the terms come from.** Some of the vocabulary is older than his use of it, and his own text treats it as established. The Schelling-points essay calls the Grand Central meeting "the canonical example," and the adjacent-possible essay opens its term with "This is sometimes known as your adjacent possible." Neither essay names Thomas Schelling or Stuart Kauffman, whose terms they are. His homepage says the ideas behind the headwind argument started when he was studying "the emergent power dynamics of Wikipedia's user community in undergrad," and were informed by web standards work. Readers who want the older sources can start with Schelling's *The Strategy of Conflict* and Kauffman's work on the adjacent possible.

## Reflection prompt

Pick one piece of work in your organization that is moving slower than you think it should. Write down the explanation you have been giving yourself for why. If the explanation is about people (they are not skilled enough, not committed enough, not coordinated enough), ask yourself: *what would I see if I assumed the people were fine and the system was the problem?* Sit with that for ten minutes before you do anything about it.

## Primary sources for this chapter

- Komoroske, *Coordination Headwind* (the slime mold deck), [komoroske.com/slime-mold](https://komoroske.com/slime-mold/)
- Komoroske, *On Schelling Points in Organizations*, Medium, December 2021
- Komoroske, *A Dangerous Addiction*, Medium, July 2022
- Read alongside: Fred Brooks, *The Mythical Man-Month*, 1975 (an earlier observation about coordination cost in software teams)
