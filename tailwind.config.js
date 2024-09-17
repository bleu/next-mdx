/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        primary: {
          50: "#e6edff",
          100: "#ccdaff",
          200: "#99b5ff",
          300: "#6690ff",
          400: "#336bff",
          500: "#0043ff", // Main primary
          600: "#0036cc",
          700: "#002999",
          800: "#001c66",
          900: "#000f33"
        },
        secondary: {
          50: "#fff5fb",
          100: "#ffeaf7",
          200: "#ffd5ef",
          300: "#ffc1e7",
          400: "#ffadeb", // Main secundary
          500: "#ff99e0",
          600: "#ff85d5",
          700: "#ff70ca",
          800: "#ff5cbf",
          900: "#ff47b4"
        },
        neutral: {
          50: "#fafafa",
          100: "#f5f5f5",
          200: "#eeeeee",
          300: "#e0e0e0",
          400: "#bdbdbd",
          500: "#9e9e9e",
          600: "#757575",
          700: "#616161",
          800: "#424242",
          900: "#212121"
        },
        hover: {
          primary: "#1a57ff",
          secondary: "#ff94e3"
        }
      },
      fontFamily: {
        sans: ["var(--font-barlow-condensed)"]
      },
      fontWeight: {
        regular: 400,
        medium: 500,
        bold: 700
      }
    }
  },
  plugins: []
}
