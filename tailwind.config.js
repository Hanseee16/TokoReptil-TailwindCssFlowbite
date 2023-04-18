/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: ["index.html"],
  theme: {
    container: {
      center: true,
      padding: "2rem",
    },
    extend: {
      colors: {
        "hijau-gelap": "#206a5d",
        "hijau-terang": "#81b214",
        "hijau-muda": "#BFDCAE",
        putih: "#F1F1E8",
      },
    },
  },
  plugins: [],
};
