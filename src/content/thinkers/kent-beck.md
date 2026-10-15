---
slug: kent-beck
name: Kent Beck
canonical_url: https://kentbeck.com/
active_years: 1989–present
primary_domains:
  - software-design
  - development-practice
  - testing
status: alive-active
inclusion_rationale: >
  The clearest pass on the filter the site has had. The vocabulary is decades
  old and travels with the attribution detached: third-party teaching material
  states the test-driven cycle step by step inside its own definition, Fowler
  carries "make the change easy, then make the easy change" under Beck's name in
  2015, practitioners write about 3X with Beck absent as author from 2017 through
  2021, and *Tidy First?* drew reviews from practitioners with no relationship to
  him. The duplication risk is Fowler, whose page already holds refactoring,
  code smell and continuous integration. The answer is tiering: this page
  foregrounds the development-discipline and cost-of-change spine that Fowler
  does not hold, and leaves code smell and CRC cards in the deep tier where the
  Fowler page already carries the catalog. Two frames the candidate case assumed
  did not survive research. Beck refuses the credit for inventing test-driven
  development in his own words, and the Chrysler record says a team adopted the
  way of working later formalized as Extreme Programming, so neither is
  available as `original`. Augmented coding is fifteen months old and sits in
  Live Edge, to be rechecked in 2027. Continuous integration stays off this page
  entirely until someone searches its pre-XP antecedents. Inclusion Council 5 to
  0, 2026-09-20.
thinker_type: mixed
doctrine_mode: mode-a
has_long_read: false
last_updated: 2026-09-20

tagline: Priced the practices a modern development team argues about, spending twenty years working out what a practice costs and what it buys.
thirty_second_take: >
  Beck names practices and then prices them. The vocabulary travelled furthest:
  test-driven development, Extreme Programming, the code smell, CRC cards, and
  the line about making the change easy before making the easy change. The credit for it is mixed, and the frames below record how. The
  pricing stays his own. Constantine's Equivalence puts the
  argument in one near equation, cost(software) ~= cost(change), which makes
  coupling the thing that costs money and design the work of bringing it down. Tidying is the small structural change bought to cheapen the behavior
  change that follows, and his answer to whether it is worth buying is an
  inequality that sometimes comes out no. 3X adds the other axis, that a
  practice which is right while a product is being explored is waste once it is
  being extracted.

background: >
  Beck read computer and information science at the University of Oregon between
  1979 and 1987, taking a B.S. and an M.S. He was at Apple in 1989, where he
  wrote the CRC cards paper with Ward Cunningham of Wyatt Software. In 1996 he
  was brought on to oversee the Chrysler Comprehensive Compensation System, a
  payroll project that had not yet printed a single paycheck; the record reads
  that in 1997 the development team adopted the way of working now formalized as
  Extreme Programming, that the system went live that year and paid 9,000
  people, and that DaimlerChrysler stopped the project in February 2000.
  *Extreme Programming Explained* came out of that work in 1999. In February
  2001 he was one of seventeen practitioners who gathered at Snowbird, Utah and
  signed the Agile Manifesto, a document with seventeen authors and no single
  one. He was at Facebook from 2011 to 2018, joined Gusto as a software fellow
  and coach in 2019, and was Chief Scientist at Mechanical Orchard until a post
  dated 15 November 2024, where he wrote that he would announce his departure
  later that day. He now works for himself, on a third design book, on augmented
  coding, and on the newsletter that drafts both.
why_they_matter_as_a_thinker: >
  The vocabulary outran its attribution, which is the strongest evidence a frame
  has travelled. Teaching material states the test-driven cycle step by step
  without putting his name inside the definition. Fowler's 2015 article quotes
  the change-easy line twice under Beck's name, three years after the post it
  came from, and practitioners were writing about 3X with Beck absent as author
  by 2017. He is also unusually exact about what he did and did not originate.
  He calls his own role in test-driven development a rediscovery, he credits
  Yourdon and Constantine for the coupling result he named after Constantine,
  and he answers his own economic question both ways in public. A reader can
  take his attributions at face value more safely than most.

thesis: >
  Software costs what changing it costs. Beck states that as Constantine's
  Equivalence, cost(software) ~= cost(change), and credits the coupling and
  cohesion work in *Structured Design* for the underlying result. Coupling is
  then the thing to watch, because it is what makes one change drag others
  behind it, and design is whatever brings it down. The work happens in
  tidyings, small changes to structure that leave behavior alone. The two kinds
  of change are asymmetrical. A structure change can be undone, while a behavior
  change that has reached customers cannot, which is the reason his practices
  favor small steps with a test behind each one. Whether to do the structural
  work first is an investment question rather than a matter of virtue, and his
  own answer runs both ways: discounted cash flow argues for earning sooner and
  spending later, options argue for spending now, and the decision is the
  inequality between them.
working_line: >
  Tidy first? Yes. Also no. When the cost of tidying plus the cost of the eased
  change comes in under the cost of the change alone, tidy first. ("Options
  Versus Cash Flows," Software Design: Tidy First?, 2022.)

named_frames:
  - concept_slug: test-driven-development
    display_name: Test-driven development
    one_line_gloss: >
      Write the test that fails first, then the code that makes it pass, then
      clean up what you wrote. Beck declines the credit for inventing it. He
      traces the technique to an old programming book that told the reader to
      type the expected output tape by hand and program until the real output
      matched, says he tried it after writing the first xUnit framework in
      Smalltalk, and reports older programmers answering "Of course. How else
      could you program?" His own word for his role is "rediscovering." The book
      he rediscovered is named nowhere, so no slug can carry the antecedent and
      this gloss has to.
    attribution_kind: extended
    primary_author: kent-beck
    source_link: https://www.informit.com/store/test-driven-development-by-example-9780321146533
  - concept_slug: extreme-programming
    display_name: Extreme Programming
    one_line_gloss: >
      A whole method assembled in 1999 and written up by Beck, organized around
      a small set of values, principles and practices. The practice came out of
      a team: the Chrysler record reads that in 1997 the development team
      adopted the way of working now formalized as Extreme Programming. The
      second edition of 2004
      is co-authored with Cynthia Andres and was rewritten rather than revised,
      so any count of the values, principles or practices belongs to that book
      and to her as well as to him.
    attribution_kind: distributed
    primary_author: kent-beck
    co_originators:
      - slug: cynthia-andres
        role: co-author of the rewritten second edition, 2004
  - concept_slug: constantines-equivalence
    display_name: Constantine's Equivalence
    one_line_gloss: >
      Beck's name for a result he credits to someone else: the cost of software
      is approximately the cost of changing it, which he writes as
      cost(software) ~= cost(change). He names the antecedent himself, the
      original work on coupling and cohesion in *Structured Design* by Edward
      Yourdon and Larry Constantine, and the name is his tribute to it. It is
      chapter 30 of *Tidy First?*, inside a part that introduces coupling,
      cohesion, discounted cash flows and optionality.
    attribution_kind: extended
    primary_author: kent-beck
    co_originators:
      - slug: larry-constantine
        role: the coupling and cohesion result in *Structured Design*, which Beck credits by name
      - slug: edward-yourdon
        role: co-author of *Structured Design*, named by Beck as the same antecedent
    source_link: https://newsletter.kentbeck.com/p/constantines-equivalence
  - concept_slug: tidying
    display_name: Tidying
    one_line_gloss: >
      A small change to the structure of code that leaves its behavior alone,
      made to cheapen the behavior change coming next. The two kinds of change
      differ by reversibility in his account: extract a helper you dislike and
      you can inline it again, while a behavior change that sends a hundred
      thousand wrong tax notices cannot be taken back. Whether to tidy first is
      an economic question he answers both ways, since discounted cash flow
      argues against it and options argue for it, and his rule is to tidy first
      when the tidying plus the eased change costs less than the change alone.
    attribution_kind: original
    primary_author: kent-beck
    derived_from: refactoring
    source_link: https://newsletter.kentbeck.com/p/options-versus-cash-flows
  - concept_slug: make-the-change-easy
    display_name: Make the change easy, then make the easy change
    one_line_gloss: >
      Posted in 2012 as "for each desired change, make the change easy (warning:
      this may be hard), then make the easy change." The warning in the middle
      is the clause that gets dropped when the line is repeated, and it is where
      the cost sits. Fowler's 2015 article on preparatory refactoring is the
      durable carrier, quoting it twice under Beck's name.
    attribution_kind: original
    primary_author: kent-beck
    source_link: https://x.com/KentBeck/status/250733358307500032
  - concept_slug: three-x
    display_name: '3X: Explore, Expand, Extract'
    one_line_gloss: >
      Product development runs in three phases and the right practice differs in
      each: exploring is the risky search for a viable return on a viable
      investment, expanding is what happens when the thing takes, extracting is
      for when the shape of the problem and the solution is clear. Beck credits
      no antecedent for it, in a series whose stated aim is "no analogies, no
      persuasion, just the facts." Jason Yip's reading of it as Theodore
      Levitt's 1965 product life cycle is Yip's claim about Beck rather than a
      credit Beck gives, and the Kelly Criterion derivation Beck posted in 2021
      came years after the frame.
    attribution_kind: original
    primary_author: kent-beck
    source_link: https://newsletter.kentbeck.com/p/canon-3x-exploreexpandextract
  - concept_slug: code-smell
    display_name: Code smell
    one_line_gloss: >
      A surface sign in code that points at a deeper design problem. Fowler's
      account is unambiguous about where the term came from: "The term was first
      coined by Kent Beck while helping me with my Refactoring book." Fowler is
      the one who cataloged the smells and his page carries this frame in the
      foreground, which is why it sits in the deep tier here.
    attribution_kind: co-authored
    primary_author: kent-beck
    co_originators:
      - slug: martin-fowler
        role: cataloged the smells in *Refactoring* and credits the coinage to Beck
    source_link: https://martinfowler.com/bliki/CodeSmell.html
    render_tier: deep
  - concept_slug: crc-cards
    display_name: CRC cards
    one_line_gloss: >
      Index cards that characterize an object by its class name, its
      responsibilities and its collaborators, used to teach object-oriented
      design by moving cards around a table. One paper, written with Ward
      Cunningham and presented at OOPSLA in October 1989.
    attribution_kind: co-authored
    primary_author: kent-beck
    co_originators:
      - slug: ward-cunningham
        role: co-author of "A Laboratory For Teaching Object-Oriented Thinking," OOPSLA 1989
    source_link: https://c2.com/doc/oopsla89/paper.html
    render_tier: deep

body_of_work:
  - title: 'Extreme Programming Explained: Embrace Change'
    type: book
    year: 1999
    editorial_note: >
      The 1999 first edition, sole-authored, written out of the Chrysler work.
      Read it for the assembly rather than for any single practice. The 2004
      second edition is a different book, rewritten with Cynthia Andres.
    canonical: true
  - title: 'Test-Driven Development: By Example'
    type: book
    year: 2002
    link: https://www.informit.com/store/test-driven-development-by-example-9780321146533
    editorial_note: >
      The dedicated book, worked entirely as examples. Published November 2002
      with a 2003 copyright, which is why the year is quoted both ways
      elsewhere.
    read_first: true
    canonical: true
  - title: Tidy First?
    type: book
    year: 2023
    editorial_note: >
      The first of the empirical software design series, and the shortest route
      into the economics. Part III is distinctly his, and it
      sits in the book his strongest reviewer says was assembled wrong.
    canonical: true
  - title: Options Versus Cash Flows
    type: essay
    year: 2022
    link: https://newsletter.kentbeck.com/p/options-versus-cash-flows
    editorial_note: >
      Four paragraphs holding the whole economic argument, including the answer
      that runs both ways and the inequality that decides it. Read this before
      the book.
    read_first: true
  - title: Constantine's Equivalence
    type: essay
    year: 2022
    link: https://newsletter.kentbeck.com/p/constantines-equivalence
    editorial_note: >
      Where he states cost(software) ~= cost(change) and hands the credit for it
      to Yourdon and Constantine in the same paragraph.
  - title: 'Canon 3X: Explore/Expand/Extract'
    type: essay
    year: 2026
    link: https://newsletter.kentbeck.com/p/canon-3x-exploreexpandextract
    editorial_note: >
      The plainest restatement of the three phases, from a series he writes to
      remove the analogies. The place to check what 3X does and does not claim.
  - title: A Laboratory For Teaching Object-Oriented Thinking
    type: paper
    year: 1989
    link: https://c2.com/doc/oopsla89/paper.html
    editorial_note: >
      The CRC cards paper, with Ward Cunningham, at OOPSLA. Short, and the
      earliest thing on this list.
  - title: Measuring developer productivity? A response to McKinsey
    type: essay
    year: 2023
    link: https://newsletter.pragmaticengineer.com/p/measuring-developer-productivity
    editorial_note: >
      Written with Gergely Orosz and published in both their newsletters. The
      durable part is not the McKinsey argument but the first-person account of
      a survey score at Facebook turning into a goal, then into a number that
      rolled up a management chain.
  - title: 'Refactoring: Improving the Design of Existing Code'
    type: book
    year: 1999
    editorial_note: >
      Fowler's book, credited "With Kent Beck, John Brant, William Opdyke, and Don Roberts". Listed here because it is where the code smell vocabulary
      entered circulation, under Fowler's byline and Beck's coinage.

reading: >
  Beck's subject is the price of the next change, which Constantine's
  Equivalence states as cost(software) ~= cost(change). Coupling is what makes
  that price high, so design is whatever brings it down. The work happens in
  tidyings, small changes to structure that leave behavior alone. The two kinds
  are asymmetrical: a helper extracted can be inlined again, and a behavior
  change that reached customers cannot. Small steps with a test behind each one
  follow from that asymmetry, and he calls the test-first technique a
  rediscovery whose limits he states himself. His answer to whether to tidy
  first is an inequality rather than a rule, and it sometimes comes out no.
  Extreme Programming is the method he wrote up in 1999, out of the way of
  working a payroll team adopted in 1997. His 3X phases add the axis
  the others lack, since a practice that fits a product being explored is waste
  once it is being extracted.
extension: >
  Controls around an agent keep being revised, because prompt injection is
  mitigated rather than solved. Nothing in the material behind this page is
  about security; what follows is the site's use of his pricing. Each revision
  is a behavior change to a live control, and what it let through while it was
  wrong cannot be taken back. Coupling makes revisions expensive: the decision
  about what an agent may reach sits in every integration. The structural work
  worth buying puts that decision in one place and wires the integrations to it,
  so the next revision is an edit. His inequality is the brake, though its terms
  are cost alone and an attacker picks the moment. The 3X phases say which
  products are still moving, and an exploring one holding real customer data has
  an extracting product's blast radius. That structural work needs an owner and
  a budget no feature funds, and it concentrates into one target what was spread
  across many.
limits:
  - headline: He states the boundaries of test-driven development himself
    severity: local
    elaboration: >
      Writing in 2014, Beck said he was "puzzled by the limits of TDD" because
      "it works so well for algorithm-y, data-structure-y code," and set out
      where it stops: "I recognize that TDD loses value as tests take longer to
      run, as the number of possible faults per test failure increases, as tests
      become coupled to the implementation, and as tests lose fidelity with the
      production environment." Those four conditions describe a great deal of
      the software a large organization actually runs. The concession is his,
      and the words reach this page through a third-party blog that reproduced a
      Facebook post, since the original is no longer reachable.
  - headline: A decade of studies has not converged
    severity: structural
    elaboration: >
      Rafique and Mišić's 2013 meta-analysis of 27 studies found a small
      positive effect on quality alongside little or no effect on productivity,
      with both the quality gain and the productivity drop larger in industrial
      studies than in academic ones. Seven years later Ghafari, Gross, Fucci and
      Felderer asked why the literature is contradictory at all, and identified
      five categories of study-design factors that change what a TDD experiment
      finds. The strongest claims made for the method rest on evidence that does
      not settle, and that has been true for long enough to count as a property
      of the evidence rather than a gap in it.
  - headline: The word travels further than the practice
    severity: structural
    elaboration: >
      Reporting on a 2020 survey of developers found 41% saying their
      organization had fully adopted test-driven development while only 8% said
      they write tests before code at least 80% of the time. The gap is the
      page's structural limit and cannot be read the other way: universal
      vocabulary is not evidence of a working method. Beck's own career holds a
      version of it. By Gergely Orosz's account of an interview with him,
      Facebook "barely did any form of unit testing, while running a massive,
      stable, and fast-growing site," and a TDD class Beck offered at a
      company hackathon drew no signups at all.
  - headline: The tidying repertoire is thin, by the strongest published critique
    severity: structural
    elaboration: >
      Jimmy Koppel's 2024 review grants that *Tidy First?* achieves what it sets
      out to do, and calls the result "a rather impoverished repertoire" whose
      tidyings "can't solve any of the refactoring challenges I've been running
      lately." He also argues the book is assembled wrong, reading as if the
      chapters of a shallow book and a deep one were mixed together. The
      indictment is of that book. It says nothing about test-driven development,
      Extreme Programming or the measurement writing, and it should not be
      stretched to.
  - headline: No adversary appears anywhere in the material behind this page
    severity: structural
    elaboration: >
      Every source this page rests on describes software changed by the people
      who own it. Nothing in the corpus considers a change made by someone
      trying to cause harm, which means the economics have never been tested
      against an actor who benefits from a wrong decision. The extension above
      applies his pricing to that setting, and every sentence of it is the
      site's argument rather than his. A reader should treat any claim about
      security that arrives with Beck's name attached as the site speaking.

still_load_bearing_despite: >
  The question survives all of it, because it is a question about money rather
  than a claim about a method: what will the next change to this system cost,
  and what would it cost to make that change cheaper first? A team that cannot
  answer is buying structural work on faith or refusing it on faith, and both
  are decisions made without the number. His refusal to answer it in one
  direction is the part most likely to outlast the practices, since it is the
  rare piece of engineering advice that tells a reader when to stop taking it.

adjacent_thinkers:
  - target_slug: martin-fowler
    display_name: Martin Fowler
    edge_type: parallel
    edge_label: >
      Fowler is where Beck's vocabulary reached people who never read Beck. He
      cataloged the smells Beck named, published *Refactoring* with him in 1999
      and *Planning Extreme Programming* with him in 2000, quoted the
      change-easy line twice under Beck's name in 2015, and hosted the public
      conversation about test-driven development in 2014. The division of labor
      is the interesting part. Beck names a practice and prices it; Fowler
      catalogs it and keeps the attribution attached to it.
    strength: primary
  - target_slug: nicole-forsgren
    display_name: Nicole Forsgren
    edge_type: parallel
    edge_label: >
      Both work on what a measurement does to the thing it measures, from
      opposite ends. Forsgren builds instruments meant to describe a delivery
      system. Beck writes the first-person account of one coming apart: at
      Facebook, survey scores "started cropping up in performance reviews," then
      became goals, then rolled up so that a manager's score was the average of
      their reports' scores, after which managers negotiated with individual
      contributors for better scores. His 2023 response with Gergely Orosz
      argues against McKinsey's framework for measuring effort rather than
      outcome, and Part 2 of it does not name Forsgren.
    strength: primary
  - target_slug: rich-hickey
    display_name: Rich Hickey
    edge_type: parallel
    edge_label: >
      The same conclusion reached from opposite premises. Hickey argues from
      semantics that braiding independent concerns together is what makes
      software hard to change. Beck argues from money that the cost of software
      is the cost of changing it, and puts coupling in the place where that cost
      accumulates. Neither cites the other, so the agreement is the site's
      reading rather than a lineage.
    strength: primary
  - target_slug: jimmy-koppel
    display_name: Jimmy Koppel
    edge_type: critiques
    edge_label: >
      His 2024 review of *Tidy First?* is the one durable critique that takes
      Beck on by name. It grants the goal, then calls the result "a rather
      impoverished repertoire" whose tidyings "can't solve any of the
      refactoring challenges I've been running lately," and argues the chapters
      of two different books were mixed together. The scope is that book alone.
    strength: secondary
  - target_slug: dhh
    display_name: David Heinemeier Hansson
    edge_type: parallel
    edge_label: >
      "TDD is dead. Long live testing." (2014) is the sharpest published case
      against test-first practice, and it never names Beck. The five-episode
      series that followed does name him, and Fowler's account is that Beck
      asked for the conversation, so Beck appears in it as a discussant. The
      Forsgren page types the same man as a critic of a different target, which
      is a separate edge and not this one.
    strength: secondary
  - target_slug: ward-cunningham
    display_name: Ward Cunningham
    edge_type: parallel
    edge_label: >
      Cunningham is the other name on three of Beck's earliest artifacts: the
      CRC cards paper at OOPSLA in 1989, the 1987 technical report proposing
      pattern languages for programs, and the Smalltalk session where the
      question about the simplest thing that could possibly work was put to
      Beck rather than by him. The CRC frame above carries that credit in full,
      so the edge sits in the deep tier.
    strength: secondary
    render_tier: deep
  - target_slug: larry-constantine
    display_name: Larry Constantine
    edge_type: antecedent
    edge_label: >
      With Edward Yourdon, the author of the coupling and cohesion work in
      *Structured Design* that Beck names as the source of the result he then
      named after Constantine. Beck quotes them both by name in his own
      newsletter, which is where the equivalence is stated.
    strength: secondary
    render_tier: deep
  - target_slug: christopher-alexander
    display_name: Christopher Alexander
    edge_type: antecedent
    edge_label: >
      The named source of Beck's earliest published proposal. The 1987 report
      he first-bylined adapts concepts from Alexander's work, says so inside
      its own proposal sentence, and cites A Pattern Language as the one
      Alexander work in its bibliography. Read it as an antecedent to that one
      report. The economic argument the rest of this page follows does not run
      through it, which is why the edge sits in the deep tier.
    strength: primary
    render_tier: deep
  - target_slug: andrej-karpathy
    display_name: Andrej Karpathy
    edge_type: parallel
    edge_label: >
      Karpathy's coinage is the fixed point Beck's newest frame is defined
      against. In the June 2025 post that names augmented coding, model-written
      code is held to the standard Beck holds his own code to: "you care about
      the code, its complexity, the tests, & their coverage." The whole test is
      "tidy code that works," and it is the one the practice named here declines
      to run. The argument reaches the word and never its author.
    strength: secondary
  - target_slug: dave-farley
    display_name: Dave Farley
    edge_type: parallel
    edge_label: >
      Farley's *Modern Software Engineering* (2021) defines the discipline
      with the word Beck's series is named for: software engineering is "the
      application of an empirical, scientific approach" to practical problems
      in software. Which way, if any, the word travelled between the two is
      unrecorded.
    strength: secondary
    render_tier: deep

further_in:
  start_here: '"Options Versus Cash Flows" (2022), four paragraphs holding the whole economic argument.'
  then_read:
    - '"Constantine''s Equivalence" (2022)'
    - '*Test-Driven Development: By Example* (2002)'
    - '"Canon 3X: Explore/Expand/Extract" (2026)'
  if_you_want_depth: >
    *Tidy First?* (O'Reilly, 2023), reading Part III first, and *Extreme
    Programming Explained* (1999) for the assembly the rest of the corpus came
    out of.
  if_you_want_breadth: >
    Jimmy Koppel's 2024 review for the strongest published case against the
    tidying repertoire, David Heinemeier Hansson's "TDD is dead. Long live
    testing." (2014) for the counterposition that never names Beck, and the "Is
    TDD Dead?" series on martinfowler.com for the conversation Beck asked for.

live_edge_visible: true
live_edge:
  current_focus: >
    Working for himself on augmented coding, on the third book in the empirical
    software design series, and on the newsletter that drafts both.
  summary: >
    In a post dated 15 November 2024 Beck wrote that he would announce later
    that day that he was stepping down as Chief Scientist of Mechanical Orchard,
    and his site now lists his own work: Tidy Together, the third book in the
    Empirical Software Design series, augmented coding research, the Thinkie
    World Congress, and the Tidy First? newsletter,
    which reports over 126,000 subscribers. Augmented coding is the frame to
    watch, and the reason it stays out of the named frames above. He set it out
    at length on 25 June 2025, defining it against vibe coding, a term Andrej
    Karpathy coined in February 2025 and which Beck did not name: "In vibe coding
    you don't care about the code, just the behavior of the system... In
    augmented coding you care about the code, its complexity, the tests, & their
    coverage." Simon Willison quoted him in December 2025. Fifteen months is
    short of the two years this site asks of a frame, so it waits here until its
    uptake is its own.
  last_observed: 2026-09-20

---
