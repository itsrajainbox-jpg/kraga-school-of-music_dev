/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        secondary: "#d3a23f",
      },
      fontFamily: {
        symphony: ["Symphony", "sans-serif"],
        playfair: ["var(--font-playfair)"]
      },
    },
  },
  plugins: [],
};
