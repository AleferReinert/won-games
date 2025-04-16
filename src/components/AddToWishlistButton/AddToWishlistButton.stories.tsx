import type { Meta, StoryObj } from '@storybook/react'
import { expect, userEvent, waitFor, within } from '@storybook/test'
import { WishlistContext } from 'contexts/WishlistContext'
import { nextAuthSessionMock } from 'mocks/nextAuthSession.mock'
import { wishlistContextMock } from 'mocks/wishlistContext.mock'
import { NextAuthSessionArgs } from '../../../.storybook/preview'
import AddToWishlistButtonComponent from './AddToWishlistButton'

const meta: Meta<typeof AddToWishlistButtonComponent> & { args?: NextAuthSessionArgs } = {
  title: 'Components/AddToWishlistButton',
  component: AddToWishlistButtonComponent,
  tags: ['autodocs'],
  args: {
    nextAuthSession: nextAuthSessionMock
  },
  decorators: (Story) => (
    <WishlistContext.Provider value={wishlistContextMock}>
      <Story />
    </WishlistContext.Provider>
  ),
  parameters: {
    backgrounds: {
      default: 'Light'
    }
  }
}

export default meta

type Story = StoryObj<typeof AddToWishlistButtonComponent>

export const NotAdded: Story = {
  play: async ({ canvasElement, step }) => {
    const canvas = within(canvasElement)
    const button = canvas.getByRole('button')

    await step('Title and aria-label', () => {
      expect(button).toHaveAttribute('title', 'Add to wishlist')
      expect(button).toHaveAttribute('aria-label', 'Add to wishlist')
    })

    await step('Label hidden', () => {
      expect(button).not.toHaveTextContent('Wishlist')
    })

    await step('Add to favorites', async () => {
      userEvent.click(button)

      await waitFor(() => {
        expect(wishlistContextMock.addToWishlist).toHaveBeenCalled()
      })
    })
  }
}

export const Added: Story = {
  args: {
    id: '1'
  },
  play: async ({ canvasElement, step }) => {
    const canvas = within(canvasElement)
    const button = canvas.getByRole('button')

    await step('Title and aria-label', () => {
      expect(button).toHaveAttribute('title', 'Remove from wishlist')
      expect(button).toHaveAttribute('aria-label', 'Remove from wishlist')
    })

    await step('Remove from favorites', async () => {
      userEvent.click(button)

      await waitFor(() => {
        expect(wishlistContextMock.removeFromWishlist).toHaveBeenCalled()
      })
    })
  }
}

export const Label: Story = {
  args: {
    label: 'Wishlist'
  },
  play: async ({ canvasElement, step }) => {
    const canvas = within(canvasElement)
    const button = canvas.getByRole('button')

    await step('Label', () => {
      expect(button).toHaveTextContent('Wishlist')
    })
  }
}
