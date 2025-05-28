import type { Meta, StoryObj } from '@storybook/react'
import { expect, within } from '@storybook/test'
import { comingSoonHandler } from 'mocks/handlers/comingSoonHandler'
import { productBySlugHandler } from 'mocks/handlers/productBySlugHandler'
import { recommendedProductsHandler } from 'mocks/handlers/recommendedProductsHandler'
import ProductPage from './page'

const meta: Meta<typeof ProductPage> = {
  title: 'Pages/Product',
  component: ProductPage,
  tags: ['!dev', '!test'],
  parameters: {
    layout: 'fullscreen',
    msw: {
      handlers: [productBySlugHandler, comingSoonHandler, recommendedProductsHandler]
    },
    options: {
      showPanel: false
    }
  }
}

export default meta

type Story = StoryObj<typeof ProductPage>

export const Default: Story = {
  play: async ({ canvasElement, step }) => {
    const canvas = within(canvasElement)

    await step('Cover', () => {
      const cover = canvas.getByRole('img', { name: 'Cyberpunk' })
      expect(cover).toBeVisible()
    })

    await step('Product Header', () => {
      const productHeaderComponent = canvas.getByTestId('ProductHeaderComponent')
      expect(productHeaderComponent).toBeVisible()
    })

    await step('Gallery hidden', () => {
      const galleryComponent = canvas.queryByTestId('GalleryComponent')
      expect(galleryComponent).not.toBeInTheDocument()
    })

    await step('Section about: title and description', () => {
      const title = canvas.getByRole('heading', { name: /about game/i, level: 2 })
      const description = canvas.getByTestId('description')
      expect(title).toBeVisible()
      expect(description).toBeVisible()
    })

    await step('Section details: ProductDetailsComponent', () => {
      const productDetailsComponent = canvas.getByTestId('ProductDetailsComponent')
      expect(productDetailsComponent).toBeVisible()
    })

    await step('Coming soon: title, highlight and products', () => {
      const title = canvas.getByRole('heading', { name: 'Coming soon', level: 2 })
      const highlight = canvas.getByTestId('HighlightComponent')
      const products = canvas.getAllByTestId('ProductSliderComponent')[0]
      expect(title).toBeVisible()
      expect(highlight).toBeVisible()
      expect(products).toBeVisible()
    })

    await step('Recommended: title and products', () => {
      const title = canvas.getByRole('heading', { name: 'You may like these games', level: 2 })
      const products = canvas.getAllByTestId('ProductSliderComponent')[1]
      expect(title).toBeVisible()
      expect(products).toBeVisible()
    })
  }
}

export const WithGallery: Story = {
  play: async ({ canvasElement, step }) => {
    const canvas = within(canvasElement)

    await step('Optional gallery', () => {
      const gallery = canvas.getByTestId('GalleryComponent')
      expect(gallery).toBeVisible()
    })
  }
}
