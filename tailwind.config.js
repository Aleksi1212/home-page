/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    clipPath: {
      imageCircle: "circle(150px at 80% 20%)",
      imageCircleMove: "circle(300px at 80% -5%)",
      mdImageCircle: "circle(120px at 80% 20%)",
      mdImageCircleMove: "circle(200px at 80% -5%)",
      mobileImageCircle: "circle(50px at 80% 40%)",
      tabletImageCircle: "circle(85px at 80% 40%)"
    },
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
  plugins: [
    require('tailwind-clip-path')
  ],
}
