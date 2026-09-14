import type { MetadataRoute } from "next";

import { siteConfig } from "@/lib/data";
import { getSiteUrl, isSiteIndexable } from "@/lib/site-env";

export default function sitemap(): MetadataRoute.Sitemap {
  if (!isSiteIndexable(siteConfig)) return [];

  return [
    {
      url: getSiteUrl(siteConfig.url).toString(),
      changeFrequency: "monthly",
      priority: 1,
    },
  ];
}
