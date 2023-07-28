import type { StoryObj, Meta } from '@storybook/react'
import { within } from '@storybook/testing-library'
import { expect } from '@storybook/jest'
import CartPage from '.'
import highlightMock from 'components/Highlight/mock'
import productSliderMock from 'components/ProductSlider/mock'
import cartItemsMock from 'components/CartItemList/mock'
import creditCardsMock from 'components/PaymentOptions/mock'

const meta: Meta<typeof CartPage> = {
  title: 'Pages/Cart',
  component: CartPage,
  args: {
    cartItems: cartItemsMock,
    total: '$530',
    creditCards: creditCardsMock,
    recommendedHighlight: highlightMock,
    recommendedGames: productSliderMock
  },
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
    const cartList = canvas.getByLabelText(/cart list/i)
    const paymentOptions = canvas.getByTestId('paymentOptions')
    const info = canvas.getByText(/your purchase is protected/i)
    const recommendedTitle = canvas.getByRole('heading', {
      name: /you make like these games/i
    })
    const recommendedHighlight = canvas.getByTestId('highlightComponent')
    const recommendedGames = canvas.getByTestId('productSliderComponent')

    expect(title).toBeInTheDocument()
    expect(cartList).toBeInTheDocument()
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
    const cartList = canvas.queryByLabelText(/cart list/i)
    const paymentOptions = canvas.queryByTestId('paymentOptions')
    const info = canvas.queryByText(/your purchase is protected/i)
    const emptyComponent = canvas.getByTestId('emptyComponent')

    expect(cartList).not.toBeInTheDocument()
    expect(paymentOptions).not.toBeInTheDocument()
    expect(info).not.toBeInTheDocument()
    expect(emptyComponent).toBeInTheDocument()
  }
}
