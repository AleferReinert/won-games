import type { Meta, StoryObj } from '@storybook/react'
import { expect, within } from '@storybook/test'
import AccountTemplate from 'templates/Account/Account'
import OrdersPage from '.'
import { cartItemsFullMock } from '../../../mocks/cartItemsFull.mock'

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

export const Empty: Story = {
  play: ({ canvasElement, step }) => {
    const canvas = within(canvasElement)

    step('Empty message', () => {
      const alert = canvas.getByRole('alert')
      expect(alert).toHaveTextContent('You have no orders yet.')
    })
  }
}

export const WithOrders: Story = {
  args: {
    items: cartItemsFullMock
  },
  play: ({ canvasElement, step }) => {
    const canvas = within(canvasElement)

    step('CartItem components ', () => {
      const cartItemComponents = canvas.getAllByTestId('CartItemComponent')
      expect(cartItemComponents.length).toBeGreaterThan(0)
    })
  }
}
