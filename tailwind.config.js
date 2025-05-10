/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        heading: ['"Cormorant Garamond"', 'serif'],
        body: ['"Nunito Sans"', 'sans-serif'],
      },
      colors: {
        primary: {
          50: '#f0f4f9',
          100: '#d9e3ef',
          200: '#b3c7de',
          300: '#8eabcd',
          400: '#6890bd',
          500: '#4274ac',
          600: '#345d8a',
          700: '#294769',
          800: '#1d3047',
          900: '#121d2b',
        },
        secondary: {
          50: '#f4f4f6',
          100: '#e2e2e8',
          200: '#c6c4d0',
          300: '#a9a7b9',
          400: '#8d8aa2',
          500: '#716d8b',
          600: '#5a576f',
          700: '#444253',
          800: '#2d2c38',
          900: '#19191d',
        },
        accent: {
          50: '#f7f2f0',
          100: '#ebe0d9',
          200: '#d7c0b3',
          300: '#c3a18c',
          400: '#af8166',
          500: '#9b6240',
          600: '#794e33',
          700: '#5a3a26',
          800: '#3c2719',
          900: '#1e130d',
        },
      },
      boxShadow: {
        'soft': '0 4px 6px -1px rgba(0, 0, 0, 0.05), 0 2px 4px -1px rgba(0, 0, 0, 0.03)',
        'medium': '0 10px 15px -3px rgba(0, 0, 0, 0.05), 0 4px 6px -2px rgba(0, 0, 0, 0.03)',
      },
      backgroundImage: {
        'hero-pattern': "url('https://images.pexels.com/photos/531321/pexels-photo-531321.jpeg?auto=compress&cs=tinysrgb&w=1600')",
        'texture': "url('https://images.pexels.com/photos/2693212/pexels-photo-2693212.png?auto=compress&cs=tinysrgb&w=1600&h=750&dpr=1')",
      },
    },
  },
  plugins: [],
};