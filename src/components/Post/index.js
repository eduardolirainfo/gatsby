import React from "react"
import PropTypes from "prop-types"

import * as S from "./styled"

import getThemeColor from "../../utils/getThemeColor"

const Post = ({
  slug,
  date,
  timeToRead,
  title,
  description,
  category,
  disableCard,
}) => {
  return (
    <S.PostLink to={slug} cover direction="right" bg={getThemeColor()}>
      <S.PostWrapper className={disableCard ? "disableCard" : ""}>
        {category && (
          <S.PostTag className={`is-${category}`}>{category}</S.PostTag>
        )}
        <S.PostInfo>
          <S.PostDate>
            {date} {timeToRead && ` • ${timeToRead} min de leitura`}
          </S.PostDate>
          <S.PostTitle>{title}</S.PostTitle>
          <S.PostDescription>{description}</S.PostDescription>
        </S.PostInfo>
      </S.PostWrapper>
    </S.PostLink>
  )
}

Post.propTypes = {
  slug: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  timeToRead: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  category: PropTypes.string,
  disableCard: PropTypes.bool,
}

export default Post
