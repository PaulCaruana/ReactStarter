import { NextPage } from 'next'
import styled from 'styled-components'
import AppHead from '~/components/AppHead'
import Box from '~/components/Box'
import { Button } from '~/components/Button'
const IndexInner = styled.div``

const Index: NextPage = () => (
  <IndexInner>
    <h1>Welcome to My Next App!</h1>
    <AppHead title="Homepage" />
    <Button href={'/'}>Test</Button>
    <Box>The Box</Box>
  </IndexInner>
)

export default Index
