import styled from 'styled-components'
import media from 'styled-media-query'
import AniLink from 'gatsby-plugin-transition-link/AniLink'

import transitions from '../../styles/transitions'

export const RecommendedWrapper = styled.section`
  /* border-bottom: 1px solid var(--borders);
  border-top: 1px solid var(--borders); */
  // background: var(--mediumBackground);
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: repeat(2, 100%);
  grid-gap: 10px;
  transition: ${transitions.ALL};
  ${media.lessThan('large')`
    display: grid;
    grid-template-columns: repeat(1, 1fr);
    grid-template-rows: repeat(2,50%);
    padding: 2rem 1rem;
    line-height: 1.3;
    font-size: .9rem;
  `}
`

export const RecommendedLink = styled(AniLink)`
  font-size: 1.25rem;
  align-items: center;
  color: var(--highlight);
  padding: 2rem;
  text-decoration: none;
  width: 100%;
  position: relative;
  -webkit-box-shadow: 0 1px 1px rgba(0, 0, 0, 0.15),
    0 10px 0 -5px var(--background), 0 10px 1px -4px rgba(0, 0, 0, 0.15),
    0 20px 0 -10px var(--background), 0 20px 1px -9px rgba(0, 0, 0, 0.15);
  box-shadow: 0 1px 1px rgba(0, 0, 0, 0.15), 0 10px 0 -5px var(--background),
    0 10px 1px -4px rgba(0, 0, 0, 0.15), 0 20px 0 -10px var(--background),
    0 20px 1px -9px rgba(0, 0, 0, 0.15);
  transition: ${transitions.ALL};
  background-color: var(--bgInput);
  border: 2px solid var(--borderInputColor);
  -webkit-clip-path: polygon(
    0 0,
    100% 0,
    100% calc(100% - 1rem + 2px),
    calc(100% - 1rem + 2px) 100%,
    0 100%
  );
  clip-path: polygon(
    0 0,
    100% 0,
    100% calc(100% - 1rem + 2px),
    calc(100% - 1rem + 2px) 100%,
    0 100%
  );
  animation: var(--animationText);
  background: linear-gradient(var(--background), var(--background)) padding-box, linear-gradient(to right, var(--background), var(--mediumBackground)) border-box;
  border: 2px solid transparent;
  transition: ${transitions.ALL};
  &::before {
    background: linear-gradient(to right, var(--colorMenuItem), var(--highlight));
    bottom: 5px;
    content: "";
    display: block;
    height: 4px;
    position: absolute;
    right: -6px;
    top: auto;
    transform: rotate(-45deg);
    width: 22px;
    z-index: 100;
  }
  svg {
    height: 3.2rem;
    padding: 0.9rem;
    position: relative;
    width: 3.2rem;
  }
  ${media.lessThan('large')`
    padding: 2rem 1rem;
    line-height: 1.3;
    font-size: .9rem;
  `}

  &:hover {
    /* background: var(--background); */
  }
  &:first-child {
    grid-column: 1 / 2; /* span from grid column line 1 to 3 (i.e., span 2 columns) */
    grid-row: 1 / 2;    /* same concept, but for rows */
  }
  &.previous {
    text-align: left;
    background: linear-gradient(var(--background), var(--background)) padding-box, linear-gradient(to right, var(--colorMenuItem), var(--highlight)) border-box; 
    /* border-right: 3px solid var(--borders);   */
    -webkit-transition: -webkit-box-shadow 0.25s;
    -webkit-transition: -webkit-box-shadow 0.25s;
    transition: -webkit-box-shadow 0.25s;
    -webkit-transition: box-shadow 0.25s;
    transition: box-shadow 0.25s;
    transition: box-shadow 0.25s, -webkit-box-shadow 0.25s;
    -webkit-transition: box-shadow 0.25s, -webkit-box-shadow 0.25s;
    transition: box-shadow 0.25s, -webkit-box-shadow 0.25s;
    transition: ${transitions.ALL};
    &:hover {
     border-color: var(--hightlight);
     transform: scale(0.98);
     transition: ${transitions.ALL};
     & svg{
       transform: scaleY(-1)
     }
    }
  }

  &.next {
    text-align: right;
    /* border-right: 3px solid var(--borders);   */
    background: linear-gradient(var(--background), var(--background)) padding-box, linear-gradient(to right, var(--colorMenuItem), var(--highlight)) border-box; 
    justify-content: flex-end;
    -webkit-transition: -webkit-box-shadow 0.25s;
    -webkit-transition: -webkit-box-shadow 0.25s;
    transition: -webkit-box-shadow 0.25s;
    -webkit-transition: box-shadow 0.25s;
    transition: box-shadow 0.25s;
    transition: box-shadow 0.25s, -webkit-box-shadow 0.25s;
    -webkit-transition: box-shadow 0.25s, -webkit-box-shadow 0.25s;
    transition: box-shadow 0.25s, -webkit-box-shadow 0.25s;
    transition: ${transitions.ALL};
    &:hover {
      border-color: var(--hightlight);
      transform: scale(0.98);
      transition: ${transitions.ALL};
     & svg{
       transform: scaleY(-1)
     }
    }
  }
  &.previous:only-child {
    margin-left: auto;
    /* border-left: 1px solid var(--borders); */

    ${media.lessThan('large')`
      position: absolute;
      max-width: 95%;
  `}
  }

  &.next:only-child {
    margin-left: auto;
    /* border-left: 1px solid var(--borders); */
  }

  // &.previous:before {
  //   content: "\\2190";
  //   margin-left: 0.5rem;
  // }
  /* &.next:before {
    content: "\\2192";
    margin-right: 0.5rem;
    &:hover {
    }
  } */
  /* &.previous:after {
    content: "\\2190";
    margin-left: 0.5rem;
  } */
  // &.next:after {
  //   content: "\\2192";
  //   margin-right: 0.5rem;
  //   &:hover {
  //   }
  // }
`
