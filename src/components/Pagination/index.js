import React from 'react'
import AniLink from 'gatsby-plugin-transition-link/AniLink'

import getThemeColor from '../../utils/getThemeColor'

import * as S from './styled'

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
      {currentPage} de {numPages}
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
