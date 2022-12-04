/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    screens: {
      sm: '480px',
      md: '768px',
      lg: '976px',
      xl: '1080px',
      xxl: '1440px',
      xxxl: '1920px'
    },
    extend: {
      colors: {
        darkGrey: '#141C24',
        lighterGray: '#2f2f2f',
        limeGreen: '#75d77e',
        veryDarkBlue: '#0f1024'
      }
    }
  },
  plugins: [],
}
