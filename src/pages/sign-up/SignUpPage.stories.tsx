import { MockedProvider } from '@apollo/client/testing'
import type { Meta, StoryObj } from '@storybook/react'
import { expect, within } from '@storybook/test'
import AuthTemplate from 'templates/Auth/Auth'
import SignUpPage from '.'

const meta: Meta<typeof SignUpPage> = {
  title: 'Pages/SignUp',
  component: SignUpPage,
  decorators: [
    (Story) => (
      <AuthTemplate title='Sign Up'>
        <MockedProvider>
          <Story />
        </MockedProvider>
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

type Story = StoryObj<typeof SignUpPage>

export const SignUp: Story = {
  play: async ({ canvasElement, step }) => {
    const canvas = within(canvasElement)

    await step('Input name', () => {
      const inputName = canvas.getByPlaceholderText('Name')
      expect(inputName).toHaveAttribute('type', 'text')
    })

    await step('Input email', () => {
      const inputEmail = canvas.getByPlaceholderText('E-mail')
      expect(inputEmail).toHaveAttribute('type', 'email')
    })

    await step('Input password', () => {
      const inputPassword = canvas.getByPlaceholderText('Password')
      expect(inputPassword).toHaveAttribute('type', 'password')
    })

    await step('Input confirm password', () => {
      const inputConfirmPassword = canvas.getByPlaceholderText('Confirm password')
      expect(inputConfirmPassword).toHaveAttribute('type', 'password')
    })

    await step('Button sign up now', () => {
      const button = canvas.getByRole('button', { name: /sign up now/i })
      expect(button).toHaveAttribute('type', 'submit')
    })

    await step('Sign in link', () => {
      const text = canvas.getByText(/already have an account?/i)
      const link = canvas.getByRole('link', { name: /sign in/i })
      expect(text).toBeVisible()
      expect(link).toHaveAttribute('href', '/sign-in')
    })
  }
}
