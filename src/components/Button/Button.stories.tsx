import type { StoryObj, Meta } from '@storybook/react'
import { within } from '@storybook/testing-library'
import { expect } from '@storybook/jest'
import {
  AddShoppingCart,
  Download,
  ArrowBack
} from '@styled-icons/material-outlined'
import React from 'react'
import ButtonComponent from './Button'
import { remToPx } from 'polished'
import theme from '../../styles/theme'

const meta: Meta<typeof ButtonComponent> = {
  title: 'Components/Button',
  component: ButtonComponent,
  argTypes: {
    size: {
      control: 'inline-radio'
    },
    icon: {
      options: ['None', 'AddShoppingCart', 'Download', 'ArrowBack'],
      mapping: {
        None: '',
        AddShoppingCart: <AddShoppingCart data-testid='icon' />,
        Download: <Download data-testid='icon' />,
        ArrowBack: <ArrowBack data-testid='icon' />
      }
    },
    as: {
      control: 'inline-radio',
      options: ['button', 'a']
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

export const Playground: Story = {
  args: {
    children: 'custom button',
    size: 'medium',
    variant: 'primary',
    full: false,
    icon: 'None',
    as: 'button'
  }
}

export const Default: Story = {
  args: {
    children: 'default button'
  },
  play: ({ canvasElement }) => {
    const canvas = within(canvasElement)
    const button = canvas.getByRole('button', { name: /default button/i })

    // size medium as default
    expect(button).toHaveStyle({ height: remToPx('4rem') })
    expect(button).toHaveStyle({ fontSize: remToPx(theme.font.sizes.small) })

    // variant primary as default
    expect(button).toHaveStyle({ color: theme.colors.white })
  }
}

export const WithIcon: Story = {
  args: {
    children: 'button with icon',
    icon: 'AddShoppingCart'
  },
  play: ({ canvasElement }) => {
    const canvas = within(canvasElement)
    const icon = canvas.getByTestId('icon')

    expect(icon).toBeInTheDocument()
  }
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
    const button = canvas.getByRole('button', { name: /full button/i })

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
    const button = canvas.getByRole('button', { name: /xsmall button/i })

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
    const button = canvas.getByRole('button', { name: /small button/i })

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
    const button = canvas.getByRole('button', { name: /large button/i })

    expect(button).toHaveStyle({
      height: remToPx('5rem'),
      fontSize: remToPx(theme.font.sizes.medium)
    })
  }
}

export const AsLinkTag: Story = {
  args: {
    children: 'button as link',
    as: 'a',
    href: '/'
  },
  play: ({ canvasElement }) => {
    const canvas = within(canvasElement)
    const link = canvas.getByRole('link', { name: /button as link/i })

    expect(link).toHaveAttribute('href')
  }
}
