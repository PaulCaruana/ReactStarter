import React, { useContext } from 'react'
import { NextPage } from 'next'
import styled from 'styled-components'
import AppHead from '~/components/AppHead'
import Box from '~/components/Box'
import { Button as LinkButton } from '~/components/Button'
import { Button } from '@material-ui/core'
import { ThemeContext } from '~/styles/ThemeProvider'

const IndexInner = styled.div``

const Index: React.FC = () => {
  const setThemeName = useContext(ThemeContext)

  return (
    <div className="App">
      <header className="App-header">
        <IndexInner>
          <h1>Welcome to My Next App!</h1>
          <AppHead title="Homepage" />
          <LinkButton href={'/'}>Test</LinkButton>
          <Box>The Box</Box>
        </IndexInner>

        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a className="App-link" href="https://reactjs.org" target="_blank" rel="noopener noreferrer">
          Learn React
        </a>
        <Button variant="contained" color="primary" onClick={() => setThemeName('lightTheme')}>
          Set Light Theme
        </Button>
        <Button variant="contained" color="secondary" onClick={() => setThemeName('darkTheme')}>
          Set Dark Theme
        </Button>
      </header>
    </div>
  )
}

export default Index
