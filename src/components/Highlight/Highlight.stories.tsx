import type { Meta, StoryObj } from '@storybook/react'
import { expect, within } from '@storybook/test'
import { highlightMock } from 'mocks/highlight.mock'
import Highlight from './Highlight'

const meta: Meta<typeof Highlight> = {
  title: 'Components/Highlight',
  component: Highlight,
  args: highlightMock,
  tags: ['autodocs']
}
export default meta

type Story = StoryObj<typeof Highlight>

export const Default: Story = {
  play: async ({ canvasElement, step }) => {
    const canvas = within(canvasElement)
    const highlightComponent = canvas.getByTestId('HighlightComponent')
    const title = canvas.getByRole('heading', { level: 3 })

    await step('Title', () => {
      expect(title).toHaveTextContent("Read Dead It's Back")
    })

    await step('Description', () => {
      const description = canvas.getByRole('paragraph')
      expect(description).toHaveTextContent("Come seen John's new adventures")
    })

    await step('Button link', () => {
      const button = canvas.getByRole('link', { name: 'Buy now' })
      expect(button).toHaveAttribute('href', '/highlight-link')
    })

    await step('Background image', () => {
      const background = canvas.getByRole('img', { name: 'background image test' })
      expect(background).toBeVisible()
    })

    await step('Alignment right', () => {
      expect(highlightComponent).toHaveStyle({ flexDirection: 'row' })
      const content = title.parentElement
      expect(content).toHaveStyle({ textAlign: 'right' })
    })
  }
}

export const AlignmentLeft: Story = {
  args: {
    $alignment: 'left'
  },
  play: async ({ canvasElement, step }) => {
    const canvas = within(canvasElement)

    await step('Alignment left', () => {
      const highlightComponent = canvas.getByTestId('HighlightComponent')
      expect(highlightComponent).toHaveStyle({ 'flex-direction': 'row-reverse' })
    })
  }
}

export const WithFloatImage: Story = {
  args: {
    floatImg: {
      url: '/img/red-dead-float.png',
      alternativeText: 'float image test'
    }
  },
  play: async ({ canvasElement, step }) => {
    const canvas = within(canvasElement)

    await step('Float image', () => {
      const floatImg = canvas.getByRole('img', { name: 'float image test' })
      expect(floatImg).toBeVisible()
    })
  }
}
