/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.html"],
  theme: {
    extend: {
      fontFamily:{
        Audiowide:["Audiowide", "serif"],
        Osake:["Osake","serif"],
        DAYS:["28DAYS","serif"],
        ROG:["ROG","serif"],
        Stencil:["Stencil","serif"],
        Vin:["Vineritc","serif"],
      },
      spacing: {
        '180': '180px',
        '30': '30px',
      },
      backgroundImage:{
        "game-gradient":"linear-gradient(180deg,#4C0070,#160040)",
        'custom-gradient': 'linear-gradient(210deg, #833ab4, #fd1d1d, #fcb045)',
      },
      boxShadow:{
        "aroundBox":'0px 0px 30px rgba(0, 0, 0, 0.45)'
      }
    },
  },
  plugins: [],
}

