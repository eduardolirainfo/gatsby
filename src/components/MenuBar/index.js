import React, { useState, useEffect } from "react"

import { Home } from "styled-icons/boxicons-solid/Home"
import { SearchAlt2 as Search } from "styled-icons/boxicons-regular/SearchAlt2"
import { UpArrowAlt as Arrow } from "styled-icons/boxicons-regular/UpArrowAlt"
import { Sun as Light } from "styled-icons/boxicons-solid/Sun"
import { Moon as Dark } from "styled-icons/boxicons-solid/Moon"
import { ListUl as List } from "styled-icons/boxicons-regular/ListUl"
import { Grid } from "styled-icons/boxicons-solid/Grid"

import getThemeColor from "../../utils/getThemeColor"

import * as S from "./styled"
import * as GA from "./trackers"

const MenuBar = () => {
  const [theme, setTheme] = useState(null)
  const [display, setDisplay] = useState(null)

  const isDarkMode = theme === "dark"
  const isListMode = display === "list"

  if (theme !== null && display !== null) {
    GA.themeTracker(theme)
    GA.displayTracker(display)
  }

  useEffect(() => {
    setTheme(window.__theme)
    setDisplay(window.__display)

    window.__onThemeChange = () => setTheme(window.__theme)
    window.__onDisplayChange = () => setDisplay(window.__display)
  }, [])

  return (
    <S.MenuBarWrapper>
      <S.MenuBarGroup>
        <S.MenuBarLink
          to="/"
          cover
          direction="right"
          bg={getThemeColor()}
          title="Voltar para Home"
          activeClassName="active"
        >
          <S.MenuBarItem>
            <Home />
          </S.MenuBarItem>
        </S.MenuBarLink>
        <S.MenuBarLink
          to="/search"
          cover
          direction="right"
          duration={0.8}
          bg={getThemeColor()}
          title="Pesquisar"
          activeClassName="active"
        >
          <S.MenuBarItem onClick={() => GA.searchClickTrack()}>
            <Search />
          </S.MenuBarItem>
        </S.MenuBarLink>
      </S.MenuBarGroup>
      <S.MenuBarGroup>
        <S.MenuBarItem
          title="Mudar o Tema"
          onClick={() => {
            window.__setPreferredTheme(isDarkMode ? "light" : "dark")

            if (window.DISQUS !== undefined) {
              window.setTimeout(() => {
                window.DISQUS.reset({
                  reload: true,
                })
              }, 300)
            }
          }}
          className={theme}
          isDarkMode={isDarkMode}
        >
          {!isDarkMode ? <Dark /> : <Light />}
        </S.MenuBarItem>
         {/* Mudar visualização */}
                <S.MenuBarItem title="Mudar visualização"
                    onClick={() => {
                        window.__setPreferredDisplay(isListMode ? "card" : "list")
                    }}
                    className={display}
                >
                    {isListMode ? <List/> : < Grid />}
                </S.MenuBarItem>
        <S.MenuBarItem
          title="Ir para o Topo"
          onClick={() => {
            GA.topClickTrack()
            window.scroll({ top: 0, behavior: "smooth" })
          }}
        >
          <Arrow />
        </S.MenuBarItem>
      </S.MenuBarGroup>
    </S.MenuBarWrapper>
  )
}

export default MenuBar
