import type { Meta, StoryObj } from '@storybook/react'
import { expect, within } from '@storybook/test'
import { cartItemsMinMock } from 'mocks/cartItemsMin.mock'
import theme from 'styles/theme'
import CartItemListComponent from './CartItemList'

const meta: Meta<typeof CartItemListComponent> = {
  title: 'Components/CartItemList',
  component: CartItemListComponent,
  args: {
    cartItems: cartItemsMinMock,
    total: '$530'
  },
  tags: ['autodocs']
}

export default meta

type Story = StoryObj<typeof CartItemListComponent>

export const Default: Story = {
  play: async ({ canvasElement, step }) => {
    const canvas = within(canvasElement)

    await step('Cart Items', () => {
      const cartItems = canvas.getAllByRole('heading')
      expect(cartItems.length).toBeGreaterThan(0)
    })

    await step('Total', () => {
      const totalText = canvas.getByText('Total:')
      expect(totalText).toBeVisible()
    })

    await step('Total price with primary color ', () => {
      const totalPrice = canvas.getByLabelText('total price')
      expect(totalPrice).toHaveTextContent('$530')
      expect(totalPrice).toHaveStyle({ color: theme.colors.primary })
    })

    step('Hidden button', () => {
      const button = canvas.queryByRole('link', { name: /buy it now/i })
      expect(button).not.toBeInTheDocument()
    })
  }
}

export const WithButton: Story = {
  args: {
    button: true
  },
  play: async ({ canvasElement, step }) => {
    const canvas = within(canvasElement)
    const totalText = canvas.queryByText('Total:')
    const totalPrice = canvas.getByLabelText('total price')

    await step('Button', () => {
      const button = canvas.getByRole('link', { name: /buy it now/i })
      expect(button).toBeInTheDocument()
    })

    await step('Hidden total title', () => {
      expect(totalText).not.toBeInTheDocument()
    })

    await step('Total price', () => {
      expect(totalPrice).toHaveTextContent('$530')
    })
  }
}

export const Empty: Story = {
  args: {
    cartItems: []
  },
  play: ({ canvasElement, step }) => {
    const canvas = within(canvasElement)

    step('Empty component', () => {
      const emptyComponent = canvas.getByTestId('emptyComponent')
      expect(emptyComponent).toBeInTheDocument()
    })
  }
}
