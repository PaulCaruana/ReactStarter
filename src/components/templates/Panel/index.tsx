import React from 'react'
import Box, { BoxProps } from '@material-ui/core/Box'
import styled from 'styled-components'

export type StyledPanelProps = BoxProps & {
  tile?:
    | 'left'
    | 'equally'
    | 'spaceBetween'
    | 'spaceEvenly'
    | 'spaceAround'
    | 'center'
    | 'right'
    | 'wrap'
    | 'wrapEvenly'
    | 'wrapCenter'
    | 'noWrap'
    | 'fullWidth'
  stacked?: boolean
  gap?: string
  children?: NonNullable<React.ReactNode>
}

export type PanelProps = Omit<StyledPanelProps, 'display' | 'justify' | 'flex' | 'flexDirection'>

const flexSize = tile => {
  if (tile === 'equally') {
    return 'flex: 1;'
  }
  return ''
}

const margins = (tile, stacked) => {
  if (!stacked) {
    return ''
  }
  if (tile === 'left') {
    return 'margin-right: auto;'
  }
  if (tile === 'center') {
    return 'margin-left: auto; margin-right: auto;'
  }
  if (tile === 'right') {
    return 'margin-left: auto;'
  }
  return ''
}

const fullWidth = tile => {
  if (tile === 'fullWidth') {
    return 'width: 100%;'
  }
  return ''
}
export const PanelStyle = styled(Box)`
  ${({ tile, stacked, gap }: StyledPanelProps) => `
    & > * {
        ${flexSize(tile)}
        ${margins(tile, stacked)}
        ${fullWidth(tile)}
    }
    & > :not(:last-child) {
        ${stacked ? 'margin-bottom' : 'margin-right'}: ${gap};
    }
  `}
` as React.ComponentType<StyledPanelProps>

export function Panel({
  tile = 'left',
  stacked = false,
  gap = '0',
  position = 'relative',
  children,
  ...rest
}: PanelProps) {
  const display = 'flex'
  const direction = stacked ? 'column' : 'row'
  const wrap = tile === 'wrap' || tile === 'wrapEvenly' || tile === 'wrapCenter' ? 'wrap' : 'nowrap'
  const justifyContentMap = {
    left: 'flex-start',
    right: 'flex-end',
    equally: 'space-between',
    spaceBetween: 'space-between',
    spaceEvenly: 'space-evenly',
    spaceAround: 'space-around',
    center: 'center',
    wrap: 'flex-start',
    wrapEvenly: 'space-between',
    wrapCenter: 'center',
    noWrap: 'flex-start',
    fullWidth: 'space-between',
  }
  const justifyContent = justifyContentMap[tile]
  return (
    <PanelStyle
      display={display}
      tile={tile}
      stacked={stacked}
      justifyContent={justifyContent}
      flexDirection={direction}
      gap={gap}
      flexWrap={wrap}
      position={position}
      {...rest}
    >
      {children}
    </PanelStyle>
  )
}
