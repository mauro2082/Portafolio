/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'], // Ajusta según la estructura del proyecto
  theme: {
    extend: {
      fontFamily: {
        rubik: ['Rubik Vinyl', 'sans-serif'], // Define la fuente personalizada
      },
    },
  },
  plugins: [],
};
