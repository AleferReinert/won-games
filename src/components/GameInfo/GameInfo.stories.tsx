import type { StoryObj, Meta } from '@storybook/react'
import { within } from '@storybook/testing-library'
import { expect } from '@storybook/jest'
import GameInfoComponent from './GameInfo'
import mockGameInfo from './mock'

const meta: Meta<typeof GameInfoComponent> = {
  title: 'Components/GameInfo',
  component: GameInfoComponent,
  args: mockGameInfo
}

export default meta

type Story = StoryObj<typeof GameInfoComponent>

export const GameInfo: Story = {
  play: ({ canvasElement }) => {
    const canvas = within(canvasElement)
    const title = canvas.getByRole('heading', { name: /borderlands 3/i })
    const description = canvas.getByText(/now is hour to eliminate/i)
    const price = canvas.getByText('$215.00')
    const buttonAddToCart = canvas.getByRole('button', { name: /add to cart/i })
    const buttonWishlist = canvas.getByRole('button', { name: /wishlist/i })

    expect(title).toBeInTheDocument()
    expect(description).toBeInTheDocument()
    expect(price).toBeInTheDocument()
    expect(buttonAddToCart).toBeInTheDocument()
    expect(buttonWishlist).toBeInTheDocument()
  }
}
