import { Theme } from '@material-ui/core'
import { lightTheme } from './light'
import { darkTheme } from './dark'

export const defaultTheme = 'lightTheme'

const THEME_KEY = '_theme-key'
export const getSavedThemeName = (dft = defaultTheme) => {
  if (typeof window !== 'undefined' && window.localStorage) {
    const saved = window.localStorage.getItem(THEME_KEY)
    if (saved) {
      return saved
    }
  }
  return dft
}

export const saveThemeName = (themeName: string) => {
  if (window.localStorage) {
    window.localStorage.setItem(THEME_KEY, themeName)
  }
}

export type ThemeProps = {
  label: string
  theme: Theme
  default: () => boolean
}

export function muiThemes(themeName: string): ThemeProps {
  return themeMap[themeName]
}
export const themeMap: { [key: string]: ThemeProps } = {
  lightTheme: {
    label: 'Light',
    theme: lightTheme,
    default: () => getSavedThemeName(defaultTheme) === 'lightTheme',
  },
  darkTheme: {
    label: 'Dark',
    theme: darkTheme,
    default: () => getSavedThemeName(defaultTheme) === 'darkTheme',
  },
}
