# Reading claims: Simon Willison

One line per sentence of `reading` and `extension`, each with the grounding-pack IDs it rests on.

## reading

- A single channel carries the developer's trusted instruction and untrusted text, and the model acts on the combination; that join is the problem Willison works. [T:thesis] [F:prompt-injection]
- He proposed the name in September 2022, in a post documenting Riley Goodside's demonstration, four months after @himbodhisattva used the phrase and Preamble disclosed it as command injection. [F:prompt-injection] [E:out:riley-goodside]
- Five days later he ruled out defenses built from another model, which cannot be shown to hold against an attacker who retries. [F:no-ai-fix-for-ai-security] [T:working-line]
- His answers are structural: a privileged model holding the tools, kept apart from a quarantined model that reads untrusted content, with ordinary software between them. [F:dual-llm-pattern]
- The lethal trifecta names a configuration: three capabilities each ordinary alone and dangerous together. [F:lethal-trifecta]
- He polices the term afterwards, ruling that without a concatenation of trusted and untrusted strings it is not prompt injection. [F:prompt-injection-is-not-jailbreaking]
- Most of the blog is links and quotes carrying other people's work; the authored spine is the twenty-three-post series behind these frames. [L:1]

## extension

- The trifecta is a combinatorial claim about the attack surface a security organization inherits: capabilities acceptable alone and unacceptable together. [P:5] [F:lethal-trifecta]
- That makes it a test to run whenever an agent is granted a tool. [F:lethal-trifecta]
- He concedes the scope himself: the frame covers exfiltration, and Meta's rule adds changing state and a session boundary. [L:2]
- Within that session a grant-time decision holds only while the tool's sources stay fixed, and later checks belong to the architecture, since no reviewer reads that fast. [P:5] [F:lethal-trifecta]
- Grant-time and architectural checks both rest on a live inventory of what each agent can reach, with a named owner. [P:5]
- His argument about defenses built from more AI prices a classifier as a rate reduction with no guarantee, so the weight falls on scoping. [F:no-ai-fix-for-ai-security]
- The cost lands on the product: his containment pattern puts a controller between the untrusted read and the privileged action, workflows must be rebuilt around it, and nothing in the sources shows it running in production. [L:3]
