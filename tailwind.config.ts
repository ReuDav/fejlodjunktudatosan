import type { Config } from "tailwindcss";

export default {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'custom-gradient': 'linear-gradient(to right, white 0%, white 5%, transparent 5%, transparent 95%, white 95%, white 100%)',
      },
      animation: {
        'fade-in': 'fadeIn .5s ease-in-out linear',
        'fade-in-up': 'fadeInUp .5s ease-in-out linear',
      },
      keyframes: {
        'fadeIn': {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        'fadeInUp': {
          '0%': { opacity: '0', transform: 'translateY(30px)' },
          '100%': { opacity: '1', transform: 'translateY(0px)' },
        },
      },
    },
  },
  plugins: [],
} satisfies Config;
