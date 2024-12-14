/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.{html, js}"],
  theme: {
    extend: {
      content: {
        backgroundImageMobile: 'url("../images/image-header-mobile.jpg")',
        backgroundImageDesktop: 'url("../images/image-header-desktop.jpg")',
      },
      colors: {
        mainParagraph: "hsla(0, 0%, 100%, 0.75)",
        statHeadings: "hsla(0, 0%, 100%, 0.6)",
      },
    },
    fontFamily: {
      inter: ["Inter", "serif"],
      lexend: ["Lexend Deca", "sans-serif"],
    },
  },
  plugins: [],
};
