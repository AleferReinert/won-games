import type { Meta, StoryObj } from '@storybook/react'
import { expect, userEvent, waitFor, within } from '@storybook/test'
import AuthTemplate from 'templates/Auth/Auth'
import SignInPage from './index.page'

const meta: Meta<typeof SignInPage> = {
  title: 'Pages/SignIn',
  component: SignInPage,
  decorators: [
    (Story) => (
      <AuthTemplate title='Sign In'>
        <Story />
      </AuthTemplate>
    )
  ],
  parameters: {
    layout: 'fullscreen',
    options: {
      showPanel: false
    }
  }
}
export default meta

type Story = StoryObj<typeof SignInPage>

export const SignIn: Story = {
  play: async ({ canvasElement, step }) => {
    const canvas = within(canvasElement)
    const inputEmail = canvas.getByRole('textbox', { name: 'E-mail' })
    const inputPassword = canvas.getByLabelText('Password')
    const buttonSignIn = canvas.getByRole('button', { name: 'Sign in' })

    await step('Input email', () => {
      expect(inputEmail).toHaveAttribute('type', 'email')
    })

    await step('Input password', () => {
      expect(inputPassword).toHaveAttribute('type', 'password')
    })

    await step('Forgot your password link', () => {
      const forgotYourPassword = canvas.getByRole('link', {
        name: /forgot your password?/i
      })
      expect(forgotYourPassword).toHaveAttribute('href', '/forgot-password')
    })

    await step('Button sign in', () => {
      expect(buttonSignIn).toHaveAttribute('type', 'submit')
    })

    await step('Sign up link', () => {
      const text = canvas.getByText(/don't have an account?/i)
      const link = canvas.getByRole('link', { name: /sign up/i })
      expect(text).toBeVisible()
      expect(link).toHaveAttribute('href', '/sign-up')
    })

    await step('Validation: empty fields', async () => {
      expect(inputEmail).toHaveValue('')
      expect(inputPassword).toHaveValue('')
      userEvent.click(buttonSignIn)
      await waitFor(() => {
        const messageEmail = canvas.getByText('E-mail is required')
        const messagePassword = canvas.getByText('Password is required')
        expect(messageEmail).toBeVisible()
        expect(messagePassword).toBeVisible()
      })
    })

    await step('Validation: invalid email', async () => {
      await userEvent.type(inputEmail, 'example@example')
      userEvent.click(buttonSignIn)
      await waitFor(() => {
        const message = canvas.getByText('Invalid e-mail')
        expect(message).toBeVisible()
      })
    })

    await step('Validation: password less than 6 characters', async () => {
      await userEvent.type(inputPassword, '12345')
      userEvent.click(buttonSignIn)
      await waitFor(() => {
        const message = canvas.getByText('Password must be at least 6 characters')
        expect(message).toBeVisible()
      })
    })
  }
}
