import type { Thing } from "schema-dts";

import { serializeJsonLd } from "@/lib/seo";
import type { JsonLdProps } from "@/types";

/** Server component: escapes '<' so text cannot terminate the script element. */
export function JsonLd<T extends Thing>({ id, data, nonce }: JsonLdProps<T>) {
  return (
    <script
      id={id}
      type="application/ld+json"
      nonce={nonce}
      dangerouslySetInnerHTML={{
        __html: serializeJsonLd(data),
      }}
    />
  );
}
