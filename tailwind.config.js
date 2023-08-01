/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme');
module.exports = {
  content: [
    "./src/**/*.{html,js}",
  ],
  theme: {
    extend: {
      fontFamily: {
        kumbh : ['"Kumbh Sans"', ...defaultTheme.fontFamily.sans],
        inter : ['"Inter"'],
        raleway : ['"Raleway"'],
        mukta : ['"Mukta"'],
        ABeeZee : ['"ABeeZee"']
      },
      dropShadow: {
        '3xl': ['0px 5px 20px 0px rgba(17, 18, 34, 0.02)']
      },
      boxShadow: { 
        'msg': ['5px 4px 20px rgba(0, 0, 0, 0.13)']
      }
    },
  },
  plugins: [],
}

