# CORE

Company website for CORE and its first product, [CORE World](https://creationofrebornearth.com), created by Vincent Leguide. The repository retains its technical name `core-hq`.

The previous personal-showcase release remains at <https://core-hq-orcin.vercel.app>. This company-oriented update is complete locally but cannot be published to the existing Vercel Hobby plan under its commercial-use restriction; see [Deployment](docs/DEPLOYMENT.md).

## Run locally

Requires Node.js 22 or newer.

```sh
npm ci
npm run dev
```

Open <http://127.0.0.1:3000>. The site uses Next.js App Router, React, TypeScript, static export, local SVG/PNG assets, and no database or analytics.

## Validate

```sh
npm run typecheck
npm run lint
npm test
npm run build
```

`out/` is the deployable static site. For browser checks, serve it with `python3 -m http.server 3000 --directory out --bind 127.0.0.1`, then run `node scripts/smoke.mjs` on a Mac with Google Chrome installed.

## Content and deployment

- [Facts and claims](docs/FACTS_AND_CLAIMS.md)
- [Content editing](docs/CONTENT_EDITING.md)
- [Deployment](docs/DEPLOYMENT.md)
- [QA report](docs/QA_REPORT.md)

No public contact address or corporate registration was verified. The contact and legal pages state those limits openly.
