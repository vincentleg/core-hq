# Editing content

Most shared information lives in `src/content/`:

- `site.ts`: company/product names, product URL, navigation, founder name, contact destination, page descriptions.
- `company.ts`: principles and CORE World/Business/Cities status.
- `product.ts`: product steps and capability statuses.
- `founder.ts`: founder introduction and story.
- `manifesto.ts`: numbered principles.

Page-specific copy is in `src/app/page.tsx` (home) and `src/app/[slug]/page.tsx` (other pages). Global styles are in `src/app/globals.css`. Brand assets are in `public/brand/`.

Before publishing a claim, update `FACTS_AND_CLAIMS.md` with its source and status. To add a public contact address, verify it with the founder, set `site.contactEmail`, and replace the pending-address language on `/contact` and `/privacy`. To add a founder portrait, use an image the founder has authorized and replace the typographic treatment; add descriptive alt text. Review legal copy before public launch.

When the final public URL is known, set `NEXT_PUBLIC_SITE_URL` to its origin (no trailing slash) before building. This sets social image URLs, sitemap, and robots references. Then run the validation commands in the README.
