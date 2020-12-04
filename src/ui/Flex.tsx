import styled from 'styled-components'
import { SpaceProps, ColorProps, LayoutProps, FlexboxProps, BorderProps, PositionProps } from 'styled-system'
import { Box } from '~/ui/Box'

export type FlexProps = SpaceProps & ColorProps & LayoutProps & FlexboxProps & BorderProps & PositionProps

export const Flex = styled(Box)<FlexProps>({
  display: 'flex',
})
