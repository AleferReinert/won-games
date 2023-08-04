import type { StoryObj, Meta } from '@storybook/react'
import { within } from '@storybook/testing-library'
import { expect } from '@storybook/jest'
import OrdersPage from './index'
import AccountTemplate from 'templates/Account/Account'
import cartItemsMock from './mock'

const meta: Meta<typeof OrdersPage> = {
  title: 'Pages/Account/Orders',
  component: OrdersPage,
  decorators: [
    (Story) => (
      <AccountTemplate activeLink='My orders'>
        <Story />
      </AccountTemplate>
    )
  ],
  parameters: {
    layout: 'fullscreen'
  }
}

export default meta

type Story = StoryObj<typeof OrdersPage>

export const Default: Story = {
  play: ({ canvasElement }) => {
    const canvas = within(canvasElement)
    const emptyMessage = canvas.getByText(/you have no orders yet/i)

    expect(emptyMessage).toBeInTheDocument()
  }
}

export const WithOrders: Story = {
  args: {
    items: cartItemsMock
  },
  play: ({ canvasElement }) => {
    const canvas = within(canvasElement)
    const list = canvas.getByRole('list')

    expect(list).toBeInTheDocument()
  }
}
