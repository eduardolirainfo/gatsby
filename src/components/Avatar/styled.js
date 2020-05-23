import styled from "styled-components"
import media from "styled-media-query"
import Img from "gatsby-image"

export const AvatarWrapper = styled(Img)`
  border: 3px solid var(--Background);
  margin: auto;
  width: 3.75rem;
  height: 3.75rem;
  border-radius: var(--radiusTheme);
  -webkit-transition: 0.5s ease;
  transition: 0.5s ease;

  ${media.lessThan("large")`
    height: 1.875rem;
    width: 1.875rem;
  `}

`
