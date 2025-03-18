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
      options: ['My profile', 'My cards', 'My orders'],
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
  play: ({ canvasElement }) => {
    const canvas = within(canvasElement)
    const pageTitle = canvasElement.getElementsByTagName('h1')[0]
    const myProfile = canvas.getByRole('link', { name: /my profile/i })
    const myCards = canvas.getByRole('link', { name: /my cards/i })
    const myOrders = canvas.getByRole('link', { name: /my orders/i })
    const signOut = canvas.getByRole('link', { name: /sign out/i })
    const myProfileIcon = canvas.getByTitle(/my profile/i)
    const myCardsIcon = canvas.getByTitle(/my cards/i)
    const myOrdersIcon = canvas.getByTitle(/my orders/i)
    const signOutIcon = canvas.getByTitle(/sign out/i)
    const children = canvas.getByText(/required children/i)

    expect(pageTitle).toBeInTheDocument()

    // Navigation
    expect(myProfile).toBeInTheDocument()
    expect(myCards).toBeInTheDocument()
    expect(myOrders).toBeInTheDocument()
    expect(signOut).toBeInTheDocument()

    // Icons
    expect(myProfileIcon).toBeInTheDocument()
    expect(myCardsIcon).toBeInTheDocument()
    expect(myOrdersIcon).toBeInTheDocument()
    expect(signOutIcon).toBeInTheDocument()

    // Active link
    expect(myProfile).toHaveStyle({
      color: theme.colors.white,
      backgroundColor: theme.colors.primary
    })

    // Children
    expect(children).toBeInTheDocument()
  }
}
