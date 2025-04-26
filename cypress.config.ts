import { defineConfig } from "cypress";

export default defineConfig({
  projectId: 'bugirx',
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
