import type { StorybookConfig } from '@storybook/nextjs'
import dotenv from 'dotenv'

process.env.NEXT_PUBLIC_API_URL = 'http://localhost:6006'
dotenv.config()

const config: StorybookConfig = {
  stories: ['../src/**/*.stories.@(js|jsx|ts|tsx)'],
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
  framework: {
    name: '@storybook/nextjs',
    options: {}
  },
  staticDirs: ['../public'],
  webpackFinal: (config) => {
    config.resolve?.modules?.push(`${process.cwd()}/src`)
    return config
  }
}
export default config
