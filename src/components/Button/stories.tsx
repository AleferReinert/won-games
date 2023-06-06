import { ComponentStory, ComponentMeta } from '@storybook/react'
import Button from '.'
import { AddShoppingCart } from '@styled-icons/material-outlined/AddShoppingCart'

export default {
  title: 'Button',
  component: Button,
  parameters: {
    backgrounds: {
      default: 'Won Light'
    }
  },
  argTypes: {
    children: {
      type: 'string'
    },
    icon: {
      type: 'symbol'
    }
  }
} as ComponentMeta<typeof Button>

export const Default: ComponentStory<typeof Button> = (args) => (
  <Button {...args} />
)

Default.args = {
  children: 'Buy now'
}

export const WithIcon: ComponentStory<typeof Button> = (args) => (
  <Button {...args} />
)

WithIcon.args = {
  size: 'small',
  children: 'Buy now',
  icon: <AddShoppingCart />
}

export const AsLink: ComponentStory<typeof Button> = (args) => (
  <Button {...args} />
)

AsLink.args = {
  size: 'large',
  children: 'Buy now',
  as: 'a',
  href: '/link'
}

export const Minimal: ComponentStory<typeof Button> = (args) => (
  <Button {...args} />
)

Minimal.args = {
  minimal: true,
  children: 'Buy now',
  icon: <AddShoppingCart />
}
