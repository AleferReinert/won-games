import type { Meta, StoryObj } from '@storybook/react'
import { expect, within } from '@storybook/test'
import AuthTemplate from './Auth'

const meta: Meta<typeof AuthTemplate> = {
  title: 'Templates/Auth',
  component: AuthTemplate,
  args: {
    title: 'Required title',
    children: 'Required children'
  },
  parameters: {
    layout: 'fullscreen',
    options: {
      showPanel: false
    }
  }
}

export default meta

type Story = StoryObj<typeof AuthTemplate>

export const Auth: Story = {
  play: async ({ canvasElement, step }) => {
    const canvas = within(canvasElement)

    await step('2 LogoComponents', () => {
      const logoComponent = canvas.getAllByTestId('LogoComponent')
      expect(logoComponent.length).toBe(2)
    })

    await step('Column left background image', () => {
      const section = canvas.getByTestId('bannerBlock')
      const sectionBackground = window.getComputedStyle(section).backgroundImage
      expect(sectionBackground).toContain('img/auth-bg.jpg')
    })

    await step('Column left title', () => {
      const title = canvas.getByRole('heading', { level: 2 })
      expect(title).toHaveTextContent('All your favorites games in one place')
    })

    await step('Column left description', () => {
      const description = canvas.getByText(/is the best and most complete gaming platform\./i)
      expect(description).toBeVisible()
    })

    await step('Column left copyright', () => {
      const copyright = canvas.getByText(/Won Games 2023 © Todos os Direitos Reservados/i)
      expect(copyright).toBeVisible()
    })

    await step('Required title', () => {
      const title = canvas.getByRole('heading', { level: 1 })
      expect(title).toHaveTextContent('Required title')
    })

    await step('Required children', () => {
      const children = canvas.getByText(/required children/i)
      expect(children).toBeInTheDocument()
    })
  }
}
