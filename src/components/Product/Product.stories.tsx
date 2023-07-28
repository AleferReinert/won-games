import type { StoryObj, Meta } from '@storybook/react'
import { userEvent, within } from '@storybook/testing-library'
import { expect } from '@storybook/jest'
import ProductComponent from './Product'
import mockProduct from './mock'

const meta: Meta<typeof ProductComponent> = {
  title: 'Components/Product',
  component: ProductComponent,
  args: mockProduct,
  argTypes: {
    onFav: {
      action: 'clicked',
      table: { disable: true }
    },
    ribbon: {
      type: 'string',
      if: { arg: 'promotionalPrice' }
    }
  },
  decorators: [
    (Story) => (
      <div style={{ width: '30rem' }}>
        <Story />
      </div>
    )
  ]
}

export default meta

type Story = StoryObj<typeof ProductComponent>

export const Default: Story = {
  play: async ({ canvasElement, args }) => {
    const canvas = within(canvasElement)
    const img = canvas.getByRole('img', { name: args.title })
    const title = canvas.getByRole('heading', { name: args.title })
    const developer = canvas.getByRole('heading', { name: args.developer })
    const favIcon = canvas.getByRole('img', { name: /add to wishlist/i })
    const price = canvas.getByLabelText('price')
    const buttonAddToCart = canvas.getByRole('button', { name: /add to cart/i })

    // render items
    expect(img).toBeInTheDocument()
    expect(title).toBeInTheDocument()
    expect(developer).toBeInTheDocument()
    expect(favIcon).toBeInTheDocument()
    expect(price).toBeInTheDocument()
    expect(buttonAddToCart).toBeInTheDocument()

    // function called when favIcon clicked
    await userEvent.click(favIcon)
    expect(args.onFav).toBeCalled()
  }
}

export const WithDiscount: Story = {
  args: {
    ribbon: '20% off',
    promotionalPrice: '$185.00'
  },
  play: ({ canvasElement }) => {
    const canvas = within(canvasElement)
    const ribbon = canvas.getByText(/20% off/i)
    const promotionalPrice = canvas.getByLabelText('promotional price')

    expect(ribbon).toBeInTheDocument()
    expect(promotionalPrice).toBeInTheDocument()
  }
}

export const Favorited: Story = {
  args: {
    favorite: true
  },
  play: ({ canvasElement }) => {
    const canvas = within(canvasElement)
    const favIcon = canvas.getByRole('img', { name: /remove from wishlist/i })

    expect(favIcon).toBeInTheDocument()
  }
}
