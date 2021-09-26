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
    // --highlight: #0bf9c7;
    // --highlight:#00F0FF;
    --highlight:#02d7f2;
    --mediumBackground: #362066;
    --background: rgba(19,18,23,0.975 );
    --white: #fff;
    --black: #050A0E;
    --borders: #36313d;
    --bordersMenuBar: #fed33f;
    --cyber: #fd0130;
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
    --animationBox: boxShadow 1.6s infinite;
    --textShadowConvert: -9px -6px 40px currentColor;
    --bordersSidebar: var(--highlight);
    --borderCard : solid 1px;
    --bgSidebar: linear-gradient(183deg, rgba(141,35,46,0.5) 1%, rgba(141,35,46,0) 60%),
              linear-gradient(250deg, rgba(141,35,46,0) 21%, rgba(141,35,46,0.2) 20%, rgba(11,35,47,0.2) 50%),
              linear-gradient(250deg, rgba(141,35,46,0) 23%, rgba(141,35,46,0.2) 20%, rgba(11,35,47,0.2) 50%),
              linear-gradient(250deg, rgba(141,35,46,0) 25%, rgba(141,35,46,0.2) 20%, rgba(11,35,47,0.2) 50%),
              repeating-linear-gradient(179deg, rgba(255,255,255,0.1), rgba(255,255,255,0.1) 3px, rgba(0,0,0,0.1) 3px, rgba(0,0,0,0.1) 5px);
     --catHl: 0 0 5px;
    --radiusTheme: 30% 70% 70% 30%/30% 30% 70% 70%;
    --animaTag: morphing 3s infinite;
    --linearPre: linear-gradient( 60deg, var(--background) 0%, var(--mediumBackground) 180% );
    --cardHover: none;
    --bgimage: linear-gradient(45deg,rgba(0,0,0,0.25) 25%,transparent 25%,transparent 50%,rgba(0,0,0,0.25) 50%,rgba(0,0,0,0.25) 75%,transparent 75%,transparent);
    --gradienteLink: linear-gradient(-90deg, yellow, orange)


  }

body.light {
    --postColor:rgba(0, 0, 0, 0.84);
    --postDescription: rgba(0, 0, 0, 0.54);
    --texts: #000;
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
    --animationBox: none;
    --borderCard : solid 0px;
    --bgSidebar: linear-gradient(183deg, rgba(255,255,255,0.5) 1%, rgba(255,255,255,0) 60%),
              linear-gradient(250deg, rgba(255,255,255,0) 21%, rgba(255,255,255,0.2) 20%, rgba(255,255,255,0.2) 50%),
              linear-gradient(250deg, rgba(255,255,255,0) 23%, rgba(255,255,255,0.2) 20%, rgba(255,255,255,0.2) 50%),
              linear-gradient(250deg, rgba(255,255,255,0) 25%, rgba(255,255,255,0.2) 20%, rgba(255,255,255,0.2) 50%),
              repeating-linear-gradient(179deg, rgba(255,255,255,0.1), rgba(255,255,255,0.1) 3px, rgba(0,0,0,0.1) 3px, rgba(0,0,0,0.1) 5px);
    --catHl: 0 0 2px;
    linear-gradient( 45deg,var(--postColor) 0%,var(--postDescription) 30% );
    --cardHover: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='4' height='4' viewBox='0 0 4 4'%3E%3Cpath fill='%238e75b6' fill-opacity='0.4' d='M1 3h1v1H1V3zm2-2h1v1H3V1z'%3E%3C/path%3E%3C/svg%3E");
    --gradienteLink: linear-gradient( 45deg, #95f7d0, #63b9be, #887dc5, #d478ff, #ff94e7, #fec6c0, #fdff94, #b6f9bd );

  }

:not(pre) > code[class*="language-"], pre[class*="language-"] {
    background-image: var(--linearPre);
}

pre[class*="language-"] {
    border-top: var(--highlight) 1px solid;
    border-bottom: var(--highlight) 1px solid;
}

@keyframes animateGradient {
  0% {
    background-position: 0% 50%;
  }
  50% {
    background-position: 100% 50%;
  }
  100% {
    background-position: 0% 50%;
  }
}



@keyframes textShadow {
  0% {
    text-shadow: 0.4389924193300864px 0 1px rgba(0,30,255,0.5), -0.4389924193300864px 0 1px rgba(255,0,80,0.3), 0 0 3px;
  }
  5% {
    text-shadow: 2.7928974010788217px 0 1px rgba(0,30,255,0.5), -2.7928974010788217px 0 1px rgba(255,0,80,0.3), 0 0 3px;
  }
  10% {
    text-shadow: 0.02956275843481219px 0 1px rgba(0,30,255,0.5), -0.02956275843481219px 0 1px rgba(255,0,80,0.3), 0 0 3px;
  }
  15% {
    text-shadow: 0.40218538552878136px 0 1px rgba(0,30,255,0.5), -0.40218538552878136px 0 1px rgba(255,0,80,0.3), 0 0 3px;
  }
  20% {
    text-shadow: 3.4794037899852017px 0 1px rgba(0,30,255,0.5), -3.4794037899852017px 0 1px rgba(255,0,80,0.3), 0 0 3px;
  }
  25% {
    text-shadow: 1.6125630401149584px 0 1px rgba(0,30,255,0.5), -1.6125630401149584px 0 1px rgba(255,0,80,0.3), 0 0 3px;
  }
  30% {
    text-shadow: 0.7015590085143956px 0 1px rgba(0,30,255,0.5), -0.7015590085143956px 0 1px rgba(255,0,80,0.3), 0 0 3px;
  }
  35% {
    text-shadow: 3.896914047650351px 0 1px rgba(0,30,255,0.5), -3.896914047650351px 0 1px rgba(255,0,80,0.3), 0 0 3px;
  }
  40% {
    text-shadow: 3.870905614848819px 0 1px rgba(0,30,255,0.5), -3.870905614848819px 0 1px rgba(255,0,80,0.3), 0 0 3px;
  }
  45% {
    text-shadow: 2.231056963361899px 0 1px rgba(0,30,255,0.5), -2.231056963361899px 0 1px rgba(255,0,80,0.3), 0 0 3px;
  }
  50% {
    text-shadow: 0.08084290417898504px 0 1px rgba(0,30,255,0.5), -0.08084290417898504px 0 1px rgba(255,0,80,0.3), 0 0 3px;
  }
  55% {
    text-shadow: 2.3758461067427543px 0 1px rgba(0,30,255,0.5), -2.3758461067427543px 0 1px rgba(255,0,80,0.3), 0 0 3px;
  }
  60% {
    text-shadow: 2.202193051050636px 0 1px rgba(0,30,255,0.5), -2.202193051050636px 0 1px rgba(255,0,80,0.3), 0 0 3px;
  }
  65% {
    text-shadow: 2.8638780614874975px 0 1px rgba(0,30,255,0.5), -2.8638780614874975px 0 1px rgba(255,0,80,0.3), 0 0 3px;
  }
  70% {
    text-shadow: 0.48874025155497314px 0 1px rgba(0,30,255,0.5), -0.48874025155497314px 0 1px rgba(255,0,80,0.3), 0 0 3px;
  }
  75% {
    text-shadow: 1.8948491305757957px 0 1px rgba(0,30,255,0.5), -1.8948491305757957px 0 1px rgba(255,0,80,0.3), 0 0 3px;
  }
  80% {
    text-shadow: 0.0833037308038857px 0 1px rgba(0,30,255,0.5), -0.0833037308038857px 0 1px rgba(255,0,80,0.3), 0 0 3px;
  }
  85% {
    text-shadow: 0.09769827255241735px 0 1px rgba(0,30,255,0.5), -0.09769827255241735px 0 1px rgba(255,0,80,0.3), 0 0 3px;
  }
  90% {
    text-shadow: 3.443339761481782px 0 1px rgba(0,30,255,0.5), -3.443339761481782px 0 1px rgba(255,0,80,0.3), 0 0 3px;
  }
  95% {
    text-shadow: 2.1841838852799786px 0 1px rgba(0,30,255,0.5), -2.1841838852799786px 0 1px rgba(255,0,80,0.3), 0 0 3px;
  }
  100% {
    text-shadow: 2.6208764473832513px 0 1px rgba(0,30,255,0.5), -2.6208764473832513px 0 1px rgba(255,0,80,0.3), 0 0 3px;
  }
}

@keyframes boxShadow {
  0% {
    box-shadow: 0.4389924193300864px 0 1px rgba(0,30,255,0.5), -0.4389924193300864px 0 1px rgba(255,0,80,0.3), 0 0 3px;
  }
  5% {
    box-shadow: 2.7928974010788217px 0 1px rgba(0,30,255,0.5), -2.7928974010788217px 0 1px rgba(255,0,80,0.3), 0 0 3px;
  }
  10% {
    box-shadow: 0.02956275843481219px 0 1px rgba(0,30,255,0.5), -0.02956275843481219px 0 1px rgba(255,0,80,0.3), 0 0 3px;
  }
  15% {
    box-shadow: 0.40218538552878136px 0 1px rgba(0,30,255,0.5), -0.40218538552878136px 0 1px rgba(255,0,80,0.3), 0 0 3px;
  }
  20% {
    box-shadow: 3.4794037899852017px 0 1px rgba(0,30,255,0.5), -3.4794037899852017px 0 1px rgba(255,0,80,0.3), 0 0 3px;
  }
  25% {
    box-shadow: 1.6125630401149584px 0 1px rgba(0,30,255,0.5), -1.6125630401149584px 0 1px rgba(255,0,80,0.3), 0 0 3px;
  }
  30% {
    box-shadow: 0.7015590085143956px 0 1px rgba(0,30,255,0.5), -0.7015590085143956px 0 1px rgba(255,0,80,0.3), 0 0 3px;
  }
  35% {
    box-shadow: 3.896914047650351px 0 1px rgba(0,30,255,0.5), -3.896914047650351px 0 1px rgba(255,0,80,0.3), 0 0 3px;
  }
  40% {
    box-shadow: 3.870905614848819px 0 1px rgba(0,30,255,0.5), -3.870905614848819px 0 1px rgba(255,0,80,0.3), 0 0 3px;
  }
  45% {
    box-shadow: 2.231056963361899px 0 1px rgba(0,30,255,0.5), -2.231056963361899px 0 1px rgba(255,0,80,0.3), 0 0 3px;
  }
  50% {
    box-shadow: 0.08084290417898504px 0 1px rgba(0,30,255,0.5), -0.08084290417898504px 0 1px rgba(255,0,80,0.3), 0 0 3px;
  }
  55% {
    box-shadow: 2.3758461067427543px 0 1px rgba(0,30,255,0.5), -2.3758461067427543px 0 1px rgba(255,0,80,0.3), 0 0 3px;
  }
  60% {
    box-shadow: 2.202193051050636px 0 1px rgba(0,30,255,0.5), -2.202193051050636px 0 1px rgba(255,0,80,0.3), 0 0 3px;
  }
  65% {
    box-shadow: 2.8638780614874975px 0 1px rgba(0,30,255,0.5), -2.8638780614874975px 0 1px rgba(255,0,80,0.3), 0 0 3px;
  }
  70% {
    box-shadow: 0.48874025155497314px 0 1px rgba(0,30,255,0.5), -0.48874025155497314px 0 1px rgba(255,0,80,0.3), 0 0 3px;
  }
  75% {
    box-shadow: 1.8948491305757957px 0 1px rgba(0,30,255,0.5), -1.8948491305757957px 0 1px rgba(255,0,80,0.3), 0 0 3px;
  }
  80% {
    box-shadow: 0.0833037308038857px 0 1px rgba(0,30,255,0.5), -0.0833037308038857px 0 1px rgba(255,0,80,0.3), 0 0 3px;
  }
  85% {
    box-shadow: 0.09769827255241735px 0 1px rgba(0,30,255,0.5), -0.09769827255241735px 0 1px rgba(255,0,80,0.3), 0 0 3px;
  }
  90% {
    box-shadow: 3.443339761481782px 0 1px rgba(0,30,255,0.5), -3.443339761481782px 0 1px rgba(255,0,80,0.3), 0 0 3px;
  }
  95% {
    box-shadow: 2.1841838852799786px 0 1px rgba(0,30,255,0.5), -2.1841838852799786px 0 1px rgba(255,0,80,0.3), 0 0 3px;
  }
  100% {
    box-shadow: 2.6208764473832513px 0 1px rgba(0,30,255,0.5), -2.6208764473832513px 0 1px rgba(255,0,80,0.3), 0 0 3px;
  }
}
// ::-webkit-scrollbar {
//     width: 12px;
// }

// ::-webkit-scrollbar-track {
// 	-webkit-box-shadow: inset 0 0 6px rgba(0,0,0,0.3);
// 	background-color: var(--background);
// 	border-radius: 10px;
// }

// ::-webkit-scrollbar-thumb {
// 	border-radius: 10px;
// 	background-image: -webkit-gradient(linear,
// 									   left bottom,
// 									   left top,
// 									   color-stop(0.44, rgba(177,122,204,0.5)),
// 									   color-stop(0.72, rgb(75,36,94)),
// 									   color-stop(0.86, rgb(30,14,37)));
// }

`
export default GlobalStyles
