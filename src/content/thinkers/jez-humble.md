---
slug: jez-humble
name: Jez Humble
canonical_url: https://jezhumble.net
active_years: 2006–present
primary_domains:
  - software-delivery
  - release-engineering
  - devops
status: alive-active
inclusion_rationale: >
  Twenty years of frames in continuous use, and the uptake check clears by
  years rather than months. The 2006 conference paper with Chris Read and Dan
  North sits on the Agile Alliance practices timeline, a third party with no
  stake in the claim; Fowler gave the deployment pipeline its own bliki entry
  in 2013; Pete Hodgson's 2017 feature-toggles article calls separating
  feature release from code deployment a continuous delivery principle and
  names neither Humble nor the book, which is a frame that has finished
  travelling. Inclusion Council 5 to 0, 2026-09-22. The whole editorial
  problem here is attribution rather than significance. Four books, four sets
  of co-authors, no solo book. Of six candidate frames not one survives as
  his alone, and he is usually the person on the record saying so, so the
  byline test is the sharpest risk this page carries. The page's spine is the
  division with Nicole Forsgren, whose page holds the four DORA measures: she
  holds the instrument, he holds the machinery it reads.
thinker_type: book-author
doctrine_mode: mode-a
has_long_read: false
last_updated: 2026-09-22

tagline: The delivery engineer who wrote the route from a commit to production down as a designed system, and put the difference between deploying and releasing into common use.
thirty_second_take: >
  Between a finished commit and a running feature sits a distance, and the
  argument across this corpus is that one automated route, taken by every
  change, should cover it. The 2006 paper he wrote with Chris
  Read and Dan North called that route a deployment production line; the name
  the industry kept is the deployment pipeline. The 2010 book with Dave Farley
  turned it into a discipline: build the artifact once, promote that same
  artifact through every environment, and keep the software releasable at all
  times so the release date becomes a business decision instead of an
  engineering event. Inside the discipline sits the idea that travels furthest
  and carries his name least often, that deploying code and releasing a
  feature are separate acts. Almost none of this is his alone, and he is
  usually the one saying so. Four books, four sets of co-authors, and a
  principles page that credits Deming and Toyota before it credits him.

background: >
  His own account of his education is a degree in physics and philosophy from
  Oxford and a masters in ethnomusicology from the School of Oriental and
  African Studies in London. He got into IT in 2000, and from 2004 worked for
  ThoughtWorks and ThoughtWorks Studios in Beijing, Bangalore, London and San
  Francisco, as a principal consultant and as product manager for Go, the
  company's release management product. The 2006 conference paper came out of
  that consulting work, and the Agile Alliance describes it as a codification
  of what several ThoughtWorks UK teams were already doing. He describes a
  career spent on code, infrastructure and product development across three
  continents, in organizations from startups to the US federal government, and
  he taught software engineering and product development at UC Berkeley. He
  co-founded DORA with Nicole Forsgren and Gene Kim and was its CTO, and
  Google acquired the company in 2018. He is now a member of technical staff
  at Anthropic.
why_they_matter_as_a_thinker: >
  The vocabulary outlived the attribution, which is the strongest evidence a
  frame has travelled. Pete Hodgson's 2017 article on feature toggles, hosted
  on martinfowler.com, calls separating feature release from code deployment a
  principle of continuous delivery and attributes it to nobody. The Agile
  Alliance put the 2006 paper on its practices timeline as the first
  conference article describing the core of continuous deployment. Fowler gave
  the pattern its own entry in 2013. Twenty years on, engineers who have never
  read a page of him run a pipeline, promote one artifact through stages and
  ship code dark behind a flag, in words he and his co-authors wrote down.
  What makes the work portable is that it is procedural. The books say what to
  build and in what order, which is why they get followed as manuals and cited
  as doctrine at the same time.

thesis: >
  One route to production, taken by every change, is the claim underneath all
  of it. The artifact is built once and promoted through each environment, so
  what reaches production is the thing that was tested. Every stage is
  automated and every stage can reject the change, which makes the pipeline
  the release process itself instead of a document describing one. The
  discipline the 2010 book defines follows from that: keep the software in a
  releasable state continuously, and the question of when to release stops
  being an engineering question at all. In his account continuous
  delivery puts the release schedule in the hands of the business, which only
  works if any good build can go out on demand. The distinction that makes it
  possible is that deploying is not releasing. Code can run in production with
  no user able to reach it, and the two decisions can then be
  taken by different people, at different times, for different reasons. The
  principles underneath are borrowed and his own site says so, with Deming on
  building quality in and Toyota's jidoka and Taiichi Ohno's kaizen behind
  two of the others.
working_line: >
  Continuous delivery is about putting the release schedule in the hands of
  the business, not in the hands of IT. ("Continuous Delivery vs Continuous
  Deployment," continuousdelivery.com, 2010.)

named_frames:
  - concept_slug: deployment-pipeline
    display_name: The deployment pipeline
    one_line_gloss: >
      One automated route from version control to production, in stages, where
      each stage either rejects the change or passes the same artifact along.
      An early conference write-up is the 2006 paper by Humble, Chris Read and
      Dan North, all three then at ThoughtWorks, and Humble credits all three
      by name in the first person. In a February 2010 post he also credits Dave
      Farley and Mark Rickmeier with the idea in 2004, and names a 2005 blog
      entry by Sam Newman as its first public documentation. The paper calls
      it a deployment production line, and the name that stuck arrived later.
    attribution_kind: distributed
    primary_author: dave-farley
    co_originators:
      - slug: chris-read
        role: co-author, "The Deployment Production Line," AGILE 2006
      - slug: dan-north
        role: co-author, "The Deployment Production Line," AGILE 2006
      - slug: dave-farley
        role: came up with the idea with Mark Rickmeier in 2004, per Humble's February 2010 post; used the name "Deployment Pipeline" in his 2007 paper
      - slug: mark-rickmeier
        role: came up with the idea with Farley in 2004, per Humble's February 2010 post
      - slug: sam-newman
        role: wrote it up as a "build pipeline" in a 2005 blog entry, which Humble's February 2010 post names as its first public documentation
    source_link: https://continuousdelivery.com/wp-content/uploads/2011/04/deployment_production_line.pdf
    render_tier: foreground
  - concept_slug: continuous-delivery
    display_name: Continuous delivery
    one_line_gloss: >
      A discipline in which software is built so that it can be released to
      production at any time, with any good build releasable on demand. The
      two words are older than the book. The Agile Manifesto asked in its first
      principle for "early and continuous delivery of valuable software" in
      2001, nine years earlier. What the 2010 book with Dave Farley added is
      the discipline it defines, and the verb for what the book did to
      the phrase is popularized.
    attribution_kind: popularized
    primary_author: jez-humble
    co_originators:
      - slug: dave-farley
        role: co-author of *Continuous Delivery* (2010), where the discipline is defined
    source_link: https://continuousdelivery.com/principles/
    render_tier: foreground
  - concept_slug: release-decoupled-from-deploy
    display_name: Release decoupled from deploy
    one_line_gloss: >
      Putting code on a production machine and making a feature available to
      users are two decisions, separable in time and takeable by different
      people. The distinction is stated in the 2010 book and restated on his
      site seventeen days after the book shipped. An earlier public description of
      the practice is on the record: Ross Harmes wrote up Flickr's feature
      flags in December 2009, with new code sitting on production servers for
      months until a single false is changed to true. Nothing connects the two
      documents, so the record holds an earlier independent description and no
      lineage.
    attribution_kind: co-authored
    primary_author: jez-humble
    co_originators:
      - slug: dave-farley
        role: co-author of *Continuous Delivery*, the book the distinction is stated in
    source_link: https://continuousdelivery.com/2010/08/continuous-delivery-vs-continuous-deployment/
    render_tier: foreground
  - concept_slug: blue-green-deployment
    display_name: Blue-green deployment
    one_line_gloss: >
      Two production environments, one of them live, with a release performed
      by routing traffic to the other. Fowler wrote the technique up in 2010
      and hedged the credit for the name across "some foggy combination" of
      Dan North and Jez Humble. The hedge travels with the frame, which the site
      files as shared credit for that reason.
    attribution_kind: community
    primary_author: jez-humble
    co_originators:
      - slug: dan-north
        role: named beside Humble in Fowler's hedged credit for the term
    source_link: https://martinfowler.com/bliki/BlueGreenDeployment.html
    render_tier: deep
  - concept_slug: continuous-delivery-principles
    display_name: The five continuous delivery principles
    one_line_gloss: >
      Build quality in; work in small batches; computers perform repetitive
      tasks and people solve problems; relentlessly pursue continuous
      improvement; everyone is responsible. His own principles page credits
      each one to its source before it credits him, quoting W. Edwards Deming
      on building quality in and naming Toyota's jidoka and Taiichi Ohno's
      kaizen for two of the others.
    attribution_kind: extended
    primary_author: jez-humble
    co_originators:
      - slug: w-edwards-deming
        role: quoted on the principles page as the source of "build quality in"
      - slug: taiichi-ohno
        role: credited on the principles page for kaizen, alongside Toyota's jidoka
    source_link: https://continuousdelivery.com/principles/
    render_tier: deep
  - concept_slug: dora-four-keys
    display_name: The four DORA measures
    one_line_gloss: >
      Deployment frequency, lead time for changes, change failure rate and time
      to restore service, from the DORA research programme and *Accelerate*.
      The research is Nicole Forsgren's and the measures are published on her
      page here. Humble co-founded DORA with her and Gene Kim and co-wrote the
      book. The measures read the delivery system the rest of this page
      describes.
    attribution_kind: distributed
    primary_author: nicole-forsgren
    co_originators:
      - slug: jez-humble
        role: co-founder of DORA and co-author of *Accelerate*
      - slug: gene-kim
        role: co-founder of DORA and co-author of *Accelerate*
    source_link: https://itrevolution.com/product/accelerate/
    render_tier: deep

body_of_work:
  - title: 'Continuous Delivery: Reliable Software Releases through Build, Test, and Deployment Automation'
    type: book
    year: 2010
    link: https://www.informit.com/store/continuous-delivery-reliable-software-releases-through-9780321601919
    editorial_note: >
      Written with Dave Farley and published in Fowler's signature series, and
      a Jolt Excellence award winner in 2011. Fowler calls it the foundation
      book on the topic. Read it as the full statement of the discipline, and
      read the pipeline chapters knowing they are the part that got reused
      everywhere else.
    canonical: true
  - title: The Deployment Production Line
    type: paper
    year: 2006
    link: https://continuousdelivery.com/wp-content/uploads/2011/04/deployment_production_line.pdf
    editorial_note: >
      With Chris Read and Dan North, from the AGILE 2006 conference, and the
      shortest route to the idea. Four principles in six pages: each build
      stage delivers working software, the same artifacts are deployed in
      every environment, testing and deployment are automated, and the
      production line evolves with the application it assembles.
    canonical: true
  - title: Continuous Delivery vs Continuous Deployment
    type: essay
    year: 2010
    link: https://continuousdelivery.com/2010/08/continuous-delivery-vs-continuous-deployment/
    editorial_note: >
      Posted seventeen days after the book, and the clearest short statement of the
      distinction between deploying and releasing. It also credits Timothy
      Fitz's earlier post for continuous deployment, which is worth seeing for
      how carefully the two terms are kept apart.
    read_first: true
  - title: Principles
    type: essay
    link: https://continuousdelivery.com/principles/
    editorial_note: >
      The five principles with their sources attached. Read it for the lineage
      as much as the content, since Deming, jidoka and Ohno are credited before
      anything else is.
  - title: 'Accelerate: The Science of Lean Software and DevOps'
    type: book
    year: 2018
    link: https://itrevolution.com/product/accelerate/
    editorial_note: >
      With Nicole Forsgren and Gene Kim, from the DORA research, and winner of
      a Shingo Publication Award. The measurement half of the story, and the
      book that drew the published criticism this page carries. Forsgren's page
      here holds the measures themselves.
  - title: The DevOps Handbook
    type: book
    year: 2016
    link: https://itrevolution.com/product/the-devops-handbook-second-edition/
    editorial_note: >
      With Gene Kim, Patrick Debois and John Willis. John Allspaw wrote the
      foreword to the first edition and Nicole Forsgren wrote a new one for the
      second in 2021. Wider than continuous delivery and looser, and the place
      to go for the practices that surround the pipeline.
  - title: 'Lean Enterprise: How High Performance Organizations Innovate at Scale'
    type: book
    link: https://github.com/oreillymedia/lean_enterprise
    editorial_note: >
      With Joanne Molesky and Barry O'Reilly, from O'Reilly Media. The argument
      carried up into how a company funds and governs product work. No year is
      given here because the publisher's catalogue records disagree on it.

reading: >
  The 2006 paper argues that a change should take exactly one route to
  production, and every other claim here follows from it, the discipline of the
  2010 book included. That is what makes the discipline work: software kept
  releasable at all times, with any good build deployable on demand. One
  distinction inside the discipline is smaller and
  separable: deploying code and releasing a feature are two decisions, so code
  can run in production with nobody able to reach it. Almost none of it is his
  alone and he is usually the one saying so: Chris Read and Dan North on the
  pipeline paper, Dave Farley on the book, Deming and Toyota behind the
  principles. What is his is the writing down: the paper set an
  existing practice out in an order other people could follow.
extension: >
  One route to production is the condition under which a security constraint can
  be a stage that rejects a change instead of a document somebody complies with,
  which is what auditability across a software factory asks for. The authors
  fence their own case at organizations where delivery is the constraint. An
  auditability case argues on different ground. Releasing separately from
  deploying takes the last
  decision back out of it. What reaches production is built, tested and
  promoted on the audited path, while the act that exposes it to users is a
  runtime switch sitting outside that path, so the flag service inherits an
  authorization decision the discipline never names as one. Closing that seam
  takes more than a log. Each switch needs a named party entitled to move it,
  and a record of who did, which brings the switch inside the factory. Until it
  closes, the audited path stops at the deploy and the release sits outside it.

reading_review:
  protocol: reading-protocol-v1
  date: 2026-09-22
  verdict: accept-with-edits
  council_transcript: ~/.claude/LIFEOS/MEMORY/COUNCIL/distillery-reading-jez-humble-20260922-debate/transcript.md
  grounding_pack: _working/jez-humble/grounding-pack.md
  claims: _working/jez-humble/reading-claims.md
  dissent: false

limits:
  - headline: The science behind *Accelerate* is contested
    severity: structural
    elaboration: >
      Keunwoo Lee's 2022 review argues on four grounds that the research does
      not support what the book claims for it: the measures are incomplete and
      sometimes circular, the survey method is open to halo effects and other
      threats to validity, the statistics are presented loosely, and neither
      the full survey questions nor the gathered data have been released, so
      the results cannot be evaluated or replicated. He is courteous about it
      and says he has tried to present the book sympathetically. The
      reply, written by Humble with Nicole Forsgren, defends the word choice:
      the results are inferential, so the authors use "drives", "predicts" and
      "impacts" and avoid "causes."
  - headline: It applies where delivery is the constraint, and the authors say so
    severity: structural
    elaboration: >
      Answering Lee, Humble and Forsgren accept his first-principles point in
      their own words. Effort spent on something that is not a constraint is
      waste, they write, grounding the reply in the theory of constraints, and
      if the speed and stability of software delivery are not the constraint on
      an organization's mission then it should not focus there. They say the
      book is written for people who do have that constraint. Read the whole
      corpus with that boundary in place. Rebuilding the route to production is
      a large programme, and the case for it rests on delivery being the thing
      that is actually holding the organization back.
  - headline: Most of it is shared work, and he credits his collaborators
    severity: structural
    elaboration: >
      Four books, four sets of co-authors, no solo book. The deployment
      pipeline is shared and he says so himself, naming Dan North and Chris
      Read for the 2006 paper and, in a 2010 post, Dave Farley and Mark
      Rickmeier for the idea in 2004. The five principles are credited on his own site to Deming
      and to Toyota. Fowler's credit for the blue-green name is "some foggy
      combination" of Dan North and Jez Humble. The DORA measures come out of
      Nicole Forsgren's research. Most claims on this page are shared ones, so the accurate reading treats him as the person who wrote the practice down with others
      and kept saying who else was in the room.
  - headline: The route to production is described as machinery and never as a target
    severity: structural
    elaboration: >
      The sources behind this page treat the path to production as an
      engineering problem: automate it, let every stage reject a change,
      promote one artifact. What they do not treat is the path as a system
      that has to be defended. Deploy
      credentials, signing authority and an unattended privileged route into
      production end up in one place, and nothing in those sources
      addresses who may authorize a release or what record survives one. The
      same absence runs through the flag side of the argument. Once releasing
      is a runtime switch, that switch holds a decision the change process used
      to hold, and nothing here says whose switch it is. The absence recorded
      here is an absence in what was checked: the 512-page book was never
      opened for this page, and every claim here about what it says rests on a
      publisher's listing and other people's accounts.

still_load_bearing_despite: >
  The mechanism survives every limit above, because it is a claim about routes
  and not a claim about outcomes. If every change reaches production one way,
  that way can be inspected and what it does can be stated. If changes reach
  production several ways, no measurement of the delivery system means much,
  including the measurements this page hands back to Forsgren's. The
  release-versus-deploy distinction holds for the same reason. It takes a
  decision that used to be smeared across a change process and makes it a
  separate, explicit act, and an explicit decision is one that can be refused.

adjacent_thinkers:
  - target_slug: nicole-forsgren
    display_name: Nicole Forsgren
    edge_type: parallel
    edge_label: >
      The instrument and the machine it reads. Forsgren's research measures how
      a delivery system performs; the deployment pipeline and the
      release-versus-deploy split are the machinery being measured. They
      co-founded DORA with Gene Kim and co-wrote *Accelerate*, and the four
      measures are published on her page rather than restated on this one.
    strength: primary
  - target_slug: martin-fowler
    display_name: Martin Fowler
    edge_type: extends
    edge_label: >
      Continuous delivery picks up where continuous integration stops, on the
      far side of the build. Fowler's article on that practice credits Kent
      Beck with developing it inside Extreme Programming, and it sends readers
      to Humble and Farley's book for the broader process that follows. Fowler
      also published the book in his signature series and wrote the bliki
      entries for the pipeline and for continuous delivery, acknowledging
      Humble's detailed help on both.
    strength: primary
  - target_slug: john-allspaw
    display_name: John Allspaw
    edge_type: parallel
    edge_label: >
      Allspaw wrote the foreword to the first edition of *The DevOps Handbook*,
      which Humble co-wrote with Gene Kim, Patrick Debois and John Willis. The
      two sit on either side of the same deploy. Humble designs the route a
      change takes into production; Allspaw studies what happens to the people
      when a change already in production goes wrong.
    strength: primary
  - target_slug: charity-majors
    display_name: Charity Majors
    edge_type: parallel
    edge_label: >
      Releasing separately from deploying is what makes her position workable.
      Majors argues that staging cannot reproduce production, so the honest
      testing happens against real traffic behind guardrails, and a feature
      flag is one of those guardrails. Humble's distinction is the thing a flag
      exercises.
    strength: primary
  - target_slug: dave-farley
    display_name: Dave Farley
    edge_type: parallel
    edge_label: >
      Co-author of *Continuous Delivery* (2010), and the person Humble
      credited in February 2010, with Mark Rickmeier, for the pipeline idea in
      2004. His single-author 2007 paper set out the gated model three years
      before the book, under the name the book kept. The book is equally his,
      including the release-versus-deploy distinction that Humble's own post
      attributes back to it.
    strength: primary
  - target_slug: dan-north
    display_name: Daniel Terhorst-North
    edge_type: parallel
    edge_label: >
      Co-author of the 2006 conference paper on the deployment pipeline,
      and the other name in Fowler's hedged credit for blue-green deployment.
      He publishes as Daniel Terhorst-North, which is the name Fowler's
      blue-green credit uses.
    strength: secondary
  - target_slug: keunwoo-lee
    display_name: Keunwoo Lee
    edge_type: critiques
    edge_label: >
      "A review of *Accelerate*" (2022) argues that the book's scientific claim
      does not hold: the measures are incomplete, the survey method is open to
      halo effects, the statistics are presented loosely, and the questions and
      data have never been released. The target is the research programme
      behind the measures, so the critique lands on the measurement half of the
      corpus and leaves the delivery mechanism standing.
    strength: secondary
  - target_slug: chris-read
    display_name: Chris Read
    edge_type: parallel
    edge_label: >
      The third author of "The Deployment Production Line" (AGILE 2006), and
      one of the two co-authors Humble names when he attributes the 2006
      paper in the first person.
    strength: secondary
    render_tier: deep
  - target_slug: gene-kim
    display_name: Gene Kim
    edge_type: parallel
    edge_label: >
      Co-founder of DORA and co-author of both *The DevOps Handbook* and
      *Accelerate*. The third name on most of what this page credits to the
      DORA work, and the reason the measurement corpus reads as a programme
      rather than a book.
    strength: secondary
    render_tier: deep

further_in:
  start_here: '"Continuous Delivery vs Continuous Deployment" (2010), which is short and carries the distinction on its own.'
  then_read:
    - '"The Deployment Production Line" (AGILE 2006, with Chris Read and Dan North)'
    - 'The principles page at continuousdelivery.com, for the lean lineage'
    - '*Continuous Delivery* (2010, with Dave Farley)'
  if_you_want_depth: >
    *Accelerate* (2018, with Nicole Forsgren and Gene Kim) for the measurement
    programme, read alongside Forsgren's page here, which holds the measures
    and the research method.
  if_you_want_breadth: >
    Keunwoo Lee's 2022 review of *Accelerate* for the strongest published case
    against the research, Fowler's bliki entries on the deployment pipeline and
    on continuous delivery for the pattern language around it, and Ross
    Harmes's "Flipping Out" (Flickr, 2009) for the same release practice
    described before the book.
---
