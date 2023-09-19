/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: [
      {
        mytheme: {

          "primary": "#3abff8",

          "secondary": "#d926a9",

          "accent": "#1fb2a6",

          "neutral": "#2a323c",

          "base-100": "#1d232a",

          "info": "#641ae6",

          "success": "#36d399",

          "warning": "#fbbd23",

          "error": "#f87272",
        },
      },
    ],
  },
}

