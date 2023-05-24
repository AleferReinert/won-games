module.exports = {
  addons: ['@storybook/addon-essentials', 'storybook-addon-next-router'],
  framework: '@storybook/react',
  stories: ['../src/components/**/stories.tsx'],
  core: {
    builder: '@storybook/builder-webpack5'
  },
  staticDirs: ['../public'],
  webpackFinal: (config) => {
    config.resolve.modules.push(`${process.cwd()}/src`)
    return config
  }
}
