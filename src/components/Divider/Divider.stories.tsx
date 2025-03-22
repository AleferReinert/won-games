import type { Meta, StoryObj } from '@storybook/react'
import { expect, within } from '@storybook/test'
import DividerComponent from './Divider'

const meta: Meta<typeof DividerComponent> = {
  title: 'Components/Atoms/Divider',
  component: DividerComponent
}

export default meta

type Story = StoryObj<typeof DividerComponent>

export const Divider: Story = {
  play: async ({ canvasElement, step }) => {
    const canvas = within(canvasElement)

    step('Line', () => {
      const line = canvas.getByRole('separator')
      expect(line).toBeVisible()
    })
  }
}
