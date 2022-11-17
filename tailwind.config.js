/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    "./node_modules/flowbite-react/**/*.js",
  ],
  theme: {
    extend: {
      colors: {
        'blue-core': '#385980',
        'blue-light':'#F6FAFF',
        'black-30':'rgba(0,0,0,.3)',
        'black-50':'rgba(0,0,0,.5)',
        'black-80':'rgba(0,0,0,.8)',
        'titles':'#777',
        'white-trans':'rgba(255,255,255, .5)'
      },
    },
  },
  
  plugins: [
    require("flowbite/plugin"),
    require('@tailwindcss/line-clamp'),
  ],
}
