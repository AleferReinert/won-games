import type { Meta, StoryObj } from '@storybook/react'
import { expect, within } from '@storybook/test'
import { nextAuthSessionMock } from 'mocks/nextAuthSession.mock'
import { NextAuthSessionArgs } from '../../../.storybook/preview'
import { productHeaderMock } from '../../mocks/productHeader.mock'
import { ProductHeader } from './ProductHeader'

const meta: Meta<typeof ProductHeader> = {
  title: 'Components/ProductHeader',
  component: ProductHeader,
  args: productHeaderMock,

  parameters: {
    viewport: {
      defaultViewport: 'medium'
    },
    layout: 'padded'
  },
  tags: ['autodocs']
}

export default meta

type Story = StoryObj<typeof ProductHeader> & { args?: NextAuthSessionArgs }

export const Unauthenticated: Story = {
  play: async ({ canvasElement, step }) => {
    const canvas = within(canvasElement)

    await step('Title', () => {
      const title = canvas.getByRole('heading', { name: /borderlands 3/i, level: 1 })
      expect(title).toBeVisible()
    })

    await step('Description', () => {
      const description = canvas.getByText(/now is hour to eliminate/i)
      expect(description).toBeVisible()
    })

    await step('Price large visible and small hidden', () => {
      const prices = canvas.getAllByText('$215.00')
      expect(prices[0]).not.toBeVisible()
      expect(prices[1]).toBeVisible()
    })

    await step('AddToCartButtonComponent', () => {
      const addToCartButtonComponent = canvas.getByTestId('AddToCartButtonComponent')
      expect(addToCartButtonComponent).toBeVisible()
    })

    await step('AddToWishlistButton component hidden', () => {
      const addToWishlistComponent = canvas.queryByTestId('AddToWishlistButtonComponent')
      expect(addToWishlistComponent).not.toBeInTheDocument()
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

export const Mobile: Story = {
  parameters: {
    viewport: {
      defaultViewport: 'xxsmall'
    }
  },
  play: async ({ canvasElement, step }) => {
    const canvas = within(canvasElement)

    await step('Price small visible and large hidden', () => {
      const prices = canvas.getAllByText('$215.00')
      expect(prices[0]).toBeVisible()
      expect(prices[1]).not.toBeVisible()
    })
  }
}
