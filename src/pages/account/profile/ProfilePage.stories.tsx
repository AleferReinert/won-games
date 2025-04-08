import type { Meta, StoryObj } from '@storybook/react'
import { expect, within } from '@storybook/test'
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
  play: async ({ canvasElement, step }) => {
    const canvas = within(canvasElement)

    await step('Input name', () => {
      const inputName = canvas.getByRole('textbox', { name: /name/i })
      expect(inputName).toBeInTheDocument()
    })

    await step('Input e-mail disabled', () => {
      const inputEmail = canvas.getByRole('textbox', { name: /e-mail/i })
      expect(inputEmail).toBeDisabled()
    })

    await step('Button link to reset password', () => {
      const buttonLink = canvas.getByRole('link', { name: /reset password/i })
      expect(buttonLink.getAttribute('href')).toContain('/forgot-password')
    })

    await step('Button Save', () => {
      const button = canvas.getByRole('button', { name: /save/i })
      expect(button).toBeInTheDocument()
    })
  }
}
