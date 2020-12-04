import { NextPage } from 'next'
import styled from 'styled-components'
import AppHead from '~/components/AppHead'
import StyledBox from '~/components/Box'

const IndexInner = styled.div``

const Index: NextPage = () => (
  <IndexInner>
    <AppHead title="Homepage" />
    <StyledBox>Hi! Im a bx!</StyledBox>
  </IndexInner>
)

export default Index
