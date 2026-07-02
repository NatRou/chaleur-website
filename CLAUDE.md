# chaleur website — build instructions for Claude Code

The brand name **chaleur** is always lower-case, including at the start of a sentence.

## What this repo is
The public informational/credibility website for the chaleur mobile app (in development). Its
audience is clinical partners and grant funders, not end users. Its job is to make a reviewer
regard chaleur as a legitimate, serious project, and to withstand scrutiny: no claim on the site
should be one a clinician or funder could fault. Copy defensibility is the whole point of the site.

## Source of truth: the Claude Design bundle
This site is built from a Claude Design handoff bundle, not from scratch. The bundle is the design
and the copy. **Build faithfully from it: implement, do not re-decide.**
- Do **not** redesign the layout, visual hierarchy, type, or colour. Reproduce the bundle.
- Do **not** rewrite, paraphrase, "tighten", or "improve" any copy. The wording in the bundle is
  final and has been clinically vetted; every hedge is deliberate. Reproduce it verbatim,
  including citations. If a sentence looks like an over-claim, that is a question for Natasha, not
  an edit to make.
- After import, if anything is ambiguous, work in plan mode and ask before changing it.

## Stack (minimal by design)
Static HTML/CSS/JS, no framework, no build step, deployable as-is on GitHub Pages. A `.nojekyll`
file is present so Pages serves the files unprocessed. Keep dependencies at zero unless there is a
concrete need; if you must add one, use its current stable version and tell Natasha which and why.

## Brand / design system
chaleur brand v1.2. All colours, type, spacing, and radii come from the bundle's tokens/CSS — do
not introduce new colours or hardcode values outside that system. No emoji, no exclamation marks
in product/site copy, no gradients, no purple, no surveillance or medical iconography. The
wordmark is always lower-case.

## Accessibility — WCAG 2.2 Level AA, built in from the first screen
This is a hard requirement, not an audit at the end. Semantic HTML structure, a logical heading
order, sufficient colour contrast against the amber palette, full keyboard navigation, visible
focus states, and meaningful alt text on every image. Important information must never live only
inside an image. The animated logo must honour `prefers-reduced-motion` and fall back to a static
mark; pause/stop/hide for motion is mandatory.

## Privacy (the site itself must practise what the app preaches)
- **Self-host all fonts.** Do not load Google Fonts or any third-party font CDN — it leaks every
  visitor's IP to a third party, which is indefensible for a privacy-positioned site.
- **Analytics: GoatCounter only, required on every page** (decision, July 2026). Natasha wants
  per-page view counts to see which pages interest visitors — nothing more. GoatCounter was chosen
  because it is cookieless, stores no personal data, needs no consent banner, and counts every view
  unsampled. It is the one permitted third-party request. Every page — including any new page, and
  any page rebuilt from the Claude Design bundle (which predates this decision and does not contain
  the snippet) — must carry exactly this tag immediately before `</body>`:
  ```html
  <script data-goatcounter="https://chaleur.goatcounter.com/count"
          async src="//gc.zgo.at/count.js"></script>
  ```
  Do not remove it, do not add any other analytics, trackers, cookies, or third-party embeds that
  phone home, and do not extend GoatCounter usage beyond simple page counting (no events, no
  session tracking, no campaign parameters).
- Contact is a single obfuscated `partnerships@chaleur.app` mailto: assemble it in JS at runtime so
  it is not harvestable as plain text in the page source. No form, no backend, no email capture.
- Keep the existing LinkedIn company and founder links in the footer. The footer disclaimer carries
  site-wide on every page.

## Honesty about product stage
The app is in development. Describe features at prototype/design stage honestly; never state or
imply delivered/shipping capability, clinical efficacy, regulatory approval, medical-device status,
or partnerships that do not exist. The encrypted coordination relay is simulated in the prototype —
copy describes the experience at prototype stage, never as a delivered cross-device capability.

## Prototype screenshots
The "Prototype" page (reached via the "Prototype" nav item) shows synthetic, dummy-data screenshots
of the app. The six cleared image files are placed at the repo root by Natasha — reference them
there; do not fetch, regenerate, or alter them. Only synthetic data, no real or realistic care
recipient, nothing unreleased or confidential — this repo is permanently public. Each screenshot
needs meaningful alt text and a caption. Serve optimised images (WebP, kept light) and lazy-load any
below the fold — page weight on this page must stay small.

## Pages (v1)
Home, Evidence, Origins, Privacy, Partners, Prototype in action, plus one further page per the
bundle. Nav order follows the bundle.

## Workflow
Plan before building: in plan mode, explore and write the plan, wait for Natasha's approval, then
implement one page at a time. After edits, run the build/preview, check it renders and the
accessibility basics hold, then show the diff and a summary. **Commit locally only — never push,
force-push, reset --hard, or rm -rf. Natasha pushes.** Never commit secrets.

## Repo separation (critical)
This public repo lives nested inside a private folder. Only ever operate inside this
`chaleur-website` folder. Never read from, copy from, or reference the parent or sibling folders
(the app code, planning docs, threat model, unreleased work). Nothing from outside this folder may
end up in this repo or its git history.
