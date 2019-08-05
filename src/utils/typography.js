import Typography from "typography"

const typography = new Typography({
  baseFontSize: "14px",
  baseLineHeight: 1.25,
  googleFonts: [
    {
      name: "Barlow",
      styles: ["400", "700"],
    },
  ],
  headerFontFamily: ["Barlow", "Open Sans", "Roboto", "Sans Serif"],
  bodyFontFamily: ["Barlow", "Open Sans", "Roboto", "Georgia"],
})

export default typography
