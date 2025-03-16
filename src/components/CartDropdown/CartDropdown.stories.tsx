import { expect } from '@storybook/jest'
import type { Meta, StoryObj } from '@storybook/react'
import { within } from '@storybook/testing-library'
import { cartItemsMock } from '../../mocks/cartItem.mock'
import CartDropdownComponent from './CartDropdown'

const meta: Meta<typeof CartDropdownComponent> = {
  title: 'Components/CartDropdown',
  component: CartDropdownComponent,
  decorators: [
    (Story) => (
      <div style={{ textAlign: 'right', padding: '2rem' }}>
        <Story />
      </div>
    )
  ]
}

export default meta

type Story = StoryObj<typeof CartDropdownComponent>

export const Default: Story = {
  args: {
    cartItems: cartItemsMock,
    total: '$ 350,00'
  },
  play: ({ canvasElement, args }) => {
    const canvas = within(canvasElement)
    const badge = canvas.getByLabelText(/cart items/i)
    const icon = canvas.getByRole('img', { name: 'Shopping cart' })
    const content = canvas.getByText(args.cartItems![0].title)
    const total = canvas.getByText(args.total!)

    expect(badge).toHaveTextContent(args.cartItems!.length.toString())
    expect(icon).toBeInTheDocument()
    expect(content).toBeInTheDocument()
    expect(total).toBeInTheDocument()
  }
}

export const Empty: Story = {
  args: {
    cartItems: []
  },
  play: ({ canvasElement }) => {
    const canvas = within(canvasElement)
    const badge = canvas.getByLabelText(/cart items/i)
    const emptyComponent = canvas.getByTestId('emptyComponent')

    expect(badge).toHaveTextContent('0')
    expect(emptyComponent).toBeInTheDocument()
  }
}
