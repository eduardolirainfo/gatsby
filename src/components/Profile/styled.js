import styled from "styled-components"
import media from "styled-media-query"
import AniLink from "gatsby-plugin-transition-link/AniLink"

import transitions from "../../styles/transitions"

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

export const ProfileContainer = styled.section`
  color: var(--texts);
  display: flex;
  flex-direction: column;
`

export const ProfileLink = styled(AniLink)`
  color: var(--texts);
  text-decoration: none;
  transition: ${transitions.COLOR};

  &:hover {
    color: var(--highlight);
  }

  ${media.lessThan('large')`
    display: flex;
    text-align: left;
  `}
`

export const ProfileAuthor = styled.h1`
  font-size: 1.6rem;
  font-weight: 800;
  margin: 0.5rem auto 1.5rem;
  text-transform: uppercase;
  margin-top: 1rem;
  letter-spacing: .3px;

  &:hover small {
    font-style: italic;
  }

  ${media.lessThan("large")`
    font-size: 1.2rem;
    margin: 0 0 0 10px;
  `}
`

export const ProfilePosition = styled.small`
  display: block;
  font-size: 0.7rem;
  font-weight: 300;
  transition: ${transitions.ALL};

  ${media.lessThan("large")`
    font-size: 0.8rem;
    margin-top: 0.2rem;
  `}
`
export const ProfileDescription = styled.p`
  font-size: 1rem;
  font-weight: 300;
  line-height: 1.4;

  ${media.lessThan("large")`
    display: none;
  `}
`
