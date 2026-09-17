---
slug: charity-majors
name: Charity Majors
canonical_url: https://charity.wtf
active_years: 2016–present
primary_domains:
  - observability
  - operations
  - engineering-management
status: alive-active
inclusion_rationale: >
  A decade of sustained writing at charity.wtf and on the Honeycomb blog, plus
  *Observability Engineering* (O'Reilly, 2022, with Liz Fong-Jones and George
  Miranda). Inclusion rests on the older corpus rather than the newest label:
  the engineer/manager pendulum (2017), which already appears on this site as
  a counterposition on Fournier's page; "test in production" (QCon SF, 2018);
  and her working definition of observability as the ability to ask unpredicted
  questions of a running system (2020). Uptake is independent of her: the
  ThoughtWorks Technology Radar carried "Observability 2.0" in October 2024
  without naming her or Honeycomb. Attribution needs care, since "observability"
  is Kálmán's term from control theory and the "three pillars" she attacks
  belong to Bourgon and Sridharan. In March 2025 she said she would avoid the
  "1.0" and "2.0" labels herself. Inclusion Council 5 to 0, 2026-09-17.
thinker_type: mixed
doctrine_mode: mode-a
has_long_read: false
last_updated: 2026-09-17

tagline: The operations engineer who argued that you cannot understand a running system by asking it questions you planned in advance.
thirty_second_take: >
  Majors writes about the gap between the questions a monitoring dashboard was
  built to answer and the questions a failing system actually raises. Her
  working test for observability is whether an engineer can ask any question of
  a live system, including one nobody predicted, without shipping new code
  first. That test led her to attack the industry's "three pillars" of metrics,
  logs and traces as a grab bag that stores every request several times over,
  and to argue for one record instead: a wide, structured event per request,
  rich in high-cardinality fields such as user id and build id, with metrics
  and traces derived from it at read time. The argument runs through Honeycomb,
  the company she co-founded with Christine Yen, which sells that
  architecture. Her management writing makes a separate case: engineers should
  swing between hands-on work and management rather than climb past one of
  them.

background: >
  An operations engineer for her whole career, by her own description, after
  coming to tech from music and leaving college early. She ran systems at
  Linden Lab on Second Life, then at Parse, and stayed through Facebook's
  acquisition of Parse. At Facebook her team fed Parse data into Scuba, an
  in-memory store built for ad hoc queries over live data, which she calls
  "aggressively hostile to users" while crediting it with doing "one thing
  really well, which is let you slice and dice in real time on dimensions that
  have very high cardinality." In 2016 she and Christine Yen founded Honeycomb
  to rebuild that capability as a product, where she is CTO. She has written at
  charity.wtf since at least 2017 and co-wrote *Observability Engineering*
  (2022) with Liz Fong-Jones and George Miranda, and *Database Reliability
  Engineering* before it. The argument comes from running systems that failed
  in ways nobody had predicted.
why_they_matter_as_a_thinker: >
  Her definition of observability gave practitioners a test they can apply to
  their own tooling: can it answer a question nobody thought to ask in advance?
  That test reframed a word the industry had flattened into a synonym for
  monitoring, and it put cardinality, the number of distinct values a field can
  hold, at the center of what a telemetry system is for. Engineers who have
  never read her use the vocabulary: the ThoughtWorks Radar described
  high-cardinality event data in a single store without mentioning her name.
  Her management writing travels on its own track, where the pendulum is the
  standing counterposition to management as a ladder.

thesis: >
  Complex systems fail in ways their builders did not predict, so the useful
  question about telemetry is whether it can answer a question formed after
  the failure began, whatever it collects along the way. Pre-aggregated metrics
  cannot, because the decision about what to count was made before the
  question existed. Her remedy is to record one wide, structured event per
  unit of work, keep its high-cardinality fields intact, and derive dashboards,
  traces and alerts from that single record at read time. The same instinct
  drives her other positions: staging environments never match production, so
  the useful testing happens in production behind guardrails, and management is
  a different job rather than a rung above engineering, so good engineers
  should be able to move between the two.
working_line: >
  Can you understand what is happening inside the system, can you understand
  any internal state the system may get itself into, simply by asking questions
  from the outside? ("Observability is a Many-Splendored Definition,"
  charity.wtf, 2020.)

named_frames:
  - concept_slug: observability-as-unknown-unknowns
    display_name: Observability as unknown-unknowns
    one_line_gloss: >
      A system is observable when an engineer can ask any question of it,
      including one nobody predicted, without shipping new instrumentation
      first. Her framing keeps the emphasis on questions that were never
      anticipated, which is where monitoring dashboards run out. The word
      itself comes from control theory, where Kálmán defined observability as
      how well internal state can be inferred from external outputs.
    attribution_kind: extended
    primary_author: charity-majors
    co_originators:
      - slug: rudolf-kalman
        role: coined observability in control theory, "On the general theory of control systems" (1960)
    source_link: https://charity.wtf/2020/03/03/observability-is-a-many-splendored-thing/
    render_tier: foreground
  - concept_slug: wide-structured-events
    display_name: Arbitrarily wide structured events
    one_line_gloss: >
      One structured record per unit of work, carrying as many fields as the
      context requires, kept whole instead of being reduced to counters. The
      pattern comes from Facebook's Scuba, which Majors used at Parse and
      credits by name; Honeycomb rebuilt it as a product.
    attribution_kind: extended
    primary_author: charity-majors
    co_originators:
      - slug: christine-yen
        role: co-founder of Honeycomb, which built the pattern into a product
    source_link: https://research.facebook.com/publications/scuba-diving-into-data-at-facebook/
    render_tier: foreground
  - concept_slug: high-cardinality
    display_name: High cardinality as the point
    one_line_gloss: >
      The fields worth keeping are the ones with many distinct values: user id,
      build id, feature flag, request id. Those are the fields that identify
      which request broke, and the ones metrics tooling drops first because
      they are expensive to index. Cardinality is an older database term she
      applied to telemetry design.
    attribution_kind: extended
    primary_author: charity-majors
    source_link: https://www.honeycomb.io/blog/time-to-version-observability-signs-point-to-yes
    render_tier: foreground
  - concept_slug: unified-storage-versus-pillars
    display_name: Unified storage versus the multiple pillars
    one_line_gloss: >
      Storing telemetry once and deriving every view from it at read time,
      against the practice of keeping metrics, logs and traces in separate
      tools. She first published this as "observability 1.0 versus 2.0." In
      March 2025 she wrote that she would "mostly avoid" the version labels
      after vendors objected, and now prefers "the multiple pillars model" and
      "the unified or consolidated storage model." The pillars framing she
      argues against is Bourgon's and Sridharan's.
    attribution_kind: original
    primary_author: charity-majors
    source_link: https://charity.wtf/2024/11/19/there-is-only-one-key-difference-between-observability-1-0-and-2-0/
    render_tier: foreground
  - concept_slug: test-in-production
    display_name: Test in production
    one_line_gloss: >
      Staging environments cannot reproduce production, so the honest response
      is to build the guardrails that make testing against real traffic safe:
      feature flags, progressive deployment and instrumentation. The practice
      predates her; her talk made the argument a position engineers could
      defend out loud.
    attribution_kind: popularized
    primary_author: charity-majors
    source_link: https://www.infoq.com/presentations/testing-production-2018/
    render_tier: foreground
  - concept_slug: engineer-manager-pendulum
    display_name: The engineer/manager pendulum
    one_line_gloss: >
      Management is a change of profession rather than a promotion, and the
      strongest technical leaders swing between the two roles instead of
      leaving one behind. In her words, the best frontline engineering managers
      are never more than two or three years from hands-on work.
    attribution_kind: original
    primary_author: charity-majors
    source_link: https://charity.wtf/2017/05/11/the-engineer-manager-pendulum/
    render_tier: foreground

body_of_work:
  - title: Observability is a Many-Splendored Definition
    type: essay
    year: 2020
    link: https://charity.wtf/2020/03/03/observability-is-a-many-splendored-thing/
    editorial_note: >
      The clearest statement of her test for observability, and of what she
      thinks vendors did to the word. Start here.
    read_first: true
    canonical: true
  - title: 'Observability Engineering: Achieving Production Excellence'
    type: book
    year: 2022
    link: https://www.honeycomb.io/observability-engineering-oreilly-book
    editorial_note: >
      Written with Liz Fong-Jones and George Miranda, now in a second edition
      and available free from Honeycomb. The practical version of the argument,
      including instrumentation, sampling and service-level objectives. Read it
      knowing the publisher is the vendor.
    canonical: true
  - title: There Is Only One Key Difference Between Observability 1.0 and 2.0
    type: essay
    year: 2024
    link: https://charity.wtf/2024/11/19/there-is-only-one-key-difference-between-observability-1-0-and-2-0/
    editorial_note: >
      The unified-storage argument in its sharpest form: one source of truth,
      aggregation at read time. Pair it with "Another observability 3.0 appears
      on the horizon" (2025), where she drops the version labels.
  - title: Yes, I Test in Production (And So Do You)
    type: talk
    year: 2018
    link: https://www.infoq.com/presentations/testing-production-2018/
    editorial_note: >
      The QCon talk that made the case in public, with the line that trying to
      mirror staging to production is "a fool's errand."
  - title: The Engineer/Manager Pendulum
    type: essay
    year: 2017
    link: https://charity.wtf/2017/05/11/the-engineer-manager-pendulum/
    editorial_note: >
      Short, and the piece most often cited back to her by people who have
      never read her observability writing. The counterposition to a
      management ladder.
  - title: 'Scuba: Diving into Data at Facebook'
    type: paper
    year: 2013
    link: https://research.facebook.com/publications/scuba-diving-into-data-at-facebook/
    editorial_note: >
      Not hers, and the reason her argument exists. The Facebook paper on the
      in-memory store she used at Parse; she has presented it herself at Papers
      We Love. Read it to see which parts of the pattern she inherited.

reading: >
  Majors judges telemetry by one test: can an engineer ask a question of a live
  system that nobody thought to ask while designing it. Pre-aggregated metrics
  fail that test, because the choice of what to count was made before the
  question existed. Her answer is one wide structured record per unit of work,
  with its high-cardinality fields kept whole, so views can be derived from it
  at read time instead of being fixed at write time. The fields she insists on
  keeping are the ones that identify a single request: user id, build id,
  feature flag. The pattern came from Scuba at Facebook, and the company she
  co-founded sells it. The same instinct runs through her other positions, that
  staging cannot reproduce production and that management is a different job
  rather than a rung above engineering.
extension: >
  Prompt injection is architecturally unsolvable, so mitigation stays layered
  and partial, and the incident that gets through arrives in a form nobody wrote
  a detection for. Her test transfers directly: after an agent does something
  unexpected, can anyone ask which tool call, which prompt, which user, without
  shipping new instrumentation first. That argues for one wide record per agent
  action, carrying the identifiers an investigation needs rather than counts of
  blocked attempts. Sampling to afford that record removes the rare event an
  investigation wants, which is the objection her critic raises about forensics,
  so the reach of a wide record into security work stays unproven. A record
  built from full prompts and tool payloads also becomes a store of secrets and
  personal data to defend, and it still says nothing about whether the action
  was permitted, so this buys investigation and not assurance.
limits:
  - headline: The prescription is also the product
    severity: structural
    elaboration: >
      Majors is CTO and co-founder of Honeycomb, which sells the unified
      storage architecture her writing recommends, and much of that writing is
      published on the company's blog. A reader should weigh the argument
      knowing that the person making it profits from its adoption, including
      any adoption the reading below argues for. She is direct about the
      commercial context, including about vendors who adopted her vocabulary
      without changing their products.
  - headline: Cost and sampling undercut the single record
    severity: structural
    elaboration: >
      Laban Eilers's 2025 response grants the appeal and argues the economics
      break it: the cost gap between metrics and wide events is large enough
      that teams must sample, sampling makes the record incomplete for
      forensic work, and logs come back as the fallback. He adds that most
      infrastructure and third-party services emit only logs and metrics, so
      the single source of truth is unreachable in practice for much of a real
      estate.
  - headline: The version labels did not survive contact
    severity: local
    elaboration: >
      She published the argument as "observability 1.0 versus 2.0." In March
      2025 she wrote that she would "mostly avoid" those labels, because
      vendors "got really bristly about having '1.0' retroactively applied,"
      which "reads like a subtle diss." Her current phrasing is "the multiple
      pillars model" and "the unified or consolidated storage model." A page or a
      practitioner citing the version numbers is citing a framing their author
      has partly abandoned.
  - headline: It answers what happened, not whether it was allowed
    severity: structural
    elaboration: >
      Wide events with high-cardinality fields are built to reconstruct what a
      system did, when, and to whom. Nothing in the model establishes whether
      an action was authorized, and her corpus does not address write-path
      integrity, tamper evidence or retention, which is what a security team
      needs from a record it may have to defend. Treat her work as evidence for
      investigation rather than assurance.

still_load_bearing_despite: >
  The test at the center survives every limit above, because it is a question
  about tooling rather than a claim about a product: can this system answer a
  question formed after the trouble started? Teams that cannot answer yes are
  choosing, usually without noticing, to be limited to the questions someone
  predicted during design. Her cardinality point holds for the same reason. The
  fields that identify which request failed and which customer felt it are the
  first to be dropped for cost, and they are the ones an investigation needs.

adjacent_thinkers:
  - target_slug: camille-fournier
    display_name: Camille Fournier
    edge_type: parallel
    edge_label: >
      The two halves of the same career argument. Fournier maps management as a
      sequence of distinct roles; Majors argues the strongest leaders swing
      between management and hands-on engineering instead of settling into one.
      Fournier's page already carries the pendulum as its counterposition.
    strength: primary
  - target_slug: john-allspaw
    display_name: John Allspaw
    edge_type: parallel
    edge_label: >
      Two layers of the same incident. Allspaw works on how engineers make
      sense of a failure in progress; Majors works on whether the telemetry
      lets them ask the questions that sensemaking requires.
    strength: primary
  - target_slug: nicole-forsgren
    display_name: Nicole Forsgren
    edge_type: parallel
    edge_label: >
      Both treat instrumentation as the basis of an argument, from opposite
      ends. Forsgren measures delivery outcomes across organizations through
      research instruments; Majors instruments a single running system so that
      any question about it can be asked later.
    strength: primary
  - target_slug: cindy-sridharan
    display_name: Cindy Sridharan
    edge_type: parallel
    edge_label: >
      *Distributed Systems Observability* (2018) presented metrics, logs and
      traces as the three pillars, following Peter Bourgon's 2017 framing. That
      is the model Majors argues against, which makes Sridharan the position on
      the other side of her central claim rather than a critic of it.
    strength: primary
  - target_slug: rudolf-kalman
    display_name: Rudolf E. Kálmán
    edge_type: antecedent
    edge_label: >
      Defined observability for control theory in 1960 as how well a system's
      internal state can be inferred from its outputs. Majors carries the term
      into software telemetry; the word is his.
    strength: secondary
  - target_slug: laban-eilers
    display_name: Laban Eilers
    edge_type: critiques
    edge_label: >
      "Are we ready for Observability 2.0?" (2025) accepts the goal and
      disputes the economics: the cost gap forces sampling, sampling breaks
      forensic completeness, and most infrastructure emits only logs and
      metrics.
    strength: secondary
  - target_slug: david-woods
    display_name: David Woods
    edge_type: parallel
    edge_label: >
      Both write about systems that surprise their operators. Woods names the
      reserves that absorb surprise; Majors asks whether the instruments can
      describe a surprise once it arrives.
    strength: secondary
    render_tier: deep

further_in:
  start_here: '"Observability is a Many-Splendored Definition" (2020).'
  then_read:
    - '"The Engineer/Manager Pendulum" (2017)'
    - '"Yes, I Test in Production (And So Do You)" (QCon SF, 2018)'
    - '"There Is Only One Key Difference Between Observability 1.0 and 2.0" (2024)'
  if_you_want_depth: >
    *Observability Engineering* (2022, with Liz Fong-Jones and George Miranda),
    free from Honeycomb, and the Scuba paper (VLDB, 2013) for the pattern she
    inherited.
  if_you_want_breadth: >
    Cindy Sridharan's *Distributed Systems Observability* for the three-pillars
    model she argues against, and Laban Eilers's "Are we ready for
    Observability 2.0?" for the strongest published case against the single
    record.
---
