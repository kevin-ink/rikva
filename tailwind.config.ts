import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        inter: ['var(--font-inter)'],
        dm_sans: ['var(--font-dm_sans)'],
        roboto_mono: ['var(--font-roboto_mono)'],
        comfortaa: ['var(--font-comfortaa)']
      },
      spacing: {
        '600vh': '600vh',
      },
      backgroundImage: {
        'flight-pattern': "url('images/flightPath.svg')",
      }
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