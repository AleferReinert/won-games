import type { Meta, StoryObj } from '@storybook/react'
import { expect, within } from '@storybook/test'
import { cartItemsMinMock } from 'mocks/cartItemsMin.mock'
import CartDropdownComponent from './CartDropdown'

const meta: Meta<typeof CartDropdownComponent> = {
  title: 'Components/CartDropdown',
  component: CartDropdownComponent,
  decorators: [
    (Story) => (
      <div style={{ textAlign: 'right', padding: '2rem', height: '500px' }}>
        <Story />
      </div>
    )
  ],
  tags: ['autodocs']
}

export default meta

type Story = StoryObj<typeof CartDropdownComponent>

export const Default: Story = {
  args: {
    cartItems: cartItemsMinMock,
    total: '$ 350,00'
  },
  play: async ({ canvasElement, step }) => {
    const canvas = within(canvasElement)

    await step('Button with icon', () => {
      const button = canvas.getByRole('button', { name: 'Shopping cart' })
      const icon = within(button).getByRole('img', { hidden: true })
      expect(button).toBeVisible()
      expect(icon).toBeVisible()
    })

    await step('Badge with 3', () => {
      const badge = canvas.getByLabelText(/cart items/i)
      expect(badge).toHaveTextContent('3')
    })

    await step('Cart items list', () => {
      const content = canvas.getByLabelText('cart list')
      expect(content).toBeInTheDocument()
    })

    await step('Total', () => {
      const total = canvas.getByText('$ 350,00')
      expect(total).toBeInTheDocument()
    })
  }
}

export const Empty: Story = {
  args: {
    cartItems: []
  },
  play: async ({ canvasElement, step }) => {
    const canvas = within(canvasElement)
    const badge = canvas.getByLabelText(/cart items/i)
    const emptyComponent = canvas.getByTestId('EmptyComponent')

    await step('Badge with 0', () => {
      expect(badge).toHaveTextContent('0')
    })

    step('Empty component', () => {
      expect(emptyComponent).toBeInTheDocument()
    })
  }
}
