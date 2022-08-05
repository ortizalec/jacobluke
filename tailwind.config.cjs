/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    extend: {
      colors: {
        'suit-black': 'rgb(33, 33, 33)',
        'suit-white': 'rgb(242, 242, 242)',
        'suit-gray': 'rgb(55, 55, 55)',
        'suit-gray-600': 'rgb(183, 183, 183)'
      },
      fontFamily: {
        'body': ['"Ibarra Real Nova"']
      },
    },
  },
  plugins: [require("daisyui")],
}
