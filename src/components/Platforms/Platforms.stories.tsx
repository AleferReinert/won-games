import { expect } from '@storybook/jest'
import type { Meta, StoryObj } from '@storybook/react'
import { within } from '@storybook/testing-library'
import PlatformsComponent from './Platforms'

const meta: Meta<typeof PlatformsComponent> = {
  title: 'Components/Atoms/Platforms',
  component: PlatformsComponent
}

export default meta

type Story = StoryObj<typeof PlatformsComponent>

export const Platforms: Story = {
  args: {
    platforms: [
      'PlayStation 4',
      'PlayStation 5',
      'Xbox Series X',
      'Windows 10',
      'Windows 8',
      'Windows 7',
      'Windows XP'
    ]
  },
  play: ({ canvasElement }) => {
    const canvas = within(canvasElement)

    expect(
      canvas.getByText(
        'PlayStation (4, 5), Windows (7, 8, 10, XP), Xbox Series X'
      )
    )
  }
}
