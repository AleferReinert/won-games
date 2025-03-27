import type { Meta, StoryObj } from '@storybook/react'
import { expect, within } from '@storybook/test'
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

export const Empty: Story = {
  args: {
    cartItems: []
  },
  play: async ({ canvasElement, step }) => {
    const canvas = within(canvasElement)
    const cartPage = within(canvas.getByTestId('CartPage'))

    await step('Page title', () => {
      const title = canvas.getByRole('heading', { level: 1 })
      expect(title).toHaveTextContent('My cart')
    })

    await step('EmptyComponent', () => {
      const emptyComponent = cartPage.getByTestId('EmptyComponent')
      expect(emptyComponent).toBeVisible()
    })

    await step('Section you may like these products: title, highlight and products', () => {
      const title = canvas.getByRole('heading', { name: 'You may like these games', level: 2 })
      const highlight = canvas.getByTestId('HighlightComponent')
      const products = canvas.getByTestId('ProductSliderComponent')
      expect(title).toBeVisible()
      expect(highlight).toBeVisible()
      expect(products).toBeVisible()
    })
  }
}

export const WithProducts: Story = {
  play: async ({ canvasElement, step }) => {
    const canvas = within(canvasElement)
    const cartPage = within(canvas.getByTestId('CartPage'))

    await step('CartItemsComponent', () => {
      const cartItemListComponent = cartPage.getByTestId('CartItemsComponent')
      expect(cartItemListComponent).toBeVisible()
    })

    await step('PaymentOptionsComponent', () => {
      const paymentOptions = cartPage.getByTestId('PaymentOptionsComponent')
      expect(paymentOptions).toBeVisible()
    })

    await step('Info text', () => {
      const info = canvas.getByText(/your purchase is protected/i)
      expect(info).toBeVisible()
    })
  }
}
