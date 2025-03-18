import type { Meta, StoryObj } from '@storybook/react'
import { expect, within } from '@storybook/test'
import theme from 'styles/theme'
import { pxToNumber } from 'utils/tests/helpers'
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
  }
}

export default meta

type Story = StoryObj<typeof ProductDetailsComponent>

export const ProductDetails: Story = {
  play: ({ canvasElement }) => {
    const canvas = within(canvasElement)
    const viewport = canvasElement.clientWidth
    const breakpointSmall = pxToNumber(theme.breakpoint.small)
    const title = canvas.queryByText(/game details/i)
    const formattedDate = canvas.getByText('Sep 13, 2019')
    const subtitles = [
      'Category',
      'Platforms',
      'Release date',
      'Developer',
      'Publisher',
      'Rating'
    ]

    // title "Game Details" on desktop only
    viewport < breakpointSmall
      ? expect(title).not.toBeVisible()
      : expect(title).toBeVisible()

    // subtitles
    for (const subtitle of subtitles) {
      expect(
        canvas.getByRole('heading', { name: subtitle })
      ).toBeInTheDocument()
    }

    // formatted data
    expect(formattedDate).toBeInTheDocument()

    // platforms
    expect(canvas.getByText(/Windows 7/i)).toBeInTheDocument()

    // render 18+ when rating BR18
    expect(canvas.getByText('18+')).toBeInTheDocument()
  }
}

export const RatingFree: Story = {
  args: {
    rating: 'BR0'
  },
  play: ({ canvasElement }) => {
    const canvas = within(canvasElement)
    const rating = canvas.getByText(/free/i)

    expect(rating).toBeInTheDocument()
  }
}
