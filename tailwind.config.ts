import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        tandem: {
          blue: '#0A2540',
          orange: '#FF6B35',
          gray: '#F7F7F7',
        }
      }
    },
  },
  plugins: [],
};
export default config;
