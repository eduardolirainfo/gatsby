import styled from "styled-components"
import media from "styled-media-query"

import transitions from "../../styles/transitions"

export const ListWrapper = styled.section`
  body#card & {
    background-color: var(--background);
    border-bottom: 1px solid var(--borders);
    display: grid;
    grid-area: card;
    grid-template-columns: repeat(auto-fit, minmax(380px, 1fr));
    transition: ${transitions.DEFAULT};
    margin: 0 auto;
    grid-gap: 0 0.75rem;
   }
  &:hover {
    transition: ${transitions.DEFAULT};
    a:not(:hover) {
      -webkit-transition: all .4s ease;
      -moz-transition: all .4s ease;
      -o-transition: all .4s ease;
      transition: all .4s ease;
      -webkit-transition-delay: 3s;
      transition-delay: 3s;
      -webkit-filter: blur(2px);
      filter: blur(2px);
    }
  }
  /*
  ${media.lessThan("small")`
       body#card & { grid-template-columns: repeat(1, 1fr); }
    `}
     ${media.between("small", "medium")`
       body#card & { grid-template-columns: repeat(2, 1fr); }
    `}
    ${media.between("medium", "large")`
       body#card & { grid-template-columns: repeat(3, 1fr); }
   `}
   ${media.greaterThan("large")`
       body#card & { grid-template-columns: repeat(4, 1fr); }
   `}*/

`
