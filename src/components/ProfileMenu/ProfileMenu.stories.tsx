import type { StoryObj, Meta } from '@storybook/react'
import { within } from '@storybook/testing-library'
import { expect } from '@storybook/jest'
import ProfileMenuComponent from './ProfileMenu'
import theme from 'styles/theme'

const meta: Meta<typeof ProfileMenuComponent> = {
  title: 'Components/Atoms/ProfileMenu',
  component: ProfileMenuComponent
}

export default meta

type Story = StoryObj<typeof ProfileMenuComponent>

export const ProfileMenu: Story = {
  play: ({ canvasElement }) => {
    const canvas = within(canvasElement)
    const items = canvas.getAllByRole('link')
    const icons = canvas.getAllByRole('img')
    const activeLink = canvas.getByRole('link', { name: /my profile/i })

    // Render 4 items
    expect(items.length).toBe(4)
    expect(icons.length).toBe(4)

    // My profile active as default
    expect(activeLink).toHaveStyle({
      color: theme.colors.white,
      backgroundColor: theme.colors.primary
    })
  }
}
