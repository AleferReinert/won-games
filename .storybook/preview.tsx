import { Preview } from '@storybook/react'
import { AppRouterContext } from 'next/dist/shared/lib/app-router-context.shared-runtime'
import { ThemeProvider } from 'styled-components'
import GlobalStyles from '../src/styles/global'
import theme from '../src/styles/theme'

export const customViewports = {
  xxsmall: {
    name: `320 x 480`,
    styles: {
      width: theme.breakpoint.xxsmall,
      height: '480px'
    }
  },
  xsmall: {
    name: `360 x 640`,
    styles: {
      width: theme.breakpoint.xsmall,
      height: '640px'
    }
  },
  small: {
    name: `768 x 1024`,
    styles: {
      width: theme.breakpoint.small,
      height: '1024px'
    }
  },
  medium: {
    name: `1024 x 768`,
    styles: {
      width: theme.breakpoint.medium,
      height: '768px'
    }
  },
  large: {
    name: `1366 x 768`,
    styles: {
      width: theme.breakpoint.large,
      height: '768px'
    }
  },
  xlarge: {
    name: `1920 x 1080`,
    styles: {
      width: theme.breakpoint.xlarge,
      height: '1080px'
    }
  }
}

const preview: Preview = {
  parameters: {
    layout: 'fullscreen',
    nextRouter: {
      Provider: AppRouterContext.Provider
    },
    viewport: {
      viewports: {
        ...customViewports
      }
    },
    backgrounds: {
      default: 'Dark',
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
    },
    controls: {
      hideNoControlsWarning: true
    },
    options: {
      showPanel: true,
      panelDirection: 'right',
      storySort: (a, b) => {
        const order = ['Pages', 'Templates', 'Components', 'Atoms']

        const getIndex = (title) => {
          const index = order.findIndex((item) => title.startsWith(item))
          return index === -1 ? order.length : index // Se não estiver na ordem, coloca no final
        }

        const indexA = getIndex(a.title)
        const indexB = getIndex(b.title)

        if (indexA !== indexB) {
          return indexA - indexB // Ordena conforme a ordem definida
        }

        return a.title.localeCompare(b.title, 'en', { numeric: true }) // Ordenação alfabética dentro de cada grupo
      }
    }
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
export default preview
