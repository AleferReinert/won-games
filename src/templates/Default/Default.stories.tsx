import type { Meta, StoryObj } from '@storybook/react'
import { expect, within } from '@storybook/test'
import DefaultTemplate from './Default'

const meta: Meta<typeof DefaultTemplate> = {
  title: 'Templates/Default',
  component: DefaultTemplate,
  args: {
    children: <div style={{ color: 'white', textAlign: 'center' }}>Required children</div>
  },
  parameters: {
    layout: 'fullscreen',
    options: {
      showPanel: false
    }
  }
}

export default meta

type Story = StoryObj<typeof DefaultTemplate>

export const Default: Story = {
  play: async ({ canvasElement, step }) => {
    const canvas = within(canvasElement)

    await step('Header', () => {
      const header = canvas.getByRole('banner')
      expect(header).toBeVisible()
    })

    await step('Required children', () => {
      const children = canvas.getByText(/required children/i)
      expect(children).toBeVisible()
    })

    await step('Footer', () => {
      const footer = canvas.getByRole('contentinfo')
      expect(footer).toBeVisible()
    })
  }
}
