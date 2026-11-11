import type { Metadata } from "next";

function productionOrigin(): string | undefined {
  const configured = process.env.SITE_URL?.trim();
  if (!configured) {
    if (process.env.VERCEL_ENV === "production") {
      throw new Error("SITE_URL must be set to the confirmed HTTPS production origin before deploying.");
    }
    return undefined;
  }
  const url = new URL(configured);
  const placeholder = /(^|\.)(localhost|example\.(com|org|net))$|\.(test|invalid|localhost|local)$/i.test(url.hostname);
  if (url.protocol !== "https:" || url.username || url.password || url.port || url.search || url.hash || url.pathname !== "/" || placeholder || !url.hostname.includes(".")) {
    throw new Error("SITE_URL must be a real HTTPS origin with no path, credentials, query, or fragment.");
  }
  return url.origin;
}

export const siteUrl = productionOrigin();
export const indexable = Boolean(siteUrl) && process.env.NODE_ENV === "production" && (!process.env.VERCEL_ENV || process.env.VERCEL_ENV === "production");
export const homeTitle = "Net Pisoth | Full-Stack Web Developer Portfolio";
export const homeDescription = "Explore the portfolio of Net Pisoth, a full-stack developer and Computer Science student based in Phnom Penh, Cambodia. Discover projects built with Next.js, Spring Boot, PostgreSQL, and more.";

export function pageMetadata(title: string, description: string, path: string): Metadata {
  const canonical = siteUrl ? new URL(path, siteUrl).href : undefined;
  const images = siteUrl ? [{ url: `${siteUrl}/images/seo/net-pisoth-og.png`, width: 1200, height: 630, alt: "Net Pisoth — Full-Stack Web Developer" }] : [];
  return {
    title,
    description,
    ...(canonical ? { alternates: { canonical } } : {}),
    openGraph: { type: "website", siteName: "Net Pisoth · PisothDCode", title, description, locale: "en_US", ...(canonical ? { url: canonical } : {}), images },
    twitter: { card: "summary_large_image", title, description, images: images.map(({ url }) => url) },
    robots: { index: indexable, follow: true },
  };
}

export function identityGraph() {
  if (!siteUrl) return null;
  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Person", "@id": `${siteUrl}/#person`, name: "Net Pisoth", alternateName: "PisothDCode",
        url: `${siteUrl}/`, description: "Full-Stack Web Developer and Computer Science student.",
        address: { "@type": "PostalAddress", addressLocality: "Phnom Penh", addressCountry: "KH" },
        sameAs: ["https://github.com/Pisoth567", "https://www.linkedin.com/in/net-pisoth-a03255436/", "https://t.me/net_pisoth"],
      },
      {
        "@type": "WebSite", "@id": `${siteUrl}/#website`, name: "Net Pisoth Portfolio", alternateName: "PisothDCode",
        url: `${siteUrl}/`, publisher: { "@id": `${siteUrl}/#person` }, inLanguage: "en",
      },
      {
        "@type": "ProfilePage", "@id": `${siteUrl}/#profile`, url: `${siteUrl}/`, name: homeTitle,
        mainEntity: { "@id": `${siteUrl}/#person` }, isPartOf: { "@id": `${siteUrl}/#website` },
      },
    ],
  };
}
