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
        primary: '#FE590F',
        secondary: '#6699cc',
        neutral: '#EFECCA',
        dark: '#363344',
        darksecondary: '#56445d',
        hoverprimary: '#E45310',
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
