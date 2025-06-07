import { Preview, StoryContext, StoryFn } from '@storybook/react'
import { companyHandler } from 'mocks/handlers/companyHandler'
import { initialize, mswLoader } from 'msw-storybook-addon'
import NextAuth, { Session } from 'next-auth'
import { SessionProvider } from 'next-auth/react'
import { AppRouterContext } from 'next/dist/shared/lib/app-router-context.shared-runtime'
import { getTailwindValue } from 'utils/getTailwindValue'
import '../src/app/globals.css'
import { customViewports } from './customViewports'

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
    chromatic: { disableSnapshot: true },
    layout: 'fullscreen',
    msw: {
      handlers: [companyHandler]
    },
    nextjs: {
      appDirectory: true
    },
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
        { name: 'Dark', value: getTailwindValue('--color-theme-gray-900') },
        { name: 'Light', value: getTailwindValue('--color-theme-gray-100') }
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
    // <AppRouterContext.Provider value={createMockRouter()}>
    <SessionProvider session={args.nextAuthSession}>
      <Story />
    </SessionProvider>
    // </AppRouterContext.Provider>
  )
]

Object.defineProperty(NextAuth, 'getServerSession', {
  value: async () => ({
    user: {
      name: 'John Doe',
      email: 'johndoe@example.com'
    },
    id: 'mock-id',
    jwt: 'mock-jwt'
  })
})

export default preview
