import type { StoryObj, Meta } from '@storybook/react'
import { within } from '@storybook/testing-library'
import { expect } from '@storybook/jest'
import GameTemplate from './Game'
import productHeaderMock from 'components/ProductHeader/mock'
import galleryMock from 'components/Gallery/mock'
import textContentMock from 'components/TextContent/mock'
import productDetailsMock from 'components/ProductDetails/mock'
import highlightMock from 'components/Highlight/mock'
import gamesMock from 'components/ProductSlider/mock'

const meta: Meta<typeof GameTemplate> = {
  title: 'Templates/Game',
  component: GameTemplate,
  args: {
    cover: '/img/games/cyberpunk-1.jpg',
    productHeader: productHeaderMock,
    gallery: galleryMock,
    description: textContentMock.content,
    details: productDetailsMock,
    upcomingHighlight: highlightMock,
    upcomingGames: gamesMock,
    recommendedGames: gamesMock
  },
  parameters: {
    layout: 'fullscreen',
    options: {
      showPanel: false
    }
  }
}

export default meta

type Story = StoryObj<typeof GameTemplate>

export const Game: Story = {
  play: ({ canvasElement, args }) => {
    const canvas = within(canvasElement)
    const cover = canvas.getByLabelText(/cover/i)
    const productHeader = canvas.getByTestId('productHeaderComponent')
    const gallery = canvas.queryByTestId('galleryComponent')
    const description = canvas.getByTestId('textContentComponent')
    const details = canvas.getByTestId('productDetailsComponent')
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

    expect(description).toBeInTheDocument()
    expect(details).toBeInTheDocument()
    expect(upcomingTitle).toBeInTheDocument()
    expect(upcomingHighlight).toBeInTheDocument()
    expect(upcomingGames).toBeInTheDocument()
    expect(recommendedTitle).toBeInTheDocument()
    expect(recommendedGames).toBeInTheDocument()
  }
}
