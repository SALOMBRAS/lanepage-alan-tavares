import { Cormorant_Garamond, Manrope } from "next/font/google";

// next/font downloads these at build time and serves them from this app.
export const headingFont = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["400", "600"],
  variable: "--font-cormorant",
  display: "swap",
  preload: true,
});

export const bodyFont = Manrope({
  subsets: ["latin"],
  weight: ["400", "600"],
  variable: "--font-manrope",
  display: "swap",
  preload: true,
});
