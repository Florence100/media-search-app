// tailwind.config.js
const {nextui} = require("@nextui-org/react");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    // ...
    // make sure it's pointing to the ROOT node_module
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
    "./src/**/*.{js,jsx,ts,tsx}"
  ],
  theme: {
    extend: {},
  },
  darkMode: "class",
  plugins: [
    nextui({
      addCommonColors: true,
      layout: {
        disabledOpacity: 0.6,
        borderWidth: {
          small: "1px",
          medium: "1px",
          large: "2px",
        },
      },
      themes: {
        light: {
          colors: {
            primary: {
              DEFAULT: "#CC3EA4",
              foreground: "#FFFFFF",
            },
            focus: "#992F7B",
          },
        },
      },
    }),
  ],
};

