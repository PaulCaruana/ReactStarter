import React from 'react'
import { Col, ColProps, Row, RowCol, RowProps } from './index'
import { Meta, Story } from '@storybook/react/types-6-0'
import Box from '@material-ui/core/Box'

export default {
  title: 'Atoms/Container',
  component: RowCol,
} as Meta

export const RowTiles: Story<RowProps> = args => (
  <>
    <h4>left aligned</h4>
    <Row>
      <Items />
    </Row>
    <h4>tiles with gap</h4>
    <Row gap="10px">
      <Items />
    </Row>
    <h4>equally</h4>
    <Row tile="equally">
      <Items />
    </Row>
    <h4>space between tiles</h4>
    <Row tile="spaceBetween">
      <Items />
    </Row>
    <h4>align left right</h4>
    <Row tile="spaceBetween">
      <>
        <Box p={1} bgcolor="success.main">
          Left
        </Box>
        <Box p={1} bgcolor="success.main">
          Right
        </Box>
      </>
    </Row>
    <h4>space tiles evenly</h4>
    <Row tile="spaceEvenly">
      <Items />
    </Row>
    <h4>centred within equally spaced tiles</h4>
    <Row tile="spaceAround">
      <Items />
    </Row>
    <h4>tiles centred</h4>
    <Row tile="center">
      <Items />
    </Row>
    <h4>tiles right</h4>
    <Row tile="right">
      <Items />
    </Row>
  </>
)

export const RowTilesOverflow: Story<RowProps> = args => (
  <>
    <h4>tiles wrap</h4>
    <Row tile="wrap">
      <Items />
      <Items />
      <Items />
      <Items />
      <Items />
      <Items />
    </Row>
    <h4>tiles wrap evenly</h4>
    <Row tile="wrapEvenly">
      <Items />
      <Items />
      <Items />
      <Items />
      <Items />
      <Items />
    </Row>
    <h4>tiles wrap centre</h4>
    <Row tile="wrapCenter" gap="10px">
      <Items />
      <Items />
      <Items />
      <Items />
      <Items />
      <Items />
    </Row>
    <h4>tiles no wrap</h4>
    <Row tile="noWrap">
      <Items />
      <Items />
      <Items />
      <Items />
      <Items />
      <Items />
    </Row>
  </>
)
export const RowTilesSizes: Story<RowProps> = args => (
  <>
    <h4>tiles 1 2 1</h4>
    <Row>
      <Box p={1} flex="1 1 auto" bgcolor="warning.main">
        Item 1
      </Box>
      <Box p={1} flex="2 2 auto" bgcolor="info.main">
        Item large 2
      </Box>
      <Box p={1} flex="1 1 auto" bgcolor="error.main">
        Item med 3
      </Box>
    </Row>
    <h4>tiles * - -</h4>
    <Row>
      <Box p={1} flexGrow={1} bgcolor="warning.main">
        Item 1
      </Box>
      <Box p={1} bgcolor="info.main">
        Item large 2
      </Box>
      <Box p={1} bgcolor="error.main">
        Item med 3
      </Box>
    </Row>
    <h4>tiles - - *</h4>
    <Row>
      <Box p={1} bgcolor="warning.main">
        Item 1
      </Box>
      <Box p={1} bgcolor="info.main">
        Item large 2
      </Box>
      <Box p={1} flexGrow={1} bgcolor="error.main">
        Item med 3
      </Box>
    </Row>
    <h4>tiles * | |</h4>
    <Row>
      <Box p={1} width="100%" bgcolor="warning.main">
        Item 1
      </Box>
      <Box p={1} bgcolor="info.main">
        Item large 2
      </Box>
      <Box p={1} bgcolor="error.main">
        Item med 3
      </Box>
    </Row>
    <h4>tiles 60 40</h4>
    <Row>
      <Box p={1} flex="60 60 auto" bgcolor="warning.main">
        Item 1
      </Box>
      <Box p={1} flex="40 40 auto" bgcolor="info.main">
        Item large 2
      </Box>
    </Row>
    <h4>tiles 2 1 with gap</h4>
    <Row gap="10px">
      <Box p={1} flex="2 2 auto" bgcolor="warning.main">
        Item 1
      </Box>
      <Box p={1} flex="1 1 auto" bgcolor="info.main">
        Item large 2
      </Box>
    </Row>
  </>
)
export const RowTilesVerticallyAlign: Story<RowProps> = args => (
  <Board>
    <h4>Vertical align top</h4>
    <Row alignItems="flex-start" p={1} m={1} bgcolor="background.paper" height="100px">
      <Items />
    </Row>
    <h4>Vertical align centre with centred text</h4>
    <Row tile="center" alignItems="center" textAlign="center" p={1} m={1} bgcolor="background.paper" height="100px">
      <Items />
    </Row>
    <h4>Vertical align bottom</h4>
    <Row tile="right" alignItems="flex-end" p={1} m={1} bgcolor="background.paper" height="100px">
      <Items />
    </Row>
    <h4>Vertical full height</h4>
    <Row tile="center" p={1} m={1} bgcolor="background.paper" height="100px">
      <Items />
    </Row>
    <h4>Vertical full height and equal</h4>
    <Row tile="equally" p={1} m={1} bgcolor="background.paper" height="100px">
      <Items />
    </Row>
    <h4>Vertical different item and text alignments (spaced evenly)</h4>
    <Row tile="spaceEvenly" p={1} m={1} bgcolor="background.paper" height="100px">
      <Box p={1} alignSelf="flex-start" bgcolor="warning.main">
        Width: auto
      </Box>
      <Box p={1} width={150} alignSelf="center" bgcolor="info.main" textAlign="center">
        Width: 150
      </Box>
      <Box p={1} width={120} alignSelf="flex-end" bgcolor="error.main" textAlign="right">
        Width: 120
      </Box>
    </Row>
    <h4>Vertical full height with centred text</h4>
    <Row tile="center" p={1} m={1} bgcolor="background.paper" gap="10px" height="100px">
      <Box p={1} display="flex" alignItems="center" justifyContent="center" bgcolor="warning.main">
        Width: auto
      </Box>
      <Box p={1} display="flex" alignItems="center" justifyContent="center" width={150} bgcolor="info.main">
        Width: 150
      </Box>
      <Box p={1} display="flex" alignItems="center" justifyContent="center" width={120} bgcolor="error.main">
        Width: 120
      </Box>
    </Row>
  </Board>
)
export const ColumnTiles: Story<ColProps> = args => (
  <>
    <h4>Column tiles default</h4>
    <Col>
      <Items />
    </Col>
    <h4>Column tiles full width</h4>
    <Col tile="fullWidth">
      <Items />
    </Col>
    <h4>Column Text Aligned Centered tiles full width</h4>
    <Col tile="fullWidth" textAlign="center">
      <Items />
    </Col>
    <h4>Column tiles centred</h4>
    <Col tile="center">
      <Items />
    </Col>
    <h4>Column tiles right</h4>
    <Col tile="right">
      <Items />
    </Col>
    <h4>Column Text Aligned Right tiles right</h4>
    <Col tile="right" textAlign="right">
      <Items />
    </Col>
    <h4>Column tiles with gap</h4>
    <Col gap="10px">
      <Items />
    </Col>
  </>
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
