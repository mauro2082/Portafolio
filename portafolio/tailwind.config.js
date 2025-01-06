/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}", // Busca en todos los archivos dentro de src
    //"./public/index.html", // Si usas clases en el HTML directamente
  ],
  theme: {
    extend: {}, // Aquí puedes extender la configuración por defecto de Tailwind
  },
  plugins: [],
}
