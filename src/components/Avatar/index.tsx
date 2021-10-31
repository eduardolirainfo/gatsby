import React from 'react'
import * as S from './styled'
import FileImage from '../../../static/assets/img/dudulirafront.jpg'

const Avatar = () => {
  return (
    <S.AvatarWrapper>
      <img
        src={FileImage}
        alt='Eduardo Lira'
        placeholder='blurred'
      />
    </S.AvatarWrapper>
  )
}

export default Avatar
