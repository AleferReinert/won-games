import type { Meta, StoryObj } from '@storybook/react'
import { expect, within } from '@storybook/test'
import SkeletonComponent from './Skeleton'

const meta: Meta<typeof SkeletonComponent> = {
  title: 'Components/Atoms/Skeleton',
  component: SkeletonComponent,
  args: {
    width: '100px',
    height: '100px'
  },
  parameters: {
    layout: 'centered'
  }
}

export default meta

type Story = StoryObj<typeof SkeletonComponent>

export const Skeleton: Story = {
  play: async ({ canvasElement, step }) => {
    const canvas = within(canvasElement)
    const skeletonComponent = canvas.getByTestId('SkeletonComponent')

    await step('Sizes', () => {
      expect(skeletonComponent).toHaveStyle({ width: '100px' })
      expect(skeletonComponent).toHaveStyle({ height: '100px' })
    })
  }
}
