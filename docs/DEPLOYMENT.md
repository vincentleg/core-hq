# Deployment

Production: <https://core-hq-orcin.vercel.app> on the existing Vercel Hobby account. The repository is linked to Vercel project `vincentleg/core-hq`. `NEXT_PUBLIC_SITE_URL` is configured for Production with the public origin. The build remains a static Next.js export; no database, paid API, purchase, or plan upgrade is used.

The founder clarified on October 24, 2026 that this is a personal, non-commercial portfolio and showcase project. The public copy reflects that purpose. [Vercel's fair-use guidance](https://vercel.com/docs/limits/fair-use-guidelines#commercial-usage) restricts Hobby to personal, non-commercial use; [Vercel staff guidance](https://community.vercel.com/t/question-on-fair-use-and-hobby-plan-suitability-for-demo-commercial-websites-in-portfolio/1769) allows unpaid portfolio demos. Reassess hosting before turning the project into a business website, soliciting customers, adding payments or ads, or monetizing it.

## Redeploy

From this repository, after validation:

```sh
npm ci
npm run typecheck
npm run lint
npm test
vercel deploy --prod --yes
```

The `vercel.json` file applies security headers on Vercel. `public/_headers` remains for compatible static hosts. If the production alias changes, update the Production `NEXT_PUBLIC_SITE_URL` variable, README, and this file, then redeploy so Open Graph and sitemap URLs point to the final origin.
