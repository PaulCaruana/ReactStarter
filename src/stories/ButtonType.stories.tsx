import React from 'react'
import { ButtonType, ButtonProps } from './ButtonType'
import { Story, Meta } from '@storybook/react/types-6-0'

export default {
  title: 'Brand/Button',
  component: ButtonType,
} as Meta

const Template: Story<ButtonProps> = args => <ButtonType {...args}>Default Button</ButtonType>

export const Primary = Template.bind({})

Primary.args = {
  href: '/',
}

export const Variant = Template.bind({})

Variant.args = {
  href: '#',
  isVariant: true,
}
