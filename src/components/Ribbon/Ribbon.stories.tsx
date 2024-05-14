import { expect } from '@storybook/jest'
import type { Meta, StoryObj } from '@storybook/react'
import { within } from '@storybook/testing-library'
import { remToPx } from 'polished'
import theme from 'styles/theme'
import Ribbon from './Ribbon'

const meta: Meta<typeof Ribbon> = {
  title: 'Components/Atoms/Ribbon',
  component: Ribbon,
  args: {
    text: 'New release'
  },
  decorators: [
    (Story) => (
      <div
        style={{
          width: '30rem',
          position: 'relative',
          aspectRatio: '16/9',
          background: '#eee'
        }}
      >
        <Story />
      </div>
    )
  ]
}
export default meta

type Story = StoryObj<typeof Ribbon>

export const Default: Story = {
  play: ({ canvasElement }) => {
    const canvas = within(canvasElement)
    const ribbon = canvas.getByText(/new release/i)

    expect(ribbon).toBeInTheDocument()

    // primary color as default
    expect(ribbon).toHaveStyle({ backgroundColor: theme.colors.primary })

    // size large as default
    expect(ribbon).toHaveStyle({
      height: remToPx('3.3rem'),
      fontSize: remToPx(theme.font.sizes.small)
    })
  }
}

export const Secondary: Story = {
  args: {
    color: 'secondary'
  },
  play: ({ canvasElement }) => {
    const canvas = within(canvasElement)
    const ribbon = canvas.getByText(/new release/i)

    expect(ribbon).toHaveStyle({ backgroundColor: theme.colors.secondary })
  }
}

export const Small: Story = {
  args: {
    size: 'small'
  },
  play: ({ canvasElement }) => {
    const canvas = within(canvasElement)
    const ribbon = canvas.getByText(/new release/i)

    expect(ribbon).toHaveStyle({
      height: remToPx('2.4rem'),
      fontSize: remToPx(theme.font.sizes.xxsmall)
    })
  }
}
