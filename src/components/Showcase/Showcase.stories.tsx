import type { StoryObj, Meta } from '@storybook/react'
import { jsMediaQuery } from 'utils/tests/helpers'
import { within } from '@storybook/testing-library'
import { expect } from '@storybook/jest'
import ShowcaseComponent from './Showcase'
import highlightMock from 'components/Highlight/mock'
import gamesMock from 'components/ProductSlider/mock'
import theme from 'styles/theme'

const meta: Meta<typeof ShowcaseComponent> = {
  title: 'Components/Showcase',
  component: ShowcaseComponent,
  argTypes: {
    highlight: {
      control: 'boolean',
      mapping: {
        true: highlightMock
      }
    },
    games: {
      control: 'boolean',
      mapping: {
        true: gamesMock
      }
    }
  }
}

export default meta

type Story = StoryObj<typeof ShowcaseComponent>

export const Playground: Story = {
  args: {
    title: 'Most Populars',
    highlight: highlightMock,
    games: gamesMock,
    arrowColor: 'white'
  }
}

export const Title: Story = {
  args: {
    title: 'Most populars'
  },
  play: ({ canvasElement }) => {
    const canvas = within(canvasElement)
    const title = canvas.getByRole('heading', { name: /most populars/i })

    expect(title).toBeInTheDocument()
  }
}

export const Highlight: Story = {
  args: {
    highlight: highlightMock
  },
  play: ({ args, canvasElement }) => {
    const canvas = within(canvasElement)
    const highlight = `${args.highlight?.title}`

    // should render the highlight
    expect(canvas.getByText(highlight)).toBeInTheDocument()
  }
}

export const Games: Story = {
  args: {
    games: gamesMock
  },
  play: ({ canvasElement, args }) => {
    const canvas = within(canvasElement)

    // should render the games
    expect(args.games).not.toHaveLength(0)

    // arrowColor white as default
    jsMediaQuery.greaterThan(theme.breakpoint.large, () => {
      const prevIcon = canvas.getByText(/previous games/i)
      const nextIcon = canvas.getByText(/next games/i)

      expect(prevIcon).toHaveStyle({ color: theme.colors.white })
      expect(nextIcon).toHaveStyle({ color: theme.colors.white })
    })
  }
}

export const ArrowColorBlack: Story = {
  args: {
    games: gamesMock,
    arrowColor: 'black'
  },
  parameters: {
    viewport: {
      defaultViewport: 'large'
    },
    backgrounds: {
      default: 'Light'
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
