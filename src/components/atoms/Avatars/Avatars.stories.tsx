import React from 'react';
import Avatar from '@material-ui/core/Avatar';
import { Meta, Story } from '@storybook/react/types-6-0';
import { Row } from '~/components/templates/Container';
import Box from '@material-ui/core/Box';

export default {
  title: 'Atoms/Avatar',
  component: Avatar,
} as Meta;

export const Tmp: Story = args => (
  <Row gap="8px">
    <Avatar alt="A Guy" src="/images/guy.jpg" />
  </Row>
);
