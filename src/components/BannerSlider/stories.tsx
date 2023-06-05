import { ComponentStory, ComponentMeta } from '@storybook/react'
import BannerSlider from '.'
import items from './mock'

export default {
  title: 'BannerSlider',
  component: BannerSlider,
  args: { items },
  parameters: {
    layout: 'fullscreen'
  }
} as ComponentMeta<typeof BannerSlider>

export const Default: ComponentStory<typeof BannerSlider> = (args) => (
  <div style={{ maxWidth: '120rem', margin: '0 auto', padding: '0 2rem 2rem' }}>
    <BannerSlider {...args} />
  </div>
)
