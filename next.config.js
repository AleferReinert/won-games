// eslint-disable-next-line @typescript-eslint/no-var-requires
const withPWA = require('next-pwa')({
  dest: 'public',
  disable: process.env.NODE_ENV === 'development'
})

module.exports = withPWA({
  pageExtensions: ['tsx'],
  reactStrictMode: true,
  compiler: {
    styledComponents: true
  },
  images: {
    domains: ['localhost', 'source.unsplash.com']
  }
})
