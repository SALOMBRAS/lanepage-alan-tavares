import assert from "node:assert/strict";
import test from "node:test";

import robots from "@/app/robots";
import sitemap from "@/app/sitemap";
import { siteConfig } from "@/lib/data";
import { buildMetadata, getAttorneySchema, getFaqSchema, serializeJsonLd } from "@/lib/seo";
import { getSiteUrl, isSiteIndexable } from "@/lib/site-env";

function withSiteEnv(
  values: { url?: string; indexable?: string },
  assertion: () => void,
) {
  const previousUrl = process.env.NEXT_PUBLIC_SITE_URL;
  const previousIndexable = process.env.NEXT_PUBLIC_SITE_INDEXABLE;

  if (values.url === undefined) delete process.env.NEXT_PUBLIC_SITE_URL;
  else process.env.NEXT_PUBLIC_SITE_URL = values.url;
  if (values.indexable === undefined) delete process.env.NEXT_PUBLIC_SITE_INDEXABLE;
  else process.env.NEXT_PUBLIC_SITE_INDEXABLE = values.indexable;

  try {
    assertion();
  } finally {
    if (previousUrl === undefined) delete process.env.NEXT_PUBLIC_SITE_URL;
    else process.env.NEXT_PUBLIC_SITE_URL = previousUrl;
    if (previousIndexable === undefined) delete process.env.NEXT_PUBLIC_SITE_INDEXABLE;
    else process.env.NEXT_PUBLIC_SITE_INDEXABLE = previousIndexable;
  }
}

test("FAQ JSON-LD cannot close its script and preserves the original answers", () => {
  const faq = getFaqSchema([
    {
      id: "script-injection",
      question: "Como tratar texto com < e >?",
      answer: '</script><script>alert("exemplo")</script>',
    },
  ]);
  const serialized = serializeJsonLd(faq);

  assert.equal(serialized.includes("<"), false);
  assert.equal(/<\/script/i.test(serialized), false);
  assert.ok(serialized.includes("\\u003c/script>"));
  assert.deepEqual(JSON.parse(serialized), faq);
});

test("Attorney is linked to the LocalBusiness using the canonical origin", () => {
  withSiteEnv({ url: "https://escritorio-teste.com.br" }, () => {
    const schema = getAttorneySchema(siteConfig);
    const office = schema["@graph"].find(
      (node) => typeof node === "object" && node["@type"] === "LocalBusiness",
    );
    const attorney = schema["@graph"].find(
      (node) => typeof node === "object" && node["@type"] === "Attorney",
    );

    assert.equal(schema["@context"], "https://schema.org");
    assert.equal(schema["@graph"].length, 2);
    assert.ok(office && typeof office === "object" && office["@type"] === "LocalBusiness");
    assert.ok(attorney && typeof attorney === "object" && attorney["@type"] === "Attorney");
    assert.equal(office["@id"], "https://escritorio-teste.com.br/#escritorio");
    assert.deepEqual(attorney.parentOrganization, { "@id": office["@id"] });
    assert.equal("aggregateRating" in office, false);
    assert.equal("aggregateRating" in attorney, false);
  });
});

test("demo content stays non-indexable even when the environment enables indexing", () => {
  withSiteEnv({ url: "https://escritorio-teste.com.br", indexable: "true" }, () => {
    assert.equal(isSiteIndexable(siteConfig), false);
    assert.deepEqual(buildMetadata(siteConfig).robots, {
      index: false,
      follow: false,
      googleBot: { index: false, follow: false },
    });
    assert.deepEqual(robots(), { rules: { userAgent: "*", disallow: "/" } });
    assert.deepEqual(sitemap(), []);
  });
});

test("indexing requires a reviewed site, explicit opt-in and a non-placeholder HTTPS origin", () => {
  const reviewedSite = { ...siteConfig, isDemo: false };

  for (const url of [
    "https://advocacia.example",
    "https://example.com",
    "https://preview.example.org",
    "https://localhost",
    "https://127.0.0.1",
    "http://escritorio-teste.com.br",
  ]) {
    withSiteEnv({ url, indexable: "true" }, () => {
      assert.equal(isSiteIndexable(reviewedSite), false, url);
    });
  }

  withSiteEnv({ url: "https://escritorio-teste.com.br" }, () => {
    assert.equal(isSiteIndexable(reviewedSite), false);
  });
  withSiteEnv({ url: "https://escritorio-teste.com.br", indexable: "true" }, () => {
    assert.equal(isSiteIndexable(reviewedSite), true);
  });
});

test("canonical URLs reject unsafe schemes, credentials and malformed input", () => {
  for (const url of ["javascript:alert(1)", "ftp://example.com", "https://user:pass@example.com", "not-a-url"]) {
    withSiteEnv({ url }, () => {
      assert.throws(() => getSiteUrl(siteConfig.url), /NEXT_PUBLIC_SITE_URL/);
    });
  }
});

test("metadata and structured data resolve to the same canonical origin", () => {
  withSiteEnv({ url: "https://escritorio-teste.com.br/preview?draft=true#content" }, () => {
    const metadata = buildMetadata(siteConfig);
    const schema = getAttorneySchema(siteConfig);
    const office = schema["@graph"].find(
      (node) => typeof node === "object" && node["@type"] === "LocalBusiness",
    );

    assert.equal(metadata.metadataBase?.toString(), "https://escritorio-teste.com.br/");
    assert.deepEqual(metadata.alternates, { canonical: "/" });
    assert.ok(office && typeof office === "object" && office["@type"] === "LocalBusiness");
    assert.equal(office.url, metadata.metadataBase?.toString());
  });
});
