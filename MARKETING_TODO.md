# Marketing TODO — voyageLogWeb

> Project: VoyageLog acquisition website. Source: https://github.com/coreyhaines31/marketingskills
> Start: 2026-10-26. All tasks are manual agent-assisted reviews; this PR does **not** schedule automatic jobs or publish changes.

## Setup (once, before first audit)
- [x] Review upstream skills and license; install relevant skills in the repository using `npx skills add coreyhaines31/marketingskills` and select only applicable skills. (Done 2026-10-24: 13 skills vendored into .agents/skills, see .agents/skills/UPSTREAM.md.) Confirm actual installed skill identifiers using the upstream catalog; names below describe capabilities, not guaranteed package IDs.
- [x] Verify agent (Codex/Claude/Copilot) detects the installed SKILL.md files. Commit any vendored skill files only after reviewing upstream content.
- [ ] Establish 28-day baseline: organic clicks, app-store outbound clicks. Record sources, dates and measurement definitions; never invent figures.
- [x] Confirm analytics access, consent/privacy requirements and current business claims. (2026-10-25: Plausible added, cookieless so no consent banner; privacy page updated; GSC property verified.)

## Cadence and prompts
- [ ] **2026-10-26 (initial):** Run SEO/ASO and conversion baseline audit. Prompt: "Read .agents/skills/marketing-workflow/SKILL.md and this file. Inspect this repo, identify verified issues and opportunities for VoyageLog acquisition website, cite exact paths and metrics, rank by impact/confidence/effort; propose changes only."
- [ ] **Every Monday (weekly):** Compare last 7 days vs prior 7 days for organic clicks, app-store outbound clicks. Prompt: "Run a weekly growth review; separate observed data from hypotheses; propose up to three measurable experiments."
- [ ] **First business day of each month:** Keyword/competitor and content opportunity review. Prompt: "Research search intent, competitor positioning and content gaps for travel journal keyword clusters and CTA; output a prioritized backlog with evidence and no invented search volumes."
- [ ] **Before each release or landing-page launch:** Copy, store listing/metadata, onboarding, paywall or CTA QA as applicable. Prompt: "Audit the proposed release funnel and claims; identify accessibility, localization, privacy and conversion risks; propose A/B test variants."
- [ ] **Every 4 weeks:** Experiment retrospective: capture hypothesis, control/variant, start/end dates, sample size, guardrails, outcome and decision (ship/retest/stop).

## Project-specific first experiments
- [x] Review travel journal keyword clusters and CTA.
- [ ] Pick ONE high-intent search/store-listing opportunity and write a change proposal with target audience, target query, baseline and success metric.
- [ ] Pick ONE conversion bottleneck and draft an A/B test; do not deploy until reviewed.

## Done criteria
- [ ] Every finding links to repository paths or measured analytics.
- [ ] Every proposed change has owner, priority, due date, metric and rollback plan.
- [ ] No publishing, ad spend, pricing changes, medical claims or tracking changes without explicit approval.
- [ ] Record findings and next run date here after each session.

## Run log
| Date | Skill / workflow | Baseline and evidence | Decision | Owner | Next review |
|---|---|---|---|---|---|
| 2026-10-24 | Initial audit (seo-audit, schema, site-architecture, ai-seo, content-strategy, programmatic-seo, competitors, free-tools, cro, aso, link-building, directory-submissions) | No analytics yet; evidence from repo, dist build, live site and public store pages. See docs/marketing/audit-2026-10-24.md | Fix week-0 leaks (HTTPS, store developer URL, store subtitle/titles), add store campaign tokens, staged launch of 11 locales | Owner + Claude | 2026-11-02 |
| 2026-10-25 | marketing-workflow + seo-audit (international) + ai-seo (platform factors): search engine setup | GSC domain property verified (DNS TXT), sitemap 143 URLs discovered. Bing verified (BingSiteAuth.xml), sitemap imported (143, success), 100 URLs submitted manually, remaining 43 via IndexNow (HTTP 202). Site Scan 'Launch scan 2026-10-25' queued (200 pages). No traffic data yet | IndexNow runs after every deploy (diff of live vs new sitemap); content-language meta added for Bing | Owner + Claude | 2026-11-08 (first indexing review per language; read Bing Site Scan) |
