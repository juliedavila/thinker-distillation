# Disposition Draft — Patterns 2 & 3 Candidate Rewrites

> Per Julie's triage on `audit-prose-2026-05-25.md`: draft 4 alternate openers per pattern, Julie picks which (if any) to commit. Nothing here is applied to source content until you say so.
>
> **Pattern 2:** `what_i_take` opener — break the "single most useful X I carry into security" stem.
> **Pattern 3:** `where_i_extend` opener — break the "I push it into Z" formula.
>
> **Target pages:** Komoroske, Brooks, Allspaw, Woods (4 of 7). Fowler, Dalio, Dekker keep current form this round.
>
> Each candidate uses a different structural break so the formula isn't replaced by a new formula. Side-by-side: current sentence on top, proposed sentence below. The rest of each `what_i_take` / `where_i_extend` paragraph stays unchanged unless the new opener requires light continuity edits (called out where relevant).

---

## Pattern 2 — `what_i_take` opener rewrites

### Komoroske — break: lead with the observation, frame as discovery (no first-person meta-claim)

**Current:**
> The coordination-headwind frame is the single most useful thing I carry into security organization design. Most security programs fail not because the threat model is wrong but because the coordination cost of acting on the threat model exceeds the available organizational energy.

**Proposed:**
> Most security programs fail not because the threat model is wrong but because the coordination cost of acting on the threat model exceeds the available organizational energy. That is the headwind frame, applied; once you see it in security work, you cannot unsee it.

*Rest of paragraph unchanged. Net: drops the "single most useful X I carry" stem; promotes the observation Julie is actually making to the lead.*

---

### Brooks — break: direct frame application as a question, no first-person ownership

**Current:**
> Brooks's no-silver-bullet frame is the most useful argument I carry into every AI-security and tooling conversation. Vendors sell silver bullets constantly. Every quarter brings a new tool that will "transform" security posture, "eliminate" risk classes, "solve" the AI-supply-chain problem.

**Proposed:**
> Vendors sell silver bullets constantly. Every quarter brings a new tool that will "transform" security posture, "eliminate" risk classes, "solve" the AI-supply-chain problem. The Brooks question — is this attacking essential complexity or accidental? — separates the real from the rhetorical fast.

*Rest of paragraph unchanged (the "Brooks's frame lets me ask the disciplined question" sentence becomes slightly redundant with the new opener; could trim to "Same essay, applied forty years later, still works." standalone). The em-dash in "The Brooks question — is this..." is intentional here per the audit's "KEEP for figure" rationale; can be replaced with commas if you prefer absolute consistency with the Pattern 1 sweep.*

---

### Allspaw — break: lead with the failure mode, name Allspaw as the diagnosis

**Current:**
> The blameless-postmortem move is the single most useful organizational technology I carry into security incident response. Security incidents fail the learning test for exactly the reasons Allspaw described: blame culture, the gap between work-as-imagined and work-as-done, the habit of reducing the analysis to a root cause that pins the failure on the most-junior person whose hands were on the keyboard.

**Proposed:**
> Security incident response fails the learning test for exactly the reasons Allspaw described: blame culture, the gap between work-as-imagined and work-as-done, the habit of reducing the analysis to a root cause that pins the failure on the most-junior person whose hands were on the keyboard.

*The first sentence (the stem) is deleted entirely; the second sentence (which already does the load-bearing work) becomes the opener. The "Allspaw move" sentence two paragraphs later carries the prescription. Net: tightens the paragraph by one sentence; the load-bearing claim leads.*

---

### Woods — break: lead with concrete observation, name Woods at the turn

**Current:**
> The *Law of Stretched Systems* is the single most underused frame in security architecture. Security work consistently operates at the edge of its envelope: controls tuned for known threats, response capacity sized for normal incident volume, the people who actually understand the system spread thin across too many programs.

**Proposed:**
> Security architecture work consistently operates at the edge of its envelope. Controls are tuned for known threats, response capacity sized for normal incident volume, the people who actually understand the system spread thin across too many programs. Woods's Law of Stretched Systems is what names this, and the lesson it teaches is that the slack security teams cut as inefficiency is the adaptive capacity they will need when the threat model doesn't match the threat.

*The current paragraph's later sentence (about Woods's argument re: slack) is folded into the new opener, tightening by one sentence. The "single most underused frame" stem is gone.*

---

## Pattern 3 — `where_i_extend` opener rewrites

### Komoroske — break: name the security translation directly, no verb-push

**Current:**
> Komoroske writes about coordination as a general organizational physics. I push it into security specifically: every security control is a coordination event with an attached headwind cost, and the right design move is to reduce the number of agreements a control depends on.

**Proposed:**
> Komoroske writes about coordination as a general organizational physics. The security translation is that every security control is itself a coordination event with an attached headwind cost, and the right design move is to reduce the number of agreements a control depends on.

*Verb-push replaced with "The security translation is." Otherwise identical.*

---

### Brooks — break: start with the extension itself, in the new domain

**Current:**
> Brooks wrote about communication cost inside a single project team. I push it into the multi-org, multi-vendor, agent-mediated security surface that is now standard. The "coordination cost grows superlinearly" claim becomes: *the security cost of integrating systems grows superlinearly with the number of trust boundaries the integration crosses.*

**Proposed:**
> Brooks wrote about communication cost inside a single project team. In the multi-org, multi-vendor, agent-mediated security surface that is now standard, the "coordination cost grows superlinearly" claim becomes: *the security cost of integrating systems grows superlinearly with the number of trust boundaries the integration crosses.*

*Two sentences collapse into one. No verb-push; the extension is the sentence itself.*

---

### Allspaw — break: name the adversarial overlay directly, frame Allspaw as not having modeled it

**Current:**
> Allspaw built the model for software ops. I push it into the adversarial layer where security operates. Security incidents have an extra factor (an adversary actively optimizing against the detection-and-response loop) that ops incidents don't.

**Proposed:**
> Allspaw built the model for software ops. Security adds an adversarial layer Allspaw did not model: an opponent actively optimizing against the detection-and-response loop, alongside everything else the ops model already accounts for.

*Drops the verb-push entirely. The substance (adversarial overlay) becomes the structural break. One sentence drops out (folded in); the paragraph tightens.*

---

### Woods — break: "The security extension is that..." structural turn

**Current:**
> Woods built the theory for joint cognitive systems where humans and automation share the cognitive work. I push it into systems where some of the joint cognitive work is *adversarial*, where the "automation" includes attacker tooling that is also adapting.

**Proposed:**
> Woods built the theory for joint cognitive systems where humans and automation share the cognitive work. The security extension is that some of the joint cognitive work is *adversarial*: the "automation" includes attacker tooling that is also adapting.

*Verb-push replaced with "The security extension is that." Otherwise identical.*

---

## Disposition surface for Julie

For each row, pick: **COMMIT** (apply this proposed rewrite to source) / **MODIFY** (use as draft, you'll edit before commit) / **SKIP** (keep current form).

| Page | Pattern 2 (`what_i_take` opener) | Pattern 3 (`where_i_extend` opener) |
|---|---|---|
| Komoroske | ☐ COMMIT  ☐ MODIFY  ☐ SKIP | ☐ COMMIT  ☐ MODIFY  ☐ SKIP |
| Brooks | ☐ COMMIT  ☐ MODIFY  ☐ SKIP | ☐ COMMIT  ☐ MODIFY  ☐ SKIP |
| Allspaw | ☐ COMMIT  ☐ MODIFY  ☐ SKIP | ☐ COMMIT  ☐ MODIFY  ☐ SKIP |
| Woods | ☐ COMMIT  ☐ MODIFY  ☐ SKIP | ☐ COMMIT  ☐ MODIFY  ☐ SKIP |

Once you've decided per row, I apply the COMMIT rows to source, log MODIFY for your later edit, and skip the SKIPs. All eight rows can be different decisions; no requirement to be consistent across patterns or pages.

---

## Note on the Pattern 1 sweep status

Pattern 1 (em-dash sweep) is applied to the working tree. 237 instances → 0 across all 10 files. Build passes (`bun build` succeeded; 13 pages rendered). Diff available via `git diff src/content/` — review before commit.

**Side findings surfaced during the sweep, NOT auto-applied** (per writing-partner discipline; surfacing for your call only):

- **Dekker L214** — single "not just" Hard No violation flagged in §1 Finding 4. Not in your approved triage; reverted my initial fix. Suggested rewrite available if you want it (`"a security defect on top of being a safety defect"` is the cleanest of the candidates).
- **`leverage` instances** flagged in §1 Finding 2 (3 rewrite-recommended, 1 per-Julie). Not approved yet; awaiting your call as separate disposition row.
- **`navigate` metaphor** on Woods L55 flagged in §1 Finding 2. Not approved yet.
- **`really` x2** on Allspaw flagged in §1 Finding 3. Not approved yet.

All four bullets are mechanical fixes if approved — would add ~5 minutes of additional sweep time after your call.
