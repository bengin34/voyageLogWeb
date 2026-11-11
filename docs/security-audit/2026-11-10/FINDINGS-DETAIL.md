# Findings detail

No confirmed findings. Full records: `findings.json`.

## Rejected records
- `voyagelog.build.marked-raw-html-passthrough` — `scripts/blog.mjs:57,100`. Raw HTML passes through; only repo authors write `content/blog`; grep found no script, iframe or `javascript:` strings. Hardening: escape raw HTML, allow only http(s), mailto and relative links.
- `voyagelog.build.jsonld-script-breakout` — `scripts/blog.mjs:347`, `scripts/postbuild.mjs:146`. `JSON.stringify` without escaping `<`; inputs repo-authored. Hardening: replace `<` with `<`.
- `voyagelog.deps.vite-devserver-advisories` — `package.json:7`. Dev script binds `0.0.0.0`; CI runs build only. Hardening: default bind, `npm audit fix`, move build tools to devDependencies.
- `voyagelog.ci.actions-tag-pinning` — `.github/workflows/deploy.yml:8,19`. First-party actions by tag; `pages: write` and `id-token: write` are workflow-level. Hardening: SHA-pin, scope permissions to the deploy job, add Dependabot.
- `voyagelog.client.lang-redirect-open-redirect` — `src/lang.js:22-26`. Target is a fixed relative locale path plus same-origin search and hash; origin cannot change.
