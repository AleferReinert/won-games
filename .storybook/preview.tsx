import { Preview } from '@storybook/react'
import { RouterContext } from 'next/dist/shared/lib/router-context'
import { ThemeProvider } from 'styled-components'
import Container from '../src/components/Container/Container'
import React from 'react'
import GlobalStyles from '../src/styles/global'
import theme from '../src/styles/theme'

const customViewports = {
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
    nextRouter: {
      Provider: RouterContext.Provider
    },
    viewport: {
      viewports: {
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
    },
    controls: {
      hideNoControlsWarning: true
    },
    layout: 'fullscreen',
    options: {
      showPanel: true,
      panelDirection: 'right'
    }
  }
}

export const decorators = [
  (Story) => (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Container>
        <div style={{ marginTop: '1.6rem', marginBottom: '1.6rem' }}>
          <Story />
        </div>
      </Container>
    </ThemeProvider>
  )
]
export default preview