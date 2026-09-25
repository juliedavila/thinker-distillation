---
slug: simon-willison
name: Simon Willison
canonical_url: https://simonwillison.net/
active_years: 2002–present
primary_domains:
  - ai-security
  - open-source
  - data-tooling
status: alive-active
inclusion_rationale: >
  The vocabulary a security executive is already obliged to use. OWASP carries
  prompt injection as LLM01, the number one risk in the Top 10 for LLM
  Applications. Meta's "Agents Rule of Two" (October 2025) credits "Simon
  Willison's lethal trifecta" by name inside a published product-security
  policy, four and a half months after coinage. A fourteen-author paper across
  Google, Microsoft, IBM, ETH Zurich and EPFL carries the Dual LLM pattern as
  one of six named designs and sources it to him. The strongest signal is a
  failure to credit: a Cloud Security Alliance research note presents the
  lethal trifecta as its own authors' coinage with no citation to anyone,
  which is vocabulary that has escaped its author. The chronicler objection is
  real and the page answers it rather than waving it off: he published 1,044
  items in 2025 and 11.4 percent were entries of his own, so the inclusion
  case rests on the prompt-injection series, twenty-three posts tracking one
  problem from 2022-09-12 to 2025-11-02. Attribution needs unusual care, since
  the frame with the widest uptake is the one he did not originate. Inclusion
  Council 5 to 0, 2026-09-17.
thinker_type: essay-corpus
doctrine_mode: mode-a
has_long_read: false
last_updated: 2026-09-17

tagline: The blogger who put the working vocabulary of prompt injection into circulation, where it now reaches practitioners with no author attached.
thirty_second_take: >
  Willison works one problem in public. An application hands a model its
  developer's instructions and untrusted outside text through the same
  channel, and the model acts on the combination. He proposed the name prompt
  injection for that in September 2022, and the name stuck. The phrase
  predates him by four months, a priority he surfaced and conceded himself in
  2025, and Preamble had disclosed the vulnerability to OpenAI in May 2022
  under the name command injection. Five days later he ruled out a whole class
  of defense, arguing that a filter built from another model cannot be shown
  to work against an adversary who retries. His work since has gone two ways.
  The Dual LLM pattern is structural, keeping a privileged model with the
  tools away from a quarantined model that reads untrusted content. The lethal
  trifecta is diagnostic, naming the combination that makes an agent
  dangerous. He also polices his own terms, and his test is exact: where no
  trusted and untrusted strings have been joined, the attack has been
  misnamed.

background: >
  A web developer and open-source maintainer, blogging at simonwillison.net
  since 2002. He co-created Django with Adrian Holovaty at the Lawrence
  Journal-World's web division, where the work began around 2003 to 2004 and
  the framework was open-sourced in the summer of 2005; his own account and
  the project's FAQ differ on the start year. He spent two years on data
  journalism projects at the Guardian in London before co-founding Lanyrd in
  2010, a Y Combinator company acquired by Eventbrite in 2013, where he became
  an engineering director. In 2017 he created Datasette, a tool for exploring
  and publishing data, and in 2019 he began a John S. Knight Journalism
  Fellowship at Stanford. Datasette is still his full-time work. He shipped
  the llm command-line tool in April 2023. He has been on the Python Software
  Foundation board since 2022 and was re-elected in 2025.
why_they_matter_as_a_thinker: >
  The inclusion case is the prompt-injection series: twenty-three posts from
  September 2022 to November 2025 tracking one problem, with the AI security
  frames on this page landing inside it. That distinction matters on this page
  more than most, because the authored work and the curated volume are easy to
  confuse. What travels is the vocabulary. OWASP ranks prompt injection first
  among risks to LLM applications. Meta credits the lethal trifecta by name in
  its published agent-security policy. A fourteen-author security paper
  carries the Dual LLM pattern as a named design. And a Cloud Security
  Alliance note uses the trifecta while crediting its own authors for it,
  which is the clearest evidence that practitioners now inherit these terms
  without knowing whose they are.

thesis: >
  Prompt injection, in Willison's definition, is what happens when an
  application concatenates a developer's trusted instruction with untrusted text
  and the model acts on the combination. He treats that as the reason the
  defenses built for older injection attacks have no equivalent here: SQL
  injection has a known mitigation that is guaranteed to work, in escaping and
  quoting user-provided strings, and no such function exists for natural
  language. From there he draws a rule about what a fix may be made of. A hole
  patched with another model cannot be verified, because the model is a black
  box and an adversary keeps trying until something works, so the direction he
  trusts is architectural, keeping untrusted content away from anything that
  holds privilege. His claim about the state of the art is
  narrower than the rule, and he states it plainly: two and a half years into
  the problem he had seen alarmingly little progress toward a robust solution,
  and nobody yet knows how to prevent it 100 percent reliably.
working_line: >
  If you patch a hole with even more AI, you have no way of knowing if your
  solution is 100% reliable. ("You can't solve AI security problems with more
  AI," 2022.)

named_frames:
  - concept_slug: prompt-injection
    display_name: Prompt injection
    one_line_gloss: >
      An attack that works by concatenating a trusted developer instruction with
      untrusted text, so the model acts on the attacker's words as if they were
      the developer's. Willison proposed the name on 2022-09-12 in a post
      documenting Riley Goodside's demonstration. The phrase was already in use:
      @himbodhisattva wrote "prompt-injection attack" on 2022-05-13, four months
      earlier, a priority Willison surfaced and conceded himself in 2025, and
      Jonathan Cefalu of Preamble had disclosed the vulnerability to OpenAI in
      May 2022 under the name command injection.
    attribution_kind: popularized
    primary_author: simon-willison
    co_originators:
      - slug: riley-goodside
        role: demonstrated the attack the coining post documents, September 2022
      - slug: himbodhisattva
        role: 'used the phrase "prompt-injection attack" on 2022-05-13, four months before the coining post, a priority Willison surfaced and conceded in 2025'
      - slug: jonathan-cefalu
        role: 'of Preamble, disclosed the vulnerability to OpenAI on 2022-05-03 under the name command injection'
    source_link: https://simonwillison.net/2022/Sep/12/prompt-injection/
    render_tier: foreground
  - concept_slug: lethal-trifecta
    display_name: The lethal trifecta
    one_line_gloss: >
      Three capabilities that are each ordinary alone and dangerous in
      combination: access to private data, exposure to untrusted content, and
      the ability to communicate externally. An agent holding all three can be
      steered into stealing what it can reach. Meta's Agents Rule of Two credits
      the frame by name, alongside Chromium's separately credited Rule of Two.
    attribution_kind: original
    primary_author: simon-willison
    source_link: https://simonwillison.net/2025/Jun/16/the-lethal-trifecta/
    render_tier: foreground
  - concept_slug: dual-llm-pattern
    display_name: The Dual LLM pattern
    one_line_gloss: >
      A privileged model that reads only trusted input and holds the tools, a
      quarantined model that reads untrusted content and holds nothing, and
      ordinary software as the controller between them. The rule that makes it
      work is that unfiltered output from the quarantined model never reaches
      the privileged one. A fourteen-author paper from Google, Microsoft, IBM,
      ETH Zurich and EPFL carries it as one of six named patterns. The post
      credits no one, and an antecedent search found no published source placing
      the split in the older privilege-separation lineage of systems security.
    attribution_kind: original
    primary_author: simon-willison
    source_link: https://simonwillison.net/2023/Apr/25/dual-llm-pattern/
    render_tier: foreground
  - concept_slug: no-ai-fix-for-ai-security
    display_name: You can't solve AI security problems with more AI
    one_line_gloss: >
      A defense made of another model cannot be verified, because the model is
      a black box and an attacker who keeps retrying needs only one attempt to
      land. He sets this against SQL injection, which has a known mitigation
      that is guaranteed to work.
    attribution_kind: original
    primary_author: simon-willison
    source_link: https://simonwillison.net/2022/Sep/17/prompt-injection-more-ai/
    render_tier: foreground
  - concept_slug: prompt-injection-is-not-jailbreaking
    display_name: Prompt injection and jailbreaking are not the same thing
    one_line_gloss: >
      Jailbreaking subverts a model's own safety training. Prompt injection
      subverts an application built on top of a model, and his test is exact:
      "Crucially: if there's no concatenation of trusted and untrusted strings,
      it's not prompt injection." The post exists because the term he proposed
      had been taken up for both, so it is the coiner policing a name he had
      lost control of. Jailbreaking is community vocabulary he did not name.
    attribution_kind: original
    primary_author: simon-willison
    source_link: https://simonwillison.net/2024/Mar/5/prompt-injection-jailbreaking/
    render_tier: foreground
  - concept_slug: vibe-coding
    display_name: Vibe coding
    one_line_gloss: >
      Andrej Karpathy coined the term in February 2025. Willison's contribution is
      a narrowing: "Building software with an LLM without reviewing the code it
      writes." The review step is what the definition turns on.
    attribution_kind: extended
    primary_author: andrej-karpathy
    co_originators:
      - slug: andrej-karpathy
        role: coined the term in February 2025
    source_link: https://simonwillison.net/2025/Mar/19/vibe-coding/
    render_tier: deep
  - concept_slug: slop
    display_name: Slop
    one_line_gloss: >
      Unwanted AI-generated content published without review, as spam is the
      term for unwanted email. The coinage is @deepfates's and the analogy to
      spam is @deepfates's sentence; Willison's post quotes the tweet in its
      first line and endorses it. His part is circulation.
    attribution_kind: popularized
    primary_author: simon-willison
    co_originators:
      - slug: deepfates
        role: coined the term in the tweet the post quotes and endorses, May 2024
    source_link: https://simonwillison.net/2024/May/8/slop/
    render_tier: deep

body_of_work:
  - title: Prompt injection attacks against GPT-3
    type: essay
    year: 2022
    link: https://simonwillison.net/2022/Sep/12/prompt-injection/
    editorial_note: >
      The naming post. Read it for the sentence "I propose that the obvious name
      for this should be prompt injection," and read the opening, which credits
      Riley Goodside's demonstration before naming anything.
    read_first: true
    canonical: true
  - title: You can't solve AI security problems with more AI
    type: essay
    year: 2022
    link: https://simonwillison.net/2022/Sep/17/prompt-injection-more-ai/
    editorial_note: >
      Five days after the naming post, and the piece that decides what a
      defense is allowed to be made of. The comparison with SQL injection is
      set up here, which is also where the trouble with the analogy starts.
  - title: The Dual LLM pattern for building AI assistants that can resist prompt injection
    type: essay
    year: 2023
    link: https://simonwillison.net/2023/Apr/25/dual-llm-pattern/
    editorial_note: >
      His structural proposal, offered as his own. Read the constraint at the
      end, that unfiltered quarantined output never reaches the privileged
      model, because that constraint is what the pattern costs in practice.
    canonical: true
  - title: Prompt injection and jailbreaking are not the same thing
    type: essay
    year: 2024
    link: https://simonwillison.net/2024/Mar/5/prompt-injection-jailbreaking/
    editorial_note: >
      Eighteen months after the coinage, the coiner policing a term he had lost
      control of. Useful to a security team for the test it gives, and useful as
      a record of how fast security vocabulary drifts.
  - title: 'The lethal trifecta for AI agents: private data, untrusted content, and external communication'
    type: essay
    year: 2025
    link: https://simonwillison.net/2025/Jun/16/the-lethal-trifecta/
    editorial_note: >
      Named in June 2025 and credited by name in Meta's published
      agent-security policy four and a half months later, which makes it the
      frame most likely to reach you from someone who does not know whose it
      is. It carries its own warning in the text: "we still don't know how to
      100% reliably prevent this from happening."
    canonical: true
  - title: The prompt injection series
    type: blog-series
    year: 2022–2025
    link: https://simonwillison.net/series/prompt-injection/
    editorial_note: >
      Twenty-three posts on one problem, from the naming post to a November 2025
      entry on Meta's Agents Rule of Two. This is the body of work the case for
      reading him rests on. The April 2025 post on CaMeL carries his own summary
      of the record: alarmingly little progress towards a robust solution.
  - title: 'The Summer of Johann: prompt injections as far as the eye can see'
    type: essay
    year: 2025
    link: https://simonwillison.net/2025/Aug/15/the-summer-of-johann/
    editorial_note: >
      A post about Johann Rehberger's exfiltration research rather than
      Willison's own, and the clearest single example of what the link blog
      does. Rehberger published the markdown-image exfiltration work in May
      2023, crediting Roman Samoilenko's earlier disclosure; none of it is
      Willison's.

reading: >
  A single channel carries the developer's trusted instruction and untrusted
  text, and the model acts on the combination; that join is the problem Willison
  works. He proposed the name in September 2022, in a post documenting Riley
  Goodside's demonstration, four months after @himbodhisattva used the phrase
  and Preamble disclosed it as command injection. Five days later he ruled out
  defenses built from another model, which cannot be shown to hold against an
  attacker who retries. His answers are structural: a privileged model holding
  the tools, kept apart from a quarantined model that reads untrusted content,
  with ordinary software between them. The lethal trifecta names a
  configuration: three capabilities each ordinary alone and dangerous together.
  He polices the term afterwards, ruling that without a concatenation of trusted
  and untrusted strings it is not prompt injection. Most of the blog is links
  and quotes carrying other people's work; the authored spine is the
  twenty-three-post series behind these frames.
extension: >
  The trifecta is a combinatorial claim about the attack surface a security
  organization inherits: capabilities acceptable alone and unacceptable
  together. That makes it a test to run whenever an agent is granted a tool.
  He concedes the scope himself: the frame covers exfiltration, and Meta's
  rule adds changing state and a session boundary. Within that session a
  grant-time decision holds only while the tool's sources stay fixed, and
  later checks belong to the architecture, since no reviewer reads that fast.
  Grant-time and architectural checks both rest on a live inventory of what
  each agent can reach, with a named owner. His argument about defenses built
  from more AI prices a classifier as a rate reduction with no guarantee, so
  the weight falls on scoping. The cost lands on the product: his containment
  pattern puts a controller between the untrusted read and the privileged
  action, workflows must be rebuilt around it, and nothing in the sources shows
  it running in production.
reading_review:
  protocol: reading-protocol-v1
  date: 2026-09-17
  verdict: accept-with-edits
  council_transcript: ~/.claude/LIFEOS/MEMORY/COUNCIL/distillery-reading-simon-willison-20260917-debate/transcript.md
  grounding_pack: _working/simon-willison/grounding-pack.md
  claims: _working/simon-willison/reading-claims.md
  dissent: false

limits:
  - headline: Most of the output is the link blog
    severity: structural
    elaboration: >
      In 2025 he published 1,044 items. Of those, 119 were entries of his own
      and 99 were short notes; the remaining 826 are links and quotes carrying
      work that is not his. Much of the research a reader associates with him
      belongs to other people. Markdown-image exfiltration
      against LLM applications is Johann Rehberger's, published in May 2023,
      and Rehberger himself credits Roman Samoilenko's disclosure at the end of
      March 2023 and calls his own finding independent. Willison's 2025 post
      "The Summer of Johann" is about Rehberger's output. Read the volume as
      curation and the prompt-injection series as the authored work.
  - headline: The trifecta is a diagnostic and covers exfiltration only
    severity: structural
    elaboration: >
      He concedes the limit himself. The lethal trifecta "only covers the risk
      of data exfiltration: there are plenty of other, even nastier risks," and
      Meta's Agents Rule of Two "neatly solves this, through the addition of
      'changing state' as a property to consider." A security team that adopts
      the three ingredients as a threat model inherits that blindness, because
      an agent that destroys or corrupts what it can reach needs no way to
      communicate outward, so the third ingredient is absent and the frame does
      not fire. Meta's rule also scopes its test to what an agent can do
      "within a session," a boundary the trifecta post does not carry. The post
      also says plainly that no defense is known to hold
      every time, so the three ingredients can gate a capability grant without
      standing as evidence that the grant is safe.
  - headline: Containment means the model that decides never reads the content
    severity: structural
    elaboration: >
      The Dual LLM pattern works because unfiltered output from the quarantined
      model never reaches the privileged one. What the privileged model gets
      instead are variable names standing in for whatever the quarantined model
      read, so every workflow has to be expressible as operations on opaque
      references. Whether any production system runs the pattern is not
      documented either way in the record behind this page, so its standing
      rests on the security literature that names it and says nothing about
      operation at scale.
  - headline: The analogy that made the name travel is the thing defenders unlearn
    severity: structural
    elaboration: >
      Prompt injection was named by analogy with SQL injection, and the analogy
      implies a fix by escaping that does not exist. Dave Chismon of the UK
      NCSC makes the case that "under the hood of an LLM, there's no distinction
      made between 'data' or 'instructions'; there is only ever 'next token'," so
      classical confused deputy problems can be mitigated while LLMs stay
      "inherently confusable." His named target is security professionals with
      web application experience who assume the two attacks are alike. Willison
      set that contrast up himself in 2022 and reached the same conclusion, so
      the limit falls on the name while the substance holds.
  - headline: Nothing published argues against him
    severity: local
    elaboration: >
      Two searches for a durable critique of the frames on this page returned
      adoption: institutional uptake, vendor explainers, defensive research he
      covered approvingly. The NCSC post credits him and reaches his own 2022
      conclusion. The CaMeL and design-patterns papers propose defenses he
      endorsed. Meta's rule extends the trifecta with his blessing. The page
      records the absence rather than promoting a friendly post into a hostile
      one, and a reader should treat the absence as untested rather than as
      agreement, given how recent the frames are.
  - headline: The corpus is written from outside a security function
    severity: local
    elaboration: >
      The career runs through Django, the Guardian, Lanyrd, Eventbrite and
      Datasette, with no security role in it. What he brings is a web
      developer's reading of a new attack class, published daily and corrected
      in public. What he does not bring is the experience of defending a running
      estate under a budget, which is where the gap between a good frame and an
      operable control usually shows up.

still_load_bearing_despite: >
  The frames name combinations rather than techniques, which is why they survive
  model releases that obsolete specific attacks. The lethal trifecta describes a
  configuration, the Dual LLM pattern describes a topology, and the rule about
  defenses made of more AI describes what evidence a security control has to be
  able to produce. All three keep working when the underlying models change. The
  naming discipline is load-bearing in its own right for anyone who has to buy
  or govern agent systems, because the vocabulary is now arriving from OWASP,
  from vendors, and from research notes that no longer cite where it came from.

adjacent_thinkers:
  - target_slug: charity-majors
    display_name: Charity Majors
    edge_type: parallel
    edge_label: >
      Both build their argument on what cannot be predicted in advance. Majors
      asks whether the telemetry can answer a question formed after the trouble
      starts; Willison argues that the trouble arrives through a channel the
      system was never able to separate from its own instructions. Her page
      already carries the agent incident as the case her test has to cover.
    strength: primary
  - target_slug: rich-hickey
    display_name: Rich Hickey
    edge_type: parallel
    edge_label: >
      The same argument in different material. Hickey's guardrail programming
      says tests and type checkers are safety nets, and the ability to reason
      about a program still has to come from the design. Willison says a filter
      made of another model is a safety net, and the security property still has
      to come from the architecture.
    strength: primary
  - target_slug: martin-fowler
    display_name: Martin Fowler
    edge_type: parallel
    edge_label: >
      Fowler's bounded context draws a line where the language changes, which is
      also where authority usually changes. Willison's frames describe what goes
      wrong when no such line exists: a model that reads instructions and
      outside text through one channel has no boundary to place authority
      against.
    strength: primary
  - target_slug: riley-goodside
    display_name: Riley Goodside
    edge_type: antecedent
    edge_label: >
      His demonstrations against GPT-3 are what the coining post documents, and
      the post credits him in its first line before proposing a name for the
      attack.
    strength: secondary
  - target_slug: andrej-karpathy
    display_name: Andrej Karpathy
    edge_type: antecedent
    edge_label: >
      Karpathy supplied the word in February 2025 and left it loose, which is why
      the narrowing on this page had somewhere to go: his post reports accepting
      every diff and pasting errors back in without comment, and hedges the
      whole thing as fine for a weekend project. The coinage post cannot be
      fetched from X, so the reproduction inside the 2025-03-19 post here is
      where this site quotes it from.
    strength: secondary
  - target_slug: johann-rehberger
    display_name: Johann Rehberger
    edge_type: parallel
    edge_label: >
      The researcher behind much of the exfiltration work that reaches readers
      through Willison's blog, including markdown-image exfiltration against
      ChatGPT plugins in May 2023, itself credited in part to Roman Samoilenko's
      earlier disclosure. Willison amplifies this work and claims none of it.
    strength: secondary
  - target_slug: dave-chismon
    display_name: Dave Chismon
    edge_type: extends
    edge_label: >
      The NCSC's 2025 post takes the term into national guidance and pushes the
      mechanism further than Willison does, arguing that an LLM makes no
      distinction between data and instructions at all, so it stays inherently
      confusable where a classical confused deputy can be fixed. It credits him
      and reaches his 2022 conclusion, which makes it uptake rather than
      critique.
    strength: secondary
  - target_slug: ross-anderson
    display_name: Ross Anderson
    edge_type: parallel
    edge_label: >
      Anderson takes the untrusted-input problem below the model. Trojan
      Source, first authored by his student Nicholas Boucher with Anderson
      second, shows source text that renders one way to a human reviewer and
      compiles another, carrying CVE-2021-42574 and CVE-2021-42694. The remedy
      landed in Rust 1.56.1, in a -Wbidi-chars warning merged for GCC 12 and in
      LLVM, which is containment applied to a compiler instead of to an agent.
    strength: primary
  - target_slug: gene-kim
    display_name: Gene Kim
    edge_type: critiques
    edge_label: >
      Kim is one of the three authors named in "Two publishers and three
      authors fail to understand what 'vibe coding' means" (May 2025), and the
      only one with a page here. The objection measures the subtitle of his
      book with Steve Yegge against the definition this page's own narrowing
      supplied, so the standard being applied is Willison's rather than
      Karpathy's. Nothing
      in the DevOps corpus Kim is otherwise known for is in range of the
      argument. What followed bounds what a definitional objection achieves:
      Addy Osmani's book was retitled *Beyond Vibe Coding*, and the Kim and
      Yegge book shipped in October 2025 with the wording intact.
    strength: primary

further_in:
  start_here: '"Prompt injection attacks against GPT-3" (2022), then "You can''t solve AI security problems with more AI" five days later.'
  then_read:
    - '"The Dual LLM pattern for building AI assistants that can resist prompt injection" (2023)'
    - '"Prompt injection and jailbreaking are not the same thing" (2024)'
    - '"The lethal trifecta for AI agents" (2025)'
  if_you_want_depth: >
    The prompt-injection series in order, twenty-three posts from 2022 to 2025,
    which is the only place the argument is visible as an argument rather than
    as a set of terms.
  if_you_want_breadth: >
    "Design Patterns for Securing LLM Agents against Prompt Injections" (arXiv
    2506.08837, 2025) for the Dual LLM pattern in academic company, Meta's
    "Agents Rule of Two" (2025) for the trifecta with its exfiltration-only gap
    closed, and the NCSC's "Prompt injection is not SQL injection (it may be
    worse)" (2025) for the strongest published statement of why the naming
    analogy misleads.
---
