import type { Meta, StoryObj } from '@storybook/react'
import { expect, waitFor, within } from '@storybook/test'
import AuthLayout from '../layout'
import EmailConfirmedPage from './page'

const meta: Meta<typeof EmailConfirmedPage> = {
  title: 'Pages/EmailConfirmed',
  component: EmailConfirmedPage,
  decorators: (Story) => (
    <AuthLayout>
      <Story />
    </AuthLayout>
  ),
  parameters: {
    layout: 'fullscreen',
    options: {
      showPanel: false
    }
  }
}
export default meta

type Story = StoryObj<typeof EmailConfirmedPage>

export const EmailConfirmed: Story = {
  play: async ({ canvasElement, step }) => {
    const canvas = within(canvasElement)

    await step('Title, alert and link to sign in', async () => {
      const title = await waitFor(() => canvas.getByRole('heading', { level: 1 }))
      const alert = await waitFor(() => canvas.getByRole('alert'))
      const link = await waitFor(() => canvas.getByRole('link', { name: /sign in/i }))
      expect(title).toHaveTextContent("Thank's for register")
      expect(alert).toHaveTextContent('Your e-mail has been confirmed.')
      expect(link).toHaveAttribute('href', '/sign-in')
    })
  }
}
