import type { Meta, StoryObj } from '@storybook/react'
import { expect, within } from '@storybook/test'
import { bannersMock } from 'mocks/banners.mock'
import { highlightMock } from 'mocks/highlight.mock'
import { productsMock } from 'mocks/products.mock'
import DefaultTemplate from 'templates/Default/Default'
import HomeTemplate from '.'

const meta: Meta<typeof HomeTemplate> = {
  title: 'Pages/Home',
  component: HomeTemplate,
  args: {
    banners: bannersMock,
    newsSectionTitle: 'New Games',
    newsSectionProducts: productsMock,
    mostPopularsSectionTitle: 'Most Populars',
    mostPopularsSectionHighlight: highlightMock,
    mostPopularsSectionProducts: productsMock,
    comingSoonSectionTitle: 'Coming Soon',
    comingSoonSectionProducts: productsMock,
    comingSoonSectionHighlight: highlightMock,
    freeSectionTitle: 'Free Games',
    freeSectionProducts: productsMock,
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
  play: async ({ canvasElement, step }) => {
    const canvas = within(canvasElement)
    const showcaseNewGames = within(canvas.getAllByTestId('ShowcaseComponent')[0])
    const showcaseMostPopulars = within(canvas.getAllByTestId('ShowcaseComponent')[1])
    const showcaseComingSoon = within(canvas.getAllByTestId('ShowcaseComponent')[2])
    const showcaseFreeGames = within(canvas.getAllByTestId('ShowcaseComponent')[3])

    await step('BannerSlider component', () => {
      const bannerSlider = canvas.getByTestId('BannerSliderComponent')
      expect(bannerSlider).toBeVisible()
    })

    await step('Section new games: title and products', () => {
      const title = showcaseNewGames.getByRole('heading', { level: 2 })
      const products = showcaseNewGames.getByTestId('ProductSliderComponent')
      expect(title).toHaveTextContent('New Games')
      expect(products).toBeVisible()
    })

    await step('Section most populars: title, highlight and products', () => {
      const title = showcaseMostPopulars.getByRole('heading', { level: 2 })
      const highlight = showcaseMostPopulars.getByTestId('HighlightComponent')
      const products = showcaseMostPopulars.getByTestId('ProductSliderComponent')
      expect(title).toHaveTextContent('Most Populars')
      expect(highlight).toBeVisible()
      expect(products).toBeVisible()
    })

    await step('Section coming soon: title, highlight and products', () => {
      const title = showcaseComingSoon.getByRole('heading', { level: 2 })
      const highlight = showcaseComingSoon.getByTestId('HighlightComponent')
      const products = showcaseComingSoon.getByTestId('ProductSliderComponent')
      expect(title).toHaveTextContent('Coming Soon')
      expect(highlight).toBeVisible()
      expect(products).toBeVisible()
    })

    await step('Section free games: title, highlight and products', () => {
      const title = showcaseFreeGames.getByRole('heading', { level: 2 })
      const highlight = showcaseFreeGames.getByTestId('HighlightComponent')
      const products = showcaseFreeGames.getByTestId('ProductSliderComponent')
      expect(title).toHaveTextContent('Free Games')
      expect(highlight).toBeVisible()
      expect(products).toBeVisible()
    })
  }
}
