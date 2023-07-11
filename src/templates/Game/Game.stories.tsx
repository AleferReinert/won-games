import type { StoryObj, Meta } from '@storybook/react'
import { within } from '@storybook/testing-library'
import { expect } from '@storybook/jest'
import GameTemplate from './Game'
import gameInfoMock from 'components/GameInfo/mock'
import galleryMock from 'components/Gallery/mock'
import textContentMock from 'components/TextContent/mock'
import gameDetailsMock from 'components/GameDetails/mock'
import highlightMock from 'components/Highlight/mock'
import gamesMock from 'components/GameCardSlider/mock'

const meta: Meta<typeof GameTemplate> = {
  title: 'Templates/Game',
  component: GameTemplate,
  args: {
    cover: '/img/games/cyberpunk-1.jpg',
    gameInfo: gameInfoMock,
    gallery: galleryMock,
    description: textContentMock.content,
    details: gameDetailsMock,
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
    const gameInfo = canvas.getByTestId('gameInfoComponent')
    const gallery = canvas.queryByTestId('galleryComponent')
    const description = canvas.getByTestId('textContentComponent')
    const details = canvas.getByTestId('gameDetailsComponent')
    const upcomingTitle = canvas.getByRole('heading', { name: /upcoming/i })
    const upcomingHighlight = canvas.getByTestId('highlightComponent')
    const upcomingGames = canvas.getAllByTestId('gameCardSliderComponent')[0]
    const recommendedTitle = canvas.getByRole('heading', {
      name: /you make like these games/i
    })
    const recommendedGames = canvas.getAllByTestId('gameCardSliderComponent')[1]

    expect(cover).toHaveAttribute('src')
    expect(gameInfo).toBeInTheDocument()
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
