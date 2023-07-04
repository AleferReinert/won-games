import type { StoryObj, Meta } from '@storybook/react'
import { within } from '@storybook/testing-library'
import { expect } from '@storybook/jest'
import GameComponent from './Game'
import gameInfoMock from 'components/GameInfo/mock'
import galleryMock from 'components/Gallery/mock'
import textContentMock from 'components/TextContent/mock'
import gameDetailsMock from 'components/GameDetails/mock'
import highlightMock from 'components/Highlight/mock'
import gamesMock from 'components/GameCardSlider/mock'

const meta: Meta<typeof GameComponent> = {
  title: 'Templates/Game',
  component: GameComponent,
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
    options: {
      showPanel: false
    }
  }
}

export default meta

type Story = StoryObj<typeof GameComponent>

export const Game: Story = {
  play: ({ canvasElement, args }) => {
    const canvas = within(canvasElement)
    const cover = canvas.getByLabelText(/cover/i)
    const gameInfo = canvas.getByTestId('gameInfoComponent')
    const gallery = canvas.queryByTestId('galleryComponent')
    const description = canvas.getByTestId('textContentComponent')
    const details = canvas.getByTestId('gameDetailsComponent')
    const showcases = canvas.getAllByTestId('showcaseComponent')

    expect(cover).toHaveAttribute('src')
    expect(gameInfo).toBeInTheDocument()
    args.gallery
      ? expect(gallery).toBeInTheDocument()
      : expect(gallery).not.toBeInTheDocument()

    expect(description).toBeInTheDocument()
    expect(details).toBeInTheDocument()
    expect(showcases.length).toBe(2)
  }
}
