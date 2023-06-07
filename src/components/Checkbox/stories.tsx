import { ComponentStory, ComponentMeta } from '@storybook/react'
import Checkbox from '.'

export default {
  title: 'Checkbox',
  component: Checkbox,
  argTypes: {
    onCheck: { action: 'checked' }
  }
} as ComponentMeta<typeof Checkbox>

export const Default: ComponentStory<typeof Checkbox> = (args) => (
  <Checkbox {...args} isChecked label='Action' labelFor='action' />
)
