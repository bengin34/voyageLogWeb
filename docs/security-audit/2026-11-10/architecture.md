# voyageLogWeb architecture

Static marketing site for the VoyageLog travel-journal app. No backend, auth, forms, database, cookies or analytics scripts.

- Build: `vite build` (React 19 SPA shell, `src/App.jsx`, `src/content.js`, `src/locales/*`) then `scripts/postbuild.mjs` pre-renders per-locale HTML, sitemap, hreflang; `scripts/blog.mjs` renders `content/blog/<lang>/*.md` with `marked` (gfm) at build time.
- Deploy: `.github/workflows/deploy.yml` on push to master -> `npm ci`, `npm run build`, upload `dist` to GitHub Pages (custom domain getvoyagelog.app via `public/CNAME`). Job permissions: contents read, pages write, id-token write. Actions pinned by major tag.
- IndexNow post-deploy: `scripts/indexnow.mjs` fetches the live sitemap and POSTs changed URLs with a public key (`public/<key>.txt`, public by design).
- Client code: `src/lang.js` root-URL locale redirect (localStorage + navigator.languages -> fixed locale path), `public/404.html` static 404 page. External links use rel=noreferrer. Only dynamic outbound link: `mailto:` and store URLs from constants.
- Trust boundaries: (1) browser visitor vs static assets (no server-side input); (2) repo authors/contributors vs build output (markdown content, workflow, deps); (3) npm registry vs build; (4) GitHub Actions token vs Pages deploy. Hosting headers/CSP are GitHub Pages defaults, not in source.
- Out of scope for hunting: `.agents/`, `.claude/` (agent skill docs), `content/` (author-trusted input), `appscreens/` (images/tooling); secret scan still covers them.
