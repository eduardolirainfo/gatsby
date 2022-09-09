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
    box-shadow: 0 0 0 5px var(--Background);

    
    ${media.lessThan('large')`
      height: 1.875rem;
      width: 1.875rem;
    `}

    &:hover{
      cursor: pointer; 
      animation:bounceOut .4s linear;

      @keyframes bounceOut {
            0%{ box-shadow: 0 0 0 4px var(--highlight); opacity:1;}
            25%{ box-shadow: 0 0 0 1px var(--highlight); opacity:1;}
            50%{ box-shadow: 0 0 0 7px var(--highlight); opacity:1; }
            75%{ box-shadow: 0 0 0 4px var(--highlight); opacity:1;}
            100%{ box-shadow: 0 0 0 5px var(--highlight); opacity:1;}
    }
    }
    
  }
`
