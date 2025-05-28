import type { Meta, StoryObj } from '@storybook/react'
import { expect, within } from '@storybook/test'
import { getTailwindValue } from 'utils/getTailwindValue'
import { hexToRgb } from 'utils/hexToRgb'
import { Heading } from './Heading'

const meta: Meta<typeof Heading> = {
  title: 'Components/Atoms/Heading',
  component: Heading,
  argTypes: {
    children: {
      type: 'string'
    },
    lineColor: { if: { arg: 'line' } },
    lineBottomSize: { if: { arg: 'line' } }
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
      expect(title).toHaveStyle({ color: getTailwindValue('--color-zinc-50') })
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
  play: ({ canvasElement, step }) => {
    const canvas = within(canvasElement)
    const title = canvas.getByRole('heading')

    step('Color black', () => {
      expect(title).toHaveStyle({ color: getTailwindValue('--color-theme-gray-950') })
    })
  }
}

export const Small: Story = {
  args: {
    children: 'Small heading',
    size: 'small'
  },
  play: ({ canvasElement, step }) => {
    const canvas = within(canvasElement)
    const title = canvas.getByRole('heading')

    step('Font 14px', () => {
      expect(title).toHaveStyle('fontSize: 14px')
    })
  }
}

export const Medium: Story = {
  args: {
    children: 'Medium heading',
    size: 'medium'
  },
  play: ({ canvasElement, step }) => {
    const canvas = within(canvasElement)
    const title = canvas.getByRole('heading')

    step('Font 16px', () => {
      expect(title).toHaveStyle('fontSize: 16px')
    })
  }
}

export const Large: Story = {
  args: {
    children: 'Large heading',
    size: 'large'
  },
  play: ({ canvasElement, step }) => {
    const canvas = within(canvasElement)
    const title = canvas.getByRole('heading')

    step('Font 18px', () => {
      expect(title).toHaveStyle('fontSize: 18px')
    })
  }
}

export const Huge: Story = {
  args: {
    children: 'Huge heading',
    size: 'huge'
  },
  play: ({ canvasElement, step }) => {
    const canvas = within(canvasElement)
    const title = canvas.getByRole('heading', { name: /huge heading/i })

    step('Font 52px', () => {
      expect(title).toHaveStyle('fontSize: 52px')
    })
  }
}

export const LineLeft: Story = {
  args: {
    children: 'Line left',
    line: 'left'
  },
  play: async ({ canvasElement, step }) => {
    const canvas = within(canvasElement)
    const title = canvas.getByRole('heading')

    await step('Primary color as default', () => {
      expect(title).toHaveStyle(`border-left-color: ${getTailwindValue('--color-theme-primary')}`)
    })

    step('Border 7px as default', () => {
      expect(title).toHaveStyle(`border-left-width: 7px`)
    })
  }
}

export const LineBottom: Story = {
  args: {
    children: 'Line bottom',
    line: 'bottom'
  },
  play: async ({ canvasElement, step }) => {
    const canvas = within(canvasElement)
    const title = canvas.getByRole('heading')
    const lineBottomStyles = window.getComputedStyle(title, '::after')

    await step('Primary color', () => {
      expect(lineBottomStyles.backgroundColor).toBe(hexToRgb(getTailwindValue('--color-theme-primary')))
    })

    step('Height 5px', () => {
      expect(lineBottomStyles.height).toBe('5px')
    })
  }
}

export const LineLeftSecondary: Story = {
  args: {
    children: 'Line left secondary',
    line: 'left',
    lineColor: 'secondary'
  },
  play: ({ canvasElement, step }) => {
    const canvas = within(canvasElement)
    const title = canvas.getByRole('heading')

    step('Color secondary', () => {
      expect(title).toHaveStyle(`border-left-color: ${getTailwindValue('--color-theme-secondary')}`)
    })
  }
}

export const LineBottomSecondary: Story = {
  args: {
    children: 'Line bottom secondary',
    line: 'bottom',
    lineColor: 'secondary'
  },
  play: ({ canvasElement, step }) => {
    const canvas = within(canvasElement)
    const title = canvas.getByRole('heading')
    const lineBottomStyles = window.getComputedStyle(title, '::after')

    step('Primary color', () => {
      expect(lineBottomStyles.backgroundColor).toBe(hexToRgb(getTailwindValue('--color-theme-secondary')))
    })
  }
}

export const LineBottomSmall: Story = {
  args: {
    children: 'Line bottom small',
    line: 'bottom',
    lineBottomSize: 'small'
  },
  play: ({ canvasElement, step }) => {
    const canvas = within(canvasElement)
    const title = canvas.getByRole('heading')
    const lineBottomStyles = window.getComputedStyle(title, '::after')

    step('Styles', () => {
      expect(lineBottomStyles.width).toBe('25px')
      expect(lineBottomStyles.height).toBe('3px')
      expect(lineBottomStyles.bottom).toBe('-4px')
    })
  }
}

export const LineBottomMedium: Story = {
  args: {
    children: 'Line bottom medium',
    line: 'bottom',
    lineBottomSize: 'medium'
  },
  play: ({ canvasElement, step }) => {
    const canvas = within(canvasElement)
    const title = canvas.getByRole('heading')
    const lineBottomStyles = window.getComputedStyle(title, '::after')

    step('Styles', () => {
      expect(lineBottomStyles.width).toBe('40px')
      expect(lineBottomStyles.height).toBe('4px')
      expect(lineBottomStyles.bottom).toBe('-4px')
    })
  }
}

export const LineBottomLarge: Story = {
  args: {
    children: 'Line bottom large',
    line: 'bottom'
  },
  play: ({ canvasElement, step }) => {
    const canvas = within(canvasElement)
    const title = canvas.getByRole('heading')
    const lineBottomStyles = window.getComputedStyle(title, '::after')

    step('Styles', () => {
      expect(lineBottomStyles.width).toBe('50px')
      expect(lineBottomStyles.height).toBe('5px')
      expect(lineBottomStyles.bottom).toBe('-8px')
    })
  }
}

export const Level1: Story = {
  name: 'Level 1 (<h1>)',
  args: {
    children: 'Line bottom large',
    line: 'bottom',
    level: 'h1'
  },
  play: ({ canvasElement, step }) => {
    const canvas = within(canvasElement)
    const heading = canvas.getByRole('heading', { level: 1 })

    step('As <h1>', () => {
      expect(heading).toBeInTheDocument()
    })
  }
}
