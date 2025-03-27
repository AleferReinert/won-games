import type { Meta, StoryObj } from '@storybook/react'
import { expect, within } from '@storybook/test'
import Container from 'components/Container/Container'
import { productHeaderMock } from '../../mocks/productHeader.mock'
import ProductHeaderComponent from './ProductHeader'

const meta: Meta<typeof ProductHeaderComponent> = {
  title: 'Components/ProductHeader',
  component: ProductHeaderComponent,
  args: productHeaderMock,
  decorators: [
    (Story) => (
      <Container>
        <Story />
      </Container>
    )
  ],
  tags: ['autodocs']
}

export default meta

type Story = StoryObj<typeof ProductHeaderComponent>

export const ProductHeader: Story = {
  play: async ({ canvasElement, step }) => {
    const canvas = within(canvasElement)

    await step('Title', () => {
      const title = canvas.getByRole('heading', { name: /borderlands 3/i })
      expect(title).toBeInTheDocument()
    })

    await step('Description', () => {
      const description = canvas.getByText(/now is hour to eliminate/i)
      expect(description).toBeInTheDocument()
    })

    await step('Price', () => {
      const price = canvas.getByText('$215.00')
      expect(price).toBeInTheDocument()
    })

    await step('AddToCartButtonComponent', () => {
      const addToCartButtonComponent = canvas.getByTestId('AddToCartButtonComponent')
      expect(addToCartButtonComponent).toBeVisible()
    })

    await step('Button wishlist', () => {
      const buttonWishlist = canvas.getByRole('button', { name: /wishlist/i })
      expect(buttonWishlist).toBeInTheDocument()
    })
  }
}
