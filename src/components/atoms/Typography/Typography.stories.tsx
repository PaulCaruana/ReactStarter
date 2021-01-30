import React from 'react';
import Avatar from '@material-ui/core/Avatar';
import { Meta, Story } from '@storybook/react/types-6-0';
import { Row, Col } from '~/components/templates/Container';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';

export default {
  title: 'Atoms/Typography',
  component: Avatar,
} as Meta;

export const Components: Story = args => (
  <Col className="viewport-unit">
    <h1>H1</h1>
    <Typography variant="h1" component="h2" gutterBottom>
      h1. Heading
    </Typography>
    <Box fontSize="h3.fontSize">Hello</Box>

    <Typography variant="h2" gutterBottom>
      h2. Heading
    </Typography>
    <Typography variant="h3" component="h3" gutterBottom>
      h3. Heading
    </Typography>
    <Typography variant="h4" gutterBottom>
      h4. Heading
    </Typography>
    <Typography variant="h5" gutterBottom>
      h5. Heading
    </Typography>
    <Typography variant="h6" gutterBottom>
      h6. Heading
    </Typography>
    <Typography variant="subtitle1" gutterBottom>
      subtitle1. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos blanditiis tenetur
    </Typography>
    <Typography variant="subtitle2" gutterBottom>
      subtitle2. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos blanditiis tenetur
    </Typography>
    <Typography variant="body1" gutterBottom>
      body1. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos blanditiis tenetur unde
      suscipit, quam beatae rerum inventore consectetur, neque doloribus, cupiditate numquam
      dignissimos laborum fugiat deleniti? Eum quasi quidem quibusdam.
    </Typography>
    <Typography variant="body2" gutterBottom>
      body2. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos blanditiis tenetur unde
      suscipit, quam beatae rerum inventore consectetur, neque doloribus, cupiditate numquam
      dignissimos laborum fugiat deleniti? Eum quasi quidem quibusdam.
    </Typography>
    <Typography variant="button" display="block" gutterBottom>
      button text
    </Typography>
    <Typography variant="caption" display="block" gutterBottom>
      caption text
    </Typography>
    <small>Small</small>
    <figure>Capt</figure>
    <figcaption>figc</figcaption>
    <sup>fig</sup>

    <Typography variant="overline" display="block" gutterBottom>
      overline text
    </Typography>
  </Col>
);
