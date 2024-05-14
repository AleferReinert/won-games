import { expect } from '@storybook/jest'
import type { Meta, StoryObj } from '@storybook/react'
import { within } from '@storybook/testing-library'
import bannersMock from 'components/BannerSlider/mock'
import highlightMock from 'components/Highlight/mock'
import gamesMock from 'components/ProductSlider/mock'
import DefaultTemplate from 'templates/Default/Default'
import HomeTemplate from '.'

const meta: Meta<typeof HomeTemplate> = {
  title: 'Pages/Home',
  component: HomeTemplate,
  args: {
    banners: bannersMock,
    newsSectionTitle: 'New Games',
    newsSectionProducts: gamesMock,
    mostPopularsSectionTitle: 'Most Populars',
    mostPopularsSectionHighlight: highlightMock,
    mostPopularsSectionProducts: gamesMock,
    comingSoonSectionTitle: 'Coming Soon',
    comingSoonSectionProducts: gamesMock,
    comingSoonSectionHighlight: highlightMock,
    freeSectionTitle: 'Free Games',
    freeSectionProducts: gamesMock,
    freeSectionHighlight: highlightMock
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

type Story = StoryObj<typeof HomeTemplate>

export const Home: Story = {
  play: ({ canvasElement }) => {
    const canvas = within(canvasElement)
    const bannerSlider = canvas.getByTestId('bannerSliderComponent')
    const titles = [
      /new games/i,
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
    expect(productSliders.length).toBe(4)
    expect(highlights.length).toBe(3)
  }
}
