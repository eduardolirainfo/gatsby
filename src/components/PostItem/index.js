import React from "react"
import PropTypes from "prop-types"
import { UnfoldMoreOutlined } from "@material-ui/icons"
import getThemeColor from "../../utils/getThemeColor"


import * as S from "./styled"

const PostItem = ({
  slug,
  background,
  categories,
  date,
  timeToRead,
  title,
  description,
  disableCard
  // tags
}) => (
    <S.PostItemLink
      to={slug}
      cover
      direction="right"
      bg={getThemeColor()}
    >
      <S.PostItemWrapper>
        <S.PostItemTag background={background}>{categories}
          <span></span>
        </S.PostItemTag>

        <S.PostItemInfo>
          <S.PostItemDate>
            {date} {timeToRead && ` • ${timeToRead} min de leitura`}
          </S.PostItemDate>
          <S.PostItemTitle>{title}</S.PostItemTitle>
          <S.PostItemDescription>{description}</S.PostItemDescription>
          {/* <S.ItemTags>
            {tags ? <>{tags.map(((tag, index) => {
              return (
                <li key={tag + `tag`}>
                  <S.TagLink>{tag}</S.TagLink>
                </li>
              )
            }))}</> : <></>}
          </S.ItemTags> */}
          <i className="ArrowRight"><small>Continuar leitura</small><UnfoldMoreOutlined /></i>
          <ul>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
          </ul>
        </S.PostItemInfo>
      </S.PostItemWrapper >
    </S.PostItemLink >
  )

PostItem.propTypes = {
  slug: PropTypes.string.isRequired,
  background: PropTypes.string,
  categories: PropTypes.string,
  date: PropTypes.string.isRequired,
  timeToRead: PropTypes.number,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  disableCard: PropTypes.bool
  // tags: PropTypes.string.isRequired,
}

export default PostItem
