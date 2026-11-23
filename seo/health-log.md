# SEO health log

## 2026-11-23 (MEN-1114)
- Crawl `bin/seo-crawl https://getvoyagelog.app`: 343 URLs. FATAL 0 · REVENUE 2 · FLUFF 120 (TITLE 108, DESCRIPTION 12). First entry, no prior baseline.
- REVENUE THIN: `/support/` (58 words), `/impressum/` (46 words): legal/contact pages, left as is.
- FLUFF DESCRIPTION 12: false positives. Crawler cuts the meta at an apostrophe (all `tr` blog pages, `it/mercatini-di-natale-europa`); live meta verified full via curl. `zh/blog` (35 chars, CJK) and `impressum` (45) are fine. Crawler bug to fix in agent-ops/bin/seo-crawl.
- FLUFF TITLE 108: 71-77 chars incl. ` | VoyageLog` suffix. Same as MARKETING_TODO experiment E1; needs GSC CTR data first, not changed.
- GSC: `sites` list returns `{}` for agent-ops-ga SA: property not shared with the service account. Page-2 / low-CTR work skipped (tracked MEN-190).
- Fixed this run: nothing (no FATAL/REVENUE defect).
- Left (top): 1) grant GSC access to agent-ops-ga@qrodesk.iam.gserviceaccount.com; 2) E1 title shortening once GSC exists; 3) seo-crawl apostrophe description bug; 4) thin support/impressum (low value).
