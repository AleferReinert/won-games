import type { Meta, StoryObj } from '@storybook/react'
import { expect, userEvent, waitFor, within } from '@storybook/test'
import { nextAuthSessionMock } from 'mocks/nextAuthSession.mock'
import { UserDropdown } from './UserDropdown'

const meta: Meta<typeof UserDropdown> = {
  title: 'Components/UserDropdown',
  component: UserDropdown,
  args: {
    nextAuthSession: nextAuthSessionMock
  },
  decorators: (Story) => (
    <div className='text-right p-5 h-52'>
      <Story />
    </div>
  )
}

export default meta

type Story = StoryObj<typeof UserDropdown>

export const Default: Story = {
  name: 'UserDropdown',
  play: async ({ canvasElement, step }) => {
    const canvas = within(canvasElement)
    const username = canvas.getByText('John')
    const navigation = canvas.getByRole('navigation', { hidden: true })

    await step('Name', () => {
      expect(username).toBeInTheDocument()
    })

    await step('Navigation hidden on load page', async () => {
      await waitFor(() => expect(navigation).not.toBeVisible())
    })

    await step('Navigation visible on username click', async () => {
      userEvent.click(username)
      await waitFor(() => expect(navigation).toBeVisible())
      expect(within(navigation).getByRole('link', { name: 'My account' })).toHaveAttribute('href', '/account/profile')
      expect(within(navigation).getByRole('link', { name: 'Wishlist (0)' })).toHaveAttribute('href', '/wishlist')
      expect(within(navigation).getByRole('button', { name: 'Logout' })).toBeVisible()
    })

    await step('Navigation hidden on username second click', async () => {
      userEvent.click(username)
      await waitFor(() => expect(navigation).not.toBeVisible())
    })
  }
}
