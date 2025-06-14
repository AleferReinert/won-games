import { MockedProvider } from '@apollo/client/testing'
import type { Meta, StoryObj } from '@storybook/react'
import { expect, within } from '@storybook/test'
import { CartContext } from 'contexts/CartContext'
import { cartContextMock } from 'mocks/cartContext.mock'
import { cartItemsResponseMock } from 'mocks/cartItemsResponse.mock'
import { CartDropdown } from './CartDropdown'

const meta: Meta<typeof CartDropdown> = {
  title: 'Components/CartDropdown',
  component: CartDropdown,
  decorators: (Story) => (
    <div style={{ textAlign: 'right', padding: '2rem', height: '500px' }}>
      <Story />
    </div>
  ),
  parameters: {
    viewport: {
      disable: true
    }
  }
}

export default meta

type Story = StoryObj<typeof CartDropdown>

export const Empty: Story = {
  play: async ({ canvasElement, step }) => {
    const canvas = within(canvasElement)
    const badge = canvas.getAllByLabelText(/cart items/i)[1]
    const emptyComponent = canvas.getByTestId('EmptyComponent')

    await step('Badge with 0', () => {
      expect(badge).toHaveTextContent('0')
    })

    step('Empty component', () => {
      expect(emptyComponent).toBeInTheDocument()
    })
  }
}

export const WithProducts: Story = {
  decorators: [
    (Story) => (
      <MockedProvider mocks={[cartItemsResponseMock]} addTypename={false}>
        <CartContext.Provider value={cartContextMock}>
          <Story />
        </CartContext.Provider>
      </MockedProvider>
    )
  ],
  play: async ({ canvasElement, step }) => {
    const canvas = within(canvasElement)

    await step('Button with icon', () => {
      const button = canvas.getByRole('button', { name: 'Shopping cart' })
      const icon = within(button).getByRole('img', { hidden: true })
      expect(button).toBeVisible()
      expect(icon).toBeVisible()
    })

    await step('Badge with 2', () => {
      const badge = canvas.getAllByLabelText(/cart items/i)[0]
      expect(badge).toHaveTextContent('2')
    })

    await step('Cart items', () => {
      const cartItemComponents = canvas.getAllByTestId('CartItemComponent')
      expect(cartItemComponents.length).toBe(2)
    })

    await step('Total', () => {
      const total = canvas.getByText('$218.00')
      expect(total).toBeInTheDocument()
    })
  }
}

export const Mobile: Story = {
  parameters: {
    viewport: {
      defaultViewport: 'xsmall',
      disable: false
    }
  },
  play: async ({ canvasElement, step }) => {
    const canvas = within(canvasElement)

    await step('Has link', () => {
      const link = canvas.getByRole('link')
      expect(link).toHaveAttribute('href', '/cart')
    })
  }
}
