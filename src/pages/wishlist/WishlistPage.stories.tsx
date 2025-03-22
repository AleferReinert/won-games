import type { Meta, StoryObj } from '@storybook/react'
import { expect, within } from '@storybook/test'
import { highlightMock } from 'mocks/highlight.mock'
import { productsMock } from 'mocks/products.mock'
import DefaultTemplate from 'templates/Default/Default'
import WishlistPage from '.'

const meta: Meta<typeof WishlistPage> = {
  title: 'Pages/Wishlist',
  component: WishlistPage,
  args: {
    recommendedSection: {
      title: 'Recommended',
      highlight: highlightMock,
      products: productsMock
    }
  },
  parameters: {
    layout: 'fullscreen',
    options: {
      showPanel: false
    }
  },
  decorators: [
    (Story) => (
      <DefaultTemplate>
        <Story />
      </DefaultTemplate>
    )
  ]
}

export default meta

type Story = StoryObj<typeof WishlistPage>

export const Empty: Story = {
  play: async ({ canvasElement, step }) => {
    const canvas = within(canvasElement)
    const wishlistPageComponent = within(canvas.getByTestId('WishlistPageComponent'))

    await step('Page title as h1', () => {
      const title = canvas.getByRole('heading', { name: 'Wishlist', level: 1 })
      expect(title).toBeVisible()
    })

    await step('Empty component', () => {
      const emptyComponent = wishlistPageComponent.getByTestId('EmptyComponent')
      expect(emptyComponent).toBeVisible()
    })

    step('Required recommended section: title, highlight and products', () => {
      const title = wishlistPageComponent.getByRole('heading', { name: 'Recommended', level: 2 })
      const highlight = wishlistPageComponent.getByTestId('HighlightComponent')
      const products = wishlistPageComponent.getByTestId('ProductSliderComponent')

      expect(title).toBeVisible()
      expect(highlight).toBeVisible()
      expect(products).toBeVisible()
    })
  }
}

export const WithProducts: Story = {
  args: {
    wishlistProducts: productsMock
  },
  play: async ({ canvasElement, step }) => {
    const canvas = within(canvasElement)
    const wrapperWishlistGames = within(canvas.getByRole('heading', { name: 'Wishlist', level: 1 }).parentElement!)
    const products = wrapperWishlistGames.queryAllByTestId('ProductComponent')

    step('Products', () => {
      expect(products.length).toBeGreaterThan(0)
    })
  }
}
