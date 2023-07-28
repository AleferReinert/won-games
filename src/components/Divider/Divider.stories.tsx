import type { StoryObj, Meta } from '@storybook/react'
import { within } from '@storybook/testing-library'
import { expect } from '@storybook/jest'
import DividerComponent from './Divider'

const meta: Meta<typeof DividerComponent> = {
  title: 'Components/Atoms/Divider',
  component: DividerComponent
}

export default meta

type Story = StoryObj<typeof DividerComponent>

export const Divider: Story = {
  play: ({ canvasElement }) => {
    const canvas = within(canvasElement)
    const line = canvas.getByLabelText('line')

    expect(line).toBeInTheDocument()
  }
}
