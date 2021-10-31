import React from 'react'
import AniLink from 'gatsby-plugin-transition-link/AniLink'

import links from './content'
import * as S from './styled'

import getThemeColor from '../../utils/getThemeColor'

const MenuLinks = () => {
  return (
    <S.MenuLinksWrapper>
      <S.MenuLinksList>
        {links.map((link, i) => (
          <S.MenuLinksItem key={i}>
            <AniLink
              swipe
              top='exit'
              // direction="left"
              bg={getThemeColor()}
              to={link.url}
              activeClassName='active'
            >
              {link.label}
            </AniLink>
          </S.MenuLinksItem>
        ))}
      </S.MenuLinksList>
    </S.MenuLinksWrapper>
  )
}

export default MenuLinks
