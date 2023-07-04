import type { StoryObj, Meta } from '@storybook/react'
import { within } from '@storybook/testing-library'
import { expect } from '@storybook/jest'
import WishlistComponent from './Wishlist'
import highlightMock from 'components/Highlight/mock'
import gamesMock from 'components/GameCardSlider/mock'

const meta: Meta<typeof WishlistComponent> = {
  title: 'Templates/Wishlist',
  component: WishlistComponent,
  args: {
    wishlistGames: gamesMock,
    recommendedHighlight: highlightMock,
    recommendedGames: gamesMock
  },
  parameters: {
    options: {
      showPanel: false
    }
  }
}

export default meta

type Story = StoryObj<typeof WishlistComponent>

export const Wishlist: Story = {
  play: ({ canvasElement, args }) => {
    const canvas = within(canvasElement)
    const title = canvas.getByRole('heading', { name: 'Wishlist' })
    const games = within(title.parentElement!).queryAllByTestId(
      'gameCardComponent'
    )
    const empty = canvas.queryByTestId('emptyComponent')
    const showcase = canvas.queryByTestId('showcaseComponent')
    const gamesExist = args.wishlistGames && args.wishlistGames.length > 0

    expect(title).toBeInTheDocument()
    if (gamesExist) {
      expect(empty).not.toBeInTheDocument()
      expect(games.length).toBeGreaterThan(0)
    } else {
      expect(empty).toBeInTheDocument()
      expect(games.length).toBe(0)
    }
    expect(showcase).toBeInTheDocument()
  }
}
