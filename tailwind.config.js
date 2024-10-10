/** @type {import('tailwindcss').Config} */
module.exports = {
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
        customGray: "#EBEDEF",
        brownBrown: "#6F5D44",
        backgroundBrown: "#A29B90",
        specialOrange: "#E5BB89",
      },
    },
  },
  plugins: [],
};
