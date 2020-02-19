import "lazysizes"
// import "gatsby-syntax-highlights-dracula"
require("prismjs/themes/prism-solarizedlight.css")
require("prismjs/plugins/line-numbers/prism-line-numbers.css")
require("prismjs/plugins/command-line/prism-command-line.css")

if (typeof window !== "undefined") {
  // eslint-disable-next-line global-require
  require("smooth-scroll")('a[href*="#"]', {
    speed: 200,
    offset: 66, // size of the header (sidebar) when mobile
  })
}
