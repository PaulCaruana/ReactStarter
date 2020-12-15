import React, { HTMLAttributes, useState } from 'react'
import useLocalState from '../hooks/useLocalState'
import { MuiThemeProvider } from '@material-ui/core'
import { themeCreator, defaultTheme } from '.'

export const ThemeContext = React.createContext((themeName: string): void => null)

export interface ThemeProviderProps extends HTMLAttributes<HTMLDivElement> {
  themeName?: string
}

const ThemeProvider: React.FC<ThemeProviderProps> = ({ themeName, children }) => {
  // Read current theme from localStorage or maybe from an api
  const [savedThemeName, setSavedThemeName] = useLocalState<string | null>('theme', themeName || defaultTheme)

  // State to hold the selected theme name
  const [currThemeName, setCurrThemeName] = useState<string>(savedThemeName)

  // Get the theme object by theme name
  const theme = themeCreator(currThemeName)

  const setThemeName = (name: string): void => {
    setSavedThemeName(name)
    setCurrThemeName(name)
  }

  if (themeName && currThemeName !== themeName) {
    setThemeName(themeName)
  }

  return (
    <ThemeContext.Provider value={setThemeName}>
      <MuiThemeProvider theme={theme}>{children}</MuiThemeProvider>
    </ThemeContext.Provider>
  )
}

export default ThemeProvider
