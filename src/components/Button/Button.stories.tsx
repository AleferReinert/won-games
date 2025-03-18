import type { Meta, StoryObj } from '@storybook/react'
import { expect, within } from '@storybook/test'
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
    $variant: {
      control: 'inline-radio'
    }
  },
  parameters: {
    layout: 'centered'
  },
  tags: ['autodocs']
}

export default meta

type Story = StoryObj<typeof ButtonComponent>

export const Default: Story = {
  args: {
    children: 'default button'
  },
  play: async ({ canvasElement, step }) => {
    const canvas = within(canvasElement)
    const button = canvas.getByRole('button')

    await step('Size medium as default', () => {
      expect(button).toHaveStyle({ fontSize: remToPx(theme.font.sizes.small) })
      expect(button).toHaveStyle({ height: remToPx('4rem') })
    })

    await step('Variant primary as default', () => {
      expect(button).toHaveStyle({ color: theme.colors.white })
    })
  }
}

export const WithIcon: Story = {
  args: {
    children: <>{<AddShoppingCart role='img' />} button with icon</>
  },
  play: async ({ canvasElement, step }) => {
    const canvas = within(canvasElement)

    step('Icon', () => {
      const icon = canvas.getByRole('img', { hidden: true })
      expect(icon).toBeVisible()
    })
  }
}

export const Link: Story = {
  args: {
    children: 'button with variant link',
    $variant: 'link'
  },
  play: ({ canvasElement, step }) => {
    const canvas = within(canvasElement)

    step('Links styles', () => {
      const button = canvas.getByRole('button')
      expect(button).toHaveStyle({
        color: theme.colors.primary,
        backgroundColor: 'rgba(0, 0, 0, 0)'
      })
    })
  }
}

export const Full: Story = {
  args: {
    children: 'full button',
    $full: true
  },
  play: ({ canvasElement, step }) => {
    const canvas = within(canvasElement)

    step('Full width', () => {
      const button = canvas.getByRole('button')
      expect(button).toHaveStyle({ minWidth: '100%' })
    })
  }
}

export const Xsmall: Story = {
  args: {
    children: 'xsmall button',
    size: 'xsmall'
  },
  play: ({ canvasElement, step }) => {
    const canvas = within(canvasElement)

    step('Xsmall styles', () => {
      const button = canvas.getByRole('button')
      expect(button).toHaveStyle({ height: remToPx('2.2rem') })
    })
  }
}

export const Small: Story = {
  args: {
    children: 'small button',
    size: 'small'
  },
  play: ({ canvasElement, step }) => {
    const canvas = within(canvasElement)

    step('Small styles', () => {
      const button = canvas.getByRole('button')
      expect(button).toHaveStyle({
        height: remToPx('3rem'),
        fontSize: remToPx(theme.font.sizes.xsmall)
      })
    })
  }
}

export const Large: Story = {
  args: {
    children: 'large button',
    size: 'large'
  },
  play: ({ canvasElement, step }) => {
    const canvas = within(canvasElement)

    step('Large styles', () => {
      const button = canvas.getByRole('button')
      expect(button).toHaveStyle({
        fontSize: remToPx(theme.font.sizes.medium),
        height: remToPx('5rem')
      })
    })
  }
}

export const Disabled: Story = {
  args: {
    children: 'disabled button',
    disabled: true
  },
  play: ({ canvasElement, step }) => {
    const canvas = within(canvasElement)

    step('Disabled styles', () => {
      const button = canvas.getByRole('button')
      expect(button).toHaveStyle({
        backgroundColor: hexToRGBA(theme.colors.gray),
        cursor: 'not-allowed'
      })
    })
  }
}

export const AsLinkTag: Story = {
  args: {
    children: 'button as link',
    asLink: true,
    href: '/'
  },
  play: ({ canvasElement, step }) => {
    const canvas = within(canvasElement)

    step('Render as <a>', () => {
      const link = canvas.getByRole('link')
      expect(link).toHaveAttribute('href')
    })
  }
}
