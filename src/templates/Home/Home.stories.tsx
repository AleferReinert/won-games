import type { StoryObj, Meta } from '@storybook/react'
import { within } from '@storybook/testing-library'
import { expect } from '@storybook/jest'
import HomeComponent from './Home'
import bannersMock from 'components/BannerSlider/mock'
import gamesMock from 'components/GameCardSlider/mock'
import highlightMock from 'components/Highlight/mock'

const meta: Meta<typeof HomeComponent> = {
  title: 'Templates/Home',
  component: HomeComponent,
  args: {
    banners: bannersMock,
    newGames: gamesMock,
    mostPopularHighlight: highlightMock,
    mostPopularsGames: gamesMock,
    comingSoonGames: gamesMock,
    comingSoonHighlight: highlightMock,
    comingSoonMoreGames: gamesMock,
    freeHighlight: highlightMock,
    freeGames: gamesMock
  },
  parameters: {
    options: {
      showPanel: false
    }
  }
}

export default meta

type Story = StoryObj<typeof HomeComponent>

export const Home: Story = {
  play: ({ canvasElement }) => {
    const canvas = within(canvasElement)
    const bannerSlider = canvas.getByTestId('bannerSliderComponent')
    const showcases = canvas.getAllByTestId('showcaseComponent')

    expect(bannerSlider).toBeInTheDocument()
    expect(showcases.length).toBe(5)
  }
}
