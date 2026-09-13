import type { MetadataRoute } from "next";
import { seoPages, siteUrl } from "@/data/seo";

export default function sitemap(): MetadataRoute.Sitemap {
  // Only canonical, indexable pages. Dates reflect content edits, not builds.
  return Object.entries(seoPages).map(([path, page]) => ({
    url: siteUrl(path),
    lastModified: page.lastModified,
  }));
}
