import { MockedProvider } from '@apollo/client/testing'
import type { Meta, StoryObj } from '@storybook/react'
import { expect, within } from '@storybook/test'
import { CartContext } from 'contexts/CartContext'
import { cartContextMock } from 'mocks/cartContext.mock'
import { cartItemsResponseMock } from 'mocks/cartItemsResponse.mock'
import theme from 'styles/theme'
import CartItemsComponent from './CartItems'

const meta: Meta<typeof CartItemsComponent> = {
  title: 'Components/CartItems',
  component: CartItemsComponent,
  tags: ['autodocs']
}

export default meta

type Story = StoryObj<typeof CartItemsComponent>

export const Empty: Story = {
  play: async ({ canvasElement, step }) => {
    const canvas = within(canvasElement)

    step('Empty component', () => {
      const emptyComponent = canvas.getByTestId('EmptyComponent')
      expect(emptyComponent).toBeInTheDocument()
    })
  }
}

export const WithProducts: Story = {
  decorators: [
    (Story) => (
      <MockedProvider mocks={[cartItemsResponseMock]} addTypename={false}>
        <CartContext.Provider value={cartContextMock}>
          <Story />
        </CartContext.Provider>
      </MockedProvider>
    )
  ],
  play: async ({ canvasElement, step }) => {
    const canvas = within(canvasElement)

    await step('Cart Items', () => {
      const cartItemComponent = canvas.getAllByTestId('CartItemComponent')
      expect(cartItemComponent.length).toBe(2)
    })

    await step('Total', () => {
      const totalText = canvas.getByText('Total:')
      expect(totalText).toBeVisible()
    })

    await step('Total price with primary color ', () => {
      const totalPrice = canvas.getByLabelText('total price')
      expect(totalPrice).toHaveTextContent('$218')
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
  decorators: [
    (Story) => (
      <MockedProvider mocks={[cartItemsResponseMock]} addTypename={false}>
        <CartContext.Provider value={cartContextMock}>
          <Story />
        </CartContext.Provider>
      </MockedProvider>
    )
  ],
  play: async ({ canvasElement, step }) => {
    const canvas = within(canvasElement)

    await step('Button', () => {
      const button = canvas.getByRole('link', { name: /buy it now/i })
      expect(button).toBeInTheDocument()
    })

    await step('Hidden total title', () => {
      const totalText = canvas.queryByText('Total:')
      expect(totalText).not.toBeInTheDocument()
    })

    await step('Total price', () => {
      const totalPrice = canvas.getByLabelText('total price')
      expect(totalPrice).toHaveTextContent('$218')
    })
  }
}
