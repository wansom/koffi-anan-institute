

const { fontFamily } = require("tailwindcss/defaultTheme");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./node_modules/flowbite/**/*.js"
  ],
  theme: {
    container: {
      screens: {
        sm: "640px",
        md: "768px",
        lg: "1280px",
        xl: "1440px",
      },},
    extend: {
      fontFamily: {
        sans: ["DM Sans", ...fontFamily.sans],
        Montserrat: ["Montserrat", ...fontFamily.sans],
      },
    },
  },
  plugins: [
    require("@tailwindcss/typography"),
    require('flowbite/plugin')
  ],
}
