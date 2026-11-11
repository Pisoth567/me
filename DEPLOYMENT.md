# Production deployment and SEO

No deployment, Git push, or DNS changes have been performed. Obtain owner approval before publishing.

## Required configuration

- `SITE_URL`: the confirmed public HTTPS origin, without a path, query, fragment, or port. Choose the actual custom domain or stable Vercel production domain. Set in Vercel **Production** before the production build. Do not use a preview deployment URL or a placeholder. The app deliberately fails Vercel production builds without this value.
- `GOOGLE_SITE_VERIFICATION`: optional Search Console HTML verification token (token only, not the full meta element). DNS verification does not require this variable.
- `VERCEL_ENV`: supplied by Vercel; do not override it. Previews are noindex even if SITE_URL is available.

Local builds without SITE_URL work for validation but are noindex, have no canonical/JSON-LD website identifiers, and return an empty sitemap. They must not be promoted as production artifacts. Any non-Vercel production hosting must also configure SITE_URL before building. Changing environment variables requires rebuilding/redeploying.

No API keys or application secrets are needed by this portfolio. It does not call the AI project's backend. `.env*`, `.vercel`, and private key files are ignored. Do not add environment values to source control. No tracked environment or key files were found in the working-tree review; this is not a complete Git-history audit.

## Vercel steps (after approval)

1. Confirm the production hostname and preferred apex/www variant with the owner.
2. Review all existing uncommitted work. Commit/push only after separate approval; the workspace includes prior portfolio edits and local font/image assets that the deployment needs.
3. Import the authorized Git repository into Vercel. Set Root Directory to the directory containing this project's package.json; Framework Preset: **Next.js**. Keep the default `.next` output and package-lock-based install. Use Node.js 24.x (validated locally).
4. Build Command: `npm run build`. The project explicitly builds with webpack to avoid the observed Turbopack worker-port failure. The matching @tailwindcss/postcss build plugin is configured so webpack and development both compile Tailwind; no custom vercel.json is needed.
5. Set SITE_URL in Production and optionally GOOGLE_SITE_VERIFICATION. Set SITE_URL in Preview only if you want preview canonical links to reference production; previews remain noindex.
6. Configure the chosen domain in Vercel. Follow the exact DNS values Vercel provides after owner approval; redirect alternate domains to the chosen canonical hostname. Do not guess DNS records.
7. Trigger a production deployment only after owner approval. Confirm HTTPS, no deployment authentication on the public production site, and the correct primary domain.
8. Check `/`, `/about`, `/projects`, both project detail routes, `/robots.txt`, `/sitemap.xml`, `/images/seo/net-pisoth-og.png`, `/icon.png`, and `/apple-icon.png` anonymously.
9. Inspect production HTML: correct canonical host, `index, follow`, unique page titles/descriptions, absolute OG image URL, and homepage JSON-LD. Verify preview HTML remains noindex. Test desktop/mobile navigation and social previews.

## Search Console

1. Add the confirmed domain as a Domain property and verify ownership with Google's DNS TXT record. Alternatively add the exact HTTPS URL-prefix property and use GOOGLE_SITE_VERIFICATION, then rebuild.
2. Submit `sitemap.xml` in the Sitemaps report. It lists the homepage, About, Projects, and the two verified project detail pages. It excludes not-found pages, anchors, assets, and nonexistent locale URLs. No artificial last-modified dates are emitted.
3. Use URL Inspection → Test live URL for the homepage and each project. Confirm crawlability, canonical selection, rendered content, and request indexing.
4. Validate the JSON-LD with Schema.org Validator; use Google's Rich Results Test where a supported feature applies. Person/WebSite markup is not a promise of a rich result.
5. Monitor Page indexing, Core Web Vitals, and Performance queries including Net Pisoth and PisothDCode. Indexing and ranking are not guaranteed; discovery can take time.

Official references:
- https://vercel.com/docs/environment-variables
- https://vercel.com/docs/deployments
- https://developers.google.com/search/docs/crawling-indexing/sitemaps/build-sitemap
- https://support.google.com/webmasters/answer/9012289
- https://developers.google.com/search/docs/crawling-indexing/ask-google-to-recrawl

## Design and content notes

- English server-rendered content is the default. The existing client locale architecture is preserved; there are no separate Khmer URLs, so no hreflang routes are invented.
- Homepage About is now H2 while the dedicated About page retains H1; CSS classes and visible copy are unchanged.
- The same Koh Santepheap font weights are loaded from the existing local TTF files, eliminating build-time Google Fonts requests. Redaction remains locally packaged.
- Sharing image: 1200 × 630 PNG in the existing dark-green/lime identity; NP favicon and app icons replace the starter favicon.
- Canonical, OG/Twitter, sitemap, and structured-data origins all come from SITE_URL.
- Existing known external issue: ICHECK's supplied live URL returned HTTP 402 during the project review. Its repository/detail links work; public demo availability needs its owner to resolve. Social profiles are reused from the existing Social Dock, not independently verified as accessible to every crawler.
- The carousel's existing ESLint no-img-element warning is retained because its sliced image animation intentionally uses native image elements. Local SVG assets are small; rewriting the animation is outside this task.

## Validation findings

The normal webpack build passes and compiled CSS contains utilities with no leftover Tailwind directives. With Cache Components enabled, Next.js can stream an unknown project as HTTP 200 with noindex and the not-found content; such slugs are absent from the sitemap. This existing framework behavior is retained rather than disabling caching or changing the routing architecture.

`npm audit --omit=dev` reports 6 advisories (4 moderate, 2 low), all through the existing shadcn tooling tree, with no high/critical entries. The full install audit reports 12 (10 moderate, 2 low). Do not run a forced major-version downgrade automatically; review these tooling dependencies separately. This audit is a point-in-time check, not a security guarantee.
