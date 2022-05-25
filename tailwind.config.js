const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./containers/**/*.{js,ts,jsx,tsx}",
    "./shared/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      transparent: "transparent",
      current: "currentColor",
      black: "var(--color-black)",
      white: "var(--color-white)",
      flamingo: "var(--color-flamingo)",
      mantis: "var(--color-mantis)",
    },
    fontFamily: {
      quinta: ['quinta', defaultTheme.fontFamily.sans],
      axi: ['axi', defaultTheme.fontFamily.snas]
    },
    extend: {},
  },
  plugins: [],
}
