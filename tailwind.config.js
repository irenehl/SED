module.exports = {
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        'dark-red': '#652B2B',
        'pink': '#EFC1C1',
      }
    }
  },
  variants: {
    extend: {},
  },
  plugins: [require('@tailwindcss/forms'),],
}
