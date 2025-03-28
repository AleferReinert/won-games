import type { Meta, StoryObj } from '@storybook/react'
import { expect, within } from '@storybook/test'
import DefaultTemplate from 'templates/Default/Default'
import NotFoundPage from '.'

const meta: Meta<typeof NotFoundPage> = {
  title: 'Pages/NotFound',
  component: NotFoundPage,
  decorators: [
    (Story) => (
      <DefaultTemplate>
        <Story />
      </DefaultTemplate>
    )
  ],
  parameters: {
    layout: 'fullscreen'
  }
}

export default meta

type Story = StoryObj<typeof NotFoundPage>

export const NotFound: Story = {
  play: async ({ canvasElement, step }) => {
    const canvas = within(canvasElement)

    await step('Page title', () => {
      const title = canvas.getByRole('heading', { level: 1 })
      expect(title).toHaveTextContent('Page not found')
    })

    await step('Title', () => {
      const title = canvas.getByRole('heading', { level: 2, name: /404/i })
      expect(title).toBeVisible()
    })

    await step('Description', () => {
      const description = canvas.getByText(/this page could not be found/i)
      expect(description).toBeVisible()
    })

    await step('Button link', () => {
      const button = canvas.getByRole('link', { name: /go back/i })
      expect(button).toHaveAttribute('href', '/')
    })
  }
}
