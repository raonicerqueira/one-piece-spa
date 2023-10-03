/** @type {import('tailwindcss').Config} */

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        secularOne: ["Secular One", "sans"],
        rubik: ["Rubik", "sans"],
      },
    },
  },
  plugins: [],
};
