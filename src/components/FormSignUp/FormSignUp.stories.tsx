import type { StoryObj, Meta } from '@storybook/react'
import { within } from '@storybook/testing-library'
import { expect } from '@storybook/jest'
import FormSignUpComponent from './FormSignUp'

const meta: Meta<typeof FormSignUpComponent> = {
  title: 'Components/FormSignUp',
  component: FormSignUpComponent,
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

type Story = StoryObj<typeof FormSignUpComponent>

export const FormSignUp: Story = {
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
