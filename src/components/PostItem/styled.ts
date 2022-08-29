import styled from 'styled-components'
import media from 'styled-media-query'
import AniLink from 'gatsby-plugin-transition-link/AniLink'

import transitions from '../../styles/transitions'

export const PostItemTitle = styled.h1`
  font-family: "Poppins", Arial, sans-serif;
  font-size: 2.25rem;
  font-weight: bold;
  text-transform: uppercase;
  margin: 0.4rem 0 0.4rem;
  color: var(--titlePostList);
  display: inline-block;
  vertical-align: middle;
  -webkit-transform: perspective(1px) translateZ(0);
  transform: perspective(1px) translateZ(0);
  -webkit-transition-duration: 0.3s;
  transition-duration: 0.3s;
  -webkit-transition-property: transform;
  transition-property: transform;
  -webkit-transform-origin: 0 100%;
  transform-origin: 0 100%;
  /* &:hover{
    text-shadow:3px 3px var(--cyberHl);
  } */
  // text-shadow: 0 0 5px var(--cyberHl);
  body#card & {
    line-height: 1.1;
    margin: 0.8rem 0;
  }

  /* @-moz-keyframes morphing {
    0% {
      border-radius: 30% 70% 70% 30%/30% 30% 70% 70%;
    }
    25% {
      border-radius: 58% 42% 75% 25%/76% 46% 54% 24%;
    }
    50% {
      border-radius: 50% 50% 33% 67%/55% 27% 73% 45%;
    }
    75% {
      border-radius: 33% 67% 58% 42%/63% 68% 32% 37%;
    }
  }
  @-webkit-keyframes morphing {
    0% {
      border-radius: 30% 70% 70% 30%/30% 30% 70% 70%;
    }
    25% {
      border-radius: 58% 42% 75% 25%/76% 46% 54% 24%;
    }
    50% {
      border-radius: 50% 50% 33% 67%/55% 27% 73% 45%;
    }
    75% {
      border-radius: 33% 67% 58% 42%/63% 68% 32% 37%;
    }
  }
  @-o-keyframes morphing {
    0% {
      border-radius: 30% 70% 70% 30%/30% 30% 70% 70%;
    }
    25% {
      border-radius: 58% 42% 75% 25%/76% 46% 54% 24%;
    }
    50% {
      border-radius: 50% 50% 33% 67%/55% 27% 73% 45%;
    }
    75% {
      border-radius: 33% 67% 58% 42%/63% 68% 32% 37%;
    }
  }
  @keyframes morphing {
    0% {
      border-radius: 30% 70% 70% 30%/30% 30% 70% 70%;
    }
    25% {
      border-radius: 58% 42% 75% 25%/76% 46% 54% 24%;
    }
    50% {
      border-radius: 50% 50% 33% 67%/55% 27% 73% 45%;
    }
    75% {
      border-radius: 33% 67% 58% 42%/63% 68% 32% 37%;
    }
  } */
`

export const PostItemWrapper = styled.section`
  align-items: center;
  display: flex;
  padding: 2rem 3rem;
  width: 100%;
  transition: ${transitions.ALL};
  background: var(--background);

  &:not(.disableCard) {
    body#card & {
      border: none;
      padding: 2rem 2rem;
      flex-direction: column;
      justify-content: center;
      width: 100%;
      height: 100%;
      border-radius: 8px;
      transition: ${transitions.ALL};
    }
  }

  body#card & {
    border: none;
    flex-direction: column;
    justify-content: center;
    width: 100%;
    height: 100%;
    border-radius: 8px;
    transition: ${transitions.ALL};
  }

  body#card &:hover {
    transition: ${transitions.ALL};
    background-image: var(--cardHover);
    -webkit-box-shadow: 0 8px 17px 0 rgba(0, 0, 0, 0.2),
      0 6px 20px 0 rgba(0, 0, 0, 0.19);
    box-shadow: 0 8px 17px 0 rgba(0, 0, 0, 0.2),
      0 6px 20px 0 rgba(0, 0, 0, 0.19);
  }

  &:hover
    ${PostItemTitle},
    &:focus
    ${PostItemTitle},
    &:active
    ${PostItemTitle} {
    -webkit-transform: skew(-5deg);
    transform: skew(-5deg);
    text-shadow: var(--highlightText);
    box-shadow: none;
  }

  // &:hover {
  //    transform: perspective(300px) translate3d(0, 0, 3px);
  // }

  // &:hover {
  //    -webkit-box-shadow: 0 15px 10px #777;
  //   -moz-box-shadow: 0 15px 10px #777;
  //   box-shadow: 0 15px 10px #777;
  // }
  ${media.lessThan('large')`
    align-items: flex-start;
    flex-direction: column;
    padding: 2rem 1rem;
  `}
`

export const PostItemCat = styled.div`
  align-items: center;
  margin-right: 1.5rem;
  text-decoration: none;
  color: ${(props) =>
    props.background ? props.background : ' var(--highlight)'};
  display: flex;
  font-weight: 900;
  justify-content: center;
  min-height: 90px;
  min-width: 90px;
  text-transform: uppercase;
  transition: ${transitions.ALL};
  border-radius: 3rem;
  box-shadow: var(--catHl)
    ${(props) => (props.background ? props.background : ' var(--highlight)')};
  &:hover {
    /* animation: var(--animaTag); */
    overflow: hidden;
    transform: rotate(360dg);
  }
  span {
    position: absolute;
    right: 14px;
    top: 14px;
    width: 5px;
    height: 5px;
    background-color: ${(props) =>
    props.background ? props.background : ' var(--background)'};
    // border: none;
    border-radius: 50%;
    cursor: pointer;
    outline: none;
    transition: ${transitions.ALL};
  }
  ${media.lessThan('large')`
    border-radius: 0;
    font-size: 1rem;
    min-height: auto;
    min-width: auto;
    padding: .2rem .5rem;
    margin-bottom: .7rem;
  `}
  body#card & {
    margin-bottom: 1.5rem;
  }
`

export const PostItemDescription = styled.p`
  font-size: 1rem;
  font-weight: 300;
  line-height: 1.2;
  color: var(--postDescription);
  font-family: Kalam, sans-serif;

`

export const PostItemLink = styled(AniLink)`
  position: relative;
  overflow: hidden;
  color: var(--texts);
  display: flex;
  text-decoration: none;
  &:hover a {
    // box-shadow: var(--borderInput);
  }
  &:hover p {
    color: ${(props) =>
    props.background ? props.background : ' var(--highlight)'};
  }
  &:hover time {
    color: ${(props) =>
    props.background ? props.background : ' var(--highlight)'};
  }
  &:hover ${PostItemCat} {
    /* animation: var(--animationBox);  */
  }

  &:hover h1 {
    color: ${(props) =>
    props.background ? props.background : ' var(--highlight)'};
  }
  & ul {
    z-index: 99;
    position: absolute;
    left: 39px;
    top: 5px;
    list-style-type: none;
  }
  & ul li {
    width: 2px;
    height: 2px;
    border-radius: 2px;
    margin: 6px 0;
    background-color: var(--mediumBackground);
  }
  body#card & {
    transition: ${transitions.ALL};
    &:hover {
      box-shadow: none;
    }
  }
  -webkit-box-shadow: 0 1px 1px rgba(0, 0, 0, 0.15),
    0 10px 0 -5px var(--background), 0 10px 1px -4px rgba(0, 0, 0, 0.25),
    0 20px 0 -10px var(--background), 0 20px 1px -9px rgba(0, 0, 0, 0.15);
  box-shadow: 0 1px 1px rgba(0, 0, 0, 0.15), 0 10px 0 -5px var(--background),
    0 10px 1px -4px rgba(0, 0, 0, 0.25), 0 20px 0 -10px var(--background),
    0 20px 1px -9px rgba(0, 0, 0, 0.15);
  position: relative;
  margin: 0.1rem 0 1rem 0;
  transition: ${transitions.ALL};
  &:hover {
    background-image: var(--cardHover);
    box-shadow: none;
  }
  &:hover i {
    opacity: 1;
    -webkit-transform: scale(2);
    transform: scale(2);
    transform-origin: 0 0;
  }

  &:hover span {
    animation: shake 3s cubic-bezier(0.36, 0.07, 0.19, 0.97) both;
    transform: translate3d(0, 0, 0);
    backface-visibility: hidden;
    perspective: 100px;
  }

  @-webkit-keyframes shake {
    0% {
      -webkit-transform: translateX(0);
    }

    20% {
      -webkit-transform: translateX(-10px);
    }

    40% {
      -webkit-transform: translateX(10px);
    }

    60% {
      -webkit-transform: translateX(-10px);
    }

    80% {
      -webkit-transform: translateX(10px);
    }

    100% {
      -webkit-transform: translateX(0);
    }
  }
  @keyframes shake {
    0% {
      transform: translateX(0);
    }

    20% {
      transform: translateX(-10px);
    }

    40% {
      transform: translateX(10px);
    }

    60% {
      transform: translateX(-10px);
    }

    80% {
      transform: translateX(10px);
    }

    100% {
      transform: translateX(0);
    }
  }

  ${media.lessThan('large')`
    & ul{
      display: none;
    }
  `}
`

export const PostItemInfo = styled.div`
  display: flex;
  flex-direction: column;
  z-index: 99;
  */ .ArrowRight {
    z-index: 100;
    position: absolute;
    right: 26px;
    top: 13px;
    font-size: 0.4rem;
    cursor: pointer;
  }

  i {
    opacity: 0;
    color: #fff;
    font-size: 16px;
    will-change: transform;
    -webkit-transform: scale(0.1);
    transform: scale(0.1);
    transform-origin: 0 0;
    -webkit-transition: all 0.2s ease;
    transition: all 0.2s ease;
    svg {
      margin: -10px auto;
      transform: rotateY(180deg);
    }
  }

  ${media.lessThan('large')`
    margin: 0;
  `}
`
export const PostItemDate = styled.time`
  font-size: 0.8rem;
  color: var(--textsMetaDate);
`

export const ItemTags = styled.p`
  font-size: 1rem;
  font-weight: 300;
  line-height: 1.2;
  color: var(--postColor);
`
export const TagLink = styled.p`
  font-size: 1rem;
  font-weight: 300;
  line-height: 1.2;
  color: var(--postColor);
`
export const TagPost = styled.p`
  font-size: 1rem;
  font-weight: 300;
  line-height: 1.2;
  color: var(--postColor);
`
