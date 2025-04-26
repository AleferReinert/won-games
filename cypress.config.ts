import { defineConfig } from 'cypress'

export default defineConfig({
  projectId: 'bugirx',
  e2e: {
    baseUrl: 'http://localhost:3000',
  },
  screenshotOnRunFailure: false,

})
