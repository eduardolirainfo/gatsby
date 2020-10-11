import { createGlobalStyle } from "styled-components"

const GlobalStyles = createGlobalStyle`

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
    font-family: -apple-system,'BlinkMacSystemFont','Segoe UI','Roboto','Helvetica Neue','Arial','Noto Sans',sans-serif,'Apple Color Emoji','Segoe UI Emoji','Segoe UI Symbol','Noto Color Emoji';
    font-weight: normal;
    word-wrap: break-word;
    font-kerning: normal;
    -moz-font-feature-settings: "kern", "liga", "clig", "calt";
    font-feature-settings: "kern", "liga", "clig", "calt";
  }
  img {
    display: block;
  	width: 100%;
  	height: auto;
  }

// pre[class*="language-"] {
//   border-radius: 20px;
//   border: none;
//   position: relative;
//   padding: 100px 70px 70px;
//   z-index: 1;
//   margin: .5em 0;
//   overflow: auto;
// }
// pre[class*="language-"]:before {
//     content: attr(data-title);
//     position: absolute;
//     padding: 2px 10px 3px;
//     font-size: 12px;
//     top: 40px;
//     right: 45px;
//     text-align: right;
//     color: #444;
//     font-weight: 700;
//     letter-spacing: .8px;
//     opacity: .8;
//     text-transform: uppercase;
//     border-radius: 5px;
//     background: #ddd;
// }


 body.dark {
    --texts: rgba(255,255,255,0.8);
    --postColor: #d9d7e0;
    --postDescription: rgba(155,155,155,0.8);
    --highlight: #0bf9c7;
    --mediumBackground: #362066;
    --background: rgba(19,18,23,0.975 );
    --white: #fff;
    --black: #222;
    --borders: #36313d;
    --radiusTheme: 30% 70% 70% 30%/30% 30% 70% 70%;
    --animaTag: morphing 10s infinite;
    --cardHover: none;
    --bgimage: linear-gradient(45deg,rgba(0,0,0,0.25) 25%,transparent 25%,transparent 50%,rgba(0,0,0,0.25) 50%,rgba(0,0,0,0.25) 75%,transparent 75%,transparent);


  }

body.light {
    --postColor:rgba(0, 0, 0, 0.84);
    --postDescription: rgba(0, 0, 0, 0.54);
    --texts: #000;
    --highlight: #8a4baf;
    --mediumBackground: #f5f5f5;
    --background: #fff;
    --white: #fff;
    --black: #222;
    --borders: #dedede;
    --radiusTheme: 50%;
    --animaTag: none;
    --bgimage: none;
    --cardHover: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='4' height='4' viewBox='0 0 4 4'%3E%3Cpath fill='%238e75b6' fill-opacity='0.4' d='M1 3h1v1H1V3zm2-2h1v1H3V1z'%3E%3C/path%3E%3C/svg%3E");
  }




::-webkit-scrollbar {
    width: 12px;
}

::-webkit-scrollbar-track {
	-webkit-box-shadow: inset 0 0 6px rgba(0,0,0,0.3);
	background-color: var(--background);
	border-radius: 10px;
}

::-webkit-scrollbar-thumb {
	border-radius: 10px;
	background-image: -webkit-gradient(linear,
									   left bottom,
									   left top,
									   color-stop(0.44, rgba(177,122,204,0.5)),
									   color-stop(0.72, rgb(75,36,94)),
									   color-stop(0.86, rgb(30,14,37)));
}

`
export default GlobalStyles
