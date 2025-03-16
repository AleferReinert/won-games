import { expect } from '@storybook/jest'
import type { Meta, StoryObj } from '@storybook/react'
import { within } from '@storybook/testing-library'
import AccountTemplate from 'templates/Account/Account'
import OrdersPage from '.'
import { cartItemsMock } from '../../../mocks/cartItems.mock'

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
