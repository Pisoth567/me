import type { Metadata } from "next";
import { Koh_Santepheap } from "next/font/google";

// English Font
import "@fontsource/redaction-10/400.css";
import "@fontsource/redaction-10/700.css";
import "@fontsource/redaction-10/400-italic.css";

import "./globals.css";

// Khmer Font
const kohSantepheap = Koh_Santepheap({
  weight: ["400", "700"],
  subsets: ["khmer"],
  display: "swap",
  variable: "--font-koh-santepheap",
});

export const metadata: Metadata = {
  title: "My Portfolio",
  description: "Personal developer portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={kohSantepheap.variable}>
      <body className="site-background antialiased">{children}</body>
    </html>
  );
}
