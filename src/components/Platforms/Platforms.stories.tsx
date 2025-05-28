import type { Meta, StoryObj } from '@storybook/react'
import { expect, within } from '@storybook/test'
import { Platforms } from './Platforms'

const meta: Meta<typeof Platforms> = {
  title: 'Components/Atoms/Platforms',
  component: Platforms,
  parameters: {
    layout: 'padded'
  }
}

export default meta

type Story = StoryObj<typeof Platforms>

export const Default: Story = {
  args: {
    platforms: ['PlayStation 4', 'PlayStation 5', 'Xbox Series X', 'Windows 10', 'Windows 8', 'Windows 7', 'Windows XP']
  },
  play: async ({ canvasElement, step }) => {
    const canvas = within(canvasElement)

    await step('Formatted platforms', () => {
      expect(canvas.getByText('PlayStation (4, 5), Windows (7, 8, 10, XP), Xbox Series X'))
    })
  }
}
