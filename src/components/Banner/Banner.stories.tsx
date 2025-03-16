import { expect } from '@storybook/jest'
import type { Meta, StoryObj } from '@storybook/react'
import { within } from '@storybook/testing-library'
import { bannersMock } from '../../mocks/banners.mock'
import Banner from './Banner'

const meta: Meta<typeof Banner> = {
  title: 'Components/Banner',
  component: Banner
}

type Story = StoryObj<typeof Banner>

export const Default: Story = {
  args: {
    ...bannersMock[0]
  },
  play: ({ canvasElement, args }) => {
    const canvas = within(canvasElement)
    const title = canvas.getByRole('heading', { name: args.title })
    const Description = canvas.getByText(/play the new/i)
    const button = canvas.getByRole('link', { name: args.buttonLabel })
    const image = canvas.getByRole('img', { name: args.title })

    expect(title).toBeInTheDocument()
    expect(Description).toBeInTheDocument()
    expect(button).toBeInTheDocument()
    expect(button).toHaveAttribute('href', '/products/defy-death')
    expect(image).toHaveAttribute('src', '/img/background-test.png')
  }
}

export const WithRibbon: Story = {
  args: {
    ...bannersMock[1]
  },
  parameters: {
    options: {
      showPanel: true
    }
  },
  play: ({ canvasElement }) => {
    const canvas = within(canvasElement)
    const ribbon = canvas.getByText(/new/i)

    expect(ribbon).toBeInTheDocument()
  }
}

export default meta
