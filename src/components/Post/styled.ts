import styled from 'styled-components'
import media from 'styled-media-query'
import AniLink from 'gatsby-plugin-transition-link/AniLink'
import transitions from '../../styles/transitions'

export const MainContent = styled.section`
  margin: 0px 15.60rem;
  max-width: 48rem;
  padding: 1rem;

  &::before{
    content: "";
    position: absolute;
    left: 0;
    right: 0;
    bottom: 0;
    height: 10px;
    background-size: 20px 40px;
    background-image: radial-gradient(var(--borderInputColor), var(--background), var(--background));
  }
  &::after{
    content: "";
    position: absolute;
    left: 0;
    right: 0;
    bottom: 0;
    height: 15px;
    background-size: 40px 40px;
    background-image: radial-gradient(var(--borderInputColor), var(--background), var(--background));
  }

  ${media.lessThan('large')`
    padding: 2rem 0;
    max-width: 100%;
  `}

  p,
  h1,
  h2,
  h3,
  h4,
  ul,
  ol,
  .tags,
  iframe,
  .button-post {
    color: var(--postColor);
    font-size: 1.3rem;
    font-weight: 400;
    line-height: 1.9;
    letter-spacing: 0.069rem;
    padding: 0 1.4rem;

    ${media.lessThan('large')`
      padding: 0 1rem;
      word-break: break-word;
    `}
  }

  p {
    margin: 0 auto 1.6rem;
  }

  h1,
  h2,
  h3,
  h4,
  h5 {
    font-family: "Poppins", Arial, sans-serif;
    margin: 2.4rem auto 1rem;
  }

  ul,
  ol {
    list-style: none;
    padding-left: 2.5rem;
    margin: 0 auto 1.6rem;
  }

  li {
    padding: 0.7rem 0;

    & > ul {
      margin-bottom: 0;
    }
  }

  p,
  li {
    code {
      word-wrap: break-word;
    }
  }

  img {
    display: block;
    max-width: 100%;
  }

  iframe {
    padding: 0 1.6rem 1.6rem;
    width: 100%;

    ${media.lessThan('large')`
      padding: 0 1rem;
    `}
  }

  blockquote {
    font-family: Kalam;
    border-width: 5px 0;
    border-style: solid;
    border-color: var(--highlight);
    padding: 1.5em 0 0.5em;
    margin: 1.5em 0;
    position: relative;
    box-shadow: 0em 1em 2em -2em var(--highlight);
  }

  blockquote:before {
    content: "\\201C";
    position: absolute;
    top: -0.1em;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 3rem;
    height: 2rem;
    background: var(--background);
    color: var(--highlight);
    font: 6em/1.08em "PT Sans", sans-serif;
    text-align: center;
    /* box-shadow: inset -5px 5px 0px 0px var(--highlight); */
    border-radius: 10%;
  }

  hr {
    border: 1px solid var(--borders);
    margin: 3rem auto;
  }

  #twitter-widget-0,
  .instagram-media,
  .twitter-tweet {
    margin: 20px auto !important;
  }

  h1,
  h2,
  h3,
  h4,
  h5 {
    font-weight: 800;
    letter-spacing: 0.069rem;
    line-height: 1.4;
    font-family: -apple-system, "BlinkMacSystemFont", "Segoe UI", "Roboto",
      "Helvetica Neue", "Arial", "Noto Sans", sans-serif, "Apple Color Emoji",
      "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji";
  }

  h1 {
    font-size: 2.8rem;

    ${media.lessThan('large')`
      font-size: 1.875rem;
    `}
  }

  h2 {
    font-size: 2.1rem;

    ${media.lessThan('large')`
      font-size: 1.375rem;
    `}
  }

  h3 {
    font-size: 1.6rem;

    ${media.lessThan('large')`
      font-size: 1.125rem;
    `}
  }

  h4 {
    font-size: 1.4rem;
  }

  h5 {
    font-size: 1.2rem;
  }

  strong {
    font-weight: 800;
  }

  .gatsby-resp-image-background-image {
    z-index: 2;
    opacity: 1 !important;
  }

  .gatsby-resp-image-image {
    box-shadow: none !important;
    transition: opacity 0.2s;

    &.lazyload {
      opacity: 0;
    }

    &.lazyloaded {
      opacity: 1;
      z-index: 3;
    }
  }

  .gatsby-highlight {
    padding: 0 1.6rem 1.6rem;

    ${media.lessThan('large')`
      padding: 0;
    `}
  }

  a {
    /* animation: var(--animationText); */
    border-bottom: 1px dashed var(--highlight);
    color: var(--highlight);
    text-decoration: none;
    transition: ${transitions.ALL};
    font-family: "Kalam", Arial, sans-serif;
    svg {
      color: var(--postColor); */
    }
    &.anchor{
      color: var(--highlight);
      fill: var(--highlight);
      border: 0;
      &:hover{
        border: 0
        }
    }
    &:hover {
      opacity: 0.8;
      border-bottom: 3mm ridge var(--highlight);
      }
  }

  .instagram-media {
    margin: 1rem auto !important;
  }
`

export const PostHeader = styled.header`
  color: var(--postColor);
  margin: 0px 15.60rem;
  max-width: 48rem;
  padding: 0 1rem;
  transform-style: preserve-3d;

  ${media.lessThan('large')`
    padding: 2rem 0 0;
    max-width: 100%;
  `}
`

export const PostTitle = styled.h1`
  font-style: normal;
  padding: 0 1.4rem;
  margin: 1rem auto;
  color: var(--postTitle) !important;
  background: linear-gradient(
    45deg,
    var(--postTitle) 32.5%,
    var(--highlight) 50.5%
  );
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  font-weight: 900;
  font-size: calc(1.5rem + 3vw);
  letter-spacing: -0.2rem;
  line-height: 1.35;
  transition: 1s ease-in-out;
  /* transform: var(--perspective); */
  &:hover {
    
  /* text-shadow: 1px 1px var(--textsMetaDate), 2px 2px var(--textsMetaDate), 3px 3px var(--textsMetaDate), 4px 4px var(--textsMetaDate), 5px 5px var(--textsMetaDate), 6px 6px var(--textsMetaDate), 7px 7px var(--textsMetaDate), 8px 8px var(--textsMetaDate), 9px 9px var(--textsMetaDate), 10px 10px var(--textsMetaDate), 11px 11px var(--textsMetaDate), 12px 12px var(--textsMetaDate), 13px 13px var(--textsMetaDate), 14px 14px var(--textsMetaDate), 15px 15px var(--textsMetaDate), 16px 16px var(--textsMetaDate), 17px 17px var(--textsMetaDate), 18px 18px var(--textsMetaDate), 19px 19px rgba(41, 63, 15, 0.24), 20px 20px rgba(41, 63, 15, 0.2), 21px 21px var(--textsMetaDate), 22px 22px var(--textsMetaDate), 23px 23px rgba(41, 63, 15, 0.08), 24px 24px rgba(41, 63, 15, 0.04), 25px 25px rgba(41, 63, 15, 0), 26px 26px rgba(41, 63, 15, 0), 27px 27px rgba(41, 63, 15, 0), 28px 28px rgba(41, 63, 15, 0), 29px 29px rgba(41, 63, 15, 0), 30px 30px rgba(41, 63, 15, 0), 31px 31px rgba(41, 63, 15, 0), 32px 32px rgba(41, 63, 15, 0), 33px 33px rgba(41, 63, 15, 0), 34px 34px rgba(41, 63, 15, 0), 35px 35px rgba(41, 63, 15, 0), 36px 36px rgba(41, 63, 15, 0), 37px 37px rgba(41, 63, 15, 0), 38px 38px rgba(41, 63, 15, 0), 39px 39px rgba(41, 63, 15, 0), 40px 40px rgba(41, 63, 15, 0); */
  }


  ${media.lessThan('large')`
   font-size: calc(1.5rem + 3vw);
    line-height: 1.5;
    padding: 0 1rem;
    letter-spacing: 0.069rem;
  `};
`

export const PostTitleCat = styled.h1`
  padding: 0;
  margin: 0rem 0rem 2rem;
  color: var(--texts) !important;
  text-transform: uppercase;
  -webkit-background-clip: text;
  background-clip: text;
  background-image: radial-gradient(
    100% 100% at 100% 0%,
    #5adaff 0%,
    #5468ff 100%
  );
  background-size: 400% 400%;
  animation: animateGradient 5s ease infinite;
 
  ${media.lessThan('large')`
    font-size: 1.8rem;
    line-height: 1.1;
    padding: 0 1rem;
  `};
`

export const PostWrapper = styled.section`
  align-items: center;
  border-bottom: 1px solid var(--borders);
  display: flex;
  padding: 2rem 3rem;
  width: 100%;
  transition: ${transitions.ALL};

  &:not(.disableCard) {
    body#card & {
      padding: 2rem 1rem;
      flex-direction: column;
      justify-content: center;
    }
  }
  ${media.lessThan('large')`
    align-items: flex-start;
    flex-direction: column;
    padding: 2rem 1rem;
  `}
`
export const PostLink = styled(AniLink)`
  color: var(--texts);
  display: flex;
  text-decoration: none;
  transition: ${transitions.COLOR};
  body#card & {
    background-color: var(--background);
  }
  &:hover {
    color: var(--highlight);
  }
`

export const PostDescription = styled.h3`
  font-weight: 300;
  font-family: Kalam;
  font-weight: 300;
  font-size: 1.5rem;
  color: var(--postDescription);
  padding: 0 1.4rem;

  ${media.lessThan('large')`
    font-size: 1.6rem;
    line-height: 1.3;
    padding: 0 1rem;
  `}
`
export const PostCategories = styled(AniLink)`
  font-size: 1.1rem;
  font-weight: bold;
  padding: 0rem 0.2rem 0 1.4rem;
  float: left;
  transform: uppercase;
  display: flex;
  transition: ${transitions.COLOR};
  text-decoration: none;
  color: transparent;
  -webkit-background-clip: text;
  background-clip: text;
  background-image: var(--gradienteLink);
  background-size: 400% 400%;
  animation: animateGradient 5s ease infinite;
  font-family: "Kalam", Arial, sans-serif;
  &:hover {
    color: #8a4baf;
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
`

export const BackButton = styled(AniLink)`
    color: var(--textsMetaDate);
    display: flex;
    text-decoration: none;
    margin: 0px 0px 1.5rem 1.5rem;
    transition: ${transitions.COLOR};
    &:hover{
      color: #8a4baf;
    }
`

export const LinkCat = styled(AniLink)`
  text-decoration: none;
  list-style: none;
  -webkit-align-items: center;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  padding: 2rem 3rem;
  width: 100%;
  transition: ${transitions.ALL};
  color: var(--highlight);
  font-size: 1.7rem;
`

export const PostDate = styled.p`
  font-size: 1.1rem;
  font-weight: 100;
  padding: 0 1.4rem;
  color: var(--postDescription);
  font-family: "Kalam", Arial, sans-serif;
  ${media.lessThan('large')`
    padding: 0 1rem;
  `}
`

export const ItemTags = styled.ul`
  list-style: none;
  margin: 0px 15.60rem;
  overflow: hidden;
  padding: 0 1rem;
  display: flex;
  flex-direction: row;
  max-width: 48rem;
  /* transition: ${transitions.COLOR}; */
  /*
  & li {
      float: left;
 }*/
`

export const ListTag = styled.li`
  padding: 0.65rem 0rem 0.65rem 0rem;
  display: inline flow-root list-item;
`
export const TagLink = styled(AniLink)`
  color: var(--postColor);
  display: inline-block;
  line-height: 26px;
  /* padding: 0 1rem 0 1rem; */
  position: relative;
  margin: 0 10px 10px 0;
  text-decoration: none;
  transition: ${transitions.DEFAULT};
  border-bottom: none !important;
`
export const TagPost = styled(AniLink)`
  color: var(--postColor);
  display: inline-block;
  line-height: 26px;
  padding: 0 1rem 0 1rem;
  position: relative;
  margin: 0 10px 10px 0;
  text-decoration: none;
  transition: ${transitions.DEFAULT};
`
export const BtnLabel = styled.span`
  height: 1rem;
  font-size: 0.65rem;
  position: absolute;
  bottom: -4px;
  right: 8%;
  padding: 0 5px;
  background-color: var(--background);
  z-index: 3;
`
export const BtnGlitch = styled.span`
  display: none;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: var(--postTitle);
  filter: drop-shadow(-2px 3px #67e3f3) drop-shadow(-1px -3px #02d8f3)
    drop-shadow(2px 1px #02d8f3);
`
export const BtnContent = styled.span`
  font-family: "Kalam", Arial, sans-serif;
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  top: 2px;
  left: 2px;
  right: 2px;
  bottom: 2px;
  background-color: var(--postTitle);
  clip-path: polygon(92% 0, 100% 25%, 100% 100%, 8% 100%, 0% 75%, 0 0);
  color: var(--mediumBackground);
  border-right: 0.3rem solid var(--highlight);
  transition: ${transitions.ALL};
  &:hover{
    transform: scale(0.96);
  }
`
export const Button = styled.button`
  width: 10rem;
  height: 2.45rem;
  border: 0;
  outline: none;
  background-color: transparent;
  cursor: pointer;
  position: relative;
  font-size: 0.85rem;
  text-transform: uppercase;
  color: var(--texts);
  clip-path: polygon(92% 0, 100% 25%, 100% 100%, 8% 100%, 0% 75%, 0 0);

  &:hover ${BtnGlitch},
  &:hover ${BtnContent}::after,
  &:focus ${BtnGlitch},
  &:focus ${BtnContent}::after {
    display: block;
    animation: glitch-animation 2s linear 0s infinite;
  }

  /* secret trick */
  @keyframes glitch-animation {
    0% {
      opacity: 1;
      transform: translateZ(0);
      clip-path: polygon(0 2%, 100% 2%, 100% 5%, 0 5%);
    }

    2% {
      clip-path: polygon(0 78%, 100% 78%, 100% 100%, 0 100%);
      transform: translate(-5px);
    }

    6% {
      clip-path: polygon(0 78%, 100% 78%, 100% 100%, 0 100%);
      transform: translate(5px);
    }

    8% {
      clip-path: polygon(0 78%, 100% 78%, 100% 100%, 0 100%);
      transform: translate(-5px);
    }

    9% {
      clip-path: polygon(0 78%, 100% 78%, 100% 100%, 0 100%);
      transform: translate(0);
    }

    10% {
      clip-path: polygon(0 54%, 100% 54%, 100% 44%, 0 44%);
      transform: translate3d(5px, 0, 0);
    }

    13% {
      clip-path: polygon(0 54%, 100% 54%, 100% 44%, 0 44%);
      transform: translateZ(0);
    }

    13.1% {
      clip-path: polygon(0 0, 0 0, 0 0, 0 0);
      transform: translate3d(5px, 0, 0);
    }

    15% {
      clip-path: polygon(0 60%, 100% 60%, 100% 40%, 0 40%);
      transform: translate3d(5px, 0, 0);
    }

    20% {
      clip-path: polygon(0 60%, 100% 60%, 100% 40%, 0 40%);
      transform: translate3d(-5px, 0, 0);
    }

    20.1% {
      clip-path: polygon(0 0, 0 0, 0 0, 0 0);
      transform: translate3d(5px, 0, 0);
    }

    25% {
      clip-path: polygon(0 85%, 100% 85%, 100% 40%, 0 40%);
      transform: translate3d(5px, 0, 0);
    }

    30% {
      clip-path: polygon(0 85%, 100% 85%, 100% 40%, 0 40%);
      transform: translate3d(-5px, 0, 0);
    }

    30.1% {
      clip-path: polygon(0 0, 0 0, 0 0, 0 0);
    }

    35% {
      clip-path: polygon(0 63%, 100% 63%, 100% 80%, 0 80%);
      transform: translate(-5px);
    }

    40% {
      clip-path: polygon(0 63%, 100% 63%, 100% 80%, 0 80%);
      transform: translate(5px);
    }

    45% {
      clip-path: polygon(0 63%, 100% 63%, 100% 80%, 0 80%);
      transform: translate(-5px);
    }

    50% {
      clip-path: polygon(0 63%, 100% 63%, 100% 80%, 0 80%);
      transform: translate(0);
    }

    55% {
      clip-path: polygon(0 10%, 100% 10%, 100% 0, 0 0);
      transform: translate3d(5px, 0, 0);
    }

    60% {
      clip-path: polygon(0 10%, 100% 10%, 100% 0, 0 0);
      transform: translateZ(0);
      opacity: 1;
    }

    60.1% {
      clip-path: polygon(0 0, 0 0, 0 0, 0 0);
      opacity: 1;
    }

    to {
      clip-path: polygon(0 0, 0 0, 0 0, 0 0);
      opacity: 1;
    }
  }
`
