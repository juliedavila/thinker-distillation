# Reading claims: Will Larson

One line per sentence of `reading` and `extension`, each with the grounding-pack IDs it rests on.

Round 1 Council edits applied 2026-09-17. Two changes worth naming here. The reading no longer
reopens the thesis in the same words, which is why sentences 1 and 2 are rephrased rather than
recited. And extension sentence 5 previously cited [L:3], which supports no clause of it: [L:3] is
about frames having no recorded life outside his writing, and the sentence is about a rewritten
policy and an adversary. The citation is now [F:exception-debt] alone. Seat 2 proposed [P:3] in its
place; that position is about boundary enforcement over code inspection and makes no argument this
sentence makes, so the Lens stays where it is argued, on the autonomy sentence.

Round 2 Council edits applied 2026-09-17. The reading dropped "the team plan" from its first
sentence, because no line in `facts.md` describes a written team plan among the artifacts Larson
treats; the four team states are a diagnosis of a team rather than a document. The extension was
rebuilt around three corrections. The regulatory floor is now scoped to 23 NYCRR Part 500 by name
([S:53] shows the rule reaches only entities holding New York authorizations, so the flat word
"regulation" overclaimed). The old "with no sponsor involved" contradicted [S:46], where the annual
certification is signed by the CISO and the highest-ranking executive together, so the sentence now
says what it meant: no sponsor conferred the duty and none can withdraw it. And the closer names
the risk the prescription creates, which `calibration.md` requires and the old closer omitted. The
Lens citation [P:8] moved onto its own main clause rather than riding a trailing relative clause.

Round 3 Council edits applied 2026-09-17. One extension sentence changed. It said the regulator
designates the officer, which contradicts the rule text quoted in the ledger line the sentence rests
on: 23 NYCRR 500.4(a) reads "Each covered entity shall designate a CISO" [S:45], so the entity
designates and the New York Department of Financial Services does not. Four seats caught it. The
sentence now says the rule requires a designated CISO and an annual signature, which is what [S:45]
and [S:46] carry, and "withdraw" became "waive" so the claim is about the duty a sponsor cannot lift
rather than about who holds the seat, which section 500.4 does not address either way. The sentence
runs 28 words against the old 29, so `extension` stays inside the 160-word cap.

## reading

- The organization Larson writes about is the one on paper: the ladder, the policy, the strategy. [T:thesis]
- The essays work one decay at a time: name how a written artifact fails, then prescribe the repair. [T:thesis]
- A policy that spends its time granting exceptions carries exception debt, and the repair is to batch a month of requests and rewrite the policy around what the escalations show. [F:exception-debt]
- Most companies already have an engineering strategy and never wrote it down, so by his account the writing solves half the problem, inside Rumelt's kernel of diagnosis, guiding policy and coherent action. [F:engineering-strategy-as-written-practice] [L:4]
- The staff engineer archetypes came the other way, out of interviews with people who already held the title, which is what the taxonomy describes and what bounds it. [F:staff-engineer-archetypes] [L:1]
- Underneath sits his account of authority: the power a title carries is bestowed by a sponsor, can be retracted, and holds only while its holder stays aligned with whoever bestowed it. [F:loaned-organizational-authority] [T:working-line]

## extension

- Larson's account covers staff engineers and their managers, and no security function appears in the record behind this page. [F:loaned-organizational-authority]
- A security mandate arrives partly the same way. [F:loaned-organizational-authority]
- Where New York's Part 500 applies, the rule requires a designated CISO and an annual signature, duties no sponsor conferred and none can waive, with no discretion attached. [F:loaned-organizational-authority]
- Everything above that floor is on loan, and that margin is the autonomy an executive weighs before taking a job. [P:8] [F:loaned-organizational-authority]
- The exception queue is where the loan gets spent, since each granted exception suspends a control over somebody else's work. [F:exception-debt]
- His repair does not transfer whole: a policy rewritten around the exceptions it granted ratifies whatever pressure produced them, and his setting holds no adversary who benefits from the rewrite. [F:exception-debt]
- The diagnostic half carries over: read the queue per control and per sponsor. [T:still-load-bearing] [F:exception-debt]
- Read as a score it teaches people to stop filing, and it never sees the control nobody bothers to except against. [E:out:nicole-forsgren] [F:exception-debt]
