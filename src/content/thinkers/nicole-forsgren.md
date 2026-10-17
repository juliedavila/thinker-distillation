---
slug: nicole-forsgren
name: Nicole Forsgren
canonical_url: https://nicolefv.com
active_years: 2014–present
primary_domains:
  - engineering-measurement
  - developer-experience
  - organization-design
status: alive-active
inclusion_rationale: >
  Lead empirical researcher across three field-standard measurement frameworks
  (DORA four-keys, SPACE, DevEx) over twelve years; co-author of *Accelerate*
  (with Humble and Kim, 2018), co-author of the SPACE paper (ACM Queue 2021),
  co-author of DevEx (CACM 2023). The vocabulary practitioners now use to
  measure engineering performance is hers, with distributed-attribution that
  reflects the actual collaborative shape of the research. The empirical anchor
  every contrarian in the space defines themselves against.
thinker_type: mixed
doctrine_mode: mode-b
has_long_read: false
last_updated: 2026-09-20

live_edge_visible: true

tagline: The lead empirical researcher who turned engineering performance from vibe into instrument.
thirty_second_take: >
  Forsgren's twelve-year corpus is one sustained empirical argument: engineering
  performance is a lawful, measurable phenomenon, and the instruments to prove
  it are real. Throughput and stability don't trade off. They correlate. Elite
  teams cluster; the gap between elite and low is structural, not accidental.
  The DORA four-keys, SPACE five-dimensions, and DevEx three-dimensions are
  successive layers of the same research arc, each one a sharper instrument
  for the same underlying claim. The instrument is the gift; the empirical
  anchor is what makes the field's measurement conversation tractable at all.

background: >
  A PhD in management information systems from the University of Arizona, after
  an early career as a software engineer at IBM working on large-scale
  enterprise storage, and a stint at Chef Software before founding DORA (DevOps
  Research and Assessment) with Jez Humble and Gene Kim. DORA was acquired by
  Google in 2018, the same year the team's culminating book *Accelerate*
  shipped from IT Revolution. From there Forsgren went to GitHub as VP of
  Research, then to Microsoft as a Partner leading the Developer Experience
  Lab, and is now Senior Director of Developer Intelligence at Google. Her own
  site still describes the Microsoft role as current, so the Google role is the
  better-attested reading on a point where the sources disagree. The trajectory
  matters because it is itself an intellectual artifact: DORA (2014–2018) established that
  engineering performance was measurable at all; SPACE (2021) decomposed the
  measurement into five dimensions when single-metric thinking had broken; DevEx
  (2023–present) is consolidating the productivity question around three
  measurable system properties: feedback loops, cognitive load, flow state.
  Each transition is a sharper instrument applied to the same epistemological
  claim.
why_they_matter_as_a_thinker: >
  If you have argued about engineering measurement in the last five years, you
  have argued downstream of Forsgren whether you noticed or not. The four DORA
  metrics (deployment frequency, lead time for changes, change failure rate,
  time to restore service) sit in every engineering-leadership pitch deck,
  hiring rubric, and platform-engineering plan from 2020 onward. SPACE's five
  dimensions and DevEx's three dimensions are the post-DORA consolidations.
  What makes her portable as a *thinker* and not merely a researcher is the
  epistemological move underneath the instruments: the claim that engineering
  performance is a lawful phenomenon whose regularities can be measured, that
  the survey instrument is a real research tool, and that empirical anchoring
  beats vibe-based assertion every time. The frames carry that argument with
  them.

thesis: >
  Engineering performance is empirically tractable, and the instruments to
  prove it are real. The intuition that good software organizations differ
  structurally from bad ones, in kind rather than merely in degree, turns out to
  be testable, and the testing keeps confirming the claim. Throughput and
  stability do not trade off in well-run systems; they correlate. Elite
  performers cluster; the gap between elite and low is not normally
  distributed. The measurement substrate is operational: deployment frequency,
  lead time for changes, change failure rate, time to restore service. The
  decomposition is multi-dimensional: satisfaction, performance, activity,
  communication, efficiency become the SPACE; feedback loops, cognitive load,
  flow state become DevEx. Each layer is a sharper instrument for the same
  underlying argument: engineering work is a system, the system has lawful
  properties, the properties can be measured, and the measurement changes how
  the work gets organized. The cost of skipping the empirical work is that
  every measurement argument stays a measurement *argument* instead of a
  measurement program.
working_line: >
  The high performers were not simply doing more. They were doing better. The
  empirical regularity was that throughput and stability moved together, not
  apart. (Paraphrased from *Accelerate*, Chapter 2.)

named_frames:
  - concept_slug: dora-four-keys
    display_name: DORA four key metrics
    one_line_gloss: >
      Deployment frequency, lead time for changes, change failure rate, time to
      restore service: the four operational measures that empirically
      distinguish elite from low-performing software teams. Throughput and
      stability decoupled in measurement, then re-coupled in finding.
    attribution_kind: distributed
    primary_author: nicole-forsgren
    co_originators:
      - slug: jez-humble
        role: co-author *Accelerate*; *Continuous Delivery* lineage
      - slug: gene-kim
        role: co-author *Accelerate*; *DevOps Handbook* framing
    source_link: https://dora.dev/guides/dora-metrics/
    render_tier: foreground
  - concept_slug: space-framework
    display_name: SPACE framework
    one_line_gloss: >
      Satisfaction and well-being, Performance, Activity, Communication and
      collaboration, Efficiency and flow: the five-dimensional decomposition
      that broke the single-metric trap for developer productivity.
    attribution_kind: co-authored
    primary_author: nicole-forsgren
    co_originators:
      - slug: margaret-anne-storey
        role: co-author SPACE 2021
      - slug: brian-houck
        role: co-author SPACE 2021
      - slug: thomas-zimmermann
        role: co-author SPACE 2021
      - slug: chandra-maddila
        role: co-author SPACE 2021
      - slug: jenna-butler
        role: co-author SPACE 2021
    source_link: https://queue.acm.org/detail.cfm?id=3454124
    render_tier: foreground
  - concept_slug: devex-framework
    display_name: DevEx (Developer Experience)
    one_line_gloss: >
      Feedback loops, cognitive load, flow state: three measurable system
      properties that consolidate developer experience into the post-SPACE
      operational layer. The active research frontier; vocabulary still
      hardening.
    attribution_kind: co-authored
    primary_author: nicole-forsgren
    co_originators:
      - slug: margaret-anne-storey
        role: co-author DevEx 2023
      - slug: abi-noda
        role: first author DevEx 2023
      - slug: michaela-greiler
        role: co-author DevEx 2023
    source_link: https://queue.acm.org/detail.cfm?id=3595878
    render_tier: foreground
  - concept_slug: elite-vs-low-performers
    display_name: Elite vs. low performers
    one_line_gloss: >
      The empirical regularity: high-performing software teams cluster. They
      are not normally distributed across the metrics. The gap between elite
      and low is structural, not accidental, and the structure is reproducible
      across organizations and industries.
    attribution_kind: original
    primary_author: nicole-forsgren
    source_link: https://itrevolution.com/product/accelerate/
    render_tier: foreground
  - concept_slug: change-failure-rate
    display_name: Change failure rate as quality proxy
    one_line_gloss: >
      The percentage of changes to production that result in degraded service.
      A measurement frame rather than a bare metric: the choice to treat failure-rate
      as a system property rather than an incident property.
    attribution_kind: distributed
    primary_author: nicole-forsgren
    co_originators:
      - slug: jez-humble
        role: co-author *Accelerate*
      - slug: gene-kim
        role: co-author *Accelerate*
    source_link: https://dora.dev/guides/dora-metrics/
    render_tier: deep
  - concept_slug: time-to-restore
    display_name: Time to restore as operability
    one_line_gloss: >
      Mean time to restore service after an incident; the resilience axis of
      the DORA frame and the bridge to Allspaw / Woods territory.
    attribution_kind: distributed
    primary_author: nicole-forsgren
    co_originators:
      - slug: jez-humble
        role: co-author *Accelerate*
      - slug: gene-kim
        role: co-author *Accelerate*
    source_link: https://itrevolution.com/product/accelerate/
    render_tier: deep
  - concept_slug: survey-instrument-as-method
    display_name: Survey instrument as research method
    one_line_gloss: >
      The methodological commitment that an instrumented survey, properly
      designed and statistically validated, is a real research tool for
      sociotechnical systems, the right complement to telemetry rather than a
      substitute for it.
    attribution_kind: original
    primary_author: nicole-forsgren
    source_link: https://nicolefv.com
    render_tier: deep
  - concept_slug: throughput-stability-non-tradeoff
    display_name: Throughput–stability non-tradeoff
    one_line_gloss: >
      The empirical finding that contradicted the field's load-bearing
      intuition: in well-run systems, shipping more often and shipping more
      reliably are positively correlated. The "we can't ship faster, we'd
      break things" argument doesn't survive contact with the data.
    attribution_kind: distributed
    primary_author: nicole-forsgren
    co_originators:
      - slug: jez-humble
        role: co-author *Accelerate*
      - slug: gene-kim
        role: co-author *Accelerate*
    source_link: https://itrevolution.com/product/accelerate/
    render_tier: deep

body_of_work:
  - title: 'Accelerate: The Science of Lean Software and DevOps'
    type: book
    year: 2018
    link: https://itrevolution.com/product/accelerate/
    editorial_note: >
      The keystone. Co-authored with Jez Humble and Gene Kim. The book that
      consolidated four years of DORA research into a single argument with
      statistical teeth. If you only read one Forsgren piece, this is it.
    read_first: true
    canonical: true
  - title: The SPACE of Developer Productivity
    type: paper
    year: 2021
    link: https://queue.acm.org/detail.cfm?id=3454124
    editorial_note: >
      The post-DORA decomposition. Co-authored with Storey, Houck, Zimmermann,
      Maddila, and Butler. The piece that broke the single-metric trap and
      replaced it with a five-dimensional frame.
    canonical: true
  - title: 'DevEx: What Actually Drives Productivity'
    type: paper
    year: 2023
    link: https://queue.acm.org/detail.cfm?id=3595878
    editorial_note: >
      The current frontier. Written with Abi Noda (first author),
      Margaret-Anne Storey and Michaela Greiler. Consolidates the
      productivity question around three measurable system properties:
      feedback loops, cognitive load, flow state. Read after *Accelerate* and
      SPACE; this is the live edge.
    canonical: true
  - title: State of DevOps Reports (annual)
    type: blog-series
    year: '2014–present'
    editorial_note: >
      The empirical anchor. Annual survey-based reports from the DORA program;
      Google-hosted post-2018 acquisition. The data layer underneath every
      DORA argument; the version that pressure-tests *Accelerate*'s claims
      year over year.
  - title: DORA + SPACE + DevEx conference talks
    type: talk
    editorial_note: >
      Useful for seeing the research method itself, beyond the findings. The way
      she frames sample frames, regression analyses, and instrument design in
      a public talk is itself an artifact of her empirical commitment.

# §6 reading (iter-11 Reading Protocol v1). Built from _working/nicole-forsgren/grounding-pack.md;
# every sentence is mapped to its sources in _working/nicole-forsgren/reading-claims.md.
reading: >
  The part of Forsgren that travels furthest is a finding: in well-run delivery
  systems, throughput and stability rise together. That finding removes the most
  common argument for slowing change down, the belief that each additional
  deploy spends safety. DORA's stability measures, change failure rate and time
  to restore, make the safety question observable: how often a change degrades
  service, and how fast the team recovers when one does. Because DORA is itself
  the doctrine here, the four keys belong to the delivery system they were built
  to measure. Turning them into targets for teams invites the misuse the frame's
  own limits describe, where people manage to the number until it stops
  describing the system.
extension: >
  For a security organization, the throughput finding moves the first question
  about a fast-moving team from how fast it ships to how well it recovers. The
  four keys are silent on what each change does to an adversary's options, so a
  team can post elite scores while shipping exploitable code at the same pace.
  AI-assisted development is likely to widen that gap, because generated code
  can raise deployment frequency faster than the team's understanding of what it
  shipped, and the dashboard would read that as improvement. The security
  measures worth adding sit on the same pipeline: the share of deploys that pass
  enforced security gates, and time to remediate an exploitable finding. Both
  inherit the Goodhart risk the four keys carry, so they work only as
  diagnostics of the delivery system. Read that way, secure delivery becomes a
  measurable property of the system itself.
reading_review:
  protocol: reading-protocol-v1
  date: 2026-09-16
  verdict: accept-with-edits
  council_transcript: ~/.claude/LIFEOS/MEMORY/COUNCIL/distillery-reading-nicole-forsgren-20260916-172704-quick/transcript.md
  grounding_pack: _working/nicole-forsgren/grounding-pack.md
  claims: _working/nicole-forsgren/reading-claims.md
  dissent: false
limits:
  - headline: The sample frame is surveys, not telemetry
    severity: structural
    elaboration: >
      The State of DevOps reports rely on self-report survey instruments;
      respondents may rationalize their team into the elite tier. The empirical
      regularity (clustering, throughput-stability correlation) is real and
      reproduces year over year, but the precision of the cluster boundary is
      contested. Survey research is a real method, but it is a different method
      from instrumented telemetry, and conflating the two over-claims what the
      instrument can resolve.
  - headline: The metrics are operational, not strategic
    severity: structural
    elaboration: >
      DORA tells you whether you're shipping fast and recovering fast; it does
      not tell you whether you are shipping the right thing. Goodhart's law
      applies: when the measure becomes the target, optimization can shift to
      the metric at the expense of the value the metric was meant to track.
      The frame is a measurement spine for engineering operations, not a
      product strategy.
  - headline: '"Elite vs. low" can read as managerial threat'
    severity: local
    elaboration: >
      In adopting organizations, "we need to be elite" becomes a stick that
      ignores whether the team has the operational substrate to actually
      become elite. The empirical claim is honest; the rhetorical use is
      sometimes punitive. The frame is more useful as diagnosis than as
      directive.
  - headline: The instruments evolve faster than the literature settles
    severity: local
    elaboration: >
      DORA → SPACE → DevEx is genuine intellectual progression, but each
      transition leaves earlier consumers with stale vocabulary. Practitioners
      cite DORA when they mean SPACE; SPACE when they mean DevEx. The frame is
      still living, which is honest, but consumers don't always know which
      version they're holding.

still_load_bearing_despite: >
  The empirical anchor matters precisely because every contrarian in the
  engineering-measurement space defines themselves against this data. Without
  Forsgren's instrumented baseline, the entire "is engineering performance
  measurable" conversation would still be vibe-based assertion. The limits are
  reasons to combine Forsgren with other frames (Komoroske on the upstream
  cause, Allspaw and Woods on resilience as an independent system property,
  and adversarial-quality measurement on the security substrate), not reasons
  to ignore the measurement spine she built.

adjacent_thinkers:
  - target_slug: alex-komoroske
    display_name: Alex Komoroske
    edge_type: antecedent
    edge_label: >
      Komoroske names coordination headwind as the upstream cause; Forsgren
      names the downstream measurement. The headwind frame predicts what DORA
      empirically detects: slow lead-time-for-changes is what the headwind
      tax looks like when you instrument it.
    strength: primary
  - target_slug: fred-brooks
    display_name: Fred Brooks
    edge_type: antecedent
    edge_label: >
      Brooks's Law (1975) anchors the coordination-cost intuition that
      lead-time-for-changes measures. Forsgren empirically vindicated
      Brooks's structural claim about the cost of growing engineering teams
      under deadline.
    strength: primary
  - target_slug: john-allspaw
    display_name: John Allspaw
    edge_type: parallel
    edge_label: >
      Both traditions look at recovery from failure, and they read it differently. DORA measures recovery by its duration, now failed deployment recovery time. Allspaw's 2018 post on incident data, which does not mention DORA, counts time-to-resolve among the measures that yield "very little insight", because two incidents of the same length can differ widely in surprise and uncertainty.
    strength: primary
  - target_slug: david-woods
    display_name: David Woods
    edge_type: parallel
    edge_label: >
      Woods's graceful extensibility and adaptive capacity meet DORA's
      stability measurement at the resilience-as-measurable-system boundary.
      Woods explains what resilience is structurally; Forsgren measures one
      operational footprint of it.
    strength: primary
  - target_slug: will-larson
    display_name: Will Larson
    edge_type: extends
    edge_label: >
      A reader who accepts the instruments and asks what comes after the
      number. Larson called Accelerate's definition of developer productivity
      one of the best he had encountered, and in December 2024 grouped DORA,
      SPACE and DX Core 4 together as great frameworks. The gap he names is the
      one his own title gives, a theory of improvement: an output metric is
      effective at showing that something improved and poor at directing
      attention toward improving it, so the program that collects it owes its
      readers an account of how the number moves.
    strength: primary
  - target_slug: kent-beck
    display_name: Kent Beck
    edge_type: parallel
    edge_label: >
      The Goodhart worry, argued from the same side of the table. Answering
      McKinsey in August 2023 with Gergely Orosz, Beck put the four DORA
      measures on the outcome-and-impact side of his own diagram and argued
      against effort metrics, because "measuring leads to behavior change
      including coming up with creative ways to improve those measurement
      scores even at the expense of results that everyone agrees matter."
      The piece never names Forsgren.
    strength: secondary
    render_tier: deep
  - target_slug: dan-north
    display_name: Daniel Terhorst-North
    edge_type: parallel
    edge_label: >
      The attribution argument. Reviewing McKinsey's productivity framework in
      October 2023, North called himself a fan of the DORA *Accelerate*
      research and the later SPACE model, faulted McKinsey for failing to cite
      Forsgren as lead researcher on both, and wrote that the research "has
      been analysed, critiqued, and studied by industry analysts, and has stood
      up to scrutiny."
    strength: secondary
    render_tier: deep

  - target_slug: camille-fournier
    display_name: Camille Fournier
    edge_type: parallel
    edge_label: >
      Both work on how engineering organizations perform. Forsgren measures the
      outcomes of delivery systems; Fournier describes how to organize the
      teams and platforms that produce them.
    strength: secondary
  - target_slug: charity-majors
    display_name: Charity Majors
    edge_type: parallel
    edge_label: >
      The telemetry side of measurement. Forsgren measures delivery across
      organizations with research instruments; Majors instruments one running
      system so any later question about it can be answered.
    strength: secondary
  - target_slug: jez-humble
    display_name: Jez Humble
    edge_type: parallel
    edge_label: >
      Humble supplies the machinery these measures read. The deployment
      pipeline and the split between deploying code and releasing a feature
      describe how a change reaches production; the four keys describe how well
      that route performs. The two founded DORA with Gene Kim and wrote
      *Accelerate* together, and his page holds the mechanism rather than
      restating the measures.
    strength: primary
  - target_slug: gene-kim
    display_name: Gene Kim
    edge_type: parallel
    edge_label: >
      Kim is the co-author who was in this research first. *Accelerate*'s own
      preface records Puppet inviting him into the 2012 study and his bringing
      Humble in, two years before the report she joined for. That order of
      arrival is why four of the frames above credit him. His page holds a
      different output of the same years: numbered principles, published as
      posts and dramatized in a novel, with the measures left here.
    strength: primary
  - target_slug: kelly-shortridge
    display_name: Kelly Shortridge
    edge_type: parallel
    edge_label: >
      Shortridge takes this delivery research into a security argument.
      "From Lemons to Peaches" (2022) cites the 2019 State of DevOps report,
      Forsgren et al., for the finding that deploying on demand is correlated
      with spending less time remediating security issues.
    strength: secondary
    render_tier: deep
  - target_slug: dave-farley
    display_name: Dave Farley
    edge_type: parallel
    edge_label: >
      A practitioner's book built on the stability and throughput model from
      *Accelerate*. *Modern Software Engineering* (2021), by Farley alone,
      applies the two measures in a section of its third chapter and names
      *Accelerate* as the place to read more about them.
    strength: secondary
    render_tier: deep

further_in:
  start_here: '*Accelerate* (Forsgren, Humble, Kim, 2018). The keystone.'
  then_read:
    - The SPACE of Developer Productivity (ACM Queue 2021)
    - 'DevEx: What Actually Drives Productivity (ACM Queue 2023)'
    - The most recent State of DevOps report (annual)
  if_you_want_breadth: >
    Poppendieck's *Lean Software Development* and Goldratt's *The Goal* for
    the lean / theory-of-constraints antecedents; Komoroske's coordination-headwind slide deck for the upstream cause DORA measures the downstream effect
    of; Allspaw's 2018 post on incident data for what a recovery time leaves out.

live_edge:
  current_focus: >
    Developer-experience measurement in the AI era, now from Google: turning
    feedback loops, cognitive load, and flow state into instrumented system
    properties.
  summary: >
    Forsgren extended the SPACE framework into the DevEx layer across her
    Microsoft years, with three named instruments (feedback loops,
    cognitive load, flow state) taking the place of activity and efficiency
    as the operational telemetry for developer experience. The 2023 paper
    (with Noda, Storey and Greiler) lays out the consolidation; the work since
    has been about pressure-testing the dimensions across organizations of
    different sizes and clarifying what counts as a measurable feedback loop.
    The DevEx Index, a survey instrument that measures the dimensions,
    is the live edge of the empirical research, and *Frictionless* (2025, with
    Abi Noda) is the first book-length statement of it. Vocabulary is not yet
    stable; we are watching this frame harden in real time.
  recent_work:
    - title: 'DevEx: What Actually Drives Productivity'
      year: 2023
      kind: essay
      with: Abi Noda, Margaret-Anne Storey, Michaela Greiler
      note: >
        The ACM Queue piece, also carried by CACM later that year; the
        cleanest single statement of the post-SPACE consolidation.
    - title: DevEx in Action
      year: 2024
      kind: essay
      with: Eirini Kalliamvakou, Abi Noda, Michaela Greiler, Brian Houck, Margaret-Anne Storey
      note: >
        Pressure-testing DevEx in operating organizations; the operational
        case studies that move the frame from paper to practice.
    - title: State of DevOps Report 2024
      year: 2024
      kind: series
      note: >
        Continuing the empirical anchor that started in 2014; the DORA program
        continues post-Google-acquisition.
    - title: 'Frictionless: 7 Steps to Remove Barriers, Unlock Value, and Outpace Your Competition in the AI Era'
      year: 2025
      kind: book
      with: Abi Noda
      note: >
        Announced November 2025. The DevEx research packaged as an end-to-end
        system for improving developer experience at scale, with workbooks for
        the teams doing the measuring.
  last_observed: 2026-09-20
---
