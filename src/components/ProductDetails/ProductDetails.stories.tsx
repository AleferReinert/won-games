import type { StoryObj, Meta } from '@storybook/react'
import { pxToNumber } from 'utils/tests/helpers'
import { within } from '@storybook/testing-library'
import { expect } from '@storybook/jest'
import ProductDetailsComponent from './ProductDetails'
import mock from './mock'
import theme from 'styles/theme'

const meta: Meta<typeof ProductDetailsComponent> = {
  title: 'Components/ProductDetails',
  component: ProductDetailsComponent,
  args: mock,
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
    const icons = ['Windows', 'Linux', 'Mac']

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

    // platform icons
    for (const icon of icons) {
      expect(canvas.getByRole('img', { name: icon })).toBeInTheDocument()
    }

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
