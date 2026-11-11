# Security audit — voyageLogWeb (2026-11-10 baseline)

**Coverage: partial.** Profile `quick`, source-first, read-only, no target code executed, no live probing. `run_status: incomplete` (reason `quick_profile_final_critic`): three units proposed by the final critic are `deferred`. No prior run exists. Source ref `54a4ada`. This pass does not prove the rest is clean.

## Counts
| Severity | Count |
|---|---|
| critical | 0 |
| high | 0 |
| medium | 0 |
| low | 0 |
| informational | 0 |
| needs_validation | 2 |
| rejected | 5 |

No confirmed findings, so nothing was fixed in code.

## Summary
Static Vite/React site with a build-time blog generator, deployed to GitHub Pages. There is no backend, auth, form, cookie, analytics or third-party script. Secret scan of the tree and all 25 commits: no credentials. Dependencies: lockfile uses the official registry with integrity hashes; 8 `npm audit` advisories (7 high) are all build/dev tooling, none in code shipped to the browser. Deploy workflow runs only on push to master and manual dispatch.

## Needs validation (see NEEDS-VALIDATION.md)
1. `voyagelog.build.gray-matter-js-engine-enabled` — gray-matter's executable js front-matter engine is not disabled at 4 call sites; exploitation needs a merged contributor change.
2. `voyagelog.hosting.pages-headers-and-settings` — live headers, HTTPS enforcement and branch protection are not visible in source.

## Rejected (hardening only, see FINDINGS-DETAIL.md)
Raw HTML passthrough in `marked`, JSON-LD script terminator, vite dev-server advisories, tag-pinned actions with workflow-level permissions, locale redirect (not an open redirect).

## Informational
The IndexNow key (`scripts/indexnow.mjs:8`, `public/` key file) is public by design, not a finding. No CSP is possible via headers on GitHub Pages.

## Coverage gaps
Deferred: front matter parsing in `scripts/og.mjs` and `scripts/check-blog.mjs`, dev CLIs (`scripts/screens.mjs`, `scripts/check-locales.mjs`, `.claude/skills/blog-editor-core/guard.mjs`), handwritten legal pages in `public/`. Out of scope: `.agents/`, `.claude/`, `appscreens/`, `content/` (secret scan still covered them). No separate verifier agents ran; records were checked by the parent against source.
