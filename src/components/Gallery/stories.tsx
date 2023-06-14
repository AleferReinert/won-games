import { ComponentStory, ComponentMeta } from '@storybook/react'
import Gallery from '.'
import mock from './mock'
import theme from 'styles/theme'

export default {
  title: 'Sliders/Gallery',
  component: Gallery,
  args: { items: mock },
  parameters: {
    layout: 'fullscreen'
  }
} as ComponentMeta<typeof Gallery>

export const Default: ComponentStory<typeof Gallery> = (args) => (
  <div
    style={{
      margin: '2.5rem auto',
      maxWidth: theme.grid.container
    }}
  >
    <Gallery {...args} />
  </div>
)
