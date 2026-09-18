# Simon Willison: return edges

Stage 4 of `add-thinker`. The Willison page links to three thinkers who have pages on this site:
Charity Majors, Rich Hickey and Martin Fowler. Each needs an edge back, or the build prints
`[distillery] warning: page links to a thinker whose page does not link back`.

These are descriptions only. **Do not edit the three target pages from this run.** A later serial
stage applies them, because two candidates drafting at the same time would collide on a shared
neighbour. The four remaining neighbours (Riley Goodside, Andrej Karpathy, Johann Rehberger, Dave
Chismon) have no pages here, so they need nothing.

Each entry below gives the file, the position in `adjacent_thinkers`, and the exact YAML to add.

---

## 1. `src/content/thinkers/charity-majors.md`

Append to `adjacent_thinkers`. Majors currently carries seven foreground neighbours (Fournier,
Allspaw, Forsgren, Sridharan, Kálmán, Eilers, and Woods at `render_tier: deep`), so the count is at
the cap of seven in total. Willison has a page here, which means the build auto-surfaces the edge
into the foreground and it cannot be demoted to `deep`. **Check `src/lib/checks.ts` before
applying**: if adding Willison pushes the foreground past seven, move the Kálmán edge to
`render_tier: deep` in the same change, since it is the only foreground off-site neighbour that is
purely a term-of-origin credit.

```yaml
  - target_slug: simon-willison
    display_name: Simon Willison
    edge_type: parallel
    edge_label: >
      Her page already reaches agent incidents; his work says why they are hard
      to anticipate. Majors asks whether a system can answer a question formed
      after the trouble starts. Willison's frames describe trouble that arrives
      as ordinary text through the channel the application reads on purpose, so
      the question an investigation needs to ask is which input the model acted
      on and with whose privileges.
    strength: primary
```

Edge type rationale: `parallel`. Neither argues against the other and neither builds on the other.
Majors has never written about prompt injection and Willison has never written about telemetry
architecture, so `extends` would overstate the relationship.

---

## 2. `src/content/thinkers/rich-hickey.md`

Append to `adjacent_thinkers`. This is the strongest of the three edges and it is the one the
research did not name; it came out of the inclusion Council.

```yaml
  - target_slug: simon-willison
    display_name: Simon Willison
    edge_type: parallel
    edge_label: >
      Guardrail programming in a different material. Hickey argues that tests
      and type checkers are safety nets and the ability to reason about a
      program still has to come from the design. Willison argues that a filter
      built from another model is a safety net for the same reason, because it
      works most of the time and cannot be shown to work against an attacker who
      retries, so the security property has to come from the architecture.
    strength: primary
```

Edge type rationale: `parallel`. Hickey wrote nothing about AI security and Willison does not cite
him, so this is the site's reading of two arguments with the same shape.

---

## 3. `src/content/thinkers/martin-fowler.md`

Append to `adjacent_thinkers`. Fowler's page has the larger neighbour list, so check the caps in
`src/lib/checks.ts` before applying and demote an off-site foreground edge to `deep` if the total
would exceed seven.

```yaml
  - target_slug: simon-willison
    display_name: Simon Willison
    edge_type: parallel
    edge_label: >
      Bounded context draws a line where the language changes, and authority
      often changes at the same line. Willison's subject is a system with no such
      line available: a model reads its developer's instructions and outside text
      through one channel and cannot separate them afterwards, which leaves
      nothing inside the model to place a boundary against.
    strength: primary
```

Edge type rationale: `parallel`, and deliberately not `extends`. Fowler's page already carries the
confused deputy problem in its extension, which is the site's own move rather than Fowler's, and
Willison never uses the term. An `extends` edge would imply a lineage neither man claims.

---

## Not return edges, recorded so a later run does not add them

- **Meta, OWASP, the Cloud Security Alliance and the fourteen authors of "Design Patterns for
  Securing LLM Agents against Prompt Injections"** are institutions and papers, not thinkers with
  pages. Their uptake belongs in `inclusion_rationale`, `why_they_matter_as_a_thinker` and
  `further_in`, where it already is.
- **Dave Chismon** carries an `extends` edge from the Willison page and has no page here. If he
  ever gets one, the return edge is `extends` in the same direction, never `critiques`. The NCSC
  post credits Willison, cites his site, and reaches his own 2022 conclusion.
- **Will Larson** is being drafted in the same batch as this page. No edge exists in either
  direction and none should be invented to create one.
