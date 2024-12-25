/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        gellix: ['Gellix', 'sans-serif'],
        goldplay: ['Goldplay', 'sans-serif'],
      },
      colors: {
        primary: '#020048',
        secondary: '#27EFE9',
        accent: '#2f78c4',
        black: '#000',
        white: '#fff',
      },
      container: {
        center: true,
        padding: '0.5rem',
        screens: {
          lg: '1200px', // Max width of 1200px for large screens
          xl: '1200px', // Max width of 1200px for extra large screens
        },
      },
    },
  },
  plugins: [],
};
