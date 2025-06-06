import type { StorybookConfig } from '@storybook/nextjs'
import dotenv from 'dotenv'

process.env.NEXT_PUBLIC_API_URL = 'http://localhost:6006'
process.env.NEXT_PUBLIC_IMAGE_HOST = ''

dotenv.config()

const config: StorybookConfig = {
  stories: [
    '../src/**/*.stories.@(js|jsx|ts|tsx)',
    '!../src/app/(main)/(home)/page.stories.tsx',
    '!../src/app/(main)/account/layout.stories.tsx',
    '!../src/app/(main)/account/orders/OrdersPage.stories.tsx',
    '!../src/app/(main)/account/profile/ProfilePage.stories.tsx',
    '!../src/app/(main)/explore/ExplorePage.stories.tsx',
    '!../src/app/(main)/game/[slug]/ProductPage.stories.tsx',
    '!../src/app/(main)/wishlist/WishlistPage.stories.tsx'
  ],
  addons: [
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@storybook/addon-interactions',
    {
      name: 'storybook-addon-module-mock',
      options: {
        exclude: ['**/node_modules/@mui/**', '**/node_modules/resize-observer-polyfill/**']
      }
    }
  ],
  features: {
    experimentalRSC: true
  },
  framework: '@storybook/nextjs',
  staticDirs: ['../public'],
  webpackFinal: (config) => {
    config.resolve?.modules?.push(`${process.cwd()}/src`)
    return config
  }
}
export default config
