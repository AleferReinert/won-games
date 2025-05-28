import type { Meta, StoryObj } from '@storybook/react'
import { expect, waitFor, within } from '@storybook/test'
import MainLayout from 'app/(main)/layout'
import { companyHandler } from 'mocks/handlers/companyHandler'
import { ordersEmptyHandler, ordersHandler } from 'mocks/handlers/ordersHandler'
import { sessionMock } from 'mocks/sessionMock'
import { NextAuthSessionArgs } from '../../../../../.storybook/preview'
import AccountLayout from '../layout'
import OrdersPage from './page'

const meta: Meta<typeof OrdersPage> & { args?: NextAuthSessionArgs } = {
  title: 'Pages/Account/Orders',
  component: OrdersPage,
  args: {
    ...sessionMock
  },
  decorators: (Story) => (
    <MainLayout>
      <AccountLayout>
        <Story />
      </AccountLayout>
    </MainLayout>
  ),
  tags: ['!dev', '!test']
}

export default meta

type Story = StoryObj<typeof OrdersPage>

export const Empty: Story = {
  parameters: {
    layout: 'fullscreen',
    msw: {
      handlers: [companyHandler, ordersEmptyHandler]
    }
  },
  play: ({ canvasElement, step }) => {
    const canvas = within(canvasElement)

    step('Empty message', async () => {
      const alert = await waitFor(() => canvas.getByRole('alert'))
      expect(alert).toHaveTextContent('You have no orders yet.')
    })
  }
}

export const WithOrders: Story = {
  parameters: {
    layout: 'fullscreen',
    msw: {
      handlers: [companyHandler, ordersHandler]
    }
  },
  play: ({ canvasElement, step }) => {
    const canvas = within(canvasElement)

    step('CartItem components ', async () => {
      const cartItemComponents = await waitFor(() => canvas.getAllByTestId('CartItemComponent'))
      expect(cartItemComponents.length).toBeGreaterThan(0)
    })
  }
}
