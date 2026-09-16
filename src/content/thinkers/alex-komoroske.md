---
slug: alex-komoroske
name: Alex Komoroske
canonical_url: https://komoroske.com
active_years: 2014–present
primary_domains:
  - organization-design
  - platforms
  - complexity
status: alive-active
inclusion_rationale: >
  Produced a portable vocabulary for organizational complexity (coordination
  headwind, Schelling-point organizations, gardener-vs-architect) that
  practitioners now use to think about their own work. ~10 years across essays,
  talks, blog, and consulting practice.
thinker_type: essay-corpus
doctrine_mode: mode-c
has_long_read: true
long_read_path: /thinkers/alex-komoroske/long-read
last_updated: 2026-05-25

tagline: The systems-thinker who named the hidden physics of why large organizations slow down.
thirty_second_take: >
  Komoroske's body of work is one argument: most organizations operate against
  an invisible drag that grows faster than headcount, and the leadership move
  is to garden the conditions where local decisions can happen rather than to
  centralize control. The slime mold is the working metaphor. Coordination
  headwind is the named cost. Schelling-point engineering is the lever.

background: >
  Komoroske spent his career inside platforms (Google Chrome and Salesforce
  platforms, Stripe Climate and identity) with a long arc of writing on Medium
  that runs parallel to the institutional work. Platforms thinker first,
  org-design thinker second, but the two collapse into each other: a platform
  is just an organization in code, and an organization is a platform of humans.
  His instinct is to treat large social systems as physics problems with hidden
  conservation laws.
why_they_matter_as_a_thinker: >
  What makes him portable as a thinker is the vocabulary. He names things:
  coordination headwind, the slime mold, the gardener, the bramble, the
  Schelling point, adjacent possible. The names lodge. Practitioners
  reach for the words when they're diagnosing their own organizations, which
  is the test of a working frame.

thesis: >
  Complex systems work best when they are gardened, not architected. The
  leader's job is not to plan the optimal answer and propagate it downward;
  the leader's job is to make defensible answers focal enough that local
  actors converge on them without being told. Organizations that ignore this
  pay a tax that grows faster than they expect, sooner than they expect.
  This is coordination headwind. The standard responses (more meetings, more
  reorgs, more hiring) make it worse. The fix is to push decisions to where
  local information lives, accept the messiness, and trust that recovery time
  in a self-correcting system is faster than freeze-up time in a centralized
  one.
working_line: >
  Most organizations work like the opposite of the slime mold. There is a
  roadmap. There are quarterly goals. There is a project manager. And somehow,
  despite all of this central planning, the work moves slower the bigger the
  organization gets.

named_frames:
  - concept_slug: coordination-headwind
    display_name: Coordination headwind
    one_line_gloss: >
      The invisible drag on collaborative work that grows superlinearly with
      headcount; the cost of every agreement a decision depends on.
    attribution_kind: extended
    primary_author: alex-komoroske
    co_originators:
      - slug: fred-brooks
        role: original 1975 (Brooks's Law for engineering teams under deadline)
    source_link: https://medium.com/@komorama
  - concept_slug: slime-mold
    display_name: The slime mold
    one_line_gloss: >
      The working metaphor for distributed, locally-informed decision-making.
      No central planner; recovery faster than freeze.
    attribution_kind: popularized
    primary_author: alex-komoroske
    co_originators:
      - slug: tero-atsushi
        role: original 2010 experiment
    source_link: https://medium.com/@komorama
  - concept_slug: schelling-point-organizations
    display_name: Schelling-point organizations
    one_line_gloss: >
      Convergence engineered through focal-point design rather than directive
      planning. Make the secure default the obvious one.
    attribution_kind: extended
    primary_author: alex-komoroske
    co_originators:
      - slug: thomas-schelling
        role: original 1960 focal-point theory
    source_link: https://medium.com/@komorama/on-schelling-points-in-organizations
  - concept_slug: gardener-vs-architect
    display_name: Gardener vs. architect
    one_line_gloss: >
      Two opposing leadership stances: set conditions and prune (gardener)
      vs. plan and propagate (architect).
    attribution_kind: original
    primary_author: alex-komoroske
    source_link: https://komoroske.com
  - concept_slug: heroics-smell
    display_name: The heroics smell
    one_line_gloss: >
      A diagnostic, not a solution. If your system requires heroes to keep
      working, your system is broken.
    attribution_kind: original
    primary_author: alex-komoroske
    source_link: https://medium.com/@komorama
  - concept_slug: adjacent-possible
    display_name: Adjacent possible
    one_line_gloss: >
      The space of next moves reachable from the current configuration:
      what an organization can plausibly become from where it is now.
    attribution_kind: extended
    primary_author: alex-komoroske
    co_originators:
      - slug: stuart-kauffman
        role: origin in evolutionary biology
      - slug: steven-johnson
        role: popularized in *Where Good Ideas Come From*
    source_link: https://komoroske.com

body_of_work:
  - title: The Coordination Headwind Essay
    type: essay
    year: 2018
    editorial_note: >
      The keystone. If you only read one Komoroske piece, this is it. Names
      the cost, derives the dynamic, sets up everything else.
    read_first: true
    canonical: true
  - title: On Schelling Points in Organizations
    type: essay
    year: 2019
    editorial_note: >
      The hidden-physics piece. Pairs with the headwind essay; gives you the
      prescription once you have the diagnosis.
    canonical: true
  - title: The Bramble / Slime Mold Essay
    type: essay
    editorial_note: >
      The metaphor piece. Best read after Coordination Headwind so the
      metaphor lands in context rather than as a curiosity.
  - title: Platform conference talks (Google, Stripe)
    type: talk
    editorial_note: >
      Adds the verbal hedges the written essays leave out. Useful for seeing
      him think rather than for citation.
  - title: Blog corpus on komoroske.com
    type: blog-series
    editorial_note: >
      Working ideas tested before they harden into essays. The bramble of
      half-finished thoughts that the keystone essays grow out of.

what_i_take: >
  Most security programs fail not because the threat model is wrong but because
  the coordination cost of acting on the threat model exceeds the available
  organizational energy. That is the headwind frame, applied; once you see it
  in security work, you cannot unsee it. Once you have the
  headwind frame, you stop trying to fix slow security work by adding more
  security people; you start trying to reduce the coordination surface that
  the security work has to cross. Structural intervention, not headcount
  intervention.
where_i_extend: >
  Komoroske writes about coordination as a general organizational physics.
  The security translation is that every security control is itself a coordination
  event with an attached headwind cost, and the right design move is to
  reduce the number of agreements a control depends on. Schelling points show
  up here too: a security culture works when the "secure default" is the
  focal one, the one nobody has to defend choosing. Straight Komoroske,
  applied to threat surface.
working_uses:
  - '"Boring Seams" keynote (SANS AI Cybersecurity Summit 2026)'
  - Cordon framework (software-quality ontology)
  - Tinkerers community sizing (engagement-tier design)

limits:
  - headline: Regulated environments shorten the recovery-time advantage
    severity: structural
    elaboration: >
      The slime mold's wrong turns are recoverable only when backing out is
      cheap. In regulated industries (banking, healthcare, defense), wrong
      turns generate audit findings, breach reports, compliance debt that
      does not back out cheaply. The headwind frame is still correct; the
      "trust the recovery" prescription gets shorter the more the environment
      punishes recoverable mistakes.
  - headline: The gardener metaphor has no story for adversarial actors
    severity: structural
    elaboration: >
      A garden assumes the plants are not trying to kill you. Security, fraud,
      political work all involve adversaries who exploit the gardener's
      tolerance. The framework's silence on this shows up the minute you try
      to apply it where some actors are optimizing against you, and it is
      not a small omission, because the gardening stance becomes a liability
      in the face of an attacker.
  - headline: "'Push decisions to where local information lives' assumes shared goals"
    severity: local
    elaboration: >
      In organizations with misaligned incentives, pushing decisions local
      doesn't reduce coordination cost; it relocates it inside a single team
      or person. The headwind sublimates into individual stress rather than
      disappearing. The fix is upstream of Komoroske's frame.
  - headline: The vocabulary becomes its own jargon
    severity: local
    elaboration: >
      Once a team has "coordination headwind" in their lexicon, every slow
      meeting gets blamed on it. The frame becomes a thought-terminator if
      not held carefully: a way to label the problem without analyzing it.

still_load_bearing_despite: >
  The diagnostic power of the headwind frame is enormous even with these
  limits. You can apply it to your own organization and immediately see costs
  you were paying invisibly. That's what a good framework does: makes the
  invisible legible. The limits are reasons to combine Komoroske with other
  frames (Reason on safety-critical systems, Dekker on adversarial /
  failure-prone systems), not reasons to ignore the headwind frame.

adjacent_thinkers:
  - target_slug: fred-brooks
    display_name: Fred Brooks
    edge_type: antecedent
    edge_label: >
      Brooks named the coordination cost in 1975 for engineering teams under
      deadline. Komoroske generalized the same physics from engineering to
      all coordination work.
    strength: primary
  - target_slug: thomas-schelling
    display_name: Thomas Schelling
    edge_type: antecedent
    edge_label: >
      Schelling's 1960 focal-point theory is the hidden physics under
      Komoroske's coordination work. Komoroske borrows it explicitly.
    strength: primary
  - target_slug: martin-fowler
    display_name: Martin Fowler
    edge_type: parallel
    edge_label: >
      Fowler builds the same kind of named-vocabulary instrument for software
      design that Komoroske builds for org design. Different domain, same
      cartographer move.
    strength: secondary
  - target_slug: peter-senge
    display_name: Peter Senge
    edge_type: parallel
    edge_label: >
      Same systems-thinking territory from the learning-organization angle.
      Komoroske rarely cites him; the absence is interesting.
    strength: secondary
  - target_slug: stuart-kauffman
    display_name: Stuart Kauffman / Steven Johnson
    edge_type: antecedent
    edge_label: >
      Komoroske's use of "adjacent possible" borrows directly from Kauffman
      via Johnson's *Where Good Ideas Come From*.
    strength: secondary

further_in:
  start_here: The Coordination Headwind Essay (2018). The keystone.
  then_read:
    - On Schelling Points in Organizations
    - The Bramble / Slime Mold Essay
  if_you_want_depth: /thinkers/alex-komoroske/long-read (*Ways of Komoroske*)
  if_you_want_breadth: >
    Brooks's *Mythical Man-Month* (Ch. 2, Brooks's Law) and Senge's *Fifth
    Discipline* (Ch. 3–5).

long_read:
  title: Ways of Komoroske
  summary: >
    Power in complex systems is emergent, not authored, so the work at every
    scale is to garden the conditions and resist the pull of central control.
    Unpacks the diagnosis (slime mold, coordination headwind, heroics smell,
    Schelling point), the prescription (gardening conditions, focal-point
    engineering, distributed decision rights), and the limits (regulated
    environments, adversarial actors, jargon collapse).
  source_path: ~/Camila/_archive/ways-of-komoroske-merged-2026-05-27/
---
