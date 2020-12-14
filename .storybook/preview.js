import React, { useEffect, useState } from 'react'
import addons from '@storybook/addons'
import { addDecorator } from '@storybook/react'
import { ThemeProvider } from '@material-ui/core/styles'
import { darkTheme } from '~/themes/dark'
import { lightTheme } from '~/themes/light'
export const ADDON_ID = 'storybook-addon-themes'
export const PARAM_KEY = 'themes'

export const CHANGE = `${ADDON_ID}/change`
export const DECORATOR = `${ADDON_ID}/decorator`
export const THEME = `${ADDON_ID}/theme`

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  themes: [
    { name: 'twitter', class: 'theme-twt', color: '#00aced', default: true },
    { name: 'facebook', class: 'theme-fb', color: '#3b5998' },
  ],
}
const channel = addons.getChannel()
console.log('channel=', channel)
/*const [themeName, setThemeName] = useState(() => {
  const lastValue = channel.last(CHANGE)
  return null
})*/
/*
useEffect(() => {
  channel.on(CHANGE, setThemeName)
  return () => channel.removeListener(CHANGE, setThemeName)
}, [setThemeName])
*/

function Story(story, p, q) {
  //console.log('story=', p)
  return <ThemeProvider theme={darkTheme}>{story()}</ThemeProvider>
}

addDecorator(Story)
