# Deployment

The existing production URL is <https://core-hq-orcin.vercel.app>. It currently serves the earlier personal, non-commercial showcase. The new CORE company site is complete locally but has **not** been deployed.

The new brief explicitly positions CORE as a company and asks for an investor-ready site. [Vercel's fair-use guidance](https://vercel.com/docs/limits/fair-use-guidelines#commercial-usage) restricts Hobby to personal, non-commercial use. [Vercel staff specifically classified a static business showcase without direct sales as commercial](https://community.vercel.com/t/fair-use-of-the-hobby-plan/2725). The authenticated `vincentleg` account has only a Hobby team. No plan upgrade or purchase was authorized, so deploying this revision to that project would conflict with the plan terms.

`vercel.json` disables automatic Git deployments so pushing this revision cannot silently replace the earlier personal site. The existing project, production alias, and `NEXT_PUBLIC_SITE_URL` configuration remain unchanged.

## Publish when hosting permits

From this repository, after validation:

```sh
npm ci
npm run typecheck
npm run lint
npm test
# On a plan or host that permits company use, re-enable Git deployment if desired,
# then deploy the static Next.js project.
```

The `out/` directory is the deployable static build. The `vercel.json` file contains old-route redirects and security headers; `public/_headers` is for compatible static hosts. If the future public origin changes, set `NEXT_PUBLIC_SITE_URL` before building so metadata and the sitemap use it. No CORE World product deployment or DNS record should be changed.
