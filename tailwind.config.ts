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
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      screens: {
        'xs': '486px',

        'sm': '640px',
  
        'md': '768px',
  
        'lg': '1024px',
  
        'xl': '1264px',
  
        '2xl': '1920px',
      },
      lineHeight: {
        '4.5': '18px',
      }
    },
  },
  plugins: [],
} satisfies Config;
