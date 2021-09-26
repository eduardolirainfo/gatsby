import styled from "styled-components"
import media from "styled-media-query"

import transitions from "../../styles/transitions"

export const MenuLinksWrapper = styled.nav`
  ${media.lessThan("large")`
    display: none;
  `}
`

export const MenuLinksList = styled.ul`
  font-size: 1.2rem;
  font-weight: 300;
`

export const MenuLinksItem = styled.li`
  padding: 0.5rem 0;

  .active {
    color: var(--highlight);
    line-height: 1.6;
    position: relative;
    z-index: 0;
    display: inline-block;
    overflow: hidden;
    text-decoration: none;
    transition: ${transitions.COLOR};
  }
  a {
    line-height: 1.6;
    transition: ${transitions.ALL};
    color: var(--texts);
    text-decoration: none;
    display: inline-block;
    overflow: hidden;
    vertical-align: bottom;
    font-family: -apple-system,'BlinkMacSystemFont','Segoe UI','Roboto','Helvetica Neue','Arial','Noto Sans',sans-serif,'Apple Color Emoji','Segoe UI Emoji','Segoe UI Symbol','Noto Color Emoji';

    &:hover {
      color: var(--bordersMenuBar);
      -webkit-transform: skew(-10deg);
      transform: skew(-10deg);
    }

    // &::before {
    //   content: "";
    //   position: absolute;
    //   z-index: -1;
    //   top: 0;
    //   left: 0;
    //   transform: translateY(calc(100% - 2px));
    //   width: 100%;
    //   height: 100%;
    //   background-image: linear-gradient(
    //     60deg,
    //     var(--mediumBackground) 0%,
    //     var(--highlight) 100%
    //   );
    //   transition: transform 0.25s ease-out;
    // }
    &:hover::before {
      transform: translateY(0);
      transition: transform 0.25s ease-out;
    }
    }
  }
`
