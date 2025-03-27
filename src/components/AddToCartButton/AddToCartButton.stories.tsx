import type { Meta, StoryObj } from '@storybook/react'
import { expect, userEvent, waitFor, within } from '@storybook/test'
import { CartContext } from 'contexts/CartContext'
import { cartContextMock } from 'mocks/cartContext.mock'
import AddToCartButtonComponent from './AddToCartButton'

const meta: Meta<typeof AddToCartButtonComponent> = {
  title: 'Components/AddToCartButton',
  component: AddToCartButtonComponent,
  decorators: (Story) => (
    <CartContext.Provider value={cartContextMock}>
      <Story />
    </CartContext.Provider>
  ),
  parameters: {
    layout: 'padded'
  },
  tags: ['autodocs']
}

export default meta

type Story = StoryObj<typeof AddToCartButtonComponent>

export const NotAdded: Story = {
  args: {
    id: '10'
  },
  play: async ({ canvasElement, step }) => {
    const canvas = within(canvasElement)

    await step('Not added in cart', () => {
      expect(cartContextMock.isInCart('10')).toBe(false)
    })

    await step('addToCart called on click', async () => {
      const buttonAddToCart = canvas.getByRole('button', { name: 'Add to cart' })
      userEvent.click(buttonAddToCart)
      await waitFor(async () => {
        expect(cartContextMock.addToCart).toHaveBeenCalled()
      })
    })
  }
}

export const Added: Story = {
  args: {
    id: '2'
  },
  play: async ({ canvasElement, step }) => {
    const canvas = within(canvasElement)

    await step('Added in cart', () => {
      expect(cartContextMock.isInCart('2')).toBe(true)
    })

    await step('removeFromCart called on click', async () => {
      const buttonRemoveFromCart = canvas.getByRole('button', { name: 'Remove from cart' })
      userEvent.click(buttonRemoveFromCart)
      await waitFor(async () => {
        expect(cartContextMock.removeFromCart).toHaveBeenCalled()
      })
    })
  }
}

export const NotAddedWithLabel: Story = {
  args: {
    showLabel: true
  },
  play: async ({ canvasElement, step }) => {
    const canvas = within(canvasElement)

    await step('Label', () => {
      const label = canvas.getByText(/Add to cart/i)
      expect(label).toBeVisible()
    })
  }
}

export const AddedWithLabel: Story = {
  args: {
    id: '2',
    showLabel: true
  },
  play: async ({ canvasElement, step }) => {
    const canvas = within(canvasElement)

    await step('Label', () => {
      const label = canvas.getByText(/Remove from cart/i)
      expect(label).toBeVisible()
    })
  }
}
