import type { MetadataRoute } from "next";

import { siteConfig } from "@/lib/data";
import { getSiteUrl, isSiteIndexable } from "@/lib/site-env";

export default function robots(): MetadataRoute.Robots {
  if (!isSiteIndexable(siteConfig)) {
    return { rules: { userAgent: "*", disallow: "/" } };
  }

  return {
    rules: { userAgent: "*", allow: "/" },
    sitemap: new URL("sitemap.xml", getSiteUrl(siteConfig.url)).toString(),
  };
}
