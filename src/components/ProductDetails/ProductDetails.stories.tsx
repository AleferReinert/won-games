import type { Meta, StoryObj } from '@storybook/react'
import { expect, within } from '@storybook/test'
import { productDetailsMock } from '../../mocks/productDetails.mock'
import ProductDetailsComponent from './ProductDetails'

const meta: Meta<typeof ProductDetailsComponent> = {
  title: 'Components/ProductDetails',
  component: ProductDetailsComponent,
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
  },
  tags: ['autodocs']
}

export default meta

type Story = StoryObj<typeof ProductDetailsComponent>

export const ProductDetails: Story = {
  play: async ({ canvasElement, step }) => {
    const canvas = within(canvasElement)

    await step('Title', () => {
      const title = canvas.getByRole('heading', { level: 2 })
      expect(title).toHaveTextContent('Game details')
    })

    await step('Category', () => {
      const title = canvas.getByRole('heading', { level: 3, name: 'Category' })
      const categories = canvas.getByText('Action, Adventure')
      expect(title).toBeVisible()
      expect(categories).toBeVisible()
    })

    await step('Platforms', () => {
      const title = canvas.getByRole('heading', { level: 3, name: 'Platforms' })
      const platformsComponent = canvas.getByTestId('PlatformsComponent')
      expect(title).toBeVisible()
      expect(platformsComponent).toBeVisible()
    })

    await step('Release date with date formatted', () => {
      const title = canvas.getByRole('heading', { level: 3, name: 'Release date' })
      const dateFormatted = canvas.getByText('Sep 13, 2019')
      expect(title).toBeVisible()
      expect(dateFormatted).toBeVisible()
    })

    await step('Developer', () => {
      const title = canvas.getByRole('heading', { level: 3, name: 'Developer' })
      const developer = canvas.getByText('Gearbox Software')
      expect(title).toBeVisible()
      expect(developer).toBeVisible()
    })

    await step('Publisher', () => {
      const title = canvas.getByRole('heading', { level: 3, name: 'Publisher' })
      const publisher = canvas.getByText('2K')
      expect(title).toBeVisible()
      expect(publisher).toBeVisible()
    })

    await step('Rating with rating formatted', () => {
      const title = canvas.getByRole('heading', { level: 3, name: 'Rating' })
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
