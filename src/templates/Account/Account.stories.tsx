import type { Meta, StoryObj } from '@storybook/react'
import { expect, within } from '@storybook/test'
import theme from 'styles/theme'
import AccountTemplate from './Account'

const meta: Meta<typeof AccountTemplate> = {
  title: 'Templates/Account',
  component: AccountTemplate,
  args: {
    activeLink: 'My profile',
    children: <p style={{ color: theme.colors.white }}>Required children</p>
  },
  argTypes: {
    activeLink: {
      options: ['My profile', 'My orders'],
      control: { type: 'radio' }
    }
  },
  parameters: {
    layout: 'fullscreen',
    options: {
      showPanel: false
    }
  }
}

export default meta

type Story = StoryObj<typeof AccountTemplate>

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

    await step('Logout: link and icon', () => {
      const logout = canvas.getByRole('link', { name: /logout/i })
      expect(logout).toHaveAttribute('href', '/')
      expect(within(logout).getByRole('img', { hidden: true })).toBeVisible()
    })

    await step('Required active link', () => {
      const myProfile = canvas.getByRole('link', { name: /my profile/i })
      expect(myProfile).toHaveStyle({
        color: theme.colors.white,
        backgroundColor: theme.colors.primary
      })
    })

    await step('Required children', () => {
      const children = canvas.getByText(/required children/i)
      expect(children).toBeInTheDocument()
    })
  }
}
