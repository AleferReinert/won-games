import type { StoryObj, Meta } from '@storybook/react'
import { within } from '@storybook/testing-library'
import { expect } from '@storybook/jest'
import ProfileMenuComponent from './ProfileMenu'
import theme from 'styles/theme'

const meta: Meta<typeof ProfileMenuComponent> = {
  title: 'Components/ProfileMenu',
  component: ProfileMenuComponent
}

export default meta

type Story = StoryObj<typeof ProfileMenuComponent>

export const Default: Story = {
  play: ({ canvasElement }) => {
    const canvas = within(canvasElement)
    const items = canvas.getAllByRole('link')
    const icons = canvas.getAllByTitle(/my/i)
    const iconSignOut = canvas.getByTitle(/sign out/i)

    // Render 4 links
    expect(items.length).toBe(4)

    // Render 4 icons with title
    expect(icons.length).toBe(3)
    expect(iconSignOut).toBeInTheDocument()
  }
}

export const ActiveLink: Story = {
  args: {
    activeLink: 'profile/orders'
  },
  play: ({ canvasElement }) => {
    const canvas = within(canvasElement)
    const activeLink = canvas.getByRole('link', { name: /my orders/i })

    // Styles to active link
    expect(activeLink).toHaveStyle({
      color: theme.colors.white,
      backgroundColor: theme.colors.primary
    })
  }
}
