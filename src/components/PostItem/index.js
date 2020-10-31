import React from "react"
import PropTypes from "prop-types"
// import { ArrowLeftOutlined } from "@material-ui/icons"
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
  disableCard,
  // tags
}) => (
  <S.PostItemLink to={slug} cover direction="right" bg={getThemeColor()}>
    <S.PostItemWrapper>
      <S.PostItemCat background={background}>
        {categories}
        <span></span>
      </S.PostItemCat>

      <S.PostItemInfo>
        <S.PostItemDate>
          {date} {timeToRead && ` • ${timeToRead} min de leitura`}
        </S.PostItemDate>
        <S.PostItemTitle>{title}</S.PostItemTitle>
        <S.PostItemDescription>{description}</S.PostItemDescription>
        {/* {<S.PostItemTag>
            {tags ? <>{tags.map(((tag, index) => {
              return (
                <li key={tag + `tag`}>
                  <S.PostItemLink>{tag}</S.PostItemLink>
                </li>
              )
            }))}</> : <></>}
          </S.PostItemTag> } */}
        {/* <i className="ArrowRight">
          {<small>Continuar leitura</small> }
          <ArrowLeftOutlined />
        </i> */}
        <ul>
        </ul>
      </S.PostItemInfo>
    </S.PostItemWrapper>
  </S.PostItemLink>
)

PostItem.propTypes = {
  slug: PropTypes.string.isRequired,
  background: PropTypes.string,
  categories: PropTypes.string,
  date: PropTypes.string.isRequired,
  timeToRead: PropTypes.number,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  disableCard: PropTypes.bool,
  // tags: PropTypes.string.isRequired,
}

export default PostItem
