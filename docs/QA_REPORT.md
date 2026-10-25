# QA report

Date: October 24, 2026.

## Results

- `npm run build`: passed; all ten routes plus sitemap and robots exported statically.
- `npm run typecheck`: passed.
- `npm run lint`: passed with no warnings after cleanup.
- `npm test`: passed; no unsupported traction or measured-outcome copy in the checked content.
- `node scripts/smoke.mjs`: passed in Chrome against the local production export. Checked all ten routes at 320, 375, 768, 1024, and 1440 pixels; one H1, title and description, local links, image loading, horizontal overflow, browser console/page errors, mobile menu navigation, and CORE CTA destination.
- Desktop and mobile homepage captures: `screenshots/home-1440.png` and `screenshots/home-375.png`, inspected visually.
- External CORE product: live page opened during factual audit; the site CTA points to its verified URL.
- Dependency install audit: zero reported vulnerabilities.

The website has no contact form, so there is no silent submission path. It uses no analytics or third-party embeds.

Open items for the founder: public contact address, founder portrait authorization, legal-page review, and final hosting URL. Safari and Firefox were not tested. No product deployment, DNS, or paid service was changed.
