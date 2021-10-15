import styled from 'styled-components'
import media from 'styled-media-query'

import AniLink from 'gatsby-plugin-transition-link/AniLink'

import transitions from '../../styles/transitions'

export const MenuBarWrapper = styled.aside`
  align-items: center;
  background: var(--bgMenuBar);
  background-image: var(--bgimage);
  border-left: 1px solid var(--bordersMenuBar);
  display: flex;
  flex-direction: column;
  height: 100vh;
  justify-content: space-between;
  padding: 0.8rem 0;
  position: fixed;
  right: 0;
  width: 3.75rem;
  ${media.lessThan('large')`
    border-top: 1px solid var(--borders);
    bottom: 0;
    flex-direction: row;
    height: auto;
    padding: 0;
    position: fixed;
    width: 100%;

  `}
`

export const MenuBarGroup = styled.div`
  display: flex;
  flex-direction: column;
  ${media.lessThan('large')`
    flex-direction: row;
  `}
`

export const MenuBarLink = styled(AniLink)`
  display: block;
  transition: ${transitions.ALL};

  svg & {
    transition: ${transitions.ALL};
    &::hover{
      background-image: linear-gradient( 60deg,var(--mediumBackground) 0%,var(--highlight) 100% )
      text-shadow: var(--textShadowConvert);

    }
  }

  &.active {
    span {
      color: var(--highlight);
      box-shadow: 9px 9px 30px 0px rgba(1, 50, 101, 0.11);

    }
  }
`
export const MenuBarItem = styled.span`
  color: var(--colorMenuItem);
  cursor: pointer;
  display: block;
  height: 3.75rem;
  padding: 1.1rem;
  position: relative;
  width: 3.75rem;
  transition: ${transitions.ALL};

  &:hover {
    transition: ${transitions.ALL};
    box-shadow: 9px 9px 30px 0px rgba(1, 50, 101, 0.11);
  }

  &.display {
    ${media.lessThan('large')`
      display: none;
    `}
  }

  ${media.greaterThan('large')`
    &:hover {
      color: var(--highlight);
    }
  `}

  ${media.lessThan('large')`
    height: 3.2rem;
    padding: .9rem;
    position: relative;
    width: 3.2rem;
  `}
`

export const MenuBarNotification = styled.span`
  background: red;
  border-radius: 50%;
  display: block;
  height: 0.4rem;
  position: absolute;
  right: 12px;
  top: 12px;
  width: 0.4rem;
`
