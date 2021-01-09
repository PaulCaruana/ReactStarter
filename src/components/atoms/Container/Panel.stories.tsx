import React from 'react';
import { Row, Panel, PanelProps } from '.';
import { Meta, Story } from '@storybook/react/types-6-0';
import Image from 'next/image';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import Divider from '@material-ui/core/Divider';

export default {
  title: 'Atoms/Panel',
  component: Panel,
} as Meta;

const Template: Story<PanelProps> = args => (
  <Panel {...args}>
    <Image
      className="feature"
      alt="Apartment"
      src="/images/apartment.jpg"
      layout="fill"
      objectFit="contain"
    />
    <Box mt={2} fontSize="1.2em" color="#3C4858" fontWeight="fontWeightLight">
      Cozy 5 Stars Apartment
    </Box>
    <Box mt={1} height="6em" fontSize="0.9em" color="#999" fontWeight="fontWeightLight">
      The place is close to Barceloneta Beach and bus stop just 2 min by walk and near to "Naviglio"
      where you can enjoy the main night life in Barcelona.
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
  </Panel>
);

export const Base = Template.bind({});
Base.args = {
  width: 400,
};
