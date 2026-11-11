import type { MetadataRoute } from "next";
import { indexable, siteUrl } from "@/src/lib/seo";

export default function robots(): MetadataRoute.Robots {
  return {
    // Allow resources to load, including on previews, so crawlers can see noindex.
    rules: { userAgent: "*", allow: "/" },
    ...(indexable && siteUrl ? { sitemap: `${siteUrl}/sitemap.xml`, host: siteUrl } : {}),
  };
}
