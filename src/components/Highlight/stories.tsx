import { ComponentStory, ComponentMeta } from '@storybook/react'
import Highlight from '.'
import item from './mock'

export default {
  title: 'Highlight',
  component: Highlight,
  args: { ...item }
} as ComponentMeta<typeof Highlight>

export const Default: ComponentStory<typeof Highlight> = (args) => (
  <Highlight {...args} />
)
