import type { Meta, StoryObj } from '@storybook/react'
import { expect, within } from '@storybook/test'
import { Skeleton } from './Skeleton'

const meta: Meta<typeof Skeleton> = {
  title: 'Components/Atoms/Skeleton',
  component: Skeleton,
  parameters: {
    layout: 'centered'
  }
}

export default meta

type Story = StoryObj<typeof Skeleton>

export const Default: Story = {
  play: async ({ canvasElement, step }) => {
    const canvas = within(canvasElement)
    const skeletonComponent = canvas.getByTestId('SkeletonComponent')

    await step('Min width and height', () => {
      expect(skeletonComponent).toHaveStyle('min-width: 24px')
      expect(skeletonComponent).toHaveStyle('min-height: 24px')
    })
  }
}

export const Custom: Story = {
  args: {
    className: 'rounded size-52'
  },
  play: async ({ canvasElement, step }) => {
    const canvas = within(canvasElement)
    const skeletonComponent = canvas.getByTestId('SkeletonComponent')

    await step('Custom styles', () => {
      expect(skeletonComponent).toHaveStyle('border-radius: 4px')
      expect(skeletonComponent).toHaveStyle('width: 208px')
      expect(skeletonComponent).toHaveStyle('height: 208px')
    })
  }
}
