import React from 'react'
import { ArrowReturnLeft } from '@styled-icons/bootstrap/ArrowReturnLeft'
import { ArrowReturnRight } from '@styled-icons/bootstrap/ArrowReturnRight'

import * as S from './styled'

import getThemeColor from '../../utils/getThemeColor'

const RecommendedPosts = ({ next, previous }) => (
  <S.RecommendedWrapper>
    {previous && (
      <S.RecommendedLink
        to={previous.fields.slug}
        cover
        direction='left'
        duration={1}
        rel='prev'
        bg={getThemeColor()}
        className='previous'
      >
        <ArrowReturnLeft />
        {previous.frontmatter.title}
      </S.RecommendedLink>
    )}
    {next && (
      <S.RecommendedLink
        to={next.fields.slug}
        cover
        direction='right'
        duration={1}
        rel='next'
        bg={getThemeColor()}
        className='next'
      >
        {next.frontmatter.title}
        <ArrowReturnRight />
      </S.RecommendedLink>
    )}
  </S.RecommendedWrapper>
)

export default RecommendedPosts
