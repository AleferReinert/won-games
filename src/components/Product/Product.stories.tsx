import type { Meta, StoryObj } from '@storybook/react'
import { expect, fn, userEvent, within } from '@storybook/test'
import { productMock } from '../../mocks/product.mock'
import ProductComponent from './Product'

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
  ],
  parameters: {
    layout: 'centered'
  },
  tags: ['autodocs']
}

export default meta

type Story = StoryObj<typeof ProductComponent>

export const Default: Story = {
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)
    const title = canvas.getByRole('heading', { name: 'Population Zero' })
    const developer = canvas.getByRole('heading', { name: 'Other Ocean' })
    const img = canvas.getByRole('img', { name: 'Population Zero' })
    const slug = canvas.getByRole('link')
    const icon = canvas.getByRole('img', { name: /add to wishlist/i })
    const price = canvas.getByLabelText('price')
    const buttonAddToCart = canvas.getByRole('button', { name: /add to cart/i })

    // render items
    expect(title).toBeInTheDocument()
    expect(developer).toBeInTheDocument()
    expect(img.getAttribute('src')).toMatch(/\/img\/game-test.jpg/)
    expect(slug).toHaveAttribute('href', '/product/population-zero')
    expect(icon).toBeInTheDocument()
    expect(price).toContainHTML('$215.00')
    expect(buttonAddToCart).toBeInTheDocument()

    // function called when icon clicked
    // await userEvent.click(icon)
    // expect(args.onFav).toHaveBeenCalled()
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
    const icon = canvas.getByRole('img', { name: /remove from wishlist/i })

    expect(icon).toBeInTheDocument()
  }
}

export const OnFav: Story = {
  args: {
    onFav: fn()
  },
  play: async ({ canvasElement, args, step }) => {
    const canvas = within(canvasElement)
    const icon = canvas.getByRole('img', { name: /add to wishlist/i })

    step('onFav is called when icon is clicked', async () => {
      await userEvent.click(icon)
      expect(args.onFav).toHaveBeenCalled()
    })
  }
}
