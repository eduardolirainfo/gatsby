import { createGlobalStyle } from 'styled-components'

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
    background: var(--background);
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
  body.dark {
    --fontWeightRegular: 300;
    --primary-light: #8abdff;
    --primary: #6d5dfc;
    --primary-dark: #5b0eeb;
    --white: #FFFFFF;
    --greyLight-1: #E4EBF5;
    --greyLight-2: #c8d0e7;
    --greyLight-3: #bec8e4;
    --greyDark: #9baacf;
    --bgMenu1: rgba(255, 255, 255, 0.1);
    --bgMenu2: rgba(255, 255, 255, 0.05);
    --bgMenu3: rgba(0, 0, 0, 0.3);
    --bgMenu4:rgba(255, 255, 255, 0.15);
    --bgMenuHover: linear-gradient( 45deg, #95f7d0, #63b9be, #887dc5, #d478ff, #ff94e7, #fec6c0, #fdff94, #b6f9bd );
    --texts: rgba(255,255,255,0.8);
    --textsMetaDate: #594a9d;
    --postColor: #fff;
    --postDescription: #8b9493;
    --highlight:#02d7f2;
    --mediumBackground: #161625;
    --background: #1e1935;
    --white: #fff;
    --black: #050A0E;
    --borders: #36313d;
    --bordersMenuBar: #fed33f;
    --cyber: #fd0130;
    --titlePostList: rgba(255, 255, 255, 0.85);
    --cyberHl: rgba(253, 1, 48, .8);
    --postTitle: #f8ef00;
    --highlightText: 0 0 2px #02d7f2;
    --bgInput : #391419;
    --borderInputColor: #9c3230;
    --borderInput: 0px 0px 0px 1px #9c3230 inset;
    --boxPostItem : 0 8px 17px 0 rgba(0, 0, 0, 0.2),
      0 6px 20px 0 rgba(0, 0, 0, 0.19);
    --colorMenuItem: #fed33f;
    --bgMenuBar: #1e181e;
    --animationText: textShadow 1.6s infinite;
     --textShadowConvert: -9px -6px 40px currentColor;
    --bordersSidebar: var(--highlight);
    --borderCard : solid 1px;
     --catHl: 0 0 5px;
    --radiusTheme: 30% 70% 70% 30%/30% 30% 70% 70%;
     --linearPre: linear-gradient( 60deg, var(--background) 0%, var(--mediumBackground) 180% );
    --cardHover: none;
    --bgimage: linear-gradient(45deg,rgba(0,0,0,0.25) 25%,transparent 25%,transparent 50%,rgba(0,0,0,0.25) 50%,rgba(0,0,0,0.25) 75%,transparent 75%,transparent);
    --gradienteLink: linear-gradient(-90deg, yellow, orange);
    --perspective: perspective(200px) rotateX(6deg) rotateY(-6deg);
  }

body.light {
    --fontWeightRegular: 400;
    --primary-light: #8abdff;
    --primary: #6d5dfc;
    --primary-dark: #5b0eeb;
    --white: #FFFFFF;
    --greyLight-1: #E4EBF5;
    --greyLight-2: #c8d0e7;
    --greyLight-3: #bec8e4;
    --greyDark: #9baacf;
    --bgMenu1: rgba(255, 255, 255, 0.1);
    --bgMenu2: rgba(255, 255, 255, 0.05);
    --bgMenu3: rgba(0, 0, 0, 0.02);
    --bgMenu4: rgba(255, 255, 255, 0.15);
    --bgMenuHover: linear-gradient( 45deg, #95f7d0, #63b9be, #887dc5, #d478ff, #ff94e7, #fec6c0, #fdff94, #b6f9bd );
    --postColor:rgba(0, 0, 0, 0.84);
    --postDescription: rgba(0, 0, 0, 0.54);
    --texts: #000;
    --textsMetaDate: #000;
    --postTitle: hsl(255deg, 85%, 30%);
    --highlight: hsl(333deg, 100%, 45%);
    --mediumBackground: #f5f5f5;
    --background: #fff;
    --white: #fff;
    --black: #050A0E;
    --borders: #dedede;
    --bordersMenuBar: #dedede;
    --radiusTheme: 50%;
    --animaTag: none;
    --bgimage: none;
    --cyber : #000;
    --titlePostList: #070336;
    --cyberHl: rgba(255, 255, 255, .8);
    --highlightText: none;
     --bgInput : transparent;
     --borderInputColor: #dedede;
     --borderInput:  0px 0px 0px 0px #dedede;
     --colorMenuItem: rgba(0, 0, 0, 0.84);
     --bgMenuBar: #f5f5f5;
     --textShadowConvert: none;
     --bordersSidebar: var(--borders);
     --boxPostItem : 0 8px 17px 0 rgba(0, 0, 0, 0.2),
      0 6px 20px 0 rgba(0, 0, 0, 0.19);
    --animationText: none;
     --borderCard : solid 0px;
    --catHl: 0 0 2px;
    --linearPre: linear-gradient( 45deg,var(--postColor) 0%,var(--postDescription) 30% );
    --cardHover: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='4' height='4' viewBox='0 0 4 4'%3E%3Cpath fill='%238e75b6' fill-opacity='0.4' d='M1 3h1v1H1V3zm2-2h1v1H3V1z'%3E%3C/path%3E%3C/svg%3E");
    --gradienteLink: linear-gradient( 45deg, #95f7d0, #63b9be, #887dc5, #d478ff, #ff94e7, #fec6c0, #fdff94, #b6f9bd );
    --perspective: none;
  }

 :not(pre) > code[class*="language-"], pre[class*="language-"] {
     background-image: var(--linearPre) !important;
 }
.gatsby-highlight{
  background-image: transparent !important
}
pre[class*="language-"] {
    border-top: var(--highlight) 1px solid;
    border-bottom: var(--highlight) 1px solid;
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
}`
export default GlobalStyles
