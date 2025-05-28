import type { Meta, StoryObj } from '@storybook/react'
import { expect, waitFor, within } from '@storybook/test'
import MainLayout from 'app/(main)/layout'
import { companyHandler } from 'mocks/handlers/companyHandler'
import { profileHandler } from 'mocks/handlers/profileHandler'
import { sessionMock } from 'mocks/sessionMock'
import AccountLayout from '../layout'
import ProfilePage from './page'

const meta: Meta<typeof ProfilePage> = {
  title: 'Pages/Account/Profile',
  component: ProfilePage,
  args: {
    ...sessionMock
  },
  decorators: (Story) => (
    <MainLayout>
      <AccountLayout>
        <Story />
      </AccountLayout>
    </MainLayout>
  ),
  parameters: {
    layout: 'fullscreen',
    msw: {
      handlers: { companyHandler, profileHandler }
    }
  },
  tags: ['!dev', '!test']
}

export default meta

type Story = StoryObj<typeof ProfilePage>

export const Profile: Story = {
  play: async ({ canvasElement, step }) => {
    const canvas = within(canvasElement)

    await step('Input name', async () => {
      const inputName = await waitFor(() => canvas.getByRole('textbox', { name: /name/i }))
      expect(inputName).toBeInTheDocument()
    })

    await step('Input e-mail disabled', async () => {
      const inputEmail = await waitFor(() => canvas.getByRole('textbox', { name: /e-mail/i }))
      expect(inputEmail).toBeDisabled()
    })

    await step('Button link to reset password', async () => {
      const buttonLink = await waitFor(() => canvas.getByRole('link', { name: /reset password/i }))
      expect(buttonLink.getAttribute('href')).toContain('/forgot-password')
    })

    await step('Button Save', async () => {
      const button = await waitFor(() => canvas.getByRole('button', { name: /save/i }))
      expect(button).toBeInTheDocument()
    })
  }
}
