/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#f5f5f5",
        secondaryText: "#6a7080",
      },
    },

  },
  plugins: [require('@tailwindcss/line-clamp')],
}