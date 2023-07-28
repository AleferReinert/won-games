import type { StoryObj, Meta } from '@storybook/react'
import { within } from '@storybook/testing-library'
import { expect } from '@storybook/jest'
import SignUpPage from './index'

const meta: Meta<typeof SignUpPage> = {
  title: 'Pages/SignUp',
  component: SignUpPage,
  parameters: {
    layout: 'fullscreen'
  }
}
export default meta

type Story = StoryObj<typeof SignUpPage>

export const SignUp: Story = {
  play: ({ canvasElement }) => {
    const canvas = within(canvasElement)
    const textFields = ['Name', 'E-mail', 'Password', 'Confirm password']
    const button = canvas.getByRole('button', { name: /sign up now/i })
    const alreadyHaveAccount = canvas.getByText(/already have an account?/i)
    const signIn = canvas.getByRole('link', { name: /sign in/i })

    for (const textField of textFields) {
      expect(canvas.getByPlaceholderText(textField)).toBeInTheDocument()
    }

    expect(button).toBeInTheDocument()
    expect(alreadyHaveAccount).toBeInTheDocument()
    expect(signIn).toBeInTheDocument()
  }
}
