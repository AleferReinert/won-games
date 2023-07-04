import type { StoryObj, Meta } from '@storybook/react'
import { within } from '@storybook/testing-library'
import { expect } from '@storybook/jest'
import BannerSliderComponent from './BannerSlider'
import items from './mock'

const meta: Meta<typeof BannerSliderComponent> = {
  title: 'Components/BannerSlider',
  component: BannerSliderComponent,
  args: { items },
  argTypes: {
    items: {
      table: { disable: true }
    }
  }
}

export default meta

type Story = StoryObj<typeof BannerSliderComponent>

export const BannerSlider: Story = {
  play: ({ args, canvasElement }) => {
    const canvas = within(canvasElement)
    const items = canvas.getAllByRole('heading')

    // should render items
    expect(args.items).not.toHaveLength(0)

    // only one active item
    expect(items).toHaveLength(1)
  }
}
