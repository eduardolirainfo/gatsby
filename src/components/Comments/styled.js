import styled from 'styled-components'
import media from 'styled-media-query'

export const CommentsWrapper = styled.section`
  margin: auto;
  max-width: 70rem;
  padding: 3rem 6.4rem 3rem;
  display: grid;

  ${media.lessThan('large')`
    padding: 3rem 1.4rem 0;
    max-width: 100%;
  `}

  iframe[src*='ads-iframe'] {
    display: none;
  }

  #disqus_thread {
    a {
      color: var(--highlight) !important;
    }
  }
`

export const CommentsTitle = styled.h2`
  font-size: 2.1rem;
  font-weight: 700;
  font-style: normal;
  padding: 0 1.4rem;
  margin: 0 auto;
  color: var(--postTitle) !important;
  text-transform: uppercase;
  font-family: -apple-system, "BlinkMacSystemFont", "Segoe UI", "Roboto",
    "Helvetica Neue", "Arial", "Noto Sans", sans-serif, "Apple Color Emoji",
    "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji";
  padding-bottom: 2rem;

  ${media.lessThan('large')`
    font-size: 1.375rem;
  `}
`
