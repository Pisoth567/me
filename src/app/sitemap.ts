import type { MetadataRoute } from "next";
import { projects } from "@/src/data/content";
import { indexable, siteUrl } from "@/src/lib/seo";

export default function sitemap(): MetadataRoute.Sitemap {
  if (!indexable || !siteUrl) return [];
  return ["/", "/about", "/projects", ...projects.map(({ slug }) => `/projects/${slug}`)].map((path) => ({
    url: new URL(path, siteUrl).href,
  }));
}
