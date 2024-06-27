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
      },
    },
  },
  plugins: [],
};
