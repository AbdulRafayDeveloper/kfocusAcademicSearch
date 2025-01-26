import { laptop } from "fontawesome";

/** @type {import('tailwindcss').Config} */
export default {
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
      },
      screens: {
        mobile: "425px",
        tablet: "768px",
        laptop: "1024px",
        "md-mobile": "375px",
        "sm-mobile": "320px",
      },
    },
  },
  plugins: [],
};
