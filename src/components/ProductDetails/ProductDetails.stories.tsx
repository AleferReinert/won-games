import type { Meta, StoryObj } from '@storybook/react'
import { expect, within } from '@storybook/test'
import { productDetailsMock } from '../../mocks/productDetails.mock'
import { ProductDetails } from './ProductDetails'

const meta: Meta<typeof ProductDetails> = {
  title: 'Components/ProductDetails',
  component: ProductDetails,
  args: productDetailsMock,
  argTypes: {
    releaseDate: {
      control: {
        type: 'date'
      }
    },
    platforms: {
      control: { type: 'inline-check' },
      options: ['windows', 'linux', 'mac']
    },
    categories: {
      control: { type: 'inline-check' },
      options: ['Action', 'Adventure', 'Role-playing', 'Simulation', 'Sci-fi']
    }
  },
  parameters: {
    layout: 'padded'
  }
}

export default meta

type Story = StoryObj<typeof ProductDetails>

export const Default: Story = {
  play: async ({ canvasElement, step }) => {
    const canvas = within(canvasElement)

    await step('Title', () => {
      const title = canvas.getByRole('heading', { level: 2 })
      expect(title).toHaveTextContent('Game details')
    })

    await step('Category', () => {
      const title = canvas.getByText('Category')
      const categories = canvas.getByText('Action, Adventure')
      expect(title).toBeVisible()
      expect(categories).toBeVisible()
    })

    await step('Platforms', () => {
      const title = canvas.getByText('Platforms')
      const platformsComponent = canvas.getByTestId('PlatformsComponent')
      expect(title).toBeVisible()
      expect(platformsComponent).toBeVisible()
    })

    await step('Release date with date formatted', () => {
      const title = canvas.getByText('Release date')
      const dateFormatted = canvas.getByText('Sep 13, 2019')
      expect(title).toBeVisible()
      expect(dateFormatted).toBeVisible()
    })

    await step('Developers', () => {
      const title = canvas.getByText('Developer')
      const developers = canvas.getByText('Gearbox Software, 2K Games')
      expect(title).toBeVisible()
      expect(developers).toBeVisible()
    })

    await step('Publisher', () => {
      const title = canvas.getByText('Publisher')
      const publishers = canvas.getByText('Activision, Deep Silver')
      expect(title).toBeVisible()
      expect(publishers).toBeVisible()
    })

    await step('Rating with rating formatted', () => {
      const title = canvas.getByText('Rating')
      const ratingFormatted = canvas.getByText('18+')
      expect(title).toBeVisible()
      expect(ratingFormatted).toBeVisible()
    })
  }
}

export const RatingFree: Story = {
  args: {
    rating: 'BR0'
  },
  play: async ({ canvasElement, step }) => {
    const canvas = within(canvasElement)

    await step('Rating free on BR0', () => {
      const rating = canvas.getByText(/free/i)
      expect(rating).toBeInTheDocument()
    })
  }
}
