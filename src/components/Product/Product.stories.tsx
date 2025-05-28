import type { Meta, StoryObj } from '@storybook/react'
import { expect, within } from '@storybook/test'
import { CartContext } from 'contexts/CartContext'
import { cartContextMock } from 'mocks/cartContext.mock'
import { nextAuthSessionMock } from 'mocks/nextAuthSession.mock'
import { NextAuthSessionArgs } from '../../../.storybook/preview'
import { productMock } from '../../mocks/product.mock'
import { Product } from './Product'

const meta: Meta<typeof Product> = {
  title: 'Components/Product',
  component: Product,
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

type Story = StoryObj<typeof Product> & { args?: NextAuthSessionArgs }

export const Unauthenticated: Story = {
  play: async ({ canvasElement, step }) => {
    const canvas = within(canvasElement)

    await step('Image', () => {
      const image = canvas.getByRole('img', { name: 'Game cover image' })
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
      expect(slug).toHaveAttribute('href', '/game/population-zero')
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
export const Ribbon: Story = {
  args: {
    ribbonLabel: '20% off'
  },
  play: async ({ canvasElement, step }) => {
    const canvas = within(canvasElement)

    await step('RibbonComponent', () => {
      const ribbonComponent = canvas.getByTestId('RibbonComponent')
      expect(ribbonComponent).toBeVisible()
      expect(ribbonComponent).toHaveTextContent('20% off')
    })
  }
}

export const PromotionalPrice: Story = {
  args: {
    promotionalPrice: 185.0
  },
  play: async ({ canvasElement, step }) => {
    const canvas = within(canvasElement)

    await step('Promotional price', () => {
      const promotionalPrice = canvas.getByLabelText('Promotional price')
      expect(promotionalPrice).toBeVisible()
      expect(promotionalPrice).toHaveTextContent('$185.00')
    })
  }
}

export const ImageNotFound: Story = {
  args: {
    cover: {
      url: 'http://invalidurl.com',
      alternativeText: 'Image not found'
    }
  },
  play: async ({ canvasElement, step }) => {
    const canvas = within(canvasElement)

    await step('RibbonComponent', () => {
      const img = canvas.getByRole('img', { name: 'Image not found' })
      expect(img).toBeVisible()
    })
  }
}
