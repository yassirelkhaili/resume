/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
  "./**/*.{html,js}",
  "./dist/*.js"
],
darkMode: 'class',
theme: {
  fontFamily: {
    'sourcesans': ['Source Sans Pro', 'sans-serif']
  },
  extend: {
    screens: {
      sm: "550px",
    },
    colors: {
      dark_background: "#111827",
      dark_card_background: "#1F2937",
      dark_color: "#6366F1",
      main: '#323232',
      sub: '#236FB2',
    },
  },
},
  plugins: [],
}

