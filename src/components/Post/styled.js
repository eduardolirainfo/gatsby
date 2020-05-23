import styled from "styled-components"
import media from "styled-media-query"
import AniLink from "gatsby-plugin-transition-link/AniLink"
import transitions from "../../styles/transitions"

export const MainContent = styled.section`
  margin: auto;
  max-width: 70rem;
  padding: 2rem 5rem;

  ${media.lessThan("large")`
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
    font-size: 1.25rem;
    font-weight: 300;
    line-height: 1.7;
    letter-spacing: 0.069rem;
    padding: 0 1.4rem;

    ${media.lessThan("large")`
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
    margin: 2.4rem auto 1rem;
  }

  ul,
  ol {
    list-style: disc;
    padding-left: 2.5rem;
    margin: 0 auto 1.6rem;
  }

  li {
    padding: 0.625rem 0;

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

    ${media.lessThan("large")`
      padding: 0 1rem;
    `}
  }

  blockquote {
    color: var(--postColor);
    border-left: 0.3rem solid var(--highlight);
    padding: 0 1.875rem;
    margin: 3.125rem auto;
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
  }

  h1 {
    font-size: 2.8rem;

    ${media.lessThan("large")`
      font-size: 1.875rem;
    `}
  }

  h2 {
    font-size: 2.1rem;

    ${media.lessThan("large")`
      font-size: 1.375rem;
    `}
  }

  h3 {
    font-size: 1.6rem;

    ${media.lessThan("large")`
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

    ${media.lessThan("large")`
      padding: 0;
    `}
  }

  .instagram-media {
    margin: 1rem auto !important;
  }
  a {
    transition: ${transitions.ALL};
    color:var(--highlight);
   text-decoration: none;
   line-height: 1.6;
   position: relative;
   z-index: 0;
   display: inline-block;
   overflow: hidden;
   vertical-align: bottom;
    svg {
      color: var(--postColor);
      transition: ${transitions.ALL};
    }
    &:hover{
   color: #fff;
    }

  &::before {
   content: "";
   position: absolute;
   z-index: -1;
   top: 0;
   left: 0;
   transform: translateY(calc(100% - 2px));
   width: 100%;
   height: 100%;
   background-image: linear-gradient(60deg,  var(--mediumBackground) 0%, var(--highlight) 100%);
   transition: transform .25s ease-out;
  }
  &:hover::before {
   transform: translateY(0);
   transition: transform .25s ease-out;
}

  }
`
export const PostHeader = styled.header`
  color: var(--postColor);
  margin: auto;
  max-width: 70rem;
  padding: 5rem 5rem 0;
  transform-style: preserve-3d;

  ${media.lessThan("large")`
    padding: 3rem 0 0;
    max-width: 100%;
  `}
`

export const PostTitle = styled.h1`
  font-size: 3.75rem;
  font-family: "Lato", sans-serif;
  font-weight: 900;
  font-style: normal;
  padding: 0 1.4rem;
  margin: 1rem auto;
  color: var(--texts) !important;
  text-transform: uppercase;
  /* font-size: 1.875rem;
    margin: 0 0 30px; */
  text-shadow: 0 3px 0 #b2a98f;
  /* text-shadow: 0 3px 0 #b2a98f, 0 14px 10px rgba(0, 0, 0, 0.15),
    0 24px 2px rgba(0, 0, 0, 0.1), 0 34px 30px rgba(0, 0, 0, 0.1); */

  ${media.lessThan("large")`
    font-size: 2.8rem;
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
      border: none;
      padding: 2rem 1rem;
      flex-direction: column;
      justify-content: center;
    }
  }
  ${media.lessThan("large")`
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
    text-decoration: underline;
  }
`

export const PostDescription = styled.h2`
  font-size: 1.5rem;
  color: var(--postDescription);
  font-weight: 300;
  padding: 0 1.4rem;

  ${media.lessThan("large")`
    font-size: 1.6rem;
    line-height: 1.3;
    padding: 0 1rem;
  `}
`
export const PostCategories = styled(AniLink)`
  font-size: 0.9rem;
  font-weight: 900;
  padding: 0rem 0.2rem 0 1.4rem;
  color:var(--postDescription);
  float:left;
  text-tranform: uppercase;
  display: flex;
  transition: ${transitions.COLOR};
  &:hover{
    color: ${props =>
    props.background ? props.background : " var(--background)"};
  }
`
export const LinkCat = styled(AniLink)`
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
  &:hover{
    opacity: 0.5;
  }
`

export const PostDate = styled.p`
  font-size: 0.9rem;
  font-weight: 300;
  padding: 0 1.4rem;
  color:var(--postDescription);
  ${media.lessThan("large")`
    padding: 0 1rem;
  `}
`

export const ItemTags = styled.ul`
  list-style: none;
  margin: -2rem 0 2rem;
  overflow: hidden;
  padding: 0 5rem;
  /* transition: ${transitions.COLOR}; */

  & li {
      float: left;
 }
`
export const TagLink = styled(AniLink)`
  font-family: "Open Sans", sans-serif;
  background: var(--mediumBackground);
  border-left: inset 0 1px var(--postColor);
  border-radius: 3px 0 0 3px;
  color: var(--postColor);
  display: inline-block;
  height: 26px;
  line-height: 26px;
  padding: 0 20px 0 23px;
  position: relative;
  margin: 0 10px 10px 0;
  text-decoration: none;
  border-left: 3px solid var(--borders);
  /* transition: ${transitions.DEFAULT}; */
  &::before{
    background:var(--background);
    border-radius: 10px;
    box-shadow: inset 0 1px var(--borders);
    content: '';
    height: 6px;
    left: 10px;
    position: absolute;
    width: 6px;
    top: 10px;
  }
  &::after {
    background: var(--background);
    border-bottom: 13px solid transparent;
    border-left: 10px solid var(--mediumBackground);
    border-top: 13px solid transparent;
    content: '';
    position: absolute;
    right: 0;
    top: 0;
  }
  &:hover {
    background-color: var(--highlight);
    border-left-color: var(--highlight);
    color: var(--mediumBackground);
    font-size: 1rem;
  }
  &:hover::after {
    border-left-color: ${props =>
    props.color ? props.color : " var(--highlight)"};
  }
`
