import type { StoryObj, Meta } from '@storybook/react'
import { within } from '@storybook/testing-library'
import { expect } from '@storybook/jest'
import HomeTemplate from './Home'
import bannersMock from 'components/BannerSlider/mock'
import gamesMock from 'components/ProductSlider/mock'
import highlightMock from 'components/Highlight/mock'

const meta: Meta<typeof HomeTemplate> = {
  title: 'Templates/Home',
  component: HomeTemplate,
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
    layout: 'fullscreen',
    options: {
      showPanel: false
    }
  }
}

export default meta

type Story = StoryObj<typeof HomeTemplate>

export const Home: Story = {
  play: ({ canvasElement }) => {
    const canvas = within(canvasElement)
    const bannerSlider = canvas.getByTestId('bannerSliderComponent')
    const titles = [
      /new releases/i,
      /most populars/i,
      /coming soon/i,
      /free games/i
    ]
    const productSliders = canvas.getAllByTestId('productSliderComponent')
    const highlights = canvas.getAllByTestId('highlightComponent')

    expect(bannerSlider).toBeInTheDocument()
    for (const title of titles) {
      expect(canvas.getByRole('heading', { name: title })).toBeInTheDocument()
    }
    expect(productSliders.length).toBe(5)
    expect(highlights.length).toBe(3)
  }
}
