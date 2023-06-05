import { RouterContext } from 'next/dist/shared/lib/router-context'
import GlobalStyles from 'styles/global'
import { ThemeProvider } from 'styled-components'
import theme from 'styles/theme'
import { MINIMAL_VIEWPORTS } from '@storybook/addon-viewport'

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
        name: 'Won Dark',
        value: theme.colors.mainBg
      },
      {
        name: 'Won Light',
        value: theme.colors.white
      }
    ]
  }
}

export const decorators = [
  (Story) => (
    <ThemeProvider theme={theme}>
      <GlobalStyles removeBg />
      <Story />
    </ThemeProvider>
  )
]
