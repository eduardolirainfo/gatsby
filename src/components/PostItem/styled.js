import styled from "styled-components"
import media from "styled-media-query"
import AniLink from "gatsby-plugin-transition-link/AniLink"

import transitions from "../../styles/transitions"

export const PostItemWrapper = styled.section`
 align-items: center;
  /* border-bottom: 1px solid var(--borders); */
  display: flex;
  padding: 2rem 3rem;
  width: 100%;
  transition: ${transitions.ALL};

   &:not(.disableCard) {
    body#card & {
      border: none;
      padding: 2rem 2rem;
      flex-direction: column;
      justify-content: center;
    }
  }


 body#card & {
    border: none;
    /* padding: 2rem 1rem; */
    flex-direction: column;
    justify-content: center;
  }

 body#card &:hover {
    -webkit-transition:all ease .3s;
    transition:all ease .3s;
    background-image:var(--cardHover);
    -webkit-box-shadow:0 8px 17px 0 rgba(0,0,0,0.2),0 6px 20px 0 rgba(0,0,0,0.19);
    box-shadow:0 8px 17px 0 rgba(0,0,0,0.2),0 6px 20px 0 rgba(0,0,0,0.19);
  }


 &:hover{
   /* transform: perspective(300px) translate3d(0, 0, 3px); */

 }


  &:hover{
        /* -webkit-box-shadow: 0 15px 10px #777;
    -moz-box-shadow: 0 15px 10px #777;
    box-shadow: 0 15px 10px #777; */
  }
  ${media.lessThan("large")`
    align-items: flex-start;
    flex-direction: column;
    padding: 2rem 1rem;
  `}
`
export const PostItemLink = styled(AniLink)`
  position: relative;
  overflow: hidden;
    color: var(--texts);
  display: flex;
  text-decoration: none;
  transition: ${transitions.COLOR};
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
 &:before {
  content: "";
  z-index: 99;
  position: absolute;
  top: -10px;
  left: 32px;
  display: block;
  width: 16px;
  height: 16px;
  border-radius: 16px;
  background-color: var(--mediumBackground);
}
  &:after {
    content: "";
    z-index: 99;
    position: absolute;
    bottom: -10px;
    left: 32px;
    display: block;
    width: 16px;
    height: 16px;
    border-radius: 16px;
    background-color: var(--mediumBackground);
  }
 body#card & {
    background-color: var(--background);

  }
  -webkit-box-shadow: 0 1px 1px rgba(0, 0, 0, 0.15),
    0 10px 0 -5px var(--background), 0 10px 1px -4px rgba(0, 0, 0, 0.15),
    0 20px 0 -10px var(--background), 0 20px 1px -9px rgba(0, 0, 0, 0.15);
  box-shadow: 0 1px 1px rgba(0, 0, 0, 0.15), 0 10px 0 -5px var(--background),
    0 10px 1px -4px rgba(0, 0, 0, 0.15), 0 20px 0 -10px var(--background),
    0 20px 1px -9px rgba(0, 0, 0, 0.15);
  /* -webkit-transition: all ease-in-out 0.3s;
  -webkit-transition: all ease-in-out 0.3s;
  transition: all ease-in-out 0.3s; */
  position: relative;
  margin: 0.1rem 0 1rem 0;
  /* -webkit-transition: -webkit-box-shadow 0.25s;
  -webkit-transition: -webkit-box-shadow 0.25s;
  transition: -webkit-box-shadow 0.25s;
  -webkit-transition: box-shadow 0.25s;
  transition: box-shadow 0.25s;
  transition: box-shadow 0.25s, -webkit-box-shadow 0.25s;
  -webkit-transition: box-shadow 0.25s, -webkit-box-shadow 0.25s; */
  /* transition: box-shadow 0.25s, -webkit-box-shadow 0.25s; */
  border-radius: 2px;
  transition: ${transitions.ALL};

  /* &:before {
    content: "";
    position: absolute;
    top: 0;
    left: -100%;
    width: 100%;
    height: 100%;
    background: rgba(255, 255, 255, 0.1);
    transition: 0.5s;
    pointer-events: none;
  }
  &:hover:before {
    left: -50%;
    transform: skewX(-5deg);
  } */
  &:hover {
    background-image: var(--cardHover);
    -webkit-box-shadow: 0 8px 17px 0 rgba(0, 0, 0, 0.2),
      0 6px 20px 0 rgba(0, 0, 0, 0.19);
    box-shadow: 0 8px 17px 0 rgba(0, 0, 0, 0.2),
      0 6px 20px 0 rgba(0, 0, 0, 0.19);
      /* transform: scale(1.1); */

  }
  &:hover i{
    opacity: 1;
    -webkit-transform: scale(2);
    transform: scale(2);
    }
  &:hover span{
    transform: scale(72.5);
    opacity: 0.9;
    }
`

// export const ItemTags = styled.ul`
//   list-style: none;
//   margin: -2rem 0 2rem;
//   overflow: hidden;
//   padding: 0 5rem;
//   /* transition: ${transitions.COLOR}; */

//   & li {
//       float: left;
//  }
// `
// export const TagLink = styled(AniLink)`
//   font-family: "Open Sans", sans-serif;
//   background: var(--mediumBackground);
//   border-left: inset 0 1px var(--postColor);
//   border-radius: 3px 0 0 3px;
//   color: var(--postColor);
//   display: inline-block;
//   height: 26px;
//   line-height: 26px;
//   padding: 0 20px 0 23px;
//   position: relative;
//   margin: 0 10px 10px 0;
//   text-decoration: none;
//   /* transition: ${transitions.DEFAULT}; */
//   &::before{
//     background:var(--mediumBackground);
//     border-radius: 10px;
//     box-shadow: inset 0 1px var(--postColor);
//     content: '';
//     height: 6px;
//     left: 10px;
//     position: absolute;
//     width: 6px;
//     top: 10px;
//   }
//   &::after {
//     background: var(--background);
//     border-bottom: 13px solid transparent;
//     border-left: 10px solid var(--mediumBackground);
//     border-top: 13px solid transparent;
//     content: '';
//     position: absolute;
//     right: 0;
//     top: 0;
//   }
//   &:hover {
//     background-color:${props =>
//     props.background ? props.background : " var(--highlight)"};
//     color: white;
//     font-size: 1rem;
//   }
//   &:hover::after {
//     border-left-color: ${props =>
//     props.background ? props.background : " var(--highlight)"};
//   }
// `

export const PostItemTag = styled.div`
  align-items: center;
  text-decoration: none;
  color: ${props =>
    props.background ? props.background : " var(--highlight)"};
  display: flex;
  /* font-size: 1.3rem; */
  font-weight: 800;
  justify-content: center;
  min-height: 90px;
  min-width: 90px;
  text-transform: uppercase;
  transition: ${transitions.ALL};
  /* background-color: #21d4fd; */
  /* background-image: linear-gradient(19deg, #21d4fd 0%, #b721ff 100%); */
   border: 3px solid ${props =>
    props.background ? props.background : " var(--highlight)"};
       border-top: dashed;
  border-bottom: dotted;
     border-radius: var(--radiusTheme);

  &:hover {
        animation: var(--animaTag);
       overflow: hidden;
    }

    span{
        position: absolute;
        right: 14px;
        top: 14px;
        width: 5px;
        height: 5px;
        background-color: ${props =>
    props.background ? props.background : " var(--background)"};
        border: none;
        /* -moz-box-shadow:    inset 0 0 5px #000000;
        -webkit-box-shadow: inset 0 0 5px #000000;
        box-shadow:         inset 0 0 5px #000000; */
        border-radius:50%;
        cursor: pointer;
        outline: none;
        transition: ${transitions.ALL};
         /* mix-blend-mode: hard-light; */
    }
 ${media.lessThan("large")`
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

export const PostItemInfo = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 1.5rem;
  /* z-index: 99; */

  .ArrowRight{
    z-index: 100;
    position: absolute;
    right: 50px;
    top: 75px;
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
  -webkit-transition: all 0.2s ease;
  transition: all 0.2s ease;
  svg{
    margin: -10px auto;
    transform: rotateY(180deg);
  }
}

  ${media.lessThan("large")`
    margin: 0;
  `}
`
export const PostItemDate = styled.time`
  font-size: 0.9rem;
  color: var(--texts);
`
export const PostItemTitle = styled.h1`
  font-size: 1.6rem;
  font-weight: 800;
  margin: 0.2rem 0 0.5rem;
  color: var(--texts);
 body#card & {
    line-height: 1.1;
    margin: 0.8rem 0;
  }
  &:hover {
    color: var(--hightlight) !important;
  }

  @-moz-keyframes morphing {
    0% {
      border-radius: 30% 70% 70% 30%/30% 30% 70% 70%;
      /* box-shadow: 15px 15px 50px rgba(0, 0, 0, 0.2); */
    }
    25% {
      border-radius: 58% 42% 75% 25%/76% 46% 54% 24%;
    }
    50% {
      border-radius: 50% 50% 33% 67%/55% 27% 73% 45%;
      /* box-shadow: -10px -5px 50px rgba(0, 0, 0, 0.2); */
    }
    75% {
      border-radius: 33% 67% 58% 42%/63% 68% 32% 37%;
    }
  }
  @-webkit-keyframes morphing {
    0% {
      border-radius: 30% 70% 70% 30%/30% 30% 70% 70%;
      /* box-shadow: 15px 15px 50px rgba(0, 0, 0, 0.2); */
    }
    25% {
      border-radius: 58% 42% 75% 25%/76% 46% 54% 24%;
    }
    50% {
      border-radius: 50% 50% 33% 67%/55% 27% 73% 45%;
      /* box-shadow: -10px -5px 50px rgba(0, 0, 0, 0.2); */
    }
    75% {
      border-radius: 33% 67% 58% 42%/63% 68% 32% 37%;
    }
  }
  @-o-keyframes morphing {
    0% {
      border-radius: 30% 70% 70% 30%/30% 30% 70% 70%;
      /* box-shadow: 15px 15px 50px rgba(0, 0, 0, 0.2); */
    }
    25% {
      border-radius: 58% 42% 75% 25%/76% 46% 54% 24%;
    }
    50% {
      border-radius: 50% 50% 33% 67%/55% 27% 73% 45%;
      /* box-shadow: -10px -5px 50px rgba(0, 0, 0, 0.2); */
    }
    75% {
      border-radius: 33% 67% 58% 42%/63% 68% 32% 37%;
    }
  }
  @keyframes morphing {
    0% {
      border-radius: 30% 70% 70% 30%/30% 30% 70% 70%;
      /* box-shadow: 15px 15px 50px rgba(0, 0, 0, 0.2); */
    }
    25% {
      border-radius: 58% 42% 75% 25%/76% 46% 54% 24%;
    }
    50% {
      border-radius: 50% 50% 33% 67%/55% 27% 73% 45%;
      /* box-shadow: -10px -5px 50px rgba(0, 0, 0, 0.2); */
    }
    75% {
      border-radius: 33% 67% 58% 42%/63% 68% 32% 37%;
    }
  }
`

export const PostItemDescription = styled.p`
  font-size: 1rem;
  font-weight: 300;
  line-height: 1.2;
  color: var(--postColor);
`
