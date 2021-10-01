import React from "react"
import ReactDisqusComments from "react-disqus-comments"
import LazyLoad from 'react-lazy-load'

import * as S from "./styled"

const Comments = ({ url, title }) => {
  const completeURL = `https://eduardolira.dev.br${url}`

  return (
    <S.CommentsWrapper>
      <S.CommentsTitle>Comentários</S.CommentsTitle>
      <LazyLoad offsetTop={400}>
      <ReactDisqusComments
        shortname="eduardolirainfo"
        identifier={completeURL}
        title={title}
        url={completeURL}
      />
      </LazyLoad>
    </S.CommentsWrapper>
  )
}

export default Comments
