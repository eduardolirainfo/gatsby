import styled from "styled-components"
import media from "styled-media-query"
import { Algolia } from '@styled-icons/fa-brands/Algolia'
import transitions from "../../styles/transitions"

export const SearchWrapper = styled.section`
  background: var(--background);
  display: flex;
  flex-direction: column;
  width: 100%;
  transition: opacity 0.4s;

  .ais-InstantSearch__root {
    display: flex;
    flex-direction: column;
    height: auto;
    width: 100%;
  }

  .ais-SearchBox,
  .ais-Stats {
    padding: 0.5rem 3rem;

    ${media.lessThan("large")`
      padding: 0.5rem 1rem;
    `}
  }

  .ais-SearchBox {
    padding-top: 6rem;

    ${media.lessThan("large")`
      padding-top: 1rem;
    `}
  }

  .ais-Stats {
    color: var(--texts);
  }

  body#card & {
    .ais-Hits-list {
      /* background-color: var(--borders);
      border-bottom: 1px solid var(--borders);
      border-top: 1px solid var(--borders); */
      display: grid;
      grid-area: card;
      grid-gap: 1px;
      grid-template-columns: repeat(auto-fit, minmax(380px, 1fr));
      margin-top: 2rem;
      transition: ${transitions.ALL};
    }

    .ais-Hits-item {
      background-color: var(--background);
    }
  }
input[type=search], textarea {
  -webkit-transition: all 0.30s ease-in-out;
  -moz-transition: all 0.30s ease-in-out;
  -ms-transition: all 0.30s ease-in-out;
  -o-transition: all 0.30s ease-in-out;
  outline: none;
  border: 1px solid var(--borderInputColor);
  background: var(--bgInput);
}

input[type=search]:focus, textarea:focus {
  box-shadow: 0 0 5px var(--borderInputColor);
  border: 1px solid var(--borderInputColor);
}
  .ais-SearchBox-form{
  }

  .ais-SearchBox-input {
    border: 1px solid transparent;
    border-radius: 3px;
    color: var(--highlight);
    display: flex;
    padding: 0.5rem 0.75rem;
    transition: background-color 0.25s;
    font-size: 1rem;
    letter-spacing: 0.045em;
    outline: none;
    padding: 0.5rem;
    resize: none;
    width: 100%;
    background-color: var(--bgInput);
    border-color: var(--borderInputColor);

    &::placeholder {
      color: var(--texts);
    }
  }

  .ais-SearchBox-submit,
  .ais-SearchBox-reset {
    display: none;
  }
 `
// export const SearchWrapper = styled.section`
//   background: var(--background);
//   display: flex;
//   flex-direction: column;
//   width: 100%;
//   transition: opacity 0.4s;

//   .ais-InstantSearch__root {
//     display: flex;
//     flex-direction: column;
//     height: auto;
//     width: 100%;
//   }

//   .ais-SearchBox,
//   .ais-Stats {
//     padding: 0.5rem 3rem;

//     ${media.lessThan('large')`
//       padding: 0.5rem 1rem;
//     `}
//   }

//   .ais-SearchBox {
//     padding-top: 6rem;

//     ${media.lessThan('large')`
//       padding-top: 1rem;
//     `}
//   }

//   .ais-Stats {
//     color: var(--texts);
//   }


//   body#card & {
//     .ais-Hits-list {
//       transition: ${transitions.ALL};
//     }
//   .ais-SearchBox-input {
//     background: none;
//     border: none;
//     border-bottom: 1px solid var(--borders);
//     color: var(--texts);
//     display: flex;
//     font-size: 1.6rem;
//     padding: 0.5rem;
//     width: 100%;

//     &::placeholder {
//       color: var(--texts);
//     }
//   }

//   .ais-SearchBox-submit,
//   .ais-SearchBox-reset {
//     display: none;
//   }
// `


export const SearchTitle = styled.h1`
  color: var(--texts);
  font-size: 1rem;
  font-weight: 700;
  padding: 3rem 2rem;
  text-align: right;

  ${media.lessThan('large')`
    padding: 1rem;
    line-height: 1.1;
  `}
`

  export const AlgoliaIcon = styled(Algolia)`
  height: 1.2rem;
  margin-left: 0.5rem;
  width: 1.2rem;
  `

// import styled from 'styled-components'
// import media from 'styled-media-query'
// import { Algolia } from '@styled-icons/fa-brands/Algolia'

// export const SearchWrapper = styled.section`
//   background: var(--background);
//   display: flex;
//   flex-direction: column;
//   width: 100%;
//   transition: opacity 0.4s;

//   .ais-InstantSearch__root {
//     display: flex;
//     flex-direction: column;
//     height: auto;
//     width: 100%;
//   }

//   .ais-SearchBox,
//   .ais-Stats {
//     padding: 0.5rem 3rem;

//     ${media.lessThan('large')`
//       padding: 0.5rem 1rem;
//     `}
//   }

//   .ais-SearchBox {
//     padding-top: 6rem;

//     ${media.lessThan('large')`
//       padding-top: 1rem;
//     `}
//   }

//   .ais-Stats {
//     color: var(--texts);
//   }

//   .ais-SearchBox-input {
//     background: none;
//     border: none;
//     border-bottom: 1px solid var(--borders);
//     color: var(--texts);
//     display: flex;
//     font-size: 1.6rem;
//     padding: 0.5rem;
//     width: 100%;

//     &::placeholder {
//       color: var(--texts);
//     }
//   }

//   .ais-SearchBox-submit,
//   .ais-SearchBox-reset {
//     display: none;
//   }
// `

// export const SearchTitle = styled.h1`
//   color: var(--texts);
//   font-size: 1rem;
//   font-weight: 700;
//   padding: 3rem 2rem;
//   text-align: right;

//   ${media.lessThan('large')`
//     padding: 1rem;
//     line-height: 1.1;
//   `}
// `

// export const AlgoliaIcon = styled(Algolia)`
//   height: 1.2rem;
//   margin-left: 0.5rem;
//   width: 1.2rem;
// `
