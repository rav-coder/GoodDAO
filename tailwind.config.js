/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        green: "#10b981",
        purple: "#8b5cf6",
        gray: "#e4e4e7",
      },
    },
  },
  plugins: [],
};
