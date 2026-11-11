import type { Metadata } from "next";
import localFont from "next/font/local";
import { homeDescription, homeTitle, pageMetadata, siteUrl } from "@/src/lib/seo";

// English Font
import "@fontsource/redaction-10/400.css";
import "@fontsource/redaction-10/700.css";
import "@fontsource/redaction-10/400-italic.css";

import "./globals.css";

// Khmer Font
const kohSantepheap = localFont({
  src: [
    { path: "../../public/fonts/koh-santepheap-400.ttf", weight: "400", style: "normal" },
    { path: "../../public/fonts/koh-santepheap-700.ttf", weight: "700", style: "normal" },
  ],
  display: "swap",
  variable: "--font-koh-santepheap",
});

export const metadata: Metadata = {
  ...pageMetadata(homeTitle, homeDescription, "/"),
  ...(siteUrl ? { metadataBase: new URL(siteUrl) } : {}),
  applicationName: "Net Pisoth Portfolio",
  authors: [{ name: "Net Pisoth", ...(siteUrl ? { url: siteUrl } : {}) }],
  creator: "Net Pisoth",
  ...(process.env.GOOGLE_SITE_VERIFICATION ? { verification: { google: process.env.GOOGLE_SITE_VERIFICATION } } : {}),
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${kohSantepheap.variable} dark`} suppressHydrationWarning>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `try { document.documentElement.classList.toggle('dark', localStorage.getItem('theme') !== 'light'); } catch {}`,
          }}
        />
      </head>
      <body className="site-background antialiased">{children}</body>
    </html>
  );
}
