import { expect } from '@storybook/jest'
import type { Meta, StoryObj } from '@storybook/react'
import { within } from '@storybook/testing-library'
import { cartItemsFullMock } from 'mocks/cartItemsFull.mock'
import { creditCardsMock } from 'mocks/creditCards.mock'
import { highlightMock } from 'mocks/highlight.mock'
import { productsMock } from 'mocks/products.mock'
import DefaultTemplate from 'templates/Default/Default'
import CartPage from '.'

const meta: Meta<typeof CartPage> = {
  title: 'Pages/Cart',
  component: CartPage,
  args: {
    cartItems: cartItemsFullMock,
    total: '$530',
    creditCards: creditCardsMock,
    recommendedSection: {
      title: 'You may like these games',
      highlight: highlightMock,
      products: productsMock
    }
  },
  decorators: [
    (Story) => (
      <DefaultTemplate>
        <Story />
      </DefaultTemplate>
    )
  ],
  parameters: {
    layout: 'fullscreen',
    options: {
      showPanel: false
    }
  }
}

export default meta

type Story = StoryObj<typeof CartPage>

export const Default: Story = {
  play: ({ canvasElement }) => {
    const canvas = within(canvasElement)
    const title = canvas.getByRole('heading', { name: /my cart/i })
    const cartList = canvas.getAllByLabelText(/cart list/i)
    const paymentOptions = canvas.getByTestId('paymentOptions')
    const info = canvas.getByText(/your purchase is protected/i)
    const recommendedTitle = canvas.getByRole('heading', {
      name: 'You may like these games'
    })
    const recommendedHighlight = canvas.getByTestId('highlightComponent')
    const recommendedGames = canvas.getByTestId('productSliderComponent')

    expect(title).toBeInTheDocument()
    expect(cartList).toHaveLength(2)
    expect(paymentOptions).toBeInTheDocument()
    expect(info).toBeInTheDocument()
    expect(recommendedTitle).toBeInTheDocument()
    expect(recommendedHighlight).toBeInTheDocument()
    expect(recommendedGames).toBeInTheDocument()
  }
}

export const Empty: Story = {
  args: {
    cartItems: []
  },
  play: ({ canvasElement }) => {
    const canvas = within(canvasElement)
    const cartList = canvas.getAllByLabelText(/cart list/i)
    const paymentOptions = canvas.queryByTestId('paymentOptions')
    const info = canvas.queryByText(/your purchase is protected/i)
    const emptyComponent = canvas.getAllByTestId('emptyComponent')

    expect(cartList).toHaveLength(1)
    expect(paymentOptions).not.toBeInTheDocument()
    expect(info).not.toBeInTheDocument()
    expect(emptyComponent).toHaveLength(2)
  }
}
