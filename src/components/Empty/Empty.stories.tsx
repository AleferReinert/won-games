import type { Meta, StoryObj } from '@storybook/react'
import { expect, within } from '@storybook/test'
import { remToPx } from 'polished'
import theme from 'styles/theme'
import Empty from './Empty'

const meta: Meta<typeof Empty> = {
  title: 'Components/Atoms/Empty',
  component: Empty,
  args: {
    title: 'No results found',
    $description: `Sorry, we couldn't find any results for your search.`
  },
  tags: ['autodocs']
}

export default meta

type Story = StoryObj<typeof Empty>

export const Default: Story = {
  play: async ({ canvasElement, step }) => {
    const canvas = within(canvasElement)
    const wrapper = canvas.getByTestId('EmptyComponent')
    const img = canvas.getByRole('img')
    const title = canvas.getByRole('heading', { name: 'No results found' })
    const description = canvas.getByRole('paragraph')

    await step('Title and description', () => {
      expect(title).toBeVisible()
      expect(description.textContent).toContain('Sorry')
    })

    await step('Image 340x176 as default', () => {
      expect(img).toHaveAttribute('width', '340')
      expect(img).toHaveAttribute('height', '176')
    })

    await step('Without background color', () => {
      expect(wrapper).not.toHaveStyle({
        backgroundColor: theme.colors.white
      })
    })

    await step('Description white', () => {
      expect(description).toHaveStyle({ color: theme.colors.white })
    })
  }
}

export const WithButton: Story = {
  args: {
    buttonText: 'Go back to store',
    buttonUrl: '/link'
  },
  play: async ({ canvasElement, step }) => {
    const canvas = within(canvasElement)
    const button = canvas.getByRole('link', { name: /go back to store/i })

    step('Optional button link', () => {
      expect(button).toHaveAttribute('href', '/link')
    })
  }
}

export const InvertedColors: Story = {
  args: {
    $invertedColors: true
  },
  play: async ({ canvasElement, step }) => {
    const canvas = within(canvasElement)
    const wrapper = canvas.getByTestId('EmptyComponent')
    const description = canvas.getByRole('paragraph')

    await step('Background white', () => {
      expect(wrapper).toHaveStyle({
        backgroundColor: theme.colors.white
      })
    })

    step('Description black', () => {
      expect(description).toHaveStyle({ color: theme.colors.black })
    })
  }
}

export const Small: Story = {
  args: {
    $small: true
  },
  play: async ({ canvasElement, step }) => {
    const canvas = within(canvasElement)
    const img = canvas.getByRole('img')
    const title = canvas.getByRole('heading')

    await step('Title small', () => {
      expect(title).toHaveStyle({ fontSize: remToPx(theme.font.sizes.large) })
    })

    step('Image 140x72', () => {
      expect(img).toHaveAttribute('width', '140')
      expect(img).toHaveAttribute('height', '72')
    })
  }
}
