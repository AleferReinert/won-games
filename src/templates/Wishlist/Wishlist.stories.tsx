import type { StoryObj, Meta } from '@storybook/react'
import { within } from '@storybook/testing-library'
import { expect } from '@storybook/jest'
import WishlistTemplate from './Wishlist'
import highlightMock from 'components/Highlight/mock'
import gamesMock from 'components/ProductSlider/mock'

const meta: Meta<typeof WishlistTemplate> = {
  title: 'Templates/Wishlist',
  component: WishlistTemplate,
  args: {
    recommendedHighlight: highlightMock,
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

type Story = StoryObj<typeof WishlistTemplate>

export const Default: Story = {
  args: {
    wishlistGames: gamesMock
  },
  play: ({ canvasElement }) => {
    const canvas = within(canvasElement)
    const title = canvas.getByRole('heading', { name: 'Wishlist' })
    const games = within(title.parentElement!).queryAllByTestId(
      'productComponent'
    )
    const empty = canvas.queryByTestId('emptyComponent')
    const recommendedTitle = canvas.getByRole('heading', {
      name: /you make like these games/i
    })
    const recommendedHighlight = canvas.getByTestId('highlightComponent')
    const recommendedGames = canvas.getByTestId('productSliderComponent')

    expect(title).toBeInTheDocument()
    expect(empty).not.toBeInTheDocument()
    expect(games.length).toBeGreaterThan(0)
    expect(recommendedTitle).toBeInTheDocument()
    expect(recommendedHighlight).toBeInTheDocument()
    expect(recommendedGames).toBeInTheDocument()
  }
}

export const Empty: Story = {
  play: ({ canvasElement }) => {
    const canvas = within(canvasElement)
    const title = canvas.getByRole('heading', { name: 'Wishlist' })
    const empty = canvas.queryByTestId('emptyComponent')
    const games = within(title.parentElement!).queryAllByTestId(
      'productComponent'
    )

    expect(empty).toBeInTheDocument()
    expect(games.length).toBe(0)
  }
}
