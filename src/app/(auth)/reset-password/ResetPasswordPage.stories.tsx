import type { Meta, StoryObj } from '@storybook/react'
import { expect, userEvent, waitFor, within } from '@storybook/test'
import { companyHandler } from 'mocks/handlers/companyHandler'
import { resetPasswordErrorHandler, resetPasswordSuccessHandler } from 'mocks/handlers/resetPasswordHandler'
import * as nextAuth from 'next-auth/react'
import AuthLayout from '../layout'
import ResetPasswordPage from './page'

const meta: Meta<typeof ResetPasswordPage> = {
  title: 'Pages/ResetPassword',
  component: ResetPasswordPage,
  decorators: (Story) => (
    <AuthLayout>
      <Story />
    </AuthLayout>
  ),
  parameters: {
    layout: 'fullscreen',
    options: {
      showPanel: false
    }
  }
}
export default meta

type Story = StoryObj<typeof ResetPasswordPage>

// Disable redirect of signIn after success
// eslint-disable-next-line @typescript-eslint/no-explicit-any
;(nextAuth as any).signIn = () => Promise.resolve()

export const Error: Story = {
  parameters: {
    msw: {
      handlers: [companyHandler, resetPasswordErrorHandler]
    }
  },
  play: async ({ canvasElement, step }) => {
    const canvas = within(canvasElement)
    const inputPassword = await waitFor(() => canvas.getByLabelText('Password'))
    const inputPasswordConfirmation = await waitFor(() => canvas.getByLabelText('Confirm password'))
    const buttonSubmit = await waitFor(() => canvas.getByRole('button', { name: 'Reset password' }))

    await step('Input password', () => {
      expect(inputPassword).toHaveAttribute('type', 'password')
    })

    await step('Input passwordConfirmation', () => {
      expect(inputPasswordConfirmation).toHaveAttribute('type', 'password')
    })

    await step('Button reset password', () => {
      expect(buttonSubmit).toHaveAttribute('type', 'submit')
    })

    await step('Validation: empty fields', async () => {
      expect(inputPassword).toHaveValue('')
      userEvent.click(buttonSubmit)
      await waitFor(() => {
        const messagePassword = canvas.getByText('Password is required')
        expect(messagePassword).toBeVisible()
      })
    })

    await step('Validation: password less than 6 characters', async () => {
      await userEvent.type(inputPassword, '12345')
      userEvent.click(buttonSubmit)
      await waitFor(() => {
        const message = canvas.getByText('Password must be at least 6 characters')
        expect(message).toBeVisible()
      })
    })

    await step('Validation: different passwords', async () => {
      await userEvent.clear(inputPassword)
      await userEvent.type(inputPassword, '123456')
      await userEvent.type(inputPasswordConfirmation, '654321')
      userEvent.click(buttonSubmit)
      await waitFor(() => {
        const message = canvas.getByText('Passwords do not match')
        expect(message).toBeVisible()
      })
    })

    await step('Validation: expired link', async () => {
      await userEvent.clear(inputPassword)
      await userEvent.clear(inputPasswordConfirmation)
      await userEvent.type(inputPassword, '123456')
      await userEvent.type(inputPasswordConfirmation, '123456')
      userEvent.click(buttonSubmit)
      await waitFor(() => {
        const message = canvas.getByText('Expired link')
        expect(message).toBeVisible()
      })
    })
  }
}
export const Success: Story = {
  parameters: {
    msw: {
      handlers: [companyHandler, resetPasswordSuccessHandler]
    }
  },
  play: async ({ canvasElement, step }) => {
    const canvas = within(canvasElement)
    const inputPassword = await waitFor(() => canvas.getByLabelText('Password'))
    const inputPasswordConfirmation = await waitFor(() => canvas.getByLabelText('Confirm password'))
    const buttonSubmit = await waitFor(() => canvas.getByRole('button', { name: 'Reset password' }))

    await step('Validation: success', async () => {
      await userEvent.clear(inputPassword)
      await userEvent.clear(inputPasswordConfirmation)
      await userEvent.type(inputPassword, '123456')
      await userEvent.type(inputPasswordConfirmation, '123456')
      userEvent.click(buttonSubmit)
      await waitFor(() => {
        const message = canvas.getByText('Password changed')
        expect(message).toBeVisible()
        expect(buttonSubmit).toHaveTextContent('Redirecting...')
      })
    })
  }
}
