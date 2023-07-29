import type { StoryObj, Meta } from '@storybook/react'
import { within } from '@storybook/testing-library'
import { expect } from '@storybook/jest'
import BaseTemplate from 'templates/Base/Base'
import ProductPage from './[slug]'
import productHeaderMock from 'components/ProductHeader/mock'
import galleryMock from 'components/Gallery/mock'
import descriptionMock from 'pages/product/mock'
import productDetailsMock from 'components/ProductDetails/mock'
import highlightMock from 'components/Highlight/mock'
import gamesMock from 'components/ProductSlider/mock'

const meta: Meta<typeof ProductPage> = {
  title: 'Pages/Product',
  component: ProductPage,
  args: {
    cover: '/img/games/cyberpunk-1.jpg',
    productHeader: productHeaderMock,
    gallery: galleryMock,
    description: descriptionMock.content,
    details: productDetailsMock,
    upcomingHighlight: highlightMock,
    upcomingGames: gamesMock,
    recommendedGames: gamesMock
  },
  decorators: [
    (Story) => (
      <BaseTemplate>
        <Story />
      </BaseTemplate>
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
    const upcomingTitle = canvas.getByRole('heading', { name: /upcoming/i })
    const upcomingHighlight = canvas.getByTestId('highlightComponent')
    const upcomingGames = canvas.getAllByTestId('productSliderComponent')[0]
    const recommendedTitle = canvas.getByRole('heading', {
      name: /you make like these games/i
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
    expect(upcomingTitle).toBeInTheDocument()
    expect(upcomingHighlight).toBeInTheDocument()
    expect(upcomingGames).toBeInTheDocument()
    expect(recommendedTitle).toBeInTheDocument()
    expect(recommendedGames).toBeInTheDocument()
  }
}
