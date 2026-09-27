#!/usr/bin/env bash
# The export must live entirely under /lims — the one property that decides
# whether the site works at all once it is mounted on zymiq.io.
#
# CloudFront sends /lims* to this site and EVERYTHING ELSE to the client
# portal. A URL in the page that escapes the prefix — "/favicon.svg" instead of
# "/lims/favicon.svg" — does not 404 cleanly: it is answered by the portal,
# which returns its own favicon, its own page, or a redirect to its login.
# Nothing breaks loudly; the page just quietly shows the wrong thing.
#
# Next prefixes what it generates (chunks, fonts, links). It does not prefix a
# URL written by hand, and metadata icons are the classic case. This is the
# check that catches the next one.
set -euo pipefail
cd "$(dirname "$0")/.."
PREFIX=/lims

[ -f out/index.html ] || { echo "no out/index.html — run the build first"; exit 1; }

bad=$(grep -ohE '(href|src)="/[^"]*"' out/index.html \
  | sed -E 's/^(href|src)="//; s/"$//' | sort -u | grep -v "^$PREFIX/" || true)
if [ -n "$bad" ]; then
  echo "URLs in out/index.html that escape $PREFIX (the portal would answer them):"
  echo "$bad" | sed 's/^/  /'
  exit 1
fi

grep -q "<link rel=\"canonical\" href=\"https://zymiq.io$PREFIX/\"" out/index.html \
  || { echo "canonical is not https://zymiq.io$PREFIX/"; exit 1; }

echo "every URL in the export is under $PREFIX, canonical is https://zymiq.io$PREFIX/"
