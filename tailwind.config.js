/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {},
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      white: '#ffffff',
      darkBlue: '#15202A',
      blue: '#4C7BF3',
      gray: '#969696',
      placeHolder: '#B8C7ED',
      formBorder: '#C2D3FF',
      warning: '#FF5466'
    }
  },
  plugins: [],
}