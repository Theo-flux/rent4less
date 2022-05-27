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
      gray: "var(--color-gray)",
      darkgray: "var(--color-darkgray)",
      black: "var(--colorblack)",
      russian: "var(--color-russian)",
    },
    fontFamily: {
      quinta: ['quinta', defaultTheme.fontFamily.sans],
      axi: ['axi', defaultTheme.fontFamily.sans],
      poppins: ['poppins', defaultTheme.fontFamily.sans]
    },
    extend: {},
  },
  plugins: [],
}
