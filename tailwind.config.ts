import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // ── Core brand palette ──────────────────────────────
        "simplii-yellow": "#FEE62D", // primary background + CTA buttons
        "spirulina-green": "#154048", // primary text, dark sections, logo
        "starburst-green": "#31B278", // B2B sections + secondary accents
        // ── Accent palette (illustration elements only) ─────
        raspberry: "#EF467B",
        blueberry: "#2B6CB3",
        strawberry: "#DD4926",
        // NOTE: named "lime-accent" rather than "lime" so we don't clobber
        // Tailwind's built-in `lime-*` scale. Use `bg-lime-accent` etc.
        "lime-accent": "#7FC349",
      },
      fontFamily: {
        // Custom Franklin Gothic URW fonts
        "hero-headline": ['"Franklin Gothic URW"', "sans-serif"],
        "section-headline": ['"Franklin Gothic URW"', "sans-serif"],
        "card-headline": ['"Franklin Gothic URW"', "sans-serif"],
        "subheadline": ['"Franklin Gothic URW Condensed"', "sans-serif"],
        "body": ['"Franklin Gothic URW Condensed"', "sans-serif"],
        // Fallback
        sans: [
          '"Barlow Condensed"',
          '"Franklin Gothic URW"',
          "Impact",
          '"Arial Narrow"',
          "sans-serif",
        ],
      },
      letterSpacing: {
        tightest: "-0.02em",
      },
      animation: {
        marquee: "marquee 30s linear infinite",
      },
      keyframes: {
        marquee: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
      },
      boxShadow: {
        card: "0 24px 64px rgba(21,64,72,0.12)",
        "card-soft": "0 24px 64px rgba(21,64,72,0.08)",
      },
    },
  },
  plugins: [],
};

export default config;
