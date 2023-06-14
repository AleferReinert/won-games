import { RouterContext } from 'next/dist/shared/lib/router-context'
import GlobalStyles from 'styles/global'
import { ThemeProvider } from 'styled-components'
import { MINIMAL_VIEWPORTS } from '@storybook/addon-viewport'
import theme from 'styles/theme'
import * as nextImage from 'next/image'

const customViewports = {
  desktop: {
    name: 'Desktop',
    styles: {
      width: '1700px',
      height: '400px'
    }
  }
}

export const parameters = {
  nextRouter: {
    Provider: RouterContext.Provider
  },
  viewport: {
    viewports: {
      ...MINIMAL_VIEWPORTS,
      ...customViewports
    }
  },
  backgrounds: {
    values: [
      {
        name: 'Dark',
        value: theme.colors.darkBg
      },
      {
        name: 'Light',
        value: theme.colors.lightBg
      }
    ]
  }
}

export const decorators = [
  (Story) => (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Story />
    </ThemeProvider>
  )
]

Object.defineProperty(nextImage, 'default', {
  configurable: true,
  value: (props) => <img {...props} />
})
