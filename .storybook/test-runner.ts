import type { TestRunnerConfig } from '@storybook/test-runner'
import { getStoryContext } from '@storybook/test-runner'
import { customViewports } from './preview'

const DEFAULT_VIEWPORT_SIZE = { width: 1024, height: 768 }

const config: TestRunnerConfig = {
  async preVisit(page, story) {
    await page.waitForTimeout(500)
    // Accesses the story's parameters and retrieves the viewport used to render it
    const context = await getStoryContext(page, story)
    const viewportName = context.parameters?.viewport?.defaultViewport
    const viewportParameter = customViewports[viewportName]

    if (viewportParameter) {
      const viewportSize: { width: number; height: number } = Object.entries(viewportParameter.styles).reduce(
        (acc, [screen, size]) => ({
          ...acc,
          // Converts the viewport size from percentages to numbers
          [screen]: parseInt(size as string)
        }),
        DEFAULT_VIEWPORT_SIZE
      )
      // Configures the Playwright page to use the viewport size
      page.setViewportSize(viewportSize)
    } else {
      page.setViewportSize(DEFAULT_VIEWPORT_SIZE)
    }
  }
}

export default config
