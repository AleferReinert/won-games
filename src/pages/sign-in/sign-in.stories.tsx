import type { StoryObj, Meta } from '@storybook/react'
import { within } from '@storybook/testing-library'
import { expect } from '@storybook/jest'
import AuthTemplate from 'templates/Auth/Auth'
import SignInPage from './index'

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
  play: ({ canvasElement }) => {
    const canvas = within(canvasElement)
    const email = canvas.getByPlaceholderText(/e-mail/i)
    const password = canvas.getByPlaceholderText(/password/i)
    const forgotYourPassword = canvas.getByRole('link', {
      name: /forgot your password?/i
    })
    const signInNow = canvas.getByRole('button', { name: /sign in now/i })
    const dontHaveAccount = canvas.getByText(/don't have an account?/i)
    const signUp = canvas.getByRole('link', { name: /sign up/i })

    expect(email).toBeInTheDocument()
    expect(password).toBeInTheDocument()
    expect(forgotYourPassword).toBeInTheDocument()
    expect(signInNow).toBeInTheDocument()
    expect(dontHaveAccount).toBeInTheDocument()
    expect(signUp).toBeInTheDocument()
  }
}
