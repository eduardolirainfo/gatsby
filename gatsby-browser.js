import "lazysizes"
import "gatsby-syntax-highlights-dracula"

if (typeof window !== "undefined") {
  // eslint-disable-next-line global-require
  require("smooth-scroll")('a[href*="#"]', {
    speed: 200,
    offset: 66, // size of the header (sidebar) when mobile
  })
}
