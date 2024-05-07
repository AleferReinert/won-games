import type { StoryObj, Meta } from '@storybook/react'
import { within } from '@storybook/testing-library'
import { expect } from '@storybook/jest'
import DefaultTemplate from 'templates/Default/Default'
import WishlistPage from '.'
import highlightMock from 'components/Highlight/mock'
import gamesMock from 'components/ProductSlider/mock'

const meta: Meta<typeof WishlistPage> = {
  title: 'Pages/Wishlist',
  component: WishlistPage,
  args: {
    recommendedHighlight: highlightMock,
    recommendedGames: gamesMock
  },
  parameters: {
    layout: 'fullscreen',
    options: {
      showPanel: false
    }
  },
  decorators: [
    (Story) => (
      <DefaultTemplate>
        <Story />
      </DefaultTemplate>
    )
  ]
}

export default meta

type Story = StoryObj<typeof WishlistPage>

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
    const emptyComponent = canvas.getAllByTestId('emptyComponent')
    const recommendedTitle = canvas.getByRole('heading', {
      name: /you make like these games/i
    })
    const recommendedHighlight = canvas.getByTestId('highlightComponent')
    const recommendedGames = canvas.getByTestId('productSliderComponent')

    expect(title).toBeInTheDocument()
    expect(emptyComponent).toHaveLength(1)
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
    const emptyComponent = canvas.getAllByTestId('emptyComponent')
    const games = within(title.parentElement!).queryAllByTestId(
      'productComponent'
    )

    expect(emptyComponent).toHaveLength(2)
    expect(games.length).toBe(0)
  }
}
