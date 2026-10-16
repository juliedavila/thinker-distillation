# Reading claims: John Allspaw

Protocol v1. One line per sentence of `reading` and `extension`, each with the grounding-pack IDs it rests on.

## reading

- Allspaw treats an incident as a sample of how a system really operates, carrying information no design document or runbook can supply. [T:thesis]
- Getting that information requires conditions where engineers can say honestly what they saw and decided without career risk, which is the purpose of the blameless postmortem. [T:thesis] [F:blameless-postmortem]
- The analysis then looks above the line, at the mental models and coordination that operate the system, as well as below it at code and configuration. [F:above-the-line-below-the-line]
- Dark debt names what that analysis keeps finding: failure modes that live in the interactions between components and cannot be found by inspecting any one of them. [F:dark-debt]
- The frame fails when blameless gets read as consequence-free, which keeps the label and drops the learning discipline. [L:1]

## extension

- Security work generates dark debt quickly, because every new builder, API, agent, and workflow adds interactions that no single review sees. [F:dark-debt] [P:5]
- As those surfaces combine, their failure modes multiply, and they tend to surface only through incidents. [P:5] [F:dark-debt]
- That makes the incident stream a security organization's best instrument for finding dark debt, and measuring the team on incident count degrades the instrument. [L:2] [T:thesis]
- A team scored on fewer incidents learns to report fewer, and the samples that would have revealed the next interaction failure never reach review. [L:2]
- The fix has to come from leadership, because a team already scored on incident count cannot rewrite its own scorecard. [L:2]
- Once the scoring changes, reported incidents and near misses can be treated as signal worth rewarding. [T:thesis] [F:blameless-postmortem]

## Changes, 2026-10-15

No sentence of `reading` or `extension` changed in the remediation pass. The second reading line no longer cites `[T:working-line]`: the old working line ("Blame is the enemy of safety") does not appear in the 2012 post (facts.md [S:12]) and was replaced with a sentence the post does contain, which is about balancing safety and accountability and does not carry this line's claim. The line still rests on `[T:thesis]` and `[F:blameless-postmortem]`. The grounding pack is a 2026-09-16 snapshot and still shows the old working line and the old frame and edge text.
