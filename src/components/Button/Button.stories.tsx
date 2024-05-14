import { expect } from '@storybook/jest'
import type { Meta, StoryObj } from '@storybook/react'
import { within } from '@storybook/testing-library'
import { AddShoppingCart } from '@styled-icons/material-outlined'
import { remToPx } from 'polished'
import theme from 'styles/theme'
import { hexToRGBA } from 'utils/tests/helpers'
import ButtonComponent from './Button'

const meta: Meta<typeof ButtonComponent> = {
  title: 'Components/Atoms/Button',
  component: ButtonComponent,
  argTypes: {
    size: {
      control: 'inline-radio'
    },
    variant: {
      control: 'inline-radio'
    }
  },
  parameters: {
    backgrounds: {
      default: 'Light'
    }
  }
}

export default meta

type Story = StoryObj<typeof ButtonComponent>

export const Default: Story = {
  args: {
    children: 'default button'
  },
  play: ({ canvasElement }) => {
    const canvas = within(canvasElement)
    const button = canvas.getByRole('button')

    // size medium as default
    expect(button).toHaveStyle({ height: remToPx('4rem') })
    expect(button).toHaveStyle({ fontSize: remToPx(theme.font.sizes.small) })

    // variant primary as default
    expect(button).toHaveStyle({ color: theme.colors.white })
  }
}

export const WithIcon: Story = {
  play: ({ canvasElement }) => {
    const icon = canvasElement.getElementsByTagName('svg')

    expect(icon.length).toBe(1)
  },
  render: ({ ...args }) => (
    <ButtonComponent {...args}>
      <AddShoppingCart />
      button with icon
    </ButtonComponent>
  )
}

export const Link: Story = {
  args: {
    children: 'button with variant link',
    variant: 'link'
  },
  play: ({ canvasElement }) => {
    const canvas = within(canvasElement)
    const button = canvas.getByRole('button')

    expect(button).toHaveStyle({
      color: theme.colors.primary,
      backgroundColor: 'rgba(0, 0, 0, 0)'
    })
  }
}

export const Full: Story = {
  args: {
    children: 'full button',
    full: true
  },
  play: ({ canvasElement }) => {
    const canvas = within(canvasElement)
    const button = canvas.getByRole('button')

    expect(button).toHaveStyle({ minWidth: '100%' })
  }
}

export const Xsmall: Story = {
  args: {
    children: 'xsmall button',
    size: 'xsmall'
  },
  play: ({ canvasElement }) => {
    const canvas = within(canvasElement)
    const button = canvas.getByRole('button')

    expect(button).toHaveStyle({ height: remToPx('2.2rem') })
  }
}

export const Small: Story = {
  args: {
    children: 'small button',
    size: 'small'
  },
  play: ({ canvasElement }) => {
    const canvas = within(canvasElement)
    const button = canvas.getByRole('button')

    expect(button).toHaveStyle({
      height: remToPx('3rem'),
      fontSize: remToPx(theme.font.sizes.xsmall)
    })
  }
}

export const Large: Story = {
  args: {
    children: 'large button',
    size: 'large'
  },
  play: ({ canvasElement }) => {
    const canvas = within(canvasElement)
    const button = canvas.getByRole('button')

    expect(button).toHaveStyle({
      height: remToPx('5rem'),
      fontSize: remToPx(theme.font.sizes.medium)
    })
  }
}

export const Disabled: Story = {
  args: {
    children: 'disabled button',
    disabled: true
  },
  play: ({ canvasElement }) => {
    const canvas = within(canvasElement)
    const button = canvas.getByRole('button')

    expect(button).toHaveStyle({
      backgroundColor: hexToRGBA(theme.colors.gray),
      cursor: 'default'
    })
  }
}

export const AsLinkTag: Story = {
  args: {
    children: 'button as link',
    asLink: true,
    href: '/'
  },
  play: ({ canvasElement }) => {
    const canvas = within(canvasElement)
    const link = canvas.getByRole('link')

    expect(link).toHaveAttribute('href')
  }
}
