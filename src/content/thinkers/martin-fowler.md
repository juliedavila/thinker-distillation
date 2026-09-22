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
doctrine_mode: mode-c
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
    co_originators:
      - slug: ward-cunningham
        role: named the form, in Fowler's own account of the post defining the word (2003)
    source_link: https://martinfowler.com/bliki/WhatIsaBliki.html
  - concept_slug: append-dont-overwrite
    display_name: Event sourcing
    one_line_gloss: >
      Record every change to application state as an event, and rebuild the
      state at any time by replaying the log. Fowler wrote the pattern up in
      draft in 2005 and returned to it in 2017, comparing the event log to a
      git history and to the accounting transactions behind a balance. Greg
      Young popularized it alongside CQRS from 2007, and neither claims the
      underlying idea as new.
    attribution_kind: distributed
    primary_author: martin-fowler
    co_originators:
      - slug: greg-young
        role: popularized it with CQRS; early public explanation at QCon SF 2007
    source_link: https://martinfowler.com/articles/201701-event-driven.html

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

reading: >
  In Fowler's account, software is a medium for shared understanding, and it
  decays whenever nobody tends it. The cost of that decay arrives quickly, in
  next week's velocity, and his design stamina hypothesis makes a parallel claim
  that internal quality pays back within weeks. His method is to name the moves
  (refactoring, code smell, strangler fig, bounded context), attribute each to
  its origin, and revise them in public on the bliki. Naming turns tacit design
  choices into distinctions a team can argue about. The method has limits of its
  own: his 2014 microservices article undersold the cost of distribution, and
  later follow-ups had to correct it.
extension: >
  Bounded context places a boundary where the language changes. That line is
  often a sensible place to draw an authority boundary as well, although in
  multi-tenant systems contexts and authority domains can cut across each other.
  The confused deputy problem is what happens when a request crosses an
  authority boundary carrying authority it gathered on the other side. Agent and
  tool integrations make this concrete: an agent working inside one context can
  be steered by text that came from another, and it acts with its own
  permissions. A trust boundary placed at the same seam as a bounded context
  gives a security team a concrete place to enforce authority at the
  infrastructure layer. The placement secures nothing until enforcement is wired
  to it, since a named boundary with nothing behind it is only a label. Security
  vocabulary drifts faster and is more vendor-driven than design vocabulary, so
  the naming discipline has to be kept on purpose.
reading_review:
  protocol: reading-protocol-v1
  date: 2026-09-16
  verdict: accept-with-edits
  council_transcript: ~/.claude/LIFEOS/MEMORY/COUNCIL/distillery-reading-batch-7-legacy-pages-20260916-181307-quick/transcript.md
  grounding_pack: _working/martin-fowler/grounding-pack.md
  claims: _working/martin-fowler/reading-claims.md
  dissent: false
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
      starts with Cunningham; Fowler made a career of it.
    strength: primary
  - target_slug: eric-evans
    display_name: Eric Evans
    edge_type: extends
    edge_label: >
      Domain-Driven Design's bounded context, ubiquitous language, aggregate
      root, anti-corruption layer all enter the wider community through
      Fowler's foreword, bliki carries, and pattern catalog integration.
    strength: primary
    render_tier: deep
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
    render_tier: deep
  - target_slug: melvin-conway
    display_name: Melvin Conway
    edge_type: antecedent
    edge_label: >
      Conway's Law (1968), Fowler taxonomized into the *Inverse Conway
      Maneuver*. The boundary arc of Fowler's work runs through Conway's
      claim that org structure ships in the system structure.
    strength: secondary
    render_tier: deep

  - target_slug: ray-dalio
    display_name: Ray Dalio
    edge_type: parallel
    edge_label: >
      Dalio writes down an organization's decision rules the way Fowler writes down design vocabulary: explicit, named, and open to revision.
    strength: secondary
  - target_slug: rich-hickey
    display_name: Rich Hickey
    edge_type: parallel
    edge_label: >
      Hickey calls reliance on tests to make change safe "guardrail
      programming," a direct counterpoint to refactoring under tests. His
      accretion-only interfaces pair with Fowler's Tolerant Reader.
    strength: secondary
  - target_slug: fred-brooks
    display_name: Fred Brooks
    edge_type: antecedent
    edge_label: >
      Brooks named the large-scale physics of software engineering; Fowler spent decades naming the daily practice inside that frame.
    strength: primary
  - target_slug: zhamak-dehghani
    display_name: Zhamak Dehghani
    edge_type: hosts
    edge_label: >
      Fowler published Dehghani's original Data Mesh articles on martinfowler.com,
      where she first laid out the approach in writing.
    strength: secondary
    render_tier: deep
    hosted_items:
      - title: How to Move Beyond a Monolithic Data Lake to a Distributed Data Mesh
        kind: essay
        year: 2019
        hosted_on_url: https://martinfowler.com/articles/data-monolith-to-mesh.html
      - title: Data Mesh Principles and Logical Architecture
        kind: essay
        year: 2020
        hosted_on_url: https://martinfowler.com/articles/data-mesh-principles.html
  - target_slug: simon-willison
    display_name: Simon Willison
    edge_type: parallel
    edge_label: >
      A case where the boundary has nowhere to land. Fowler places the line
      where the language changes; Willison's subject is a model that reads its
      developer's instructions and outside text as one stream, with no internal
      seam to draw a line along. Willison never uses this page's vocabulary, so
      the pairing is the site's own.
    strength: primary

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
