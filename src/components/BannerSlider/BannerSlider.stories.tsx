import type { Meta, StoryObj } from '@storybook/react'
import { expect, within } from '@storybook/test'
import { bannersMock } from '../../mocks/banners.mock'
import BannerSliderComponent from './BannerSlider'

const meta: Meta<typeof BannerSliderComponent> = {
  title: 'Components/BannerSlider',
  component: BannerSliderComponent,
  args: { items: bannersMock },
  tags: ['autodocs']
}

export default meta

type Story = StoryObj<typeof BannerSliderComponent>

export const BannerSlider: Story = {
  play: async ({ canvasElement, step }) => {
    const canvas = within(canvasElement)

    await step('Multiple banners', () => {
      const banners = canvas.getAllByRole('img', { hidden: true })
      expect(banners.length).toBeGreaterThan(1)
    })

    step('Only one active item', () => {
      const banners = canvas.getAllByRole('img', { hidden: false })
      expect(banners).toHaveLength(1)
    })
  }
}
