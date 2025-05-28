import type { Meta, StoryObj } from '@storybook/react'
import { expect, within } from '@storybook/test'
import { bannersMock } from '../../mocks/banners.mock'
import { BannerSlider } from './BannerSlider'

const meta: Meta<typeof BannerSlider> = {
  title: 'Components/BannerSlider',
  component: BannerSlider,
  args: { items: bannersMock },
  tags: ['autodocs']
}

export default meta

type Story = StoryObj<typeof BannerSlider>

export const Default: Story = {
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
