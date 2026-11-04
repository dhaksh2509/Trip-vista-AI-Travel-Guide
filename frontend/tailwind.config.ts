import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: ["class"],
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        // Map navy to deep black and dark zinc surfaces for consistent theme resolution
        navy: {
          950: "#000000", // Canvas background
          900: "#09090b", // Section / container background
          850: "#121214", // Card / panel base
          800: "#18181b", // Elevated card
          750: "#202024", // Hover elevation
          700: "#27272a", // Active elements
          600: "#3f3f46", // Subtle borders
          500: "#71717a",
          border: "#27272a",
          "border-subtle": "#18181b",
          "border-focus": "#facc15",
        },
        turquoise: {
          50: "#fefce8",
          100: "#fef9c3",
          200: "#fef08a",
          300: "#fde047",
          400: "#facc15",
          500: "#eab308",
          600: "#ca8a04",
          700: "#a16207",
          800: "#854d0e",
          900: "#713f12",
        },
        sunshine: {
          300: "#fde047",
          400: "#facc15", // Primary CTA yellow
          500: "#eab308",
          600: "#ca8a04",
        },
        surface: {
          base: "#000000",
          card: "#121214",
          cardHover: "#18181b",
          input: "#09090b",
          border: "#27272a",
          borderLight: "#3f3f46",
        },
      },
      fontFamily: {
        sans: ["var(--font-inter)", "-apple-system", "BlinkMacSystemFont", "Segoe UI", "Roboto", "sans-serif"],
        display: ["var(--font-outfit)", "var(--font-inter)", "sans-serif"],
      },
      boxShadow: {
        "card": "0 4px 20px -2px rgba(0, 0, 0, 0.7)",
        "card-hover": "0 12px 32px -4px rgba(0, 0, 0, 0.9), 0 0 0 1px rgba(250, 204, 21, 0.25)",
        "dropdown": "0 16px 36px -4px rgba(0, 0, 0, 0.95)",
        "accent": "0 4px 14px 0 rgba(250, 204, 21, 0.3)",
        "turquoise-subtle": "0 4px 14px 0 rgba(250, 204, 21, 0.2)",
      },
      keyframes: {
        pulseSubtle: {
          "0%, 100%": { opacity: "1" },
          "50%": { opacity: "0.65" },
        },
      },
      animation: {
        "pulse-subtle": "pulseSubtle 2.5s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};
export default config;
