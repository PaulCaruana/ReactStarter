import React from 'react'
import App from 'next/app'
import AppNav from '~/components/layout/AppNav'
/*
import { ThemeProvider } from 'styled-components'
import { MuiThemeProvider, StylesProvider } from '@material-ui/core/styles'
*/
import ThemeProvider from '~/styles/ThemeProvider'
import GlobalStyle from '~/styles/global'
import { dark, light } from '~/styles/themes'
import type { AppProps } from 'next/app'
import CssBaseline from '@material-ui/core/CssBaseline'

const navbarLinks = [
  { href: '/how-it-works', label: 'How it works' },
  { href: '/support', label: 'Support' },
]

function MyApp({ Component, pageProps }: AppProps) {
  React.useEffect(() => {
    // Remove the server-side injected CSS.
    const jssStyles = document.querySelector('#jss-server-side')
    if (jssStyles) {
      jssStyles.parentElement.removeChild(jssStyles)
    }
  }, [])

  return (
    /*
    <StylesProvider injectFirst>
      <ThemeProvider theme={dark}>
        <GlobalStyle />
*/
    <ThemeProvider>
      <CssBaseline />
      <Component {...pageProps} />
    </ThemeProvider>
    /*
      </ThemeProvider>
    </StylesProvider>
*/
  )
}

export default MyApp
