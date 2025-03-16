import { expect } from '@storybook/jest'
import type { Meta, StoryObj } from '@storybook/react'
import { within } from '@storybook/testing-library'
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

export const Default: Story = {
  args: {
    wishlistProducts: productsMock
  },
  play: ({ canvasElement }) => {
    const canvas = within(canvasElement)
    const title = canvas.getByRole('heading', { name: 'Wishlist' })
    const products = within(title.parentElement!).queryAllByTestId(
      'productComponent'
    )
    const emptyComponent = canvas.getAllByTestId('emptyComponent')
    const recommendedTitle = canvas.getByRole('heading', {
      name: 'Recommended'
    })
    const recommendedHighlight = canvas.getByTestId('highlightComponent')
    const recommendedProducts = canvas.getByTestId('productSliderComponent')

    expect(title).toBeInTheDocument()
    expect(emptyComponent).toHaveLength(1)
    expect(products.length).toBeGreaterThan(0)
    expect(recommendedTitle).toBeInTheDocument()
    expect(recommendedHighlight).toBeInTheDocument()
    expect(recommendedProducts).toBeInTheDocument()
  }
}

export const Empty: Story = {
  play: ({ canvasElement }) => {
    const canvas = within(canvasElement)
    const title = canvas.getByRole('heading', { name: 'Wishlist' })
    const emptyComponent = canvas.getAllByTestId('emptyComponent')
    const products = within(title.parentElement!).queryAllByTestId(
      'productComponent'
    )

    expect(emptyComponent).toHaveLength(2)
    expect(products.length).toBe(0)
  }
}
