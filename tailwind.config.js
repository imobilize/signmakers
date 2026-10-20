const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  content: [
    './layouts/**/*.html',
    './content/**/*.md',
    './assets/js/**/*.js',
  ],
  darkMode: 'class',
  safelist: ["list-image-[url('/images/icons/tick-icon.svg')", "bg-[url('/images/icons/arrowhead-alternating.svg')]"],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Montserrat', ...defaultTheme.fontFamily.sans],
        display: ['"Playfair Display"', ...defaultTheme.fontFamily.serif],
        serif: ['"Playfair Display"', ...defaultTheme.fontFamily.serif],
      },
      container: {
        padding: '2rem',
      },
      // The Sign Makers brand palette (Brand Guidelines V1 — 2026, matches Shopify store)
      colors: {
        // Coral — primary accent, CTAs
        primary: {
          DEFAULT: '#F04F4F',
          50: '#FEF1F1', 100: '#FDE0E0', 200: '#FBC5C5', 300: '#F79E9E', 400: '#F47474',
          500: '#F04F4F', 600: '#DC3535', 700: '#B92828', 800: '#992424', 900: '#7F2323', 950: '#450D0D',
        },
        // Faded Jade — secondary, headings, UI elements
        secondary: {
          DEFAULT: '#407878',
          50: '#F1F8F8', 100: '#DCEFEF', 200: '#C8E8E8', 300: '#9BCDCD', 400: '#6AAAAA',
          500: '#4F8E8E', 600: '#407878', 700: '#366363', 800: '#2F5252', 900: '#284545', 950: '#1A2424',
        },
        coral: '#F04F4F',
        jade: '#407878',
        // Jagged Ice — light backgrounds
        ice: { DEFAULT: '#C8E8E8', light: '#EEF7F7' },
        // Near-black — headings and body text
        ink: '#1A2424',
        neutral: '#EEF7F7',
        lightpurple: '#EEF7F7', // legacy name, now Jagged Ice tint
      },
      lineHeight: {
        'extra-loose': '2.5',
        '12': '3rem',
      },
      fontSize: {
        'xs': '0.75rem',     // Extra Small
        'sm': '0.875rem',    // Small
        'base': '1rem',      // Base
        'lg': '1.125rem',    // Large
        'xl': '1rem',        // Extra Large
        '1xl': '1rem',       // 1 Extra Large
        '2xl': '1.5rem',     // 2 Extra Large
        'special': '1.50rem',
        '3xl': '1.875rem',   // 3 Extra Large
        '4xl': '2.25rem',    // 4 Extra Large
        '5xl': '3rem',       // 5 Extra Large
        '6xl': '4rem',       // 6 Extra Large
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
