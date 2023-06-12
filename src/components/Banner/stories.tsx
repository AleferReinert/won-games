import { ComponentStory, ComponentMeta } from '@storybook/react'
import Banner from '.'
import mockBanner from './mock'

export default {
  title: 'Banners/Banner',
  component: Banner,
  argTypes: {
    ribbon: {
      type: 'string'
    }
  },
  args: mockBanner,
  parameters: {
    layout: 'fullscreen'
  }
} as ComponentMeta<typeof Banner>

export const Default: ComponentStory<typeof Banner> = (args) => (
  <div style={{ maxWidth: '80rem', margin: '0 auto' }}>
    <Banner {...args} />
  </div>
)

export const WithRibbon: ComponentStory<typeof Banner> = (args) => (
  <div style={{ maxWidth: '80rem', margin: '0 auto' }}>
    <Banner {...args} />
  </div>
)

WithRibbon.args = {
  ribbon: '20% off',
  ribbonSize: 'small',
  ribbonColor: 'secondary'
}
