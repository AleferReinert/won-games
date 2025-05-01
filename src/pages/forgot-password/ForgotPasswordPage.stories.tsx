import type { Meta, StoryObj } from '@storybook/react'
import { expect, userEvent, waitFor, within } from '@storybook/test'
import { forgotPasswordHandler } from 'mocks/handlers/forgotPasswordHandler'
import AuthTemplate from 'templates/Auth/Auth'
import ForgotPasswordPage from '.'

const meta: Meta<typeof ForgotPasswordPage> = {
  title: 'Pages/ForgotPassword',
  component: ForgotPasswordPage,
  decorators: [
    (Story) => (
      <AuthTemplate title='Forgot Password'>
        <Story />
      </AuthTemplate>
    )
  ],
  parameters: {
    layout: 'fullscreen',
    msw: [forgotPasswordHandler],
    options: {
      showPanel: false
    }
  }
}
export default meta

type Story = StoryObj<typeof ForgotPasswordPage>

export const ForgotPassword: Story = {
  play: async ({ canvasElement, step }) => {
    const canvas = within(canvasElement)
    const inputEmail = canvas.getByRole('textbox', { name: 'E-mail' })
    const buttonSubmit = canvas.getByRole('button', { name: 'Send e-mail' })

    await step('Input email', () => {
      expect(inputEmail).toHaveAttribute('type', 'email')
    })

    await step('Button submit', () => {
      expect(buttonSubmit).toHaveAttribute('type', 'submit')
    })

    await step('Validation: empty fields', async () => {
      expect(inputEmail).toHaveValue('')
      userEvent.click(buttonSubmit)
      await waitFor(() => {
        const messageEmail = canvas.getByText('E-mail is required')
        expect(messageEmail).toBeVisible()
      })
    })

    await step('Validation: invalid email', async () => {
      await userEvent.type(inputEmail, 'example@example')
      userEvent.click(buttonSubmit)
      await waitFor(() => {
        const message = canvas.getByText('Invalid e-mail')
        expect(message).toBeVisible()
      })
    })

    await step('Error: response not ok', async () => {
      await userEvent.clear(inputEmail)
      await userEvent.type(inputEmail, 'invalid@example.com')
      userEvent.click(buttonSubmit)

      await waitFor(() => {
        const error = canvas.getByText('An error occurred')
        expect(error).toBeVisible()
      })
    })

    await step('Success', async () => {
      await userEvent.clear(inputEmail)
      await userEvent.type(inputEmail, 'valid@example.com')
      userEvent.click(buttonSubmit)
      await waitFor(() => {
        const message = canvas.getByRole('alert')
        expect(message).toHaveTextContent(`Check your inbox! We've sent you a reset link.`)
      })
    })
  }
}
