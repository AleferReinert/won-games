import type { StoryObj, Meta } from '@storybook/react'
import { within } from '@storybook/testing-library'
import { expect } from '@storybook/jest'
import { hexToRGBA } from 'utils/tests/helpers'
import { remToPx } from 'polished'
import Empty from './Empty'
import theme from 'styles/theme'

const meta: Meta<typeof Empty> = {
  title: 'Components/Atoms/Empty',
  component: Empty,
  args: {
    title: 'No results found',
    description: `Sorry, we couldn't find any results for your search.`
  }
}

export default meta

type Story = StoryObj<typeof Empty>

export const Default: Story = {
  play: ({ canvasElement, args }) => {
    const canvas = within(canvasElement)
    const wrapper = canvas.getByTestId('emptyComponent')
    const img = canvas.getByRole('img')
    const title = canvas.getByRole('heading')
    const description = canvas.getByText(
      /sorry, we couldn't find any results for your search./i
    )

    expect(img).toBeInTheDocument()
    expect(title).toHaveTextContent(args.title)
    expect(description).toHaveTextContent(args.description)
    expect(wrapper).not.toHaveStyle({
      backgroundColor: hexToRGBA(theme.colors.white)
    })
    expect(description).toHaveStyle({ color: hexToRGBA(theme.colors.white) })
  }
}

export const WithButton: Story = {
  args: {
    buttonText: 'Go back to store',
    buttonUrl: '/link'
  },
  play: ({ canvasElement }) => {
    const canvas = within(canvasElement)
    const button = canvas.getByRole('link', { name: /go back to store/i })

    expect(button).toHaveAttribute('href', '/link')
  }
}

export const InvertedColors: Story = {
  args: {
    invertedColors: true
  },
  play: ({ canvasElement }) => {
    const canvas = within(canvasElement)
    const wrapper = canvas.getByTestId('emptyComponent')
    const description = canvas.getByText(
      /sorry, we couldn't find any results for your search./i
    )

    expect(wrapper).toHaveStyle({
      backgroundColor: hexToRGBA(theme.colors.white)
    })
    expect(description).toHaveStyle({ color: hexToRGBA(theme.colors.black) })
  }
}

export const Small: Story = {
  args: {
    small: true
  },
  play: ({ canvasElement }) => {
    const canvas = within(canvasElement)
    const img = canvas.getByRole('img')
    const title = canvas.getByRole('heading')

    expect(img).toHaveStyle({ maxWidth: remToPx('14rem') })
    expect(title).toHaveStyle({ fontSize: remToPx(theme.font.sizes.large) })
  }
}
