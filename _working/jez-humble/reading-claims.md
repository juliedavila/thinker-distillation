# Reading claims: Jez Humble

One line per sentence of `reading` and `extension`, each with the grounding-pack IDs it rests on.

Rewritten 2026-09-22 when the round 1 Council edits were applied. Both fields sat at the 160-word
gate before the edits (reading 160, extension 159), so every accepted addition had to be paid for
out of an existing sentence. What was removed and why is in
`_working/_council/2026-09-22/round-1-editor-jez-humble.md`.

Round 2 edits applied 2026-09-22; see `_working/_council/2026-09-22/round-2-editor-jez-humble.md`.
Two citations changed rather than the sentence under them. `[T:working-line]` left the reading's
second sentence with the release-schedule clause it supported, which three fields were carrying.
And `[P:7]` joins extension sentence four on seat 4's finding: the sentence turns on a component
holding release authority nobody granted it, which is the Lens position on inherited authority.
Fowler is the only other page at `[P:7]` and argues it at the bounded-context seam, so the two
do not collide.

## reading

- The 2006 paper argues that a change should take exactly one route to production, and every other claim here follows from it, the discipline of the 2010 book included. [T:thesis] [F:deployment-pipeline] [F:continuous-delivery]
- That is what makes the discipline work: software kept releasable at all times, with any good build deployable on demand. [F:continuous-delivery]
- One distinction inside the discipline is smaller and separable: deploying code and releasing a feature are two decisions, so code can run in production with nobody able to reach it. [F:release-decoupled-from-deploy] [T:thesis]
- Almost none of it is his alone and he is usually the one saying so: Chris Read and Dan North on the pipeline paper, Dave Farley on the book, Deming and Toyota behind the principles. [L:3] [F:continuous-delivery] [F:continuous-delivery-principles]
- What is his is the writing down: the paper set an existing practice out in an order other people could follow. [L:3] [F:deployment-pipeline] [F:release-decoupled-from-deploy]

## extension

- One route to production is the condition under which a security constraint can be a stage that rejects a change instead of a document somebody complies with, which is what auditability across a software factory asks for. [P:6] [F:deployment-pipeline]
- The authors fence their own case at organizations where delivery is the constraint. [L:2]
- An auditability case argues on different ground. [P:6] [L:2]
- Releasing separately from deploying takes the last decision back out of it. [F:release-decoupled-from-deploy]
- What reaches production is built, tested and promoted on the audited path, while the act that exposes it to users is a runtime switch sitting outside that path, so the flag service inherits an authorization decision the discipline never names as one. [F:release-decoupled-from-deploy] [F:deployment-pipeline] [L:4] [P:7]
- Closing that seam takes more than a log. [L:4]
- Each switch needs a named party entitled to move it, and a record of who did, which brings the switch inside the factory. [P:6] [L:4]
- Until it closes, the audited path stops at the deploy and the release sits outside it. [L:4]
