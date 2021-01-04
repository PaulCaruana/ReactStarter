import React from 'react'
import { RowCol, RowColProps } from '.'
import { Meta, Story } from '@storybook/react/types-6-0'
import Box from '@material-ui/core/Box'

export default {
  title: 'Templates/Panel',
  component: RowCol,
} as Meta

export const RowTiles: Story<RowColProps> = args => (
  <>
    <h4>left aligned</h4>
    <RowCol>
      <Items />
    </RowCol>
    <h4>tiles with gap</h4>
    <RowCol gap={'10px'}>
      <Items />
    </RowCol>
    <h4>equally</h4>
    <RowCol tile={'equally'}>
      <Items />
    </RowCol>
    <h4>space between tiles</h4>
    <RowCol tile={'spaceBetween'}>
      <Items />
    </RowCol>
    <h4>space tiles evenly</h4>
    <RowCol tile={'spaceEvenly'}>
      <Items />
    </RowCol>
    <h4>centred within equally spaced tiles</h4>
    <RowCol tile={'spaceAround'}>
      <Items />
    </RowCol>
    <h4>tiles centred</h4>
    <RowCol tile={'center'}>
      <Items />
    </RowCol>
    <h4>tiles right</h4>
    <RowCol tile={'right'}>
      <Items />
    </RowCol>
  </>
)

export const RowTilesOverflow: Story<RowColProps> = args => (
  <>
    <h4>tiles wrap</h4>
    <RowCol tile={'wrap'}>
      <Items />
      <Items />
      <Items />
      <Items />
      <Items />
      <Items />
    </RowCol>
    <h4>tiles wrap evenly</h4>
    <RowCol tile={'wrapEvenly'}>
      <Items />
      <Items />
      <Items />
      <Items />
      <Items />
      <Items />
    </RowCol>
    <h4>tiles wrap centre</h4>
    <RowCol tile={'wrapCenter'} gap={'10px'}>
      <Items />
      <Items />
      <Items />
      <Items />
      <Items />
      <Items />
    </RowCol>
    <h4>tiles no wrap</h4>
    <RowCol tile={'noWrap'}>
      <Items />
      <Items />
      <Items />
      <Items />
      <Items />
      <Items />
    </RowCol>
  </>
)
export const RowTilesSizes: Story<RowColProps> = args => (
  <>
    <h4>tiles 1 2 1</h4>
    <RowCol>
      <Box p={1} flex="1 1 auto" bgcolor="warning.main">
        Item 1
      </Box>
      <Box p={1} flex="2 2 auto" bgcolor="info.main">
        Item large 2
      </Box>
      <Box p={1} flex="1 1 auto" bgcolor="error.main">
        Item med 3
      </Box>
    </RowCol>
    <h4>tiles * - -</h4>
    <RowCol>
      <Box p={1} flexGrow={1} bgcolor="warning.main">
        Item 1
      </Box>
      <Box p={1} bgcolor="info.main">
        Item large 2
      </Box>
      <Box p={1} bgcolor="error.main">
        Item med 3
      </Box>
    </RowCol>
    <h4>tiles - - *</h4>
    <RowCol>
      <Box p={1} bgcolor="warning.main">
        Item 1
      </Box>
      <Box p={1} bgcolor="info.main">
        Item large 2
      </Box>
      <Box p={1} flexGrow={1} bgcolor="error.main">
        Item med 3
      </Box>
    </RowCol>
    <h4>tiles * | |</h4>
    <RowCol>
      <Box p={1} width="100%" bgcolor="warning.main">
        Item 1
      </Box>
      <Box p={1} bgcolor="info.main">
        Item large 2
      </Box>
      <Box p={1} bgcolor="error.main">
        Item med 3
      </Box>
    </RowCol>
    <h4>tiles 60 40</h4>
    <RowCol>
      <Box p={1} flex="60 60 auto" bgcolor="warning.main">
        Item 1
      </Box>
      <Box p={1} flex="40 40 auto" bgcolor="info.main">
        Item large 2
      </Box>
    </RowCol>
    <h4>tiles 2 1 with gap</h4>
    <RowCol gap={'10px'}>
      <Box p={1} flex="2 2 auto" bgcolor="warning.main">
        Item 1
      </Box>
      <Box p={1} flex="1 1 auto" bgcolor="info.main">
        Item large 2
      </Box>
    </RowCol>
  </>
)
export const StackedTiles: Story<RowColProps> = args => (
  <>
    <h4>Stacked tiles</h4>
    <RowCol stacked>
      <Items />
    </RowCol>
    <h4>Stacked tiles full width</h4>
    <RowCol stacked tile={'fullWidth'}>
      <Items />
    </RowCol>
    <h4>Text Aligned Centered Stacked tiles full width</h4>
    <RowCol stacked tile={'fullWidth'} textAlign={'center'}>
      <Items />
    </RowCol>
    <h4>Stacked tiles centred</h4>
    <RowCol stacked tile={'center'}>
      <Items />
    </RowCol>
    <h4>Stacked tiles right</h4>
    <RowCol stacked tile={'right'}>
      <Items />
    </RowCol>
    <h4>Text Aligned Right Stacked tiles right</h4>
    <RowCol stacked tile={'right'} textAlign={'right'}>
      <Items />
    </RowCol>
    <h4>Stacked tiles with gap</h4>
    <RowCol stacked gap={'10px'}>
      <Items />
    </RowCol>
  </>
)
export const VerticallyAlignTiles: Story<RowColProps> = args => (
  <Board>
    <h4>Vertical align top</h4>
    <RowCol alignItems="flex-start" p={1} m={1} bgcolor="background.paper" height="100px">
      <Items />
    </RowCol>
    <h4>Vertical align centre with centred text</h4>
    <RowCol tile="center" alignItems="center" textAlign="center" p={1} m={1} bgcolor="background.paper" height="100px">
      <Items />
    </RowCol>
    <h4>Vertical align bottom</h4>
    <RowCol tile="right" alignItems="flex-end" p={1} m={1} bgcolor="background.paper" height="100px">
      <Items />
    </RowCol>
    <h4>Vertical full height</h4>
    <RowCol tile="center" p={1} m={1} bgcolor="background.paper" height="100px">
      <Items />
    </RowCol>
    <h4>Vertical full height and equal</h4>
    <RowCol tile="equally" p={1} m={1} bgcolor="background.paper" height="100px">
      <Items />
    </RowCol>
    <h4>Vertical different item and text alignments (spaced evenly)</h4>
    <RowCol tile="spaceEvenly" p={1} m={1} bgcolor="background.paper" height="100px">
      <Box p={1} alignSelf="flex-start" bgcolor="warning.main">
        Width: auto
      </Box>
      <Box p={1} width={150} alignSelf="center" bgcolor="info.main" textAlign={'center'}>
        Width: 150
      </Box>
      <Box p={1} width={120} alignSelf="flex-end" bgcolor="error.main" textAlign={'right'}>
        Width: 120
      </Box>
    </RowCol>
    <h4>Vertical full height with centred text</h4>
    <RowCol tile="center" p={1} m={1} bgcolor="background.paper" gap="10px" height="100px">
      <Box p={1} display="flex" alignItems="center" justifyContent="center" bgcolor="warning.main">
        Width: auto
      </Box>
      <Box p={1} display="flex" alignItems="center" justifyContent="center" width={150} bgcolor="info.main">
        Width: 150
      </Box>
      <Box p={1} display="flex" alignItems="center" justifyContent="center" width={120} bgcolor="error.main">
        Width: 120
      </Box>
    </RowCol>
  </Board>
)
function Items() {
  return (
    <>
      <Box p={1} bgcolor="warning.main">
        Width: auto
      </Box>
      <Box p={1} width={150} bgcolor="info.main">
        Width: 150
      </Box>
      <Box p={1} width={120} bgcolor="error.main">
        Width: 120
      </Box>
    </>
  )
}
function Board({ children }) {
  return (
    <>
      <div style={{ width: '100%' }}>{children}</div>
    </>
  )
}
