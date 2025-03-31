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
