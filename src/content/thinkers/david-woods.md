---
slug: david-woods
name: David Woods
canonical_url: https://csel.osu.edu
active_years: 1979–present
primary_domains:
  - resilience-engineering
  - cognitive-systems-engineering
  - safety-science
status: alive-active
inclusion_rationale: >
  Co-founded the field of resilience engineering. Forty years of writing on
  how complex systems actually cope with surprise, what *adaptive capacity*
  is and how it gets depleted, why systems that look robust on paper
  collapse in practice, and what the *Law of Stretched Systems* predicts
  about every optimization push. The theoretical foundation that Allspaw,
  Dekker, and the modern software-ops resilience conversation rest on, and
  that Cook helped write. Produced much of the vocabulary Allspaw spent a decade carrying into the
  software industry.
thinker_type: mixed
doctrine_mode: mode-c
has_long_read: false
last_updated: 2026-10-15

tagline: The theorist of what makes complex systems actually cope, and what makes the coping invisible until it's gone.
thirty_second_take: >
  Woods spent forty years building the theoretical foundation of
  resilience engineering. The core claim, that *complex systems don't
  survive because they are robust to known threats; they survive because
  they have adaptive capacity that humans and teams supply in real time
  to absorb surprises*, sits under every modern incident-analysis frame.
  The *Law of Stretched Systems* (every optimization push makes a system
  operate closer to its limits) explains why high-performing engineering
  orgs end up brittle. *Graceful extensibility* is the property worth
  designing for; *adaptive capacity* is the resource. Read Woods to find
  out what the resilience conversation is actually about underneath the
  vocabulary that gets carried.

background: >
  American cognitive systems engineer. Professor Emeritus at Ohio State
  University. In the aftermath of Three Mile Island he and Erik Hollnagel
  founded the field of cognitive systems engineering. The history page of
  Ohio State's Cognitive Systems Engineering Laboratory (CSEL) credits
  Phil Smith with building the first university-based CSE program and
  laboratory, and says the lab is now run by Mike Rayo and Woods. Helped
  build the field of resilience engineering through forty years of
  writing, much of it co-authored with Erik Hollnagel, Richard Cook, and
  Sidney Dekker. President of the Resilience Engineering Association from
  2011 to 2013. The intellectual lineage runs through Jens Rasmussen's
  safety-science work.
why_they_matter_as_a_thinker: >
  Woods is the cited-but-rarely-read theoretical foundation under the
  modern incident-analysis conversation. If you read Allspaw without
  reading Woods, you have the practice without the substrate. The
  *adaptive capacity* concept, the *graceful extensibility* property,
  the *Law of Stretched Systems*, the *joint cognitive system* framing.
  These are the architectural claims behind how the software-ops
  community has read the last decade of complex-system failure.
  Carrying Woods's vocabulary forward is how the field stays connected
  to the safety-science tradition it inherited.

thesis: >
  Complex systems are not stable artifacts; they are continuously
  adapting joint cognitive systems made up of humans, organizations,
  and machines. Their survival depends not on being robust to known
  threats (that property is locally useful but globally fragile), but
  on having reserves of adaptive capacity that humans supply in real
  time when surprises arrive. Every optimization push consumes that
  capacity; performance-pressured systems operate closer to their
  limits and absorb less surprise. Graceful extensibility (the ability
  to stretch performance under previously-unimagined conditions) is
  what you actually want, and it is exactly the property that
  efficiency-focused management most reliably destroys.
working_line: >
  Under pressure, systems are pushed to operate at the boundary of
  their performance envelope, where small perturbations produce
  large failures. (*The Law of Stretched Systems*.)

named_frames:
  - concept_slug: adaptive-capacity
    display_name: Adaptive capacity
    one_line_gloss: >
      A system's reserve ability to absorb surprises that exceed its
      designed-for operating envelope, supplied by humans, teams, and
      organizational arrangements that are mostly invisible until they
      are needed.
    attribution_kind: extended
    primary_author: david-woods
    source_link: https://csel.osu.edu
  - concept_slug: graceful-extensibility
    display_name: Graceful extensibility
    one_line_gloss: >
      The system property (distinct from robustness) of being able
      to *stretch* performance under conditions the system was not
      explicitly designed for. The actual goal of resilience engineering.
    attribution_kind: original
    primary_author: david-woods
    source_link: https://irgc.org/wp-content/uploads/2018/09/Woods-Resilience-as-Graceful-Extensibility-to-Overcome-Brittleness.pdf
  - concept_slug: law-of-stretched-systems
    display_name: The Law of Stretched Systems
    one_line_gloss: >
      Every system is continuously pushed toward operating at the limit
      of its capability, because slack reads as inefficiency to
      management. The closer the system runs to its envelope, the less
      it can absorb perturbation.
    attribution_kind: original
    primary_author: david-woods
    co_originators:
      - slug: jens-rasmussen
        role: 'cited with Hirschhorn and others for the general law of adaptive systems (his 1986 book, in Woods 2002)'
  - concept_slug: joint-cognitive-system
    display_name: Joint cognitive system
    one_line_gloss: >
      The framing that complex systems are not machines with humans
      attached; they are joint cognitive systems where humans and
      automation together perform the cognitive work. Failures live in
      the joint, not in either component.
    attribution_kind: co-authored
    primary_author: david-woods
    co_originators:
      - slug: erik-hollnagel
        role: co-author of *Joint Cognitive Systems* (2005)
  - concept_slug: new-view-of-human-error
    display_name: The new view of human error
    one_line_gloss: >
      "Human error" is not a cause; it is a *symptom* of deeper
      system conditions. The diagnosis stops where most postmortems
      start; the real work is upstream of the operator. Dekker's 2002
      paper cites five sources for the view. Woods is an author of two,
      and the earliest is by Rasmussen and Batstone (1989).
    attribution_kind: distributed
    primary_author: david-woods
    co_originators:
      - slug: sidney-dekker
        role: co-carrier into the safety-science literature
      - slug: jens-rasmussen
        role: theoretical predecessor

body_of_work:
  - title: 'Behind Human Error'
    type: book
    year: 1994
    editorial_note: >
      With Cook, Johannesen, Sarter. A source Dekker cites for the new
      view of human error.
    canonical: true
  - title: 'Joint Cognitive Systems: Foundations of Cognitive Systems Engineering'
    type: book
    year: 2005
    editorial_note: >
      With Erik Hollnagel. The theoretical anchor for treating
      humans-and-automation as one analytical unit. Required reading
      for serious resilience-engineering work.
    canonical: true
  - title: 'Resilience Engineering: Concepts and Precepts'
    type: book
    year: 2006
    editorial_note: >
      Edited with Hollnagel and Leveson. The founding anthology of the
      resilience-engineering field. Read after *Behind Human Error*.
    canonical: true
  - title: '*Four Concepts for Resilience and the Implications for the Future of Resilience Engineering*'
    type: paper
    year: 2015
    editorial_note: >
      The four-concepts paper: robustness vs rebound vs graceful
      extensibility vs sustained adaptability. The taxonomy that
      separates "what you actually want" from "what people usually
      mean when they say resilient."
    read_first: true
    canonical: true

reading: >
  Woods describes complex systems as joint cognitive systems, in which people
  and automation do the thinking together and failures live in the joint between
  them. Such systems survive surprises through adaptive capacity: reserves that
  people and organizational arrangements supply, and that stay invisible until
  they are needed. The Law of Stretched Systems explains why those reserves
  shrink: slack looks like inefficiency, so every system gets pushed toward the
  edge of its envelope, where small disturbances produce large failures.
  Graceful extensibility, the ability to stretch under conditions nobody
  designed for, is the property resilience engineering aims at. The original
  papers are dense, which is why carriers such as Allspaw brought the vocabulary
  into software.
extension: >
  The Law of Stretched Systems predicts what happens to security automation
  gains: the capacity they free up gets spent on more load. A security leader
  who wants resilience has to defend slack as reserve for surprises, and should
  expect that defense to be contested for as long as the same pressure reads
  slack as waste. That reserve is where security behaves as an emergent
  property: no single control absorbs a novel attack, and what absorbs it is
  people with the time and context to adapt. A program that lets its automation
  savings turn into throughput ends up as stretched as before, and the reserve
  it never rebuilt is the one an attacker eventually finds.
reading_review:
  protocol: reading-protocol-v1
  date: 2026-09-16
  verdict: accept-with-edits
  council_transcript: ~/.claude/LIFEOS/MEMORY/COUNCIL/distillery-reading-batch-7-legacy-pages-20260916-181307-quick/transcript.md
  grounding_pack: _working/david-woods/grounding-pack.md
  claims: _working/david-woods/reading-claims.md
  dissent: false
working_uses:
  - '"Boring Seams" keynote (Law of Stretched Systems applied to security operations)'
  - Security architecture reviews (adaptive capacity as the question, not robustness)

limits:
  - headline: The vocabulary is academic-dense
    severity: structural
    elaboration: >
      Reading Woods directly is harder than reading any of his
      industry carriers. The papers are written for the safety-science
      community first; the resilience-engineering taxonomy gets technical
      fast. This is partly why Allspaw and others have been so necessary:
      the substrate doesn't carry without translation.
  - headline: The framework's silence on adversarial actors
    severity: structural
    elaboration: >
      Woods's resilience-engineering work is rooted in industries where
      the disturbances are nature (weather, equipment failure, human
      slip) or accident (ill-formed procedures, attention lapse), not
      intent. The framework holds in security but the adversarial layer
      is bolted on, not built in. Same gap as Komoroske's gardener-vs-builder frame: silent on actors optimizing against you.
  - headline: Empirical grounding is mostly outside software
    severity: local
    elaboration: >
      The case studies are aviation, healthcare, nuclear, military.
      Software-system case studies are mostly downstream (Allspaw, Cook,
      Maguire). Practitioners new to the frame sometimes assume software
      systems work like cockpits or ORs; the analogies are useful but
      not perfect.

still_load_bearing_despite: >
  The four concepts of resilience (robustness, rebound, graceful
  extensibility, sustained adaptability) and the Law of Stretched
  Systems are foundational enough that you cannot do serious
  resilience-engineering work in software without internalizing them.
  Every honest argument about why high-performing engineering orgs
  end up brittle, why incidents cluster after efficiency pushes, why
  reorganizations destroy operational knowledge: Woods named the
  physics underneath them all.

adjacent_thinkers:
  - target_slug: john-allspaw
    display_name: John Allspaw
    edge_type: extends
    edge_label: >
      The carrier into software ops. Allspaw is Woods's most successful
      industry translator. The resilience-engineering substrate became
      working ops vocabulary largely through Allspaw's Etsy work and the
      Adaptive Capacity Labs collaboration.
    strength: primary
  - target_slug: sidney-dekker
    display_name: Sidney Dekker
    edge_type: parallel
    edge_label: >
      Co-builder of the new-view-of-human-error frame. Dekker is the
      safety-culture side, Woods is the cognitive-systems side.
      Different emphases, same lineage; Rasmussen sits behind both.
    strength: primary
  - target_slug: erik-hollnagel
    display_name: Erik Hollnagel
    edge_type: parallel
    edge_label: >
      Partner on cognitive systems engineering from a 1983 paper through
      both *Joint Cognitive Systems* books (2005, 2006). The two-view
      device Hollnagel later used for Safety-I and Safety-II has a
      precedent he cites in *A Tale of Two Stories* (1998), a paper by
      Cook, Woods and Miller.
    strength: primary
  - target_slug: richard-cook
    display_name: Richard Cook
    edge_type: parallel
    edge_label: >
      Cook condensed the program the two ran together into How Complex
      Systems Fail (1998), whose propositions were first squeezed onto two
      pages of card stock, by Allspaw's account.
    strength: primary
  - target_slug: jens-rasmussen
    display_name: Jens Rasmussen
    edge_type: antecedent
    edge_label: >
      In his 1997 paper, pressure to save effort and cost very likely
      moves work toward the boundary of acceptable performance, a movement
      he calls migration. Woods's 2002 text places the Law of Stretched
      Systems within a general law of adaptive systems noted by many
      researchers, and the examples it cites include Rasmussen's 1986 book,
      Information Processing and Human-Machine Interaction.
    strength: secondary

  - target_slug: nicole-forsgren
    display_name: Nicole Forsgren
    edge_type: parallel
    edge_label: >
      DORA's time to restore measures one operational footprint of the resilience Woods describes structurally.
    strength: secondary
  - target_slug: charity-majors
    display_name: Charity Majors
    edge_type: parallel
    edge_label: >
      Both work on systems that surprise their operators. Woods names the
      reserves that absorb surprise; Majors asks whether the instruments can
      describe one after it arrives.
    strength: secondary
  - target_slug: ross-anderson
    display_name: Ross Anderson
    edge_type: parallel
    edge_label: >
      Anderson puts an adversary inside the feedback argument. His 1993 survey
      of cash machine fraud collected how the losses actually happened and found
      them concentrated in implementation error and management failure, while
      the field designed against cryptanalysis. The paper opens by contrasting
      cryptography with aviation, where accidents are investigated and the
      findings feed back into practice, and it credits no source for that
      comparison. He reaches it from banking rather than from resilience
      engineering.
    strength: primary
  - target_slug: kelly-shortridge
    display_name: Kelly Shortridge
    edge_type: parallel
    edge_label: >
      Shortridge's 2020 primer on resilience in security insists that
      "Robustness does not equal resilience," close to Woods's point that
      robustness to known threats is locally useful and globally fragile.
    strength: secondary
    render_tier: deep
  - target_slug: nancy-leveson
    display_name: Nancy Leveson
    edge_type: parallel
    edge_label: >
      Author of STAMP, which analyses an accident through the control
      structure that should have prevented it, and an editor, with Hollnagel
      and Woods, of the 2006 resilience engineering anthology.
    strength: secondary
    render_tier: deep

further_in:
  start_here: >
    *Four Concepts for Resilience and the Implications for the Future
    of Resilience Engineering* (2015). The taxonomy paper, shortest
    on-ramp into the substrate.
  then_read:
    - '*Behind Human Error* (a source for the new view)'
    - '*Joint Cognitive Systems* (with Hollnagel; the deeper theory)'
    - 'The CSEL lab site at csel.osu.edu'
  if_you_want_breadth: >
    Read Cook's *How Complex Systems Fail* (1998, eighteen short
    propositions) and Dekker's *Drift Into Failure* as the working pair to Woods.
---
