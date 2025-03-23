import type { Meta, StoryObj } from '@storybook/react'
import { expect, within } from '@storybook/test'
import { remToPx } from 'polished'
import theme from 'styles/theme'
import Heading from './Heading'

const meta: Meta<typeof Heading> = {
  title: 'Components/Atoms/Heading',
  component: Heading,
  argTypes: {
    children: {
      type: 'string'
    },
    $lineColor: { if: { arg: '$line' } },
    $lineBottomSize: { if: { arg: '$line' } }
  },
  parameters: {
    layout: 'padded'
  },
  tags: ['autodocs']
}

export default meta

type Story = StoryObj<typeof Heading>

export const Default: Story = {
  args: {
    children: 'Default heading'
  },
  play: async ({ canvasElement, step }) => {
    const canvas = within(canvasElement)
    const title = canvas.getByRole('heading', { level: 2 })

    await step('Color white and h2 as default', () => {
      expect(title).toHaveStyle({ color: theme.colors.white })
    })
  }
}

export const Black: Story = {
  args: {
    children: 'Black heading',
    color: 'black'
  },
  parameters: {
    backgrounds: {
      default: 'Light'
    }
  },
  play: async ({ canvasElement, step }) => {
    const canvas = within(canvasElement)
    const title = canvas.getByRole('heading')

    step('Color black', () => {
      expect(title).toHaveStyle({ color: theme.colors.black })
    })
  }
}

export const Small: Story = {
  args: {
    children: 'Small heading',
    size: 'small'
  },
  play: async ({ canvasElement, step }) => {
    const canvas = within(canvasElement)
    const title = canvas.getByRole('heading')

    step('Font 14px', () => {
      expect(title).toHaveStyle({ fontSize: remToPx(theme.font.sizes.small) })
    })
  }
}

export const Medium: Story = {
  args: {
    children: 'Medium heading',
    size: 'medium'
  },
  play: async ({ canvasElement, step }) => {
    const canvas = within(canvasElement)
    const title = canvas.getByRole('heading')

    step('Font 16px', () => {
      expect(title).toHaveStyle({ fontSize: remToPx(theme.font.sizes.medium) })
    })
  }
}

export const Large: Story = {
  args: {
    children: 'Large heading',
    size: 'large'
  },
  play: async ({ canvasElement, step }) => {
    const canvas = within(canvasElement)
    const title = canvas.getByRole('heading')

    step('Font 18px', () => {
      expect(title).toHaveStyle({ fontSize: remToPx(theme.font.sizes.large) })
    })
  }
}

export const Huge: Story = {
  args: {
    children: 'Huge heading',
    size: 'huge'
  },
  play: async ({ canvasElement, step }) => {
    const canvas = within(canvasElement)
    const title = canvas.getByRole('heading', { name: /huge heading/i })

    step('Font 52px', () => {
      expect(title).toHaveStyle({ fontSize: remToPx(theme.font.sizes.huge) })
    })
  }
}

export const LineLeft: Story = {
  args: {
    children: 'Line left',
    $line: 'left'
  },
  play: async ({ canvasElement, step }) => {
    const canvas = within(canvasElement)
    const title = canvas.getByRole('heading')

    step('Primary color as default', () => {
      expect(title).toHaveStyle({
        borderLeft: `${remToPx('0.7rem')} solid ${theme.colors.primary}`
      })
    })
  }
}

export const LineBottom: Story = {
  args: {
    children: 'Line bottom',
    $line: 'bottom'
  },
  play: async ({ canvasElement, step }) => {
    const canvas = within(canvasElement)
    const title = canvas.getByRole('heading')

    step('Primary color as default', () => {
      expect(window.getComputedStyle(title, '::after').borderBottom).toBe(
        `${remToPx('0.5rem')} solid ${theme.colors.primary}`
      )
    })
  }
}

export const LineLeftSecondary: Story = {
  args: {
    children: 'Line left secondary',
    $line: 'left',
    $lineColor: 'secondary'
  },
  play: async ({ canvasElement, step }) => {
    const canvas = within(canvasElement)
    const title = canvas.getByRole('heading')

    step('Color secondary', () => {
      expect(title).toHaveStyle({
        borderLeft: `${remToPx('0.7rem')} solid ${theme.colors.secondary}`
      })
    })
  }
}

export const LineBottomSecondary: Story = {
  args: {
    children: 'Line bottom secondary',
    $line: 'bottom',
    $lineColor: 'secondary'
  },
  play: async ({ canvasElement, step }) => {
    const canvas = within(canvasElement)
    const title = canvas.getByRole('heading')

    step('Color secondary', () => {
      expect(window.getComputedStyle(title, '::after').borderBottom).toBe(
        `${remToPx('0.5rem')} solid ${theme.colors.secondary}`
      )
    })
  }
}

export const LineBottomSmall: Story = {
  args: {
    children: 'Line bottom small',
    $line: 'bottom',
    $lineBottomSize: 'small'
  },
  play: async ({ canvasElement, step }) => {
    const canvas = within(canvasElement)
    const title = canvas.getByRole('heading')
    const titleAfter = window.getComputedStyle(title, '::after')

    step('Styles', () => {
      expect(titleAfter.width).toBe(remToPx('2.5rem'))
      expect(titleAfter.borderBottomWidth).toBe(remToPx('0.3rem'))
      expect(titleAfter.bottom).toBe(remToPx('-0.4rem'))
    })
  }
}

export const LineBottomMedium: Story = {
  args: {
    children: 'Line bottom medium',
    $line: 'bottom',
    $lineBottomSize: 'medium'
  },
  play: async ({ canvasElement, step }) => {
    const canvas = within(canvasElement)
    const title = canvas.getByRole('heading')
    const titleAfter = window.getComputedStyle(title, '::after')

    step('Styles', () => {
      expect(titleAfter.width).toBe(remToPx('4rem'))
      expect(titleAfter.borderBottomWidth).toBe(remToPx('0.4rem'))
      expect(titleAfter.bottom).toBe(remToPx('-0.4rem'))
    })
  }
}

export const LineBottomLarge: Story = {
  args: {
    children: 'Line bottom large',
    $line: 'bottom'
  },
  play: async ({ canvasElement, step }) => {
    const canvas = within(canvasElement)
    const title = canvas.getByRole('heading')
    const titleAfter = window.getComputedStyle(title, '::after')

    step('Styles', () => {
      expect(titleAfter.width).toBe(remToPx('5rem'))
      expect(titleAfter.borderBottomWidth).toBe(remToPx('0.5rem'))
      expect(titleAfter.bottom).toBe(remToPx('-0.8rem'))
    })
  }
}

export const AsH1: Story = {
  name: 'As <h1 />',
  args: {
    children: 'Line bottom large',
    $line: 'bottom',
    as: 'h1'
  },
  play: async ({ canvasElement, step }) => {
    const canvas = within(canvasElement)
    const heading = canvas.getByRole('heading', { level: 1 })

    step('As <h1>', () => {
      expect(heading).toBeInTheDocument()
    })
  }
}
