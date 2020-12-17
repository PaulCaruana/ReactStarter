import React from 'react'
import { addDecorator } from '@storybook/react'
import { withContexts } from '@storybook/addon-contexts/react'
import contexts from './contexts'

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
}

function Story(story) {
  return <>{story()}</>
}

addDecorator(Story)
addDecorator(withContexts(contexts))
