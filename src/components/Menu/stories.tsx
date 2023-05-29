import { ComponentStory, ComponentMeta } from '@storybook/react'
import Menu from '.'

export default {
  title: 'Menu',
  component: Menu
} as ComponentMeta<typeof Menu>

export const Default: ComponentStory<typeof Menu> = (args) => <Menu {...args} />

Default.parameters = {
  layout: 'fullscreen',
  backgrounds: {
    default: 'dark'
  }
}
