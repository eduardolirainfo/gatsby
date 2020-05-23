import styled from 'styled-components'
import media from 'styled-media-query'

export const Footer = styled.div`
background: #FFFFFF;
background-image: linear-gradient(135deg, transparent 0, transparent 50%,  #744C9E 50%, #744C9E 100%), linear-gradient(135deg, transparent 0, transparent 40%, #9D7CBF 40%, #9D7CBF 100%),
  linear-gradient(45deg,#F5F3F7 0, #F5F3F7 40%, transparent 40%, transparent 100%);
    background-repeat: no-repeat;
    height: 1rem;
    width: 100%;
    position: absolute;
    bottom: 0;
    left: 0;
  ${media.lessThan('large')`
    display: none;
  `}
`
