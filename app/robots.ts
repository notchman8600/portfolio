import type { MetadataRoute } from "next";
import { siteUrl } from "@/data/seo";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      // API responses are not landing pages. Keep page assets crawlable.
      disallow: "/api/",
    },
    sitemap: siteUrl("/sitemap.xml"),
  };
}
