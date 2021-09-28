import styled from "styled-components"
import media from "styled-media-query"

export const Footer = styled.div`
  background: #ffffff;
  background-image: linear-gradient(
      135deg,
      transparent 0,
      transparent 50%,
      #744c9e 50%,
      #744c9e 100%
    ),
    linear-gradient(
      135deg,
      transparent 0,
      transparent 40%,
      #9d7cbf 40%,
      #9d7cbf 100%
    ),
    linear-gradient(
      45deg,
      #f5f3f7 0,
      #f5f3f7 40%,
      transparent 40%,
      transparent 100%
    );
  background-repeat: no-repeat;
  height: 1rem;
  width: 100%;
  position: absolute;
  bottom: 0;
  left: 0;
  ${media.lessThan("large")`
    display: none;
  `}
`
