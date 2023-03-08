/** @type {import('$fresh/plugins/twind').Options} */
export default {
  theme: {
    extend: {
      screens: {
        sm: "640px",
        md: "768px",
        lg: "1024px",
        xl: "1280px",
        "2xl": "1536px",
      },
      colors: {
        primary: "#13C081",
        "primary-dark": "#3a8071",
        "primary-light": "#f2fbf7",
        "text-dark": "#1F4E4D",
        transparent: "transparent",
      },
      fontFamily: {
        sans: ["Montserrat", "sans-serif"],
        serif: ["Fraunces", "serif"],
      },
    },
  },
};
