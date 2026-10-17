# Reading claims: Ross Anderson

One line per sentence of `reading` and `extension`, each with the grounding-pack IDs it rests on.

Revised after review round 1, 2026-09-20. The aviation comparison now has its own ledger line,
`[S:58]`, which `page-claims.md` attaches to `thesis` and to the David Woods edge, so the sentence
below that rests on `[T:thesis]` traces to a source rather than to an assertion.

Revised again after review round 2, 2026-09-21. Four sentences changed, two in each field, and the
IDs behind them did not move. The method under the first reading sentence now has a ledger line of
its own, `[S:60]`, the 1993 paper's own abstract and its section 2, which `page-claims.md` attaches
to `tagline`, `thirty_second_take`, `named_frames[0].attribution`, `body_of_work[0]`,
`why_they_matter_as_a_thinker` and `still_load_bearing_despite`. `[F:threat-model-was-wrong]` is
that frame, so the sentence below traces through it to the paper.

Revised again after review round 3, 2026-09-21. One sentence changed, the first in `extension`, and
only by dropping "doctoral" from Boucher's description. `[S:59]` is Anderson's own list of "The
research students I advise" and carries no degree, so the page no longer states one. The IDs behind
the sentence did not move.

## reading

- Anderson's 1993 finding came from collecting how cash machine fraud happened: most of it ran through implementation error and management failure while the field designed against cryptanalysis. [F:threat-model-was-wrong] [T:thesis]
- The paper blames a missing feedback loop: aviation investigates its accidents and cryptography had no equivalent. [T:thesis] [E:out:david-woods]
- Once the losses are visible the pattern is economic, and his rule is that problems may be expected wherever the party able to protect a system is not the one who suffers. [T:working-line] [T:thesis]
- That reading began in a conversation with the economist Hal Varian, borrowing moral hazard and network externalities from economics. [F:security-economics] [E:out:hal-varian]
- The phrasing that travelled is "misaligned incentives", a section heading in the 2006 paper with Tyler Moore. [F:misaligned-incentives]
- The late papers carry his name inside other people's work: second to his student Nicholas Boucher on Trojan Source, fifth of six behind Ilia Shumailov on model collapse. [F:trojan-source] [F:model-collapse]
- He wrote a standard textbook, and his biographer credits him with catalysing the communities that outlived him. [F:security-engineering-as-a-discipline] [L:3] [T:still-load-bearing]

## extension

- Trojan Source, first-authored by Anderson's student Nicholas Boucher, is the sharpest case on this site for enforcing boundaries in infrastructure rather than trusting code review: the human reads one program and the compiler builds another. [F:trojan-source] [P:3]
- The fixes bear that out, and they differ in strength: Rust rejects those characters by default, while the GCC warning still ends at a human. [F:trojan-source] [P:3]
- The move worth copying is to push the check into the toolchain wherever the rendered and executed artifact can differ. [P:3] [F:trojan-source]
- Its precondition is ownership of the build, so it reaches only the compiler versions, linters and package resolution an organisation pins, and no further into a vendor's. [P:3] [F:trojan-source]
- It also buys false confidence, because a build rule covers the encodings somebody already named. [F:threat-model-was-wrong]
- Anderson's correction is the cheaper companion: collect how the losses happened, then check the threat model against them. [F:threat-model-was-wrong] [T:still-load-bearing]
- The next rule comes from asking which of those losses a build rule could have refused. [T:still-load-bearing] [P:3]

Checked in the sourcing pass, 2026-10-16. The frame `[F:security-engineering-as-a-discipline]`
now cites `[S:61]`, an antecedent search that found a 1989 US military standard for system
security engineering. The reading sentence that rests on the frame claims a standard textbook and
the communities, not priority, so it did not change and its IDs did not move.
