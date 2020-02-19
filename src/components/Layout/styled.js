import styled from "styled-components"
import media from "styled-media-query"

import transitions from "../../styles/transitions"

export const LayoutWrapper = styled.section`
  display: flex;

  ${media.lessThan("large")`
    flex-direction: column;
  `}
`

export const LayoutMain = styled.main`
  background: var(--background);
  min-height: 100vh;
  padding: 0 3.75rem 0 20rem;
  transition: ${transitions.BACKGROUND};
  width: 100%;

  body#grid & {
    grid-template-areas:
      "grid"
      "pagination";
  }

  ${media.lessThan("large")`
    padding: 4.125rem 0 3rem 0;
  `}
`