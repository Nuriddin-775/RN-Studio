/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/app/**/*.{js,jsx,ts,tsx}",
    "./src/components/**/*.{js,jsx,ts,tsx}",
    "./src/labs/**/*.{js,jsx,ts,tsx}",
  ],
  presets: [require("nativewind/preset")],
  theme: {
    extend: {
      colors: {
        // Dark theme - developer tool aesthetic
        surface: {
          DEFAULT: "#0D1117",
          elevated: "#161B22",
          accent: "#21262D",
        },
        border: {
          DEFAULT: "#30363D",
          subtle: "#21262D",
        },
        text: {
          primary: "#E6EDF3",
          secondary: "#8B949E",
          muted: "#6E7681",
        },
        accent: {
          DEFAULT: "#58A6FF",
          hover: "#79C0FF",
          muted: "#388BFD26",
        },
        status: {
          success: "#3FB950",
          warning: "#D29922",
          error: "#F85149",
          info: "#58A6FF",
        },
        // Category colors
        categoryState: "#A371F7",
        categoryExpo: "#F778BA",
        categoryStorage: "#3FB950",
        categoryUI: "#58A6FF",
      },
    },
  },
  plugins: [],
};
