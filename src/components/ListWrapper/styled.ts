import styled from 'styled-components'
import media from 'styled-media-query'

import transitions from '../../styles/transitions'

import AniLink from 'gatsby-plugin-transition-link/AniLink'

export const ListWrapper = styled.section`
  body#card & {
    background-color: var(--mediumBackground);
    border-bottom: 1px solid var(--borders);
    display: grid;
    grid-area: card;
    grid-template-columns: repeat(auto-fit, minmax(380px, 1fr));
    transition: ${transitions.DEFAULT};
    margin: 0 auto;
    grid-gap: 0 0.75rem;
  }
  &:hover {
    transition: ${transitions.DEFAULT};
    a:not(:hover) {
      -webkit-transition: all 0.4s ease;
      -moz-transition: all 0.4s ease;
      -o-transition: all 0.4s ease;
      transition: all 0.4s ease;
      -webkit-transition-delay: 3s;
      transition-delay: 3s;
      -webkit-filter: blur(2px);
      filter: blur(2px);
    }
  }
  /*
  ${media.lessThan('small')`
       body#card & { grid-template-columns: repeat(1, 1fr); }
    `}
     ${media.between('small', 'medium')`
       body#card & { grid-template-columns: repeat(2, 1fr); }
    `}
    ${media.between('medium', 'large')`
       body#card & { grid-template-columns: repeat(3, 1fr); }
   `}
   ${media.greaterThan('large')`
       body#card & { grid-template-columns: repeat(4, 1fr); }
   `}*/
`
export const LinkList = styled(AniLink)`
  background: var(--mediumBackground) !important;
  color: var(--texts) !important;
  border: 1px solid transparent !important;
  outline: none !important;
  cursor: pointer !important;
  padding: .8rem 1.2rem !important;
  border-radius: .4rem !important;
  font-size: 1.2rem !important;
  margin-top: 2rem !important;
  margin-left: .5rem !important;
  transition: all 400ms cubic-bezier(0.175, 0.885, 0.32, 1.275) !important;
  border-bottom: none !important;
  flex-direction: column-reverse !important;
  display: flex !important;
  align-items: center !important;
  text-align: center !important;
  margin: 0 auto !important;

`
