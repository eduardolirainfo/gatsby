import React from 'react'
import { Disqus } from 'gatsby-plugin-disqus'
import { CommentsProps } from './CommentsProps'

import * as S from './styled'

const Comments = ({ url, title }: CommentsProps) => {
  const completeURL = `https://eduardolira.dev.br${url}`

  const disqusConfig = {
    url: completeURL,
    identifier: completeURL,
    title
  }

  return (
    <S.CommentsWrapper>
      <S.CommentsTitle>Comentários</S.CommentsTitle>
      <Disqus
        config={disqusConfig}
      />
    </S.CommentsWrapper>
  )
}

export default Comments
