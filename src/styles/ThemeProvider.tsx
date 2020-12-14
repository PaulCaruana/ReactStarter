import React, { useState } from 'react'
import useLocalState from '../hooks/useLocalState'
import { MuiThemeProvider } from '@material-ui/core'
import { themeCreator } from '../themes/base'

export const ThemeContext = React.createContext((themeName: string): void => null)

const ThemeProvider: React.FC = props => {
  // Read current theme from localStorage or maybe from an api
  const [curThemeName, setCurThemeName] = useLocalState<string | null>('theme', 'lightTheme')
  // State to hold the selected theme name
  const [themeName, _setThemeName] = useState<string>(curThemeName)

  // Get the theme object by theme name
  const theme = themeCreator(themeName)
  console.log(theme)

  const setThemeName = (themeName: string): void => {
    setCurThemeName(themeName)
    _setThemeName(themeName)
  }
  return (
    <ThemeContext.Provider value={setThemeName}>
      <MuiThemeProvider theme={theme}>{props.children}</MuiThemeProvider>
    </ThemeContext.Provider>
  )
}

export default ThemeProvider
