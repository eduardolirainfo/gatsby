import React from 'react'
import getThemeColor from '../../utils/getThemeColor'

import * as S from './styled'

const PostItem = ({
  slug,
  background,
  categories,
  date,
  timeToRead,
  title,
  description,
  disableCard,
  tags
}) => (
  <S.PostItemLink to={slug} cover direction='right' bg={getThemeColor()}>
    <S.PostItemWrapper>
      <S.PostItemCat background={background}>
        {categories}
        <span />
      </S.PostItemCat>

      <S.PostItemInfo>
        <S.PostItemDate>
          {date} {timeToRead && ` • ${timeToRead} min`}
        </S.PostItemDate>
        <S.PostItemTitle>{title}</S.PostItemTitle>
        <S.PostItemDescription>{description}</S.PostItemDescription>
        <ul />
      </S.PostItemInfo>
    </S.PostItemWrapper>
  </S.PostItemLink>
)

export default PostItem
