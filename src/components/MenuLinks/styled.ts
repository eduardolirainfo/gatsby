import styled from 'styled-components'
import media from 'styled-media-query'

import transitions from '../../styles/transitions'

export const MenuLinksWrapper = styled.nav`
  ${media.lessThan('large')`
  margin: auto;
  `}
`

export const MenuLinksList = styled.ul`
  font-size: 1.2rem;
  font-weight: 300;
  ${media.lessThan('large')`
    font-size: 1.8rem;
  `}
`

export const MenuLinksItem = styled.li`
  padding: 0.5rem 0;

  ${media.lessThan('large')`     
    padding: 1rem 0;
  `}
  
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
 
    &:hover {
      color: var(--bordersMenuBar);
      -webkit-transform: skew(-10deg);
      transform: skew(-10deg);
    }
    &:hover::before {
      transform: translateY(0);
      transition: transform 0.25s ease-out;
    }
    }
`

// export const MenuLinksItem = styled.li`
//   padding: 0.5rem 0;
//   ${media.lessThan('large')`
//     padding: 1rem 0;
//   `}
//   .active {
//     color: var(--highlight);
//   }
//   a {
//     color: var(--texts);
//     text-decoration: none;
//     transition: ${transitions.COLOR};
//     &:hover {
//       color: var(--highlight);
//     }
//   }
// `
