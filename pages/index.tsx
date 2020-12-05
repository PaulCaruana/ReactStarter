import { NextPage } from 'next'
import styled from 'styled-components'
import AppHead from '~/components/AppHead'
import StyledBox from '~/components/Box'
import { Button } from '~/components/Button'
const IndexInner = styled.div``

const Index: NextPage = () => (
  <IndexInner>
    <AppHead title="Homepage" />
    <StyledBox>Hi! Im a bx!</StyledBox>
    <Button href={'/'}>Test</Button>
  </IndexInner>
)

export default Index
