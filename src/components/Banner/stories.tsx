import { ComponentStory, ComponentMeta } from '@storybook/react'
import Banner from '.'

export default {
  title: 'Banners/Banner',
  component: Banner,
  argTypes: {
    ribbon: {
      type: 'string'
    }
  },
  args: {
    img: 'https://source.unsplash.com/user/willianjusten/1042x580',
    title: 'Defy death',
    subtitle: 'Play the new <strong>CrashLands</strong> season',
    buttonLabel: 'Buy now',
    buttonLink: '/games/defy-death'
  },
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
