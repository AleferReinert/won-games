import { expect } from '@storybook/jest'
import type { Meta, StoryObj } from '@storybook/react'
import { within } from '@storybook/testing-library'
import { galleryMock } from 'components/Gallery/mock'
import { highlightMock } from 'components/Highlight/mock'
import { productDetailsMock } from 'components/ProductDetails/mock'
import { productHeaderMock } from 'components/ProductHeader/mock'
import { productsMock } from 'components/ProductSlider/mock'
import ProductPage from 'pages/product/[slug]'
import { productDescriptionMock } from 'pages/product/mock'
import DefaultTemplate from 'templates/Default/Default'

const meta: Meta<typeof ProductPage> = {
  title: 'Pages/Product',
  component: ProductPage,
  args: {
    cover: '/img/products/cyberpunk-1.jpg',
    productHeader: productHeaderMock,
    gallery: galleryMock,
    description: productDescriptionMock.content,
    details: productDetailsMock,
    comingSoonSection: {
      title: 'Coming soon',
      products: productsMock,
      highlight: highlightMock
    },
    recommendedSection: {
      title: 'You may like these games',
      products: productsMock
    }
  },
  decorators: [
    (Story) => (
      <DefaultTemplate>
        <Story />
      </DefaultTemplate>
    )
  ],
  parameters: {
    layout: 'fullscreen',
    options: {
      showPanel: false
    }
  }
}

export default meta

type Story = StoryObj<typeof ProductPage>

export const Product: Story = {
  play: ({ canvasElement, args }) => {
    const canvas = within(canvasElement)
    const cover = canvas.getByLabelText(/cover/i)
    const productHeader = canvas.getByTestId('productHeaderComponent')
    const gallery = canvas.queryByTestId('galleryComponent')
    const description = canvas.getByTestId('description')
    const details = canvas.getByTestId('productDetailsComponent')
    const descriptionTitle = canvas.getByRole('heading', {
      name: /about game/i
    })
    const comingSoonTitle = canvas.getByRole('heading', { name: 'Coming soon' })
    const comingSoonHighlight = canvas.getByTestId('highlightComponent')
    const comingSoonGames = canvas.getAllByTestId('productSliderComponent')[0]
    const recommendedTitle = canvas.getByRole('heading', {
      name: 'You may like these games'
    })
    const recommendedGames = canvas.getAllByTestId('productSliderComponent')[1]

    expect(cover).toHaveAttribute('src')
    expect(productHeader).toBeInTheDocument()
    args.gallery
      ? expect(gallery).toBeInTheDocument()
      : expect(gallery).not.toBeInTheDocument()

    expect(descriptionTitle).toBeInTheDocument()
    expect(description).toBeInTheDocument()
    expect(details).toBeInTheDocument()
    expect(comingSoonTitle).toBeInTheDocument()
    expect(comingSoonHighlight).toBeInTheDocument()
    expect(comingSoonGames).toBeInTheDocument()
    expect(recommendedTitle).toBeInTheDocument()
    expect(recommendedGames).toBeInTheDocument()
  }
}
