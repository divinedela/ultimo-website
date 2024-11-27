import daisyui from "daisyui";
/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ["./app/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Effra Trial", "Inter", "sans-serif"],
      },
      screens: {
        "1147px": "1147px"
      },
      minHeight: {
        'phone': 'calc(100vh - 70px)',
      }
    },
  },
  daisyui: {
    themes: ["cupcake"], // or any other theme
  },
  plugins: [daisyui],
};
