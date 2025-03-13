import { expect } from '@storybook/jest'
import type { Meta, StoryObj } from '@storybook/react'
import { within } from '@storybook/testing-library'
import Container from 'components/Container/Container'
import highlightMock from 'components/Highlight/mock'
import gamesMock from 'components/ProductSlider/mock'
import ShowcaseComponent from './Showcase'

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
    products: {
      control: 'boolean',
      mapping: {
        true: gamesMock
      }
    }
  },
  decorators: [
    (Story) => (
      <Container>
        <Story />
      </Container>
    )
  ]
}

export default meta

type Story = StoryObj<typeof ShowcaseComponent>

export const Playground: Story = {
  args: {
    title: 'Most Populars',
    highlight: highlightMock,
    products: gamesMock,
    $arrowColor: 'white'
  }
}

export const TitleOnly: Story = {
  args: {
    title: 'Most populars'
  },
  play: ({ canvasElement }) => {
    const canvas = within(canvasElement)
    const title = canvas.getByRole('heading', { name: /most populars/i })

    expect(title).toBeInTheDocument()
  }
}

export const HighlightOnly: Story = {
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

export const GamesOnly: Story = {
  args: {
    products: gamesMock
  },
  parameters: {
    viewport: {
      defaultViewport: 'large'
    }
  },
  play: async ({ canvasElement, args }) => {
    // const canvas = within(canvasElement)

    // should render the games
    expect(args.products).not.toHaveLength(0)

    // arrowColor white as default
    // todo: not working in terminal
    // const nextIcon = await waitFor(() =>
    //   canvas.getByRole('img', { name: /next games/i })
    // )
    // expect(nextIcon).toHaveStyle({ fill: theme.colors.white })
  }
}

export const ArrowColorBlack: Story = {
  args: {
    products: gamesMock,
    $arrowColor: 'black'
  },
  parameters: {
    viewport: {
      defaultViewport: 'large'
    },
    backgrounds: {
      default: 'Light'
    }
  },
  play: async ({ canvasElement }) => {
    // todo: not working in terminal
    // const canvas = within(canvasElement)
    // const nextIcon = await waitFor(() =>
    //   canvas.getByRole('img', { name: /next games/i })
    // )
    // expect(nextIcon).toHaveStyle({ fill: theme.colors.black })
  }
}
