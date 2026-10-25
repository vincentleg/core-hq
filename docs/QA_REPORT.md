# QA report

Date: October 24, 2026.

This report covers the refined CORE company site in the local production export. The existing public URL, <https://core-hq-orcin.vercel.app>, still serves the earlier personal showcase because the authenticated Vercel Hobby plan does not permit this new company-facing revision. See [deployment notes](DEPLOYMENT.md).

## Results

- `npm run typecheck`, `npm run lint`, `npm test`, and `npm run build`: passed.
- `node scripts/smoke.mjs`: passed in Chrome against the local static export. Checked the four main routes and three utility routes at 320, 375, 768, 1024, and 1440 pixels. Verified one H1, title and description, local links, loaded images, no horizontal overflow, no browser console or page errors, mobile menu navigation, and the external CORE World CTA destination.
- Founder portrait: the optimized local photo loaded on the homepage and founder page. Desktop and mobile screenshots were inspected for cropping and layout.
- Captures: `screenshots/home-1440.png`, `screenshots/home-375.png`, `screenshots/founder-1440.png`, and `screenshots/founder-375.png`.
- Old-route redirect mappings and the Git deployment guard were checked in `npm test`; Vercel redirects could not be exercised on the local static server.
- The external product URL remains <https://creationofrebornearth.com>. The screenshot and capability claims were checked against the public product and local read-only product documentation.

No contact form or analytics are present. The public contact address and legal-page review remain pending. Safari, Firefox, and the revised site on Vercel production were not tested. No CORE World product repository or deployment was changed.
