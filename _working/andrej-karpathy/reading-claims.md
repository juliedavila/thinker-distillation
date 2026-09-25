# Reading claims: Andrej Karpathy

One line per sentence of `reading` and `extension`, each with the grounding-pack IDs it rests on.

## reading

- Karpathy's 2017 essay splits programs by where their behaviour is written down. [F:software-2-0]
- Software 1.0 is explicit instructions; in Software 2.0 the weights carry it and "no human is involved in writing this code." [F:software-2-0]
- The mechanism is one sentence: "Software 2.0 is code written by the optimization based on an evaluation criterion." [T:working-line]
- The work moves to the criterion and the data, so a failure on a hard case gets fixed by adding labelled examples of it. [T:thesis]
- Seven years later he coined vibe coding, where the model writes the source and the person stops reading it. [F:vibe-coding]
- The two name different artifacts: one has no source to read, the other has source nobody read. [F:software-2-0] [F:vibe-coding] [T:still-load-bearing]
- The definition people quote is Willison's wording. [L:1] [E:out:simon-willison]
- His own account carries the limits, from the essay's trade between accuracy and understanding to his report in October 2025 that on code where "everything has to be very precisely arranged" the models were "just not net useful." [L:4] [L:2]

## extension

- The comprehension crisis is usually counted as one gap, measured in the volume of code nobody has read. [P:4]
- His distinction splits that gap in two, because the artifacts fail comprehension in ways that need different controls. [F:software-2-0] [F:vibe-coding] [T:still-load-bearing]
- Unread generated source stays readable, so that gap has a price in review, tests and provenance. [F:vibe-coding] [P:4]
- A trained model's behaviour is written nowhere a reviewer can go, so semantic comprehension lives in the evaluation criterion and the dataset or nowhere. [F:software-2-0] [L:3] [P:4]
- An organization running one assurance policy over both buys review where review is available and calls the rest covered. [F:software-2-0] [F:vibe-coding] [P:4]
- Whoever holds the criterion for the second kind holds its behaviour, which is a different accountability from owning a repository. [L:3] [F:software-2-0]
- The split works only where the criterion can be stated: an owner for it, an evaluation set controlled like code. [L:3]
- The risk is the adversarial examples his essay's limitations section names: a criterion passed on a held-out set says nothing about attacker-chosen inputs. [L:4]

## Angle, Lens position and the move not repeated

Lens position [P:4], held also by fred-brooks, nicole-forsgren and ward-cunningham
(`bun scripts/lens-index.ts andrej-karpathy`). The move deliberately not repeated is
Cunningham's volume clause, "Generated code strains that assumption, since it arrives faster
than anyone's understanding of it," which the first draft of this extension opened on in nearly
the same words. Round 1 seat 5 caught it and the opener was rewritten to make the count the
thing being corrected rather than the thing being asserted. The angle this page argues, which
none of the other three P:4 pages do: the comprehension gap is two gaps, and they are told apart
by where the behaviour is written rather than by how fast the code arrives.

**Round 2 changed no sentence of `reading` or `extension`.** Both fields are unchanged at 160 and 158
words. Two edits landed in text the lines above cite, so each was read back against its line: `[L:2]`
lost "not a stage the tooling has since grown out of" and kept both quotations the last `reading`
sentence rests on, "everything has to be very precisely arranged" and "just not net useful"; `[L:4]`
lost "Eight years on, those are still the open items" and kept the accuracy-versus-understanding
trade that the same sentence rests on and the adversarial-examples clause the `extension`'s risk
sentence rests on. `[T:thesis]` and `[T:still-load-bearing]` were both edited and both still carry
what the lines citing them assert. Seat 2 proposed replacing the risk sentence with the silent-bias
mode and it was rejected for the second time; the reasons are in
`_working/_council/2026-09-22/round-2-editor-andrej-karpathy.md`. The grounding pack was regenerated
after the last page edit.

Round 1 changed the last two sentences of `extension` and neither change moves a claim. The risk
clause now names the mechanism seat 4 said it left to inference, that a criterion passed on a
held-out set says nothing about attacker-chosen inputs, sourced at `[S:31]` and kept inside the
adversarial-examples clause of `[L:4]` that the field already cited. The sentence before it stopped
opening on "The preconditions hold only where," which seats 3, 4 and 5 each flagged: a roster grep
finds the literal "The precondition is X / The risk is Y" pair on this page, `christopher-alexander`
and `ward-cunningham`, and Cunningham is shipped. Naming preconditions and risks is a content
requirement from the calibration list, so the content stays and the sentence opener goes. The field
runs 158 words of 160 after the pass, against 159 before it.
