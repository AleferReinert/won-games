import { expect } from '@storybook/jest'
import type { Meta, StoryObj } from '@storybook/react'
import { within } from '@storybook/testing-library'
import Highlight from './Highlight'
import { highlightMock } from './mock'

const meta: Meta<typeof Highlight> = {
  title: 'Components/Highlight',
  component: Highlight,
  args: highlightMock
}
export default meta

type Story = StoryObj<typeof Highlight>

export const Default: Story = {
  play: ({ canvasElement }) => {
    const canvas = within(canvasElement)
    const title = canvas.getByRole('heading', { name: /read dead it's back/i })
    const description = canvas.getByText(/come seen john's new adventures/i)
    const button = canvas.getByRole('link', { name: /buy now/i })
    const content = title.parentElement
    const highlight = title.parentElement?.parentElement
    const background = window.getComputedStyle(
      title.parentElement!.parentElement!
    ).backgroundImage

    expect(title).toBeInTheDocument()
    expect(description).toBeInTheDocument()
    expect(button).toBeInTheDocument()
    expect(background).toContain('img/red-dead-img.jpg')

    // alignment right as default
    expect(highlight).toHaveStyle({ flexDirection: 'row' })
    expect(content).toHaveStyle({ textAlign: 'right' })
  }
}

export const AlignmentLeft: Story = {
  args: {
    $alignment: 'left'
  },
  play: ({ canvasElement }) => {
    const canvas = within(canvasElement)
    const highlight =
      canvas.getByText(/read dead/i).parentElement?.parentElement

    expect(highlight).toHaveStyle({ 'flex-direction': 'row-reverse' })
  }
}

export const WithFloatImage: Story = {
  args: {
    float: '/img/red-dead-float.png'
  },
  play: ({ canvasElement }) => {
    const canvas = within(canvasElement)
    const floatImage = canvas.getByRole('img', { name: /read dead it's back/i })

    expect(floatImage).toBeInTheDocument()
  }
}
