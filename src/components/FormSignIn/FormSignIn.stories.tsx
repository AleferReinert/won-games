import type { StoryObj, Meta } from '@storybook/react'
import { within } from '@storybook/testing-library'
import { expect } from '@storybook/jest'
import FormSignInComponent from './FormSignIn'

const meta: Meta<typeof FormSignInComponent> = {
  title: 'Components/FormSignIn',
  component: FormSignInComponent,
  parameters: {
    backgrounds: {
      default: 'Light'
    }
  },
  decorators: [
    (Story) => (
      <div style={{ maxWidth: '38rem', margin: '0 auto' }}>
        <Story />
      </div>
    )
  ]
}
export default meta

type Story = StoryObj<typeof FormSignInComponent>

export const FormSignIn: Story = {
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
