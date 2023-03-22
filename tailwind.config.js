/** @type {import('tailwindcss').Config} */
const { fontFamily } = require("tailwindcss/defaultTheme");
module.exports = {
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--open-sans-font)", ...fontFamily.sans],
        serif: ["var(--lora-font)", ...fontFamily.serif],
        domine: ["var(--domine-font)", ...fontFamily.serif],
      },
      fontSize: {
        "header-sm": ["1.875rem", "4rem"],
        "header-md": ["3rem", "4rem"],
        "header-xl": ["4.5rem", "5.25rem"],
      },
      colors: {
        current: "current",
        gold: "#D4AF37",
      },
    },
  },
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
  ],
  plugins: [
    require("@tailwindcss/forms"),
    function ({ addComponents }) {
      addComponents({
        ".container": {
          maxWidth: "100%",
          "@screen sm": {
            maxWidth: "640px",
          },
          "@screen md": {
            maxWidth: "768px",
          },
          "@screen lg": {
            maxWidth: "1280px",
          },
          "@screen xl": {
            maxWidth: "1400px",
          },
        },
      });
    },
    require("daisyui"),
  ],
};
