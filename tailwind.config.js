/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        lightSixty: '#FF6162',
        lightTen: '#2B3467',
        productGray: '#EDF0F2',
        white: '#E2E8F0',
        pureWhite: '#fff',
        darker: '#041C32',
        dark: '#092a48',
        darkCard: '#083259',
        darkLite: '#064663',
      },
    },
  },
  plugins: [],
};
