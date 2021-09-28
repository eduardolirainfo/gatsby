import styled from "styled-components"
import media from "styled-media-query"
import AniLink from "gatsby-plugin-transition-link/AniLink"

import transitions from "../../styles/transitions"

export const RecommendedWrapper = styled.section`
  /* border-bottom: 1px solid var(--borders);
  border-top: 1px solid var(--borders); */
  // background: var(--mediumBackground);
  transition: ${transitions.ALL};
  display: flex;
`

export const RecommendedLink = styled(AniLink)`
  align-items: center;
  color: var(--highlight);
  display: flex;
  padding: 2rem;
  text-decoration: none;
  width: 50%;
  position: relative;
  -webkit-box-shadow: 0 1px 1px rgba(0, 0, 0, 0.15),
    0 10px 0 -5px var(--background), 0 10px 1px -4px rgba(0, 0, 0, 0.15),
    0 20px 0 -10px var(--background), 0 20px 1px -9px rgba(0, 0, 0, 0.15);
  box-shadow: 0 1px 1px rgba(0, 0, 0, 0.15), 0 10px 0 -5px var(--background),
    0 10px 1px -4px rgba(0, 0, 0, 0.15), 0 20px 0 -10px var(--background),
    0 20px 1px -9px rgba(0, 0, 0, 0.15);
  transition: ${transitions.ALL};
  background-color: var(--bgInput);
  border: 2px solid var(--borderInputColor);
  -webkit-clip-path: polygon(
    0 0,
    100% 0,
    100% calc(100% - 1rem + 2px),
    calc(100% - 1rem + 2px) 100%,
    0 100%
  );
  clip-path: polygon(
    0 0,
    100% 0,
    100% calc(100% - 1rem + 2px),
    calc(100% - 1rem + 2px) 100%,
    0 100%
  );
  font-family: -apple-system, "BlinkMacSystemFont", "Segoe UI", "Roboto",
    "Helvetica Neue", "Arial", "Noto Sans", sans-serif, "Apple Color Emoji",
    "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji";

  animation: var(--animationText);

  &::before {
    background-color: var(--borderInputColor);
    bottom: 5px;
    content: "";
    display: block;
    height: 3px;
    position: absolute;
    right: -6px;
    top: auto;
    transform: rotate(-45deg);
    width: 22px;
    z-index: 100;
  }
  svg {
    height: 3.2rem;
    padding: 0.9rem;
    position: relative;
    width: 3.2rem;
  }
  ${media.lessThan("large")`
    padding: 2rem 1rem;
    line-height: 1.3;
    font-size: .9rem;
  `}

  &:hover {
    background: var(--background);
    color: var(--bordersMenuBar);
  }
  &:hover a {
    filter: saturate(800%);
  }

  &.previous {
    border-right: 1px solid var(--borders);
    -webkit-transition: -webkit-box-shadow 0.25s;
    -webkit-transition: -webkit-box-shadow 0.25s;
    transition: -webkit-box-shadow 0.25s;
    -webkit-transition: box-shadow 0.25s;
    transition: box-shadow 0.25s;
    transition: box-shadow 0.25s, -webkit-box-shadow 0.25s;
    -webkit-transition: box-shadow 0.25s, -webkit-box-shadow 0.25s;
    transition: box-shadow 0.25s, -webkit-box-shadow 0.25s;
    transition: ${transitions.ALL};

    &:hover {
      -webkit-box-shadow: 0 3px 3px 0 rgba(0, 0, 0, 0.14),
        0 1px 7px 0 rgba(0, 0, 0, 0.12), 0 3px 1px -1px rgba(0, 0, 0, 0.2);
      box-shadow: 0 3px 3px 0 rgba(0, 0, 0, 0.14),
        0 1px 7px 0 rgba(0, 0, 0, 0.12), 0 3px 1px -1px rgba(0, 0, 0, 0.2);
    }
  }

  &.next {
    justify-content: flex-end;
    -webkit-transition: -webkit-box-shadow 0.25s;
    -webkit-transition: -webkit-box-shadow 0.25s;
    transition: -webkit-box-shadow 0.25s;
    -webkit-transition: box-shadow 0.25s;
    transition: box-shadow 0.25s;
    transition: box-shadow 0.25s, -webkit-box-shadow 0.25s;
    -webkit-transition: box-shadow 0.25s, -webkit-box-shadow 0.25s;
    transition: box-shadow 0.25s, -webkit-box-shadow 0.25s;
    transition: ${transitions.ALL};

    &:hover {
      -webkit-box-shadow: 0 3px 3px 0 rgba(0, 0, 0, 0.14),
        0 1px 7px 0 rgba(0, 0, 0, 0.12), 0 3px 1px -1px rgba(0, 0, 0, 0.2);
      box-shadow: 0 3px 3px 0 rgba(0, 0, 0, 0.14),
        0 1px 7px 0 rgba(0, 0, 0, 0.12), 0 3px 1px -1px rgba(0, 0, 0, 0.2);
    }
  }
  &.previous:only-child {
    margin-left: auto;
    /* border-left: 1px solid var(--borders); */
  }

  &.next:only-child {
    margin-left: auto;
    /* border-left: 1px solid var(--borders); */
  }

  // &.previous:before {
  //   content: "\\2190";
  //   margin-left: 0.5rem;
  // }
  /* &.next:before {
    content: "\\2192";
    margin-right: 0.5rem;
    &:hover {
    }
  } */
  /* &.previous:after {
    content: "\\2190";
    margin-left: 0.5rem;
  } */
  // &.next:after {
  //   content: "\\2192";
  //   margin-right: 0.5rem;
  //   &:hover {
  //   }
  // }
`
