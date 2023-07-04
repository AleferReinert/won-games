import type { StoryObj, Meta } from '@storybook/react'
import { within } from '@storybook/testing-library'
import { expect } from '@storybook/jest'
import { remToPx } from 'polished'
import { hexToRGBA, jsMediaQuery } from 'utils/tests/helpers'
import Heading from './Heading'
import theme from '../../styles/theme'

const meta: Meta<typeof Heading> = {
  title: 'Components/Heading',
  component: Heading,
  argTypes: {
    children: {
      type: 'string'
    }
  }
}

export default meta

type Story = StoryObj<typeof Heading>

export const Playground: Story = {
  args: {
    children: 'Custom heading',
    color: 'white',
    size: 'medium',
    line: 'left',
    lineColor: 'primary'
  }
}

export const Default: Story = {
  args: {
    children: 'Default heading'
  },
  play: ({ canvasElement }) => {
    const canvas = within(canvasElement)
    const title = canvas.getByRole('heading', { name: /default heading/i })

    // color white and size medium as default
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
    const title = canvas.getByRole('heading', { name: /black heading/i })

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
    const title = canvas.getByRole('heading', { name: /small heading/i })

    expect(title).toHaveStyle({ fontSize: remToPx(theme.font.sizes.medium) })
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

export const lineLeft: Story = {
  args: {
    children: 'Line left',
    line: 'left'
  },
  play: ({ canvasElement }) => {
    const canvas = within(canvasElement)
    const title = canvas.getByRole('heading', {
      name: /line left/i
    })

    expect(title).toHaveStyle({
      borderLeft: `${remToPx('0.7rem')} solid ${theme.colors.primary}`
    })
  }
}

export const LineBottom: Story = {
  args: {
    children: 'Line bottom',
    line: 'bottom'
  },
  play: ({ canvasElement }) => {
    const canvas = within(canvasElement)
    const title = canvas.getByRole('heading', {
      name: /line bottom/i
    })

    // line color primary as default
    expect(window.getComputedStyle(title, '::after').borderBottom).toBe(
      `${remToPx('0.5rem')} solid ${hexToRGBA(theme.colors.primary)}`
    )
  }
}

export const LineLeftSecondary: Story = {
  args: {
    children: 'Line left secondary',
    line: 'left',
    lineColor: 'secondary'
  },
  play: ({ canvasElement }) => {
    const canvas = within(canvasElement)
    const title = canvas.getByRole('heading', {
      name: /line left secondary/i
    })

    expect(title).toHaveStyle({
      borderLeft: `${remToPx('0.7rem')} solid ${theme.colors.secondary}`
    })
  }
}

export const LineBottomSecondary: Story = {
  args: {
    children: 'Line bottom secondary',
    line: 'bottom',
    lineColor: 'secondary'
  },
  play: ({ canvasElement }) => {
    const canvas = within(canvasElement)
    const title = canvas.getByRole('heading', {
      name: /line bottom secondary/i
    })

    expect(window.getComputedStyle(title, '::after').borderBottom).toBe(
      `${remToPx('0.5rem')} solid ${hexToRGBA(theme.colors.secondary)}`
    )
  }
}
