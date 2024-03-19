/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: {
          100: "#E5ECEE",
          200: "#C7D6DB",
          300: "#A3C3C8",
          700: "#0C2D2F",
          800: "#062021",
          900: "#031718",
        },
      },
    },
    fontSize: {
      sm: '0.800rem',
      base: '1rem',
      xl: '1.250rem',
      '2xl': '1.563rem',
      '3xl': '1.954rem',
      '4xl': '2.442rem',
      '5xl': '3.053rem',
    },
    fontWeight: {
      normal: "400",
      bold: "700",
    },
  },
  plugins: [],
};
