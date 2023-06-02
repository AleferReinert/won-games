import { ComponentStory, ComponentMeta } from '@storybook/react'
import Highlight from '.'

export default {
  title: 'Highlight',
  component: Highlight,
  args: {
    title: `Read Dead It's Back`,
    description: `Come seen John's new adventures`,
    buttonLabel: 'Buy now',
    buttonLink: '/link',
    backgroundImage: '/img/red-dead-img.jpg',
    floatImage: '/img/red-dead-float.png'
  }
} as ComponentMeta<typeof Highlight>

export const Default: ComponentStory<typeof Highlight> = (args) => (
  <Highlight {...args} />
)
