# Parked and rejected candidates

Why this file exists. A park decision used to live only in a comment on a GitLab issue, which is
prose describing a convention rather than a record anything can query. The date sat inside
human-written text, so nothing could compute which parks were due, and a decision recorded that way
rots exactly the way the hand-kept Lens list did inside a single run. Saxe was rejected with
"recheck September 2027" and nothing in the system would ever have surfaced that date.

One line per parked slug, read by `scripts/staleness.ts`:

    - <slug> | <why it was parked> | recheck <YYYY-MM-DD> | attempts <n>

`attempts` is the give-up rule. A candidate parked three times is not a timing problem, and the
fourth recheck should not be scheduled automatically; bring it to Julie or close it for good.

Re-proposing a parked candidate means addressing what was said last time, not simply asking again.
The inclusion Council that rejected it is in the transcript, and a fresh case that ignores those
findings is the same case.

- joshua-saxe | Inclusion Council rejected 5 to 0 on 2026-09-16. A timing rejection rather than a quality one: every named frame was under two years old with no use outside his own Substack, and the marquee frames trailed Willison, Florencio and Herley, and Papert, none of whom he cites. The vocabulary case may mature. | recheck 2027-09-16 | attempts 1
