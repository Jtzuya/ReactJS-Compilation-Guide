/** 
 * @type {import('tailwindcss').Config} 
*/
const colors = require('tailwindcss/colors')

module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    listStyleType: {
      disc: 'disc'
    },
    colors: {
      'react-blue-light': '#61DAFB',
      'react-blue-light-2': '#DEEBF8',
      'react-blue-dark': '#21222A',
      'react-body': '#33373E',
      'white': '#ffffff',
      'blue': 'blue'
    },
    fontFamily: {
      'body': ['Inter', 'sans-serif']
    },
    minHeight: {
      'custom': '459px'
    },
    extend: {},
  },
  plugins: [],
}