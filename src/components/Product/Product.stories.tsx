import { expect } from '@storybook/jest'
import type { Meta, StoryObj } from '@storybook/react'
import { userEvent, within } from '@storybook/testing-library'
import ProductComponent from './Product'
import { productMock } from './mock'

const meta: Meta<typeof ProductComponent> = {
  title: 'Components/Product',
  component: ProductComponent,
  args: productMock,
  argTypes: {
    onFav: {
      action: 'clicked',
      table: { disable: true }
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
    const title = canvas.getByRole('heading', { name: 'Population Zero' })
    const developer = canvas.getByRole('heading', { name: 'Other Ocean' })
    const img = canvas.getByRole('img', { name: 'Population Zero' })
    const slug = canvas.getByRole('link')
    const favIcon = canvas.getByRole('img', { name: /add to wishlist/i })
    const price = canvas.getByLabelText('price')
    const buttonAddToCart = canvas.getByRole('button', { name: /add to cart/i })

    // render items
    expect(title).toBeInTheDocument()
    expect(developer).toBeInTheDocument()
    expect(img.getAttribute('src')).toMatch(/\/img\/game-test.jpg/)
    expect(slug).toHaveAttribute('href', '/product/population-zero')
    expect(favIcon).toBeInTheDocument()
    expect(price).toContainHTML('$215.00')
    expect(buttonAddToCart).toBeInTheDocument()

    // function called when favIcon clicked
    await userEvent.click(favIcon)
    expect(args.onFav).toHaveBeenCalled()
  }
}

export const WithDiscount: Story = {
  args: {
    ribbonText: '20% off',
    promotionalPrice: 185.0
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
