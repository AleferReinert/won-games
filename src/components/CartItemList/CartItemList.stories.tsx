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

export const CartList: Story = {
  play: ({ canvasElement, args }) => {
    const canvas = within(canvasElement)
    const cartItems = canvas.getAllByRole('heading')
    const totalText = canvas.getByText('Total:')
    const totalPrice = canvas.getByLabelText('total price')

    expect(cartItems.length).toBeGreaterThan(0)
    expect(totalText).toBeInTheDocument
    expect(totalPrice).toHaveTextContent(args.total)
    expect(totalPrice).toHaveStyle({ color: theme.colors.primary })
  }
}
