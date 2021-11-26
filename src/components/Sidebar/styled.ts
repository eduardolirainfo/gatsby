import styled from 'styled-components'
import media from 'styled-media-query'

import transitions from '../../styles/transitions'

export const SidebarContainer = styled.aside`
  align-items: center;
  /* border-right: 1px solid var(--bordersSidebar); */
  box-shadow: 0 4px 9px 0 rgba(0, 0, 0, 0.2),
      0 3px 10px 0 rgba(0, 0, 0, 0.19);
  background: var(--mediumBackground);
  display: flex;
  flex-direction: column;
  height: 100vh;
  position: fixed;
  padding: 2rem;
  text-align: center;
  width: 22rem;
  /* transition: ${transitions.ALL}; */
  /* background: var(--bgSidebar); */
  /* background-repeat: repeat, repeat, repeat, repeat, repeat;
  background-attachment: scroll, scroll, scroll, scroll, scroll;
  background-repeat: no-repeat;
  background-attachment: fixed; */
  background-color: var(--mediumBackground);
  z-index: 2;
  /*${media.lessThan('large')`
    align-items: flex-start;
    height: auto;
    padding: 1rem;
    position: inherit;
    width: 100%;
  `}*/
  ${media.lessThan('large')`
    align-items: flex-start;
    border: 0;
    height: calc(100% - 50px);
    padding: 0;
    position: inherit;
    width: 100%;
    transform: ${(props) =>
      props.isMenuOpen ? 'translateX(0)' : 'translateX(-100vw)'};
  `}
`
export const SidebarLinksContainer = styled.section`
  width: 100%;
  height: calc(100% - 70px);
  display: flex;
  flex-direction: column;
`
