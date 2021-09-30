import React from "react"

import Avatar from "../Avatar"
import * as S from "./styled"

import getThemeColor from "../../utils/getThemeColor"

const Profile = ({ title, position, authorDescription, isMobileHeader }) => {
  return (
    <S.ProfileContainer isMobileHeader={isMobileHeader}>
      <S.ProfileLink paintDrip to="/" hex={getThemeColor()} duration={0.6}>
        <Avatar />
        <S.ProfileAuthor>
          {title}
          <S.ProfilePosition>{position}</S.ProfilePosition>
        </S.ProfileAuthor>
      </S.ProfileLink>
      <S.ProfileDescription>{authorDescription}</S.ProfileDescription>
    </S.ProfileContainer>
  )
}

export default Profile
