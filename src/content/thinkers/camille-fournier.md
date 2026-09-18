---
slug: camille-fournier
name: Camille Fournier
canonical_url: https://www.camilletalk.com/
active_years: 2015–present
primary_domains:
  - engineering-management
  - platform-engineering
  - organization-design
status: alive-active
inclusion_rationale: >
  More than a decade of sustained writing on engineering leadership, from the
  2015 essays and one of the first public engineering ladders, through *The
  Manager's Path* (2017), to *Platform Engineering* (2024, with Ian Nowland).
  *The Manager's Path* gave a generation of engineers turning into managers a
  shared map of the roles between tech lead and CTO. The platform book adds
  vocabulary for why internal systems decay ("glue," "the over-general swamp,"
  "shadow platforms"), co-authored with Nowland and still new. Inclusion rests
  on the management corpus; the platform coinages are too recent to prove they
  travel and should be rechecked in 2027. Inclusion Council 4 to 1, 2026-09-16.
thinker_type: mixed
doctrine_mode: mode-a
has_long_read: false
last_updated: 2026-09-16

tagline: The engineering leader who wrote the field guide to the management career, then co-wrote one for internal platforms.
thirty_second_take: >
  Fournier's work treats engineering leadership as a series of distinct jobs,
  each with its own work, failure modes, and skills. *The Manager's Path* walks
  the sequence from mentoring an intern to running a technology organization,
  and it became a standard map for engineers deciding whether and how to
  manage. Her later book with Ian Nowland, *Platform Engineering*, brings the
  same practical eye to internal platforms: why integration code piles up
  across teams, why standards imposed by authority fail, and why a platform has
  to be curated like a product that teams choose to use. The management book
  draws on leading engineering teams at Goldman Sachs and Rent the Runway, and
  the platform book on running platform organizations at Two Sigma and JPMorgan
  Chase.

background: >
  Computer science degrees from Carnegie Mellon and the University of
  Wisconsin–Madison, then a short stint at Microsoft and more than six years at
  Goldman Sachs building distributed systems for risk and firmwide
  infrastructure, rising to vice president of technology. At Rent the Runway she
  moved from director of engineering to CTO, and in 2015 published one of the
  first public engineering ladders. She spent more than five years as head of
  platform engineering at Two Sigma, then joined JPMorgan Chase in 2022 as a
  managing director and global head of engineering and architecture for the
  Corporate & Investment Bank. She now leads common services engineering at
  CoreWeave. Along the way she was a committer and PMC member on Apache
  ZooKeeper and a founding member of the CNCF Technical Oversight Committee. The
  trajectory matters: the management book was written by someone still managing,
  and the platform book by someone who had run platform organizations at two
  large financial firms.
why_they_matter_as_a_thinker: >
  *The Manager's Path* describes management as a series of role changes, each
  needing different skills, and that framing now runs through engineering career
  ladders, first-time manager programs, and the debate over whether management
  is a ladder at all. Her essays add working tools for the job, such as treating
  a struggling team as a system to debug. The platform book extends the same
  habit to technical organizations. It names the costs that accumulate when
  every team integrates its own stack, and it argues that platforms succeed by
  earning adoption from the teams they serve.

thesis: >
  Engineering leadership is mostly the work of managing complexity that code
  alone does not absorb. On the people side, each step of a management career
  changes the work itself, from building to coaching to designing
  organizations, and people fail when they keep doing the job they were
  promoted out of. On the systems side, every team making its own technology
  choices produces integration code that no one owns, and that code slows the
  whole organization over time. The remedy in both cases is deliberate design
  of the role, or of the platform, around the people who have to live with it
  (her platform book names this "the accidental complexity of human
  coordination," in Brooks's vocabulary).
working_line: >
  Standardization via authority isn't enough. (*Platform Engineering*, with Ian
  Nowland, 2024, chapter 1.)

named_frames:
  - concept_slug: management-career-path
    display_name: The manager's path
    one_line_gloss: >
      Engineering management as a sequence of distinct roles (mentor, tech
      lead, people manager, team manager, manager of multiple teams, manager of
      managers, senior leadership), each with different work and different ways
      to fail. Codifies a career structure the industry already had, and gives
      each step a job description.
    attribution_kind: popularized
    primary_author: camille-fournier
    source_link: https://www.oreilly.com/library/view/the-managers-path/9781491973882/
    render_tier: foreground
  - concept_slug: tech-lead-as-role
    display_name: Tech lead as a role
    one_line_gloss: >
      The tech lead is a set of responsibilities a senior engineer takes on,
      separate from a rung on the ladder. Extends Patrick Kua's earlier framing
      that becoming a tech lead is a role change and not a promotion.
    attribution_kind: extended
    primary_author: camille-fournier
    co_originators:
      - slug: patrick-kua
        role: '*Talking with Tech Leads* (about 2014): "Tech lead is not a promotion. It is a role change."'
    source_link: https://www.oreilly.com/library/view/the-managers-path/9781491973882/
    render_tier: foreground
  - concept_slug: manager-as-debugger
    display_name: The manager as debugger
    one_line_gloss: >
      Teams are complex black boxes interacting with other black boxes. When a
      team's output is not what anyone expected, a good manager does what a good
      debugger does: keeps asking why, several layers down, until the box is
      open.
    attribution_kind: original
    primary_author: camille-fournier
    source_link: https://www.camilletalk.com/whilefalse/2015/11/the-manager-as-debugger.html
    render_tier: foreground
  - concept_slug: over-general-swamp
    display_name: The over-general swamp
    one_line_gloss: >
      What an organization becomes when every application team picks its own
      cloud and open source building blocks and writes its own integration
      code: applications get easier to build and harder to maintain, and the
      whole organization slows down as it grows.
    attribution_kind: co-authored
    primary_author: camille-fournier
    co_originators:
      - slug: ian-nowland
        role: co-author, *Platform Engineering* (2024)
    source_link: https://www.oreilly.com/library/view/platform-engineering/9781098153632/
    render_tier: foreground
  - concept_slug: glue
    display_name: Glue
    one_line_gloss: >
      The book's term for integration code, one-off automation, configuration,
      and management tooling that holds unintegrated building blocks together.
      Glue gets systems working and makes every later change harder.
    attribution_kind: co-authored
    primary_author: camille-fournier
    co_originators:
      - slug: ian-nowland
        role: co-author, *Platform Engineering* (2024)
    source_link: https://www.oreilly.com/library/view/platform-engineering/9781098153632/
    render_tier: foreground
  - concept_slug: shadow-platforms
    display_name: Shadow platforms
    one_line_gloss: >
      Duplicate platforms that application teams build for themselves. They
      raise complexity for the company while lowering it locally, so the goal
      is to stay aware of them rather than try to stop every one.
    attribution_kind: co-authored
    primary_author: camille-fournier
    co_originators:
      - slug: ian-nowland
        role: co-author, *Platform Engineering* (2024)
    source_link: https://www.oreilly.com/library/view/platform-engineering/9781098153632/
    render_tier: foreground
  - concept_slug: centralizing-migration-costs
    display_name: Centralizing the cost of migrations
    one_line_gloss: >
      One of the book's four ways platform engineering clears the swamp: the
      platform team absorbs the cost of upgrades and migrations that would
      otherwise land separately on every application team.
    attribution_kind: co-authored
    primary_author: camille-fournier
    co_originators:
      - slug: ian-nowland
        role: co-author, *Platform Engineering* (2024)
    source_link: https://www.oreilly.com/library/view/platform-engineering/9781098153632/
    render_tier: deep
  - concept_slug: platform-as-product
    display_name: Platform as a product
    one_line_gloss: >
      An internal platform as a curated product that teams choose to adopt,
      built around its users and defined as much by what it leaves out. The
      platform definition comes from Evan Bottcher (2018); the product framing
      runs through the wider platform community, and the book develops it.
    attribution_kind: distributed
    primary_author: evan-bottcher
    co_originators:
      - slug: camille-fournier
        role: developed the framing in *Platform Engineering* (2024)
      - slug: ian-nowland
        role: co-author, *Platform Engineering* (2024)
    source_link: https://martinfowler.com/articles/talk-about-platforms.html
    render_tier: deep
  - concept_slug: boring-plans
    display_name: Boring plans
    one_line_gloss: >
      Plans that favor predictability and clarity over novelty. Extends Dan
      McKinley's "Choose Boring Technology" from technology choices to planning.
    attribution_kind: extended
    primary_author: camille-fournier
    co_originators:
      - slug: dan-mckinley
        role: '"Choose Boring Technology"'
    derived_from: choose-boring-technology
    source_link: https://www.camilletalk.com/whilefalse
    render_tier: deep
  - concept_slug: public-engineering-ladder
    display_name: The public engineering ladder
    one_line_gloss: >
      Publishing a company's engineering ladder, with separate management and
      technical tracks, as a tool for transparency and fairer promotion.
      Fournier's 2015 Rent the Runway ladder was one of the first made public.
    attribution_kind: popularized
    primary_author: camille-fournier
    source_link: https://skamille.medium.com/10-years-of-engineering-ladders-329d309000cd
    render_tier: deep

body_of_work:
  - title: "The Manager's Path: A Guide for Tech Leaders Navigating Growth and Change"
    type: book
    year: 2017
    link: https://www.oreilly.com/library/view/the-managers-path/9781491973882/
    editorial_note: >
      The keystone. Organized as the management career itself, one role per
      chapter, so it reads as well in pieces as in order. Start with the
      chapter for the job you have now and the one you are about to take.
    read_first: true
    canonical: true
  - title: 'Platform Engineering: A Guide for Technical, Product, and People Leaders'
    type: book
    year: 2024
    link: https://www.oreilly.com/library/view/platform-engineering/9781098153632/
    editorial_note: >
      Co-authored with Ian Nowland. Chapter 1 carries the core vocabulary (the
      over-general swamp, glue, and the four ways platforms clear the swamp).
      Useful for security and infrastructure leaders deciding how a central
      team should earn adoption.
    canonical: true
  - title: 97 Things Every Engineering Manager Should Know
    type: book
    year: 2019
    link: https://www.oreilly.com/library/view/97-things-every/9781492050896/
    editorial_note: >
      Fournier edited this collection of short essays from working engineering
      managers. A good companion to the main book, with more voices and less
      structure.
  - title: Make Boring Plans
    type: essay
    year: 2021
    link: https://www.camilletalk.com/whilefalse
    editorial_note: >
      The planning essay that extends McKinley's boring technology argument.
      Short and practical.
  - title: I hate manager READMEs
    type: essay
    year: 2018
    link: https://skamille.medium.com/i-hate-manager-readmes-20a0dd9a70d0
    editorial_note: >
      The critique that set off a public argument about manager READMEs, with
      her later follow-up, "Revisiting Manager READMEs." Read both, and the
      responses they drew, for a clear view of how she thinks about power
      differences between managers and reports.
  - title: 10 Years of Engineering Ladders
    type: essay
    year: 2025
    link: https://skamille.medium.com/10-years-of-engineering-ladders-329d309000cd
    editorial_note: >
      A look back at the public engineering ladder she posted in 2015 and what
      the practice became.

reading: >
  Fournier treats engineering leadership as a series of distinct jobs, and *The
  Manager's Path* maps them one role at a time, from mentoring to running an
  organization. Its central advice is that each step changes the work itself, so
  people struggle when they keep doing the job they were promoted out of.
  *Platform Engineering*, written with Ian Nowland, turns the same attention to
  internal systems. Its core diagnosis is the over-general swamp: every team
  picks its own building blocks and writes its own glue, so applications get
  easier to build and harder to maintain. The book's answer is a platform
  curated like a product that teams choose to use, because standards imposed by
  authority do not hold.
extension: >
  Security organizations often standardize by authority: a policy names the
  approved tool, and every team is told to comply. The platform book's mechanism
  holds in security too: each team writes its own glue to meet the policy, and
  the security team inherits the swamp. The remedies assume a funded platform
  team many organizations lack, and the vocabulary is untested in security work.
  Where that team exists, the question is who pays: when it absorbs the cost of
  a migration, such as moving every service to a new secrets manager, adoption
  depends less on each team's spare capacity. An application team that builds
  its own scanner shows where the supported path fell short, and the book
  advises staying aware of such shadow platforms, which in security means
  knowing what each one can reach. A curated security platform earns adoption
  when it makes the secure path cheaper than the alternative, the same test the
  book applies to any platform.
reading_review:
  protocol: reading-protocol-v1
  date: 2026-09-16
  verdict: accept-with-edits
  council_transcript: ~/.claude/LIFEOS/MEMORY/COUNCIL/distillery-reading-batch-hickey-fournier-20260916-163706-debate/transcript.md
  grounding_pack: _working/camille-fournier/grounding-pack.md
  claims: _working/camille-fournier/reading-claims.md
  dissent: false

limits:
  - headline: The advice assumes a large, well-funded organization
    severity: structural
    elaboration: >
      Most of Fournier's career ran through Goldman Sachs, Two Sigma, JPMorgan
      Chase, and CoreWeave, with Rent the Runway as the main exception. Both
      books assume room for dedicated platform teams, product managers for
      internal tools, and multiple layers of management. A forty-person company
      can borrow the vocabulary, but much of the prescription needs headcount it
      does not have.
  - headline: Management as a ladder has a strong counterposition
    severity: structural
    elaboration: >
      *The Manager's Path* follows the management career upward, one role at a
      time. Charity Majors argues that the best technical leaders move back and
      forth between engineering and management, and that treating management as
      a ladder to climb pushes people away from the hands-on work that keeps
      them good at it. She does not name Fournier, but the two models give
      different advice to an engineer deciding what to do next.
  - headline: Broad coverage, shallow on each topic
    severity: local
    elaboration: >
      Reviewers of *The Manager's Path* often describe it as a strong overview
      that goes deep on no single topic. The book maps the terrain of each role
      well; readers facing a hard problem inside one role, such as a difficult
      reorg or a failing senior hire, will need other sources.
  - headline: The platform vocabulary is new and partly borrowed
    severity: local
    elaboration: >
      *Platform Engineering* adopts Evan Bottcher's definition of a platform and
      works in a field already shaped by *Team Topologies*. Its own coinages
      (glue, the over-general swamp, shadow platforms) date from 2024 and have
      not yet shown they travel beyond the book's readers. Treat them as useful
      names under test.

still_load_bearing_despite: >
  The management map holds because the underlying observation is right: each
  step changes the work, and people struggle when they keep doing the job they
  left. That observation survives the pendulum argument, which is about
  movement between roles, and the scale problem, which is about how much
  structure a company can afford. The platform book earns its place for a
  different reason. It gives leaders words for costs they already pay and
  rarely name, which is the first step toward budgeting for them.

adjacent_thinkers:
  - target_slug: fred-brooks
    display_name: Fred Brooks
    edge_type: antecedent
    edge_label: >
      *Platform Engineering* frames part of its argument as managing "the
      accidental complexity of human coordination," borrowing Brooks's
      distinction between essential and accidental complexity and applying it
      to how teams coordinate around shared systems.
    strength: primary
  - target_slug: evan-bottcher
    display_name: Evan Bottcher
    edge_type: antecedent
    edge_label: >
      The platform book adopts Bottcher's 2018 definition of a platform, first
      published on martinfowler.com: self-service APIs, tools, services,
      knowledge, and support arranged as a compelling internal product.
    strength: primary
  - target_slug: patrick-kua
    display_name: Patrick Kua
    edge_type: antecedent
    edge_label: >
      *Talking with Tech Leads* described the tech lead as a role change several
      years before *The Manager's Path* gave the tech lead its own chapter.
    strength: secondary
    render_tier: deep
  - target_slug: nicole-forsgren
    display_name: Nicole Forsgren
    edge_type: parallel
    edge_label: >
      Both work on how engineering organizations perform. Forsgren measures the
      outcomes of delivery systems; Fournier describes how to organize the
      teams and platforms that produce them.
    strength: secondary
  - target_slug: matthew-skelton-manuel-pais
    display_name: Matthew Skelton and Manuel Pais
    edge_type: parallel
    edge_label: >
      *Team Topologies* (2019) approaches platforms from team design, with
      platform teams and cognitive load as core terms. Fournier and Nowland
      approach the same territory from platform product and operations.
    strength: primary
  - target_slug: charity-majors
    display_name: Charity Majors
    edge_type: parallel
    edge_label: >
      The engineer/manager pendulum, a counterposition to the management ladder.
      Majors argues for moving back and forth between hands-on and management
      work instead of climbing.
    strength: secondary
  - target_slug: will-larson
    display_name: Will Larson
    edge_type: parallel
    edge_label: >
      The other track above senior engineer. *The Manager's Path* follows the
      management sequence one role at a time; Larson catalogued the
      individual-contributor roles beside it, and spends most of his writing on
      what someone in them does without a reporting line to act through. Where
      he goes furthest from this shelf is on authority as a loan from a sponsor,
      and on what happens to a policy that runs on exceptions.
    strength: primary
  - target_slug: uri-bar-joseph
    display_name: Uri Bar-Joseph
    edge_type: critiques
    edge_label: >
      A direct public response (2018) to Fournier's "I hate manager READMEs,"
      arguing that the fault lies in how READMEs get used, and that the
      document itself can still be worth writing.
    strength: secondary

further_in:
  start_here: "*The Manager's Path* (2017), starting with the chapter for your current role."
  then_read:
    - '*Platform Engineering* (with Ian Nowland, 2024), chapter 1'
    - '"Make Boring Plans" (2021)'
    - '"I hate manager READMEs" and "Revisiting Manager READMEs"'
  if_you_want_depth: >
    Patrick Kua's *Talking with Tech Leads* for the tech lead role in depth,
    and Evan Bottcher's "What I Talk About When I Talk About Platforms" for the
    platform definition the book builds on.
  if_you_want_breadth: >
    Will Larson's *An Elegant Puzzle* and *Staff Engineer* for the same
    territory from a different angle, Charity Majors's pendulum essays for the
    counterposition to the ladder, and *Team Topologies* by Skelton and Pais for
    platforms from the team-design side.
---
