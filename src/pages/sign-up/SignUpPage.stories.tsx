import { MockedProvider } from '@apollo/client/testing'
import type { Meta, StoryObj } from '@storybook/react'
import { expect, userEvent, waitFor, within } from '@storybook/test'
import AuthTemplate from 'templates/Auth/Auth'
import SignUpPage from './index.page'

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
    const inputName = canvas.getByRole('textbox', { name: 'Full name' })
    const inputEmail = canvas.getByRole('textbox', { name: 'E-mail' })
    const inputPassword = canvas.getByLabelText('Password')
    const inputConfirmPassword = canvas.getByPlaceholderText('Confirm password')
    const buttonSignUp = canvas.getByRole('button', { name: 'Sign up' })

    await step('Input fullname', () => {
      expect(inputName).toHaveAttribute('type', 'text')
    })

    await step('Input email', () => {
      expect(inputEmail).toHaveAttribute('type', 'email')
    })

    await step('Input password', () => {
      expect(inputPassword).toHaveAttribute('type', 'password')
    })

    await step('Input confirm password', () => {
      expect(inputConfirmPassword).toHaveAttribute('type', 'password')
    })

    await step('Button sign up', () => {
      expect(buttonSignUp).toHaveAttribute('type', 'submit')
    })

    await step('Sign in link', () => {
      const text = canvas.getByText(/already have an account?/i)
      const link = canvas.getByRole('link', { name: /sign in/i })
      expect(text).toBeVisible()
      expect(link).toHaveAttribute('href', '/sign-in')
    })

    await step('Validation: empty fields', async () => {
      expect(inputName).toHaveValue('')
      expect(inputEmail).toHaveValue('')
      expect(inputPassword).toHaveValue('')
      expect(inputConfirmPassword).toHaveValue('')
      userEvent.click(buttonSignUp)
      await waitFor(() => {
        const messageName = canvas.getByText('Full name is required')
        const messageEmail = canvas.getByText('E-mail is required')
        const messagePassword = canvas.getByText('Password is required')
        expect(messageName).toBeVisible()
        expect(messageEmail).toBeVisible()
        expect(messagePassword).toBeVisible()
      })
    })

    await step('Validation: full name less than 5 characters', async () => {
      await userEvent.type(inputName, 'John')
      userEvent.click(buttonSignUp)
      await waitFor(() => {
        const message = canvas.getByText('Full name must be at least 5 characters')
        expect(message).toBeVisible()
      })
    })

    await step('Validation: Full name must not contain numbers', async () => {
      await userEvent.type(inputName, 'John123')
      userEvent.click(buttonSignUp)
      await waitFor(() => {
        const message = canvas.getByText('Full name must not contain numbers')
        expect(message).toBeVisible()
      })
    })

    await step('Validation: invalid email', async () => {
      await userEvent.type(inputEmail, 'example@example')
      userEvent.click(buttonSignUp)
      await waitFor(() => {
        const message = canvas.getByText('Invalid e-mail')
        expect(message).toBeVisible()
      })
    })

    await step('Validation: password less than 6 characters', async () => {
      await userEvent.type(inputPassword, '12345')
      userEvent.click(buttonSignUp)
      await waitFor(() => {
        const message = canvas.getByText('Password must be at least 6 characters')
        expect(message).toBeVisible()
      })
    })

    await step('Validation: passwords do not match', async () => {
      await userEvent.clear(inputPassword)
      await userEvent.type(inputPassword, '123456')
      await userEvent.type(inputConfirmPassword, '654321')
      userEvent.click(buttonSignUp)
      await waitFor(() => {
        const message = canvas.getByText('Passwords do not match')
        expect(message).toBeVisible()
      })
    })
  }
}
