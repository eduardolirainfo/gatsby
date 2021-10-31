import styled from 'styled-components'
import media from 'styled-media-query'

import transitions from '../../styles/transitions'

export const PaginationWrapper = styled.section`
  align-items: center;
  color: var(--texts);
  display: flex;
  padding: 1.5rem 3rem;
  justify-content: space-between;
  background: linear-gradient(-60deg, rgba(240,75,67,0.1), rgba(65,98,173,0.1));
  font-family: "Poppins", Arial, sans-serif;
  transition: ${transitions.ALL};

  ${media.lessThan('large')`
    font-size: .8rem;
    padding: 1rem;
  `}

  a {
    color: var(--texts);
    text-decoration: none;
    transition: ${transitions.COLOR};

    &:hover {
      color: var(--highlight);
    }
  }
`
