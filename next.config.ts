import type { NextConfig } from "next";

import { BASE_PATH } from "./site.config";

/**
 * Where the marketing site lives: zymiq.io/lims.
 *
 * It shares a hostname with the client portal (the directory owns the root),
 * so it is mounted under a path rather than a subdomain. CloudFront routes
 * `/lims*` to this site's own bucket; everything else goes to the portal.
 *
 * Exported as static files because nothing here needs a server — one page,
 * in-page anchors, inline SVG. Static means no function to run, no cold
 * start, and nothing to patch.
 *
 * `basePath` is what makes the mount work: every chunk, font and link Next
 * generates is prefixed with it. Anything written as a raw root-relative URL
 * is NOT — see the favicon in `layout.tsx` — so a new asset referenced by
 * hand must use `BASE_PATH` from `site.config.ts` too, or it will 404 by
 * resolving against the portal instead.
 *
 * `trailingSlash` makes the export write `index.html` files, which is what
 * the CloudFront Function in front of the bucket rewrites directory URLs to.
 */
const nextConfig: NextConfig = {
  reactStrictMode: true,
  output: "export",
  basePath: BASE_PATH,
  trailingSlash: true,
  images: { unoptimized: true },
};

export default nextConfig;
