import daisyui from "daisyui";
/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ["./app/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {},
  },
  daisyui: {
    themes: ["cupcake"], // or any other theme
  },
  plugins: [daisyui],
};
