# MODIFY Pack — disposition draft 2026-05-25 rows you marked MODIFY

> Companion to `disposition-draft-2026-05-25.md`. Five rows you marked MODIFY (2 from Pattern 2 / 3, 3 from the side-findings list). Camila drafts options; **you finalize phrasing per row before any of this goes to source.** Nothing in here has been applied.
>
> Per `feedback_writing_partner_per_field.md`: I am scaffolding voice-shaped choices for your finalization. None of the candidates below should be read as a recommendation by default. Where I have a slight lean I say so explicitly; otherwise the options are presented flat.

---

## Row 1 — Brooks P2 (`what_i_take` opener) + downstream trim + em-dash question

### Why MODIFY (not COMMIT)
Two coupled decisions inside one rewrite: (a) the proposed opener contains em dashes that would re-introduce Pattern 1 violations site-wide just-swept; (b) committing the opener makes the existing third sentence ("Brooks's frame lets me ask the disciplined question:") redundant — you need to call the downstream trim now, not later.

### Current paragraph (post-Pattern 1 sweep, in tree)
> Brooks's no-silver-bullet frame is the most useful argument I carry into every AI-security and tooling conversation. Vendors sell silver bullets constantly. Every quarter brings a new tool that will "transform" security posture, "eliminate" risk classes, "solve" the AI-supply-chain problem. Brooks's frame lets me ask the disciplined question: is this attacking essential complexity or accidental? If accidental, fine: that is where order-of-magnitude wins are real. If essential (the underlying problem of threat modeling, blast-radius reasoning, identity-and-access decisions, adversarial dynamics), no tool will deliver an order of magnitude. Same essay, applied forty years later, still works.

### Proposed opener (from disposition draft, as written)
> Vendors sell silver bullets constantly. Every quarter brings a new tool that will "transform" security posture, "eliminate" risk classes, "solve" the AI-supply-chain problem. The Brooks question — is this attacking essential complexity or accidental? — separates the real from the rhetorical fast.

### Question A — em-dash treatment in the proposed opener

| Option | Punctuation | Reads as |
|---|---|---|
| **A1** | "The Brooks question — is this attacking essential complexity or accidental? — separates..." | Original draft. Em-dashes as parenthetical figure (KEEP-per-figure per audit Finding 1 carve-out). Reintroduces 2 em dashes after sweep. |
| **A2** | "The Brooks question (is this attacking essential complexity or accidental?) separates the real from the rhetorical fast." | Parentheses do the parenthetical work. Consistent with Pattern 1 sweep. |
| **A3** | "The Brooks question, is this attacking essential complexity or accidental, separates the real from the rhetorical fast." | Commas. Lighter rhythm; the rhetorical bracketing weakens vs. parentheses. |
| **A4** | "The Brooks question — is this attacking essential complexity or accidental? — separates the real from the rhetorical fast. (Pattern 1 carve-out logged in audit Finding 1.)" | A1 with explicit audit cross-reference noting the exception. |

### Question B — downstream trim once opener lands

If the new opener replaces the original first sentence, the original third sentence ("Brooks's frame lets me ask the disciplined question: is this attacking essential complexity or accidental?") is fully redundant with the new opener.

| Option | Treatment |
|---|---|
| **B1** | Delete the redundant sentence cleanly. Paragraph becomes: [new opener] → "If accidental, fine: that is..." (the question is asked once, in the new opener; the consequences flow from there). |
| **B2** | Keep the sentence but trim to "Same disciplined question, asked at every wave." (vestigial bridge, weak). |
| **B3** | Keep as-is. Paragraph reads with the question asked twice in slightly different form. Not recommended even with the formula broken; the redundancy is plain. |

### Composite preview — assuming **A2 + B1** (an example, not a prescription)

> Vendors sell silver bullets constantly. Every quarter brings a new tool that will "transform" security posture, "eliminate" risk classes, "solve" the AI-supply-chain problem. The Brooks question (is this attacking essential complexity or accidental?) separates the real from the rhetorical fast. If accidental, fine: that is where order-of-magnitude wins are real. If essential (the underlying problem of threat modeling, blast-radius reasoning, identity-and-access decisions, adversarial dynamics), no tool will deliver an order of magnitude. Same essay, applied forty years later, still works.

**Camila's lean:** A2 + B1. Honors Pattern 1 sweep without losing the parenthetical clarity, and lets the new opener fully replace the redundant sentence so the paragraph tightens by one beat.

**Your call.** Mark A1/A2/A3/A4 and B1/B2/B3; I apply.

---

## Row 2 — Woods P2 (`what_i_take` opener) + sentence-three split

### Why MODIFY (not COMMIT)
The proposed opener folds two existing sentences into one new third sentence that runs long: "Woods's Law of Stretched Systems is what names this, and the lesson it teaches is that the slack security teams cut as inefficiency is the adaptive capacity they will need when the threat model doesn't match the threat." Two beats are doing the work of three. Also "is what names this" reads slightly awkward; "names this" or similar would tighten.

### Current paragraph (post-Pattern 1 sweep, in tree)
> The *Law of Stretched Systems* is the single most underused frame in security architecture. Security work consistently operates at the edge of its envelope: controls tuned for known threats, response capacity sized for normal incident volume, the people who actually understand the system spread thin across too many programs. Every efficiency push makes this worse and the security org reads as "lean" right up until the moment a real surprise arrives. Woods's argument is that the slack is not waste; it is the adaptive capacity the org will need when the threat model doesn't match the threat. Designing security programs around graceful extensibility, not robustness to known attacks, is the move I keep coming back to.

### Proposed opener (from disposition draft, as written)
> Security architecture work consistently operates at the edge of its envelope. Controls are tuned for known threats, response capacity sized for normal incident volume, the people who actually understand the system spread thin across too many programs. Woods's Law of Stretched Systems is what names this, and the lesson it teaches is that the slack security teams cut as inefficiency is the adaptive capacity they will need when the threat model doesn't match the threat.

### Question — third-sentence split treatment

| Option | Treatment |
|---|---|
| **C1** | Keep as drafted (one long third sentence). |
| **C2** | Split into two beats: "Woods's *Law of Stretched Systems* names this. The slack security teams cut as inefficiency is the adaptive capacity they will need when the threat model doesn't match the threat." |
| **C3** | Split + tighten: "Woods's *Law of Stretched Systems* names this. The slack we cut as inefficiency is the adaptive capacity we will need when the threat model breaks." |
| **C4** | Keep the existing fourth sentence ("Woods's argument is that the slack is not waste; it is the adaptive capacity the org will need when the threat model doesn't match the threat.") and DON'T fold it into the new opener at all. New opener becomes: "Security architecture work consistently operates at the edge of its envelope. Controls are tuned for known threats, response capacity sized for normal incident volume, the people who actually understand the system spread thin across too many programs. Woods's *Law of Stretched Systems* names this, and the rest of the paragraph follows." (Then the existing "Woods's argument is..." sentence carries the consequence cleanly.) |

### Composite preview — assuming **C2** (an example, not a prescription)

> Security architecture work consistently operates at the edge of its envelope. Controls are tuned for known threats, response capacity sized for normal incident volume, the people who actually understand the system spread thin across too many programs. Woods's *Law of Stretched Systems* names this. The slack security teams cut as inefficiency is the adaptive capacity they will need when the threat model doesn't match the threat. Every efficiency push makes this worse and the security org reads as "lean" right up until the moment a real surprise arrives. Designing security programs around graceful extensibility, not robustness to known attacks, is the move I keep coming back to.

(Note in this composite: C2 + folding-in means the original fourth sentence "Woods's argument is that the slack is not waste..." is now redundant and would be dropped, since C2 captures its content.)

**Camila's lean:** C4 — preserves your existing fourth-sentence phrasing verbatim, which is the strongest line in the paragraph ("Woods's argument is that the slack is not waste; it is the adaptive capacity..."). Avoids reformulating your voice when the structural break is already achieved by the new opener alone.

**Your call.** Mark C1/C2/C3/C4; I apply.

---

## Row 3 — Dekker L214 "not just" Hard No fix

### Why MODIFY (not COMMIT)
WritingStyle Hard No is non-negotiable; phrasing is yours. The flagged construction was reverted in Pattern 1 sweep (per disposition draft footer) precisely because picking the replacement phrasing is your call.

### Current sentence (Dekker `where_i_extend`, L212-214 in tree)
> The attacker is also exploiting the work-as-imagined / work-as-done gap; the gap is therefore a security defect, **not just** a safety defect.

### Question — replacement phrasing

| Option | Phrasing |
|---|---|
| **D1** | "...the gap is therefore a security defect on top of being a safety defect." |
| **D2** | "...the gap is therefore a security defect, and a safety one." |
| **D3** | "...the gap is therefore both a security defect and a safety defect." |
| **D4** | "...the gap is therefore a security defect (and a safety defect in the same motion)." |
| **D5** | "...the gap is therefore a security defect. It was already a safety defect." (two sentences; sharpest beat; restructures the rhythm) |

**Camila's lean:** D1 or D5 — both preserve the doctrine point (security overlay is additive, the safety failure was already there) without softening either side. D2/D3 land more neutrally; D4 is fine but parenthetical. D5 is the punchiest if you want a hard period there.

**Your call.** Mark D1/D2/D3/D4/D5 or supply your own.

---

## Row 4 — `leverage` Hard No instances (3 rewrites + 1 per-Julie call)

### Why MODIFY (not COMMIT)
Bare-noun `leverage` is on the WritingStyle Hard No list. Compound-adjective `-leverage` is grey-zone. Three are rewrite candidates; one is a per-Julie call on the compound.

### Instance 4a — Komoroske `thirty_second_take` L27 (bare noun, Camila narration)

**Current (L25-27):**
> ...is to garden the conditions where local decisions can happen rather than to centralize control. The slime mold is the working metaphor. Coordination headwind is the named cost. Schelling-point engineering is the leverage.

**Options:**
| Option | Replacement for final sentence |
|---|---|
| **E1a** | "Schelling-point engineering is the lever." |
| **E2a** | "Schelling-point engineering is where the work is." |
| **E3a** | "Schelling-point engineering is where you push." |
| **E4a** | "Schelling-point engineering is the move." |

**Camila's lean:** E1a. Minimal change, preserves the triplet rhythm ("the working metaphor / the named cost / the lever"), and "lever" is a working noun not on the Hard No list.

### Instance 4b — Komoroske `body_of_work` editorial_note L139 (bare noun, Camila narration)

**Current (L137-140):**
> - title: On Schelling Points in Organizations
>     type: essay
>     year: 2019
>     editorial_note: >
>       The hidden-physics piece. Pairs with the headwind essay; gives you the
>       leverage move once you have the diagnosis.

**Options:**
| Option | Replacement for "leverage move" |
|---|---|
| **E1b** | "...gives you the lever move once you have the diagnosis." |
| **E2b** | "...gives you the prescription once you have the diagnosis." |
| **E3b** | "...gives you the move once you have the diagnosis." (drop the adjective entirely) |
| **E4b** | "...gives you the working move once you have the diagnosis." |

**Camila's lean:** E2b or E3b. "The leverage move" is informal jargon; "the prescription" actually names what the essay does (prescription paired with diagnosis = matched pair); "the move" trusts the reader. E1b preserves the bare-noun structure with a different noun, which works but doesn't tighten.

### Instance 4c — `01-the-diagnosis.md:123` (bare noun, Camila narration in long-read)

**Current (L123):**
> The slime mold is the most viral image Komoroske uses, but it is not the only system that makes the point. The starling murmuration makes the same point with different leverage.

**Options:**
| Option | Replacement for "with different leverage" |
|---|---|
| **E1c** | "...makes the same point with different traction." |
| **E2c** | "...makes the same point with different angle." |
| **E3c** | "...makes the same point from a different angle." (slight phrase restructure for fluency) |
| **E4c** | "...makes the same point at different scale." |

**Camila's lean:** E3c. Cleaner English than E2c; "traction" (E1c) lands but reads slightly mechanical; "scale" (E4c) is wrong — both are cell-scale / bird-scale phenomena, the difference is angle of approach not magnitude.

### Instance 4d — Allspaw `what_i_take` L198 (compound adjective, per-Julie)

**Current (L196-198):**
> ...exactly what security IR needs and almost never gets. Importing the resilience-engineering vocabulary into security is one of the **highest-leverage** cultural changes a security org can make.

**Audit-flagged as grey-zone.** Compound-adjective use is more defensible than the bare noun, but you have `leverage` (compound form) on Komoroske's page once already — consistency call.

**Options:**
| Option | Treatment |
|---|---|
| **F1d** | KEEP as-is. Compound adjective `-leverage` is grey-zone, not flagged Hard No outright. |
| **F2d** | "...is one of the highest-return cultural changes a security org can make." |
| **F3d** | "...is one of the most consequential cultural changes a security org can make." |
| **F4d** | "...is one of the cultural changes that pays back hardest in a security org." (restructure) |

**Camila's lean:** F1d. The compound is doing legit work and would be a stretch to call a violation; if you rewrite this you're also signaling a site-wide compound-adjective sweep is on the table, which the audit didn't recommend.

**Your call per instance.** Mark E1a/E2a/E3a/E4a, E1b/E2b/E3b/E4b, E1c/E2c/E3c/E4c, F1d/F2d/F3d/F4d.

---

## Row 5 — Woods L55 `navigate` metaphor

### Why MODIFY (not COMMIT)
AiWritingPatterns flags `navigate` as a weak metaphorical verb. Single instance, single rewrite, phrasing is yours.

### Current sentence (Woods `why_they_matter_as_a_thinker` L50-57)
> If you read Allspaw without reading Woods, you have the practice without the substrate. The *adaptive capacity* concept, the *graceful extensibility* property, the *Law of Stretched Systems*, the *joint cognitive system* framing. These are the architectural claims that the software-ops community has been using **to navigate** the last decade of complex-system failure.

### Options

| Option | Replacement for "to navigate" |
|---|---|
| **G1** | "...has been using **to make sense of** the last decade of complex-system failure." |
| **G2** | "...has been using **to work through** the last decade of complex-system failure." |
| **G3** | "...has been using **to read** the last decade of complex-system failure." |
| **G4** | "...has been using **to understand** the last decade of complex-system failure." |
| **G5** | Restructure: "...are the architectural claims behind how the software-ops community has read the last decade of complex-system failure." |

**Camila's lean:** G3 or G5. "Read" is a working verb in your register (you use it for sense-making in WritingStyle); G5 collapses the gerund into cleaner indicative. G1/G2 work but read as direct swaps; G4 is generic.

**Your call.** Mark G1/G2/G3/G4/G5.

---

## Summary table for your finalization

| Row | Picks needed |
|---|---|
| 1 Brooks P2 | A (em-dash treatment) + B (downstream trim) |
| 2 Woods P2 | C (third-sentence split treatment) |
| 3 Dekker L214 | D (replacement phrasing) |
| 4a Komoroske `thirty_second_take` | E_a |
| 4b Komoroske editorial_note | E_b |
| 4c Long-read L123 | E_c |
| 4d Allspaw compound | F_d |
| 5 Woods `navigate` | G |

Reply with picks; I apply as a second follow-up commit. Skips are fine on any row.

---

*Camila drafts; Julie picks. Writing-partner discipline preserved per `feedback_writing_partner_per_field.md`.*
