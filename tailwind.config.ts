import type { Config } from "tailwindcss";

/**
 * Tailwind v4 loads this file via @config in app/globals.css.
 * Raw colors live in :root; semantic and component tokens reuse them.
 * Keep the v4 CSS theme responsible for shadcn's semantic utilities.
 */
export default {
  theme: {
    extend: {
      colors: {
        brand: {
          navy: "var(--brand-navy)", // Azul profundo #17394F
          gold: "var(--brand-gold)", // Azul-bebê #B9E3F3
          coral: "var(--brand-coral)", // Azul médio #6EB7D5
          "gold-ink": "var(--brand-gold-ink)",
          "coral-ink": "var(--brand-coral-ink)",
          paper: "var(--brand-paper)",
        },
      },
      fontFamily: {
        sans: ["var(--font-manrope)", "Arial", "sans-serif"],
        heading: ["var(--font-cormorant)", "Georgia", "serif"],
      },
      fontSize: {
        caption: ["0.875rem", { lineHeight: "1.5" }],
        body: ["1rem", { lineHeight: "1.65" }],
        title: ["clamp(1.75rem, 1.25rem + 2vw, 3rem)", { lineHeight: "1.15", letterSpacing: "-0.02em" }],
        display: ["clamp(2.25rem, 1.25rem + 4vw, 5rem)", { lineHeight: "1.05", letterSpacing: "-0.03em" }],
      },
      fontWeight: { regular: "400", semibold: "600" },
      // Base-4 scale: 4 / 8 / 16 / 24 / 32 / 48 / 64 / 96 px.
      spacing: {
        1: "0.25rem", 2: "0.5rem", 4: "1rem", 6: "1.5rem",
        8: "2rem", 12: "3rem", 16: "4rem", 24: "6rem",
        gutter: "var(--page-gutter)",
        section: "var(--section-space)",
        header: "var(--header-height)",
      },
      maxWidth: { content: "var(--content-max-width)", prose: "65ch" },
      screens: { xs: "20rem", "3xl": "90rem" },
      borderRadius: { card: "1rem" },
      boxShadow: { card: "0 8px 32px rgb(26 26 46 / 0.08)" },
      transitionDuration: { micro: "150ms", layout: "300ms" },
    },
  },
} satisfies Config;
