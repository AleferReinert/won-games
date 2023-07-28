import type { StoryObj, Meta } from '@storybook/react'
import { within } from '@storybook/testing-library'
import { expect } from '@storybook/jest'
import { jsMediaQuery } from 'utils/tests/helpers'
import ProductSliderComponent from './ProductSlider'
import items from './mock'
import theme from 'styles/theme'

const meta: Meta<typeof ProductSliderComponent> = {
  title: 'Components/ProductSlider',
  component: ProductSliderComponent,
  args: { items },
  argTypes: {
    items: {
      table: { disable: true }
    }
  }
}
export default meta

type Story = StoryObj<typeof ProductSliderComponent>

export const Default: Story = {
  play: ({ canvasElement }) => {
    const canvas = within(canvasElement)
    const items = canvas.getAllByRole('heading', { name: /population zero/i })

    expect(items.length).toBeGreaterThanOrEqual(2)

    // arrows white color as default
    jsMediaQuery.greaterThan(theme.breakpoint.large, () => {
      const prevIcon = canvas.getByText(/previous games/i)
      const nextIcon = canvas.getByText(/next games/i)

      expect(prevIcon).toHaveStyle({ color: theme.colors.white })
      expect(nextIcon).toHaveStyle({ color: theme.colors.white })
    })
  }
}

export const ArrowBlack: Story = {
  args: {
    arrowColor: 'black'
  },
  parameters: {
    backgrounds: {
      default: 'Light'
    },
    viewport: {
      defaultViewport: 'xlarge'
    }
  },
  play: ({ canvasElement }) => {
    const canvas = within(canvasElement)

    jsMediaQuery.greaterThan(theme.breakpoint.large, () => {
      const prevIcon = canvas.getByText(/previous games/i)
      const nextIcon = canvas.getByText(/next games/i)

      expect(prevIcon).toHaveStyle({ color: theme.colors.black })
      expect(nextIcon).toHaveStyle({ color: theme.colors.black })
    })
  }
}
