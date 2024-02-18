import type { StoryObj, Meta } from '@storybook/react'
import { userEvent, waitFor, within } from '@storybook/testing-library'
import { expect } from '@storybook/jest'
import UserDropdownComponent from './UserDropdown'

const meta: Meta<typeof UserDropdownComponent> = {
  title: 'Components/UserDropdown',
  component: UserDropdownComponent,
  args: {
    username: 'John'
  },
  decorators: [
    (Story) => (
      <div style={{ textAlign: 'right', padding: '2rem' }}>
        <Story />
      </div>
    )
  ]
}

export default meta

type Story = StoryObj<typeof UserDropdownComponent>

export const UserDropdown: Story = {
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)
    const username = canvas.getByText('John')

    expect(username).toBeInTheDocument()

    userEvent.click(username)
    waitFor(() => {
      const myAccountLink = canvas.getByRole('link', { name: /my account/i })
      const wishlistLink = canvas.getByRole('link', { name: /wishlist/i })
      const logoutLink = canvas.getByRole('link', { name: /logout/i })

      expect(myAccountLink).toBeInTheDocument()
      expect(wishlistLink).toBeInTheDocument()
      expect(logoutLink).toBeInTheDocument()
    })
  }
}
