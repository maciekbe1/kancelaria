/** @type {import('tailwindcss').Config} */
module.exports = {
  theme: {
    extend: {},
  },
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
  ],
  plugins: [require("daisyui")],
};
