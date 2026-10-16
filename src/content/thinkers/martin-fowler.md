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
last_updated: 2026-10-15

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
  a consultant and writer. Joined ThoughtWorks in 2000 and holds the title of
  Chief Scientist, which he calls ironic because he is "not chief of anybody";
  he describes his main role as "helping my colleagues to capture and
  promulgate what we've learned about software development". By his own
  account he has mostly avoided business leadership responsibilities, and he
  has served on the firm's primary global leadership team since 2017. One of
  the seventeen original signatories of the Agile Manifesto (2001). Author of
  *Refactoring* (1999, with Kent Beck, John Brant, William Opdyke and Don
  Roberts), *Patterns of Enterprise Application Architecture* (2002),
  *Analysis Patterns* (1996), *UML Distilled*, *Domain-Specific Languages*
  (with Rebecca Parsons), and *NoSQL Distilled* (with Pramod Sadalage). Has
  written a bliki (a hybrid of blog and wiki, a name Ward Cunningham gave his
  version) at martinfowler.com since 2003; the site started as a home for
  articles he had written for other purposes.
why_they_matter_as_a_thinker: >
  If you have worked in software for more than five years, you have read
  Fowler whether you noticed or not. You read him every time someone says
  "let's refactor that": his 1999 book on the practice is the one he says has
  had "a high impact on the world of software development". You
  read him every time someone says *bounded context* or *microservice* or
  *feature toggle* or *code smell* or *tech debt* or *continuous delivery*. A
  lot of the vocabulary engineering orgs use to talk about their own work, he
  either popularized or codified into a form that could be passed around
  without losing its shape.
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
        role: practice; credited on the book, "with Kent Beck"
    source_link: https://refactoring.com
  - concept_slug: code-smell
    display_name: Code smell
    one_line_gloss: >
      A surface signal that something deeper in the code is wrong; a named
      heuristic for what to refactor away from.
    attribution_kind: co-authored
    primary_author: kent-beck
    co_originators:
      - slug: kent-beck
        role: coined the term, in Fowler's account, while helping with *Refactoring*
      - slug: martin-fowler
        role: cataloged in *Refactoring*
    source_link: https://martinfowler.com/bliki/CodeSmell.html
  - concept_slug: bounded-context
    display_name: Bounded context
    one_line_gloss: >
      A region of the model inside which the language is consistent. Fowler's
      entry explains Eric Evans's pattern and says a different model is needed
      "when the language changes".
    attribution_kind: popularized
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
    co_originators:
      - slug: chris-stevenson
        role: the practice; Fowler's 2004 post credits a project Stevenson was involved in, which published "a first paper on this at XP 2004"; the name and metaphor are Fowler's
      - slug: andy-pols
        role: co-author with Stevenson of the XP 2004 paper on the practice
    source_link: https://martinfowler.com/bliki/StranglerFigApplication.html
  - concept_slug: continuous-integration
    display_name: Continuous integration
    one_line_gloss: >
      A development practice: integrate work into the mainline at least
      daily, verified by an automated build, so defects surface in hours
      not weeks.
    attribution_kind: popularized
    primary_author: kent-beck
    co_originators:
      - slug: kent-beck
        role: original XP practice; Fowler's article says "Kent defined the practice"
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
      Ward Cunningham named Fowler's version in 2003, and by Fowler's own
      account the word and the form were already in use elsewhere.
    attribution_kind: distributed
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
      Young popularized it alongside CQRS from 2007.
    attribution_kind: distributed
    primary_author: martin-fowler
    co_originators:
      - slug: greg-young
        role: popularized it with CQRS; early public explanation at QCon SF 2007
    source_link: https://martinfowler.com/articles/201701-event-driven.html

body_of_work:
  - title: Is High Quality Software Worth the Cost?
    type: essay
    year: 2019
    link: https://martinfowler.com/articles/is-quality-worth-cost.html
    editorial_note: >
      The keystone article. If you only read one Fowler piece, this is
      it. Names the economic argument, makes "internal quality" debatable,
      and turns the design-stamina graph into a tool for the conversation.
    read_first: true
    canonical: true
  - title: 'Refactoring: Improving the Design of Existing Code'
    type: book
    year: 1999
    link: https://martinfowler.com/books/refactoring.html
    editorial_note: >
      The book Fowler says has had "a high impact on the world of software
      development". The word is older: Fowler places the practice's
      foundations in the Smalltalk community, reports that its creators did
      not know where the term came from, and cites Leo Brodie's *Thinking
      Forth* (1984) as its first known printed use. William Opdyke wrote "the
      first thesis on refactoring" in 1992. The first edition is credited "With Kent Beck, John Brant,
      William Opdyke, and Don Roberts"; the 2018 second edition, again "with
      Kent Beck", moved from Java to JavaScript.
    canonical: true
  - title: Patterns of Enterprise Application Architecture
    type: book
    year: 2002
    link: https://martinfowler.com/books/eaa.html
    editorial_note: >
      The catalog that sets out *Domain Model*, *Transaction Script*, *Active
      Record*, *Data Mapper*, *Unit of Work*, *Service Layer* and *Repository*
      under those names, among forty or so patterns. Written with Dave Rice,
      Matthew Foemmel, Edward Hieatt, Robert Mee and Randy Stafford.
    canonical: true
  - title: Continuous Integration
    type: essay
    year: 2000
    link: https://martinfowler.com/articles/continuousIntegration.html
    editorial_note: >
      First published in 2000, rewritten in 2006 and revised in 2024; the
      link leads to the 2024 text. Fowler credits the practice to Kent Beck,
      who "defined the practice" within Extreme Programming in the 1990s. Read
      alongside Humble + Farley's *Continuous Delivery*, for which Fowler
      wrote the foreword.
    canonical: true
  - title: Microservices (with James Lewis)
    type: essay
    year: 2014
    link: https://martinfowler.com/articles/microservices.html
    editorial_note: >
      Read it together with Fowler's 2015 bliki entries Microservice Premium
      and Monolith First. The 2014 article closes by saying "not enough time
      has passed for us to make a full judgement"; Microservice Premium takes
      aim at teams "too eager to embrace microservices". Neither entry calls
      itself a correction of the article.
  - title: The bliki at martinfowler.com
    type: blog-series
    link: https://martinfowler.com/bliki/
    editorial_note: >
      The corpus medium. Not paratext: the bliki *is* the form Fowler's
      argument evolves in. Start at the alphabetical index; key entries
      include `BoundedContext`, `FeatureFlag` (formerly `FeatureToggle`),
      `TechnicalDebtQuadrant`, and `ConwaysLaw`, whose third response to the
      law is the inverse Conway maneuver.

reading: >
  In Fowler's account, software is a medium for shared understanding, and it
  decays whenever nobody tends it. The cost of that decay arrives quickly, in
  next week's velocity, and his design stamina hypothesis makes a parallel claim
  that internal quality pays back within weeks. His method is to write the moves
  down by name (refactoring, code smell, strangler fig, bounded context),
  attribute each to its origin, and revise them in public on the bliki. Naming
  turns tacit design choices into distinctions a team can argue about. His 2014
  microservices article with James Lewis said it was too early for a full
  judgement, and his 2015 entries warned against teams too eager to adopt; the
  record supports reading those entries either as a correction of the article
  or as its stated caution worked out.
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
  - Threat-model writeups (patterns + named distinctions instead of bullet lists)

limits:
  - headline: The 2014 microservices article and its 2015 follow-ups support two readings
    severity: local
    elaboration: >
      The article by James Lewis and Fowler closes on its own caution: "not
      enough time has passed for us to make a full judgement". In 2015
      Fowler's bliki entry Microservice Premium took aim at teams "too eager
      to embrace microservices", and Monolith First reported that "Almost
      all the successful microservice stories have started with a monolith
      that got too big and was broken up". Neither entry calls itself a
      correction or a retraction. One reading is that the article undersold
      the operational cost of distribution and the entries correct it; the
      other is that they work out the caution the article already stated.
      Read the follow-ups and Sam Newman's 2nd-edition *Building
      Microservices* alongside the original article.
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
  Fowler corpus. Even with the open question over the 2014 microservices
  article, even with the test-pyramid orthodoxy risk, even with the
  catalog-as-end-in-itself failure mode. Turning tacit design knowledge into
  named, attributed, debatable distinctions is what makes engineering practice
  transmissible across companies, generations, and disciplines. That doesn't
  go away when individual chapters age out.

adjacent_thinkers:
  - target_slug: kent-beck
    display_name: Kent Beck
    edge_type: extends
    edge_label: >
      The deepest collaborator. Credited on both editions of *Refactoring*,
      defined TDD, coined code smell while helping with that book,
      contributed the two-hat rule and the
      "make the change easy" motto. Most of what Fowler argues, he argues
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
      Fowler wrote the foreword to Evans's *Domain-Driven Design* (2003) and
      explains its bounded context on the bliki, citing the book as "the
      canonical source".
    strength: primary
    render_tier: deep
  - target_slug: alex-komoroske
    display_name: Alex Komoroske
    edge_type: parallel
    edge_label: >
      Same cartographer move, different domain. Fowler builds named-vocabulary
      instruments for software design, Komoroske builds them for organization
      design. Coordination headwind, Schelling-point organizations and gardener-vs-builder are the org-design equivalents of refactoring, bounded
      context, ubiquitous language.
    strength: primary
  - target_slug: christopher-alexander
    display_name: Christopher Alexander
    edge_type: antecedent
    edge_label: >
      The pattern-language form Fowler's catalogs descend from. Alexander went
      back to the borrowers in 1996 and named what a pattern language was for
      besides the format, which is part of why Fowler's catalog discipline
      matters: naming is necessary and it is not sufficient.
    strength: secondary
    render_tier: deep
  - target_slug: melvin-conway
    display_name: Melvin Conway
    edge_type: antecedent
    edge_label: >
      Conway's Law (1968), to which Fowler sets out three responses. The third
      is the *inverse Conway maneuver*, a term he credits to Jonny LeRoy and
      Matt Simons (2010). The boundary arc of Fowler's work runs through Conway's
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
  - target_slug: jez-humble
    display_name: Jez Humble
    edge_type: parallel
    edge_label: >
      Humble carries this page's build-side practices out to the far end of the
      route. Fowler's article on continuous integration sends readers to
      *Continuous Delivery* for the broader process. He published that book in
      his own signature series, and he wrote the bliki entries for the
      deployment pipeline and for continuous delivery with Humble's detailed
      help acknowledged on both.
    strength: primary
  - target_slug: gene-kim
    display_name: Gene Kim
    edge_type: parallel
    edge_label: >
      *Accelerate*, which Kim wrote with Nicole Forsgren and Jez Humble, is one
      of the books Fowler wrote a foreword for. Past that the two barely touch,
      and the gap is worth seeing. Kim's doctrine ships as a numbered set
      inside a novel or a handbook, which is a different way of putting
      vocabulary into other people's hands from the one this page describes.
      Same decade, same industry.
    strength: primary
  - target_slug: dan-north
    display_name: Daniel Terhorst-North
    edge_type: parallel
    edge_label: >
      Two bliki entries credit work Terhorst-North shared with others. The
      Given/When/Then entry records the template as developed with Chris Matts
      and adds a footnote on the credit he gave Ivan Moore when reviewing it;
      the blue-green entry leaves the name to "some foggy combination" of him
      and Humble.
    strength: secondary
    render_tier: deep
  - target_slug: dave-farley
    display_name: Dave Farley
    edge_type: parallel
    edge_label: >
      Farley carries continuous integration past the build. His 2007 paper is
      subtitled "Extending the range of Continuous Integration", and it takes
      each check-in on through a series of gates toward release.
    strength: secondary
    render_tier: deep

further_in:
  start_here: '*Is High Quality Software Worth the Cost?* (2019 article). The economic-argument keystone.'
  then_read:
    - 'The bliki entries `RefactoringMalapropism`, `CodeSmell`, `TwoHardThings`'
    - 'The *Continuous Integration* article (2000, rewritten 2006) and *Microservices* article (2014, with the MonolithFirst follow-up)'
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
    Every artifact Fowler writes up (pattern, refactoring, smell, deployment move,
    bounded context, strangler fig, feature toggle, the bliki itself) is an
    instrument toward that single argument. The book walks the six argument
    arcs (Economic, Vocabulary, Practice, Boundary, Flow, Modeling) plus the
    cartographer's meta-move (bliki as form, editor/platform as practice).
  source_path: ~/Camila/thinker-distillation/_working/martin-fowler/
---
