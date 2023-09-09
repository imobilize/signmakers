const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  content: ['./layouts/**/*.html', './content/**/*.md'],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        sans: ['Mukta', ...defaultTheme.fontFamily.sans],
        poppins: ['"Poppins"', 'cursive'],
      },
      container: {
        padding: '2rem',
      },
      colors: {
        primary: '#EB5416',
        secondary: '#818181',
        neutral: '#FFC15E',
        dark: '#0A1045',
        darksecondary: '#56445D',
        hoverprimary: '#E45310',
        green: '#56E39F',
        blue: "#0A1045"
      },
      lineHeight: {
        'extra-loose': '2.5',
        '12': '3rem',
      },
    },
  },
  variants: {
    extend: {
      width: ['responsive'],
    },
    typography: ['dark'],
  },
  plugins: [require('@tailwindcss/typography')],
};
