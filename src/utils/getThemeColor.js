const getThemeColor = () => {
  const theme = typeof window !== "undefined" && window.__theme

  if (theme === "light") return "#fff"
  if (theme === "dark") return "#431c5d"
}

export default getThemeColor
