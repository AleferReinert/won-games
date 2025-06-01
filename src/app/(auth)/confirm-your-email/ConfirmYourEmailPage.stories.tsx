import type { Meta, StoryObj } from '@storybook/react'
import { expect, waitFor, within } from '@storybook/test'
import AuthLayout from '../layout'
import ConfirmYourEmailPage from './page'

const meta: Meta<typeof ConfirmYourEmailPage> = {
  title: 'Pages/ConfirmYourEmail',
  component: ConfirmYourEmailPage,
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

type Story = StoryObj<typeof ConfirmYourEmailPage>

export const ConfirmYourEmail: Story = {
  play: async ({ canvasElement, step }) => {
    const canvas = within(canvasElement)

    await step('Title and alert', async () => {
      const title = await waitFor(() => canvas.getByRole('heading', { level: 1 }))
      const alert = await waitFor(() => canvas.getByRole('alert'))
      expect(title).toHaveTextContent('Almost there')
      expect(alert).toHaveTextContent('Please confirm your email address using the link we just sent to your e-mail.')
    })
  }
}
