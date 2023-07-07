import type { StoryObj, Meta } from '@storybook/react'
import { within } from '@storybook/testing-library'
import { expect } from '@storybook/jest'
import CartListComponent from './CartList'
import mockGameItems from './mock'
import theme from 'styles/theme'
const meta: Meta<typeof CartListComponent> = {
  title: 'Components/CartList',
  component: CartListComponent,
  args: {
    gameItems: mockGameItems,
    total: '$530'
  }
}

export default meta

type Story = StoryObj<typeof CartListComponent>

export const CartList: Story = {
  play: ({ canvasElement, args }) => {
    const canvas = within(canvasElement)
    const gameItems = canvas.getAllByRole('heading')
    const totalText = canvas.getByText('Total:')
    const totalPrice = canvas.getByLabelText('total price')

    expect(gameItems.length).toBeGreaterThan(0)
    expect(totalText).toBeInTheDocument
    expect(totalPrice).toHaveTextContent(args.total)
    expect(totalPrice).toHaveStyle({ color: theme.colors.primary })
  }
}
