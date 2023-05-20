/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/*{.html,.js}"],
  theme: {
    extend: {
      backgroundImage: {
        boost: "url('../images/bg-boost-desktop.svg')",
      },
    },
  },
  plugins: [],
};
