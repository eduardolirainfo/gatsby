import styled from "styled-components"
import media from "styled-media-query"
import AniLink from "gatsby-plugin-transition-link/AniLink"

import transitions from "../../styles/transitions"

export const PostItemLink = styled(AniLink)`
  color: var(--texts);
  display: flex;
  text-decoration: none;
  transition: ${transitions.COLOR};

  body#grid & {
    background-color: var(--background);
  }
    -webkit-box-shadow:0 1px 1px rgba(0,0,0,0.15),0 10px 0 -5px var(--background),0 10px 1px -4px rgba(0,0,0,0.15),0 20px 0 -10px var(--background),0 20px 1px -9px rgba(0,0,0,0.15);
    box-shadow:0 1px 1px rgba(0,0,0,0.15),0 10px 0 -5px var(--background),0 10px 1px -4px rgba(0,0,0,0.15),0 20px 0 -10px var(--background),0 20px 1px -9px rgba(0,0,0,0.15);
    -webkit-transition:all ease-in-out .3s;
    -webkit-transition:all ease-in-out .3s;
    transition:all ease-in-out .3s
    position: relative;
    margin: .1rem 0 1rem 0;
    -webkit-transition: -webkit-box-shadow .25s;
    -webkit-transition: -webkit-box-shadow .25s;
    transition: -webkit-box-shadow .25s;
    -webkit-transition: box-shadow .25s;
    transition: box-shadow .25s;
    transition: box-shadow .25s, -webkit-box-shadow .25s;
    -webkit-transition: box-shadow .25s,-webkit-box-shadow .25s;
    transition: box-shadow .25s,-webkit-box-shadow .25s;
    border-radius: 2px;
  
  &:hover{
    -webkit-transition:all ease .3s;
    transition:all ease .3s;
    background-image:url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='4' height='4' viewBox='0 0 4 4'%3E%3Cpath fill='%238e75b6' fill-opacity='0.4' d='M1 3h1v1H1V3zm2-2h1v1H3V1z'%3E%3C/path%3E%3C/svg%3E");
    color: var(--highlight);
    -webkit-box-shadow:0 8px 17px 0 rgba(0,0,0,0.2),0 6px 20px 0 rgba(0,0,0,0.19);
    box-shadow:0 8px 17px 0 rgba(0,0,0,0.2),0 6px 20px 0 rgba(0,0,0,0.19)
  }


`

export const PostItemWrapper = styled.section`
  align-items: center;
  /* border-bottom: 1px solid var(--borders); */
  display: flex;
  padding: 2rem 3rem;
  width: 100%;
  transition: ${transitions.ALL};

  body#grid & {
    border: none;
    padding: 2rem 1rem;
    flex-direction: column;
    justify-content: center;
  }
  body#grid &:hover{
    -webkit-transition:all ease .3s;
    transition:all ease .3s;
    background-image:url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='4' height='4' viewBox='0 0 4 4'%3E%3Cpath fill='%238e75b6' fill-opacity='0.4' d='M1 3h1v1H1V3zm2-2h1v1H3V1z'%3E%3C/path%3E%3C/svg%3E");
    color:#fff
    -webkit-box-shadow:0 8px 17px 0 rgba(0,0,0,0.2),0 6px 20px 0 rgba(0,0,0,0.19);
    box-shadow:0 8px 17px 0 rgba(0,0,0,0.2),0 6px 20px 0 rgba(0,0,0,0.19)
  
  }

  ${media.lessThan("large")`
    align-items: flex-start;
    flex-direction: column;
    padding: 2rem 1rem;
  `}
`

export const PostItemTag = styled.div`
  align-items: center;
  color: #fff;
  display: flex;
  font-size: 1.3rem;
  font-weight: 700;
  justify-content: center;
  min-height: 90px;
  min-width: 90px;
  text-transform: uppercase;
  transition: ${transitions.ALL};
  border-radius: 50%;
  background: linear-gradient(
    230deg,
    ${props => (props.background ? props.background : " var(--highlight)")},
    #27293d
  );

  /* &:hover {
    color: ${props =>
      props.background ? props.background : " var(--highlight)"};
    transition: ${transitions.COLOR};
  } */

  ${media.lessThan("large")`
    border-radius: 0;
    font-size: 1rem;
    min-height: auto;
    min-width: auto;
    padding: .2rem .5rem;
    margin-bottom: .7rem;
  `}

  body#grid & {
    margin-bottom: 1.5rem;
  }
`

export const PostItemInfo = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 1.5rem;

  ${media.lessThan("large")`
    margin: 0;
  `}
`

export const PostItemDate = styled.time`
  font-size: 0.9rem;
`

export const PostItemTitle = styled.h1`
  font-size: 1.6rem;
  font-weight: 700;
  margin: 0.2rem 0 0.5rem;

  body#grid & {
    line-height: 1.1;
    margin: 0.8rem 0;
  }
`

export const PostItemDescription = styled.p`
  font-size: 1.2rem;
  font-weight: 300;
  line-height: 1.2;
`
