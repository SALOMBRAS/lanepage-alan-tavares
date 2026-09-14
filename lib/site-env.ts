import type { SiteConfig } from "@/types";

/** Canonical origin; the environment can replace the reserved mock domain. */
export function getSiteUrl(fallbackUrl: string): URL {
  const value = process.env.NEXT_PUBLIC_SITE_URL?.trim() || fallbackUrl;
  let url: URL;

  try {
    url = new URL(value);
  } catch {
    throw new Error("NEXT_PUBLIC_SITE_URL deve conter uma URL absoluta válida.");
  }

  if (!["http:", "https:"].includes(url.protocol) || url.username || url.password) {
    throw new Error("NEXT_PUBLIC_SITE_URL deve usar HTTP(S), sem credenciais.");
  }

  return new URL("/", url);
}

/** Index only reviewed content, explicitly enabled on a real public origin. */
export function isSiteIndexable(site: SiteConfig): boolean {
  const url = getSiteUrl(site.url);
  const hostname = url.hostname.toLowerCase().replace(/\.$/, "");
  const isReservedHost =
    /(^|\.)(example\.(com|net|org)|example|test|invalid|localhost)$/.test(hostname) ||
    /^(127\.|0\.0\.0\.0$)/.test(hostname) ||
    hostname === "[::1]";

  return (
    process.env.NEXT_PUBLIC_SITE_INDEXABLE === "true" &&
    !site.isDemo &&
    !isReservedHost &&
    url.protocol === "https:"
  );
}
