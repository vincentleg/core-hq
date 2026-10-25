# QA report

Date: October 24, 2026.

Production URL: <https://core-hq-orcin.vercel.app>. Vercel's production build completed successfully and the public homepage, robots file, sitemap, social preview image URL, and CORE product link were checked after `NEXT_PUBLIC_SITE_URL` was set.

## Results

- `npm run build`: passed; all ten routes plus sitemap and robots exported statically.
- `npm run typecheck`: passed.
- `npm run lint`: passed with no warnings after cleanup.
- `npm test`: passed; no unsupported traction or measured-outcome copy in the checked content.
- `node scripts/smoke.mjs`: passed in Chrome against the local production export. Checked all ten routes at 320, 375, 768, 1024, and 1440 pixels; one H1, title and description, local links, image loading, horizontal overflow, browser console/page errors, mobile menu navigation, and CORE CTA destination.
- Production Chrome smoke test: passed the same ten-route, five-width suite at `https://core-hq-orcin.vercel.app` after the final deployment.
- Public HTTP checks: homepage and the external CORE product returned 200; production robots and sitemap use the public origin; the Open Graph image points to the public origin; Vercel serves the configured security headers.
- Desktop and mobile homepage captures: `screenshots/home-1440.png` and `screenshots/home-375.png`, inspected visually.
- External CORE product: live page opened during factual audit; the site CTA points to its verified URL.
- Dependency install audit: zero reported vulnerabilities.

The website has no contact form, so there is no silent submission path. It uses no analytics or third-party embeds.

Open items for the founder: public contact address, founder portrait authorization, and legal-page review. Safari and Firefox were not tested. No CORE product deployment, DNS, or paid service was changed.
