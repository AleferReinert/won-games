import type { Meta, StoryObj } from '@storybook/react'
import { expect, waitFor, within } from '@storybook/test'
import NotFoundPage from './not-found'

const meta: Meta<typeof NotFoundPage> = {
  title: 'Pages/NotFound',
  component: NotFoundPage,
  parameters: {
    layout: 'fullscreen'
  }
}

export default meta

type Story = StoryObj<typeof NotFoundPage>

export const NotFound: Story = {
  play: async ({ canvasElement, step }) => {
    const canvas = within(canvasElement)

    await step('Page title', async () => {
      const title = await waitFor(() => canvas.getByRole('heading', { level: 1 }))
      expect(title).toHaveTextContent('Page not found')
    })

    await step('Title', async () => {
      const title = await waitFor(() => canvas.getByRole('heading', { level: 2, name: /404/i }))
      expect(title).toBeVisible()
    })

    await step('Description', async () => {
      const description = await waitFor(() => canvas.getByText(/this page could not be found/i))
      expect(description).toBeVisible()
    })

    await step('Button link', async () => {
      const button = await waitFor(() => canvas.getByRole('link', { name: /go back/i }))
      expect(button).toHaveAttribute('href', '/')
    })
  }
}
