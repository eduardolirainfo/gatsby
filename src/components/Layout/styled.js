import styled from "styled-components"
import media from "styled-media-query"

import transitions from "../../styles/transitions"

export const LayoutWrapper = styled.section`
  display: flex;
  overflow: hidden;
  ${media.lessThan("large")`
    flex-direction: column;
    padding-top: 4.125rem;
  `}
`
export const LayoutMain = styled.main`
  background: var(--background);
  min-height: 100vh;
  padding: 0 3.75rem 0 18rem;
  transition: ${transitions.DEFAULT};
  width: 99%;

  body#card & {
    grid-template-areas:
      "card"
      "pagination";
  }

  ${media.lessThan("large")`
    /* padding: 4.125rem 0 3rem 0; */
    padding: 0 0 3rem 0;
  `}
`
