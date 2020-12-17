import React from 'react'
import { addDecorator } from '@storybook/react'
import { withA11y } from '@storybook/addon-a11y'
import { withContexts } from '@storybook/addon-contexts/react'
import { withNextRouter } from 'storybook-addon-next-router'
import { jsxDecorator } from 'storybook-addon-jsx'
import { withPerformance } from 'storybook-addon-performance'

import '@storybook/addon-console'
import contexts from './contexts'

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  html: {
    prettier: {
      tabWidth: 4,
      useTabs: false,
      htmlWhitespaceSensitivity: 'strict',
    },
  },
}

function Story(story) {
  return <>{story()}</>
}

addDecorator(Story)
addDecorator(withA11y)
addDecorator(
  withNextRouter({
    path: '/', // defaults to `/`
    asPath: '/', // defaults to `/`
    query: {}, // defaults to `{}`
    push() {}, // defaults to using addon actions integration, can override any method in the router
  }),
)
addDecorator(withContexts(contexts))
addDecorator(jsxDecorator)
addDecorator(withPerformance)
