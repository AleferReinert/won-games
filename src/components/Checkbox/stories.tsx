import { ComponentStory, ComponentMeta } from '@storybook/react'
import Checkbox from '.'

export default {
  title: 'Forms/Checkbox',
  component: Checkbox,
  argTypes: {
    onCheck: { action: 'checked' }
  },
  args: {
    label: 'Action',
    labelFor: 'action'
  }
} as ComponentMeta<typeof Checkbox>

export const Default: ComponentStory<typeof Checkbox> = (args) => (
  <Checkbox {...args} />
)
