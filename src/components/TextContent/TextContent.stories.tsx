import type { StoryObj, Meta } from '@storybook/react'
import { within } from '@storybook/testing-library'
import { expect } from '@storybook/jest'
import TextContentComponent from './TextContent'
import { jsMediaQuery } from 'utils/tests/helpers'
import theme from 'styles/theme'

const meta: Meta<typeof TextContentComponent> = {
  title: 'Components/TextContent',
  component: TextContentComponent,
  args: {
    content: `<img alt="" src="/img/games/cyberpunk-1.jpg" />
        <h1>Heading content</h1>
        <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero,
        tempore. Nulla accusamus tempora quaerat repellat accusantium
        voluptatem reprehenderit iste dolorem quam rerum laboriosam architecto
        eos, fugiat ab vero facilis soluta.
        </p>`
  }
}
export default meta

type Story = StoryObj<typeof TextContentComponent>

export const Default: Story = {
  play: ({ canvasElement }) => {
    const canvas = within(canvasElement)
    const title = canvas.queryByRole('heading', { name: /my custom title/i })
    const content = canvas.getByRole('heading', { name: /heading content/i })
    const wrapper = content.parentElement?.parentElement

    expect(content).toBeInTheDocument()

    // Without title as default
    expect(title).not.toBeInTheDocument()

    // Mobile style
    jsMediaQuery.lessThan(theme.breakpoint.small, () => {
      expect(content).toHaveStyle({ color: theme.colors.white })
    })

    // Desktop style
    jsMediaQuery.greaterThan(theme.breakpoint.small, () => {
      expect(content).toHaveStyle({ color: theme.colors.black })
      expect(wrapper).toHaveStyle({ backgroundColor: theme.colors.white })
    })
  }
}

export const WithTitle: Story = {
  args: {
    title: 'My custom title'
  },
  play: ({ canvasElement }) => {
    const canvas = within(canvasElement)
    const title = canvas.getByRole('heading', { name: /my custom title/i })

    expect(title).toBeInTheDocument()
  }
}
