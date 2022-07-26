/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",],
  darkMode: false,
  theme: {
    extend: {
      colors: {
        bmsNav: {
          50: '#f3f3ec',
          100: '#dcdad5',
          200: '#c4c2bc',
          300: '#ada9a1',
          400: '#959187',
          500: '#7b776d',
          600: '#615d54',
          700: '#45423c',
          800: '#2a2823',
          900: '#120c05',
        },
        bgColors: {
          50: '#edf1fc',
          100: '#d3d4e1',
          200: '#b6b8c9',
          300: '#989bb2',
          400: '#7c7f9b',
          500: '#636582',
          600: '#4c4f66',
          700: '#2b3147',
          800: '#21222e',
          900: '#0a0a16',
        }
      },
      container: {
        center: true,
        padding: {
          DEFAULT: '1rem',
          sm: '2rem',
          lg: '4rem',
          xl: '5rem',
          '2xl': '6rem',
        },
      },
    },
  },
  variants: { extend: {}, },
  plugins: [],
}
