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

/**
 * Where "Sign in" goes: the LIMS itself, on its own domain.
 *
 * This site is the brochure for Zymiq LIMS; the product runs at zymiq.app.
 * Same tab, deliberately — somebody clicking Sign in is leaving the brochure
 * for the product, not opening a reference beside it.
 */
export const LIMS_SIGN_IN_URL = "https://zymiq.app/login";
