---
slug: ross-anderson
name: Ross Anderson
canonical_url: https://www.cl.cam.ac.uk/archive/rja14/
active_years: 1993–2024
primary_domains:
  - security-engineering
  - security-economics
  - cryptography
status: deceased
inclusion_rationale: >
  Thirty-one years of published security research, from "Why Cryptosystems
  Fail" (CCS, 1993) to the Nature paper on model collapse in 2024. Uptake is
  independent of him at both ends of that span: Cormac Herley at Microsoft
  Research builds on the economics frame by name in his own peer-reviewed
  paper; the Workshop on the Economics of Information Security meets for its
  twenty-fifth edition on 2 and 3 June 2026 in Berkeley, the city where he and
  Hal Varian convened the first in 2002; and Trojan Source carries two CVE
  identifiers with patches merged into Rust, GCC and LLVM. Attribution needs
  care on almost every frame. Varian is in the founding conversation for
  security economics and the 2001 paper credits him two pages in. "Misaligned
  incentives" is a section heading in the 2006 Science paper with Tyler Moore,
  and the 2001 paper says "perverse incentives". Model collapse is
  first-authored by Ilia Shumailov with Anderson fifth of six. Trojan Source is
  first-authored by his student Nicholas Boucher. "Anderson's Rule"
  was formulated by a Guardian columnist and appears nowhere in his own book.
  Inclusion Council 5 to 0, 2026-09-20. The site's first deceased thinker, so
  Live Edge is unavailable by schema and the two fastest-moving frames have to
  carry their own dates inside Named Frames.
thinker_type: mixed
doctrine_mode: mode-a
has_long_read: false
last_updated: 2026-09-20

tagline: The Cambridge security engineer who surveyed how retail banking systems failed, found implementation error and management failure where the field expected cryptanalysis, and helped build the research communities that formed around the gap.
thirty_second_take: >
  Anderson spent more than a decade inside banks and consultancies before he was
  an academic, and the 1993 paper that made his name came out of that. He
  collected how cash machine fraud actually happened and reported that the
  threat model the cryptography community designed against was the wrong one:
  most losses came from implementation error and management failure, and
  designers had been working on what could possibly go wrong instead of what
  was likely to. The rest of the career follows from that correction. If the
  failures are not where the mathematics is, the question becomes why
  organisations keep building systems that break the same way, and the answer
  he worked out with the economist Hal Varian is that the party able to protect
  a system is often not the party who pays when it fails. He wrote a standard
  textbook, helped start the research communities that carried the question,
  and kept finding the same shape in new places, from centralised medical
  records to compilers that read source text differently from the humans
  reviewing it.

background: >
  He read mathematics at Trinity College, Cambridge, graduating in 1978, and
  took a year out in the middle of the degree at Ferranti in Edinburgh, porting
  the inertial navigation system of the Tornado fighter-bomber for use in
  submarines. Over a decade outside academia followed. Barclays headhunted him
  onto its information systems team to look at the security of cash machines
  and points of sale, where he stayed three years; his biographer credits that
  stint both for the banking know-how and for what it taught him about "the
  hierarchies, incentives and inefficiencies of large organisations, which
  later resurfaced in his work on security economics". In 1989 he left for Hong
  Kong to work on a Standard Chartered project, helping establish a branch
  network system for use in 23 countries in Asia, then worked as an independent
  consultant. He came back to Cambridge as a mature student under Roger
  Needham, was approved for the doctorate in 1995 and took a lectureship the
  same year. He co-founded the Foundation for Information Policy Research in
  1998, became Reader in Security Engineering in 2000 and Professor in 2003.
  From 2021 he held a chair at Edinburgh jointly with Cambridge, and in his own
  words Cambridge "forced me to retire in September 2023 when I turned 67, a
  policy of unlawful age discrimination against which we are campaigning". He
  died at home on 28 March 2024, aged 67.
why_they_matter_as_a_thinker: >
  The 1993 finding is portable because the method is the part that travels: go
  and collect how the losses occurred, then check the threat model against
  them. The economics work supplied the vocabulary for what that collection
  keeps showing, and the vocabulary travels to people who never read the
  paper. Cormac Herley builds on the frame by name in peer-reviewed work of
  his own, and the Cambridge department calls him one of the founders of that
  field. The late work travels on a different track. Trojan Source,
  first-authored by his student Nicholas Boucher, carries two CVE
  identifiers and a set of compiler patches, which is other people changing
  their software because of a paper.

thesis: >
  Anderson's argument is that security failures are distributed by incentive
  more than by technical difficulty, and that the field keeps looking in the
  wrong place because nothing tells it where the losses are. The 1993 work set
  the shape. Aviation institutionalised learning from accidents and
  cryptography did not, and the absence of that feedback let a false threat
  model stand for years while the real frauds ran through implementation and
  management. Once the losses are visible, the pattern in them is economic.
  Where the party who can protect a system is not the party who suffers when it
  fails, failure should be expected, and better cryptography does not change
  that arithmetic.

  The remedy he reached for sits mostly outside the security team. The 2001
  paper borrows liability dumping, network externalities, moral hazard and the
  tragedy of the commons from microeconomics, because the interesting variable
  is who bears the cost. His work for the British Medical Association made a
  matching argument about aggregation: the likelihood a resource is abused
  depends on its value and on the number of people who can reach it, and
  putting personal information into one large database raises both at once. And
  where no venue existed for the questions that followed, he convened one.
working_line: >
  In general, where the party who is in a position to protect a system is not
  the party who would suffer the results of security failure, then problems may
  be expected. ("Why Information Security is Hard: An Economic Perspective,"
  ACSAC, December 2001.)

named_frames:
  - concept_slug: threat-model-was-wrong
    display_name: The threat model was wrong
    one_line_gloss: >
      A threat model can be wrong as a matter of fact, and the way to find out
      is to collect how the losses actually happened. Anderson did that for
      cash machine fraud and reported that most of it came from implementation
      error and management failure, with designers "focussed on what could
      possibly go wrong, rather than on what was likely to". The phrase is the
      1993 paper's own section heading.
    attribution_kind: original
    primary_author: ross-anderson
    source_link: https://www.princeton.edu/~rblee/ELE572Papers/p215-anderson.pdf
    render_tier: foreground
  - concept_slug: security-economics
    display_name: Security economics
    one_line_gloss: >
      Reading security failure through microeconomics: network externalities,
      asymmetric information, moral hazard, adverse selection, liability
      dumping and the tragedy of the commons, all borrowed from the economics
      literature, none of it coined here. The founding conversation was with
      Hal Varian, who suggested that the liability problem in online payments
      was classic moral hazard; the 2001 paper credits him two pages in, and
      the two convened the first Workshop on the Economics of Information
      Security at Berkeley in June 2002. The Cambridge department calls
      Anderson one of the founders of the field.
    attribution_kind: extended
    primary_author: ross-anderson
    co_originators:
      - slug: hal-varian
        role: the founding conversation and the moral-hazard framing; co-convened the first WEIS, Berkeley, June 2002
    source_link: https://www.acsac.org/2001/papers/110.pdf
    render_tier: foreground
  - concept_slug: misaligned-incentives
    display_name: Misaligned incentives
    one_line_gloss: >
      Systems are "particularly prone to failure when the person guarding them
      is not the person who suffers when they fail". The phrase is a section
      heading in Anderson and Tyler Moore's 2006 Science paper, which is where
      it entered security vocabulary; the 2001 paper says "perverse
      incentives". The term itself is older economics vocabulary, and Cormac
      Herley credits economics for the term while crediting Anderson for
      carrying the frame into security.
    attribution_kind: co-authored
    primary_author: ross-anderson
    co_originators:
      - slug: tyler-moore
        role: co-author of "The Economics of Information Security," Science, 2006, where "Misaligned Incentives" is a section heading
    source_link: https://tylermoore.utulsa.edu/science-econ.pdf
    render_tier: foreground
  - concept_slug: trojan-source
    display_name: Trojan Source
    one_line_gloss: >
      Source code that renders one way to a human reviewer and compiles
      another, using Unicode bidirectional control characters and homoglyphs.
      Nicholas Boucher, Anderson's student, is first author and
      Anderson is second. The paper demonstrates working examples in twelve
      languages and records two CVE identifiers, CVE-2021-42574 and
      CVE-2021-42694. Rust fixed it in 1.56.1, a -Wbidi-chars warning was
      merged for GCC 12, and LLVM merged similar patches.
    attribution_kind: co-authored
    primary_author: nicholas-boucher
    co_originators:
      - slug: ross-anderson
        role: 'co-author, "Trojan Source: Invisible Vulnerabilities," 32nd USENIX Security Symposium, 2023'
    source_link: https://www.usenix.org/conference/usenixsecurity23/presentation/boucher
    render_tier: foreground
  - concept_slug: model-collapse
    display_name: Model collapse
    one_line_gloss: >
      What happens to a generative model trained on data produced by earlier
      generative models. In the paper's own abstract, "indiscriminate use of
      model-generated content in training causes irreversible defects in the
      resulting models, in which tails of the original content distribution
      disappear". Ilia Shumailov is first author of six, with Zakhar
      Shumaylov, Yiren Zhao, Nicolas Papernot, Ross Anderson and Yarin Gal;
      Anderson is fifth. Nature, 2024, after an earlier preprint of the same
      work titled "The Curse of Recursion".
    attribution_kind: co-authored
    primary_author: ilia-shumailov
    co_originators:
      - slug: zakhar-shumaylov
        role: co-author, "AI models collapse when trained on recursively generated data," Nature, 2024
      - slug: yiren-zhao
        role: co-author, "AI models collapse when trained on recursively generated data," Nature, 2024
      - slug: nicolas-papernot
        role: co-author, "AI models collapse when trained on recursively generated data," Nature, 2024
      - slug: ross-anderson
        role: fifth of six authors, "AI models collapse when trained on recursively generated data," Nature, 2024
      - slug: yarin-gal
        role: co-author, "AI models collapse when trained on recursively generated data," Nature, 2024
    source_link: https://www.nature.com/articles/s41586-024-07566-y
    render_tier: foreground
  - concept_slug: security-engineering-as-a-discipline
    display_name: Security engineering as a discipline
    one_line_gloss: >
      Building dependable systems treated as an engineering discipline with its
      own body of knowledge, a textbook and named chairs. The phrase does not
      start with Anderson: a US military standard of 1989 already set
      requirements for system security engineering programs, and no coiner is
      established here. What the record supports is his part in the building:
      the BCS gave him the Lovelace Medal in 2015 "in recognition
      of his many contributions to building security engineering into a
      discipline", Computer Weekly repeats the framing independently, Cambridge
      and Edinburgh both named chairs for it, and his biographer calls it "the
      thread that linked his diverse contributions".
    attribution_kind: popularized
    primary_author: ross-anderson
    source_link: https://www.cl.cam.ac.uk/archive/rja14/book.html
    render_tier: deep
  - concept_slug: andersons-rule
    display_name: Anderson's Rule
    one_line_gloss: >
      The claim that a database cannot hold scale, functionality and security
      at the same time. The formulation belongs to Henry Porter, in a Guardian
      column of 10 August 2009, and neither the named rule nor the phrase
      "scale, functionality" appears anywhere in the third edition of Security
      Engineering; Wikipedia's standalone article on the rule cites only that
      column. What Anderson wrote is the mechanism without the name, in section
      10.4: "The likelihood that a resource will be abused depends on its value
      and on the number of people with access to it. Aggregating personal
      information into large databases increases both these risk factors at the
      same time."
    attribution_kind: community
    primary_author: henry-porter
    source_link: https://www.theguardian.com/commentisfree/henryporter/2009/aug/10/id-card-database-breach
    render_tier: deep

body_of_work:
  - title: Why Cryptosystems Fail
    type: paper
    year: 1993
    link: https://www.princeton.edu/~rblee/ELE572Papers/p215-anderson.pdf
    editorial_note: >
      Thirteen pages, and the whole method is in them. He collected how cash
      machine fraud happened and checked the threat model against the
      record. Section 4.1 is headed "Why the threat model was wrong". Start
      here.
    read_first: true
    canonical: true
  - title: 'Security Engineering: A Guide to Building Dependable Distributed Systems'
    type: book
    year: 2020
    link: https://www.cl.cam.ac.uk/archive/rja14/book.html
    editorial_note: >
      The third edition, published by Wiley in 2020, is the one to read. All 29
      chapters became free from his archived Cambridge page after what he
      described as a 42-month embargo the publisher insisted on. Use it as a reference; few people read it front to
      back, and the Cambridge department calls it a standard textbook.
    canonical: true
  - title: 'Why Information Security is Hard: An Economic Perspective'
    type: paper
    year: 2001
    link: https://www.acsac.org/2001/papers/110.pdf
    editorial_note: >
      Eight pages that put the economics vocabulary into security. Dated
      December 2001 by the proceedings and by his own slides, which is worth
      knowing because at least one obituary calls it a 2000 paper. Read the
      first three pages for the general rule and for the credit to Hal Varian.
  - title: The Economics of Information Security
    type: paper
    year: 2006
    link: https://tylermoore.utulsa.edu/science-econ.pdf
    editorial_note: >
      Written with Tyler Moore for Science, and the source of "Misaligned
      Incentives" as a section heading. The survey a reader should cite for
      that phrase.
  - title: 'Trojan Source: Invisible Vulnerabilities'
    type: paper
    year: 2023
    link: https://www.usenix.org/conference/usenixsecurity23/presentation/boucher
    editorial_note: >
      Nicholas Boucher first author, Anderson second, first circulated as a
      preprint in October 2021. The clearest demonstration on this page that a
      paper can change software: two CVE identifiers, and fixes in Rust, GCC
      and LLVM.
  - title: AI models collapse when trained on recursively generated data
    type: paper
    year: 2024
    link: https://www.nature.com/articles/s41586-024-07566-y
    editorial_note: >
      Shumailov, Shumaylov, Zhao, Papernot, Anderson and Gal in Nature, with
      Anderson fifth of six. Read it for the definition of model collapse in
      the abstract, and read the author line before citing the idea to anyone
      in particular. It carried 1,034 citations about two years after
      publication, which belongs to all six of them.
  - title: A Security Policy Model for Clinical Information Systems
    type: paper
    year: 1996
    editorial_note: >
      Written out of advising the British Medical Association against a plan to
      centralise national medical records. The aggregation argument in its
      original setting, where the data belongs to patients and the system
      belongs to the state.
  - title: 'Bugs in our pockets: the risks of client-side scanning'
    type: paper
    year: 2024
    link: https://academic.oup.com/cybersecurity/article/10/1/tyad020/7590463
    editorial_note: >
      Fourteen authors, Anderson second, with a 1997 predecessor on key escrow
      carrying an overlapping list. This is the policy register, and Levy and
      Robinson's reply belongs beside it.

reading: >
  Anderson's 1993 finding came from collecting how cash machine fraud
  happened: most of it ran through implementation error and management failure
  while the field designed against cryptanalysis. The paper blames a missing
  feedback loop: aviation investigates its accidents and cryptography had no
  equivalent. Once the losses are visible the pattern is economic, and his
  rule is that problems may be expected wherever the party able to protect a
  system is not the one who suffers. That reading began in a conversation with
  the economist Hal Varian, borrowing moral hazard and network externalities
  from economics. The phrasing that travelled is "misaligned incentives", a
  section heading in the 2006 paper with Tyler Moore. The late papers carry
  his name inside other people's work: second to his student Nicholas Boucher
  on Trojan Source, fifth of six behind Ilia Shumailov on model collapse. He
  wrote a standard textbook, and his biographer credits him with catalysing
  the communities that outlived him.
extension: >
  Trojan Source, first-authored by Anderson's student Nicholas Boucher, is the
  sharpest case on this site for enforcing boundaries in infrastructure rather
  than trusting code review: the human reads one program and the compiler
  builds another. The fixes bear that out, and they differ in
  strength: Rust rejects those characters by default, while the GCC warning
  still ends at a human. The move worth copying is to push the check into the
  toolchain wherever the rendered and executed artifact can differ. Its
  precondition is ownership of the build, so it reaches only the compiler
  versions, linters and package resolution an organisation pins, and no
  further into a vendor's. It also buys false confidence, because a build rule
  covers the encodings somebody already named. Anderson's correction is the
  cheaper companion: collect how the losses happened, then check the threat
  model against them. The next rule comes from asking which of those losses a
  build rule could have refused.
reading_review:
  protocol: reading-protocol-v1
  date: 2026-09-20
  verdict: accept-with-edits
  council_transcript: ~/.claude/LIFEOS/MEMORY/COUNCIL/distillery-reading-ross-anderson-20260920-debate/transcript.md
  grounding_pack: _working/ross-anderson/grounding-pack.md
  claims: _working/ross-anderson/reading-claims.md
  dissent: false

limits:
  - headline: The prescription is liability law, and no security leader can enact it
    severity: structural
    elaboration: >
      The 2001 paper reaches for liability dumping, moral hazard and the
      tragedy of the commons, and what follows from that diagnosis is
      regulation: put the cost on the party in a position to act. A security
      executive holds no such instrument. The version available inside a
      company, moving the cost of an incident onto the team that shipped the
      change, needs an executive who can change the scorecard, and it is a
      different and much smaller lever than the one the paper argues for. Read
      the economics as a diagnosis of why a programme keeps failing, and expect
      the remedy to sit above the security organisation.
  - headline: The incentive argument comes from retail banking and centralised state records
    severity: structural
    elaboration: >
      The settings behind the argument are cash machines and points of sale at
      Barclays, a branch network across 23 countries at Standard Chartered, and
      a government plan to centralise medical records. In those settings
      aggregation is a pathology: value and access count rise together and the
      system gets worse. A 2026 reader works on platforms where aggregation is
      the product, and where the party bearing the loss is often a customer who
      never chose the architecture. The mechanism still applies. Those settings
      do not transfer without first asking which party actually pays.
  - headline: Six of the seven frames here belong substantially to someone else
    severity: local
    elaboration: >
      Security economics has Hal Varian in the founding conversation and
      borrows its vocabulary from economics. "Misaligned incentives" is a
      section heading in a paper with Tyler Moore. Model collapse is
      first-authored by Ilia Shumailov with Anderson fifth of six. Trojan
      Source is first-authored by his own student. Anderson's Rule was
      formulated by a journalist and appears nowhere in his book. What the
      record shows him doing best, on his biographer's account, is convening:
      he helped establish several new research areas and catalysed the academic
      communities around them. A citation that credits him alone for any of
      this describes a coiner where the evidence shows a convener and
      co-author.
  - headline: The one clean original does not travel as vocabulary
    severity: local
    elaboration: >
      "Why the threat model was wrong" is the 1993 paper's own section heading
      and the only frame here that is Anderson's alone. It is a sentence, and
      the paper carries 144 citations against 956 and 920 for the two economics
      papers. Nothing in the record shows practitioners using the phrase
      detached from the paper. Treat it as an argument to apply, and expect no
      room to recognise the phrase.
  - headline: The policy writing drew a published rebuttal charging technical error
    severity: local
    elaboration: >
      David Safford of IBM Research answered Anderson's TCPA FAQ in October
      2002 under a section headed "Specific Technical Comments: Ross Anderson's
      TCPA FAQ", whose subheadings read "Incorrectly lumps together TCPA,
      Palladium, and DRM:", "Is full of technical errors:" and "Presents
      speculation as fact:". Safford states in the paper that the
      views are his own and not necessarily IBM's, and his broader three-part
      charge is levelled at three papers together, so only those subheadings
      are aimed at Anderson. The campaigning was part of the work and it used a
      register the research papers did not, which is worth knowing before
      citing the policy writing at the evidentiary standard of the papers.

still_load_bearing_despite: >
  None of that touches the method under the 1993 paper, and a single company
  can run a narrow version of it: count the losses that already happened, then
  hold the threat model up against the count. Most security programmes already
  hold the first half in an incident log nobody reads that way. What they
  cannot hold is the loop the paper argues for, which is public and crosses
  companies. The economics gives the second half its shape, because the
  pattern in real losses tends to be about who pays more than about what is
  hard, and that question can be asked inside one company without waiting for
  a regulator to act. The convening is what a reader can copy most directly,
  and the research communities outlived him. A workshop meeting for
  a twenty-fifth time two years after his death makes the case better than any
  citation count.

adjacent_thinkers:
  - target_slug: david-woods
    display_name: David Woods
    edge_type: parallel
    edge_label: >
      The 1993 paper opens by contrasting cryptosystem design with aviation,
      where accidents are investigated and the findings feed back into
      practice, and concludes that the missing loop is what let a false threat
      model stand. Woods works the same ground from inside resilience
      engineering. Anderson credits no source for the comparison, so this is
      two people arriving at one observation, with no line of descent between
      them.
    strength: primary
  - target_slug: simon-willison
    display_name: Simon Willison
    edge_type: parallel
    edge_label: >
      Two accounts of a channel that carries more authority than its reader
      notices. Willison works the join where a trusted instruction and
      untrusted text reach a model through one input. Trojan Source, first
      authored by Nicholas Boucher with Anderson second, works the join where
      source text renders one way to a reviewer and compiles another, and the
      fixes landed in Rust, GCC and LLVM, leaving review practice untouched.
    strength: primary
  - target_slug: bruce-schneier
    display_name: Bruce Schneier
    edge_type: parallel
    edge_label: >
      Co-author with Anderson on the 2021 client-side scanning paper and on its
      1997 key-escrow predecessor, and the source of the clearest third-party
      statement of priority available: "He was the first person to understand
      that security problems are often actually economic problems." Schneier
      credits Anderson with creating both the economics and the human-behaviour
      workshops and describes his own part as helping.
    strength: primary
  - target_slug: hal-varian
    display_name: Hal Varian
    edge_type: antecedent
    edge_label: >
      The economist on the other side of the founding conversation. Varian
      suggested that the liability problem in online payments was classic moral
      hazard and handed Anderson a copy of Information Rules; the 2001 paper
      credits him two pages in, and the two convened the first Workshop on the
      Economics of Information Security at Berkeley in June 2002.
    strength: secondary
  - target_slug: david-safford
    display_name: David Safford
    edge_type: critiques
    edge_label: >
      "Clarifying Misinformation on TCPA" (October 2002) answers Anderson's
      TCPA FAQ directly, under subheadings reading "Is full of technical
      errors:" and "Presents speculation as fact:". Safford was at IBM Research
      and discloses it in the paper.
    strength: secondary
  - target_slug: ian-levy-crispin-robinson
    display_name: Ian Levy and Crispin Robinson
    edge_type: parallel
    edge_label: >
      The counterposition on client-side scanning, from the technical directors
      of the NCSC and of GCHQ cryptanalysis. Their 2022 paper argues the case
      the fourteen-author paper Anderson co-wrote argues against, cites that
      paper as its first reference, and never engages him in the argument text.
      He replied by name three months later, so the exchange is documented in
      both directions, and its target is a paper with fourteen authors.
    strength: secondary
  - target_slug: kelly-shortridge
    display_name: Kelly Shortridge
    edge_type: parallel
    edge_label: >
      Shortridge applies the economic argument to the defender's own program.
      "From Lemons to Peaches" (2022) treats security spending as an
      investment whose return has to survive a successful attack, and her
      essay on security obstructionism locates an incentive problem inside
      the security team itself: controls that, in her account, persist for
      the outputs, control and status they produce.
    strength: secondary

further_in:
  start_here: '"Why Cryptosystems Fail" (CCS, 1993). Thirteen pages, and the whole method is in them.'
  then_read:
    - '"Why Information Security is Hard: An Economic Perspective" (ACSAC, December 2001)'
    - '"The Economics of Information Security" (Science, 2006, with Tyler Moore)'
    - '"Trojan Source: Invisible Vulnerabilities" (USENIX Security, 2023, with Nicholas Boucher)'
  if_you_want_depth: >
    *Security Engineering*, third edition (Wiley, 2020). All 29 chapters are
    free from his archived Cambridge page, after the 42-month embargo he said
    the publisher insisted on.
  if_you_want_breadth: >
    Frank Stajano's Royal Society biographical memoir for the career and the
    community building, and David Safford's "Clarifying Misinformation on
    TCPA" (2002) for the sharpest published argument against him.
---
