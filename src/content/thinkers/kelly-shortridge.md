---
slug: kelly-shortridge
name: Kelly Shortridge
canonical_url: https://kellyshortridge.com
active_years: 2015–present
primary_domains:
  - software-security
  - resilience
  - behavioral-economics
status: alive-active
inclusion_rationale: >
  A decade of essays at kellyshortridge.com arguing one position in economic
  terms: defenders misallocate effort, and design that changes the economics
  is the fix. The vocabulary case rests on three frames, and only one of them
  is hers alone. Security Obstructionism (2022) is credited to her by name by
  Matt Johansen, Barnes Tech and Kolide, and Johansen extends it. The Ice
  Cream Cone Hierarchy of Security Solutions organizes a 2025 outside essay,
  and its ordering closely parallels the system safety design order of
  precedence. Security chaos engineering is in outside use and is
  shared with Aaron Rinehart, whose ChaoSlingr her own 2022 paper dates to
  2017. Drafting corrected two readings the inclusion Council worked from:
  her 2020 post claims #yolosec as her own coinage, and her SecObs essay cites
  Rasmussen (1997) and a 2017 resilience paper Woods co-wrote, so her
  resilience lineage runs through ecology in the primers and touches safety
  science elsewhere. Every edge to the resilience-engineering pages stays
  parallel. The Council also named the Distributed, Immutable, Ephemeral triad as Sounil Yu's, and it appears
  nowhere here. Inclusion Council 5 to 0, 2026-09-28. mode-a: she names
  prolifically, so the page coins nothing.
thinker_type: mixed
doctrine_mode: mode-a
has_long_read: false
last_updated: 2026-09-28

tagline: The security product leader who treats defense as an investment, argues that systems designed to absorb attacks return more than trying to prevent every one, and names Security Obstructionism, the effort she says persists for control and status.
thirty_second_take: >
  Shortridge writes that information security "is an economic problem" and
  that "most security efforts are hilariously inefficient." Her 2022 essay named Security Obstructionism, the tools, policies
  and practices that "impede or prevent progress for security's
  (speculative) sake," and argued that they persist because they produce
  visible outputs and control over the organization. Her alternative starts
  from the premise that attacks will succeed: build systems that absorb an
  attack and recover, prefer controls designed into the system over controls
  that depend on people following guidance, and test security assumptions by
  experiment before an attacker does. That experimental practice is security
  chaos engineering, the subject of a 2020 O'Reilly report with Aaron
  Rinehart as first author and a 2023 book with Shortridge as first author,
  whose case studies, by her account, he collected.

background: >
  Studied economics at Vassar and began as an investment banking analyst at
  Teneo, covering the data security and analytics sectors. She co-founded
  the security startup IperLane, which was acquired, and her Fastly bio
  records an exit to CrowdStrike. Product roles at BAE
  Systems Applied Intelligence and SecurityScorecard followed, then vice
  president of product strategy at Capsule8 by 2019. At Fastly from 2021 she
  led the security business and served in the Office of the CTO before being
  announced as Chief Product Officer in December 2025. She sits on the
  editorial board of ACM Queue. A 2017 bio describes her research as applying
  behavioral economics and behavioral game theory to information security,
  and her blog runs from 2015.
why_they_matter_as_a_thinker: >
  Her terms carry an argument about incentives, so a practitioner can turn
  them on their own team. Matt Johansen calls SecObs "a term I love coined by
  Kelly Shortridge" and extends it into why security teams obstruct; Barnes
  Tech and Kolide credit it as well, and a 2025 essay on application-security
  busywork is organized around her Ice Cream Cone. The economic register runs
  through the corpus: prospect theory and choice architecture for
  defenders in 2016 and 2017, behavioral game theory at Black Hat in 2017,
  the cost of attacker friction and of action bias in incident response in
  two 2022 papers with Josiah Dykstra as first author, and the return on
  security spending in "From Lemons to Peaches".

thesis: >
  Traditional information security, in Shortridge's account, "presents a
  poor ROI": its payoff arrives only when an attack is prevented, and attacks
  are inevitable. Security Obstructionism is her name for the effort that
  persists anyway, which she attributes to the outputs, control and status
  it yields inside the organization and to a definition of "secure" vague
  enough that nobody can check it. Her remedy is to spend where the return survives a
  successful attack: systems designed to absorb an attack and reorganize,
  controls built into the design ahead of controls that rely on training and
  policy, security programs that software engineers and architects build
  "in parallel," and experiments that test how those controls behave in
  practice. Her early account of resilience comes from ecology (C.S. Holling,
  and Walker, Holling, Carpenter and Kinzig, 2004).
working_line: >
  Resilience in security means a flexible system that can absorb an attack
  and reorganize around the threat. ("Resilience in Security 101,"
  kellyshortridge.com, 2020.)

named_frames:
  - concept_slug: security-obstructionism
    display_name: Security Obstructionism (SecObs)
    one_line_gloss: >
      Her name, introduced in a 2022 essay, for "a category of tools,
      policies, and practices whose outcome is to impede or prevent progress
      for security's (speculative) sake." The complaint behind it is older,
      and the essay places the term against "the dreaded Department of No";
      the name is hers, and so is the essay's argument that it persists for
      control and status. Matt Johansen, Barnes Tech and Kolide credit the term to her.
    attribution_kind: original
    primary_author: kelly-shortridge
    source_link: https://kellyshortridge.com/blog/posts/the-security-obstructionism-secobs-market/
    render_tier: foreground
  - concept_slug: ice-cream-cone-hierarchy
    display_name: Ice Cream Cone Hierarchy of Security Solutions
    one_line_gloss: >
      Security solutions ranked from most to least effective: eliminate
      hazards by design, substitute less hazardous methods or materials,
      incorporate safety devices and guards, provide warning and awareness
      systems, and, "last and least effective," administrative controls. The
      ordering closely parallels the system safety design order of precedence
      in MIL-STD-882E and the NIOSH hierarchy of controls, and a 2025 essay
      that uses the cone says it is drawn from the hierarchy of controls. She
      named it and applied it to software security in her 2023 writing.
    attribution_kind: extended
    primary_author: kelly-shortridge
    derived_from: hierarchy-of-controls
    source_link: https://kellyshortridge.com/blog/posts/security-by-design-default-software-resilience/
    render_tier: foreground
  - concept_slug: security-chaos-engineering
    display_name: Security chaos engineering
    one_line_gloss: >
      Continual experiments that inject adverse conditions to verify that a
      system's security behaves the way its builders believe. Her 2022 paper
      says it "extends chaos engineering ... to the domain of security."
      Aaron Rinehart released ChaoSlingr, a security chaos engineering tool,
      at UnitedHealth Group, and her own paper cites it as 2017; her 2017
      resilience keynote separately proposed failure injection in the manner
      of Netflix's Chaos Monkey. The 2020 O'Reilly report puts Rinehart's
      name first and the 2023 book puts hers first.
    attribution_kind: co-authored
    primary_author: aaron-rinehart
    co_originators:
      - slug: kelly-shortridge
        role: second author of the 2020 report and first author of the 2023 book, Security Chaos Engineering
    derived_from: chaos-engineering
    source_link: https://kellyshortridge.com/book.html
    render_tier: foreground
  - concept_slug: fomosec
    display_name: FOMOsec
    one_line_gloss: >
      Security strategy driven by fear of missing out, "one that frightens
      people into misallocating resources towards what makes them feel
      better." Named in 2020 as the opposite of YOLOsec, a strategy that
      "embodies the 'you only live once' mentality," which her post says she
      introduced in a 2017 Black Hat talk.
    attribution_kind: original
    primary_author: kelly-shortridge
    source_link: https://kellyshortridge.com/blog/posts/on-yolosec-and-fomosec/
    render_tier: deep
  - concept_slug: effort-investment-portfolio
    display_name: Effort Investment Portfolio
    one_line_gloss: >
      Finite effort treated as capital: the concept "captures the need to
      balance our 'effort capital' across activities to best achieve our
      objectives." Set out in the 2023 book, where effort spent earlier in
      delivery is argued to reduce the effort an incident later demands.
    attribution_kind: original
    primary_author: kelly-shortridge
    source_link: https://kellyshortridge.com/blog/posts/security-chaos-engineering-sustaining-software-systems-resilience-cliff-notes/
    render_tier: deep
  - concept_slug: robustness-adaptability-transformability
    display_name: Resilience as robustness, adaptability and transformability
    one_line_gloss: >
      Resilience in security as three characteristics: robustness,
      withstanding a negative event; adaptability, managing the system's
      response to it; and transformability, reorganizing the system when
      assumptions change. "Robustness does not equal resilience," she writes.
      She recommends Walker, Holling, Carpenter and Kinzig (2004) as the
      seminal paper; its three terms are resilience, adaptability and
      transformability, and her version makes resilience the whole, with
      robustness as its first part.
    attribution_kind: extended
    primary_author: kelly-shortridge
    co_originators:
      - slug: brian-walker
        role: first author, "Resilience, Adaptability and Transformability in Social-ecological Systems" (2004)
      - slug: c-s-holling
        role: co-author of the 2004 paper; his 1973 ecological work is the source her 2017 keynote credits
      - slug: stephen-carpenter
        role: co-author of the 2004 paper
      - slug: ann-kinzig
        role: co-author of the 2004 paper
    derived_from: socio-ecological-resilience
    source_link: https://kellyshortridge.com/blog/posts/resilience-in-security-101/
    render_tier: deep

body_of_work:
  - title: The Security Obstructionism (SecObs) Market
    type: essay
    year: 2022
    link: https://kellyshortridge.com/blog/posts/the-security-obstructionism-secobs-market/
    editorial_note: >
      The essay that named SecObs, with its list of "Indicators of
      Obstructionism" and its argument about outputs, control and status.
      Start here.
    read_first: true
    canonical: true
  - title: 'Security Chaos Engineering: Sustaining Resilience in Software and Systems'
    type: book
    year: 2023
    link: https://kellyshortridge.com/book.html
    editorial_note: >
      O'Reilly, 430 pages, with Shortridge and Aaron Rinehart on the cover in
      that order. Her own page credits the book to her, with case studies
      collected by Rinehart. The Ice Cream Cone and the Effort Investment
      Portfolio are set out here.
    canonical: true
  - title: Security Chaos Engineering (report)
    type: book
    year: 2020
    link: https://books.google.com/books/about/Security_Chaos_Engineering.html?id=k4cjzgEACAAJ
    editorial_note: >
      A 90-page O'Reilly report by Aaron Rinehart and Kelly Shortridge, in
      that byline order, with case studies from two enterprises. A different
      and much shorter work than the 2023 book of the same main title.
  - title: The Red Pill of Resilience in InfoSec
    type: talk
    year: 2017
    link: https://kellyshortridge.com/blog/posts/red-pill-of-resilience-infosec/
    editorial_note: >
      The full text of a 2017 keynote, posted in 2018. It builds resilience
      on Holling's ecology and proposes failure injection as a security test.
  - title: 'From Lemons to Peaches: Improving Security ROI through Security Chaos Engineering'
    type: paper
    year: 2022
    link: https://arxiv.org/abs/2307.03796
    editorial_note: >
      Two pages at IEEE SecDev, sole-authored. The economic case in its most
      compact form: prevention-only security pays off only when an attack is
      stopped, so the return lies in reducing what an attack costs.
  - title: On YOLOsec and FOMOsec
    type: essay
    year: 2020
    link: https://kellyshortridge.com/blog/posts/on-yolosec-and-fomosec/
    editorial_note: >
      Two opposite ways to misallocate security effort, recklessness and fear.
  - title: 'Sludge for Good: Slowing and Imposing Costs on Cyber Attackers'
    type: paper
    year: 2022
    link: https://arxiv.org/abs/2211.16626
    editorial_note: >
      With Josiah Dykstra as first author, Jamie Met and Douglas Hough. Turns
      deliberate friction against attackers, to consume their time and
      resources.
  - title: 'Big Game Theory Hunting: The Peculiarities of Human Behavior in the InfoSec Game'
    type: talk
    year: 2017
    link: https://www.blackhat.com/docs/us-17/wednesday/us-17-Shortridge-Big-Game-Theory-Hunting-The-Peculiarities-Of-Human-Behavior-In-The-Infosec-Game.pdf
    editorial_note: >
      Black Hat USA slides applying behavioral game theory to defenders, and
      the talk where, by her account, she introduced decision trees for
      modeling which path an attacker takes next. The tool Deciduous, built with Ryan Petrich, came
      in 2021.
  - title: The Basics of Software Resilience and Security Chaos Engineering
    type: essay
    year: 2024
    link: https://kellyshortridge.com/blog/posts/security-chaos-engineering-sustaining-software-systems-resilience-cliff-notes/
    editorial_note: >
      Her free chapter-by-chapter summary of the 2023 book, and the quickest
      route to its vocabulary.

reading: >
  Shortridge weighs a security program as an investment, and the return that
  counts is what remains after an attack succeeds. Prevention, she argues, pays
  only when an attack is stopped, so she moves effort toward "a flexible system
  that can absorb an attack and reorganize around the threat." Security
  Obstructionism names where part of the budget goes instead: tools, policies
  and practices that impede progress "for security's (speculative) sake" and, in
  her account, persist because they yield outputs, control and status. The Ice
  Cream Cone, her name for a ranking that closely parallels the system-safety
  order of precedence, puts hazards designed out at the top and administrative
  controls "last and least effective." Security chaos engineering, a practice
  she shares with Aaron Rinehart, tests by experiment whether the controls
  behave as their builders believe. Her hazard is an opponent, and the premise
  she states is that "attackers will adapt in response to your mitigations."
extension: >
  Read beside the cone, SecObs gives a reason a program drifts toward its
  bottom: a guideline or a review yields countable outputs, and a hazard
  designed out leaves nothing to point to. Her definition also names tools, so
  obstruction can sit in the guard tier too. A sort by tier then asks what share
  of a program rests on people complying, and which higher-tier controls mainly
  produce a gate. The tiers hold per attack path, because an attacker whose
  route was designed out tries another. So the sort has to be rerun on the
  attacker's next path, which her 2017 decision trees drew. That needs engineers
  who own the design, and it inherits the tree's blind spot, a path nobody
  pictured. Her experiments, which compare how a system behaves with what its
  builders predicted, are aimed at that gap.

reading_review:
  protocol: reading-protocol-v1
  date: 2026-09-28
  verdict: accept-with-edits
  council_transcript: ~/.claude/LIFEOS/MEMORY/COUNCIL/distillery-reading-kelly-shortridge-20260928-debate/transcript.md
  grounding_pack: _working/kelly-shortridge/grounding-pack.md
  claims: _working/kelly-shortridge/reading-claims.md
  dissent: false

limits:
  - headline: The safety ordering the cone parallels was built for hazards that do not adapt
    severity: structural
    elaboration: >
      This limit is the site's reading. The ordering she applies to security
      closely parallels safety engineering's, where eliminating a hazard by
      design removes it. Her own premise is that "attackers will adapt in
      response to your mitigations," and her 2017 decision trees asked "What
      new path will the attacker take". The cone, as her posts state it,
      ranks a control by how it fares against a fixed hazard and carries no
      step for where the attacker goes next.
  - headline: Safety-science terms, and an ordering that parallels safety engineering's, go uncredited in the posts
    severity: local
    elaboration: >
      The cone's five steps closely parallel the MIL-STD-882E design order of precedence
      and the NIOSH hierarchy of controls, and the posts that state it name
      neither. Her 2024 book summary uses "work-as-imagined" and "safety
      boundaries" and names no source for either. Elsewhere she credits
      her sources: the SUX Rule post credits Chromium's Rule of Two, the
      resilience primers credit Holling and the 2004 Walker paper, and she
      writes that the book "has like nine million citations". Whether the
      book itself credits the cone's ordering is not established here.
  - headline: The motive SecObs assigns to security teams is argued from a career her bios place outside them
    severity: structural
    elaboration: >
      This limit is the site's reading. Every job in her published bios is on
      the vendor or banking side: an analyst covering security at Teneo, a
      startup co-founder, product roles at BAE Systems and SecurityScorecard,
      product strategy at Capsule8, and at Fastly the security business and
      then the chief product role. None of them is a job on an in-house
      security team, and she wrote the SecObs diagnosis of the control and
      status behind obstruction from a career that, as those bios record it,
      ran outside those teams.
  - headline: One reviewer finds the 2023 book more aspirational than practical
    severity: local
    elaboration: >
      Mac Chaffee's 2023 review is strongly positive and names her as the
      primary author. His single complaint is that the book "feels a bit
      more aspirational than practical." It is a reservation from an
      admirer, and no published critique that argues against her was found.
  - headline: The return on security chaos engineering is argued and unmeasured
    severity: local
    elaboration: >
      "From Lemons to Peaches" makes the return-on-investment case in two
      pages and reports no measurements of its own. The term's spread
      through a conference session and a book review shows that
      practitioners took it up, which is a different fact from evidence that the
      programs pay back what the paper argues they should.
  - headline: The market size given for SecObs is illustrative
    severity: local
    elaboration: >
      The SecObs essay sizes the market at "at least $10 billion," and the
      footnote behind the figure reads "It feels reasonable that at least ~6%
      of that spending is in security obstructionism." Read it as a category
      argument with an illustrative number.

still_load_bearing_despite: >
  The question SecObs puts to a security program costs nothing to ask and is
  hard to dodge: which of these controls produces an outcome anyone can
  check, and which produces activity and a gate? The qualifier in her
  definition keeps the question fair: obstruction "for security's
  (speculative) sake" leaves out a gate that answers a demonstrated risk,
  and her essay counts a product as broken when it does not meet relevant
  compliance standards. The cone survives its limits on a narrower footing:
  her summary holds that "Security solutions become less reliable as their
  dependence on human behavior increases," and that claim applies on each
  path an attacker tries.

adjacent_thinkers:
  - target_slug: nicole-forsgren
    display_name: Nicole Forsgren
    edge_type: parallel
    edge_label: >
      Co-presented "Controlled Chaos: The Inevitable Marriage of DevOps &
      Security" at Black Hat USA 2019, which argued for time to recovery as a
      security metric and for chaos experiments on security controls. The
      SecObs essay cites Accelerate and the SPACE paper, both with Forsgren
      as first author, for "outputs aren't outcomes", and points the
      distinction at security programs.
    strength: primary
  - target_slug: erik-hollnagel
    display_name: Erik Hollnagel
    edge_type: parallel
    edge_label: >
      Her 2024 book summary describes the gap between "work-as-practiced" and
      "work-as-imagined", a variant of the work-as-imagined and work-as-done
      pair Hollnagel carried through resilience engineering, and names no
      source. What her version adds is an adversary who exploits
      the gap.
    strength: primary
  - target_slug: ross-anderson
    display_name: Ross Anderson
    edge_type: parallel
    edge_label: >
      Both treat security as economics, from different ends. Anderson's
      security economics explains failure through externalities, asymmetric
      information and guardians who do not bear the loss. Shortridge prices
      the defender's own spending: what a program returns once prevention
      fails, and what obstruction costs the organization that pays for it.
    strength: primary
  - target_slug: david-woods
    display_name: David Woods
    edge_type: parallel
    edge_label: >
      The SecObs essay's claim that "Security is treated as a facet of
      resilience" cites "Features of resilience" (2017), a paper Woods
      co-wrote with Connelly, Linkov and others. Her own primers build
      resilience from ecology, so the two meet on how systems absorb surprise
      from different starting points.
    strength: secondary
  - target_slug: charity-majors
    display_name: Charity Majors
    edge_type: parallel
    edge_label: >
      Both treat failure in production as certain and build practice around
      learning from it. Majors argues for testing against real traffic behind
      guardrails; Shortridge argues for injecting attack conditions to test
      security controls.
    strength: secondary

further_in:
  start_here: '"The Security Obstructionism (SecObs) Market" (2022).'
  then_read:
    - '"Resilience in Security 101" (2020)'
    - '"From Lemons to Peaches" (IEEE SecDev, 2022)'
    - '"The Basics of Software Resilience and Security Chaos Engineering" (2024), her free summary of the 2023 book'
  if_you_want_depth: >
    "Security Chaos Engineering: Sustaining Resilience in Software and
    Systems" (2023, with Aaron Rinehart; by her account he collected its case
    studies), and
    "Big Game Theory Hunting" (Black Hat USA, 2017) for the behavioral
    economics she started from.
  if_you_want_breadth: >
    Matt Johansen's "Overcoming Security Obstructionism" (2023). Walker, Holling, Carpenter and Kinzig,
    "Resilience, Adaptability and Transformability in Social-ecological
    Systems" (2004), is the ecology behind her resilience triad.
---
