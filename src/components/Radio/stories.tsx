import { ComponentStory, ComponentMeta } from '@storybook/react'
import Radio from '.'

export default {
  title: 'Forms/Radio',
  component: Radio,
  argTypes: {
    onCheck: { action: 'checked' }
  }
} as ComponentMeta<typeof Radio>

export const Default: ComponentStory<typeof Radio> = (args) => (
  <>
    <Radio
      {...args}
      name='category'
      value='action'
      id='action'
      labelFor='action'
      label='Action'
      defaultChecked
    />
    <Radio
      {...args}
      name='category'
      value='adventure'
      id='adventure'
      labelFor='adventure'
      label='Adventure'
    />
    <Radio
      {...args}
      name='category'
      value='rpg'
      id='rpg'
      labelFor='rpg'
      label='RPG'
    />
  </>
)
