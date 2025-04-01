import { Preview, StoryContext, StoryFn } from '@storybook/react'
import { Session } from 'next-auth'
import { SessionProvider } from 'next-auth/react'
import { AppRouterContext } from 'next/dist/shared/lib/app-router-context.shared-runtime'
import { ThemeProvider } from 'styled-components'
import GlobalStyles from '../src/styles/global'
import theme from '../src/styles/theme'
import { customViewports } from './customViewports'

export interface NextAuthSessionArgs {
  nextAuthSession?: Session | null
}

const preview: Preview = {
  args: {
    nextAuthSession: {
      expires: '2023-01-01T00:00:00Z',
      user: {
        name: 'John',
        email: 'johndoe@example.com'
      }
    }
  },
  argTypes: {
    nextAuthSession: {
      table: {
        disable: true
      }
    }
  },
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
    <SessionProvider session={args.nextAuthSession}>
      <ThemeProvider theme={theme}>
        <GlobalStyles />
        <Story />
      </ThemeProvider>
    </SessionProvider>
  )
]

export default preview
