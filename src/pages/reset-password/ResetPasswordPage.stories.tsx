import type { Meta, StoryObj } from '@storybook/react'
import { expect, userEvent, waitFor, within } from '@storybook/test'
import { resetPasswordHandler } from 'mocks/handlers/resetPasswordHandler'
import * as nextAuthReact from 'next-auth/react'
import * as nextNavigation from 'next/navigation'
import { createMock } from 'storybook-addon-module-mock'
import AuthTemplate from 'templates/Auth/Auth'
import ResetPasswordPage from './index.page'

let query: { [key: string]: string } = {}

const meta: Meta<typeof ResetPasswordPage> = {
  title: 'Pages/ResetPassword',
  component: ResetPasswordPage,
  decorators: [
    (Story) => (
      <AuthTemplate title='Reset Password'>
        <Story />
      </AuthTemplate>
    )
  ],
  parameters: {
    layout: 'fullscreen',
    msw: {
      handlers: [resetPasswordHandler]
    },
    options: {
      showPanel: false
    }
  }
}
export default meta

type Story = StoryObj<typeof ResetPasswordPage>

export const Error: Story = {
  play: async ({ canvasElement, step }) => {
    const canvas = within(canvasElement)
    const inputPassword = canvas.getByLabelText('Password')
    const inputPasswordConfirmation = canvas.getByLabelText('Confirm password')
    const buttonSubmit = canvas.getByRole('button', { name: 'Reset password' })

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
    moduleMock: {
      mock: () => {
        const useSearchParamsMock = createMock(nextNavigation, 'useSearchParams')
        useSearchParamsMock.mockImplementation(
          () =>
            ({
              get: (key: string) => query[key]
            }) as unknown as nextNavigation.ReadonlyURLSearchParams
        )
        const signInMock = createMock(nextAuthReact, 'signIn')
        signInMock.mockImplementation(() => {
          return Promise.resolve({ error: null, status: 200, ok: true, url: '' })
        })
      }
    }
  },
  play: async ({ canvasElement, step }) => {
    query = { code: 'validCode' }
    const canvas = within(canvasElement)
    const inputPassword = canvas.getByLabelText('Password')
    const inputPasswordConfirmation = canvas.getByLabelText('Confirm password')
    const buttonSubmit = canvas.getByRole('button', { name: 'Reset password' })

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
