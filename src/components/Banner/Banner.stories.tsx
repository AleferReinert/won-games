import type { StoryObj, Meta } from '@storybook/react'
import { within } from '@storybook/testing-library'
import { expect } from '@storybook/jest'
import Banner from './Banner'
import bannerMock from './mock'

const meta: Meta<typeof Banner> = {
  title: 'Components/Banner',
  component: Banner,
  args: {
    ...bannerMock,
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
  play: ({ canvasElement }) => {
    const canvas = within(canvasElement)
    const title = canvas.getByRole('heading', { name: /defy death/i })
    const subtitle = canvas.getByText(/play the new/i)
    const button = canvas.getByRole('link', { name: /buy now/i })
    const image = canvas.getByRole('img', { name: /defy death/i })

    expect(title).toBeInTheDocument()
    expect(subtitle).toBeInTheDocument()
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
