import type { Meta, StoryObj } from '@storybook/react'
import { expect, userEvent, waitFor, within } from '@storybook/test'
import UserDropdownComponent from './UserDropdown'

const meta: Meta<typeof UserDropdownComponent> = {
  title: 'Components/UserDropdown',
  component: UserDropdownComponent,
  args: {
    username: 'John'
  },
  decorators: [
    (Story) => (
      <div style={{ textAlign: 'right', padding: '2rem', height: '280px' }}>
        <Story />
      </div>
    )
  ],
  tags: ['autodocs']
}

export default meta

type Story = StoryObj<typeof UserDropdownComponent>

export const UserDropdown: Story = {
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
    })

    await step('Navigation hidden on username second click', async () => {
      userEvent.click(username)
      await waitFor(() => expect(navigation).not.toBeVisible())
    })
  }
}
