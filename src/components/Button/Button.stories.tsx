import type { Meta, StoryObj } from '@storybook/react'
import { expect, within } from '@storybook/test'
import { MdOutlineShoppingCart } from 'react-icons/md'
import { getTailwindValue } from 'utils/getTailwindValue'
import { Button } from './Button'

const meta: Meta<typeof Button> = {
  title: 'Components/Atoms/Button',
  component: Button,
  argTypes: {
    size: {
      control: 'inline-radio'
    },
    variant: {
      control: 'inline-radio'
    }
  },
  parameters: {
    layout: 'padded'
  },
  tags: ['autodocs']
}

export default meta

type Story = StoryObj<typeof Button>

export const Default: Story = {
  args: {
    children: 'default button'
  },
  play: async ({ canvasElement, step }) => {
    const canvas = within(canvasElement)
    const button = canvas.getByRole('button')

    await step('Size medium as default', () => {
      expect(button).toHaveStyle('fontSize: 14px')
      expect(button).toHaveStyle('height:  40px')
    })

    await step('Variant primary as default', () => {
      expect(button).toHaveClass('text-zinc-50')
    })
  }
}

export const WithIcon: Story = {
  args: {
    children: <>{<MdOutlineShoppingCart role='img' />} button with icon</>
  },
  play: ({ canvasElement, step }) => {
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
    variant: 'link'
  },
  play: ({ canvasElement, step }) => {
    const canvas = within(canvasElement)

    step('Links styles', () => {
      const button = canvas.getByRole('button')
      expect(button).toHaveClass('text-theme-primary bg-transparent')
    })
  }
}

export const LinkDisabled: Story = {
  args: {
    children: 'button with variant link disabled',
    variant: 'link',
    disabled: true
  },
  play: ({ canvasElement, step }) => {
    const canvas = within(canvasElement)

    step('Link disabled styles', () => {
      const link = canvas.getByRole('button')
      expect(link).toHaveStyle({ cursor: 'not-allowed' })
      expect(link).toHaveStyle({ backgroundColor: 'transparent !important' })
      expect(link).toHaveStyle({ color: getTailwindValue('--color-theme-gray-500') })
    })
  }
}

export const Full: Story = {
  args: {
    children: 'full button',
    full: true
  },
  play: ({ canvasElement, step }) => {
    const canvas = within(canvasElement)

    step('Full width', () => {
      const button = canvas.getByRole('button')
      expect(button).toHaveClass('w-full')
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
      expect(button).toHaveStyle('height: 22px')
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
      expect(button).toHaveStyle({ height: '30px', fontSize: '12px' })
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
      expect(button).toHaveStyle({ fontSize: '16px', height: '50px' })
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
      expect(button).toBeDisabled()
      expect(button).toHaveStyle('cursor: not-allowed')
      expect(button).toHaveStyle({ backgroundColor: getTailwindValue('--color-theme-500') })
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
