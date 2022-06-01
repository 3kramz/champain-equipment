module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {},
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: [
      {
        mytheme: {
          
          "primary": "#111430",
                   
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
