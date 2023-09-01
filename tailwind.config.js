/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        custom: ["Jost", "sans"],
      },
      colors: {
        mainBg: "#F8F8F7",
        mainText: "#1D1D1D",
        descriptionText: "#8C8C8C",
        accentText: "#FF868E",
        accentBg: "#FBE0DC",
        whiteColor: "#FFF",
        voteBgLink: "#B4B7FF",
        breedBgLink: " #97EAB9",
        galleryBgLink: "#FFD280",
      },
      fontSize: {
        44: "44px",
      },
      container: {
        padding: "2rem",
      },
    },
  },
  plugins: [],
};
