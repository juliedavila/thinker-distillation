---
slug: nancy-leveson
name: Nancy Leveson
canonical_url: https://aeroastro.mit.edu/people/nancy-leveson/
active_years: 1980–present
primary_domains:
  - safety-science
  - software-engineering
  - incident-analysis
status: alive-active
inclusion_rationale: >
  Four decades of work, first as a computer science professor at Irvine and
  Washington and at MIT since 1999. Inclusion rests on STAMP and the two
  methods built on it, STPA and CAST, which have outside use at volume: a
  2022 scoping review by four authors outside her group counts 321 eligible
  documents since 2003, Tim Falzone and Ben Treynor Sloss describe Google
  SRE adopting the framework, and Lorin Hochstein engages it from software
  operations, having by his own account never used STPA or CAST. STAMP is filed `extended` with
  Rasmussen and Svedung as co-originators, because her 2004 paper says it is
  built on their framework. STPA is filed `co-authored` with Nicolas Dulac
  and John Thomas; the Council split three ways on this frame (original,
  extended, co-authored). The 2005 paper with Dulac, read on 2026-10-10,
  settles it: the two write "We have developed a new STAMP-based hazard
  analysis technique, called STPA". CAST is `extended` with no date.
  STPA-Sec is William Young's as first author. Safety-III sits in the deep
  tier, because her own text says the approach is not new. Software safety
  is a field and gets no frame; the AIAA citation is quoted with
  attribution. The Hollnagel page said she co-founded resilience
  engineering; the ledger supports co-editing the 2006 anthology, so the
  merge request that adds this page narrows that sentence and the matching
  limit headline there, and raises the Hollnagel page's Leveson edge to
  primary. The page leads with STAMP and
  STPA, where the uptake is, and keeps the Safety-III dispute, which the
  Hollnagel page already carries, to one limit and one critic edge.
  Inclusion Council 5 to 0, 2026-10-09. mode-a: she names her own frames,
  so the page coins none.
thinker_type: mixed
doctrine_mode: mode-a
has_long_read: false
last_updated: 2026-10-09

tagline: >
  The MIT safety engineer who treats safety as a control problem, and whose
  STAMP accident model underlies two methods, STPA for hazard analysis and
  CAST for accident analysis.
thirty_second_take: >
  Leveson's STAMP model says accidents in complex systems "result from
  inadequate control or enforcement of safety-related constraints" on how a
  system is developed, designed and operated. A loss can happen with nothing
  broken: in one of her examples the components, "including the software,
  worked as specified but together they created a hazardous system state."
  So the analysis asks why the control structure failed to enforce a
  constraint, and prevention means designing one that will. Two methods
  rest on the model. STPA, which she and Nicolas Dulac presented in 2005
  as "a new STAMP-based hazard analysis technique", and which she later wrote
  up with John Thomas in a 2018 handbook, can look for unsafe control actions from early concept
  work on.
  CAST, the subject of her 2019 handbook, analyses accidents without trying to assign
  blame. William Young, with her as second author, extended STPA to
  security. She came to this from software: she investigated the Therac-25
  accidents with Clark Turner, and the 1986 Knight and Leveson experiment
  concluded that, for its programs, versions written independently from one
  specification did not fail independently.

background: >
  She took her degrees, in math, management and computer science, at UCLA,
  with the PhD in 1980, and spent her early career as a computer science
  professor at the University of California, Irvine. In 1993 she moved to
  the University of Washington as Boeing Professor of Computer Science and
  Engineering, and she has been at MIT since 1999, where she is Professor of
  Aeronautics and Astronautics and of Engineering Systems and holds the
  Jerome C. Hunsaker chair. By her own account she and her students wrote a
  formal requirements specification for the TCAS II collision avoidance
  system that the FAA adopted as its official specification, and she
  started a company, Safeware Engineering, in 1995. She was elected to the
  National Academy of Engineering in 2000 and received the ACM Allen Newell
  Award in 1999. Her 1995 AIAA Information Systems Award cites her for
  "developing the field of software safety"; her home page says she
  "started a new area of research, software safety."
why_they_matter_as_a_thinker: >
  STAMP gives an engineer a question that still has an answer when every
  part did what its specification said: which constraint should have held,
  and why did the control structure fail to enforce it. The question
  travels well past her group. A 2022 scoping review by four authors
  outside it counts 321 documents on STAMP and its methods, Google SRE
  reports finding "hundreds of scenarios" with STPA at "engineer-weeks of
  work per analysis", and Lorin Hochstein, who by his account had never
  used STPA or CAST, argues with the model from a software-operations
  seat. Her 2004 paper
  also draws a line Hochstein praises: reliability is a
  component meeting its specification, while safety can only be judged in
  the context of the whole system.

thesis: >
  In Leveson's account, safety is an emergent property of a system's
  interacting components, and reliability is a property of one component
  measured against its specification. The two come apart in system
  accidents, where parts that worked as specified combine into a
  hazardous state. Of one such loss, a reactor example, her 2004 paper
  says "Merely increasing the reliability of the individual components or
  protecting against their failure would not have prevented the loss." By
  the same paper's account, event models and analysis methods
  "that focus on classic types of failure events will not apply to
  software." STAMP treats an accident as a failure to enforce a
  constraint, asks why the control structure was ineffective, and puts
  prevention into designing a control structure that enforces the necessary
  constraints across development and operation (a model built, by her own
  credit, on Rasmussen and Svedung's framework and on Ashby's control
  concepts).
working_line: >
  Safety is a control problem: an accident is a constraint the system did
  not enforce, and parts that each worked as specified can still combine
  into a loss. (Paraphrased from "A New Accident Model for Engineering Safer
  Systems", 2004.)

named_frames:
  - concept_slug: stamp
    display_name: STAMP (Systems-Theoretic Accident Model and Processes)
    one_line_gloss: >
      An accident model in which safety is a control problem and "the most
      basic concept" is "a constraint, rather than an event": losses come
      from inadequate control or enforcement of safety-related constraints,
      including losses in which no component failed. In the paper's Mars
      Polar Lander example, one of the system accidents it names, "the
      software did not adequately control the descent speed of the
      spacecraft", having "misinterpreted noise from a Hall effect sensor" as
      a sign that the spacecraft had landed. The 2004 paper says it
      is built on Rasmussen and Svedung's framework, takes its control
      concepts from Ashby, Conant and Ashby, and Checkland, and credits the
      term system accident to Perrow. It cites a 2003 STAMP paper with
      Daouk, Dulac and Marais as submitted.
    attribution_kind: extended
    primary_author: nancy-leveson
    co_originators:
      - slug: jens-rasmussen
        role: 'with Inge Svedung, author of the risk-management framework "upon which STAMP is built" (Rasmussen and Svedung, 2000)'
      - slug: inge-svedung
        role: 'with Jens Rasmussen, author of the risk-management framework "upon which STAMP is built" (Rasmussen and Svedung, 2000)'
    source_link: https://web.archive.org/web/20250201091535id_/http://sunnyday.mit.edu/accidents/safetyscience-single.pdf
    render_tier: foreground
  - concept_slug: stpa
    display_name: STPA (System-Theoretic Process Analysis)
    one_line_gloss: >
      A hazard analysis built on STAMP. The analyst models the system as a
      hierarchical control structure of feedback loops, then looks for
      unsafe control actions, which the handbook defines as control actions
      that "in a particular context and worst-case environment, will lead to
      a hazard." Each controller acts on a process model, the term the
      handbook uses for its internal beliefs about what it controls.
      Feedback may update that model in part, and a process model
      inconsistent with reality can lead to unsafe control actions. It can start in early concept analysis, where it helps
      identify safety requirements and constraints. Leveson
      and Nicolas Dulac's 2005 paper calls it "a new STAMP-based hazard
      analysis technique, called STPA (STamP Analysis)"; the handbook she
      wrote with John Thomas came in 2018.
    attribution_kind: co-authored
    primary_author: nancy-leveson
    co_originators:
      - slug: nicolas-dulac
        role: 'second author of "Safety and Risk-Driven Design in Complex Systems-of-Systems" (AIAA, 2005), whose authors write "We have developed a new STAMP-based hazard analysis technique, called STPA"'
      - slug: john-thomas
        role: co-author of the STPA Handbook (2018)
    source_link: https://web.archive.org/web/20241217151339id_/https://psas.scripts.mit.edu/home/get_file.php?name=STPA_handbook.pdf
    derived_from: stamp
    render_tier: foreground
  - concept_slug: cast
    display_name: CAST (Causal Analysis based on System Theory)
    one_line_gloss: >
      Accident analysis built on STAMP. Her 2019 handbook says it "does not
      attempt to assign blame" and looks for why the structures in place to
      prevent the events "were not successful", and its recommendations
      focus on strengthening those control structures. Google SRE's account
      of adopting STAMP names it, with STPA, among the methods its teams
      use, and Google SRE's STAMP page lists a talk on a CAST analysis of a
      Google Maps incident.
    attribution_kind: extended
    primary_author: nancy-leveson
    source_link: https://web.archive.org/web/20250109024513id_/http://sunnyday.mit.edu/CAST-Handbook.pdf
    derived_from: stamp
    render_tier: foreground
  - concept_slug: stpa-sec
    display_name: STPA-Sec
    one_line_gloss: >
      William Young and Leveson's extension of STPA "to include security
      analysis" (Communications of the ACM, 2014). It reframes security as a
      general loss-prevention problem, regardless of the actor's intent, and
      holds that focusing
      on adversaries "too early in the process" limits a security
      assessment's strategic value. The paper says it is "only now being
      applied to cybersecurity problems, but is showing promise in these
      case studies."
    attribution_kind: co-authored
    primary_author: william-young
    co_originators:
      - slug: nancy-leveson
        role: second author of "An Integrated Approach to Safety and Security Based on Systems Theory" (CACM, 2014)
    source_link: https://cacm.acm.org/opinion/an-integrated-approach-to-safety-and-security-based-on-systems-theory/
    derived_from: stpa
    render_tier: foreground
  - concept_slug: safety-iii
    display_name: Safety-III
    one_line_gloss: >
      Her 2020 label for a systems approach to safety, set against Erik
      Hollnagel's Safety-II. By her own account the approach "is not new",
      and Safety-III "incorporates and extends" the System Safety practice
      she dates to at least World War II.
    attribution_kind: extended
    primary_author: nancy-leveson
    derived_from: system-safety
    source_link: https://web.archive.org/web/20240917123041id_/http://sunnyday.mit.edu/safety-3.pdf
    render_tier: deep

body_of_work:
  - title: A New Accident Model for Engineering Safer Systems
    type: paper
    year: 2004
    link: https://web.archive.org/web/20250201091535id_/http://sunnyday.mit.edu/accidents/safetyscience-single.pdf
    editorial_note: >
      In Safety Science, sole-authored. STAMP with its credits to Rasmussen and Svedung and the safety-versus-reliability
      distinction. Start here.
    read_first: true
    canonical: true
  - title: 'Engineering a Safer World: Systems Thinking Applied to Safety'
    type: book
    year: 2012
    link: https://doi.org/10.7551/mitpress/8179.001.0001
    editorial_note: >
      MIT Press. The book the STPA Handbook points readers to for STAMP.
    canonical: true
  - title: STPA Handbook
    type: book
    year: 2018
    link: https://web.archive.org/web/20241217151339id_/https://psas.scripts.mit.edu/home/get_file.php?name=STPA_handbook.pdf
    editorial_note: >
      With John Thomas, free, and written for "those interested in using
      STPA on real systems". Its reviewers came from Ford, Boeing, Akamai,
      FedEx, the US Air Force and the UK National Cyber Security Centre,
      among others.
  - title: 'CAST Handbook: How to Learn More from Incidents and Accidents'
    type: book
    year: 2019
    link: https://web.archive.org/web/20250109024513id_/http://sunnyday.mit.edu/CAST-Handbook.pdf
    editorial_note: >
      Free. The accident-analysis method, for the reader who runs
      post-incident reviews.
  - title: An Investigation of the Therac-25 Accidents
    type: paper
    year: 1993
    link: https://doi.org/10.1109/MC.1993.274940
    editorial_note: >
      With Clark Turner, in IEEE Computer. On the Therac-25 accelerator's
      "six massive radiation overdoses" between 1985 and 1987, which the
      abstract calls "software-related".
  - title: An Experimental Evaluation of the Assumption of Independence in Multiversion Programming
    type: paper
    year: 1986
    link: https://doi.org/10.1109/TSE.1986.6312924
    editorial_note: >
      John Knight and Leveson, in IEEE Transactions on Software Engineering.
      Twenty-seven versions of one program, written independently from the
      same specification, and the authors concluded that "the assumption of
      independence of failures did not hold" for their programs. Read their
      1990 reply, "A Reply to the Criticisms of the Knight & Leveson
      Experiment", with it.
  - title: 'Safeware: System Safety and Computers'
    type: book
    year: 1995
    editorial_note: >
      Addison-Wesley. The earliest of the three books her own bio lists.
  - title: An Integrated Approach to Safety and Security Based on Systems Theory
    type: paper
    year: 2014
    link: https://cacm.acm.org/opinion/an-integrated-approach-to-safety-and-security-based-on-systems-theory/
    editorial_note: >
      William Young and Leveson, in Communications of the ACM. STPA-Sec, and
      the short read for a security leader.
  - title: 'Safety III: A Systems Approach to Safety and Resilience'
    type: paper
    year: 2020
    link: https://web.archive.org/web/20240917123041id_/http://sunnyday.mit.edu/safety-3.pdf
    editorial_note: >
      An MIT white paper against Hollnagel's account of Safety-I. Read it
      with his unpublished reply, "The Folly of Safety-III".
  - title: An Introduction to System Safety Engineering
    type: book
    year: 2023
    editorial_note: >
      MIT Press, sole-authored.

reading: >
  Leveson asks what a system failed to enforce, and sets STAMP against what the
  STPA Handbook calls "chain-of-failure-events" models. In STAMP, which she says
  is built on Rasmussen and Svedung's framework, the basic unit is a constraint,
  and an accident comes from inadequate control or enforcement of safety-related
  constraints, even when every component worked as specified. By her 2004
  account most software-related accidents had been of this kind. In her view,
  safety belongs to the interacting system, and reliability to one component
  judged against its specification. STPA can apply the model from early concept
  work: draw the control structure, then search for control actions that are
  unsafe in a particular context. CAST applies it after a loss, asking why the
  preventive structures did not work, without trying to assign blame. William
  Young and Leveson extend STPA to security, treating a loss alike whatever the
  actor intended and deferring the adversary on purpose.
extension: >
  In STPA's terms, access provisioning is a controller and each grant a
  control action. Her handbook names four ways a control action can be unsafe:
  not provided; provided when it causes a hazard; provided too early, too late
  or out of order; stopped too soon or applied too long. An authorization
  review checks only the second. The other three can occur with every
  component in specification: a revocation never sent, a grant issued before
  its check returns, emergency access that outlives the emergency. On this
  site's reading, her Mars Polar Lander case is a timing failure: the software
  shut down the descent engines on a false landing signal. Writing all four
  into the access spec makes each checkable, and an attacker who can delay or
  forge the feedback can steer the controller into any of them. Hochstein
  doubts anyone can sketch the whole control structure in a context like his,
  so the analysis covers only the paths someone drew.
reading_review:
  protocol: reading-protocol-v1
  date: 2026-10-09
  verdict: accept-with-edits
  council_transcript: ~/.claude/LIFEOS/MEMORY/COUNCIL/distillery-reading-nancy-leveson-20261009-debate/transcript.md
  grounding_pack: _working/nancy-leveson/grounding-pack.md
  claims: _working/nancy-leveson/reading-claims.md
  dissent: false

limits:
  - headline: Hochstein doubts the whole control model can be drawn for a system in constant flux like his
    severity: structural
    elaboration: >
      STPA needs a control structure someone can draw and hazards a design
      can control. Lorin Hochstein, writing from software operations,
      doubts that anyone can sketch the whole structure of a system "in
      constant flux" like his, or control every hazard where he works, while endorsing the systems view and expecting
      a partial analysis to be useful (his card below). He also calls it "too simplistic" that STAMP models
      people the same way as every other controller. Every case this page names
      from her work comes from a designed system, among them TCAS II, the
      Milstar satellite lost on a Titan IV launch, and Therac-25. A team
      running production software should read a
      finished control structure as a picture of one moment, and a short
      list of unsafe control actions as a bound on the analysis.
  - headline: Google's account of STPA is a self-report with no measured comparison
    severity: local
    elaboration: >
      Google SRE's account, by Tim Falzone and Ben Treynor Sloss, is a
      practitioner report in its authors' own words. It reports what STPA
      found and what it cost, and it reports no other method run on the same
      systems to compare against.
  - headline: STPA-Sec puts the attacker late, and its authors call it early work
    severity: structural
    elaboration: >
      William Young and Leveson frame security as loss prevention whatever
      the actor's intent, and argue that attention to adversaries "too early
      in the process" limits the assessment. In 2014 they wrote that it was
      "only now being applied to cybersecurity problems, but is showing
      promise in these case studies." On this site's reading, an adaptive
      attacker aims at the
      control structure and at the controller's model of the process, so the
      deferred step carries more weight in security than in safety.
  - headline: By her own account, Safety-III is not a new approach
    severity: local
    elaboration: >
      Her 2020 paper says the approach "is not new" and that Safety-III
      "incorporates and extends" System Safety practice. Hollnagel's
      unpublished reply (his card below) answers the paper. Read Safety-III
      as her case about what safety engineering has done at least since
      World War II, and look to STAMP, STPA and CAST for the method.

still_load_bearing_despite: >
  The question STAMP asks of a loss survives the limits above. By her 2004
  account most software-related accidents had been system accidents, which
  "stem from the operation of the software, not from its lack of
  operation".

adjacent_thinkers:
  - target_slug: jens-rasmussen
    display_name: Jens Rasmussen
    edge_type: antecedent
    edge_label: >
      The 2004 paper calls Rasmussen and Svedung's 2000 framework the one
      "upon which STAMP is built", and says their model "contains only one
      control structure and the focus is on operations and not development".
      STAMP carries constraints into development and design as well.
    strength: primary
  - target_slug: erik-hollnagel
    display_name: Erik Hollnagel
    edge_type: critiques
    edge_label: >
      "The Folly of Safety-III" (2025), an unpublished manuscript under his
      byline whose file metadata names David Slater, answers her 2020 paper
      by name. It says that of three writers on Safety-III "only Leveson
      (2020) attempted to 'define' Safety-III", and reads the goal she sets
      for it as "essentially my definition of Safety-I".
    strength: primary
  - target_slug: lorin-hochstein
    display_name: Lorin Hochstein
    edge_type: critiques
    edge_label: >
      "Thoughts on STAMP" (2020), from a software-operations seat, likes
      "taking a systems view" and the "sharp distinction between reliability
      and safety". It objects that STAMP models humans like any other
      controller, that no group of engineers knows enough to sketch the
      whole control model of his own system, which is "in constant flux",
      and that not every hazard can be controlled "in
      the context that I work in."
    strength: secondary
  - target_slug: tim-falzone
    display_name: Tim Falzone
    edge_type: extends
    edge_label: >
      First author, with Ben Treynor Sloss, of an account of Google SRE adopting
      STAMP, which describes STPA for hazard analysis and CAST for
      post-incident investigation. The account works a 2021 quota rightsizer incident
      through in STPA terms.
    strength: secondary
  - target_slug: james-reason
    display_name: James Reason
    edge_type: parallel
    edge_label: >
      The STPA Handbook offers STAMP as the alternative to the
      chain-of-failure-events model, "dominos or Swiss cheese slices, all of
      which are essentially equivalent". The passage does not name Reason.
    strength: secondary
    editorial_demote_to: secondary
  - target_slug: david-woods
    display_name: David Woods
    edge_type: parallel
    edge_label: >
      One of her two co-editors, with Erik Hollnagel, on *Resilience
      Engineering: Concepts and Precepts* (2006), the anthology documenting
      the 2004 workshop that Hollnagel dates the field to.
    strength: secondary
    editorial_demote_to: secondary
  - target_slug: inge-svedung
    display_name: Inge Svedung
    edge_type: antecedent
    edge_label: >
      Co-author with Rasmussen of the 2000 risk-management framework that
      her 2004 paper says STAMP is built on.
    strength: secondary
    render_tier: deep

further_in:
  start_here: '"A New Accident Model for Engineering Safer Systems" (Safety Science, 2004).'
  then_read:
    - '*STPA Handbook* (2018, with John Thomas)'
    - '*CAST Handbook* (2019)'
    - 'Tim Falzone and Ben Treynor Sloss, "The Evolution of SRE at Google" (;login:)'
  if_you_want_depth: >
    *Engineering a Safer World* (2012).
  if_you_want_breadth: >
    Lorin Hochstein's "Thoughts on STAMP" (2020) for a software-operations
    reading, and her "Safety III" (2020) with Hollnagel's unpublished reply,
    "The Folly of Safety-III", for the dispute.
---
