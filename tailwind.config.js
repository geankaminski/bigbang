/** @type {import('tailwindcss').Config} */
export default {
  content: [],
  purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    textColor: {
      'primary': '#202027',
      'secondary': '#686868 ',
      'hint': '#A3A3A3',
      'link': '#7986FE',
      'black': '#000000',
      'white': '#ffffff',
      'yellow': '#FFF500',
      'red': '#FF6969',
    },
    screens: {
      'xl': { 'max': '1440px' },
      'lg': { 'max': '976px' },
      'md': { 'max': '768px' },
      'sm': { 'max': '480px' },
    },
    colors: {
      'primary': '#202027 ',
      'secondary': '#7986FE ',
      'error': '#FF6969',
      'black': '#000000',
      'white': '#ffffff',
      'gray': '#747474 '
    },
    extend: {
      fontFamily: {
        'poppins': ['Poppins', 'sans-serif'],
      },
    },
  },
  plugins: [],
}

