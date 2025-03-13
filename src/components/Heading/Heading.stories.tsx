import { expect } from '@storybook/jest'
import type { Meta, StoryObj } from '@storybook/react'
import { within } from '@storybook/testing-library'
import { remToPx } from 'polished'
import theme from 'styles/theme'
import { hexToRGBA, jsMediaQuery } from 'utils/tests/helpers'
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
  }
}

export default meta

type Story = StoryObj<typeof Heading>

export const Default: Story = {
  args: {
    children: 'Default heading'
  },
  play: ({ canvasElement }) => {
    const title = canvasElement.getElementsByTagName('h2')[0]

    // color white and size xlarge as default
    expect(title).toHaveStyle({ color: theme.colors.white })
    jsMediaQuery.lessThan(theme.breakpoint.small, () => {
      expect(title).toHaveStyle({ fontSize: remToPx(theme.font.sizes.xlarge) })
    })
    jsMediaQuery.greaterThan(theme.breakpoint.small, () => {
      expect(title).toHaveStyle({ fontSize: remToPx(theme.font.sizes.xxlarge) })
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
  play: ({ canvasElement }) => {
    const canvas = within(canvasElement)
    const title = canvas.getByRole('heading')

    expect(title).toHaveStyle({ color: theme.colors.black })
  }
}

export const Small: Story = {
  args: {
    children: 'Small heading',
    size: 'small'
  },
  play: ({ canvasElement }) => {
    const canvas = within(canvasElement)
    const title = canvas.getByRole('heading')

    expect(title).toHaveStyle({ fontSize: remToPx(theme.font.sizes.small) })
  }
}

export const Medium: Story = {
  args: {
    children: 'Medium heading',
    size: 'medium'
  },
  play: ({ canvasElement }) => {
    const canvas = within(canvasElement)
    const title = canvas.getByRole('heading')

    expect(title).toHaveStyle({ fontSize: remToPx(theme.font.sizes.medium) })
  }
}

export const Large: Story = {
  args: {
    children: 'Large heading',
    size: 'large'
  },
  play: ({ canvasElement }) => {
    const canvas = within(canvasElement)
    const title = canvas.getByRole('heading')

    expect(title).toHaveStyle({ fontSize: remToPx(theme.font.sizes.large) })
  }
}

export const Huge: Story = {
  args: {
    children: 'Huge heading',
    size: 'huge'
  },
  play: ({ canvasElement }) => {
    const canvas = within(canvasElement)
    const title = canvas.getByRole('heading', { name: /huge heading/i })

    expect(title).toHaveStyle({ fontSize: remToPx(theme.font.sizes.huge) })
  }
}

export const LineLeft: Story = {
  args: {
    children: 'Line left',
    $line: 'left'
  },
  play: ({ canvasElement }) => {
    const canvas = within(canvasElement)
    const title = canvas.getByRole('heading')

    expect(title).toHaveStyle({
      borderLeft: `${remToPx('0.7rem')} solid ${theme.colors.primary}`
    })
  }
}

export const LineBottom: Story = {
  args: {
    children: 'Line bottom',
    $line: 'bottom'
  },
  play: ({ canvasElement }) => {
    const canvas = within(canvasElement)
    const title = canvas.getByRole('heading')

    // line color primary as default
    expect(window.getComputedStyle(title, '::after').borderBottom).toBe(
      `${remToPx('0.5rem')} solid ${hexToRGBA(theme.colors.primary)}`
    )
  }
}

export const LineLeftSecondary: Story = {
  args: {
    children: 'Line left secondary',
    $line: 'left',
    $lineColor: 'secondary'
  },
  play: ({ canvasElement, args }) => {
    const canvas = within(canvasElement)
    const title = canvas.getByRole('heading')

    expect(title).toHaveStyle({
      borderLeft: `${remToPx('0.7rem')} solid ${hexToRGBA(theme.colors.secondary)}`
    })
  }
}

export const LineBottomSecondary: Story = {
  args: {
    children: 'Line bottom secondary',
    $line: 'bottom',
    $lineColor: 'secondary'
  },
  play: ({ canvasElement }) => {
    const canvas = within(canvasElement)
    const title = canvas.getByRole('heading')

    expect(window.getComputedStyle(title, '::after').borderBottom).toBe(
      `${remToPx('0.5rem')} solid ${hexToRGBA(theme.colors.secondary)}`
    )
  }
}

export const LineBottomSmall: Story = {
  args: {
    children: 'Line bottom small',
    $line: 'bottom',
    $lineBottomSize: 'small'
  },
  play: ({ canvasElement }) => {
    const canvas = within(canvasElement)
    const title = canvas.getByRole('heading')
    const titleAfter = window.getComputedStyle(title, '::after')

    expect(titleAfter.width).toBe(remToPx('2.5rem'))
    expect(titleAfter.borderBottomWidth).toBe(remToPx('0.3rem'))
    expect(titleAfter.bottom).toBe(remToPx('-0.4rem'))
  }
}

export const LineBottomMedium: Story = {
  args: {
    children: 'Line bottom medium',
    $line: 'bottom',
    $lineBottomSize: 'medium'
  },
  play: ({ canvasElement }) => {
    const canvas = within(canvasElement)
    const title = canvas.getByRole('heading')
    const titleAfter = window.getComputedStyle(title, '::after')

    expect(titleAfter.width).toBe(remToPx('4rem'))
    expect(titleAfter.borderBottomWidth).toBe(remToPx('0.4rem'))
    expect(titleAfter.bottom).toBe(remToPx('-0.4rem'))
  }
}

export const LineBottomLarge: Story = {
  args: {
    children: 'Line bottom large',
    $line: 'bottom'
  },
  play: ({ canvasElement }) => {
    const canvas = within(canvasElement)
    const title = canvas.getByRole('heading')
    const titleAfter = window.getComputedStyle(title, '::after')

    // Border large as default
    expect(titleAfter.width).toBe(remToPx('5rem'))
    expect(titleAfter.borderBottomWidth).toBe(remToPx('0.5rem'))
    expect(titleAfter.bottom).toBe(remToPx('-0.8rem'))
  }
}

export const AsH1: Story = {
  name: 'As <h1 />',
  args: {
    children: 'Line bottom large',
    $line: 'bottom',
    as: 'h1'
  },
  play: ({ canvasElement }) => {
    const h1 = canvasElement.getElementsByTagName('h1')[0]

    expect(h1).toBeInTheDocument()
  }
}
