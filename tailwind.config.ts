import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
  ],
  theme: {
    screens: {
      sm: "640px",
      md: "768px",
      lg: "1280px",
      xl: "1366px",
      "2xl": "1536px",
    },
    extend: {},
  },
  plugins: [],
};

export default config;
