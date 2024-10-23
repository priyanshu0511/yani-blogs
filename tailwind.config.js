/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        pink: {
          light: '#ff7ce5',
          DEFAULT: '#f1356d',
          dark: '#ff16d1',
        }
      }
    },
  },
  plugins: [],
}
