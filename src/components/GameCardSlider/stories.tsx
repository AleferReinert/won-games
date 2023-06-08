import { ComponentStory, ComponentMeta } from '@storybook/react'
import GameCardSlider from '.'
import items from './mock'

export default {
  title: 'Sliders/GameCardSlider',
  component: GameCardSlider,
  args: { items },
  parameters: {
    layout: 'fullscreen',
    viewport: {
      defaultViewport: 'desktop'
    }
  }
} as ComponentMeta<typeof GameCardSlider>

export const Default: ComponentStory<typeof GameCardSlider> = (args) => (
  <div style={{ maxWidth: '130rem', margin: '0 auto' }}>
    <GameCardSlider {...args} />
  </div>
)
