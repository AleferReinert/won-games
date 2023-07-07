import type { StoryObj, Meta } from '@storybook/react'
import { within } from '@storybook/testing-library'
import { expect } from '@storybook/jest'
import Banner from './Banner'

const meta: Meta<typeof Banner> = {
  title: 'Components/Banner',
  component: Banner,
  args: {
    img: 'https://source.unsplash.com/user/willianjusten/1042x580',
    title: 'Defy death',
    description: 'Play the new <strong>CrashLands</strong> season',
    buttonLabel: 'Buy now',
    buttonLink: '/games/defy-death',
    ribbon: '',
    ribbonColor: 'secondary',
    ribbonSize: 'large'
  },
  argTypes: {
    ribbon: {
      type: 'string'
    },
    ribbonColor: { if: { arg: 'ribbon' } },
    ribbonSize: { if: { arg: 'ribbon' } }
  }
}

type Story = StoryObj<typeof Banner>

export const Default: Story = {
  play: ({ canvasElement, args }) => {
    const canvas = within(canvasElement)
    const title = canvas.getByRole('heading', { name: args.title })
    const Description = canvas.getByText(/play the new/i)
    const button = canvas.getByRole('link', { name: args.buttonLabel })
    const image = canvas.getByRole('img', { name: args.title })

    expect(title).toBeInTheDocument()
    expect(Description).toBeInTheDocument()
    expect(button).toBeInTheDocument()
    expect(button).toHaveAttribute('href', '/games/defy-death')
    expect(image).toHaveAttribute(
      'src',
      'https://source.unsplash.com/user/willianjusten/1042x580'
    )
  }
}

export const WithRibbon: Story = {
  args: {
    ribbon: 'New release'
  },
  parameters: {
    options: {
      showPanel: true
    }
  },
  play: ({ canvasElement }) => {
    const canvas = within(canvasElement)
    const ribbon = canvas.getByText(/new release/i)

    expect(ribbon).toBeInTheDocument()
  }
}

export default meta
