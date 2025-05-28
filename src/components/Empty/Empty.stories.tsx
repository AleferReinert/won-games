import type { Meta, StoryObj } from '@storybook/react'
import { expect, within } from '@storybook/test'
import { getTailwindValue } from 'utils/getTailwindValue'
import { Empty } from './Empty'

const meta: Meta<typeof Empty> = {
  title: 'Components/Atoms/Empty',
  component: Empty,
  args: {
    title: 'No results found',
    description: `Sorry, we couldn't find any results for your search.`
  },
  tags: ['autodocs']
}

export default meta

type Story = StoryObj<typeof Empty>

export const Default: Story = {
  play: async ({ canvasElement, step }) => {
    const canvas = within(canvasElement)

    await step('Title', () => {
      const title = canvas.getByRole('heading', { name: 'No results found' })
      expect(title).toBeVisible()
    })

    await step('Description', () => {
      const description = canvas.getByRole('paragraph')
      expect(description).toHaveStyle({ color: getTailwindValue('--color-zinc-50') })
      expect(description.textContent).toContain('Sorry')
    })

    await step('Image 340x176 as default', () => {
      const img = canvas.getByRole('img', { hidden: true })
      expect(img).toHaveAttribute('width', '340')
      expect(img).toHaveAttribute('height', '176')
    })

    await step('Without background color', () => {
      const wrapper = canvas.getByTestId('EmptyComponent')
      expect(wrapper).not.toHaveStyle({ backgroundColor: getTailwindValue('--color-zinc-50') })
    })
  }
}

export const WithButton: Story = {
  args: {
    buttonText: 'Go back to store',
    buttonUrl: '/link'
  },
  play: ({ canvasElement, step }) => {
    const canvas = within(canvasElement)

    step('Optional button link', () => {
      const button = canvas.getByRole('link', { name: /go back to store/i })
      expect(button).toHaveAttribute('href', '/link')
    })
  }
}

export const InvertedColors: Story = {
  args: {
    invertedColors: true
  },
  play: async ({ canvasElement, step }) => {
    const canvas = within(canvasElement)

    await step('Background white', () => {
      const wrapper = canvas.getByTestId('EmptyComponent')
      expect(wrapper).toHaveStyle({ backgroundColor: getTailwindValue('--color-zinc-50') })
    })

    step('Description black', () => {
      const description = canvas.getByRole('paragraph')
      expect(description).toHaveStyle({ color: getTailwindValue('--color-theme-gray-950') })
    })
  }
}

export const Small: Story = {
  args: {
    small: true
  },
  play: async ({ canvasElement, step }) => {
    const canvas = within(canvasElement)

    await step('Title small', () => {
      const title = canvas.getByRole('heading')
      expect(title).toHaveStyle('font-size: 18px')
    })

    step('Image 140x72', () => {
      const img = canvas.getByRole('img', { hidden: true })
      expect(img).toHaveAttribute('width', '140')
      expect(img).toHaveAttribute('height', '72')
    })
  }
}
