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
        harteck: {
          red: '#DC2626', // Vermelho Harteck principal
          'red-dark': '#991B1B',
          'red-light': '#EF4444',
        },
      },
    },
  },
  plugins: [],
};
export default config;
