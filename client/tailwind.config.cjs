/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primaryBlue: "#264653",
        secondaryGreen: "#2a9d8f",
        highlightOrange: "#e76f51",
        secondaryYellow: "#f4a261",
        lightYellow: "#e9c46a",
      },
    },
  },
  plugins: [],
}
