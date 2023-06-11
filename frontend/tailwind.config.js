module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        'primary': '#106976',
        'primary-light': '#57969F',
        'secondary': '#0D0F0E',
      },
      fontFamily: {
        'allison': ['"Allison"', 'cursive']
      },
      animation: {
        'fade-in-down': 'fade-in-down 0.5s ease-out'
      },
      keyframes: {
        'fade-in-down': {
            '0%': {
                opacity: '0',
                transform: 'translateY(-10px)'
            },
            '100%': {
                opacity: '1',
                transform: 'translateY(0)'
            },
        }
    },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
