---
slug: dan-north
name: Daniel Terhorst-North
canonical_url: https://dannorth.net
active_years: 2003–present
primary_domains:
  - agile-practice
  - requirements
  - software-design
status: alive-active
inclusion_rationale: >
  Two decades of consistent work, from JBehave at the end of 2003 to CUPID in
  2022, and vocabulary that travels without him: Given/When/Then is a set of
  step keywords in Cucumber's Gherkin, and behaviour-driven development is a
  named practice with its own tooling built by other people. The byline is the
  risk. His own profile says he "invented" BDD, "co-invented the build
  pipeline" and "pioneered many of the Continuous Delivery practices", and his
  own 2006 essay credits most of BDD's ingredients to colleagues and closes
  "BDD evolved with the help of many people." The page takes its attribution
  from the essay. His share of BDD is the name and the move from tests to
  behaviour; Given/When/Then is joint with Chris Matts; the two delivery frames
  are Humble's and sit in the deep tier. Deliberate Discovery's second-order
  ignorance has an earlier statement (Armour, 2000, as Mark Needham quotes it),
  named on the page, and the
  frame has thin outside uptake. Inclusion Council 5 to 0, 2026-09-25, split 3 to 2 on filing
  Deliberate Discovery; filed `original` with Armour named, on the byline
  seat's argument that `extended` asserts a lineage the record does not show.
thinker_type: essay-corpus
doctrine_mode: mode-a
has_long_read: false
last_updated: 2026-09-25

tagline: The consultant who named behaviour-driven development for the shift from thinking in tests to thinking in behaviour, and with Chris Matts wrote Given/When/Then to state a story's acceptance criteria.
thirty_second_take: >
  Teaching test-driven development, Terhorst-North kept meeting the same
  confusion and misunderstandings, and his answer was to change the words.
  He found the move from thinking in tests to thinking in behaviour large
  enough that he started calling the practice behaviour-driven development.
  Much of it was built with others, and his own account says so: before the
  name came a colleague's utility called agiledox and a naming convention he
  came across, and after it Chris Matts, a business analyst, pointing out that
  the behaviour vocabulary was "just like analysis." Together Terhorst-North and Matts wrote the template
  that other people's tools now carry, Given, When, Then, for stating a story's acceptance
  criteria before anyone builds it. Two later frames followed BDD.
  Deliberate Discovery treats ignorance as the main constraint on a delivery
  project, and CUPID offers five properties of code as a reply to SOLID.

background: >
  He also publishes as Dan North, the name his consulting company still
  carries. His profile describes a first decade that ran from graduate to senior
  developer, tech lead, VP Engineering and Director of Development, across
  investment banking, insurance, telecoms and other sectors, with no employer
  named. In 2002 he joined the newly formed London office of ThoughtWorks, by
  his profile's account as its first tech employee, and he stayed until 2010, when he left for the
  proprietary trading firm DRW Trading. There he ran a Lean transformation
  programme with the firm's CIO, drawing on the theory of constraints and
  starting from a book club on Goldratt's *The Goal*. He has been an independent
  consultant since 2012. He has no book of his own: he is one of six
  authors on *The RSpec Book* (2010), and he contributed an essay on writing
  code in the language of the domain to *97 Things Every Programmer Should Know*
  (2010).
why_they_matter_as_a_thinker: >
  Given/When/Then, written with Chris Matts, is the part other people's
  tooling carries. Cucumber's Gherkin
  language makes Given, When and Then step keywords, so a team using that tool
  writes its acceptance criteria in the template whether or not it has read the
  2006 essay. The renaming mattered for a second reason: described as
  behaviour, the practice sounded to Chris Matts "just like analysis," and that
  remark is how it reached requirements. The two later frames travel less far
  and are younger. Deliberate Discovery has one outside practitioner found
  applying it, within five months of the essay, and CUPID had three
  practitioner write-ups naming him within two years of its first write-up.

thesis: >
  The 2006 essay starts from the confusion he kept meeting while teaching
  test-driven development, and answers it with a change of vocabulary, from
  tests to behaviour. Test methods become sentences beginning "should," and the
  same behaviour vocabulary, carried into analysis with Chris Matts, lets a team state a
  story's acceptance criteria as a context, an event and an outcome before the
  work starts. The later essays hold related positions, one about planning and
  one about code.
  Deliberate Discovery argues that ignorance is "the single greatest impediment
  to throughput" and that a team should spend effort early finding out what it
  does not know, including what it does not know it does not know. CUPID, in his
  phrase "properties over principles," proposes five qualities of code in reply
  to SOLID. The site reads one thread through all three, that the words a team
  works in decide what it notices; he does not state it.
working_line: >
  I found the shift from thinking in tests to thinking in behaviour so profound
  that I started to refer to TDD as BDD. ("Introducing BDD," 2006.)

named_frames:
  - concept_slug: behaviour-driven-development
    display_name: Behaviour-driven development
    one_line_gloss: >
      Test-driven development described as the specification of behaviour: test
      methods named as sentences about what the code should do, and the same
      vocabulary carried up into requirements. His share is the name and that
      reframing. He credits the rest himself, to Chris Stevenson's agiledox
      tool, a "should" naming convention he came across, Chris Matts on
      business value and analysis, and Eric Evans's ubiquitous language.
      Cucumber's history also names Liz Keogh as a pioneer from 2004.
    attribution_kind: original
    primary_author: dan-north
    co_originators:
      - slug: chris-matts
        role: turned the behaviour vocabulary toward requirements and analysis, from the end of 2004
    derived_from: test-driven-development
    source_link: https://dannorth.net/blog/introducing-bdd/
    render_tier: foreground
  - concept_slug: given-when-then
    display_name: Given/When/Then
    one_line_gloss: >
      A scenario stated as a context, an event and an outcome, written by Terhorst-North
      and Chris Matts to capture a story's acceptance criteria. It grew partly
      from the "As a, I want, so that" story template Cucumber credits to Rachel
      Davies at Connextra. Fowler's 2013 bliki entry reports that
      Terhorst-North, reviewing it, credited Ivan Moore for "a significant amount of inspiration," and
      calls the template "a reformulation of the Four-Phase Test pattern." Gherkin now carries the three words as step
      keywords.
    attribution_kind: co-authored
    primary_author: dan-north
    co_originators:
      - slug: chris-matts
        role: co-wrote the template with Terhorst-North, end of 2004
    source_link: https://martinfowler.com/bliki/GivenWhenThen.html
    render_tier: foreground
  - concept_slug: deliberate-discovery
    display_name: Deliberate Discovery
    one_line_gloss: >
      Ignorance is the constraint on a delivery project, so a team should spend
      effort early on discovering what it does not know, including what it does
      not know it does not know. Second-order ignorance has an earlier statement:
      Phillip G. Armour's "The Five Orders of Ignorance" (CACM, 2000) names, as
      Mark Needham quotes it, a "2nd Order Ignorance," and Terhorst-North's 2010 essay uses "second-order
      ignorance" without citing him. No source shows whether Terhorst-North read it.
      The essay credits Liz Keogh for one of its thought experiments.
    attribution_kind: original
    primary_author: dan-north
    source_link: https://dannorth.net/blog/introducing-deliberate-discovery/
    render_tier: foreground
  - concept_slug: cupid
    display_name: CUPID
    one_line_gloss: >
      Five properties of code proposed in place of SOLID's five principles:
      composable, Unix philosophy, predictable, idiomatic and domain-based. It
      began as a five-minute talk arguing that every SOLID principle was wrong,
      in which the alternative kept turning out to be "Write simple code." The
      Unix philosophy property names its own source.
    attribution_kind: original
    primary_author: dan-north
    source_link: https://dannorth.net/blog/cupid-for-joyful-coding/
    render_tier: foreground
  - concept_slug: deployment-pipeline
    display_name: The deployment pipeline
    one_line_gloss: >
      One automated route from version control to production. It was written
      up in "The Deployment Production Line" (AGILE 2006) by Jez Humble,
      Chris Read and Terhorst-North, the third of three authors.
      Terhorst-North's profile calls it "the build pipeline" and gives
      the conference title as "Build Production Line"; the published paper is
      "The Deployment Production Line." Humble's February 2010 post credits
      Dave Farley and Mark Rickmeier with the idea in 2004.
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
    render_tier: deep
  - concept_slug: blue-green-deployment
    display_name: Blue-green deployment
    one_line_gloss: >
      Two production environments with traffic switched from one to the other
      to release. Fowler writes that the technique "has been 'out there' for
      ages" and that "some foggy combination" of Terhorst-North and Humble came
      up with the name, so the credit is for the name and it is hedged.
    attribution_kind: co-authored
    primary_author: jez-humble
    co_originators:
      - slug: dan-north
        role: named beside Humble in Fowler's hedged credit for the term
    source_link: https://martinfowler.com/bliki/BlueGreenDeployment.html
    render_tier: deep

body_of_work:
  - title: Introducing BDD
    type: essay
    year: 2006
    link: https://dannorth.net/blog/introducing-bdd/
    editorial_note: >
      First published in Better Software magazine in March 2006. The origin
      account, and the best evidence on attribution, because he names who
      supplied each piece. Given/When/Then appears here as a template he and
      Matts wrote together.
    read_first: true
    canonical: true
  - title: Introducing Deliberate Discovery
    type: essay
    year: 2010
    link: https://dannorth.net/blog/introducing-deliberate-discovery/
    editorial_note: >
      The planning argument in full. Read it alongside Armour's 2000 paper on
      orders of ignorance.
    canonical: true
  - title: 'CUPID: for joyful coding'
    type: essay
    year: 2022
    link: https://dannorth.net/blog/cupid-for-joyful-coding/
    editorial_note: >
      The five properties, each with its own section. The newest of his frames.
  - title: 'CUPID: the back story'
    type: essay
    year: 2021
    link: https://dannorth.net/blog/cupid-the-back-story/
    editorial_note: >
      How a five-minute talk against SOLID turned into a proposal, including
      the attacks on the slides after they went up.
  - title: The Deployment Production Line
    type: paper
    year: 2006
    link: https://continuousdelivery.com/wp-content/uploads/2011/04/deployment_production_line.pdf
    editorial_note: >
      With Jez Humble and Chris Read, from the AGILE 2006 conference, where he
      is the third author.
  - title: 'The RSpec Book: Behaviour-Driven Development with RSpec, Cucumber, and Friends'
    type: book
    year: 2010
    link: https://openlibrary.org/books/OL24602313M/The_RSpec_Book
    editorial_note: >
      David Chelimsky, Dave Astels, Zach Dennis, Aslak Hellesøy, Bryan Helmkamp
      and Terhorst-North; after Chelimsky the names run in alphabetical order.
      BDD as other people's tooling carried it.
  - title: Code in the Language of the Domain
    type: essay
    year: 2010
    link: https://raw.githubusercontent.com/97-things/97-things-every-programmer-should-know/master/en/thing_11/README.md
    editorial_note: >
      His contribution to *97 Things Every Programmer Should Know*, edited by
      Kevlin Henney. One page on why `trader.canView(portfolio)` beats a lookup
      in a map of maps.
  - title: McKinsey Developer Productivity Review
    type: essay
    year: 2023
    link: https://dannorth.net/blog/mckinsey-review/
    editorial_note: >
      A long critique of McKinsey's framework for measuring developer
      productivity, including a section defending the DORA and SPACE research
      and its lead researcher by name.

reading: >
  Terhorst-North's part in behaviour-driven development is a change of
  vocabulary, made while teaching test-driven development: think in behaviour
  instead of tests. Most pieces came from other people, and his 2006 essay names
  them: Chris Stevenson's agiledox, a "should" convention he came across, Chris
  Matts on analysis, Eric Evans's ubiquitous language. With Matts he wrote the
  template Gherkin now uses as step keywords, which states a story's acceptance
  criteria as a context, an event and an outcome before the work starts.
  Deliberate Discovery turns to planning: ignorance is the constraint on
  delivery, including the ignorance a team does not know it has, so finding it
  out is work to schedule early. As Mark Needham quotes it, Phillip Armour's
  2000 paper had already named a second order of ignorance. CUPID, grown from a
  2016 talk against SOLID, answers SOLID with five properties of code. The two
  signed critiques found answer that talk, and neither addresses CUPID or BDD.
extension: >
  In a scenario the team picks the Given; against an agent, an attacker writes
  some of them. Prompt injection stays open in the architecture. Read through
  Deliberate Discovery, the Givens the team has not named are the constraint:
  adversarial discovery becomes planned work funded from the start, each finding
  written as a new Given with the outcome the team will accept. Each Given pins
  one payload, and a model that passed it once can fail a variant of it or a
  rerun. The essay front-loads discovery to relieve the constraint; here the
  constraint never lifts, so a release can gate only on the Givens already
  found.
reading_review:
  protocol: reading-protocol-v1
  date: 2026-09-25
  verdict: accept-with-edits
  council_transcript: ~/.claude/LIFEOS/MEMORY/COUNCIL/distillery-reading-dan-north-20260925-debate/transcript.md
  grounding_pack: _working/dan-north/grounding-pack.md
  claims: _working/dan-north/reading-claims.md
  dissent: false

limits:
  - headline: His profile and his 2006 essay give different accounts of where BDD came from
    severity: structural
    elaboration: >
      The profile says he "invented Behaviour-Driven Development, co-invented
      the build pipeline, and pioneered many of the Continuous Delivery
      practices that software teams now take for granted," and the about page
      calls him BDD's "originator." The 2006 essay credits agiledox to Chris Stevenson, presents the "should"
      convention as something he came across, gives business value and the turn
      to analysis to Chris Matts and ubiquitous language to Eric Evans, and
      closes "BDD evolved with the help of many people." He is a co-author of
      the pipeline paper, which is consistent with "co-invented", and Fowler's
      credit for the blue-green name is hedged. Beyond those two joint credits, the research
      behind this page found no source for "many" such practices. Cite the essays for what is his.
  - headline: BDD asks more of a learner than TDD, whose teaching it set out to fix
    severity: local
    elaboration: >
      The Agile Alliance's glossary notes that he describes BDD as a response to
      recurring problems in teaching TDD, then observes that "BDD requires
      familiarity with a greater range of concepts than TDD does," and that it
      "seems difficult to recommend a novice programmer should first learn BDD
      without prior exposure to TDD concepts."
  - headline: A passing scenario speaks only for the contexts someone wrote down
    severity: structural
    elaboration: >
      Given/When/Then pins behaviour inside the contexts a team named, and a
      suite of green scenarios is evidence about those contexts and nothing
      else. His own Deliberate Discovery essay warns that "you are usually
      ignorant of how ignorant you are." None of the essays behind this page considers
      a context chosen by someone who wants the software to misbehave, so a
      scenario suite read as assurance claims more than it tested. Aslak
      Hellesøy, who created Cucumber, warns from the tool's side that teams
      writing scenarios "after the software instead of the other way around"
      lose what the tool was built to bring, a common understanding across
      roles. Apart from
      the quoted warnings, this limit is the site's reading of his two frames
      together.
  - headline: Second-order ignorance has an earlier statement, and the frame's recorded uptake is modest
    severity: local
    elaboration: >
      Phillip G. Armour's "The Five Orders of Ignorance" appeared in
      Communications of the ACM in October 2000, a decade before Terhorst-North's essay,
      and names, as Mark Needham quotes it, a "2nd Order Ignorance"; the essay uses "second-order ignorance" without citing Armour. No source shows whether he had read it. Needham came across
      Armour's paper
      within five months, in the comments on Terhorst-North's post. Needham is also
      the one outside practitioner found applying the frame, in 2011. Treat the
      term second-order ignorance as older than the essay, and the uptake as
      modest.

still_load_bearing_despite: >
  The template still gives a team a check on a requirement before it is
  built, by asking for its context, its event and its outcome. A requirement a team cannot put that way marks the kind of
  ignorance Deliberate Discovery asks it to go looking for early. The renaming,
  once Chris Matts heard it as analysis, did the other durable work, carrying a testing
  practice into conversations about requirements, where Gherkin's step keywords
  still hold the shape of the template.

adjacent_thinkers:
  - target_slug: jez-humble
    display_name: Jez Humble
    edge_type: parallel
    edge_label: >
      Humble made the route to production into a discipline. He is the first
      of three authors on "The Deployment Production Line" (AGILE 2006),
      Terhorst-North the third, and Humble's own first-person credit names all
      three; Fowler's hedged credit for the blue-green name pairs the two of
      them. Otherwise the two bodies of work point different ways: Humble's
      toward the release, this one toward the requirement written before any
      code.
    strength: primary
  - target_slug: martin-fowler
    display_name: Martin Fowler
    edge_type: parallel
    edge_label: >
      Fowler's bliki recorded two of the credits this page leans on for joint
      work. The 2013 entry on Given/When/Then says it was developed by
      Terhorst-North and Chris Matts and, in a footnote, reports that
      Terhorst-North's review comments credited Ivan Moore. The entry on blue-green deployment hedges the name across
      Terhorst-North and Humble.
    strength: primary
  - target_slug: nicole-forsgren
    display_name: Nicole Forsgren
    edge_type: parallel
    edge_label: >
      His 2023 review of McKinsey's developer productivity framework faults
      its authors for using DORA and SPACE without citing her, the lead
      researcher on both. The review is a critique of McKinsey, and on the
      question of her research he takes her side.
    strength: secondary
    editorial_demote_to: secondary
  - target_slug: chris-matts
    display_name: Chris Matts
    edge_type: parallel
    edge_label: >
      Co-originator of two frames on this page. A business analyst, he met the
      behaviour vocabulary with "But that's just like analysis," which turned
      BDD toward requirements, and he wrote the Given/When/Then template with
      Terhorst-North.
    strength: primary
  - target_slug: robert-c-martin
    display_name: Robert C. Martin
    edge_type: critiques
    edge_label: >
      "Solid Relevance" (2020) answers the 2016 slides that called every SOLID
      principle wrong. Martin grants that "just write simple code" is good
      advice and that the slides are "entirely correct" on Liskov substitution.
      He says they "completely miss the point" of the single responsibility
      principle, adds that irony, "knowing Dan, is far more likely" than
      misunderstanding, and holds that simplicity needs principles to guide it.
      The essay predates CUPID and does not address BDD.
    strength: secondary
  - target_slug: jeroen-de-dauw
    display_name: Jeroen De Dauw
    edge_type: critiques
    edge_label: >
      "Why Every Single Argument of Dan North is Wrong" (2017) replies to the
      same slides and calls them "crammed full with straw man argumentation"
      about what the SOLID principles are for. Its target is that talk alone.
    strength: secondary
  - target_slug: phillip-armour
    display_name: Phillip G. Armour
    edge_type: antecedent
    edge_label: >
      "The Five Orders of Ignorance" (CACM, 2000), in Mark Needham's summary,
      treats software work as reducing ignorance and names a "2nd Order
      Ignorance," ten years before
      Deliberate Discovery used "second-order ignorance." Terhorst-North does not cite
      him, and no source shows a line from one text to the other.
    strength: secondary
    render_tier: deep
  - target_slug: dave-farley
    display_name: Dave Farley
    edge_type: parallel
    edge_label: >
      Farley adds the part of the pipeline story that comes before the 2006
      paper. Humble's own account, in February 2010, puts Farley and Mark
      Rickmeier at the start of it in 2004, and Farley's single-author 2007
      paper calls the gated model by the name the practice kept. Whether
      either write-up drew on the other is unrecorded.
    strength: secondary

further_in:
  start_here: '"Introducing BDD" (2006), which carries the name, the template and most of the credits.'
  then_read:
    - '"GivenWhenThen" (Martin Fowler, 2013)'
    - '"Introducing Deliberate Discovery" (2010)'
    - '"CUPID: for joyful coding" (2022)'
  if_you_want_depth: >
    *The RSpec Book* (2010), where he is one of six authors, for BDD as the
    tooling other people built around it.
  if_you_want_breadth: >
    Phillip G. Armour's "The Five Orders of Ignorance" (CACM, 2000), whose
    "2nd Order Ignorance" Mark Needham quotes, and Robert C. Martin's
    "Solid Relevance" (2020), a signed reply to the SOLID talk that grants part
    of it.
---
