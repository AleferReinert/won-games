import { expect } from '@storybook/jest'
import type { Meta, StoryObj } from '@storybook/react'
import { within } from '@storybook/testing-library'
import { bannersMock } from '../../mocks/banners.mock'
import BannerSliderComponent from './BannerSlider'

const meta: Meta<typeof BannerSliderComponent> = {
  title: 'Components/BannerSlider',
  component: BannerSliderComponent,
  args: { items: bannersMock },
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
