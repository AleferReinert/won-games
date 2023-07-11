import type { StoryObj, Meta } from '@storybook/react'
import { within } from '@storybook/testing-library'
import { expect } from '@storybook/jest'
import GameItemComponent from './GameItem'

const meta: Meta<typeof GameItemComponent> = {
  title: 'Components/GameItem',
  component: GameItemComponent,
  args: {
    title: 'Population Zero',
    img: '/img/population-zero.jpg',
    price: '$215.00'
  }
}

export default meta

type Story = StoryObj<typeof GameItemComponent>

export const Playground: Story = {
  args: {
    downloadLink: '/link',
    creditCardNumber: '**** **** **** 4326',
    creditCardBrand: 'mastercard',
    creditCardFlag: '/img/creditCards/mastercard.png',
    purchaseDate: 'Purchase made on 07/06/2023 at 00:42'
  }
}

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
    creditCardNumber: '**** **** **** 4326',
    creditCardBrand: 'mastercard',
    creditCardFlag: '/img/mastercard.png',
    purchaseDate: 'Purchase made on 07/06/2023 at 00:42'
  },
  play: ({ canvasElement, args }) => {
    const canvas = within(canvasElement)
    const creditCardNumber = canvas.getByLabelText('credit card number')
    const creditCardFlag = canvas.getByRole('img', {
      name: args.creditCardBrand
    })
    const purchaseDate = canvas.getByLabelText('purchase date')

    expect(creditCardNumber).toHaveTextContent(args.creditCardNumber!)

    expect(creditCardFlag).toHaveAttribute('src', args.creditCardFlag)
    expect(purchaseDate).toHaveTextContent(args.purchaseDate!)
  }
}
