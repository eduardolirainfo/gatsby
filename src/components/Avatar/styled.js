import styled from 'styled-components'
import media from 'styled-media-query'

export const AvatarWrapper = styled.div`
  img{
    border: 3px solid var(--Background);
    margin: auto;
    width: 3.75rem;
    height: 3.75rem;
    border-radius: var(--radiusTheme);
    -webkit-transition: 0.5s ease; 
    transition: 0.5s ease;

    display: inline-block;
    vertical-align: middle;
    -webkit-transform: perspective(1px) translateZ(0);
    transform: perspective(1px) translateZ(0);
    box-shadow: 0 0 1px rgba(0, 0, 0, 0);
  }

// @-webkit-keyframes bob-on-hover {
//   0% {
//     -webkit-transform: translateY(-8px);
//     transform: translateY(-8px);
//   }
//   50% {
//     -webkit-transform: translateY(-4px);
//     transform: translateY(-4px);
//   }
//   100% {
//     -webkit-transform: translateY(-8px);
//     transform: translateY(-8px);
//   }
// }
// @keyframes bob-on-hover {
//   0% {
//     -webkit-transform: translateY(-8px);
//     transform: translateY(-8px);
//   }
//   50% {
//     -webkit-transform: translateY(-4px);
//     transform: translateY(-4px);
//   }
//   100% {
//     -webkit-transform: translateY(-8px);
//     transform: translateY(-8px);
//   }
// }
// @-webkit-keyframes bob-on-hover-float {
//   100% {
//     -webkit-transform: translateY(-8px);
//     transform: translateY(-8px);
//   }
// }
// @keyframes bob-on-hover-float {
//   100% {
//     -webkit-transform: translateY(-8px);
//     transform: translateY(-8px);
//   }
// }

 img ${media.lessThan('large')`
    height: 1.875rem;
    width: 1.875rem;
  `}
`
