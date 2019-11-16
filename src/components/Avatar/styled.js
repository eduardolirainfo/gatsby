import styled from "styled-components"
import media from "styled-media-query"
import Img from "gatsby-image"

export const AvatarWrapper = styled(Img)`
  border-radius: 5% 40% 5%;
  border: 3px solid var(--mediumBackground);
  height: 3.75rem;
  margin: auto;
  width: 3.75rem;

  ${media.lessThan("large")`
    height: 1.875rem;
    width: 1.875rem;
  `}
`
