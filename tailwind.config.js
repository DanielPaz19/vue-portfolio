/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#FF2D20",
        light: "#E7E8F2",
      },
    },
  },
  plugins: [],
};
