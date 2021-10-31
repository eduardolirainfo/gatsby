
declare let window: any;


const getThemeColor = () => {
  const theme = typeof window !== 'undefined' && window.__theme

  if (theme === 'light') return '#f9efc1'
  if (theme === 'dark') return '#1e1935'
}

export default getThemeColor
