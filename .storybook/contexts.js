import ThemeProvider from '@themes/ThemeProvider'

const isDefault = type => {
  const theme = localStorage.getItem('theme')
  if (theme) {
    return JSON.parse(theme) === type
  }
  const dftTheme = process.env.THEME || 'lightTheme'
  return dftTheme === type
}

export default [
  {
    icon: 'paintbrush',
    title: 'Change the theme',
    components: [ThemeProvider],
    params: [
      {
        name: `Light`,
        props: { themeName: 'lightTheme', propagate: true },
        default: isDefault('lightTheme'),
      },
      {
        name: `Dark`,
        props: { themeName: 'darkTheme', propagate: true },
        default: isDefault('darkTheme'),
      },
    ],
  },
]
