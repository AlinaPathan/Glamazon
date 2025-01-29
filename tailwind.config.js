/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: { 
        'PaleDogwood': ' #F7D1CD', 
        'FairyTale': '  #E8C2CA', 
        'Thistle': '  #D1B3C4', 
        'Rosequartz':' #9C7A95',
         //#B392AC
        'ChineseViolet':  '#735D78', //Darkest   #624A67 more dark
        'FaintPale': ' #FFF4F2', 
        'FaintThistle':'  #E2CBD8'
      }, 
      fontFamily: {
        title: ['RobotoFlex', 'serif'],
      },
    },
  },
  plugins: [],
}

