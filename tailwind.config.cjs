/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      fontFamily: {
        inter: ["Inter", "sans-serif"],
      },
      colors: {
        limeGreen: "hsl(163, 72%, 41%)",
        brightRed: "hsl(356, 69%, 56%)",
        facebook: "hsl(208, 92%, 53%)",
        twitter: "hsl(203, 89%, 53%)",
        youtube: "hsl(348, 97%, 39%)",
        toggleLight: "hsl(230, 22%, 74%)",
        // dark theme
        veryDarkBlue: "hsl(230, 17%, 14%)", //BG
        veryDarkBlue2: "hsl(232, 19%, 15%)", //Top BG Pattern
        darkDesaturatedBlue: "hsl(228, 28%, 20%)", //Card BG
        darkDesaturatedBlueHover: "hsl(228, 28%, 28%)", //Card BG Hover
        desaturatedBlue: "hsl(228, 34%, 66%)", //Text
        // white: "hsl(0, 0%, 100%)", //Text
        // light theme
        // white: "hsl(0, 0%, 100%)", //BG
        veryPaleBlue: "hsl(225, 100%, 98%)", //Top BG Pattern
        lightGrayishBlue: "hsl(227, 47%, 96%)", //Card BG
        lightGrayishBlueHover: "hsl(227, 47%, 90%)", //Card BG Hover
        darkGrayishBlue: "hsl(228, 12%, 44%)", //Text
        veryDarkBlue: "hsl(230, 17%, 14%)", //Text
      },
      backgroundImage: {
        instagram:
          "linear-gradient(to right,hsl(37, 97%, 70%),hsl(329, 70%, 58%))",
        toggleDark: "linear-gradient( hsl(210, 78%, 56%), hsl(146, 68%, 55%) )",
        bgDark:
          "linear-gradient( hsl(232, 19%, 15%) 0 15.5rem, hsl(230, 17%, 14%) 15.5rem )",
        bgLight: "linear-gradient( hsl(225, 100%, 98%) 0 25%, white 25% )",
      },
      gridTemplateAreas: {
        large: ["a1 a2", "a3 a4"],
        small: ["a1", "a2", "a3", "a4"],
      },
      gridTemplateColumns: {
        layout: "1fr 1fr",
      },
    },
  },
  safelist: [
    "before:bg-facebook",
    "before:bg-twitter",
    "before:bg-instagram",
    "before:bg-youtube",
  ],
  plugins: [require("@savvywombat/tailwindcss-grid-areas")],
};
