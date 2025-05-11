import type { Meta, StoryObj } from '@storybook/react'
import { expect, within } from '@storybook/test'
import { CartContext } from 'contexts/CartContext'
import { cartContextMock } from 'mocks/cartContext.mock'
import { nextAuthSessionMock } from 'mocks/nextAuthSession.mock'
import { NextAuthSessionArgs } from '../../../.storybook/preview'
import { productMock } from '../../mocks/product.mock'
import ProductComponent from './Product'

const meta: Meta<typeof ProductComponent> = {
  title: 'Components/Product',
  component: ProductComponent,
  args: productMock,
  decorators: (Story) => (
    <CartContext.Provider value={cartContextMock}>
      <Story />
    </CartContext.Provider>
  ),
  parameters: {
    layout: 'centered'
  },
  tags: ['autodocs']
}

export default meta

type Story = StoryObj<typeof ProductComponent> & { args?: NextAuthSessionArgs }

export const Unauthenticated: Story = {
  play: async ({ canvasElement, step }) => {
    const canvas = within(canvasElement)

    await step('Image', () => {
      const image = canvas.getByRole('img', { name: 'Population Zero' })
      expect(image.getAttribute('src')).toContain('/img/test/product.jpg')
    })

    await step('Title', () => {
      const title = canvas.getByRole('heading', { level: 3 })
      expect(title).toHaveTextContent('Population Zero')
    })

    await step('Developer', () => {
      const developer = canvas.getByRole('heading', { level: 4 })
      expect(developer).toHaveTextContent('Other Ocean')
    })

    await step('PriceComponent', () => {
      const priceComponent = canvas.getByTestId('PriceComponent')
      expect(priceComponent).toBeVisible()
    })

    await step('AddToWishlistButton component hidden', () => {
      const addToWishlistComponent = canvas.queryByTestId('AddToWishlistButtonComponent')
      expect(addToWishlistComponent).not.toBeInTheDocument()
    })

    await step('AddToCartButtonComponent', () => {
      const addToCartButtonComponent = canvas.getByTestId('AddToCartButtonComponent')
      expect(addToCartButtonComponent).toBeVisible()
    })

    await step('Slug: link with href', () => {
      const slug = canvas.getByRole('link')
      expect(slug).toHaveAttribute('href', '/product/population-zero')
    })
  }
}

export const Authenticated: Story = {
  args: {
    nextAuthSession: nextAuthSessionMock
  },
  play: async ({ canvasElement, step }) => {
    const canvas = within(canvasElement)

    await step('AddToWishlistButton component', () => {
      const addToWishlistComponent = canvas.getByTestId('AddToWishlistButtonComponent')
      expect(addToWishlistComponent).toBeVisible()
    })
  }
}
export const WithDiscount: Story = {
  args: {
    ribbonLabel: '20% off',
    promotionalPrice: 185.0
  },
  play: async ({ canvasElement, step }) => {
    const canvas = within(canvasElement)

    await step('RibbonComponent', () => {
      const ribbonComponent = canvas.getByTestId('RibbonComponent')
      expect(ribbonComponent).toBeVisible()
    })

    await step('Promotional price', () => {
      const promotionalPrice = canvas.getByLabelText('Promotional price')
      expect(promotionalPrice).toBeVisible()
    })
  }
}
