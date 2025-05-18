/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.js"
  ],
  theme: {
    extend: {
      fontFamily: {
        roboto: ['Roboto', 'sans-serif'],
        myfont: ['MyFont', 'sans-serif'],
      },
    },
  },
  plugins: [],
}



