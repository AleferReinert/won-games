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
  play: async ({ canvasElement, step }) => {
    const canvas = within(canvasElement)
    const main = within(canvasElement).getByRole('main')
    const navigation = within(within(main).getByRole('navigation'))

    await step('Page title', () => {
      const title = canvas.getByRole('heading', { level: 1 })
      expect(title).toHaveTextContent('My account')
    })

    await step('Navigation links', () => {
      const links = ['My profile', 'My cards', 'My orders', 'Sign out']
      for (const link of links) {
        expect(navigation.getByRole('link', { name: link })).toBeVisible()
      }
    })

    await step('Navigation icons', () => {
      const icons = navigation.getAllByRole('img', { hidden: true })
      expect(icons.length).toBe(4)
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
