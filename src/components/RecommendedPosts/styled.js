import styled from "styled-components"
import media from "styled-media-query"
import AniLink from "gatsby-plugin-transition-link/AniLink"

import transitions from "../../styles/transitions"

export const RecommendedWrapper = styled.section`
  /* border-bottom: 1px solid var(--borders);
  border-top: 1px solid var(--borders); */
  background: var(--mediumBackground);
  transition: ${transitions.ALL};
  display: flex;
`

export const RecommendedLink = styled(AniLink)`
  align-items: center;
  background: var(--mediumBackground);
  color: var(--highlight);
  display: flex;
  padding: 2rem;
  text-decoration: none;
  transition: ${transitions.ALL};
  width: 50%;
  position: relative;
   -webkit-box-shadow: 0 1px 1px rgba(0, 0, 0, 0.15),
    0 10px 0 -5px var(--background), 0 10px 1px -4px rgba(0, 0, 0, 0.15),
    0 20px 0 -10px var(--background), 0 20px 1px -9px rgba(0, 0, 0, 0.15);
  box-shadow: 0 1px 1px rgba(0, 0, 0, 0.15), 0 10px 0 -5px var(--background),
    0 10px 1px -4px rgba(0, 0, 0, 0.15), 0 20px 0 -10px var(--background),
    0 20px 1px -9px rgba(0, 0, 0, 0.15);

  ${media.lessThan("large")`
    padding: 2rem 1rem;
    line-height: 1.3;
    font-size: .9rem;
  `}

  &:hover {
    background: var(--background);
    color: var(--texts);
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

  &.previous:before {
    content: "\\2190";
    margin-left: 0.5rem;
  }
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
  &.next:after {
      content: "\\2192";
    margin-right: 0.5rem;
    &:hover {
    }
  }
`
