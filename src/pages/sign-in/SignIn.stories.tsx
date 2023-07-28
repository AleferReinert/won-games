import type { StoryObj, Meta } from '@storybook/react'
import { within } from '@storybook/testing-library'
import { expect } from '@storybook/jest'
import SignInComponent from './index'

const meta: Meta<typeof SignInComponent> = {
  title: 'Pages/SignIn',
  component: SignInComponent,
  parameters: {
    layout: 'fullscreen'
  }
}
export default meta

type Story = StoryObj<typeof SignInComponent>

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
