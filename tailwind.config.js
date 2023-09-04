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
        20: "20",
      },
      container: {
        padding: "2rem",
      },
      padding: {
        "10px": "10px",
        "30px": "30px",
        "72px": "72px",
        "65px": "65px",
      },
      width: {
        672: "38rem",
        138: "8rem",
      },
      height: {
        832: "43rem",
      },
    },
  },
  plugins: [],
};
