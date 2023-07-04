import type { StoryObj, Meta } from '@storybook/react'
import { within } from '@storybook/testing-library'
import { expect } from '@storybook/jest'
import { remToPx } from 'polished'
import Ribbon from './Ribbon'
import theme from 'styles/theme'

const meta: Meta<typeof Ribbon> = {
  title: 'Components/Ribbon',
  component: Ribbon,
  args: {
    children: 'New release'
  },
  decorators: [
    (Story) => (
      <div
        style={{
          width: '50rem',
          aspectRatio: '16/9',
          position: 'relative',
          background: theme.colors.darkGray
        }}
      >
        <Story />
      </div>
    )
  ]
}
export default meta

type Story = StoryObj<typeof Ribbon>

export const Playground: Story = {
  args: {
    color: 'primary',
    size: 'large'
  }
}

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
