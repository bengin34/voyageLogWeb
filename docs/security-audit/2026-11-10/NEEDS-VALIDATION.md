# Needs validation

## voyagelog.build.gray-matter-js-engine-enabled
- Hypothesis: front matter starting with a js language tag runs code at build (gray-matter default engines). Call sites: `scripts/blog.mjs:95`, `scripts/og.mjs:104`, `scripts/check-blog.mjs:35`, `vite.config.js:17`.
- Boundary: contributor PR content vs the CI build runner (deploy workflow runs on master with Pages deploy rights).
- Blockers: depends on review and branch-protection policy outside source; no local execution run.
- Plan (local): isolated sandbox, no network, scratch copy; parse a fixture with js front matter that writes a marker in scratch.
- Plan (owner): confirm master requires reviewed PRs. Fix: `matter(raw, { engines: { js() { throw … }, javascript() { throw … } } })` or reject non-yaml front matter.

## voyagelog.hosting.pages-headers-and-settings
- Hypothesis: platform-level controls (HTTPS enforcement, response headers, branch protection) are missing or weak.
- Blockers: settings and live headers are outside source; no injection sink is shown, so a missing CSP has no demonstrated impact.
- Plan (owner): check Settings > Pages (Enforce HTTPS) and branch protection; record production response headers.
