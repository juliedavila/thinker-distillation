# Ross Anderson: return edges to add

Stage 4 of `add-thinker/SKILL.md`. These are descriptions only. A later serial stage applies them,
because two candidates drafting at once collide on a shared neighbour (Larson and Willison both
planned the same demotion on Majors).

Two pages on this site gain an edge, because two of the six neighbours on `ross-anderson.md` have
pages here: `david-woods` and `simon-willison`. The other four (Bruce Schneier, Hal Varian, David
Safford, Ian Levy and Crispin Robinson) are off-site and take no return edge.

Both labels below were drafted from the neighbour's side, opening with what Anderson adds, then
read against the label for the same pair on `ross-anderson.md` so the two are not the same sentence
twice.

---

## 1. `src/content/thinkers/david-woods.md`

Append at the end of `adjacent_thinkers`, so the positional lines in
`_working/david-woods/page-claims.md` do not shift.

```yaml
  - target_slug: ross-anderson
    display_name: Ross Anderson
    edge_type: parallel
    edge_label: >
      Anderson puts an adversary inside the feedback argument. His 1993 study
      of cash machine fraud measured what a missing accident-investigation loop
      costs when somebody is actively hunting for the gap, and found the losses
      concentrated in implementation and management while the field designed
      against cryptanalysis. He reaches the aviation comparison from banking
      rather than from resilience engineering, and neither line cites the
      other.
    strength: primary
```

- **edge_type**: `parallel`. The 1993 paper credits no source for the aviation comparison, so an
  `antecedent` edge in either direction would invent a debt the record does not carry. All five
  inclusion seats said so independently.
- **strength**: `primary`. An on-site neighbour is auto-surfaced and treated as primary by
  `orderNeighbors` whatever the file says, so writing `secondary` here would be a lie the build
  ignores.
- **ledger**: `parallel` adds no required line to `_working/david-woods/page-claims.md`, per
  `decay.ts`, which requires a line only for `critiques` and `antecedent` edges. Nothing to check on
  that page, and `bun scripts/fact-ledger.ts david-woods` should still be run before and after so a
  pre-existing failure is not mistaken for one this edit caused.
- **cap**: `david-woods` already carries seven foreground neighbours (allspaw, dekker, hollnagel,
  cook, rasmussen, forsgren, majors). Adding this one makes eight, so `orderNeighbors` collapses
  one. Simulated against `collapseRank` in `src/lib/checks.ts`: it collapses **Jens Rasmussen**
  (rank 13, the highest on the page). That is the cheap demotion the calibration log asks for.
  Rasmussen's whole claim is already carried inside a frame's `co_originators` on that page, so he
  keeps the credit and loses a second mention, and he stays reachable in the "more neighbours"
  disclosure. No page text is lost.

## 2. `src/content/thinkers/simon-willison.md`

Append at the end of `adjacent_thinkers`, same reason.

```yaml
  - target_slug: ross-anderson
    display_name: Ross Anderson
    edge_type: parallel
    edge_label: >
      Anderson takes the untrusted-input problem below the model. Trojan
      Source, first authored by his doctoral student Nicholas Boucher with
      Anderson second, shows source text that renders one way to a human
      reviewer and compiles another, carrying CVE-2021-42574 and
      CVE-2021-42694. The remedy landed in Rust 1.56.1, in a -Wbidi-chars
      warning merged for GCC 12 and in LLVM, which is the containment answer
      applied to a compiler instead of to an agent.
    strength: primary
```

- **edge_type**: `parallel`. Two independent bodies of work on inputs that carry more authority
  than their reader notices. Neither argues with the other.
- **strength**: `primary`, for the same auto-surfacing reason as above.
- **ledger**: `parallel`, so no required line is added to `_working/simon-willison/page-claims.md`.
- **cap**: `simon-willison` also sits at seven (majors, hickey, fowler, goodside, karpathy,
  rehberger, chismon). The simulation collapses **Andrej Karpathy**, who ties with Riley Goodside
  at rank 13 and loses the tiebreak on authored position. Karpathy is credited inside a frame on
  that page, so this is again the redundant edge rather than a load-bearing one.

---

## The one thing worth putting to Julie

Both demotions are computed rather than chosen, and both land on the edge whose claim the page
already states inside a frame, which is the outcome the calibration log recommends. So neither is a
decision that needs making, and the note exists so the change is visible rather than silent.

The override, if she wants it: set `render_tier: deep` by hand on a different neighbour instead, and
the auto-collapse leaves Rasmussen or Karpathy in the foreground. Worth a look on Willison, where
Goodside and Karpathy rank identically and the tiebreak is file order rather than judgement.
