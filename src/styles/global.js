import { createGlobalStyle } from "styled-components"

const GlobalStyles = createGlobalStyle`
  /* http://meyerweb.com/eric/tools/css/reset/
   v2.0 | 20110126
   License: none (public domain)
  */
  html, body, div, span, applet, object, iframe,
  h1, h2, h3, h4, h5, h6, p, blockquote, pre,
  a, abbr, acronym, address, big, cite, code,
  del, dfn, em, img, ins, kbd, q, s, samp,
  small, strike, strong, sub, sup, tt, var,
  b, u, i, center,
  dl, dt, dd, ol, ul, li,
  fieldset, form, label, legend,
  table, caption, tbody, tfoot, thead, tr, th, td,
  article, aside, canvas, details, embed,
  figure, figcaption, footer, header, hgroup,
  menu, nav, output, ruby, section, summary,
  time, mark, audio, video {
    margin: 0;
    padding: 0;
    border: 0;
    font-size: 100%;
    font: inherit;
    vertical-align: baseline;
  }
  /* HTML5 display-role reset for older browsers */
  article, aside, details, figcaption, figure,
  footer, header, hgroup, menu, nav, section {
    display: block;
  }
  body {
    line-height: 1;
  }
  ol, ul {
    list-style: none;
  }
  blockquote, q {
    quotes: none;
  }
  blockquote:before, blockquote:after,
  q:before, q:after {
    content: '';
    content: none;
  }
  table {
    border-collapse: collapse;
    border-spacing: 0;
  }
  * {
    box-sizing: border-box;
  }
  body {
    background: #16202c;
    line-height: 1;
    font-size: 100%;
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
  }
  img {
    display: block;
  	width: 100%;
  	height: auto;
  }
  /* body.dark {
    --texts: #d4d4dc;
    --postColor: #fff;
    --highlight: #a39274;
    --mediumBackground:#100e17;
    --background:  #200526 ;
    --white: #fff;
    --black: #222;
     pre[class*="language-"]{
      padding:16px;
    }
  }

body.dark  pre[class*="language-"], body.dark  code[class*="language-"] {
    background:none !important;
}
body.light {
    --postColor:#111;
    --texts: #555555;
    --highlight: #00bfed;
    --mediumBackground: #f5f5f5;
    --background: #fff;
    --white: #fff;
    --black: #222;
  }
body.light  pre[class*="language-"]{
    padding:16px;
} */
.command-line-prompt > span:before {
  color: #999;
  content: " ";
  display: block;
  padding-right: 0.8em;
}

/* Prompt for all users */
.command-line-prompt > span[data-user]:before {
  content: "[" attr(data-user) "@" attr(data-host) "] $";
}

/* Prompt for root */
.command-line-prompt > span[data-user="root"]:before {
  content: "[" attr(data-user) "@" attr(data-host) "] #";
}

.command-line-prompt > span[data-prompt]:before {
  content: attr(data-prompt);
}

  body.dark {
    --texts: #fff;
    --postColor: #fff;
    --highlight: #DEB992;
    --mediumBackground:#27293d;
    --background: #1e1e2f;
    --white: #fff;
    --black: #222;
    --borders: #343855;
  }

body.dark  pre[class*="language-"], body.dark  code[class*="language-"] {
    background:none !important;
}
body.light {
    --postColor:#111;
    --texts: #555555;
    --highlight: #00bfed;
    --mediumBackground: #f5f5f5;
    --background: #fff;
    --white: #fff;
    --black: #222;
    --borders: #dedede;
  }
body.light  pre[class*="language-"]{
    padding:16px;
}
html::-webkit-scrollbar-thumb {
    background: -webkit-gradient(linear,left top,left bottom,from(#344675),to(#263148));
    /* background: linear-gradient(180deg,#200526,#07737a); */
    background-image: linear-gradient(to bottom left,#344675,#263148,#344675);
    border-radius: 30px;
    transition:all .15s ease;
    box-shadow: inset 2px 2px 2px hsla(0,0%,100%,.25), inset -2px -2px 2px rgba(0,0,0,.25);
}
html::-webkit-scrollbar-track {
  background: linear-gradient(90deg,#201c29,#201c29 1px,#100e17 0,#100e17);
}
html::-webkit-scrollbar {
    width: 1rem;
    height: 1rem;
}

 
`
export default GlobalStyles
