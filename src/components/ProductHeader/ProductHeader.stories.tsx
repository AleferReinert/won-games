import type { Meta, StoryObj } from '@storybook/react'
import { expect, within } from '@storybook/test'
import Container from 'components/Container/Container'
import { nextAuthSessionMock } from 'mocks/nextAuthSession.mock'
import { NextAuthSessionArgs } from '../../../.storybook/preview'
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

type Story = StoryObj<typeof ProductHeaderComponent> & { args?: NextAuthSessionArgs }

export const Unauthenticated: Story = {
  play: async ({ canvasElement, step }) => {
    const canvas = within(canvasElement)

    await step('Title', () => {
      const title = canvas.getByRole('heading', { name: /borderlands 3/i, level: 1 })
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
