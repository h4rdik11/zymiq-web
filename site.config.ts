/**
 * Where this site is served from, in one place.
 *
 * Read by `next.config.ts` (the build) and by the app (the handful of URLs
 * Next does not prefix for us — metadata icons, canonicals).
 */

/** The path the site is mounted under on zymiq.io. See `next.config.ts`. */
export const BASE_PATH = "/lims";

/** The public origin. Canonicals and OpenGraph URLs resolve against it. */
export const SITE_ORIGIN = "https://zymiq.io";
