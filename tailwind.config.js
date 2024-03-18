/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: {
            100:"#E5ECEE",
            200: "#C7D6DB",
            300: "#A3C3C8",
700:"#0C2D2F",
            800: "#062021",
            900: "#031718"
        },
        'text': 'hsl(var(--text))',
        'background': 'hsl(var(--background))',
        'secondary': 'hsl(var(--secondary))',
        'accent': 'hsl(var(--accent))',
      },
    },
    fontFamily: {
      heading: 'NeueMontreal',
    },
    fontWeight: {
      normal: '400',
      bold: '700',
    },


  },
  plugins: [],
};
