import type { Metadata } from "next";
import type { Attorney, FAQPage, Graph, LocalBusiness, Thing, WithContext } from "schema-dts";

import { getSiteUrl, isSiteIndexable } from "@/lib/site-env";
import type { FAQItem, SiteConfig } from "@/types";

/** Preserve JSON values while preventing an HTML parser from closing the script. */
export function serializeJsonLd<T extends Thing>(data: WithContext<T> | Graph): string {
  return JSON.stringify(data).replace(/</g, "\\u003c");
}

export function buildMetadata(site: SiteConfig): Metadata {
  const metadataBase = getSiteUrl(site.url);
  const indexable = isSiteIndexable(site);
  const image = {
    url: site.ogImage.src,
    width: site.ogImage.width,
    height: site.ogImage.height,
    alt: site.ogImage.alt,
  };

  return {
    metadataBase,
    title: { default: site.name, template: `%s | ${site.name}` },
    description: site.description,
    applicationName: site.name,
    category: "Serviços jurídicos",
    alternates: { canonical: "/" },
    openGraph: {
      type: "website",
      locale: site.locale,
      url: metadataBase,
      siteName: site.name,
      title: site.name,
      description: site.description,
      images: [image],
    },
    twitter: {
      card: "summary_large_image",
      title: site.name,
      description: site.description,
      images: [image],
    },
    robots: {
      index: indexable,
      follow: indexable,
      googleBot: { index: indexable, follow: indexable },
    },
    formatDetection: { telephone: false, email: false, address: false },
  };
}

/** Emit only after these business details also exist in the visible page. */
export function getAttorneySchema(site: SiteConfig): Graph {
  const url = getSiteUrl(site.url).toString();
  const businessId = `${url}#escritorio`;
  const attorneyId = `${url}#advocacia`;
  const address = {
    "@type": "PostalAddress" as const,
    ...site.contact.address,
  };
  const localBusiness: LocalBusiness = {
    "@type": "LocalBusiness",
    "@id": businessId,
    name: site.name,
    description: site.description,
    url,
    telephone: site.contact.phone,
    email: site.contact.email,
    address,
    sameAs: site.socialLinks.map((link) => link.href),
  };
  const attorney: Attorney = {
    "@type": "Attorney",
    "@id": attorneyId,
    name: site.attorney.name,
    description: site.attorney.specialty,
    identifier: site.attorney.oab,
    url,
    telephone: site.contact.phone,
    email: site.contact.email,
    address,
    parentOrganization: { "@id": businessId },
  };

  return {
    "@context": "https://schema.org",
    "@graph": [localBusiness, attorney],
  };
}

/**
 * Ready for the future accordion, but intentionally not emitted by its empty shell.
 * Render this only beside the same questions and answers visible to the visitor.
 * Valid FAQ markup does not guarantee that a search engine displays rich results.
 */
export function getFaqSchema(items: readonly FAQItem[]): WithContext<FAQPage> {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: { "@type": "Answer", text: item.answer },
    })),
  };
}
