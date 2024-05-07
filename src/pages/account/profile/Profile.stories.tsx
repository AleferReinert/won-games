import type { StoryObj, Meta } from '@storybook/react'
import { within } from '@storybook/testing-library'
import { expect } from '@storybook/jest'
import AccountTemplate from 'templates/Account/Account'
import ProfilePage from '.'

const meta: Meta<typeof ProfilePage> = {
  title: 'Pages/Account/Profile',
  component: ProfilePage,
  decorators: [
    (Story) => (
      <AccountTemplate activeLink='My profile'>
        <Story />
      </AccountTemplate>
    )
  ],
  parameters: {
    layout: 'fullscreen'
  }
}

export default meta

type Story = StoryObj<typeof ProfilePage>

export const Profile: Story = {
  play: ({ canvasElement }) => {
    const canvas = within(canvasElement)
    const inputName = canvas.getByRole('textbox', { name: /name/i })
    const inputEmail = canvas.getByRole('textbox', { name: /e-mail/i })
    const inputPassword = canvas.getByPlaceholderText(/type your password/i)
    const inputNewPassword = canvas.getByPlaceholderText(/new password/i)
    const button = canvas.getByRole('button', { name: /save/i })

    expect(inputName).toBeInTheDocument()
    expect(inputEmail).toBeDisabled()
    expect(inputPassword).toBeInTheDocument()
    expect(inputNewPassword).toBeInTheDocument()
    expect(button).toBeInTheDocument()
  }
}
