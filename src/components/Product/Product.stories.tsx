import type { Meta, StoryObj } from '@storybook/react'
import { expect, userEvent, waitFor, within } from '@storybook/test'
import { productMock } from '../../mocks/product.mock'
import ProductComponent from './Product'

const meta: Meta<typeof ProductComponent> = {
  title: 'Components/Product',
  component: ProductComponent,
  args: productMock,
  parameters: {
    layout: 'centered'
  },
  tags: ['autodocs']
}

export default meta

type Story = StoryObj<typeof ProductComponent>

export const Default: Story = {
  play: async ({ canvasElement, step }) => {
    const canvas = within(canvasElement)
    const buttonAddToFavorites = canvas.getByRole('button', { name: 'Add to wishlist' })

    await step('Image', () => {
      const image = canvas.getByRole('img', { name: 'Population Zero' })
      expect(image.getAttribute('src')).toContain('/img/game-test.jpg')
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

    await step('Favorite: buttonAdd visible, buttonRemove hidden', () => {
      const buttonRemove = canvas.queryByRole('button', { name: 'Remove from wishlist' })
      expect(buttonRemove).not.toBeInTheDocument()
    })

    await step('Add to favorites: change buttons on click', async () => {
      expect(buttonAddToFavorites).toBeVisible()
      userEvent.click(buttonAddToFavorites)
      await waitFor(async () => {
        const buttonRemove = canvas.getByRole('button', { name: 'Remove from wishlist' })
        expect(buttonRemove).toBeVisible()
        await waitFor(() => {
          const buttonAdd = canvas.queryByRole('button', { name: 'Add to wishlist' })
          expect(buttonAdd).not.toBeInTheDocument()
        })
      })
    })

    await step('Remove from favorites: change buttons on click', async () => {
      const buttonRemove = canvas.getByRole('button', { name: 'Remove from wishlist' })
      userEvent.click(buttonRemove)
      await waitFor(async () => {
        const buttonAdd = canvas.getByRole('button', { name: 'Add to wishlist' })
        expect(buttonAdd).toBeVisible()
        await waitFor(() => {
          const buttonRemove = canvas.queryByRole('button', { name: 'Remove from wishlist' })
          expect(buttonRemove).not.toBeInTheDocument()
        })
      })
    })

    await step('Slug: link with href', () => {
      const slug = canvas.getByRole('link')
      expect(slug).toHaveAttribute('href', '/product/population-zero')
    })
  }
}

export const WithDiscount: Story = {
  args: {
    ribbonText: '20% off',
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
