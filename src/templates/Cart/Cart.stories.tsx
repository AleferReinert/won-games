import type { StoryObj, Meta } from '@storybook/react'
import { within } from '@storybook/testing-library'
import { expect } from '@storybook/jest'
import CartTemplate from './Cart'
import highlightMock from 'components/Highlight/mock'
import gameCardSliderMock from 'components/GameCardSlider/mock'
import gameItemsMock from 'components/CartList/mock'
import creditCardsMock from 'components/PaymentOptions/mock'

const meta: Meta<typeof CartTemplate> = {
  title: 'Templates/Cart',
  component: CartTemplate,
  args: {
    gameItems: gameItemsMock,
    total: '$530',
    creditCards: creditCardsMock,
    recommendedHighlight: highlightMock,
    recommendedGames: gameCardSliderMock
  },
  parameters: {
    layout: 'fullscreen',
    options: {
      showPanel: false
    }
  }
}

export default meta

type Story = StoryObj<typeof CartTemplate>

export const Default: Story = {
  play: ({ canvasElement }) => {
    const canvas = within(canvasElement)
    const title = canvas.getByRole('heading', { name: /my cart/i })
    const cartList = canvas.getByLabelText(/cart list/i)
    const paymentOptions = canvas.getByTestId('paymentOptions')
    const info = canvas.getByText(/your purchase is protected/i)
    const recommendedTitle = canvas.getByRole('heading', {
      name: /you make like these games/i
    })
    const recommendedHighlight = canvas.getByTestId('highlightComponent')
    const recommendedGames = canvas.getByTestId('gameCardSliderComponent')

    expect(title).toBeInTheDocument()
    expect(cartList).toBeInTheDocument()
    expect(paymentOptions).toBeInTheDocument()
    expect(info).toBeInTheDocument()
    expect(recommendedTitle).toBeInTheDocument()
    expect(recommendedHighlight).toBeInTheDocument()
    expect(recommendedGames).toBeInTheDocument()
  }
}

export const Empty: Story = {
  args: {
    gameItems: []
  },
  play: ({ canvasElement }) => {
    const canvas = within(canvasElement)
    const cartList = canvas.queryByLabelText(/cart list/i)
    const paymentOptions = canvas.queryByTestId('paymentOptions')
    const info = canvas.queryByText(/your purchase is protected/i)
    const emptyComponent = canvas.getByTestId('emptyComponent')

    expect(cartList).not.toBeInTheDocument()
    expect(paymentOptions).not.toBeInTheDocument()
    expect(info).not.toBeInTheDocument()
    expect(emptyComponent).toBeInTheDocument()
  }
}
