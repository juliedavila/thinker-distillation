---
slug: don-norman
name: Don Norman
canonical_url: https://jnd.org/
active_years: 1986–present
primary_domains:
  - design
  - cognitive-science
  - human-computer-interaction
status: alive-active
inclusion_rationale: >
  Wrote the canonical text of human-centered design (*The Design of
  Everyday Things*, 1988; revised 2013) and named the cognitive
  vocabulary the field now uses: affordances, signifiers, mappings,
  feedback, conceptual models, gulf of execution / gulf of evaluation,
  seven stages of action, slips vs mistakes, forcing functions.
  Bedrock substrate beneath roughly half the existing roster — the
  resilience cluster (Dekker, Woods, Allspaw) extends his human-error
  taxonomy; the software cluster (Brooks, Fowler) makes parallel
  cognitive-load arguments. 40+ years of consistent work; founding
  chair of UC San Diego's Cognitive Science department (1988);
  co-founded the Nielsen Norman Group (1998); still publishing and
  teaching at 89.
thinker_type: book-author
has_long_read: false
last_updated: 2026-05-27

tagline: The cognitive scientist who taught designers that when a person fails to use a thing, the failure was the design.
thirty_second_take: >
  Norman wrote down the cognitive substrate the rest of design — and
  now software engineering — rests on. *The Design of Everyday Things*
  (1988, revised 2013) named affordances, signifiers, mappings,
  feedback, conceptual models, the seven stages of action, the two
  gulfs (execution and evaluation), and the slips-vs-mistakes
  taxonomy of human error. The argument is one move: artifacts teach
  their own use, or they fail; when they fail, the failure was the
  design, not the operator. Forty years on, every conversation about
  blameless postmortems, every debate over API ergonomics, every
  resilience-engineering argument about operator cognition runs on
  Norman's vocabulary — usually without knowing it.

background: >
  American cognitive scientist and design theorist, born 1935 in Long
  Island, New York. PhD in mathematical psychology from the University
  of Pennsylvania (1962). Founding chair of the Cognitive Science
  department at UC San Diego in 1988 — the first such department
  anywhere. *The Design of Everyday Things* (originally *The Psychology
  of Everyday Things*, 1988) brought cognitive psychology into
  industrial design and gave the field of human-computer interaction
  its load-bearing vocabulary. Vice president of the Advanced Technology
  Group at Apple in the 1990s, where he coined "user experience" as
  the term covering the whole arc from industrial design through
  interaction to documentation. Co-founded the Nielsen Norman Group
  (1998) with Jakob Nielsen — still the canonical consultancy in
  user-experience research. Currently Director of the Design Lab at
  UC San Diego; still teaching, lecturing, writing at 89. *Design for
  a Better World* (2023) extended the framework to climate, automation,
  and the obligations of designers at planetary scale.
why_they_matter_as_a_thinker: >
  Norman is the cognitive substrate beneath the entire current
  conversation about human-system interaction. Every blameless
  postmortem in software engineering descends from his
  slips-vs-mistakes taxonomy. Every argument for fluent API design
  rests on his affordance / signifier distinction. Every
  resilience-engineering paper about operator cognition draws on his
  gulf of execution / gulf of evaluation frame, usually without
  citation. The reason a senior engineer can say "this API has bad
  affordances" or "the error was a slip, not a mistake" and the room
  understands is that those frames have done forty years of work in
  design schools, HCI labs, and increasingly software organizations.
  Carrying Norman forward is part of how the field stays honest about
  the cognitive cost of every artifact it ships.

thesis: >
  Most failures attributed to "human error" are failures of design.
  Artifacts are propositions about cognition — they encode an implicit
  model of how users will perceive, interpret, and act on them. When
  the encoded model matches the user's actual cognition, the artifact
  teaches its own use; when it doesn't, the user produces what looks
  like error but is actually the artifact's failure to communicate.
  The design discipline is therefore: make the right action
  discoverable through affordances and signifiers, close the
  perceptual loop through feedback, separate slips (action errors)
  from mistakes (intention errors) because they require different
  fixes, and use forcing functions to make the dangerous action
  physically or logically impossible rather than merely discouraged.
  Designed-for-cognition is not a polish layer; it is the artifact's
  actual function.
working_line: >
  When you have trouble with things — whether or not it's a complicated
  device or a doorknob — it's not your fault. Don't blame yourself:
  blame the designer. (*The Design of Everyday Things*, 1988.)

named_frames:
  - concept_slug: affordances
    display_name: Affordances
    one_line_gloss: >
      The properties of a thing that determine how it can be used —
      what actions it makes possible. Norman extended Gibson's 1979
      ecological-psychology original to designed artifacts: a chair
      affords sitting, a door handle affords pulling. The most-cited
      single concept in interaction design.
    attribution_kind: extended
    primary_author: don-norman
    derived_from: gibson-affordances
    source_link: https://jnd.org/affordances_and_design/
  - concept_slug: signifiers
    display_name: Signifiers
    one_line_gloss: >
      The perceptible signals that communicate what affordances exist
      and how to invoke them. Norman's 2013 revision of DOET introduced
      this distinction because "affordance" had been overloaded to mean
      both the action possibility and its visible cue. The flat panel
      that says PUSH is a signifier on a door whose affordance is
      pushing.
    attribution_kind: original
    primary_author: don-norman
    source_link: https://jnd.org/signifiers_not_affordances/
  - concept_slug: natural-mappings
    display_name: Natural mappings
    one_line_gloss: >
      The spatial / perceptual correspondence between controls and the
      things they control. A stovetop with burners arranged in a 2×2
      grid and knobs in a 2×2 grid has natural mapping; the same
      burners with knobs in a row do not. The single biggest source of
      everyday-object usability wins and losses.
    attribution_kind: original
    primary_author: don-norman
    source_link: https://en.wikipedia.org/wiki/The_Design_of_Everyday_Things
  - concept_slug: feedback-design
    display_name: Feedback
    one_line_gloss: >
      The system's communication back to the user about what happened
      in response to action. Distinct from input — feedback closes the
      perceptual loop in the seven stages of action. Norman's framing
      is artifact-centered (the design must provide it) and
      timing-aware (within ~100ms for the action to feel direct).
    attribution_kind: original
    primary_author: don-norman
    source_link: https://en.wikipedia.org/wiki/The_Design_of_Everyday_Things
  - concept_slug: conceptual-models
    display_name: Conceptual models
    one_line_gloss: >
      The user's mental model of how a system works — built up from
      the system's image (what the design communicates) and reconciled
      against the designer's intended model. When the three diverge
      (design model, system image, user model), the artifact fails to
      teach its own use and "user error" appears.
    attribution_kind: original
    primary_author: don-norman
    source_link: https://en.wikipedia.org/wiki/The_Design_of_Everyday_Things
  - concept_slug: gulf-of-execution
    display_name: Gulf of execution
    one_line_gloss: >
      The distance between what the user wants to do and the actions
      the system permits — the gap between intention and the available
      means. Wide gulf = user must translate intent into many small
      operations the system understands; narrow gulf = system speaks
      the user's task language directly.
    attribution_kind: original
    primary_author: don-norman
    source_link: https://en.wikipedia.org/wiki/Human%E2%80%93computer_interaction
  - concept_slug: gulf-of-evaluation
    display_name: Gulf of evaluation
    one_line_gloss: >
      The distance between the system's state and what the user can
      perceive about it — the gap between feedback and understanding.
      Wide gulf = user must interpret obscure indicators to figure out
      what happened. The other half of the execution / evaluation pair
      that anchors the seven stages of action.
    attribution_kind: original
    primary_author: don-norman
    source_link: https://en.wikipedia.org/wiki/Human%E2%80%93computer_interaction
  - concept_slug: seven-stages-of-action
    display_name: Seven stages of action
    one_line_gloss: >
      The cognitive cycle Norman names for any user-artifact
      interaction: form goal → plan → specify action → perform →
      perceive → interpret → compare to goal. The framework against
      which the two gulfs (execution and evaluation) measure design
      failure.
    attribution_kind: original
    primary_author: don-norman
    source_link: https://en.wikipedia.org/wiki/The_Design_of_Everyday_Things
  - concept_slug: slips-vs-mistakes
    display_name: Slips vs. mistakes
    one_line_gloss: >
      The load-bearing taxonomy of human error. A slip is right
      intention, wrong action (you meant to type "cat", typed "car").
      A mistake is wrong intention, faithfully executed (you meant to
      delete the prod database because you misread the prompt). The
      categories require different fixes — slips need forcing functions
      and undo; mistakes need better feedback and conceptual models.
      Upstream of every blameless-postmortem framework in software.
    attribution_kind: original
    primary_author: don-norman
    source_link: https://en.wikipedia.org/wiki/The_Design_of_Everyday_Things
  - concept_slug: forcing-functions
    display_name: Forcing functions
    one_line_gloss: >
      A design constraint that makes the dangerous action physically
      or logically impossible, rather than merely discouraged. The ATM
      that returns your card before dispensing cash is a forcing
      function against leaving the card behind. The single most
      reliable defense against slips.
    attribution_kind: original
    primary_author: don-norman
    source_link: https://en.wikipedia.org/wiki/The_Design_of_Everyday_Things

body_of_work:
  - title: The Design of Everyday Things
    type: book
    year: 2013
    link: https://www.basicbooks.com/titles/don-norman/the-design-of-everyday-things/9780465050659/
    editorial_note: >
      The book. Originally published as *The Psychology of Everyday
      Things* (1988); the 2013 revision adds signifiers, drops
      psych-jargon, and updates examples — read the 2013 edition. If
      you only read one book about how artifacts and humans actually
      meet, this is the one. The doorknob examples have outlived every
      interface they predate.
    read_first: true
    canonical: true
  - title: Things That Make Us Smart
    type: book
    year: 1993
    link: https://jnd.org/books/things-that-make-us-smart-defending-human-attributes-in-the-age-of-the-machine/
    editorial_note: >
      Norman's argument for cognitive artifacts — external
      representations (notebooks, calendars, instruments) that augment
      human thought. The companion volume to DOET; reads as the
      cognitive-science foundation that DOET applied to industrial
      design.
    canonical: true
  - title: Emotional Design
    type: book
    year: 2004
    link: https://www.basicbooks.com/titles/donald-a-norman/emotional-design/9780465051366/
    editorial_note: >
      Norman's pivot after DOET — usability is necessary but not
      sufficient. Three levels of design (visceral, behavioral,
      reflective) argue that beautiful things work better because
      humans tolerate problems in things they enjoy. The book Apple's
      product organization read in the 2000s.
    canonical: true
  - title: The Design of Future Things
    type: book
    year: 2007
    link: https://www.basicbooks.com/titles/don-norman/the-design-of-future-things/9780465004270/
    editorial_note: >
      Norman's early frame for autonomous systems and the
      human-automation collaboration problem. Predates the current
      AI-agent conversation by a decade; reads as if written about
      2026 systems. Should be required reading for anyone designing
      agentic interfaces.
  - title: Living with Complexity
    type: book
    year: 2011
    link: https://mitpress.mit.edu/9780262528948/living-with-complexity/
    editorial_note: >
      Argues complexity is not the enemy — confusion is. The book
      against the "simplicity" cult, separating the kind of complexity
      that has to live in the system (because the task is complex)
      from the kind the design imposes on top of it. Direct parallel
      to Brooks's essential vs accidental complexity, derived
      independently from the cognitive-science side.
  - title: 'User Centered System Design'
    type: book
    year: 1986
    editorial_note: >
      Edited with Stephen Draper; the volume that named user-centered
      design as a field and gave HCI its founding methodology.
      Historical anchor for understanding why DOET landed when it did
      two years later.
  - title: Design for a Better World
    type: book
    year: 2023
    link: https://mitpress.mit.edu/9780262047951/design-for-a-better-world/
    editorial_note: >
      Late-career synthesis — design's obligations to climate,
      automation, and the long-tail consequences of artifacts at
      scale. Less tightly argued than DOET; valuable for seeing
      Norman work the contemporary problem.
  - title: 'Signifiers, Not Affordances'
    type: essay
    year: 2008
    link: https://jnd.org/signifiers_not_affordances/
    editorial_note: >
      The short essay that introduced the signifier / affordance
      distinction five years before the 2013 DOET revision incorporated
      it. Useful as a primary-source snapshot of Norman correcting his
      own vocabulary.

# DRAFT — Camila scaffold; Julie to personalize in first-person editorial voice
# (per writing-partner per-field discipline: §6 is Julie's voice lane)
what_i_take: >
  [DRAFT — Camila scaffold awaiting Julie's voice pass.] The
  slips-vs-mistakes taxonomy is the cognitive substrate beneath every
  blameless-postmortem argument in security and software organizations.
  The category determines the fix — slips need forcing functions and
  undo paths; mistakes need better feedback and cleaner conceptual
  models. Most "human error" cited in security incident reports is one
  or the other; treating them as a single category is the cost of not
  knowing Norman. The affordance / signifier distinction does the same
  work for API design: the action a function permits versus the cue
  the function name provides about how to invoke it. Bad affordances
  are silent bugs that ship without anyone naming them; the vocabulary
  is the first step to making them visible.

# DRAFT — Camila scaffold; Julie to personalize
where_i_extend: >
  [DRAFT — Camila scaffold awaiting Julie's voice pass.] Norman wrote
  about individual cognition meeting designed artifacts. The extension
  to security is that every security control is an artifact the
  operator must interpret, and most "user-error" security failures are
  slip-category failures the design could have prevented with forcing
  functions. The five attack surface expansions (democratized builders
  + public APIs + agent access + autonomous reasoning + LLM workflows)
  systematically widen the gulf of evaluation — operators can no
  longer perceive what's happening inside the systems they're
  nominally controlling. Norman's framework predicts this exactly; it
  just needs the security-specific application the source material
  doesn't supply. The Boring Seams thesis is one such application:
  the seams between components are the places where the gulf widens
  fastest and where slip-category failures cluster.

working_uses:
  - '"Boring Seams" keynote (slips-vs-mistakes + gulf of evaluation applied to cognitive load at security seams)'

# DRAFT — Camila scaffold; Julie to refine in her voice (limits are honest critique, not Camila editorial)
limits:
  - headline: Individual-cognition lens has no native story for adversaries
    severity: structural
    elaboration: >
      [DRAFT scaffold.] Norman's framework assumes the artifact and
      the user share an interest in the user succeeding. When some
      actors are optimizing against the user (security adversaries,
      fraud rings, dark patterns), the design-for-cognition argument
      needs an adversarial axis Norman doesn't supply. The
      slips-vs-mistakes taxonomy still holds; the prescription "design
      so the right action is discoverable" inverts when an adversary
      is the designer.
  - headline: Predates the AI-era comprehension crisis
    severity: structural
    elaboration: >
      [DRAFT scaffold.] Norman's conceptual-model argument assumes a
      human authored the artifact whose model the user is trying to
      reconstruct. When LLMs generate code faster than humans can read
      it, the conceptual-model concept needs extension — the model
      the reader is trying to read may have no coherent author at all.
      Same framework, but the upstream assumption is breaking.
  - headline: Reads as design philosophy to engineering audiences
    severity: local
    elaboration: >
      [DRAFT scaffold.] DOET's examples (doorknobs, stovetops, light
      switches) read as industrial-design content to engineers who
      don't yet see the mapping. The vocabulary is portable; the
      translation cost is real. Pairing Norman with a
      software-engineering text (Brooks, Fowler) on first introduction
      raises the success rate of the framework landing for engineering
      readers.

# DRAFT — Camila scaffold; Julie's voice
still_load_bearing_despite: >
  [DRAFT — Camila scaffold awaiting Julie's voice pass.] Norman's
  vocabulary is the cognitive substrate beneath roughly half the
  existing distillery roster — the resilience cluster (Dekker, Woods,
  Allspaw) extends his human-error taxonomy; the software cluster
  (Brooks, Fowler) makes parallel cognitive-load arguments. The
  framework's age is its strength: forty years of attempted refutation
  across cognitive science, industrial design, HCI, and now software
  engineering have not unseated the core claims. Anyone designing
  artifacts in 2026 without internalizing Norman is building
  cognition-blind, paying the cost in user error they will attribute
  to the user.

adjacent_thinkers:
  - target_slug: sidney-dekker
    display_name: Sidney Dekker
    edge_type: extends
    edge_label: >
      Dekker's whole-career argument that human error is an
      attribution, not a cause, rests on Norman's slips-vs-mistakes
      taxonomy. Norman named the cognitive failure modes inside the
      individual; Dekker scaled the same argument to sociotechnical
      systems and organizations. The lineage is unmistakable even
      where citation isn't explicit.
    strength: primary
  - target_slug: david-woods
    display_name: David Woods
    edge_type: extends
    edge_label: >
      Resilience engineering's framing of operator cognition under
      stress — adaptive capacity, the Law of Stretched Systems — draws
      Norman's seven stages of action and the gulfs of execution and
      evaluation as its cognitive substrate. Woods extends Norman from
      designed artifacts to whole sociotechnical systems.
    strength: primary
  - target_slug: john-allspaw
    display_name: John Allspaw
    edge_type: extends
    edge_label: >
      Allspaw's blameless-postmortem doctrine and above-the-line /
      below-the-line distinction operationalize Norman's "the failure
      was the design, not the user" inside engineering organizations.
      The cognitive-systems-engineering tradition Allspaw works in
      explicitly cites Norman as foundational.
    strength: secondary
  - target_slug: fred-brooks
    display_name: Fred Brooks
    edge_type: parallel
    edge_label: >
      Brooks's essential vs. accidental complexity (1986) and Norman's
      conceptual-models / discoverability argument (1988) are the same
      claim from different disciplines — the cost of working with a
      system is bounded below by how cleanly its design communicates
      what's intrinsic versus what's imposed. Read together; neither
      cites the other.
    strength: primary
  - target_slug: martin-fowler
    display_name: Martin Fowler
    edge_type: parallel
    edge_label: >
      Fowler's refactoring discipline is Norman's affordance /
      signifier argument applied to code as an artifact future readers
      must interpret. The conceptual model the code presents to its
      next reader is the cognitive surface; refactoring is the act of
      improving its affordances. Same move, different medium.
    strength: secondary
  - target_slug: alex-komoroske
    display_name: Alex Komoroske
    edge_type: parallel
    edge_label: >
      Komoroske's Schelling-point organizations are Normanian design
      constraints applied to culture — making the right behavior the
      most discoverable behavior so local actors converge on it
      without being told. Affordances at the level of social systems
      rather than physical artifacts.
    strength: secondary

further_in:
  start_here: >
    *The Design of Everyday Things* (2013 revision; not the 1988
    original). Read the first three chapters before anything else of
    his — they install the vocabulary that the rest of the work
    refines.
  then_read:
    - '*Things That Make Us Smart* (1993; the cognitive-science backstory under DOET)'
    - '*Living with Complexity* (2011; the complexity-is-not-the-enemy argument)'
    - '"Signifiers, Not Affordances" (2008 essay; Norman correcting his own vocabulary)'
    - '*The Design of Future Things* (2007; the autonomous-systems early read)'
  if_you_want_breadth: >
    Read Gibson's *The Ecological Approach to Visual Perception* (1979)
    for Norman's affordance lineage; Suchman's *Plans and Situated
    Actions* (1987) for the parallel HCI argument from the
    anthropology side; Hutchins's *Cognition in the Wild* (1995) for
    distributed cognition's extension of Norman into team and system
    cognition.
---
