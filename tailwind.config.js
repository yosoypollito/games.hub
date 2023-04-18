/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        pink: "#b265c6",
        red: "#ff4468",
        detail: "#fca311",
        "light-grey": "#e5e5e5",
        blue: "#14213d",
        grey: "#9ca3af",
        "light-blue": "#00dcf5",
        black: "#252234",
      },
    },
  },
  plugins: [],
};
