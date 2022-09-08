import styled from 'styled-components'
import media from 'styled-media-query'

import transitions from '../../styles/transitions'

export const MenuLinksWrapper = styled.nav`
  ${media.lessThan('large')`
  margin: auto;
  `}
`

export const MenuLinksList = styled.ul`
  font-size: 1.2rem;
  font-weight: 300;
  ${media.lessThan('large')`
    font-size: 1.8rem;
  `}
`

export const MenuLinksItem = styled.li`
  padding: 0.5rem 0;

  ${media.lessThan('large')`     
    padding: 1rem 0;
  `}
  
  .active {
    color: var(--highlight);
  } 

  position: relative;
  top: 0;
  left: 0;
  width: 100%;
  height: 50px;
  margin: 0.5rem 0;
  display: flex;
  justify-content: center;
  align-items: center;

a {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background:transparent;
  outline:none;
  box-shadow: 20px 38px 34px -26px hsla(0,0%,0%,.2);
  border: solid 2px var(--bgMenu2);
  border-radius: 255px 15px 225px 15px/15px 225px 15px 255px;
  padding: 10px;
  letter-spacing: 1px;
  text-decoration: none;
  overflow: hidden;
  color: var(--titlePostList);
  font-weight: 400px;
  z-index: 1;
  transition: ${transitions.ALL};
  backdrop-filter: blur(15px);
  &:hover {
    box-shadow:2px 8px 4px -6px hsla(0,0%,0%,.3);
  }
}
&:hover a {
  letter-spacing: 3px;
}
& a::before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  width: 50%;
  height: 100%;
  background: linear-gradient(to left, var(--bgMenu4), transparent);
  transform: skewX(45deg) translate(0);
  transition: 0.5s;
  filter: blur(0px);
}
&:hover a::before {
	transform: skewX(45deg) translate(200px);
}
&::before {
  content: "";
  position: absolute;
  left: 50%;
  transform: translatex(-50%);
  /* bottom: -5px; */
  width: 30px;
  height: 10px;
  background: var(--bgMenu1);
  border-radius: 10px;
  transition: 0.5s;
  transition-delay: 0.5;
}
&:hover::before /*lightup button*/ {
  bottom: 0;
  height: 50%;
  width: 80%;
  border-radius: 30px;
}

&::after {
  content: "";
  position: absolute;
  left: 50%;
  transform: translatex(-50%);
  /* top: -5px; */
  width: 30px;
  height: 10px;
  background: var(--bgMenu4);
  border-radius: 10px;
  transition: 0.5s;
  transition-delay: 0.5;
}
&:hover::after {
  top: 0;
  height: 50%;
  width: 80%;
  border-radius: 30px;
}
/* &:nth-child(1)::before, 
&:nth-child(1)::after {
  background: var( --gradienteLink);
  box-shadow: 0 0 5px var(--gradienteLink), 0 0 15px var(--gradienteLink), 0 0 30px var(--gradienteLink),
    0 0 60px var(--gradienteLink);
}
&:nth-child(2)::before, 
&:nth-child(2)::after {
  background: var( --gradienteLink);
  box-shadow: 0 0 5px var(--gradienteLink), 0 0 15px var(--gradienteLink), 0 0 30px var(--gradienteLink),
    0 0 60px var(--gradienteLink);
}
&:nth-child(3)::before, 
&:nth-child(3)::after {
  background: var( --gradienteLink);
  box-shadow: 0 0 5px var(--gradienteLink), 0 0 15px var(--gradienteLink), 0 0 30px var(--gradienteLink),
    0 0 60px var(--gradienteLink);
} */

`

// export const MenuLinksItem = styled.li`
//   padding: 0.5rem 0;
//   ${media.lessThan('large')`
//     padding: 1rem 0;
//   `}
//   .active {
//     color: var(--highlight);
//   }
//   a {
//     color: var(--texts);
//     text-decoration: none;
//     transition: ${transitions.COLOR};
//     &:hover {
//       color: var(--highlight);
//     }
//   }
// `
