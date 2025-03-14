import { expect } from '@storybook/jest'
import type { Meta, StoryObj } from '@storybook/react'
import { within } from '@storybook/testing-library'
import CartItemComponent from './CartItem'
import { cartItemMock } from './mock'

const meta: Meta<typeof CartItemComponent> = {
  title: 'Components/CartItem',
  component: CartItemComponent,
  args: cartItemMock[0]
}

export default meta

type Story = StoryObj<typeof CartItemComponent>

export const Default: Story = {
  play: ({ canvasElement }) => {
    const canvas = within(canvasElement)
    const img = canvas.getByRole('img', { name: 'Population Zero' })
    const title = canvas.getByRole('heading', { name: 'Population Zero' })
    const price = canvas.getByLabelText('price')

    expect(img).toBeInTheDocument()
    expect(title).toBeInTheDocument()
    expect(price).toHaveTextContent('$215.00')
  }
}

export const Download: Story = {
  args: {
    downloadLink: '/link'
  },
  play: ({ canvasElement, args }) => {
    const canvas = within(canvasElement)
    const downloadLink = canvas.getByRole('link', { name: /download/i })
    const downloadIcon = downloadLink.getElementsByTagName('svg')[0]

    expect(downloadLink).toHaveAttribute('href', args.downloadLink)
    expect(downloadIcon).toBeInTheDocument()
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
  play: ({ canvasElement }) => {
    const canvas = within(canvasElement)
    const creditCardNumber = canvas.getByLabelText('credit card number')
    const creditCardFlag = canvas.getByRole('img', { name: 'mastercard' })
    const purchaseDate = canvas.getByLabelText('purchase date')

    expect(creditCardNumber).toHaveTextContent('**** **** **** 4326')
    expect(creditCardFlag).toHaveAttribute('src')
    expect(purchaseDate).toHaveTextContent(
      'Purchase made on 07/06/2023 at 00:42'
    )
  }
}
