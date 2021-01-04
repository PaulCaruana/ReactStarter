import React from 'react'
import Box, { BoxProps } from '@material-ui/core/Box'
import styled from 'styled-components'

export type PinProps = BoxProps & {
  top?: string | boolean
  bottom?: string | boolean
  left?: string | boolean
  right?: string | boolean
  midX?: boolean
  midY?: boolean
  midPoint?: boolean
}
const pinCss = (top, bottom, left, right, midX, midY, midPoint) => {
  const isMidX = midX !== undefined || midPoint !== undefined
  const isMidY = midY !== undefined || midPoint !== undefined
  const isLeft = left !== undefined
  const isTop = top !== undefined
  const isRight = right !== undefined
  const isBottom = bottom !== undefined
  let leftCss = ''
  if (isLeft || isMidX) {
    if (isLeft && isMidX) {
      leftCss = `left: calc(50% + ${left === true ? '0px' : left});`
    } else {
      leftCss = isLeft ? `left: ${left === true ? '0px' : left};` : `left: 50%;`
    }
  }
  let topCss = ''
  if (isTop || isMidY) {
    if (isTop && isMidY) {
      topCss = `top: calc(50% + ${top === true ? '0px' : top});`
    } else {
      topCss = isTop ? `top: ${top === true ? 0 : top};` : `top: 50%;`
    }
  }
  let transformCss = ''
  if (isMidX || isMidY) {
    if (isMidX && isMidY) {
      transformCss = `transform: translate(-50%, -50%);`
    } else {
      transformCss = isMidY ? `transform: translate(0%, -50%);` : `transform: translate(-50%, 0%);`
    }
  }
  const rightCss = isRight ? `right: ${right === true ? '0px' : right};` : ''
  const bottomCss = isBottom ? `bottom: ${bottom === true ? '0px' : bottom};` : ''
  // Defaults
  if (leftCss === '' && rightCss === '') {
    leftCss = `left: 0px;`
  }
  if (topCss === '' && bottomCss === '') {
    topCss = `top: 0px;`
  }
  return `
    ${leftCss}
    ${topCss}
    ${rightCss}
    ${bottomCss}
    ${transformCss}
  `
}
export const Pin = styled(({ zIndex = 'speedDial', ...other }) => (
  <Box position="absolute" zIndex={zIndex} {...other} />
))`
  ${({ top, bottom, left, right, midX, midY, midPoint }: PinProps) => `
    ${pinCss(top, bottom, left, right, midX, midY, midPoint)}
  `}
` as React.ComponentType<PinProps>

export const PinVP = styled(({ zIndex = 'speedDial', ...other }) => (
  <Box position="fixed" zIndex={zIndex} {...other} />
))`
  ${({ top, bottom, left, right, midX, midY, midPoint }: PinProps) => `
    ${pinCss(top, bottom, left, right, midX, midY, midPoint)}
  `}
` as React.ComponentType<PinProps>
