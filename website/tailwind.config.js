module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors : {
        ourTheme : {
          secondary : "#0F1926",
          primary: {
            100 : "#1BDDF2",
            200 : "#1BCBF2"
          },
          red : "#BF0F0F",
          offWhite : "#F0F1F2"
        }
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
