import styled from 'styled-components'
import media from 'styled-media-query'

import transitions from '../../styles/transitions'

export const SocialLinksWrapper = styled.nav`
  margin: 2rem auto;
  width: 100%;

  ${media.lessThan('large')`
    display: none;
  `}
`

export const SocialLinksList = styled.ul`
  align-items: center;
  display: flex;
  justify-content: space-around;
  list-style: none;
`

export const SocialLinksItem = styled.li`
  list-style: none;
  transition: ${transitions.ALL};
  &:hover{
    transform: scale(1.2);
  }
`

export const SocialLinksLink = styled.a`
  color: var(--postTitle) !important;
  text-decoration: none;
  transition: ${transitions.COLOR};
  &:hover {
    color: var(--highlight);
  }
`

export const IconWrapper = styled.div`
  fill: #bbb;
  width: 30px;
  height: 30px;
`
