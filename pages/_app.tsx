import React from 'react'
import type { AppProps } from 'next/app'
import ThemeProvider from '~/themes/ThemeProvider'

const navbarLinks = [
  { href: '/how-it-works', label: 'How it works' },
  { href: '/support', label: 'Support' },
]

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider>
      <Component {...pageProps} />
    </ThemeProvider>
  )
}

export default MyApp
