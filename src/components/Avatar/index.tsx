import React from 'react'
import * as S from './styled'

const Avatar = () => {
  return (
    <S.AvatarWrapper>
      <img
        src='https://eduardolira.dev.br/assets/img/dudulirafront.jpg'
        alt='Eduardo Lira'
        placeholder='blurred'
      />
    </S.AvatarWrapper>
  )
}

export default Avatar
