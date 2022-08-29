import styled from 'styled-components'
import media from 'styled-media-query'
import AniLink from 'gatsby-plugin-transition-link/AniLink'

import transitions from '../../styles/transitions'
import { AvatarWrapper } from '../Avatar/styled'

// export const ProfileWrapper = styled.section`
//   color: var(--texts);
//   display: flex;
//   flex-direction: column;
// `

// export const ProfileLink = styled(AniLink)
//   `
//   color: var(--texts);
//   text-decoration: none;
//   transition: ${transitions.COLOR};

//   ${media.lessThan("large")`
//     display: flex;
//     text-align: left;
//   `}

//   &:hover {
//     color: var(--highlight);
//   }
// `

export const ProfileAuthor = styled.h1`
  font-size: 1.6rem;
  font-weight: 800;
  margin: 0.5rem auto 1.5rem;
  text-transform: uppercase;
  margin-top: 1rem;
  letter-spacing: 0.3px;
  display: inline-block;
  vertical-align: middle;
  -webkit-transform: perspective(1px) translateZ(0);
  transform: perspective(1px) translateZ(0);
  box-shadow: 0 0 1px rgba(0, 0, 0, 0);
  -webkit-transition-duration: 0.3s;
  transition-duration: 0.3s;
  -webkit-transition-property: transform;
  transition-property: transform;
  -webkit-transform-origin: 0 100%;
  transform-origin: 0 100%;

  ${media.lessThan('large')`
    font-size: 1.2rem;
    margin: 0 0 0 10px;
  `}
`
export const ProfileDescription = styled.p`
  font-size: 1rem;
  font-weight: 300;
  line-height: 1.4;
  font-family: Kalam, sans-serif;
  transition: ${transitions.ALL};

  ${media.lessThan('large')`
    display: none;
  `}
`
export const ProfileContainer = styled.section`
  display: ${(props) => (props.isMobileHeader ? 'none' : 'flex')};
  color: var(--texts);
  flex-direction: column;

  &:hover
    ${ProfileAuthor},
    &:focus
    ${ProfileAuthor},
    &:active
    ${ProfileAuthor} {
    -webkit-transform: skew(-10deg);
    transform: skew(-10deg);
  }

  &:hover
    ${AvatarWrapper},
    &:focus
    ${AvatarWrapper},
    &:active
    ${AvatarWrapper} {
  }

  &:hover ${ProfileAuthor} {
    left: 0;
    left: -2px;
  }
  &:hover small ${ProfileAuthor} {
    font-style: italic;
  }
  &:hover
    ${ProfileDescription},
    &:focus
    ${ProfileDescription},
    &:active
    ${ProfileDescription} {
    border-top: 3px solid var(--highlight);
    border-bottom: 3px solid var(--highlight);
    color: var(--highlight);
    transform: skewX(-10deg);
    opacity: 0.9;
    background-image: linear-gradient(
      60deg,
      var(--mediumBackground) 0%,
      var(--highlight) 180%
    );
  }

  ${media.lessThan('large')`
    align-items: flex-start;
    display: ${(props) => (props.isMobileHeader ? 'flex' : 'none')};
    background: var(--mediumBackground);
    border-bottom: 1px solid var(--borders);
    padding: 1rem;
    width: 100vw;
  `}
`

export const ProfileLink = styled(AniLink)`
  color: var(--texts);
  text-decoration: none;
  transition: ${transitions.COLOR};
  ${media.lessThan('large')`
    display: flex;
    text-align: left;
  `}
`

export const ProfilePosition = styled.small`
  display: block;
  font-size: 0.7rem;
  font-weight: 300;
  transition: ${transitions.ALL};

  ${media.lessThan('large')`
    font-size: 0.8rem;
    margin-top: 0.2rem;
  `}
`
