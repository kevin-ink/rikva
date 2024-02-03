import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
    },
  },
  plugins: [
  ],
  safelist: [
    {
      pattern: /\b(?:col-start-(?:[1-4])|row-start-(?:[1-3]))\b/
    },
  ],
};
export default config;