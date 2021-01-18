import React from 'react';
import { Row, Panel, PanelProps, Col } from './index';
import { Meta, Story } from '@storybook/react/types-6-0';
import Image from 'next/image';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import Divider from '@material-ui/core/Divider';
import { Button } from '@material-ui/core';

export default {
  title: 'Molecules/Cards',
  component: Panel,
} as Meta;

const CardTemplate: Story<PanelProps> = args => (
  <Panel gap="16px" padding={2} {...args}>
    <Row tile="center" flex="1 1 60%">
      <Box borderRadius="50%" width="128px" height="128px" style={{ objectFit: 'cover' }} clone>
        <Image alt="Apartment" src="/images/lady.jpg" layout="fill" objectFit="cover" />
      </Box>
    </Row>

    <Col flex="20 1 40%">
      <Box width="100%" fontSize="1.2em" color="#3C4858" fontWeight="fontWeightLight">
        Cozy 5 Stars Apartment
      </Box>
      <Box mt={1} mb={1.5} flexGrow="1" fontSize="0.9em" color="#999" fontWeight="fontWeightLight">
        The place is close to Barceloneta Beach and bus stop just 2 min by walk and near to
        "Naviglio" where you can enjoy the main night life in Barcelona.
      </Box>
      <Divider />
      <Row mt={2} tile="spaceBetween">
        <>
          <Box fontSize="1.1em" color="rgba(0, 0, 0, 0.87)" fontWeight="fontWeightLight">
            $899/night
          </Box>
          <Box>&nbsp;</Box>
        </>
      </Row>
    </Col>
  </Panel>
);

export const Portrait = CardTemplate.bind({});
Portrait.args = {
  maxWidth: 300,
  isColumn: true,
};

export const Landscape = CardTemplate.bind({});
Landscape.args = {
  maxWidth: 600,
  isColumn: false,
};
