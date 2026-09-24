---
slug: ward-cunningham
name: Ward Cunningham
canonical_url: http://ward.dojo.fed.wiki/
active_years: 1987–present
primary_domains:
  - software-design
  - vocabulary-infrastructure
  - development-practice
status: alive-active
inclusion_rationale: >
  Three phrases in daily industrial use, the oldest thirty-four years in print.
  Technical debt reached print in the OOPSLA 1992 experience report and is the
  term the industry uses for the thing, with third-party tooling computing a
  cost figure from it and a working practitioner on this site borrowing its
  shape to name a second debt. The American Heritage Dictionary's etymologist
  wrote to him unprompted in 2003 as the coiner of a successful new word in the
  English language and drafted an entry around his name, which nothing else in
  the queue has. The travel test that carries this seat is the corrective
  literature: the community on his own wiki posted a warning in front of "do the
  simplest thing that could possibly work," because its history and therefore
  its meaning were lost on people who used it. No verified critic exists. The
  two candidates a Council would reach for, Robert C. Martin's "A Mess is not a
  Technical Debt" and Fowler's Technical Debt Quadrant, both name him and both
  argue his side, so both fail clause three of the critique test. Inclusion
  Council 5 to 0, 2026-09-22.
thinker_type: mixed
doctrine_mode: mode-a
has_long_read: false
last_updated: 2026-09-22

tagline: The programmer who gave the industry three phrases it still uses and spent years afterwards explaining what they were supposed to mean.
thirty_second_take: >
  Cunningham built the first wiki and introduced the phrase software teams use
  for the cost of code that no longer matches what they understand about the
  problem. Both came from one conviction: a group working something out needs a
  medium cheap enough to revise, and the revision is where the value is. His
  debt metaphor was an argument about alignment. Code written to reflect a
  partial understanding is legitimate, so long as the understanding is allowed
  to sharpen and the code is rewritten to match, and the interest is the
  friction of working against the gap. The industry kept the word and dropped
  the condition, reading debt as permission to write code badly on purpose,
  which he answered on camera in 2009. The same thing happened to his question
  about the simplest thing that could possibly work, which arrived in the field
  as a command. His record is three pieces of vocabulary in daily use, two of
  which travelled further than their meaning, and an author who kept going back
  on the record about it.

background: >
  Cunningham was a principal engineer at Tektronix Computer Research
  Laboratory, where in 1987 he and Kent Beck wrote the technical report
  proposing pattern languages for programs, and director of research and
  development at Wyatt Software, where he wrote the 1992 experience report that
  put the debt metaphor into print. He founded the consultancy Cunningham &
  Cunningham with his wife, which hosts the Portland Pattern Repository. He
  began coding WikiWikiWeb in 1994 and installed it on c2.com on 25 March 1995,
  as an automated supplement to that repository. By his own account, starting
  the PLoP conference series is what sent him looking for a web equivalent of a
  HyperCard stack he had built in the late 1980s, a stack that by the same
  account also produced CRC cards. He is one of the seventeen signatories of the
  Agile Manifesto in 2001. After 2003 he held engineering roles at
  Microsoft's Patterns and Practices group, the Eclipse Foundation, AboutUs,
  CitizenGlobal and New Relic. In April 2024 he keynoted the MediaWiki Users and
  Developers Conference in Portland on federated wiki, which is his current
  work.
why_they_matter_as_a_thinker: >
  Three phrases he introduced are used daily by people who have never read him,
  which is the condition this site's filter looks for. The American Heritage
  Dictionary's etymologist wrote to him unprompted in 2003 as the coiner of a
  successful new word in the English language and drafted a dictionary entry
  built around his name. Technical debt now carries third-party tooling that
  computes a cost figure from it. One phrase travelled far enough
  that the community on his own wiki posted a warning above it, because the
  history and therefore the meaning were lost on many people who wield it.
  A word that needs a guard rail is doing work its author no longer controls. What
  makes this a thinker's page rather than a plaque is that he kept going back on
  the record to say what the words had been for.

thesis: >
  Cunningham's subject is the distance between a program and what the people who
  own it currently understand about the problem. Code written to reflect a
  partial understanding is legitimate and useful in his account, so long as the
  understanding is allowed to sharpen and the code is rewritten promptly to
  match. What costs money is the gap left open. Every minute spent working
  against not-quite-right code is interest on that debt, and an entire
  engineering organization can be brought to a standstill under the load.
  The wiki is the same premise applied to prose. A group working out a shared
  understanding needs a medium cheap enough to revise that people who would not
  normally author will edit it, which is why he made the editing surface as thin
  as he could and delegated control to the people using it. Both positions rest
  on a repair step that somebody has to actually take, and on a community that
  can be trusted to take it.
working_line: >
  I'm never in favor of writing code poorly, but I am in favor of writing code
  to reflect your current understanding of a problem even if that understanding
  is partial. ("Debt Metaphor," 2009.)

named_frames:
  - concept_slug: technical-debt
    display_name: Technical debt
    one_line_gloss: >
      The cost of code that no longer matches what its team understands about
      the problem. Interest is paid in the friction of working against the
      mismatch, and the debt is cleared by rewriting the code to fit the current
      understanding. Cunningham credits the method behind the frame, choosing a
      metaphor deliberately because metaphors govern how a team reasons, to
      George Lakoff and Mark Johnson's *Metaphors We Live By*.
    attribution_kind: original
    primary_author: ward-cunningham
    source_link: https://c2.com/doc/oopsla92.html
    render_tier: foreground
  - concept_slug: wikiwikiweb
    display_name: The wiki
    one_line_gloss: >
      A site that anyone reading it can edit, with the editing surface made thin
      enough that people who would not normally author will. He built the first
      one as an automated supplement to the Portland Pattern Repository and
      installed it in March 1995, choosing wiki-wiki as an alliterative
      substitute for quick. The antecedent is his own HyperCard stack from the
      late 1980s, which was single user.
    attribution_kind: original
    primary_author: ward-cunningham
    source_link: https://c2.com/wiki/remodel/pages/WikiHistory
    render_tier: foreground
  - concept_slug: simplest-thing-that-could-possibly-work
    display_name: The simplest thing that could possibly work
    one_line_gloss: >
      A question to ask "if you're not sure what to do yet," put to Kent Beck
      across a Smalltalk session whenever the pair had been stuck for more than
      a minute. The aim is to get something on the screen and then look at it.
      That qualifier travels with the frame or the frame misstates him, and his
      own limit is that the question reached the field as a command.
    attribution_kind: original
    primary_author: ward-cunningham
    source_link: https://www.artima.com/intv/simplest.html
    render_tier: foreground
  - concept_slug: pattern-languages-for-programs
    display_name: Pattern languages for programs
    one_line_gloss: >
      The proposal, written with Kent Beck in a September 1987 technical report,
      that the design of programs could be set down as a pattern language in the
      sense Christopher Alexander gave the term for buildings. The paper credits
      the borrowing inside its own proposal sentence. Beck is first byline on
      that report, as he is on the CRC paper. CRC cards sit under Beck's name
      here because his page carries that frame, and this one stays with
      Cunningham. His stated purpose
      for the first wiki was to link people's experience together and discover
      the pattern language of programming.
    attribution_kind: extended
    primary_author: ward-cunningham
    co_originators:
      - slug: kent-beck
        role: co-author and first byline on the 1987 technical report
      - slug: christopher-alexander
        role: credited inside the paper's own proposal sentence; the report's bibliography cites A Pattern Language (1977) as "Christopher Alexander et. al.", the co-authors being Sara Ishikawa and Murray Silverstein
    source_link: https://c2.com/doc/oopsla87.html
    render_tier: foreground
  - concept_slug: crc-cards
    display_name: CRC cards
    one_line_gloss: >
      Index cards carrying a class, its responsibilities and its collaborators,
      proposed with Kent Beck at OOPSLA in October 1989 as a teaching tool and
      picked up afterwards by expert designers. Beck holds this frame on his own
      page and the credit there is complete, so it sits in the deep tier here.
      The same late-1980s HyperCard stack that led to the wiki produced it.
    attribution_kind: co-authored
    primary_author: kent-beck
    co_originators:
      - slug: ward-cunningham
        role: co-author of "A Laboratory For Teaching Object-Oriented Thinking," OOPSLA 1989
    source_link: https://c2.com/doc/oopsla89/paper.html
    render_tier: deep
  - concept_slug: federated-wiki
    display_name: Federated wiki
    one_line_gloss: >
      A wiki built around federated sharing, drag refactoring and data
      visualization, in the repository's own description. He started it in 2011
      and still works on it. The flagship repository has been archived since
      2016 and no use by other practitioners was found, so it sits here as live
      practice rather than as vocabulary anyone else carries.
    attribution_kind: original
    primary_author: ward-cunningham
    source_link: https://github.com/WardCunningham/Smallest-Federated-Wiki
    render_tier: deep
  - concept_slug: fit-framework
    display_name: Fit
    one_line_gloss: >
      A tool, in the project's own words, for enhancing collaboration in
      software development. Cunningham created it and James Shore coordinates
      the project, which makes Shore a coordinator rather than a co-creator. No
      year appears beside it because the only date the project site carries is a
      copyright notice on site content.
    attribution_kind: original
    primary_author: ward-cunningham
    source_link: http://fit.c2.com/
    render_tier: deep

body_of_work:
  - title: The WyCash Portfolio Management System
    type: paper
    year: 1992
    link: https://c2.com/doc/oopsla92.html
    editorial_note: >
      The OOPSLA experience report where the debt metaphor is first set down in
      print, dated 26 March 1992. One paragraph carries the whole analogy,
      including the sentence about interest that the later distortions dropped.
    read_first: true
    canonical: true
  - title: Debt Metaphor
    type: talk
    year: 2009
    link: https://www.youtube.com/watch?v=pqeJFYwnkjE
    editorial_note: >
      Self-published, and the place he says what the metaphor was for. It opens
      by crediting Lakoff and Johnson for the idea that metaphors govern how we
      reason, and it refuses the reading that debt means writing code badly with
      the intention of doing a good job later.
    canonical: true
  - title: Using Pattern Languages for Object-Oriented Programs
    type: paper
    year: 1987
    link: https://c2.com/doc/oopsla87.html
    editorial_note: >
      The 1987 technical report, written with Kent Beck, proposing that program
      design be set down as a pattern language. Read the proposal sentence,
      which credits Christopher Alexander inside itself and cites A Pattern
      Language in the bibliography.
  - title: A Laboratory For Teaching Object-Oriented Thinking
    type: paper
    year: 1989
    link: https://c2.com/doc/oopsla89/paper.html
    editorial_note: >
      CRC cards, with Beck first on the byline. The cards were proposed as a
      teaching tool and were taken up by expert designers and by extreme
      programming practitioners, which is the uptake the frame rests on.
  - title: 'Exploring with Wiki: A Conversation with Ward Cunningham, Part I'
    type: interview
    year: 2003
    link: https://www.artima.com/intv/wiki.html
    editorial_note: >
      His own account of what the first wiki was for, and of the single-user
      HyperCard stack behind it. It also states the precondition the whole
      design rests on, about delegating control to the users of the system. Of
      the five-part series, only the first and fifth parts were read for this
      page.
  - title: 'The Simplest Thing that Could Possibly Work: A Conversation with Ward Cunningham, Part V'
    type: interview
    year: 2004
    link: https://www.artima.com/intv/simplest.html
    editorial_note: >
      The question, the setting, and his correction of what became of it. Page
      three is where he says the advice got turned into a command, and that a
      command forces a team to prove a thing is simplest.
  - title: The Wiki Way
    type: book
    year: 2001
    link: https://openlibrary.org/search.json?q=The+Wiki+Way+Cunningham
    editorial_note: >
      Addison-Wesley, written with Bo Leuf, who is first author. A co-authored
      manual on running and building wikis, and the reason this page never
      describes it as Cunningham's book.
  - title: Correspondence on the Etymology of Wiki
    type: essay
    year: 2003
    link: https://c2.com/doc/etymology.html
    editorial_note: >
      A letter from the American Heritage Dictionary's etymologist, who
      approaches him as the coiner of a successful new word in the English
      language and drafts an entry around him. He labels the draft an example
      and asks Cunningham to confirm a date, so it evidences the approach rather
      than a published dictionary entry.

reading: >
  Cunningham puts a price on the gap between a program and what its owning team
  now understands about the problem. Writing code to a partial understanding is
  legitimate in his account, and the interest is the friction of working against
  the gap until it is rewritten. The wiki applies the same
  premise to prose, with an editing surface thin enough that people who would
  not normally author will revise what is there. What the site takes is the
  pattern across the vocabulary. Two phrases he coined reached practitioners
  with the condition stripped: debt as permission to write bad code, the
  simplest thing as a command. Cunningham's Law carries his name and was never
  his. He answered the first two on the record, and his own wiki's community posted a
  warning above the phrase for later arrivals. The correction reached fewer
  people than the phrase each time. Vocabulary that needs a warning label has
  stopped belonging to its author.
extension: >
  Technical debt is the phrase engineering leadership reaches for when it
  budgets remediation, which makes the condition attached to it a spending
  question. His repayment model assumes a team whose understanding of the
  problem outran the code, because a rewrite needs something to be rewritten
  toward. Generated code strains that assumption, since it arrives faster than
  anyone's understanding of it. Where that gap opens, a plan funded as paying
  down AI debt is priced against an alignment nobody ever held. What the work
  actually buys is comprehension the estate is missing, a different job from the
  rewrite his metaphor describes, and one that runs alongside the
  boundaries constraining code nobody has read. The precondition is an owner for the problem
  model the estate should match, and generated volume supplies none. The risk is
  that AI debt becomes the next phrase to arrive without its condition and fund
  whatever was already planned.

reading_review:
  protocol: reading-protocol-v1
  date: 2026-09-22
  verdict: accept-with-edits
  council_transcript: ~/.claude/LIFEOS/MEMORY/COUNCIL/distillery-reading-ward-cunningham-20260922-debate/transcript.md
  grounding_pack: _working/ward-cunningham/grounding-pack.md
  claims: _working/ward-cunningham/reading-claims.md
  dissent: false

limits:
  - headline: The wiki works only where control can be delegated
    severity: structural
    elaboration: >
      He states the precondition himself, in 2003: "wikis work best in
      environments where you're comfortable delegating control to the users of
      the system." Two sentences later he gives the condition behind the
      condition, that this works where you have "a trusting community that isn't
      looking for the computer to enforce some behavior." Then he draws the
      boundary: "Corporations that wouldn't trust their own employees to be able
      to maintain a web site need something other than wiki." That is a designer
      naming the assumption his design cannot survive without, and it excludes
      most settings a security or compliance function operates in. Whether the
      largest descendants of the wiki added page protection and dispute
      resolution as open editing scaled is the empirical test of the claim, and
      no source was checked for it here.
  - headline: The corrections never travelled with the words
    severity: structural
    elaboration: >
      Twice a phrase of his reached practitioners with the condition that made
      it true stripped off, and the second of the two drew a corrective from the
      community on his own wiki. Bloggers explained the debt metaphor and, in his
      words, "confused it, I think, with the idea that you could write code
      poorly with the intention of doing a good job later." The question about
      the simplest thing that could possibly work arrived as a command, which he
      says makes it complicated, because a team then has to prove a thing is
      simplest. The community on his own wiki had to post a warning above the
      phrase saying its history and therefore its meaning are lost on many people
      who wield it. Cunningham's Law is a different case: Steven McGeady named
      it after him, after advice he gave at Tektronix, so the phrase travelling
      under his name was never a coinage of his at all. Each time his answer was
      to go back on the record, and each
      time the record reached fewer people than the phrase.
  - headline: The metaphor is worked on one side only
    severity: local
    elaboration: >
      Both primary statements of technical debt develop the interest: minutes
      spent against not-quite-right code, an organization brought to a standstill
      under the load. Neither says what repayment costs, how a team should price
      a rewrite against the work it displaces, or how to tell a debt worth
      carrying from one worth clearing now. Later writers supplied that, and
      Fowler's quadrant is one such attempt. A team reaching for the
      metaphor to justify a remediation budget is using an analogy that argues
      the cost of waiting and says little about the cost of paying, beyond the
      assurance that objects make the transaction tolerable.
  - headline: Federated wiki has no uptake outside his own practice
    severity: local
    elaboration: >
      He has worked on federated wiki since 2011 and keynoted on it in 2024, so
      it is live rather than abandoned. The flagship repository has been archived
      since a last push in May 2016, and no use by practitioners other than him
      was found. It sits in the deep tier and in the Live Edge here for that
      reason. A reader looking for the next thing with the reach of the wiki
      should not assume this is it.

still_load_bearing_despite: >
  The vocabulary is still the best available, which is the point rather than an
  accident. Technical debt is the phrase the industry uses for the thing,
  thirty-four years after it reached print, with tooling built to compute a
  figure from it and a working practitioner borrowing its shape to name a second
  debt. The wiki's design assumption, that the cheapest possible editing surface
  plus a community you can trust beats a permission model, is the design
  question a system that opens its pages to its readers still has to answer.
  And the pattern of a word outrunning its condition is itself the transferable
  finding, a fact about how vocabulary moves through an industry.

adjacent_thinkers:
  - target_slug: kent-beck
    display_name: Kent Beck
    edge_type: parallel
    edge_label: >
      Beck stands on the other side of three of the artifacts here. He is first
      byline on the CRC cards paper and on the pattern-languages report, and he
      is the person the simplest-thing question was put to, across a Smalltalk
      session, whenever the pair had been stuck for more than a minute. Beck's
      page carries CRC cards as the shared frame and credits Cunningham in full,
      so the traffic runs both ways.
    strength: primary
  - target_slug: martin-fowler
    display_name: Martin Fowler
    edge_type: extends
    edge_label: >
      Fowler carried both of Cunningham's forms forward. His Technical Debt
      Quadrant (2009) partitions the metaphor into deliberate against
      inadvertent and prudent against reckless, and puts Cunningham's own
      meaning approvingly in one cell as the kind of debt that Ward talked
      about. The bliki is the wiki form crossed with a blog, and Fowler's own
      post defining the word says Cunningham is the one who named it.
    strength: primary
  - target_slug: will-larson
    display_name: Will Larson
    edge_type: extends
    edge_label: >
      Larson borrowed the shape of the debt metaphor to coin a second one.
      Exception debt is what an organization accumulates when it spends
      real time granting exceptions to its own policies, and his repair is to
      batch the escalations and rewrite the policy rather than work them one at
      a time. A working practitioner reaching for this analogy to name something
      new is direct evidence of how far it travelled.
    strength: primary
  - target_slug: christopher-alexander
    display_name: Christopher Alexander
    edge_type: antecedent
    edge_label: >
      A Pattern Language (1977) is the one work of his the 1987 report cites,
      and the report credits him inside its own proposal sentence, adapting
      concepts from his work. The phrase is older than that book, so the date
      marks where the software borrowing took the term rather than where the
      term was made. The software pattern movement, the Portland Pattern
      Repository and the wiki built to hold its literature all descend from the
      borrowing.
    strength: secondary
  - target_slug: george-lakoff
    display_name: George Lakoff
    edge_type: antecedent
    edge_label: >
      Metaphors We Live By, written with Mark Johnson, is the credited premise
      under technical debt. Cunningham opens his own account of the metaphor by
      saying he became interested in how metaphors influence thinking after
      reading it, and that we reason by analogy with the metaphors that have
      entered our language. The debt analogy is his; the conviction that the
      choice of analogy changes how a team reasons is theirs.
    strength: secondary

further_in:
  start_here: >
    "The WyCash Portfolio Management System" (OOPSLA 1992), then the "Debt
    Metaphor" video (2009) for what it was supposed to mean.
  then_read:
    - '"Exploring with Wiki," part I of the Venners interview (Artima, 2003)'
    - '"The Simplest Thing that Could Possibly Work," part V of the same series (Artima, 2004)'
    - '"Using Pattern Languages for Object-Oriented Programs" (Beck and Cunningham, 1987)'
  if_you_want_depth: >
    *The Wiki Way* (2001), written with Bo Leuf and first-authored by him, for
    the design decisions behind the first wiki set out at length.
  if_you_want_breadth: >
    Christopher Alexander's *A Pattern Language* (1977) for the pattern idea in
    its architectural form, and Fowler's Technical Debt Quadrant (2009) for the
    best known extension of the metaphor.

live_edge_visible: true
live_edge:
  current_focus: >
    Mining the recent-changes stream of his own federated wiki for what it shows
    about how a distributed body of writing moves.
  summary: >
    Cunningham has worked on federated wiki since 2011, a design built around
    federated sharing, drag refactoring and data visualization. It is the
    longest-running item on this page with no outside uptake: the flagship
    Smallest-Federated-Wiki repository on GitHub was archived after a last push
    in May 2016, and no use by practitioners other than him was found. The work
    itself continues. He runs a live federated wiki site at ward.dojo.fed.wiki
    carrying dojo practice yearbooks and a wiki-writing-workshop roster, and in
    April 2024 he keynoted the MediaWiki Users and Developers Conference in
    Portland with a talk titled "New Discoveries Mining Federated Wiki's Recent
    Changes," billed there as the inventor of the wiki with no organizational
    affiliation. Read this as a practice still being worked rather than as a
    frame the industry has taken up.
  last_observed: 2026-09-22
---
