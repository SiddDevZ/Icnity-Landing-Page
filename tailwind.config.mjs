const plugin = require('tailwindcss/plugin')
/** @type {import('tailwindcss').Config} */

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
      fontFamily: {
        inter: ["Inter", "sans-serif"],
      },
    },
  },
  plugins: [
    plugin(function({ addVariant }) {
      addVariant('firefox', '@-moz-document url-prefix()');
    })
  ],
};
