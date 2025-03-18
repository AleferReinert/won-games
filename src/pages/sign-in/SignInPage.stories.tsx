import type { Meta, StoryObj } from '@storybook/react'
import { expect, within } from '@storybook/test'
import AuthTemplate from 'templates/Auth/Auth'
import SignInPage from '.'

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

    await step('Input email', () => {
      const inputEmail = canvas.getByPlaceholderText('E-mail')
      expect(inputEmail).toHaveAttribute('type', 'email')
    })

    await step('Input password', () => {
      const inputPassword = canvas.getByPlaceholderText('Password')
      expect(inputPassword).toHaveAttribute('type', 'password')
    })

    await step('Forgot your password link', () => {
      const forgotYourPassword = canvas.getByRole('link', {
        name: /forgot your password?/i
      })
      expect(forgotYourPassword).toHaveAttribute('href', '/todo')
    })

    await step('Button sign in now', () => {
      const signInNow = canvas.getByRole('button', { name: /sign in now/i })
      expect(signInNow).toHaveAttribute('type', 'submit')
    })

    await step('Sign up link', () => {
      const text = canvas.getByText(/don't have an account?/i)
      const link = canvas.getByRole('link', { name: /sign up/i })
      expect(text).toBeVisible()
      expect(link).toHaveAttribute('href', '/sign-up')
    })
  }
}
