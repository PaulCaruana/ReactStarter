import React from 'react'
import { addDecorator } from '@storybook/react'
import { withContexts } from '@storybook/addon-contexts/react'
import contexts from './contexts'

function Story(story) {
  return <>{story()}</>
}

addDecorator(Story)
addDecorator(withContexts(contexts))
