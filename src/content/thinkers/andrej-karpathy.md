---
slug: andrej-karpathy
name: Andrej Karpathy
canonical_url: https://karpathy.ai/
active_years: 2015–present
primary_domains:
  - machine-learning
  - software-engineering
  - technical-education
status: alive-active
inclusion_rationale: >
  Inclusion rests on Software 2.0, published 2017-11-11 and eight years and ten
  months old at the time of writing, with outside use in peer-reviewed venues by
  six author groups who take the term as the subject of their own work, among
  them an empirical study of maintaining such systems and two SambaNova papers
  carrying it in their titles. Vibe coding (February 2025) is nineteen
  months old and clears the uptake bar on use rather than on age: Merriam-Webster
  listed it as slang and trending in March 2025, Collins named it word of the
  year for 2025, and dozens of Hacker News submissions use it as a given. Two
  cautions carried onto the page. The definition in circulation belongs to
  Simon Willison, who narrowed it onto the review step six weeks after the
  coinage. And Software 3.0 is not his: the June 2025 talk is titled "Software
  in the era of AI," the label came from Latent Space's writeup, which credits
  itself for it, and independent uses predate the talk by two years. It is
  therefore not a frame here. LLM OS and
  jagged intelligence are excluded for the same reason twice over: every artifact
  is a post on X that cannot be fetched, and each has a live antecedent question
  (MemGPT, October 2023; Dell'Acqua's jagged technological frontier, 2023).
  Inclusion Council 5 to 0, 2026-09-22.
thinker_type: mixed
doctrine_mode: mode-a
has_long_read: false
last_updated: 2026-09-24

tagline: Named the software whose behaviour sits in learned weights nobody wrote, and later coined the word for letting a model write the code and forgetting it exists.
thirty_second_take: >
  In 2017 Karpathy drew a line between two kinds of program. Software 1.0 is
  explicit instructions written by a programmer. Software 2.0 is "written in much
  more abstract, human unfriendly language, such as the weights of a neural
  network," where "no human is involved in writing this code," and what takes the
  programmer's place is a dataset and an evaluation criterion. Fixing a failure
  in that stack means adding labelled examples of the failing case, so the work
  moves to curating data and designing the criterion. Seven years later he
  coined "vibe coding" for writing software by giving in to the vibes, where his
  own account of the practice is that he accepted every diff without reading it.
  The word travelled: Collins named it word of the year for 2025. In an October
  2025 interview, asked why coding models had been so little help on nanochat,
  he said the
  repository was "intellectually intense code almost, and everything has to be
  very precisely arranged," that what the models gave back was "just not net
  useful," and that "autocomplete is my sweet spot."

background: >
  A BSc in computer science and physics at Toronto, a master's at UBC under
  Michiel van de Panne, then a Stanford PhD in 2015 under Fei-Fei Li on
  connecting images and natural language. He was a research scientist and
  founding member at OpenAI from 2015, and joined Tesla in June 2017 as, in
  Tesla's words at the time of hire, "Director of AI and Autopilot Vision,"
  reporting to Elon Musk and leading the vision work behind Autopilot until July
  2022. He returned to OpenAI for a year from February 2023 to work on
  midtraining and synthetic data, and in July 2024 founded Eureka Labs, which
  he describes as "a new kind of school that is AI native" and whose first
  course walks a student through training their own model. In May 2026 he
  joined Anthropic to work on pre-training, writing that he remains "deeply
  passionate about education" and will resume that work "in time"; what becomes
  of Eureka Labs he has not said. By his own account he designed and taught
  Stanford's CS231n from 2015, as enrollment grew from 150 to 750 students; the
  course's current page does not name him. Software 2.0 was published just under
  five months into the Tesla job.
why_they_matter_as_a_thinker: >
  Both of his names travel without him. Software 2.0 shows up as the subject of
  other people's work, carried in their titles: an empirical study of how such
  systems get maintained, a paper pairing it with Snorkel, a chip paper on
  accelerating it with dataflow. Vibe coding went further and faster, into
  Merriam-Webster's slang list in March 2025 and Collins's word of the year for
  2025. The vocabulary is portable because each name marks a
  different place where an engineering discipline loses hold of its own artifact,
  and the two places are not the same one. His teaching corpus argues in the
  other direction, and at volume. nn-zero-to-hero and nanoGPT exist to make a
  person build the thing from scratch.

thesis: >
  One shift runs through the corpus: the thing that decides how a system behaves
  is moving out of source code. Software 1.0 is explicit instructions; in
  Software 2.0 "the source code comprises 1) the dataset that defines the
  desirable behavior and 2) the neural net architecture," with the weights filled
  in by training, so in his compression, "Software 2.0 is code written by the
  optimization based on an evaluation criterion." The practical consequence he
  draws is a change of job: when the network fails on a hard case, "we do not fix
  those predictions by writing code, but by including more labeled examples of
  those cases," and most of the active development becomes "curating, growing,
  massaging and cleaning labeled datasets." This page reads vibe coding as the
  cheap version of the same move, made at the keyboard instead of in the
  training loop. The model writes the source, the person stops reading it, and
  what gets traded away is
  comprehension of an artifact that does still exist in a repository. He named
  that trade with some enthusiasm for throwaway work, and has since reported in
  detail where coding models stop helping him.
working_line: >
  Software 2.0 is code written by the optimization based on an evaluation
  criterion. ("Software 2.0," 2017.)

named_frames:
  - concept_slug: software-2-0
    display_name: Software 2.0
    one_line_gloss: >
      Programs whose behaviour is fixed by learned weights rather than by written
      instructions, where "no human is involved in writing this code" and the
      source code is the dataset plus the architecture. The essay credits no
      earlier person or framing for the distinction and presents it as his own,
      though it quotes Fred Jelinek and cites contemporaneous papers as
      illustrations of the trend. The earliest indexed scholarly use of the term in his sense
      is dated 2018.
    attribution_kind: original
    primary_author: andrej-karpathy
    source_link: https://karpathy.medium.com/software-2-0-a64152b37c35
    render_tier: foreground
  - concept_slug: vibe-coding
    display_name: Vibe coding
    one_line_gloss: >
      Building software by giving in to the vibes and forgetting that the code
      exists. He coined the term in a post dated 2025-02-02, which Willison's
      account gives as February 6th. The post describes the practice loosely and
      hedges it as fine for "throwaway weekend projects"; the definition that
      circulated, "building software with an LLM without reviewing the code it
      writes," is Simon Willison's narrowing six weeks later, and the review
      step is his addition.
    attribution_kind: original
    primary_author: andrej-karpathy
    source_link: https://x.com/karpathy/status/1886192184808149383
    render_tier: foreground

body_of_work:
  - title: Software 2.0
    type: essay
    year: 2017
    link: https://karpathy.medium.com/software-2-0-a64152b37c35
    editorial_note: >
      The frame, the mechanism and its own limits, in one piece. Read the section
      headed "The limitations of Software 2.0" as carefully as the argument above
      it. Start here.
    read_first: true
    canonical: true
  - title: The Unreasonable Effectiveness of Recurrent Neural Networks
    type: essay
    year: 2015
    link: https://karpathy.github.io/2015/05/21/rnn-effectiveness/
    editorial_note: >
      The piece that made him widely read, two years before the frame. Useful for
      seeing the habit the essays are built on, which is to train something small,
      show what it produced, and reason from the output.
  - title: Building the Software 2.0 Stack
    type: talk
    year: 2018
    editorial_note: >
      His conference talk a year after the essay, and evidence the frame carried
      into his own working vocabulary rather than staying an argument he made
      once.
  - title: 'Neural Networks: Zero to Hero'
    type: blog-series
    year: 2022
    link: https://github.com/karpathy/nn-zero-to-hero
    editorial_note: >
      Eight lectures from backpropagation to tokenization, with notebooks and
      exercises. The teaching corpus in its most complete form, and the
      counterweight to reading him as an argument for not understanding code.
  - title: 'Let''s build GPT: from scratch, in code, spelled out'
    type: talk
    year: 2023
    editorial_note: >
      The lecture from that series with the widest reach, at 1,110 points on
      Hacker News, and the one that builds toward the nanoGPT repository. Watch it
      before any discussion of what a language model is doing.
  - title: Software in the era of AI
    type: talk
    year: 2025
    link: https://www.latent.space/p/s3
    editorial_note: >
      His talk at Y Combinator's AI Startup School, June 2025, which introduces
      an autonomy slider for AI products, an Iron Man suit figure for tools that
      offer both augmentation and autonomy, and agents as a third consumer of
      digital information alongside humans and APIs. Widely known as the
      "Software 3.0" talk; that label belongs to this writeup, which credits
      itself for it, and the talk does not carry it.
  - title: Interview with Dwarkesh Patel
    type: interview
    year: 2025
    link: https://www.dwarkesh.com/p/andrej-karpathy
    editorial_note: >
      The October 2025 interview with Dwarkesh Patel, and the best source on
      where he now puts the limits of coding models. Read it against the vibe
      coding post rather than after it.

reading: >
  Karpathy's 2017 essay splits programs by where their behaviour is written
  down. Software 1.0 is explicit instructions; in Software 2.0 the weights carry
  it and "no human is involved in writing this code." The mechanism is one
  sentence: "Software 2.0 is code written by the optimization based on an
  evaluation criterion." The work moves to the criterion and the data, so a
  failure on a hard case gets fixed by adding labelled examples of it. Seven
  years later he coined vibe coding, where the model writes the source and the
  person stops reading it. The two name different artifacts: one has no source
  to read, the other has source nobody read. The definition people argue about
  is Willison's narrowing rather than his. His own account carries the limits,
  from the essay's trade between accuracy and understanding to his report in
  October 2025 that on code where "everything has to be very precisely arranged"
  the models were "just not net useful."
extension: >
  The comprehension crisis is usually counted as one gap, measured in the volume
  of code nobody has read. His distinction splits that gap in two, because the
  artifacts fail comprehension in ways that need different controls. Unread
  generated source stays readable, so that gap has a price in review, tests and
  provenance. A trained model's behaviour is written nowhere a reviewer can go,
  so semantic comprehension lives in the evaluation criterion and the dataset or
  nowhere. An organization running one assurance policy over both buys review
  where review is available and calls the rest covered. Whoever holds the
  criterion for the second kind holds its behaviour, which is a different
  accountability from owning a repository. The split works only where the
  criterion can be stated: an owner for it, an evaluation set controlled like
  code. The risk is the adversarial examples his essay's limitations section
  names: a criterion passed on a held-out set says nothing about attacker-chosen
  inputs.

reading_review:
  protocol: reading-protocol-v1
  date: 2026-09-24
  verdict: accept-with-edits
  council_transcript: ~/.claude/LIFEOS/MEMORY/COUNCIL/distillery-reading-andrej-karpathy-20260922-debate/transcript.md
  grounding_pack: _working/andrej-karpathy/grounding-pack.md
  claims: _working/andrej-karpathy/reading-claims.md
  dissent: true

limits:
  - headline: The definition in circulation is not his
    severity: structural
    elaboration: >
      He coined vibe coding in February 2025 in a post that is loose about what the
      practice is: give in to the vibes, accept every diff, paste the error
      messages back in without comment. The version practitioners now argue
      about arrived on 2025-03-19 from Simon Willison, who wrote that he means
      "building software with an LLM without reviewing the code it writes." The
      review step is Willison's addition and it is what makes the term testable,
      so anyone citing Karpathy for that definition has the wrong author. The
      post itself is not readable from here, since X refuses the fetch, and its
      text reaches this page through three independent reproductions of one
      status.
  - headline: He reports coding models failing on intellectually intense code
    severity: structural
    elaboration: >
      In an October 2025 interview Dwarkesh Patel quoted one of his tweets back
      to him, that coding models had been of very little help in assembling
      nanochat, and asked why. Karpathy's answer: the repository is "not
      boilerplate code. It's intellectually intense code almost, and everything
      has to be very precisely arranged." The models kept misunderstanding it
      because they had "too much memory from all the typical ways of doing
      things on the Internet," bloating the code base and reaching for
      deprecated APIs, so what came back was "just not net useful." His own
      practice, in his words: "autocomplete is my sweet spot," with agents good
      on boilerplate. He also moved the industry's timeline out, correcting a
      claim that this was the year of agents with "It's the decade of agents."
      All of that is a limit on the models, eight and a half months after the
      coinage, and this page carries no later report from him on them.
  - headline: Software 2.0 presumes the criterion can be written down
    severity: structural
    elaboration: >
      The mechanism sentence carries a precondition inside it: code written by
      the optimization "based on an evaluation criterion." Where the criterion can
      be stated and a dataset curated, which describes the perception work he was
      doing at Tesla, the frame is an accurate account of how the artifact gets
      built. Where the criterion is itself the contested thing, it describes an
      ambition. Whether an action was authorized, whether a disclosure was
      lawful, whether a residual risk is acceptable: these are the judgments a
      large organization argues about, and none of them has a held-out test set.
      The essay does not claim that ground, and the frame should not be carried
      onto it.
  - headline: He names the interpretability cost himself, and the essay leaves it open
    severity: structural
    elaboration: >
      The essay's own limitations section says that after training "we're left
      with large networks that work well, but it's very hard to tell how," and
      that across many application areas the choice will be "a 90% accurate model
      we understand, or 99% accurate model we don't." It adds that such systems
      "can fail in unintuitive and embarrassing ways, or worse, they can 'silently
      fail'" by adopting biases in their training data, biases "which are very
      difficult to properly analyze and examine when their sizes are easily in the
      millions," and that adversarial examples show how unintuitive the stack
      is. The frame is therefore a good description of an unsolved situation and
      a poor argument for accepting it.
  - headline: One durable critique names him, and the widely read attacks do not
    severity: local
    elaboration: >
      The search for a durable critique that names him found one: Cendyne's
      "'Vibe Coding' vs. Reality" (March 2025), which quotes him, lists what the
      tools could not then do in production, and closes that vibe coding "will
      not create the next big thing in 2025." Rachel Thomas's essay for fast.ai
      and Bram Cohen's "The Cult Of Vibe Coding Is Insane" both argue against the
      practice at length and carried several hundred points each on Hacker News,
      and neither names him; an arXiv paper arguing the practice erodes
      open-source maintenance names him in neither its abstract nor its listing.
      On the record reached here, none of the three is a critique of him. The
      practice is what they take on, and he is not in the argument.

still_load_bearing_despite: >
  The distinction outlasts particular models, because the question it puts to
  any system is where the behaviour lives and whether anyone can read it there.
  A network's behaviour lives in weights, and no reading budget recovers it,
  which is why his own limits section offers a trade between accuracy and
  understanding. Generated source can be read by anyone willing to pay for the
  reading, and that bill can at least be estimated. His teaching corpus makes
  the same point from the other side, since
  the man who named both frames built it out of small repositories meant to be
  read.

adjacent_thinkers:
  - target_slug: simon-willison
    display_name: Simon Willison
    edge_type: extends
    edge_label: >
      Willison supplies the definition the word now carries. Six weeks after the
      coinage he narrowed vibe coding to building software with an LLM
      without reviewing the code it writes, which turns a mood into a testable
      claim about a review step. His page files the frame as an extension with
      Karpathy credited for the term, and his own post is also where the coinage
      post itself can be read, since X cannot be fetched.
    strength: primary
  - target_slug: kent-beck
    display_name: Kent Beck
    edge_type: parallel
    edge_label: >
      Beck named his own 2025 frame against this one. Augmented coding is set out
      as the opposite value system, where "you care about the code, its
      complexity, the tests, & their coverage." Beck defines his frame against
      the term and does not name the person who coined it, so the relationship
      runs through the word rather than between the two men.
    strength: primary
  - target_slug: cendyne
    display_name: Cendyne
    edge_type: critiques
    edge_label: >
      "'Vibe Coding' vs. Reality" (March 2025) is the one durable critique that
      names him. It quotes the coinage post, argues the tools could not then
      produce a performant application or a secure registration flow, attributes
      the trend to "laziness, inexperience, and self-deluding imagination," and
      closes that vibe coding "will not create the next big thing in 2025." The
      scope is the coinage and the practice around it, not the wider body of work.
    strength: secondary
  - target_slug: fei-fei-li
    display_name: Fei-Fei Li
    edge_type: antecedent
    edge_label: >
      She supervised the Stanford PhD, "Connecting Images and Natural Language,"
      finished in 2015, and she is listed first among the current instructors of
      CS231n, the course he says he designed and taught from 2015. The lineage
      here is institutional rather than intellectual, since the essay itself
      credits no antecedent.
    strength: secondary
  - target_slug: christopher-re
    display_name: Christopher Ré
    edge_type: extends
    edge_label: >
      One of the authors who made the term the subject of their own work.
      "Software 2.0 and Snorkel" (2018) and the weak supervision paper with
      Ratner and colleagues treat labelled data as the programmable surface the
      frame describes, which is the uptake the inclusion case rests on. The
      claim here is about use of the term, not about citation of the man.
    strength: secondary

further_in:
  start_here: '"Software 2.0" (2017), including its limitations section.'
  then_read:
    - '"The Unreasonable Effectiveness of Recurrent Neural Networks" (2015)'
    - '"Software in the era of AI" (Y Combinator AI Startup School, 2025)'
    - 'The Dwarkesh Patel interview (October 2025), for where he now puts the limits'
  if_you_want_depth: >
    *Neural Networks: Zero to Hero*, eight lectures with notebooks, and the
    nanoGPT repository it builds toward. Both are the argument for comprehension
    that his vocabulary is usually read against.
  if_you_want_breadth: >
    Simon Willison's "Not all AI-assisted programming is vibe coding" (2025) for
    the definition in circulation, Cendyne's "'Vibe Coding' vs. Reality" (2025)
    for the one critique that names him, and Rachel Thomas's dark-flow essay and
    Bram Cohen's "The Cult Of Vibe Coding Is Insane" for the two that never do.
---
