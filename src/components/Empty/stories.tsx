import { ComponentStory, ComponentMeta } from '@storybook/react'
import Empty from '.'

export default {
  title: 'Empty',
  component: Empty,
  args: {
    title: 'No results found',
    description: `Sorry, we couldn't find any results for your search.`,
    link: '/',
    label: 'Go back to store'
  }
} as ComponentMeta<typeof Empty>

export const Default: ComponentStory<typeof Empty> = (args) => (
  <Empty {...args} />
)
