import type { StoryObj, Meta } from '@storybook/react'
import { within } from '@storybook/testing-library'
import { expect } from '@storybook/jest'
import ProductHeaderComponent from './ProductHeader'
import mockProductHeader from './mock'

const meta: Meta<typeof ProductHeaderComponent> = {
  title: 'Components/ProductHeader',
  component: ProductHeaderComponent,
  args: mockProductHeader
}

export default meta

type Story = StoryObj<typeof ProductHeaderComponent>

export const ProductHeader: Story = {
  play: ({ canvasElement }) => {
    const canvas = within(canvasElement)
    const title = canvas.getByRole('heading', { name: /borderlands 3/i })
    const description = canvas.getByText(/now is hour to eliminate/i)
    const price = canvas.getByText('$215.00')
    const buttonAddToCart = canvas.getByRole('button', { name: /add to cart/i })
    const buttonWishlist = canvas.getByRole('button', { name: /wishlist/i })

    expect(title).toBeInTheDocument()
    expect(description).toBeInTheDocument()
    expect(price).toBeInTheDocument()
    expect(buttonAddToCart).toBeInTheDocument()
    expect(buttonWishlist).toBeInTheDocument()
  }
}
