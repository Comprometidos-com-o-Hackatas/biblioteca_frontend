/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      width: {
        '10/1': '10%',
        '20/1': '20%',
        '25/1': '25%',
        '30/1': '30%',
        '40/1': '40%',
        '50/1': '50%',
        '60/1': '60%',
        '70/1': '70%',
        '75/1': '75%', 
        '80/1': '80%',
        '90/1': '90%'
      },
      height: {
        '5/1' : '5%',
        '10/1': '10%',
        '20/1': '20%',
        '25/1': '25%', 
        '30/1': '30%',
        '40/1': '40%',
        '50/1': '50%',
        '60/1': '60%',
        '70/1': '70%',
        '80/1': '80%',
        '90/1': '90%',
        '95/1': '95%',
      },
      colors: {
        primmary:{
          1 : '#8A3119' 
        },
      },
    },
  },

  plugins: []
}
