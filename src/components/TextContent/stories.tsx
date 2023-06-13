import { ComponentStory, ComponentMeta } from '@storybook/react'
import TextContent from '.'
import mock from './mock'

export default {
  title: 'TextContent',
  component: TextContent,
  args: mock
} as ComponentMeta<typeof TextContent>

export const Default: ComponentStory<typeof TextContent> = (args) => (
  <TextContent {...args} />
)
