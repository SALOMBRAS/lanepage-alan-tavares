import type { Metadata, Viewport } from "next";
import type { PropsWithChildren } from "react";

import { SkipLink } from "@/components/layout/skip-link";
import { AppProviders } from "@/components/providers/app-providers";
import { siteConfig } from "@/lib/data";
import { bodyFont, headingFont } from "@/lib/fonts";
import { buildMetadata } from "@/lib/seo";
import { cn } from "@/lib/utils";

import "./globals.css";

export const metadata: Metadata = buildMetadata(siteConfig);

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  // Browser zoom remains available for accessibility.
};

export default function RootLayout({ children }: PropsWithChildren) {
  return (
    <html lang={siteConfig.language} className={cn(bodyFont.variable, headingFont.variable)}>
      <body>
        <SkipLink />
        <AppProviders>{children}</AppProviders>
      </body>
    </html>
  );
}
