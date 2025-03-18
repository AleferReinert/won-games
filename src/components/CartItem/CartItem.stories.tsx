import type { Meta, StoryObj } from '@storybook/react'
import { expect, within } from '@storybook/test'
import { cartItemsMinMock } from 'mocks/cartItemsMin.mock'
import CartItemComponent from './CartItem'

const meta: Meta<typeof CartItemComponent> = {
  title: 'Components/CartItem',
  component: CartItemComponent,
  args: cartItemsMinMock[0],
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
      const price = canvas.getByLabelText('price')
      expect(price).toHaveTextContent('$215.00')
    })
  }
}

export const Download: Story = {
  args: {
    downloadLink: '/link'
  },
  play: async ({ canvasElement, step }) => {
    const canvas = within(canvasElement)

    await step('Icon', () => {
      const icon = canvas.getByRole('img', { name: /download/i })
      expect(icon).toBeInTheDocument()
    })

    await step('Link', () => {
      const link = canvas.getByRole('link', { name: /download/i })
      expect(link).toHaveAttribute('href', '/link')
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
      expect(creditCardFlag).toHaveAttribute(
        'src',
        expect.stringContaining('/img/creditCards/mastercard.png')
      )
    })

    await step('Purchase date', () => {
      const purchaseDate = canvas.getByLabelText('purchase date')
      expect(purchaseDate).toHaveTextContent(
        'Purchase made on 07/06/2023 at 00:42'
      )
    })
  }
}
