import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // Paleta Estre
        'estre-green': {
          DEFAULT: '#61a229',
          dark: '#4e8221',
          light: '#009D59',
        },
        'estre-gray': {
          DEFAULT: '#454545',
          dark: '#333333',
          darker: '#292929',
          light: '#b1a6a6',
        },
        'estre-blue': {
          DEFAULT: '#3566bb',
          dark: '#2a5296',
        },
      },
      fontFamily: {
        sans: ['var(--font-geist-sans)', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
} satisfies Config;
