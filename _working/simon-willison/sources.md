# Simon Willison: verified sources

Research pass run 2026-09-17 for candidate issue #16. The candidate case was treated as unverified
throughout, per the Fournier and Saxe precedents. Every claim below that will reach a page has a
matching `[S:n]` line in `facts.md`.

Canonical home: <https://simonwillison.net/>. Status: alive-active. Active years: 2002 to present
as a blogger, 2022 to present on AI security.

---

## 1. Uptake check, run first

This is the check that decides whether a Council is worth five seats. Willison passes it by a wider
margin than any candidate researched so far, and the evidence is institutional rather than
anecdotal.

**Prompt injection (named 2022-09-12).** Four years old. It is the name the industry uses. OWASP
lists it as **LLM01, the number one risk** in the Top 10 for LLM Applications, and the 2025 edition
keeps it there `[S:22]`. The UK **National Cyber Security Centre** devoted a December 2025 blog post
to the term and linked Willison's coining post directly `[S:21]`. The term is in the Wikipedia
article of the same name `[S:10]`.

**The lethal trifecta (named 2025-06-16).** Fifteen months old and already load-bearing inside a
major vendor's published security policy. **Meta's "Agents Rule of Two" (2025-10-31)** states the
rule as "agents must satisfy no more than two of the following three properties within a session,"
and credits both Willison's lethal trifecta and the older Chromium Rule of Two as its inspirations
`[S:14]`. That is uptake by an organisation with no relationship to him, in a document that governs
product decisions. Willison then endorsed Meta's version as "the best practical advice for building
secure LLM-powered agent systems today" `[S:15]`, which is a thinker conceding that someone
improved his frame.

**The strongest single piece of uptake evidence is a failure to credit him.** A Cloud Security
Alliance research note on the AI agent lethal trifecta presents the term as the coinage of the AIRQ
assessment authors and names no external source `[S:24]`. The vocabulary has escaped its author.
That is the same signal the Majors research read off the ThoughtWorks Radar entry for observability
2.0.

**Verdict: uptake passes, decisively.** Two frames, both used by practitioners who are not Willison,
one of them adopted into a named corporate policy within five months of coinage.

---

## 2. Career, verified

His own PSF board-nominee biography is the best primary source for the career spine `[S:1]` `[S:3]`
`[S:4]` `[S:5]`.

- **Django.** He writes: "In 2004 I helped create Django while working at the Lawrence Journal-World
  newspaper in Kansas" `[S:1]`. The Django project's own FAQ dates the start earlier and names the
  pair: "In fall 2003, the World Online developers (Adrian Holovaty and Simon Willison) ditched PHP
  and began using Python," and says World Online open-sourced the result in **summer 2005** `[S:2]`.
  World Online was the Lawrence Journal-World's web division, so the two accounts agree on place and
  differ on the start year. **A page should say "co-created Django with Adrian Holovaty at the
  Lawrence Journal-World, released 2005" and avoid asserting a single start year.**
  Wikipedia additionally lists Jacob Kaplan-Moss and Wilson Miner as co-creators `[S:2b]`; the
  project's own FAQ names only Holovaty and Willison for the 2003 to 2005 period. Keep the page on
  the FAQ's wording.
- **Yahoo, then the Guardian.** Wikipedia has him at Yahoo after 2005 (Technology Development, then
  Fire Eagle) and hired by the Guardian as a software architect in 2008 `[S:2b]`. His own 2019 post
  says "I spent two years working on data journalism projects at the Guardian in London before being
  sucked into the tech startup world" `[S:25]`.
- **Lanyrd.** "In 2010 I co-founded a startup, Lanyrd" `[S:4]`, Y Combinator funded, "We were
  acquired by Eventbrite in 2013" `[S:4]`. His co-founder was **Natalie Downe**, his wife `[S:2b]`.
  His own PSF bio does not name her, so the co-founder credit rests on Wikipedia. **If the page names
  Lanyrd, it names Downe.**
- **Eventbrite.** Engineering director after the acquisition `[S:6]`.
- **Datasette.** "In 2017 I created Datasette, 'an open source multi-tool for exploring and
  publishing data'" `[S:1]`, which is the PSF bio's wording, not the about page's; the about page
  says "creator of Datasette, an open source tool for exploring and publishing data" and gives no
  year `[S:3]`. He left Eventbrite and began a **John S. Knight Journalism Fellowship at Stanford in
  September 2019**, with Datasette at the centre of the proposal `[S:25]`.
- **The `llm` CLI.** First announced in weeknotes on **2023-04-04** `[S:19]`.
- **Python Software Foundation board member since 2022** `[S:5]`, and **elected again in 2025**,
  which the nominee page cannot show because it predates the vote; the PSF's own results
  announcement does `[S:5b]`.
- **No books.** Nothing book-length surfaced on his about page, his PSF biography or Wikipedia. His
  corpus is the blog. `thinker_type: essay-corpus`.

**Education.** The candidate issue does not claim any. Wikipedia lists a BSc in Computer Science from
the University of Bath, 2005 `[S:2b]`, which no primary source I found confirms. **Leave education
off the page** unless a first-person source appears, the same call the Majors research made.

---

## 3. Frames, with dates and attribution

### Prompt injection (2022-09-12)

The post is "Prompt injection attacks against GPT-3." The coining sentence is exact: **"I propose
that the obvious name for this should be prompt injection"** `[S:8]`. The post opens by crediting
**Riley Goodside**, whose demonstrations it documents at length before naming the thing `[S:8]`. The
name is by analogy with SQL injection, which matters later, because that analogy is the part of his
work other people push back on, including the NCSC `[S:26]`.

**Antecedents, and they are real.** Two of them.

1. The phrase itself predates him. Willison published a quote note on **2025-08-04** recording that
   **@himbodhisattva** used "prompt-injection attack" on **2022-05-13**, four months before his own
   post `[S:9]`. He surfaced this himself, which is the honest version of the record.
2. The vulnerability was disclosed earlier still. **Jonathan Cefalu of Preamble** identified it in
   **May 2022**, called it "command injection," and reported it to OpenAI `[S:10]`.

**Attribution consequence:** this frame is **not `original`**. The nearest honest kind is
`popularized`, with Goodside credited for the demonstration and himbodhisattva and Cefalu recorded
as antecedents. This is the same shape as Hickey's PLOP with its Backus antecedent, and the
calibration list already warns against marking a frame `original` without this search. The candidate
issue's flat claim that he "named" it needs this qualification on the page.

### The lethal trifecta (2025-06-16)

Three ingredients, quoted `[S:13]`:

1. "Access to your private data"
2. "Exposure to untrusted content, any mechanism by which text (or images) controlled by a malicious
   attacker could become available to your LLM"
3. "The ability to externally communicate in a way that could be used to steal your data"

And the position that makes it doctrine rather than a checklist: "we still don't know how to 100%
reliably prevent this from happening" `[S:13]`.

**Attribution: `original`.** No antecedent surfaced for the three-way combination framing. The
closest prior art is Meta's own inspiration source, the **Chromium Rule of Two**, and Meta credits
that separately from Willison `[S:14]`, which suggests the two lines are independent. Record the
Chromium rule as context, not as an antecedent to the trifecta.

### You can't solve AI security problems with more AI (2022-09-17)

Five days after coining the term. The argument: "If you patch a hole with even more AI, you have no
way of knowing if your solution is 100% reliable" `[S:11]`. Security needs guarantees, LLMs are
black boxes, and a filter that works 99% of the time is a failure against an adversary who retries.
This is the sentence that maps directly onto Julie's own position that prompt injection is
architecturally unsolvable.

### The Dual LLM pattern (2023-04-25)

A privileged LLM that reads only trusted input and holds the tools, a quarantined LLM that reads
untrusted content and holds nothing, and a non-LLM controller between them. "Unfiltered content
output by the Quarantined LLM is never forwarded on to the Privileged LLM" `[S:12]`. He proposes it
as his own, with no external credit in the post `[S:12]`.

**This is the frame with the most academic uptake.** The 2025 paper "Design Patterns for Securing
LLM Agents against Prompt Injections" (arXiv 2506.08837, fourteen authors across Google, Microsoft,
IBM, ETH Zurich and EPFL) credits the dual LLM pattern to Willison by name `[S:20]`. A frame that
appears as a named pattern in a multi-institution paper is stronger evidence for the inclusion
filter than any amount of blog circulation.

### Prompt injection is not jailbreaking (2024-03-05)

A boundary-policing post: "I keep seeing people use the term 'prompt injection' when they're
actually talking about 'jailbreaking'," and the test, "if there's no concatenation of trusted and
untrusted strings, it's not prompt injection" `[S:16]`. Worth carrying because it shows the coiner
losing control of his own term and saying so.

### Two frames he explicitly does not own

- **Slop** (2024-05-08). He credits **@deepfates** in the post itself for the spam analogy and says
  he is "very on board" `[S:17]`. `popularized` at most, and the credit line is mandatory.
- **Vibe coding** (2025-03-19). His definition, "building software with an LLM without reviewing the
  code it writes," is the one that travels, and he credits **Andrej Karpathy** for coining it on
  **2025-02-06** `[S:18]`. `extended`, with Karpathy as `co_originator`. Note that Willison's post is
  a narrowing of Karpathy's usage, which makes it a genuine extension rather than a restatement.

---

## 4. Thinker or chronicler: the issue's first Council question, answered with numbers

The issue asks whether his blog is "heavily link commentary." It is, and the ratio is measurable.
In 2025 he published **119 entries, 589 links, 237 quotes and 99 notes**, 1,044 items in all `[S:7]`.
Entries are 11.4% of that, so roughly one item in nine is a full entry of his own. (The first draft
of this research recorded 926 items on the same ratio; the 2026-09-17 audit resummed the archive
page month by month and the counts moved, the ratio did not.)

That cuts both ways and the page should say so plainly. The link blog is where he amplifies other
people's research: his prompt-injection series entry for 2025-08-15 is titled "The Summer of Johann:
prompt injections as far as the eye can see" `[S:23]`, which is a post about **Johann Rehberger's**
exfiltration work rather than his own `[S:27b]`. Markdown-image exfiltration is Rehberger's, with
**Roman Samoilenko's** end-of-March-2023 disclosure ahead of him by Rehberger's own account `[S:27]`,
and it must never read as Willison's on this page.

The counterweight is the prompt-injection series itself `[S:23]`: twenty-three posts from 2022-09-12
to 2025-11-02, tracking one problem for more than three years, with the named frames landing inside
it. That is a body of original argument, not a feed. The honest reading is that he runs both, and
the inclusion case rests on the series rather than on the link blog.

This also settles `doctrine_mode`. He names his own things, carefully, and polices the names
afterwards. **`mode-a`: the page should not coin anything he would not recognise.** That in turn
means three review rounds under `scripts/review-policy.ts`.

---

## 5. Critics and counterpositions

**No critic found. The one candidate turned out to be sympathetic.** This section said the opposite
until the adversarial audit of 2026-09-17 opened the post.

Dave Chismon, CTO for Architecture at the NCSC, published "Prompt injection is not SQL injection (it
may be worse)" on **2025-12-08**. Everything the earlier draft said about its argument is accurate:
"under the hood of an LLM, there's no distinction made between 'data' or 'instructions'; there is
only ever 'next token'," classical confused deputies can be mitigated but LLMs are "inherently
confusable," and no parameterised-query equivalent exists `[S:26]`. What the earlier draft got wrong
is who that argument is aimed at. It is not aimed at Willison. The post credits him with the
coinage, cites his site, and borrows a design principle from a discussion he took part in. Its named
target is other defenders: "Many security professionals with web application experience misunderstand
prompt injection, assuming conceptual similarity to SQL injection" `[S:26]`.

And the conclusion is Willison's own. He wrote in 2022 that SQL injection has "a known, guaranteed to
work mitigation" and that LLM defences have no such thing `[S:11]`. Chismon reaches the same place
three years later. Two people agreeing is not a `critiques` edge.

**Consequence for the page: no `critiques` edge.** SCHEMA 6.2 requires a critic "when one exists,"
and after two searches none does. Carry the NCSC post as institutional uptake `[S:21]`, or as a
`parallel` edge on confused-deputy framing, and record the absence of a critic plainly. Do not
promote a friendly post to fill the slot. This is the third time a Council seat's critic has
dissolved on inspection, and the pattern is worth naming: a post that argues hard about a thinker's
subject reads like a critique until you check who it is arguing with.

**Things that are not critics, and why:**

- The **CaMeL** paper and the **Design Patterns** paper both propose defences. Willison covered both
  approvingly `[S:23]` `[S:20]`. `parallel` or `extends`, never `critiques`.
- **Meta's Rule of Two** extends the trifecta by adding "changing state," and Willison endorsed the
  extension `[S:15]`. `extends`.
- The **Lakera definition dispute** lives on X. SCHEMA 4.11 excludes social media posts from durable
  artifacts. Omit.
- Vendor blog posts about the trifecta are circulation, not critique.

**No critic of the lethal trifecta found.** Searches for arguments that it is too simplistic, not a
threat model, or the wrong abstraction returned only adoption and vendor explainers. Record the
absence honestly rather than promoting a mild caveat into a critique.

---

## 6. Corrections to candidate issue #16

1. **"Named 'prompt injection' in September 2022" is incomplete.** The phrase was used by
   @himbodhisattva on 2022-05-13, which Willison himself documented in 2025, and Preamble's Jonathan
   Cefalu disclosed the vulnerability as "command injection" in May 2022 `[S:9]` `[S:10]`. He named
   it independently and made the name stick. The frame is `popularized`, not `original`.
2. **"Co-creator of Django" needs its second name and its dates fixed.** Adrian Holovaty is the
   co-creator, the work ran from fall 2003 at World Online, and the release was summer 2005. His own
   bio says 2004 `[S:1]` `[S:2]`. Do not state one start year as settled.
3. **"Creator of Datasette and the `llm` CLI" is correct**, 2017 and 2023-04-04 respectively
   `[S:1]` `[S:19]`. The 2017 date is on the PSF bio, not the about page.
4. **"Argued 'You can't solve AI security problems with more AI' (2022)" is correct**, and the date
   is 2022-09-17 `[S:11]`.
5. **"The lethal trifecta (June 2025)" is correct**, 2025-06-16, and the three ingredients as the
   issue states them match the post `[S:13]`.
6. **"Willison's lethal trifecta predates Saxe's prompt injection framing by three months" is
   unverified and out of scope.** The Saxe candidate was rejected on 2026-09-16 and no page exists to
   check against. This claim should not appear anywhere on the Willison page.
7. **"Writes almost daily" understates it.** He published 1,044 items in 2025 `[S:7]`.
8. **The issue's own Council question about antecedents was right to ask.** Riley Goodside is a
   demonstrator rather than a namer `[S:8]`, and the Preamble disclosure is real `[S:10]`.

---

## 7. Notes for the drafting stage

- **Lens crowding.** P:1, "prompt injection is architecturally unsolvable," is the obvious fit and it
  is already used by both Majors and Dalio. Calibration says a third P:1 page needs a different
  opener and a different argument. Consider **P:5** (five attack surface expansions: the trifecta is
  a combinatorial claim, which is the same shape) or **P:7** (confused deputy, which the NCSC post
  reaches for independently `[S:21]`). P:7 is Fowler's. Decide this at stage 5, with the grounding
  pack open, and name the move the page will not repeat.
- **Adjacency candidates, on-site:** Majors (both treat telemetry and agent behaviour as things you
  cannot predict in advance), Fowler (confused deputy, bounded context), Hickey (data and code as the
  same substance, which is the root of prompt injection), Woods or Dekker (a hazard you mitigate
  rather than eliminate).
- **Adjacency candidates, off-site:** Riley Goodside, Johann Rehberger, Andrej Karpathy, Adrian
  Holovaty, Florian Tramèr, Dave Chismon. Seven foreground edges is the cap, five for off-site.
- **New candidate issues this run surfaced:** Johann Rehberger (exfiltration research, durable
  artifact corpus at Embrace The Red), Riley Goodside, Andrej Karpathy. Stage 8 decides.

---

## 8. Antecedent searches run at drafting (stage 3, 2026-09-17)

Inclusion Council seat 5 objected that two frames were about to ship as `original` on the strength
of "the post credits nobody" rather than on a search, which is the Hickey and Dijkstra failure
pattern the calibration list already records. Seat 5 named the likely lineage: privilege separation
as Provos, Friedl and Honeyman formalised it in 2003, and Hardy's confused deputy from 1988. Both
searches were run before the page shipped either frame.

**The Dual LLM pattern.** No published source found places it in the privilege-separation lineage.
The nearest work is "Preventing Prompt Injection with Type-Directed Privilege Separation" (arXiv
2509.25926, Jacob, Alghamdi, Hu, Alomair and Wagner, submitted 2025-09-30), which builds privilege
separation for LLM agents, cites the pattern as Willison's by name, and carries no citation to
Provos, Friedl and Honeyman or to any other classical privilege-separation work `[S:28]`. A web
search summary asserted that the paper cites both together; opening the paper showed it does not,
which is the same shape of error the adversarial audit caught earlier in this file and the reason
nothing reaches a page on a search summary alone. **Consequence: the frame stays `original`, no
`derived_from` and no `antecedent` edge, and the page states in the frame gloss that the search
found nothing rather than implying no older idea exists.**

**You can't solve AI security problems with more AI.** No earlier statement of the argument was
found, and a targeted search from the other direction, for a published counterposition out of the
guardrail and classifier research that assumes the opposite, returned adoption and commentary
rather than a rebuttal `[S:29]`. That second search is the one inclusion seat 2 asked for before
the page claims no critic exists, so the claim on the page is now an audited absence.

## 9. Seat assertions researched in review round 1 (2026-09-17)

Three seats asserted facts the page did not carry. Each was treated as a research request, per
SKILL.md stage 6, and checked at the source before any of it reached the page.

**Seat 1, on what the Dual LLM pattern actually forbids. Holds, and the page was wrong.** The post
describes the Controller substituting variable names for untrusted text and passing those names to
the Privileged LLM, which "only ever sees those variable names" and "is never exposed to either the
untrusted content from the email, or the tainted summary that came back from the Quarantined LLM"
`[S:12b]`. The pattern therefore does not forbid acting on untrusted-derived results. It forbids
the privileged model reading them, and the action runs through opaque references. The limit and the
extension closer both said the pattern "forbids" reading an untrusted document and then acting on
it, which the post does not support, and both were rewritten.

**Seat 2, on the trifecta post prescribing that the combination be broken. Holds, with a scope the
seat did not state.** The prescription is addressed to end users who assemble tools themselves:
"Sadly neither of these are any help to end users who are mixing and matching tools together. The
only way to stay safe there is to avoid that lethal trifecta combination entirely" `[S:13b]`. For
application developers the same post points at the design-patterns paper and at CaMeL rather than
at a rule of his own. So the site's move, making the three ingredients a test at every capability
grant inside an organization with a live inventory, stays an extension of the frame rather than a
restatement of his prescription, and the extension was left carrying that argument.

**Seat 2, on in-model defense research as a published counterposition. Does not hold.** The paper
the seat had in mind is real: "The Instruction Hierarchy: Training LLMs to Prioritize Privileged
Instructions" (Wallace, Xiao, Leike, Weng, Heidecke and Beutel, arXiv 2404.13208, submitted
2024-04-19), which trains a model to ignore lower-privileged instructions and reports that this
"drastically increases robustness." It is not a counterposition to "You can't solve AI security
problems with more AI," for three reasons. It claims a robustness improvement and never claims the
guarantee Willison's argument is about. It never names him or his argument, which makes it parallel
work and not a critique, per the calibration rule. And Willison covered it himself as the most
detailed evaluation of the problem OpenAI had published, while Johann Rehberger demonstrated
bypasses of the same mechanism in GPT-4o mini three months later. **Consequence: no ledger line, no
edge, and limit 5 stands as written, since "defensive research he covered approvingly" already
describes this line of work.**
