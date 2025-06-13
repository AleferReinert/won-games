import { defineConfig } from 'cypress'

export default defineConfig({
  projectId: 'bugirx',
  e2e: {
    baseUrl: 'http://localhost:3000',
    experimentalRunAllSpecs: true
  },
  screenshotOnRunFailure: false,
  viewportWidth: 1024,
  chromeWebSecurity: false,
  env: {
    MAILDEV_PROTOCOL: 'http',
    MAILDEV_HOST: '127.0.0.1',
    MAILDEV_SMTP_PORT: '1025',
    MAILDEV_API_PORT: '1080'
  }
})
