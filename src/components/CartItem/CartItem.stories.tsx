import type { Meta, StoryObj } from '@storybook/react'
import { expect, userEvent, waitFor, within } from '@storybook/test'
import { CartContext } from 'contexts/CartContext'
import { cartContextMock } from 'mocks/cartContext.mock'
import { cartItemsMinMock } from 'mocks/cartItemsMin.mock'
import CartItemComponent from './CartItem'

const meta: Meta<typeof CartItemComponent> = {
  title: 'Components/CartItem',
  component: CartItemComponent,
  args: cartItemsMinMock[0],
  decorators: [
    (Story) => (
      <CartContext.Provider value={cartContextMock}>
        <Story />
      </CartContext.Provider>
    )
  ],
  tags: ['autodocs']
}

export default meta

type Story = StoryObj<typeof CartItemComponent>

export const Default: Story = {
  play: async ({ canvasElement, step }) => {
    const canvas = within(canvasElement)

    await step('Required product image', () => {
      const img = canvas.getByRole('img', { name: 'Population Zero' })
      expect(img).toBeVisible()
    })

    await step('Required product title', () => {
      const title = canvas.getByRole('heading', { name: 'Population Zero' })
      expect(title).toBeVisible()
    })

    await step('Required product price', () => {
      const price = canvas.getByLabelText('Price')
      expect(price).toHaveTextContent('$215.00')
    })

    await step('RemoveFromCartButton visible', async () => {
      const button = canvas.getByRole('button', { name: 'Remove from cart' })
      userEvent.click(button)
      await waitFor(() => expect(cartContextMock.removeFromCart).toHaveBeenCalled())
    })
  }
}

export const Download: Story = {
  args: {
    downloadLink: '/link'
  },
  play: async ({ canvasElement, step }) => {
    const canvas = within(canvasElement)
    const buttonLinkDownload = canvas.getByRole('link', { name: 'Download' })

    await step('Button Link with href and download', () => {
      expect(buttonLinkDownload).toHaveAttribute('href', '/link')
      expect(buttonLinkDownload).toHaveAttribute('download')
    })

    await step('Icon', () => {
      const icon = within(buttonLinkDownload).getByRole('img', { hidden: true })
      expect(icon).toBeVisible()
    })
  }
}

export const Payment: Story = {
  args: {
    paymentInfo: {
      creditCardNumber: '**** **** **** 4326',
      creditCardBrand: 'mastercard',
      creditCardFlag: '/img/creditCards/mastercard.png',
      purchaseDate: 'Purchase made on 07/06/2023 at 00:42'
    }
  },
  play: async ({ canvasElement, step }) => {
    const canvas = within(canvasElement)

    await step('Credit card number', () => {
      const creditCardNumber = canvas.getByLabelText('credit card number')
      expect(creditCardNumber).toHaveTextContent('**** **** **** 4326')
    })

    await step('Credit card flag', () => {
      const creditCardFlag = canvas.getByRole('img', { name: 'mastercard' })
      expect(creditCardFlag).toHaveAttribute('src', expect.stringContaining('/img/creditCards/mastercard.png'))
    })

    await step('Purchase date', () => {
      const purchaseDate = canvas.getByLabelText('purchase date')
      expect(purchaseDate).toHaveTextContent('Purchase made on 07/06/2023 at 00:42')
    })
  }
}

export const RemoveFromCartButton: Story = {
  args: {
    removeFromCartButton: false
  },
  play: async ({ canvasElement, step }) => {
    const canvas = within(canvasElement)

    await step('Remove product from cart', () => {
      const button = canvas.queryByRole('button', { name: 'Remove from cart' })
      expect(button).not.toBeInTheDocument()
    })
  }
}
