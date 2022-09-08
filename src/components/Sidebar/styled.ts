import styled from 'styled-components'
import media from 'styled-media-query'

import transitions from '../../styles/transitions'

// export const SidebarContainer = styled.aside`
//   align-items: center;
//   border-right: 1px solid var(--borders);
//   background: var(--mediumBackground);
//   display: flex;
//   flex-direction: column;
//   height: 100vh;
//   position: fixed;
//   padding: 2rem;
//   text-align: center;
//   width: 20rem;
//   transition: ${transitions.ALL};
//   z-index: 2;
//   ${media.lessThan('large')`
//     align-items: flex-start;
//     border: 0;
//     height: calc(100% - 49px);
//     padding: 0;
//     width: 100%;
//     transform: ${props =>
//       props.isMenuOpen ? 'translateX(0)' : 'translateX(-100vw)'};
//   `}
// `
export const SidebarContainer = styled.aside`
   transition: 0.3s ease;
    z-index: 999;
    background: var(--borders);
    background-image: linear-gradient(135deg,transparent 0,transparent 50%,var(--mediumBackground) 50%,var(--mediumBackground) 100%),linear-gradient(135deg,transparent 0,transparent 40%,var(--background) 40%,var(--background) 100%),linear-gradient(45deg,var(--borders) 0,var(--borders) 40%,transparent 40%,transparent 100%);
    background-size: 100% 100vh;
    background-repeat: no-repeat;
    -webkit-box-align: center;
    align-items: center;
    box-shadow: rgb(0 0 0 / 20%) 0px 4px 9px 0px, rgb(0 0 0 / 19%) 0px 3px 10px 0px;
    display: flex;
    flex-direction: column;
    height: 100vh;
    position: fixed;
    text-align: center;
    width: 23.40rem;
    background-color: var(--mediumBackground);
    z-index: 2;
    padding: 2rem;
  ${media.lessThan('large')`
    align-items: flex-start;
    border: 0;
    height: calc(100% - 49px);
    padding: 0;
    width: 100%;
    transform: ${props =>
      props.isMenuOpen ? 'translateX(0)' : 'translateX(-100vw)'};
  `}
`

export const SidebarLinksContainer = styled.section`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
`
