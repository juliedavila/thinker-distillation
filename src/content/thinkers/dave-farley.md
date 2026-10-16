---
slug: dave-farley
name: Dave Farley
canonical_url: https://www.davefarley.net
active_years: 2007–present
primary_domains:
  - software-delivery
  - software-engineering
  - testing
status: alive-active
inclusion_rationale: >
  Inclusion Council 5 to 0, 2026-10-09, on a narrow basis. The page earns its
  place through what the Humble page cannot hold: the 2004 to 2007 origin of
  the deployment pipeline, LMAX, and the sole-authored 2021 book. The frame
  that travels with no name attached is the deployment pipeline, and the
  record for it is shared. Humble's February 2010 post credits Farley and Mark
  Rickmeier with the idea in 2004 and names a 2005 blog entry by Sam Newman
  as its first public write-up, and Farley's single-author 2007 paper uses the name
  "Deployment Pipeline". The pipeline is filed `distributed` here, following
  SCHEMA section 2 for a frame that came from a team, where the Council split
  three to two between that and `co-authored`. Julie's call on 2026-10-09:
  `distributed` on all three holders, with `primary_author: dave-farley`
  on Humble's own 2010 credit of the 2004 idea to Farley and Rickmeier,
  and Humble a co-originator for the 2006 paper and the book. Mark
  Rickmeier and Sam Newman are in this page's `co_originators` on Humble's
  2010 post and Newman's own 2009 history, and the merge request that adds
  this page adds the same lines to both live copies. Outside uptake of his other frames
  comes from readers who credit him by name (Patrick Kua for the 2021 book,
  Chris James for the layered acceptance test, which James takes from a
  Farley video), so it is uptake and not yet vocabulary. No antecedent search
  for the two-part
  learning and complexity split was run, so that frame is `extended` and no
  field calls it new. Until the merge request that adds this page, the
  Humble page's pipeline gloss said the 2006 paper was the first to describe
  the pipeline, which Humble's own 2010 post contradicts, and the Humble and
  Terhorst-North copies of the frame omitted Farley from `co_originators`;
  that merge request corrects both. The Reactive Manifesto `primary_author` (`jonas-boner`, first
  in the manifesto's alphabetical list) has no ranking behind it, and Julie
  kept it as it is (2026-10-09).
thinker_type: mixed
doctrine_mode: mode-a
has_long_read: false
last_updated: 2026-10-09

tagline: The engineer whose 2007 paper set out the deployment pipeline as a release candidate passing through gates, and whose 2021 book defines software engineering as an empirical discipline.
thirty_second_take: >
  A release candidate is built from a check-in and moves through a sequence of
  gates toward production, with the aim that the same binary runs
  at every stage. Farley's single-author 2007 paper calls that sequence a
  deployment pipeline; by Jez Humble's account Farley and Mark Rickmeier
  came up with the idea in 2004, and others wrote it up under other names
  before the paper.
  Humble and Farley then published *Continuous Delivery* in 2010. Farley led
  software development at LMAX, an exchange built for very high performance,
  and is one of five authors of its Disruptor paper. His sole-authored 2021
  book, *Modern Software Engineering*, is broader and proposes a definition
  in its preface: software engineering is an empirical, scientific approach to practical
  problems in software, and the book is organized around becoming expert at
  learning and at managing complexity.

background: >
  By his own account he has worked with computers for nearly forty years and
  took up agile techniques, among them iterative development, continuous
  integration and automated testing, from the early 1990s. He was a technical
  principal at ThoughtWorks for four and a half years, and the 2007 pipeline
  paper carries a ThoughtWorks Studios copyright. He then became Head of
  Software Development at the London Multi Asset Exchange (LMAX), where he was
  by May 2011, the date of the Disruptor paper. He now runs Continuous
  Delivery Ltd, as founder, managing director and independent consultant, and
  launched a YouTube channel in April 2020; his company's page credits him
  with two channels, named Continuous Delivery and Modern Software
  Engineering.
why_they_matter_as_a_thinker: >
  The deployment pipeline is the frame that travels with no name attached:
  Fowler's 2013 bliki entry on it, written with Humble's help, credits nobody
  with the idea or the name. His other frames travel a shorter distance,
  among readers who name him. Patrick
  Kua's review summarizes the 2021 book by its two halves, optimize for learning and
  optimize for managing complexity, and Chris James's *Learn Go with Tests*
  teaches his layered structure for acceptance tests and sets one of his
  videos as prerequisite viewing. What makes the work portable is that each
  idea comes with a structure a team can build, gates in one case and layers
  in the other.

thesis: >
  Read across the 2007 paper and the 2021 book, the site takes the argument
  to be that every
  change should produce evidence about whether the software works, early
  enough to act on. The 2007 paper applies that to release. A check-in starts
  a release candidate through a series of gates, and the same binary is meant
  to run in every environment, so that each gate is testing the thing that
  would ship.
  The 2021 book widens it into a definition of the discipline, "the
  application of an empirical, scientific approach to finding efficient,
  economic solutions to practical problems in software", and divides the
  skill in two: learning, through iteration, feedback, incrementalism and
  experiment, and managing complexity, through modularity, cohesion and
  coupling. The measures he uses to judge the outcome, stability and
  throughput, come from *Accelerate*, and he sends readers there for them.
working_line: >
  Software engineering is the application of an empirical, scientific approach
  to finding efficient, economic solutions to practical problems in software.
  (*Modern Software Engineering*, 2021.)

named_frames:
  - concept_slug: deployment-pipeline
    display_name: The deployment pipeline
    one_line_gloss: >
      A release candidate started at every check-in and carried through a
      sequence of gates toward production, with one binary meant to
      run in every environment. The record gives it several parents. Humble's
      2010 post credits Farley and Mark Rickmeier with the idea in 2004 and
      names a 2005 blog entry by Sam Newman, who called it a "build
      pipeline", as the first public write-up; the 2006 paper by Humble, Chris Read and Dan North calls it a
      deployment production line. Farley's 2007 paper uses the name
      "Deployment Pipeline", and in a 2021 interview he says "I invented the
      term deployment pipeline".
    attribution_kind: distributed
    primary_author: dave-farley
    co_originators:
      - slug: jez-humble
        role: co-author, "The Deployment Production Line," AGILE 2006, and first author of *Continuous Delivery* (2010)
      - slug: chris-read
        role: co-author, "The Deployment Production Line," AGILE 2006
      - slug: dan-north
        role: co-author, "The Deployment Production Line," AGILE 2006
      - slug: mark-rickmeier
        role: came up with the idea with Farley in 2004, per Humble's February 2010 post
      - slug: sam-newman
        role: wrote it up as a "build pipeline" in a 2005 blog entry, which Humble's February 2010 post names as its first public documentation
    source_link: https://continuousdelivery.com/wp-content/uploads/2010/01/The-Deployment-Pipeline-by-Dave-Farley-2007.pdf
    render_tier: foreground
  - concept_slug: optimize-for-learning-and-complexity
    display_name: Optimize for learning, optimize for managing complexity
    one_line_gloss: >
      Software engineering as an empirical, scientific approach to practical
      problems, practised through two kinds of expertise: learning (working
      iteratively, feedback, incrementalism, empiricism, experiment) and
      managing complexity (modularity and cohesion onward). The two halves
      are the titles of Parts II and III of *Modern Software Engineering*
      (2021). The book cites Margaret Hamilton, David Parnas and Michael
      Nygard's model of coupling among its sources.
    attribution_kind: extended
    primary_author: dave-farley
    source_link: https://www.informit.com/store/modern-software-engineering-doing-what-works-to-build-9780137314911
    render_tier: foreground
  - concept_slug: four-layer-acceptance-tests
    display_name: Four-layer acceptance tests
    one_line_gloss: >
      Acceptance tests written as specifications in the problem's own terms,
      expressed through a domain-specific language, carried out by drivers
      that talk to the system under test. His own company's
      acceptance-testing guide draws it as a "Four Layer Separation of
      Concerns", and a course prospectus from the company calls it "Dave
      Farley's 'Four-Layer Model'". Chris James teaches the structure
      in *Learn Go with Tests* and credits it to Farley by name. The 2010 book
      with Humble already separates an application driver layer and a window
      driver pattern from the tests, and Martin Fowler wrote up a Window
      Driver pattern in 2004.
    attribution_kind: extended
    primary_author: dave-farley
    co_originators:
      - slug: jez-humble
        role: co-author of the 2010 book, whose acceptance-testing chapter separates an application driver layer and a window driver from the tests
    source_link: https://continuous-delivery.co.uk/downloads/ATDD%20Guide%2026-03-21.pdf
    render_tier: foreground
  - concept_slug: continuous-delivery
    display_name: Continuous delivery
    one_line_gloss: >
      Software kept production ready throughout its life, so that any build
      could be released to users on demand. The phrase appears in the first
      of the Agile Manifesto's principles, and the 2010 book by Jez Humble and
      Dave Farley popularized the term.
    attribution_kind: popularized
    primary_author: jez-humble
    source_link: https://continuousdelivery.com/2010/08/continuous-delivery-vs-continuous-deployment/
    render_tier: deep
  - concept_slug: release-decoupled-from-deploy
    display_name: Release decoupled from deploy
    one_line_gloss: >
      Deploying code and releasing it to users are separate acts. Humble's
      August 2010 post says "deployment does not imply release" and follows
      it with "As we say in the book, you can continuously deploy to UAT".
    attribution_kind: co-authored
    primary_author: jez-humble
    source_link: https://continuousdelivery.com/2010/08/continuous-delivery-vs-continuous-deployment/
    render_tier: deep
  - concept_slug: reactive-manifesto
    display_name: The Reactive Manifesto (v2.0)
    one_line_gloss: >
      Systems that are responsive, resilient, elastic and message driven.
      Version 2.0 (2014) lists its authors "in alphabetic order, with roughly
      equal contributions": Jonas Bonér, Dave Farley, Roland Kuhn and Martin
      Thompson. The July 2013 first version carries no author names in its
      text.
    attribution_kind: distributed
    primary_author: jonas-boner
    co_originators:
      - slug: roland-kuhn
        role: co-author of v2.0 (2014)
      - slug: martin-thompson
        role: co-author of v2.0 (2014)
    source_link: https://www.reactivemanifesto.org/
    render_tier: deep

body_of_work:
  - title: The Deployment Pipeline (Extending the range of Continuous Integration)
    type: paper
    year: 2007
    link: https://continuousdelivery.com/wp-content/uploads/2010/01/The-Deployment-Pipeline-by-Dave-Farley-2007.pdf
    editorial_note: >
      Eleven pages, single author, from ThoughtWorks Studios. It opens by
      calling continuous integration misnamed, then sets out the release
      candidate and its gates. Read it before
      the 2010 book to see the model at its smallest.
    read_first: true
    canonical: true
  - title: 'Continuous Delivery: Reliable Software Releases through Build, Test, and Deployment Automation'
    type: book
    year: 2010
    link: https://www.informit.com/store/continuous-delivery-reliable-software-releases-through-9780321601919
    editorial_note: >
      With Jez Humble, first on the byline, and a foreword by Martin Fowler.
      The full discipline, covered on Humble's page here. Its sidebar on the
      term says "we" named the pipeline after the way processors pipeline
      their instructions, and names no one.
    canonical: true
  - title: 'Modern Software Engineering: Doing What Works to Build Better Software Faster'
    type: book
    year: 2021
    link: https://www.informit.com/store/modern-software-engineering-doing-what-works-to-build-9780137314911
    editorial_note: >
      Sole author, with a foreword by Trisha Gee. Read its section on
      applying stability and throughput alongside *Accelerate*, which it
      credits.
    canonical: true
  - title: 'Disruptor: High performance alternative to bounded queues for exchanging data between concurrent threads'
    type: paper
    year: 2011
    link: https://lmax-exchange.github.io/disruptor/files/Disruptor-1.0.pdf
    editorial_note: >
      By Martin Thompson, Dave Farley, Michael Barker, Patricia Gee and Andrew
      Stewart, from LMAX, on the concurrency design behind the exchange.
      Fowler's "The LMAX Architecture" (2011) is the readable companion.
  - title: The Reactive Manifesto (v2.0)
    type: essay
    year: 2014
    link: https://www.reactivemanifesto.org/
    editorial_note: >
      One page, four authors listed alphabetically with roughly equal
      contributions. Short enough to read in full.
  - title: 'Continuous Delivery Pipelines: How to Build Better Software Faster'
    type: book
    link: https://leanpub.com/cd-pipelines
    editorial_note: >
      Self-published on Leanpub and short. The pipeline as a working guide.

reading: >
  Two pieces of Farley's work stand fourteen years apart. The 2007 paper sets
  out the deployment pipeline: a release candidate started at each check-in and
  carried through a sequence of gates. The idea is older than the paper, and
  Farley is one of several parents on the record. The 2021 book defines software
  engineering as an empirical, scientific approach to practical problems, and
  divides the work into learning and managing complexity. Chris James teaches
  the layered acceptance test, specifications on top and drivers underneath, and
  credits it to Farley by name; its driver layer already appears in the 2010
  book by Humble and Farley.
extension: >
  A rule like "a suspended account cannot approve a payment" outlives every
  interface built for it, so a software factory keeping such rules in the spec
  needs specs that last as long. The four-layer test has that shape:
  specifications state behaviour in the problem's terms, and only the drivers
  know how the system is reached. That holds only while the domain's owners can
  read the specifications; a rule nobody outside engineering can follow is still
  code. Chris James explains the split as letting a specification be reused
  through configurable drivers. The weak point moves into the drivers. A
  prohibition passes when its driver never reaches the system, or when the
  attempt fails for some other reason. Each such rule needs a positive control,
  an active account approving through the same driver, and each refusal traced
  to the rule; any interface no driver reaches stays unchecked. The security use
  is the site's inference; the structure was taught for acceptance tests.
reading_review:
  protocol: reading-protocol-v1
  date: 2026-10-09
  verdict: accept-with-edits
  council_transcript: ~/.claude/LIFEOS/MEMORY/COUNCIL/distillery-reading-dave-farley-20261009-debate/transcript.md
  grounding_pack: _working/dave-farley/grounding-pack.md
  claims: _working/dave-farley/reading-claims.md
  dissent: false
limits:
  - headline: Calling him the pipeline's inventor comes from his book's listing; his own words claim the term
    severity: local
    elaboration: >
      The description of him as its inventor rests on the Leanpub listing for his book,
      which calls him "the inventor of the Deployment Pipeline"; in his 2021
      interview he claims less, saying he invented the term. Humble credits the idea
      to Farley and Mark Rickmeier together, and the 2007 paper itself says
      "We commonly
      refer to this process, this sequence of gates, as a Deployment
      Pipeline" and credits no one.
  - headline: His books, channels and consultancy make one argument
    severity: local
    elaboration: >
      He runs Continuous Delivery Ltd as founder and independent consultant,
      and his company presents him as the creator of two YouTube channels. The books, the channels and the consultancy make the same
      argument. A reader weighing the argument can take that into account.
  - headline: One argument against pull requests rests on their origin, and a critic finds it flawed
    severity: local
    elaboration: >
      Mark Seemann's 2023 essay transcribes a Farley video saying pull
      requests "were invented to gatekeep access to open-source projects", and
      finds that reasoning flawed. Seemann confines himself to the argument
      from origin and allows that Farley's claim may still hold for other
      reasons. For a team that treats review as a control, the cost is
      specific: the argument from origin is the part a critic disputes, so a
      team weighing whether to drop review should not rest the decision on it.

still_load_bearing_despite: >
  Who named the pipeline matters to a byline and very little to a team
  building one. The 2007 paper's aim, one binary carried through every gate,
  is a test any delivery system can be held to, and a system that rebuilds
  between stages fails it whoever wrote the paper. The 2021 book holds up on
  similar terms. What it asks for is a working habit: work in small
  experiments, learn from the feedback, and keep the system modular enough
  that the next experiment stays cheap. A team can check its own process against both halves, whatever it
  makes of the channel or the consultancy.

adjacent_thinkers:
  - target_slug: jez-humble
    display_name: Jez Humble
    edge_type: parallel
    edge_label: >
      The 2010 book is their shared work, and Humble is also the witness for
      the part of the pipeline story that comes before it: his February 2010
      post, five months before the book, dates the idea to 2004 and gives it
      to Farley and Mark Rickmeier. The 2007 paper, LMAX and the 2021 book
      are the main parts of Farley's record outside the collaboration.
    strength: primary
  - target_slug: martin-fowler
    display_name: Martin Fowler
    edge_type: extends
    edge_label: >
      The 2007 paper presents itself in its subtitle as "Extending the range
      of Continuous Integration". Fowler wrote the foreword to the 2010 book
      and wrote up the LMAX architecture in 2011 from a walk-through Martin
      Thompson and Farley gave him, and his 2004 Window Driver pattern is six
      years older than the book's window driver section.
    strength: primary
  - target_slug: nicole-forsgren
    display_name: Nicole Forsgren
    edge_type: extends
    edge_label: >
      *Modern Software Engineering* uses stability and throughput as its
      measures, sends readers to *Accelerate* for that model, and gives the
      finding on change approval boards to "Forsgren and her co-authors". The
      measures belong to the research; the book puts them to work.
    strength: secondary
  - target_slug: dan-north
    display_name: Daniel Terhorst-North
    edge_type: parallel
    edge_label: >
      Both hold the deployment pipeline. Terhorst-North is the third author
      of the 2006 paper that called it a deployment production line, and
      Farley's 2007 paper calls it a deployment pipeline. Humble's 2010 post
      says the idea circulated within ThoughtWorks after 2004, and the 2006
      paper came out of ThoughtWorks; how the idea reached that paper is
      unrecorded.
    strength: secondary
  - target_slug: kent-beck
    display_name: Kent Beck
    edge_type: parallel
    edge_label: >
      Both reach for the word "empirical" to describe how software is made.
      Farley defines software engineering as an empirical, scientific
      approach, and Beck subtitles *Tidy First?* (2023) "A Personal Exercise
      in Empirical Software Design". How each came to the word is unrecorded.
    strength: secondary
    render_tier: deep
  - target_slug: mark-seemann
    display_name: Mark Seemann
    edge_type: critiques
    edge_label: >
      "Are pull requests bad because they originate from open-source
      development?" (2023) answers the argument from origin in a Farley video,
      in Seemann's own transcription, and calls it flawed. He keeps to that
      one argument and says outright that he has not shown pull requests to
      be good.
    strength: secondary
  - target_slug: martin-thompson
    display_name: Martin Thompson
    edge_type: parallel
    edge_label: >
      First author of the 2011 Disruptor paper, on which Farley is second of
      five, and a co-author with him of the Reactive Manifesto v2.0.
    strength: secondary
    render_tier: deep

further_in:
  start_here: '"The Deployment Pipeline (Extending the range of Continuous Integration)" (2007), eleven pages that hold the whole model.'
  then_read:
    - '*Modern Software Engineering* (2021)'
    - 'Jez Humble, "Continuous Delivery" (continuousdelivery.com, February 2010), for the credit to Farley and Mark Rickmeier'
    - 'Martin Fowler, "The LMAX Architecture" (2011)'
  if_you_want_depth: >
    *Continuous Delivery* (2010, with Jez Humble), read alongside Humble's
    page here, which covers the discipline in full.
  if_you_want_breadth: >
    Sam Newman's "A Brief And Incomplete History Of Build Pipelines" (2009)
    for an early account of the same idea under another name, Chris James's
    "Scaling acceptance tests" for the four-layer structure taught from
    Farley's video, and Mark Seemann's 2023 essay for a published
    disagreement.
---
