import type { Metadata } from "next";
import { Inter, Inter_Tight, JetBrains_Mono } from "next/font/google";
import "./globals.css";

import { BASE_PATH, SITE_ORIGIN } from "../site.config";

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
  variable: "--font-inter",
  display: "swap",
});

const interTight = Inter_Tight({
  subsets: ["latin"],
  weight: ["500", "600", "700"],
  variable: "--font-inter-tight",
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-mono",
  display: "swap",
});

export const metadata: Metadata = {
  title: "ISO 17025 LIMS Software for Accredited Labs | Zymiq",
  description:
    "Zymiq is cloud LIMS for ISO 17025 and NABL-accredited labs. TRF management, calibration tracking, clause compliance, and a client portal — one platform.",
  // Resolves the canonical below, and any relative OpenGraph URL, against
  // the real domain rather than whatever host served the build.
  metadataBase: new URL(SITE_ORIGIN),
  alternates: { canonical: `${BASE_PATH}/` },
  icons: {
    // Prefixed by hand: Next applies `basePath` to its own chunks and links,
    // not to a metadata URL. Left as "/favicon.svg" this would ask the portal
    // for its favicon and get the directory's instead.
    icon: { url: `${BASE_PATH}/favicon.svg`, type: "image/svg+xml" },
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en-IN"
      className={`${inter.variable} ${interTight.variable} ${jetbrainsMono.variable}`}
    >
      <body>{children}</body>
    </html>
  );
}
