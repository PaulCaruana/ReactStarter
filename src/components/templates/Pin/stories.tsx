import React from 'react'
import { Pin, PinProps } from '.'
import { Meta, Story } from '@storybook/react/types-6-0'
import Box from '@material-ui/core/Box'

export default {
  title: 'Templates/Pin',
  component: Pin,
} as Meta

export const Positions: Story<PinProps> = args => (
  <>
    <Box p={1} display="flex" position={'relative'} width={'100%'} height={500} bgcolor="info.main">
      <Box p={1} display="flex" position={'relative'} width={'100%'} height={'100%'} bgcolor="success.main" />
      <Pin p={1} width={100} height={100} bgcolor="warning.main">
        Top / Left Default
      </Pin>
      <Pin p={1} midX width={100} height={100} bgcolor="warning.main">
        Top Centre
      </Pin>
      <Pin p={1} top right width={100} height={100} bgcolor="warning.main">
        Top Right
      </Pin>
      <Pin p={1} left midY width={100} height={100} bgcolor="warning.main">
        Left Middle
      </Pin>
      <Pin p={1} midPoint width={200} height={200} bgcolor="error.main">
        MidPoint
      </Pin>
      <Pin p={1} right midY width={100} height={100} bgcolor="warning.main">
        Right Middle
      </Pin>
      <Pin p={1} left bottom width={100} height={100} bgcolor="warning.main">
        Left Bottom
      </Pin>
      <Pin p={1} midX bottom width={100} height={100} bgcolor="warning.main">
        Centre Bottom
      </Pin>
      <Pin p={1} right bottom width={100} height={100} bgcolor="warning.main">
        Right Bottom
      </Pin>
    </Box>
  </>
)

export const PositionsOffset: Story<PinProps> = args => (
  <>
    <Box p={1} display="flex" position={'relative'} width={'100%'} height={500} bgcolor="info.main">
      <Box p={1} display="flex" position={'relative'} width={'100%'} height={'100%'} bgcolor="success.main" />
      <Pin top="8px" left="8px" p={1} width={100} height={100} bgcolor="warning.main">
        Top Left 8px
      </Pin>
      <Pin p={1} top="-8px" midX width={100} height={100} bgcolor="warning.main">
        Top Centre -8px
      </Pin>
      <Pin p={1} top="8px" right width={100} height={100} bgcolor="warning.main">
        Top 8px Right
      </Pin>
      <Pin p={1} left="8px" top="-8px" midY width={100} height={100} bgcolor="warning.main">
        Left 8px Middle Top -8px
      </Pin>
      <Pin p={1} midPoint top="8px" left="-8px" width={200} height={200} bgcolor="error.main">
        MidPoint top 8px left -8px
      </Pin>
      <Pin p={1} right="8px" midY top="-8px" width={100} height={100} bgcolor="warning.main">
        Right 8px top -8px Middle
      </Pin>
      <Pin p={1} left="8px" bottom="-8px" width={100} height={100} bgcolor="warning.main">
        Left 8px Bottom -8px
      </Pin>
      <Pin p={1} midX bottom="48px" left="-8px" width={100} height={100} bgcolor="warning.main">
        Centre Bottom 48px Left -8px
      </Pin>
      <Pin p={1} right="5%" bottom="2%" width={100} height={100} bgcolor="warning.main">
        Right 5% Bottom 2%
      </Pin>
    </Box>
  </>
)

export const PositionsViewPort: Story<PinProps> = args => (
  <>
    <Box p={1} display="flex" position={'relative'} width={'100%'} height={500} bgcolor="info.main">
      <Pin position="fixed" p={1} width={100} height={100} bgcolor="warning.main">
        Top Left
      </Pin>
      <Pin position="fixed" p={1} midX width={100} height={100} bgcolor="warning.main">
        Top Centre
      </Pin>
      <Pin position="fixed" p={1} right width={100} height={100} bgcolor="warning.main">
        Top Right
      </Pin>
      <Pin position="fixed" p={1} midY width={100} height={100} bgcolor="warning.main">
        Left Middle
      </Pin>
      <Pin position="fixed" p={1} midPoint width={200} height={200} bgcolor="error.main">
        MidPoint
      </Pin>
      <Pin position="fixed" p={1} right midY width={100} height={100} bgcolor="warning.main">
        Right Middle
      </Pin>
      <Pin position="fixed" p={1} bottom width={100} height={100} bgcolor="warning.main">
        Left Bottom
      </Pin>
      <Pin position="fixed" p={1} midX bottom width={100} height={100} bgcolor="warning.main">
        Centre Bottom
      </Pin>
      <Pin position="fixed" p={1} right bottom width={100} height={100} bgcolor="warning.main">
        Right Bottom
      </Pin>
    </Box>
  </>
)
