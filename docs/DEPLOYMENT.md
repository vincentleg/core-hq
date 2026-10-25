# Deployment

The site builds to static files in `out/` and needs no server, database, or paid API. No deployment or DNS change was made during implementation.

## Recommended free option

[Netlify's Free plan](https://www.netlify.com/pricing/) advertises $0 hosting for sites and a fixed monthly credit limit. [Netlify's own Free-plan announcement](https://www.netlify.com/blog/introducing-netlify-free-plan/) explicitly includes founders finding their first customers, which supports company-site use. Its [self-serve agreement](https://www.netlify.com/legal/self-serve-subscription-agreement/) permits the free tier subject to provider limits and possible suspension. Recheck current terms before launch; keep any auto-recharge or paid add-ons disabled.

1. Verify the founder-approved contact address and legal-page details.
2. Create a free Netlify project connected to `vincentleg/core-hq`, or use manual upload of `out/`.
3. Set `NEXT_PUBLIC_SITE_URL=https://YOUR-SITE.netlify.app` in build settings.
4. Build command: `npm run build`. Publish directory: `out`.
5. Confirm `sitemap.xml`, `robots.txt`, social preview, and the product link on the final URL.

Cloudflare Pages is another static-host candidate, but no existing account credentials were available here. GitHub Pages has [restrictions on using it to run an online business](https://docs.github.com/en/pages/getting-started-with-github-pages/github-pages-limits), so it was not selected for this company site.

The `public/_headers` file supplies baseline security headers on hosts that support Netlify-style `_headers` files. Review the deployed response headers after launch.
