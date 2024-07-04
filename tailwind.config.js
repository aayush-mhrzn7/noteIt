/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        primary: "Inter",
      },
      colors: {
        hover: "#596475",
        primary: "#6F4E37",
        white: "#fff",
        border: "#EDEDED",
        mainColor: "#FFECCF",
        red: "#A63446",
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: 0, transform: "translateX(-50%)" },
          "100%": { opacity: 1 },
        },
      },
      animation: {
        fadeIn: "fadeIn 0.7s  ease-in-out",
      },
    },
  },
  plugins: [],
};
