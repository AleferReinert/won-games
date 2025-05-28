import type { Meta, StoryObj } from '@storybook/react'
import { expect, within } from '@storybook/test'
import { Divider } from './Divider'

const meta: Meta<typeof Divider> = {
  title: 'Components/Atoms/Divider',
  component: Divider
}

export default meta

type Story = StoryObj<typeof Divider>

export const Default: Story = {
  name: 'Divider',
  play: ({ canvasElement, step }) => {
    const canvas = within(canvasElement)

    step('<hr />', () => {
      const line = canvas.getByRole('separator')
      expect(line).toBeVisible()
    })
  }
}
