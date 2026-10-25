# Editing content

Most shared information lives in `src/content/`:

- `site.ts`: company/product names, product URL, navigation, founder name, contact destination, page descriptions.
- `product.ts`: CORE World capability statuses.
- `founder.ts`: founder introduction and story.
- `manifesto.ts`: numbered principles.

Page-specific copy is in `src/app/page.tsx` (home) and `src/app/[slug]/page.tsx` (other pages). Global styles are in `src/app/globals.css`. Brand assets are in `public/brand/`.

Before publishing a claim, update `FACTS_AND_CLAIMS.md` with its source and status. To add a public contact address, verify it with the founder, set `site.contactEmail`, and replace the pending-address language on `/contact` and `/privacy`. The real portrait is stored at `public/images/vincent-leguide.jpg`. Review legal copy before public launch.

When the final public URL is known, set `NEXT_PUBLIC_SITE_URL` to its origin (no trailing slash) before building. This sets social image URLs, sitemap, and robots references. Then run the validation commands in the README.
