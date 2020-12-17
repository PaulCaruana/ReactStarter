import { createGlobalStyle } from 'styled-components'
import { Theme } from '@material-ui/core'

export type themeProps = {
  theme: Theme
}
export default createGlobalStyle`
${({ theme }: themeProps) => `
  * {
    box-sizing: border-box;
  }
  html {
    font-size: 100%;
  }
  body {
    background: ${theme.palette.background.default};
    color: ${theme.palette.text.primary};
  }

  a {
    color: ${theme.palette.text.primary};
  }
  `}
`
