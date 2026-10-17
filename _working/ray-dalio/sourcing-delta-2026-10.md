# Ray Dalio: sourcing delta, 2026-10-16

Page: `src/content/thinkers/ray-dalio.md`. Ledger: `facts.md` in this folder, lines S:31 to S:35 added in this pass (all `re-verified 2026-10-16`; fetched copies in `_working/ray-dalio/src/`). Rows marked ADDITION add a proposition and are for Julie's review.

| field | before | after | SAME / NARROWED / CORRECTED / ADDITION / Deletion | supporting [S:n] |
|---|---|---|---|---|
| named_frames[0].co_originators | (none) | `benjamin-franklin`, role "thirteen numbered virtues, each with a written precept, kept and revised (*Autobiography*); an earlier case of the genre, and whether Dalio drew on it is unrecorded" | ADDITION (newly credited person; the gloss already named Franklin, so the page's visible claim is unchanged, but the structured credit is new) | [S:31] [S:17] |
| named_frames[1].co_originators | (none) | `chris-anderson-wired`, role "\"Radical Transparency\" for opening a company's product development to customer input (*The Long Tail*, a *Wired* blog, 2006), an earlier dated use of the phrase; whether Dalio drew on it is unrecorded" | ADDITION (newly credited person; review 2026-10-16 replaced "while editor of *Wired*", which no line carried) | [S:32] |
| named_frames[1].one_line_gloss | "making all meetings, evaluations, and decision rationales available to all participants" | "opening much more of an organization's problems, and how people are handling them, to its members than is typical" | NARROWED for degree ("all ... to all participants" lowered to Dalio's own "much more transparency than is typical"; "evaluations" and "decision rationales" dropped) and ADDITION for object (problems and how people handle them, from S:33's "the problems that people are dealing with and how they're dealing with them") | [S:33] |
| named_frames[1].one_line_gloss | (none) | "his example of the practice is taping all of Bridgewater's meetings" | ADDITION (taping is new to the page; the pass first wrote "taped meetings as the signature practice", and review replaced "signature", which ranks the practice beyond S:33's "For example") | [S:33] |
| named_frames[1].one_line_gloss | "with the argument that information asymmetry is the largest contributor to organizational pathology" | "Dalio's case is that it forces problems to the surface and lets the whole organization work on them" | Deletion of the superlative causal claim, which no source carries, plus ADDITION of the argument Dalio's principle text makes (review relabelled this row from NARROWED: the new clause is a different proposition, not a weaker form of the old one) | [S:33] |
| named_frames[1].one_line_gloss | (none) | "He allows a few exceptions, such as private health matters and security issues, and says to keep them very rare." | ADDITION (a new proposition from Dalio's own text, added so the narrowed posture states its limit as he does; review restored "private" and "very rare", which the pass's "some exceptions, such as health matters" had softened) | [S:33] |
| named_frames[1].one_line_gloss | "in a 2001 *Foreign Affairs* argument and in *Wired* in 2006 and 2007" | "The phrase had appeared before his earliest dated use in 2010, in a 2001 *Foreign Affairs* argument, in a 2006 blog post by Chris Anderson and in *Wired* in 2007" (review changed "was in print" to "had appeared", since a blog post is not print) | CORRECTED (the 2006 use is Anderson's *Long Tail* blog post, opened directly, rather than a *Wired* article) | [S:32] [S:19] |
| named_frames[1].one_line_gloss | "the Bridgewater practice, with recorded meetings and open evaluations, is his" | "the Bridgewater practice is his" (taping now named once, earlier in the gloss) | NARROWED ("open evaluations" rested only on S:19's own closing judgment, which no field may cite for a fact; taped meetings are in Dalio's text) | [S:33] [S:13] |
| tagline | "and asked his industry to do the same" | "and offered them for anyone to judge and adopt" | Deletion of the unsupported claim plus ADDITION (review relabelled from NARROWED: offering his principles for others to judge and adopt is not a weaker form of asking his industry to write their own; no source has him asking the industry to do so, and principles.com offers them "for them to judge for themselves" and says "Any person or organization can adopt Principles") | [S:34] [S:12] |
| adjacent_thinkers[3].edge_label | "Taleb's warnings about reasoning from stable historical priors and under-modeling tail risk" | (unchanged) | SAME (now carried by Taleb's own 2008 essay: the turkey "making statements on the risks based on past history," "past Black Swans do not predict future Black Swans") | [S:35] [S:29] |
| named_frames[0].attribution_kind | "extended" | (unchanged) | SAME (option a: an earlier case of the genre found; kind stays) | [S:31] |
| named_frames[1].attribution_kind | "extended" | (unchanged) | SAME (option a: an earlier dated user of the phrase found; kind stays) | [S:32] |

## What each search bounds

- **Principles (S:31).** Tested the genre of numbered, written-down rules a person commits to and revises, against Franklin's own text. It did not test the firm-scale practice the gloss credits to Dalio ("running a whole firm against one long, living, published principles document"), so that credit still stands at the "appears" strength S:17 gives it, and no earlier firm-scale case was searched for in this pass.
- **Radical transparency (S:32).** Tested the phrase applied to an organization's openness. Anderson's 2006 use is confirmed in his own post. Hammond's 2001 *Foreign Affairs* use rests on Wikipedia's citation: the archived article page shows only its summary, so the phrase is not confirmed in Hammond's words, and Hammond is not credited in `co_originators` for that reason. The search did not test the Bridgewater practice of taping meetings, which stays credited to Dalio.

## Carriers checked

Grep across the page, `_working/ray-dalio/` and the other thinker and concept pages for "asymmetr", "pathology", "industry", "do the same", "evaluation", "all meetings", "recorded meetings" and "Wired": no carrier of a lowered claim survives on the page. The grounding pack carried the old radical-transparency gloss and was regenerated. `ledger-findings.md` and the 2026-10-15 `claim-delta-2026-10.md` still quote the old wording as history of earlier passes and were left as records. The Editorial Reading's "the first by exposing rationales" claims no more than S:33 and the new gloss, so `reading` and `extension` are unchanged (logged in `reading-claims.md`).

## For Julie

- Two newly credited people (Franklin, Anderson). After review, the radical-transparency gloss carries four new propositions (what the posture opens, the taping example, Dalio's argument, his exceptions) and the tagline one (he offered the principles for anyone to judge and adopt). All five rest on S:33 or S:34 and need your look.
- The slug `chris-anderson-wired` is ambiguous with TED's Chris Anderson, who is relevant to this same page through Dalio's TED talk. The role text disambiguates, but a future page for either man would collide.
- The 2001 *Foreign Affairs* date stays on the page at Wikipedia's strength; Hammond's own text could not be opened.

## Review, 2026-10-16

Independent review of this pass. Every page change in `git diff origin/main` maps to a row above; each source for S:31 to S:35 was reopened in its fetched copy under `_working/ray-dalio/src/` and every quotation was matched against it.

Fixed on the page:

- `named_frames[1].co_originators[0].role`: "while editor of *Wired*" had no carrier (S:32 and the fetched post never say "editor"). Now "(*The Long Tail*, a *Wired* blog, 2006)", which S:32 now carries from the page heading "The Long Tail - Wired Blogs".
- `named_frames[1].one_line_gloss`: "taped meetings as the signature practice" ranked the practice beyond Dalio's "For example"; now "his example of the practice is taping all of Bridgewater's meetings". "Some exceptions, such as health matters" softened Dalio's "private health matters" and "Keep exceptions to radical transparency very rare"; both restored. "Far more" is now his "much more". "The phrase was in print" is now "had appeared", since one of the three uses is a blog post.

Fixed in the ledger:

- S:31 said "an earlier originator of the genre is found." The search opened only Franklin's text, so it shows an earlier case, not who began the genre; reworded, and the attribution_kind row likewise.
- S:32 now quotes the page heading and Anderson's "into a story or series of stories in Wired", which carry the *Wired* blog wording.
- S:33 said Dalio "names taping as the practice" (the source says "For example") and that the page "says nothing ... about evaluations" (its principle list does mention evaluation tools). Both reworded to what the page says; neither supports "open evaluations", so that deletion stands.

Relabelled: the tagline row and the "Dalio's case" row were NARROWED but each puts a different proposition in place of the deleted one, so both are now Deletion plus ADDITION. The first gloss row is split: NARROWED for degree, ADDITION for what the posture opens and for the taping example.

Checked and left: Franklin quotes and the 1733 editor's note match the Gutenberg text; Anderson's date and quotation match the archived post; the Hammond page shows only a summary, as S:32 says; the Taleb quotes and the 9.14.08 date match the Edge page, which never mentions Dalio, so the edge label stays SAME. The S:31 and S:32 bounds are stated honestly: neither search tested the firm-scale practice or the taping practice, and "the Bridgewater practice is his" still rests on S:13, S:17 and S:33 at the strength those give it. Section 8 of SCHEMA: the corrections state the record and attribute it (the 2006 use is a blog post, Hammond's phrase is unconfirmed in his own words), pass no verdict on anyone, and leave Dalio's possible independence open ("whether Dalio drew on it is unrecorded").

Still for Julie: the `chris-anderson-wired` slug collision with TED's Chris Anderson stands as flagged.

## Julie's direction, 2026-10-17

| field | before | after | class | supporting |
|---|---|---|---|---|
| named_frames[1].co_originators slug | `chris-anderson` | `chris-anderson-wired` | SAME (disambiguates from TED's Chris Anderson) | none needed |
