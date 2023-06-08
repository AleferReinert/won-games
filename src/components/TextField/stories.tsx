import { ComponentStory, ComponentMeta } from '@storybook/react'
import TextField from '.'
import { Email } from '@styled-icons/material-outlined'

export default {
  title: 'Forms/TextField',
  component: TextField,
  args: {
    label: 'E-mail',
    labelFor: 'email',
    id: 'email',
    initialValue: '',
    placeholder: 'example@gmail.com',
    icon: <Email />
  },
  argTypes: {
    onInput: { action: 'changed' }
  },
  parameters: {
    backgrounds: {
      default: 'Light'
    }
  }
} as ComponentMeta<typeof TextField>

export const Default: ComponentStory<typeof TextField> = (args) => (
  <TextField {...args} />
)

export const WithError: ComponentStory<typeof TextField> = (args) => (
  <TextField {...args} />
)

WithError.args = {
  error: 'Ops...something is wrong'
}
