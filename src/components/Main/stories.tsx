import { ComponentStory, ComponentMeta } from '@storybook/react'
import Main from '.'

export default {
  title: 'Main',
  component: Main,
  args: {
    title: 'Título para todos stories',
    description: 'Descrição para todos stories'
  }
} as ComponentMeta<typeof Main>

// Story Basic
export const Basic: ComponentStory<typeof Main> = (args) => <Main {...args} />
Basic.args = {
  title: 'Basic'
}

// Story Default
export const Default: ComponentStory<typeof Main> = (args) => <Main {...args} />
