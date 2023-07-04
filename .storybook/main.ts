import type { StorybookConfig } from '@storybook/nextjs'

const config: StorybookConfig = {
  framework: '@storybook/nextjs',
  stories: ['../src/**/*.stories.@(js|jsx|ts|tsx)'],
  addons: ['@storybook/addon-essentials', '@storybook/addon-interactions'],
  staticDirs: ['../public'],
  //   logLevel: 'debug',
  webpackFinal: (config) => {
    config.resolve?.modules?.push(`${process.cwd()}/src`)
    return config
  }
}

export default config
