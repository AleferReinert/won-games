import type { StoryObj, Meta } from '@storybook/react'
import { within } from '@storybook/testing-library'
import { expect } from '@storybook/jest'
import CartItemListComponent from './CartItemList'
import mockcartItems from './mock'
import theme from 'styles/theme'

const meta: Meta<typeof CartItemListComponent> = {
  title: 'Components/CartItemList',
  component: CartItemListComponent,
  args: {
    cartItems: mockcartItems,
    total: '$530'
  }
}

export default meta

type Story = StoryObj<typeof CartItemListComponent>

export const Default: Story = {
  play: ({ canvasElement, args }) => {
    const canvas = within(canvasElement)
    const cartItems = canvas.getAllByRole('heading')
    const totalText = canvas.getByText('Total:')
    const totalPrice = canvas.getByLabelText('total price')
    const button = canvas.queryByRole('link', { name: /buy it now/i })

    expect(cartItems.length).toBeGreaterThan(0)
    expect(totalText).toBeInTheDocument
    expect(totalPrice).toHaveTextContent(args.total!)
    expect(totalPrice).toHaveStyle({ color: theme.colors.primary })
    expect(button).not.toBeInTheDocument()
  }
}

export const WithButton: Story = {
  args: {
    button: true
  },
  play: async ({ canvasElement, args }) => {
    const canvas = within(canvasElement)
    const button = canvas.getByRole('link', { name: /buy it now/i })
    const totalText = canvas.queryByText('Total:')
    const totalPrice = canvas.getByLabelText('total price')

    expect(button).toBeInTheDocument()
    expect(totalText).not.toBeInTheDocument()
    expect(totalPrice).toHaveTextContent(args.total!)
  }
}

export const Empty: Story = {
  args: {
    cartItems: []
  },
  play: ({ canvasElement }) => {
    const canvas = within(canvasElement)
    const emptyText = canvas.getByText('Your cart is empty')

    expect(emptyText).toBeInTheDocument()
  }
}
