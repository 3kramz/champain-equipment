/** @type {import('tailwindcss').Config} */
const colors = require('tailwindcss/colors')

module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    colors: {
      "textHeading": "#1b1b1b",
      "textBody": "#7e7e7e",
      "brandColor1": "#81B13D",
      "brandColor2": "#FDC040",
      "brand1": "#3BB77E",
      "scale1": "#81B13D",
      "scale2": "#3A882B",
      "scale3": "#227226",
      "scale4": "#1A5D2C",
      black: colors.black,
      white: colors.white,
      gray: colors.gray,
      emerald: colors.emerald,
      indigo: colors.indigo,
      yellow: colors.yellow,
    },
    extend: {},
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: [
      {
        mytheme: {
          
          "primary": "#1a1918",
                   
          "secondary": "#7AB259",
                   
          "accent": "#FFDF00",
                   
          "neutral": "#115e59",
                   
          "base-100": "#E5E5E5",
                   
          "info": "#22d3ee",
                   
          "success": "#22c55e",
                   
          "warning": "#fbbf24",
                   
          "error": "#ef4444",
                   },
      },
    ],
  },
}
