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
