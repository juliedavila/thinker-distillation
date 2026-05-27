---
slug: martin-fowler
name: Martin Fowler
canonical_url: https://martinfowler.com
active_years: 1996–present
primary_domains:
  - software-design
  - refactoring
  - enterprise-architecture
  - vocabulary-infrastructure
status: alive-active
inclusion_rationale: >
  Spent twenty-five years turning tacit software-design knowledge into a public
  catalog of named distinctions (refactoring, code smell, bounded context,
  strangler fig, continuous integration, feature toggle, bliki itself) so
  that "cheap to change" became a tradable argument engineers, managers, and
  customers could negotiate over. Vocabulary that the industry now uses to
  think about its own work. The cartographer of working software.
thinker_type: mixed
has_long_read: true
long_read_path: /thinkers/martin-fowler/long-read
last_updated: 2026-05-25

tagline: The cartographer of software design. Turned tacit practice into a public catalog of named distinctions the field now uses to think.
thirty_second_take: >
  Fowler's twenty-five-year corpus is one sustained economic argument: internal
  quality is not in tension with speed, it is the source of speed. The
  Fowler-specific move is the cartographer's instrument: turn implicit design
  choices into named, attributed, debatable objects (patterns, refactorings,
  smells, deployment moves, bounded contexts, strangler figs) so that "cheap to
  change" stops being a feeling and starts being a thing teams can negotiate.
  Naming the implicit is the design move; the bliki is the form.

background: >
  British software engineer, born in Walsall in 1963, who built his career as
  a working consultant and writer rather than an executive or academic. Joined
  ThoughtWorks in 2000 as Chief Scientist, a role designed expressly to leave
  him free to think and write. One of the seventeen original signatories of
  the Agile Manifesto (2001). Co-author of *Refactoring* (1999, with Kent
  Beck), author of *Patterns of Enterprise Application Architecture* (2002),
  *Analysis Patterns* (1996), *UML Distilled*, *Domain-Specific Languages*
  (with Rebecca Parsons), and *NoSQL Distilled* (with Pramod Sadalage).
  Coined the term *bliki* (a hybrid of blog and wiki) and has been publishing
  under that form at martinfowler.com since the late 1990s.
why_they_matter_as_a_thinker: >
  If you have worked in software for more than five years, you have read
  Fowler whether you noticed or not. You read him every time someone says
  "let's refactor that," because the word in its current technical meaning is
  his. You read him every time someone draws the test pyramid, says
  *bounded context* or *microservice* or *feature toggle* or *code smell* or
  *tech debt* or *continuous delivery*. A lot of the vocabulary engineering
  orgs use to talk about their own work, he either named, popularized, or
  codified into a form that could be passed around without losing its shape.
  He has been doing this since 1996, long enough that most engineers under
  forty have never worked in a world where his vocabulary was absent.

thesis: >
  Software is a perishable medium for shared understanding. It rots when
  nobody is tending it, and the cost of letting it rot is paid not in some
  distant future but in next week's velocity. The way to keep software cheap
  to change is to evolve practice in public: name the moves, share the
  vocabulary, run the build-test-deploy loop tight, place the boundaries
  where change wants to flow, model the domain in the language the team
  already uses with the customer, and write the practice down as you
  discover it. Quality IS speed. Naming the implicit is how the argument
  becomes negotiable. The catalog, the bliki entry, the pattern, the named
  refactoring, the smell: these are the cartographer's instruments.
working_line: >
  Make change easy, then make the easy change. (Kent Beck, the working
  motto Fowler quotes more than any other.)

named_frames:
  - concept_slug: refactoring
    display_name: Refactoring
    one_line_gloss: >
      A disciplined structure-changing move that does not change behavior,
      made safe by tests. Improves the design of existing code in small,
      reversible steps.
    attribution_kind: extended
    primary_author: martin-fowler
    co_originators:
      - slug: william-opdyke
        role: original PhD thesis, 1992
      - slug: kent-beck
        role: practice + book co-author
    source_link: https://refactoring.com
    derived_from: opdyke-thesis-1992
  - concept_slug: code-smell
    display_name: Code smell
    one_line_gloss: >
      A surface signal that something deeper in the code is wrong; a named
      heuristic for what to refactor away from.
    attribution_kind: co-authored
    primary_author: kent-beck
    co_originators:
      - slug: kent-beck
        role: co-coined
      - slug: martin-fowler
        role: cataloged in *Refactoring*
    source_link: https://martinfowler.com/bliki/CodeSmell.html
  - concept_slug: bounded-context
    display_name: Bounded context
    one_line_gloss: >
      A region of the model inside which the language is consistent: the
      boundary placed where the words change, not where the org chart changes.
    attribution_kind: extended
    primary_author: eric-evans
    co_originators:
      - slug: eric-evans
        role: original in *Domain-Driven Design*, 2003
    source_link: https://martinfowler.com/bliki/BoundedContext.html
  - concept_slug: strangler-fig-application
    display_name: Strangler fig application
    one_line_gloss: >
      A migration pattern: grow the new system around the old one until the
      old one can be removed, instead of rewriting from scratch.
    attribution_kind: original
    primary_author: martin-fowler
    source_link: https://martinfowler.com/bliki/StranglerFigApplication.html
  - concept_slug: continuous-integration
    display_name: Continuous integration
    one_line_gloss: >
      A development practice: integrate work into the mainline at least
      daily, verified by an automated build, so defects surface in hours
      not weeks.
    attribution_kind: original
    primary_author: martin-fowler
    co_originators:
      - slug: kent-beck
        role: original XP practice
      - slug: jez-humble
        role: extended into Continuous Delivery
      - slug: dave-farley
        role: extended into Continuous Delivery
    source_link: https://martinfowler.com/articles/continuousIntegration.html
  - concept_slug: design-stamina-hypothesis
    display_name: Design stamina hypothesis
    one_line_gloss: >
      A named claim (labeled as hypothesis, not law) that internal quality
      pays back faster than expected. The crossover where quality work
      outpaces shortcut work happens in weeks, not years.
    attribution_kind: original
    primary_author: martin-fowler
    source_link: https://martinfowler.com/bliki/DesignStaminaHypothesis.html
  - concept_slug: bliki
    display_name: The bliki
    one_line_gloss: >
      A hybrid of blog and wiki: write up an idea while figuring it out,
      post it publicly, keep revising, mark the maturity (`growing`,
      `stable`), attribute origins. The form Fowler's argument evolves in.
    attribution_kind: original
    primary_author: martin-fowler
    source_link: https://martinfowler.com/bliki/

body_of_work:
  - title: Is Quality Software Worth The Cost?
    type: essay
    year: 2019
    link: https://martinfowler.com/articles/is-quality-worth-cost.html
    editorial_note: >
      The keystone bliki essay. If you only read one Fowler piece, this is
      it. Names the economic argument, makes "internal quality" debatable,
      and turns the design-stamina graph into a tool for the conversation.
    read_first: true
    canonical: true
  - title: 'Refactoring: Improving the Design of Existing Code'
    type: book
    year: 1999
    link: https://martinfowler.com/books/refactoring.html
    editorial_note: >
      The book that gave the word *refactoring* its current technical meaning.
      Co-authored with Kent Beck (and Brant, Opdyke, Roberts). Second edition
      rewritten solo in JavaScript, 2018. The rewrite is itself an argument
      that the moves are language-independent discipline.
    canonical: true
  - title: Patterns of Enterprise Application Architecture
    type: book
    year: 2002
    link: https://martinfowler.com/books/eaa.html
    editorial_note: >
      The catalog that named *Domain Model*, *Transaction Script*, *Active
      Record*, *Data Mapper*, *Unit of Work*, *Service Layer*, *Repository*.
      The book most enterprise software is still discussed in.
    canonical: true
  - title: Continuous Integration
    type: essay
    year: 2006
    link: https://martinfowler.com/articles/continuousIntegration.html
    editorial_note: >
      The original definitive statement of CI as a named discipline. Read
      alongside Humble + Farley's *Continuous Delivery*, for which Fowler
      wrote the foreword.
    canonical: true
  - title: Microservices (with James Lewis)
    type: essay
    year: 2014
    link: https://martinfowler.com/articles/microservices.html
    editorial_note: >
      The defining article. Read it together with `MonolithFirst` (2015) and
      `MicroservicePremium`: Fowler's own public walking-back of the 2014
      over-enthusiasm. The public-revision discipline at scale.
  - title: The bliki at martinfowler.com
    type: blog-series
    link: https://martinfowler.com/bliki/
    editorial_note: >
      The corpus medium. Not paratext: the bliki *is* the form Fowler's
      argument evolves in. Start at the alphabetical index; key entries
      include `BoundedContext`, `FeatureToggle`, `TechDebtQuadrant`,
      `InverseConwayManeuver`.

what_i_take: >
  Fowler's cartographer move is the most useful framework I carry into
  security organization design. Most security programs fail at the same
  layer his work attacks: implicit choices treated as too obvious to need
  naming, which means too obvious to be debated. Threat models, control
  selections, severity calls, risk-acceptance decisions are all
  conversations starved of vocabulary. The Fowler move is to turn those
  implicit calls into named, attributed, debatable objects, and the move
  works at the security layer for the same reason it worked at the design
  layer. Once a thing has a name, an engineering team can pick it up,
  argue with it, refuse it, extend it. Without a name it is just somebody's
  opinion in a meeting nobody remembers.
where_i_extend: >
  Fowler writes about cheap-to-change as the central economic property of
  good software. I push the same logic into security: cheap-to-defend is
  the central economic property of a securable system, and it is downstream
  of the same internal-quality choices Fowler argues for. A system with
  legible boundaries, named seams, and tight feedback loops is also a
  system that can absorb a CVE, swap a dependency, rotate a credential,
  or contain a blast radius without rewriting itself. Internal quality
  shows up as the source of *security velocity* the same way it shows up
  as the source of feature velocity. The cartographer's instruments apply
  to both.
working_uses:
  - '"Boring Seams" keynote (vocabulary-as-instrument applied to security architecture)'
  - Cordon framework (naming security as a peer dimension among the software-quality ontology)
  - Threat-model writeups (patterns + named distinctions instead of bullet lists)

limits:
  - headline: The 2014 microservices article was too lenient on operational cost
    severity: structural
    elaboration: >
      Fowler's own follow-ups (`MonolithFirst`, `MicroservicePremium`,
      `MicroservicePrerequisites`) are the public retraction. The article
      undersold the price of distribution: observability, network reliability,
      partial-failure modes, the operational tax that does not show up in the
      modeling argument. Read the follow-ups and Sam Newman's 2nd-edition
      *Building Microservices* alongside the original article, not as a
      replacement for it.
  - headline: The catalog form can become an end in itself
    severity: structural
    elaboration: >
      Joshua Kerievsky's *Refactoring to Patterns* is both extension and
      pointed critique: mechanical refactoring without a pattern-target can
      produce code that is cleaner-but-not-better. The 2nd edition of
      *Refactoring* (2018) responds, but the critique is live: a named move
      with no design destination is still motion without direction.
  - headline: The test pyramid is a heuristic, not a law
    severity: local
    elaboration: >
      Vladimir Khorikov, Sam Newman and others argue strict pyramid orthodoxy
      can starve integration testing where the actual bugs live. Treat the
      pyramid as the *shape* of a reasonable starting place, not as the
      answer to where test effort belongs.
  - headline: The discipline-of-attribution scales unevenly to the security world
    severity: local
    elaboration: >
      Fowler's attribution chains work because his community is small,
      stable, and largely self-citing. Security has weaker citation
      discipline, faster vocabulary drift, more vendor-driven naming, and a
      meaningful adversarial layer that Fowler's collaborative-design
      framing doesn't acknowledge. The cartographer move still applies; the
      cartographer's working norms partially don't.

still_load_bearing_despite: >
  The cartographer move is the most under-acknowledged contribution of the
  Fowler corpus. Even with the microservices over-enthusiasm, even with the
  test-pyramid orthodoxy risk, even with the catalog-as-end-in-itself
  failure mode. Turning tacit design knowledge into named, attributed,
  debatable distinctions is what makes engineering practice transmissible
  across companies, generations, and disciplines. The vocabulary you use to
  think about your code is mostly his. The reason "let's refactor that" is
  a conversation rather than a fight is mostly his. That doesn't go away
  when individual chapters age out.

adjacent_thinkers:
  - target_slug: kent-beck
    display_name: Kent Beck
    edge_type: extends
    edge_label: >
      The deepest collaborator. Co-authored *Refactoring*, defined TDD,
      coined code smell with Fowler, contributed the two-hat rule and the
      "make change easy" motto. Most of what Fowler argues, he argues
      alongside Beck.
    strength: primary
  - target_slug: ward-cunningham
    display_name: Ward Cunningham
    edge_type: antecedent
    edge_label: >
      Coined "technical debt" in 1992 and built the wiki, the form Fowler
      extended into the bliki. The genre of public-revision design writing
      starts with Cunningham; Fowler operationalized it as a career.
    strength: primary
  - target_slug: eric-evans
    display_name: Eric Evans
    edge_type: extends
    edge_label: >
      Domain-Driven Design's bounded context, ubiquitous language, aggregate
      root, anti-corruption layer all enter the wider community through
      Fowler's foreword, bliki carries, and pattern catalog integration.
    strength: primary
  - target_slug: alex-komoroske
    display_name: Alex Komoroske
    edge_type: parallel
    edge_label: >
      Same cartographer move, different domain. Fowler builds named-vocabulary
      instruments for software design, Komoroske builds them for organization
      design. Coordination headwind, Schelling-point organizations, gardener-
      vs-architect are the org-design equivalents of refactoring, bounded
      context, ubiquitous language.
    strength: primary
  - target_slug: christopher-alexander
    display_name: Christopher Alexander
    edge_type: antecedent
    edge_label: >
      The pattern-language form Fowler's catalogs descend from. Alexander's
      later critique of how programmers used patterns is itself part of why
      Fowler's catalog discipline matters: naming is necessary but not
      sufficient.
    strength: secondary
  - target_slug: melvin-conway
    display_name: Melvin Conway
    edge_type: antecedent
    edge_label: >
      Conway's Law (1968), Fowler taxonomized into the *Inverse Conway
      Maneuver*. The boundary arc of Fowler's work runs through Conway's
      claim that org structure ships in the system structure.
    strength: secondary

further_in:
  start_here: '`IsQualitySoftwareWorthTheCost` (bliki). The economic-argument keystone.'
  then_read:
    - 'The bliki entries `RefactoringMalapropism`, `CodeSmell`, `TwoHardThings`'
    - 'The *Continuous Integration* article (2006) and *Microservices* article (2014, with the MonolithFirst follow-up)'
    - '`BoundedContext` bliki + Evans''s *Domain-Driven Design* (Fowler''s foreword)'
  if_you_want_depth: /thinkers/martin-fowler/long-read (*Ways of Fowler*)
  if_you_want_breadth: >
    Read Beck's *Extreme Programming Explained*, Cunningham's wiki, Evans's
    *Domain-Driven Design*, Humble + Farley's *Continuous Delivery*, and
    Newman's 2nd-edition *Building Microservices*. The working community
    Fowler is in conversation with.

long_read:
  title: Ways of Fowler
  summary: >
    Internal quality IS speed. The work is keeping software cheap to change.
    Every Fowler artifact (pattern, refactoring, smell, deployment move,
    bounded context, strangler fig, feature toggle, the bliki itself) is an
    instrument toward that single argument. The book walks the six argument
    arcs (Economic, Vocabulary, Practice, Boundary, Flow, Modeling) plus the
    cartographer's meta-move (bliki as form, editor/platform as practice).
  source_path: ~/Camila/thinker-distillation/_working/martin-fowler/
---
