import React from 'react'
import { addDecorator } from '@storybook/react'
import { withA11y } from '@storybook/addon-a11y'
import { withContexts } from '@storybook/addon-contexts/react'
import '@storybook/addon-console'
import contexts from './contexts'

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
}

function Story(story) {
  return <>{story()}</>
}

addDecorator(Story)
addDecorator(withA11y)
addDecorator(withContexts(contexts))
