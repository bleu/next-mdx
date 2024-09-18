/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        primary: "#0043ff",
        secondary: "#ffadeb"
      },
      fontFamily: {
        sans: ["var(--font-barlow-condensed)"]
      }
    }
  },
  plugins: []
}
