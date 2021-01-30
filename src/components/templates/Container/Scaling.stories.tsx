import React from 'react';
import { Row, PanelProps, Col } from '.';
import { Meta, Story } from '@storybook/react/types-6-0';
import Box from '@material-ui/core/Box';
import { Typography } from '@material-ui/core';

export default {
  title: 'Templates/Scaling',
} as Meta;

const ScalingTemplate: Story = args => (
  <Row bgcolor="#333" color="white" tile="center">
    <Row textAlign="center" maxWidth="768px" width="100%" tile="wrap">
      <Row tile="equally" flexWrap="wrap" flex="1 0 60%">
        <Box minWidth="99px">Item A</Box>
        <Box minWidth="99px" borderLeft="1px solid gray;">
          <div>+250mph</div>
          <Typography component="div" variant="caption">
            Top Speed
          </Typography>
        </Box>
        <Box minWidth="99px" borderLeft="1px solid gray;">
          <small>Item C</small>
        </Box>
      </Row>
      <Box minWidth={'212px'} flex="1 0 40%" bgcolor={'secondary.main'}>
        Item 2
      </Box>
    </Row>
  </Row>
);

export const Test1 = ScalingTemplate.bind({});
//export const Test2 = ScalingTemplate.bind({});
