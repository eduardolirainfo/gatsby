import React from 'react'
import AniLink from 'gatsby-plugin-transition-link/AniLink'

import getThemeColor from '../../utils/getThemeColor'

import * as S from './styled'

function romanize (num) {
  const lookup = { M: 1000, CM: 900, D: 500, CD: 400, C: 100, XC: 90, L: 50, XL: 40, X: 10, IX: 9, V: 5, IV: 4, I: 1 }; let roman = ''; let i
  for (i in lookup) {
    while (num >= lookup[i]) {
      roman += i
      num -= lookup[i]
    }
  }
  return roman
}

const Pagination = ({
  isFirst,
  isLast,
  currentPage,
  numPages,
  prevPage,
  nextPage
}) => (
  <S.PaginationWrapper>
    {!isFirst && (
      <AniLink
        to={prevPage}
        cover
        direction='left'
        bg={getThemeColor()}
        duration={0.6}
      >
        ← página anterior
      </AniLink>
    )}
    <p>
      {romanize(currentPage)} de {romanize(numPages)}
    </p>
    {!isLast && (
      <AniLink
        to={nextPage}
        cover
        direction='right'
        bg={getThemeColor()}
        duration={0.6}
      >
        proxima página →
      </AniLink>
    )}
  </S.PaginationWrapper>
)

export default Pagination
