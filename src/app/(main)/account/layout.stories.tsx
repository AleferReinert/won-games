import type { Meta, StoryObj } from '@storybook/react'
import { expect, within } from '@storybook/test'
import AccountLayout from './layout'

const meta: Meta<typeof AccountLayout> = {
  title: 'Layouts/Account',
  component: AccountLayout,
  args: {
    children: <p>Required children</p>
  },
  parameters: {
    layout: 'fullscreen',
    options: {
      showPanel: false
    }
  },
  tags: ['!dev', '!test']
}

export default meta

type Story = StoryObj<typeof AccountLayout>

export const Account: Story = {
  play: async ({ canvasElement, step }) => {
    const canvas = within(canvasElement)

    await step('Page title', () => {
      const title = canvas.getByRole('heading', { level: 1 })
      expect(title).toHaveTextContent('My account')
    })

    await step('My profile: link and icon', () => {
      const myProfile = canvas.getByRole('link', { name: /my profile/i })
      expect(myProfile).toHaveAttribute('href', '/account/profile')
      expect(within(myProfile).getByRole('img', { hidden: true })).toBeVisible()
    })

    await step('My orders: link and icon', () => {
      const myOrders = canvas.getByRole('link', { name: /my orders/i })
      expect(myOrders).toHaveAttribute('href', '/account/orders')
      expect(within(myOrders).getByRole('img', { hidden: true })).toBeVisible()
    })

    await step('Logout: button and icon', () => {
      const logout = canvas.getByRole('button', { name: /logout/i })
      expect(logout).toBeVisible()
      expect(within(logout).getByRole('img', { hidden: true })).toBeVisible()
    })

    await step('Required children', () => {
      const children = canvas.getByText(/required children/i)
      expect(children).toBeInTheDocument()
    })
  }
}
