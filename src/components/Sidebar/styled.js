import styled from "styled-components"
import media from "styled-media-query"

import transitions from "../../styles/transitions"

export const SidebarContainer = styled.aside`
  align-items: center;
  border-right: 1px solid var(--borders);
  background: var(--mediumBackground);
  display: flex;
  flex-direction: column;
  height: 100vh;
  position: fixed;
  padding: 2rem;
  text-align: center;
  width: 20rem;
  transition: ${transitions.ALL};

  background-color: var(--mediumBackground);
  /* border-bottom-right-radius: 40px;
    border-bottom-left-radius: 40px; */


  ${media.lessThan("large")`
    align-items: flex-start;
    height: auto;
    padding: 1rem;
    position: inherit;
    width: 100%;
  `}

`
