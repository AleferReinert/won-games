import type { Meta, StoryObj } from '@storybook/react'
import { expect, within } from '@storybook/test'
import DefaultTemplate from 'templates/Default/Default'
import NotFoundPage from '.'

const meta: Meta<typeof NotFoundPage> = {
  title: 'Pages/404',
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
  name: '404',
  play: ({ canvasElement }) => {
    const canvas = within(canvasElement)
    const title = canvas.getByText('404')
    const description = canvas.getByText(/this page could not be found/i)
    const button = canvas.getByRole('link', { name: /go back/i })

    expect(title).toBeInTheDocument()
    expect(description).toBeInTheDocument()
    expect(button).toBeInTheDocument()
  }
}
