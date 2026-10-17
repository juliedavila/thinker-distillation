# Reading claims: Dave Farley

One line per sentence of `reading` and `extension`, each with the grounding-pack IDs it rests on.

## reading

- Two pieces of Farley's work stand fourteen years apart. [T:thesis]
- The 2007 paper sets out the deployment pipeline: a release candidate started at each check-in and carried through a sequence of gates. [F:deployment-pipeline]
- The idea is older than the paper, and Farley is one of several parents on the record. [F:deployment-pipeline]
- The 2021 book defines software engineering as an empirical, scientific approach to practical problems, and divides the work into learning and managing complexity. [T:working-line] [F:optimize-for-learning-and-complexity]
- Chris James teaches the layered acceptance test, specifications on top and drivers underneath, and credits it to Farley by name; its driver layer already appears in the 2010 book by Humble and Farley. [F:four-layer-acceptance-tests]

## extension

- A rule like "a suspended account cannot approve a payment" outlives every interface built for it, so a software factory keeping such rules in the spec needs specs that last as long. [P:6]
- The four-layer test has that shape: specifications state behaviour in the problem's terms, and only the drivers know how the system is reached. [F:four-layer-acceptance-tests]
- That holds only while the domain's owners can read the specifications; a rule nobody outside engineering can follow is still code. [F:four-layer-acceptance-tests]
- Chris James explains the split as letting a specification be reused through configurable drivers. [F:four-layer-acceptance-tests]
- The weak point moves into the drivers. [F:four-layer-acceptance-tests]
- A prohibition passes when its driver never reaches the system, or when the attempt fails for some other reason. [F:four-layer-acceptance-tests]
- Each such rule needs a positive control, an active account approving through the same driver, and each refusal traced to the rule; any interface no driver reaches stays unchecked. [F:four-layer-acceptance-tests] [P:6]
- The security use is the site's inference; the structure was taught for acceptance tests. [F:four-layer-acceptance-tests]

## Round 1 editor notes (2026-10-09)

Reading sentence 3 no longer cites L:1, because the sole-inventor clause it carried now lives in limits[0] alone. Extension sentence 3 rests on Chris James's reuse wording, which the fact ledger records at S:36 as his and not Farley's, so the sentence names him. The positive-control sentence cites P:6, as a condition on keeping security rules in the spec, and does not cite P:3: a positive control is a test, not boundary enforcement. The earlier review prescription, which ran against P:3, is gone. Extension sentence 1 puts the site's own example rule in quotation marks, introduced by "A rule like" so it reads as an example and not as anyone's words.

## Round 2 editor notes (2026-10-09)

Reading sentence 1 drops "each giving a team a structure to build", which restated the closing sentence of `why_they_matter_as_a_thinker`; it still rests on [T:thesis]. Reading sentence 3 replaces the Humble 2004 credit, which nearly copied `thirty_second_take`, with "The idea is older than the paper, and Farley is one of several parents on the record", on [F:deployment-pipeline], whose gloss carries the Humble credit, the 2005 Newman entry and the 2006 paper ("The record gives it several parents"). Reading sentence 7 drops "which sells the method"; [L:2] stays cited for "his own consultancy" (the limit's body names Continuous Delivery Ltd), and the commercial point now lives in `limits[1]` alone.

Extension sentence 3 now carries only Chris James's wording on configurable drivers. Factual support outside the pack: [S:36] ("Decoupling how the specification is executed allows us to reuse it in different scenarios. We can: Make our drivers configurable"), traced in `page-claims.md` under `extension`. The pack's [F:four-layer-acceptance-tests] carries the structure and James's credit, and no reuse wording, so the ledger line is the support for that clause. Extension sentences 6 and 7 add the wrong-reason refusal to the vacuous pass (seat 4) and are site inference; sentence 8 still labels the security use as the site's.

## Cold reader editor notes (2026-10-09)

Reading sentence 1 is now "Two pieces of Farley's work stand fourteen years apart.", which no longer reads as a count of a record whose `body_of_work` lists six items (cold reader finding 9). Reading sentence 2 drops "with one binary meant to run in every environment", and the former sentence 5 ("It cites Parnas and Nygard and sends readers to *Accelerate* ...") is deleted: both restated fields that already carry the point (finding 8; the frame gloss keeps Parnas and Nygard, and the thesis, the Forsgren edge and `body_of_work[2]` keep *Accelerate*). The former closing sentence ("Behind all of it sit ThoughtWorks, LMAX and now his own consultancy") is deleted rather than replaced: no pack item carries his ThoughtWorks or LMAX employment, the replacement the cold reader offered would have rested on the same gap, and `background` already carries the sequence. Every change to `reading` is a deletion or a narrowing; nothing new is asserted.

Extension sentences 3 and 4 are swapped (finding 6), so the readability condition now follows the sentence it qualifies ("only the drivers know how the system is reached") and James's reuse sentence leads into "The weak point moves into the drivers". Word count unchanged at 159.

## Sourcing pass notes (2026-10-16)

Reading sentence 4 is unchanged and rests on [T:working-line] and [F:optimize-for-learning-and-complexity] as before. It says the book "divides the work into learning and managing complexity", which describes the book's structure and implies no origination, so the frame's new `derived_from: essential-vs-accidental-complexity` (fact ledger [S:41], [S:42]) needs no change here. No reading or extension sentence credits the split to Farley as new.
