---
slug: rich-hickey
name: Rich Hickey
canonical_url: https://clojure.org/
active_years: 2005–present
primary_domains:
  - software-design
  - complexity
  - programming-languages
status: alive-active
inclusion_rationale: >
  Nearly two decades of sustained design work: Clojure (designed from 2005,
  released 2007), Datomic (released 2012), a run of talks from 2009 to 2023,
  and a peer-reviewed history of Clojure (HOPL IV, 2020). "Simple Made Easy"
  (Strange Loop, 2011) gave practitioners a vocabulary they use well outside
  Clojure: simple versus easy, and "complect" for what makes software hard to
  change. Uptake evidence is strong but anecdotal, with many practitioner
  write-ups and no systematic count. Several frames are revived or extended
  words (complect is archaic English; incidental complexity renames Brooks's
  accidental complexity), so attribution stays close to source. Inclusion
  Council 5 to 0, 2026-09-16.
thinker_type: mixed
doctrine_mode: mode-a
has_long_read: false
last_updated: 2026-09-16

tagline: The language designer who gave programmers a precise word for what makes software hard to change.
thirty_second_take: >
  Hickey's talks argue that software becomes hard to change when its parts are
  braided together, and that teams choose the braid because it is familiar.
  "Simple Made Easy" separates two words the industry uses as synonyms: simple
  means not interleaved, a property you can inspect in the artifact, while easy
  means near at hand, which depends on who is looking. Choosing the easy tool
  can buy complexity the problem never required, which he calls incidental
  complexity. Later talks extend the same concern to data and change: keep
  facts as immutable values instead of overwriting them in place, and grow a
  published interface by adding to it instead of breaking it. Clojure and
  Datomic are the working proof he offers, built for the long-running
  information systems he spent twenty years building in C++, Java and C#.

background: >
  Before Clojure, Hickey spent roughly two decades as a lead architect on
  scheduling systems, broadcast automation, yield management, audio
  recognition, and exit poll tabulation and election projection, first in
  C++, then Java and C#. He taught advanced C++ at NYU as an adjunct in the
  1990s and became an independent consultant in 2000. In 2005 he began
  Clojure on a sabbatical funded from his retirement savings, released it in
  2007, and, in his own words, never returned from the sabbatical. He led the
  design of Datomic, a database of immutable facts built in Clojure with
  Stuart Halloway and others and released in 2012. In 2013 the Datomic company
  merged with Halloway and Justin Gehtland's consultancy to form Cognitect,
  where Hickey was CTO. Nubank acquired Cognitect in 2020, and Hickey retired
  from Nubank in 2023 while continuing to guide Clojure. The background
  matters because every talk argues from those long-running information
  systems.
why_they_matter_as_a_thinker: >
  "Simple Made Easy" gave working programmers words for a distinction they
  felt but could not argue: whether a design is untangled, and whether it is
  familiar. Practitioner write-ups well outside the Clojure community use the
  talk's terms to argue about design. The later talks apply the same test to
  state, data and versioning, so the vocabulary reaches past
  code style into how systems store facts and evolve their interfaces. His own
  history of Clojure is candid that most of its ideas were not new. The
  contribution is the precision of the names and the argument that ties them
  together.

thesis: >
  Reliability depends on being able to understand a system, and people can
  only reason about a few things at a time, so the property that matters most
  is whether the parts of a system are intertwined. Simplicity in that sense
  is objective and chosen; ease is relative to the person and says nothing
  about how tangled the result is. Incidental complexity enters when teams
  pick familiar constructs (mutable objects, in-place updates, breaking
  version changes) that braid together things the problem kept separate. The
  remedy is to build from values, plain data and composable pieces, and to
  treat tests and type systems as safety nets that cannot make a tangled
  design simple. (The premise that simplicity is a prerequisite for
  reliability is Dijkstra's, quoted at the start of "Simple Made Easy.")
working_line: >
  Complecting things is the source of complexity. ("Simple Made Easy,"
  Strange Loop, 2011.)

named_frames:
  - concept_slug: simple-versus-easy
    display_name: Simple versus easy
    one_line_gloss: >
      Simple means one fold or braid, with no interleaving, and can be checked
      in the artifact itself. Easy means near at hand, familiar to the person
      using it, and is relative. Treating the two words as synonyms is how
      teams choose complexity without noticing. Builds on Dijkstra's
      "simplicity is prerequisite for reliability," which the talk opens by
      quoting.
    attribution_kind: original
    primary_author: rich-hickey
    co_originators:
      - slug: edsger-dijkstra
        role: '"Simplicity is prerequisite for reliability," quoted as the talk''s premise'
    source_link: https://www.infoq.com/presentations/Simple-Made-Easy/
    render_tier: foreground
  - concept_slug: complect
    display_name: Complect
    one_line_gloss: >
      An archaic English word for braiding or interleaving, revived for
      software: to complect is to entwine concerns that could stay
      independent, which is where complexity comes from. Its opposite is
      compose, to place together. Overlaps the older ideas of coupling and
      connascence.
    attribution_kind: popularized
    primary_author: rich-hickey
    source_link: https://www.infoq.com/presentations/Simple-Made-Easy/
    render_tier: foreground
  - concept_slug: incidental-complexity
    display_name: Incidental complexity
    one_line_gloss: >
      Complexity that was no part of what the user asked for and arrived with
      a chosen tool or construct. Hickey's name for what Brooks called
      accidental complexity, and what Moseley and Marks's "Out of the Tar Pit"
      traced mainly to mutable state; his gloss is that "incidental is Latin
      for 'your fault'."
    attribution_kind: extended
    primary_author: rich-hickey
    co_originators:
      - slug: fred-brooks
        role: accidental complexity, "No Silver Bullet" (1986)
      - slug: ben-moseley-peter-marks
        role: '"Out of the Tar Pit" (2006), cited in Hickey''s history of Clojure'
    derived_from: essential-vs-accidental-complexity
    source_link: https://www.infoq.com/presentations/Simple-Made-Easy/
    render_tier: foreground
  - concept_slug: append-dont-overwrite
    display_name: Place-oriented programming (PLOP)
    one_line_gloss: >
      Any design in which new information replaces old information in place.
      A habit born of early machines with little memory, kept long after the
      limits disappeared, at the cost of losing facts. The name is Hickey's;
      the critique of fetch-and-store programming goes back at least to
      Backus's 1977 Turing lecture and the functional programming tradition.
    attribution_kind: extended
    primary_author: rich-hickey
    co_originators:
      - slug: john-backus
        role: critique of fetch-and-store programming, 1977 Turing Award lecture
    source_link: https://www.youtube.com/watch?v=-6BsiVyC1kM
    render_tier: foreground
  - concept_slug: accretion-versus-breakage
    display_name: Accretion versus breakage
    one_line_gloss: >
      A published interface can grow by providing more (accretion) or
      requiring less (relaxation). Removing anything is breakage. When a
      change must break, give it a new name instead of a new version number.
      Related to Postel's robustness principle and Fowler's Tolerant Reader,
      and argued against Semantic Versioning's habit of breaking under the
      same name.
    attribution_kind: extended
    primary_author: rich-hickey
    co_originators:
      - slug: martin-fowler
        role: Tolerant Reader (2011), the consumer side of additive change
    source_link: https://www.youtube.com/watch?v=oyLBGkS5ICk
    render_tier: foreground
  - concept_slug: guardrail-programming
    display_name: Guardrail programming
    one_line_gloss: >
      Relying on tests, refactoring tools and type checkers to make change
      safe, like driving by bouncing off guardrails. Those tools are safety
      nets; none of them makes a tangled program simple, so the ability to
      reason about the program still has to come from the design.
    attribution_kind: original
    primary_author: rich-hickey
    source_link: https://www.infoq.com/presentations/Simple-Made-Easy/
    render_tier: foreground
  - concept_slug: value-identity-state-time
    display_name: Value, identity, state and time
    one_line_gloss: >
      A value is an immutable magnitude; an identity is an entity associated
      with a series of values over time; state is the value of an identity at
      a moment. Separating them replaces mutable objects. Hickey credits
      Alfred North Whitehead's process philosophy as the inspiration.
    attribution_kind: extended
    primary_author: rich-hickey
    co_originators:
      - slug: alfred-north-whitehead
        role: '*Process and Reality*, credited by Hickey as "the hero of the talk"'
    source_link: http://www.infoq.com/presentations/Are-We-There-Yet-Rich-Hickey
    render_tier: deep
  - concept_slug: situated-programs
    display_name: Situated programs
    one_line_gloss: >
      Programs that run continuously for years, deal mostly with information,
      remember what they did, and face real-world irregularity. The kind of
      system Hickey built for two decades, and the scope within which his
      arguments about data and types are made.
    attribution_kind: original
    primary_author: rich-hickey
    source_link: https://www.youtube.com/watch?v=2V1FtfBDsLU
    render_tier: deep
  - concept_slug: hammock-driven-development
    display_name: Hammock-driven development
    one_line_gloss: >
      Load a problem into the waking mind with study and writing, then step
      away and let the background mind work on it. A programmer's name for
      the incubation stage of problem solving; the talk credits Polya's *How
      to Solve It*.
    attribution_kind: extended
    primary_author: rich-hickey
    co_originators:
      - slug: george-polya
        role: '*How to Solve It* (1945), credited in the talk'
    source_link: https://www.youtube.com/watch?v=f84n5oFoZBc
    render_tier: deep
  - concept_slug: persistent-data-structures
    display_name: Persistent data structures as the default
    one_line_gloss: >
      Immutable collections that share structure so that making a changed
      copy is cheap, used as the language's everyday data. Clojure's versions
      build on Phil Bagwell's hash array mapped tries after Okasaki's
      structures proved too slow for Hickey's needs.
    attribution_kind: extended
    primary_author: rich-hickey
    co_originators:
      - slug: phil-bagwell
        role: hash array mapped tries (2001)
      - slug: chris-okasaki
        role: '*Purely Functional Data Structures* (1999)'
    source_link: https://doi.org/10.1145/3386321
    render_tier: deep

body_of_work:
  - title: Simple Made Easy
    type: talk
    year: 2011
    link: https://www.infoq.com/presentations/Simple-Made-Easy/
    editorial_note: >
      The keynote from Strange Loop, and the source of most of the vocabulary
      on this page. An hour long, with almost nothing specific to Clojure.
      Watch it first.
    read_first: true
    canonical: true
  - title: Are We There Yet?
    type: talk
    year: 2009
    link: http://www.infoq.com/presentations/Are-We-There-Yet-Rich-Hickey
    editorial_note: >
      The JVM Language Summit talk that sets out value, identity, state and
      time, drawing on Whitehead. The argument against mutable objects that
      the later talks assume.
  - title: The Value of Values
    type: talk
    year: 2012
    link: https://www.youtube.com/watch?v=-6BsiVyC1kM
    editorial_note: >
      The shortest route to place-oriented programming and to information as
      accumulated facts. The talk behind Datomic's design.
  - title: Spec-ulation
    type: talk
    year: 2016
    link: https://www.youtube.com/watch?v=oyLBGkS5ICk
    editorial_note: >
      Accretion, relaxation and breakage, and the case against breaking
      changes under a version number. The most directly useful talk for
      anyone who owns a published API or library.
  - title: Effective Programs (10 Years of Clojure)
    type: talk
    year: 2017
    link: https://www.youtube.com/watch?v=2V1FtfBDsLU
    editorial_note: >
      A retrospective that names situated programs and explains the problems
      Clojure was built for. Also the talk where his skepticism about static
      types is sharpest; read it with the critique linked below.
  - title: A History of Clojure
    type: paper
    year: 2020
    link: https://doi.org/10.1145/3386321
    editorial_note: >
      The peer-reviewed history for HOPL IV. The best written source for his
      reasoning, his debts to earlier work, and his own account of the
      trade-offs in how Clojure is stewarded.
    canonical: true
  - title: Hammock Driven Development
    type: talk
    year: 2010
    link: https://www.youtube.com/watch?v=f84n5oFoZBc
    editorial_note: >
      A short talk on how to solve hard problems, with nothing to do with any
      language. Useful for anyone whose job is design work under time
      pressure.

reading: >
  "Simple Made Easy" pulls apart two words the industry treats as one: simple
  means nothing is interleaved, a property of the artifact, and easy means near
  at hand, a property of the person. Hickey locates complexity in complecting,
  the braiding together of concerns that could stay independent. A familiar tool
  can bring complexity the problem never needed, which he calls incidental
  complexity, his name for what Brooks called accidental. Tests and type
  checkers catch mistakes after the fact, and in his account they are safety
  nets that cannot untangle a design. The later talks carry the same concern
  into data and change. Overwriting a record in place discards the fact it
  replaced, and removing anything from a published interface breaks whoever
  depends on it. He scopes these arguments to long-running information systems,
  and his case against static types remains contested.
extension: >
  An audit log that overwrites its own entries fails at its one job. Applied
  past the log, the same test reaches the systems the log describes. Where
  access grants, configuration and policy are stored as current values only, the
  record of who could do what last month is gone when an investigation needs it.
  Keeping those as accumulated facts would put part of that history in the data
  model itself, and the history stays honest only if the credentials that write
  a grant cannot also edit the record of grants. The costs are real: teams used
  to overwriting records pay the relative cost the talk sets aside, and history
  that never ages out still needs a retention period. Even a complete fact store
  proves only that a change happened, so a malicious grant still waits on
  someone reviewing it to be noticed.
reading_review:
  protocol: reading-protocol-v1
  date: 2026-09-16
  verdict: accept
  council_transcript: ~/.claude/LIFEOS/MEMORY/COUNCIL/distillery-reading-batch-hickey-fournier-20260916-163706-debate/transcript.md
  grounding_pack: _working/rich-hickey/grounding-pack.md
  claims: _working/rich-hickey/reading-claims.md
  dissent: false

limits:
  - headline: The case against static types is contested
    severity: structural
    elaboration: >
      "Effective Programs" and "Maybe Not" argue that type systems do little
      for the information systems Hickey builds. Jonathan Lange's published
      response to "Maybe Not" disputes the talk's account of sum types, argues
      that Wadler's "Theorems for Free!" shows how much a type signature
      communicates, and says the talk ignores the type theory literature. Hickey
      scopes his claims to situated programs, and the scope matters: the
      argument does not settle the question for other kinds of software.
  - headline: The evidence is one practitioner's experience
    severity: structural
    elaboration: >
      The arguments rest on Hickey's own systems and his reading of what went
      wrong in them. The talks offer definitions, examples and a table of
      simpler replacements for complex constructs, but no measurement. The
      toolkit table itself arrives without argument in the talk; he says he
      did not label the columns good and bad and leaves the reader to.
  - headline: Simple is objective, and the cost of getting there is relative
    severity: local
    elaboration: >
      The talk defines simplicity as a property of the artifact and ease as a
      property of the person, then tells teams to choose simple. For a team
      whose members find the simpler constructs unfamiliar, the relative cost
      is real and falls on people the definition sets aside. The distinction
      explains the trade-off; it does not price it.
  - headline: A singular vision has a governance cost
    severity: local
    elaboration: >
      Hickey's history of Clojure says he prioritized "maintaining my vision
      for Clojure" over collaborative development, "for good and bad." His
      2018 essay "Open Source is Not About You," which calls open source "a
      licensing and delivery mechanism, period," drew wide public criticism.
      The coherence of the language and the friction with contributors come
      from the same choice.

  - headline: Permanent history meets retention limits
    severity: local
    elaboration: >
      Accumulating facts instead of overwriting them means old records never
      age out on their own. Security and access records usually survive
      erasure requests, since data protection law such as GDPR exempts
      processing needed for legal obligations and legal claims, and treats
      network security as a legitimate interest. They still fall under storage limitation, which allows
      identifiable data to be kept only as long as its purpose requires.
      Datomic itself ships excision, a way to permanently remove facts for
      privacy or past a retention period, and keeps a record of each removal.

still_load_bearing_despite: >
  The vocabulary survives its limits because the core observation holds in
  any codebase: things braided together have to be understood together, and
  familiarity hides the braid. The typing argument can stay contested and the
  evidence can stay anecdotal while "is this complected?" remains a sharper
  review question than "is this clean?" Accretion versus breakage holds up
  for a similar reason. Anyone who has upgraded a dependency across a major
  version has paid for breakage that arrived under a name they already
  trusted.

adjacent_thinkers:
  - target_slug: fred-brooks
    display_name: Fred Brooks
    edge_type: antecedent
    edge_label: >
      Incidental complexity is Hickey's name for the accidental complexity
      Brooks separated from essential complexity in "No Silver Bullet," with
      the blame placed squarely on the choices a team makes.
    strength: primary
  - target_slug: martin-fowler
    display_name: Martin Fowler
    edge_type: parallel
    edge_label: >
      Fowler treats tests as what makes refactoring safe; Hickey calls reliance
      on tests guardrail programming. On change, Fowler's Tolerant Reader
      (2011) is the consumer-side counterpart to Hickey's accretion-only
      interfaces.
    strength: primary
  - target_slug: ben-moseley-peter-marks
    display_name: Ben Moseley and Peter Marks
    edge_type: antecedent
    edge_label: >
      "Out of the Tar Pit" (2006) traced most accidental complexity to mutable
      state and proposed functional and relational remedies. Hickey's history
      of Clojure describes Datomic as the final piece needed to get out of
      that tar pit.
    strength: secondary
  - target_slug: alfred-north-whitehead
    display_name: Alfred North Whitehead
    edge_type: antecedent
    edge_label: >
      The process philosopher whose account of time as a succession of events
      Hickey credits as the inspiration for separating value, identity and
      state.
    strength: secondary
  - target_slug: jonathan-lange
    display_name: Jonathan Lange
    edge_type: critiques
    edge_label: >
      A direct 2018 response to "Maybe Not," arguing that the talk misstates
      what sum types and type signatures communicate and ignores the type
      theory literature.
    strength: secondary
  - target_slug: john-ousterhout
    display_name: John Ousterhout
    edge_type: parallel
    edge_label: >
      *A Philosophy of Software Design* (2018) also treats complexity as the
      central problem of software design, with a different vocabulary built
      around deep modules and strategic programming.
    strength: secondary
  - target_slug: simon-willison
    display_name: Simon Willison
    edge_type: parallel
    edge_label: >
      Guardrail programming carried into security. Willison rules out defenses
      built from a second model because a black box cannot be shown to hold
      against an attacker who keeps retrying, which leaves the property to be
      designed in rather than caught on the way out. He does not cite Hickey,
      so the pairing is the site's reading of two arguments with one shape.
    strength: primary
  - target_slug: kent-beck
    display_name: Kent Beck
    edge_type: parallel
    edge_label: >
      Beck reaches this page's conclusion from money rather than from meaning.
      Where Hickey argues that complecting independent concerns is what makes a
      program hard to reason about, Beck writes that the cost of software is
      approximately the cost of changing it, and puts coupling in the place
      where that cost accumulates. Neither man cites the other, and the two
      arguments arrive at the same advice about where design effort goes.
    strength: primary
further_in:
  start_here: '"Simple Made Easy" (Strange Loop, 2011), the full hour.'
  then_read:
    - '"The Value of Values" (2012)'
    - '"Spec-ulation" (2016)'
    - '"A History of Clojure" (HOPL IV, 2020), sections 1 to 3'
  if_you_want_depth: >
    Moseley and Marks's "Out of the Tar Pit" for the fuller argument about
    state, and "Are We There Yet?" for the model of time behind Clojure and
    Datomic.
  if_you_want_breadth: >
    Brooks's "No Silver Bullet" for the essential and accidental distinction
    Hickey renames, Ousterhout's *A Philosophy of Software Design* for a rival
    vocabulary of complexity, and Jonathan Lange's response to "Maybe Not" for
    the strongest case against his view of types.
---
