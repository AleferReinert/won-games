import { Preview, StoryContext, StoryFn } from '@storybook/react'
import { initialize, mswLoader } from 'msw-storybook-addon'
import { Session } from 'next-auth'
import { SessionProvider } from 'next-auth/react'
import { AppRouterContext } from 'next/dist/shared/lib/app-router-context.shared-runtime'
import { ThemeProvider } from 'styled-components'
import GlobalStyles from '../src/styles/global'
import theme from '../src/styles/theme'
import { customViewports } from './customViewports'
import { createMockRouter } from './mockRouter'

initialize()

export interface NextAuthSessionArgs {
  nextAuthSession?: Session | null
}

const preview: Preview = {
  argTypes: {
    nextAuthSession: {
      table: {
        disable: true
      }
    }
  },
  loaders: [mswLoader],
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
        { name: 'Dark', value: theme.colors.darkBg },
        { name: 'Light', value: theme.colors.lightBg }
      ]
    },
    controls: {
      hideNoControlsWarning: true
    },
    options: {
      showPanel: true,
      panelDirection: 'right',
      // @ts-expect-error
      storySort: (a, b) => {
        const order = ['Pages', 'Templates', 'Components', 'Atoms']
        // @ts-expect-error
        const getIndex = (title) => {
          const index = order.findIndex((item) => title.startsWith(item))
          return index === -1 ? order.length : index
        }
        const indexA = getIndex(a.title)
        const indexB = getIndex(b.title)

        if (indexA !== indexB) return indexA - indexB

        return a.title.localeCompare(b.title, 'en', { numeric: true }) // Ordenação alfabética dentro de cada grupo
      }
    }
  }
}

export const decorators = [
  (Story: StoryFn, { args }: StoryContext<NextAuthSessionArgs>) => (
    <AppRouterContext.Provider value={createMockRouter()}>
      <SessionProvider session={args.nextAuthSession}>
        <ThemeProvider theme={theme}>
          <GlobalStyles />
          <Story />
        </ThemeProvider>
      </SessionProvider>
    </AppRouterContext.Provider>
  )
]

export default preview
