import type { Meta, StoryObj } from '@storybook/react'
import { expect, within } from '@storybook/test'
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
  ],
  parameters: {
    layout: 'centered'
  },
  tags: ['autodocs']
}
export default meta

type Story = StoryObj<typeof Ribbon>

export const Default: Story = {
  play: async ({ canvasElement, step }) => {
    const canvas = within(canvasElement)
    const ribbon = canvas.getByText(/new release/i)

    await step('Ribbon text', () => {
      expect(ribbon).toBeInTheDocument()
    })

    await step('Primary color as default', () => {
      expect(ribbon).toHaveStyle({ backgroundColor: theme.colors.primary })
    })

    step('Size large as default', () => {
      expect(ribbon).toHaveStyle({
        fontSize: remToPx(theme.font.sizes.small),
        height: remToPx('3.3rem')
      })
    })
  }
}

export const Secondary: Story = {
  args: {
    color: 'secondary'
  },
  play: async ({ canvasElement, step }) => {
    const canvas = within(canvasElement)
    const ribbon = canvas.getByText(/new release/i)

    step('Secondary color', () => {
      expect(ribbon).toHaveStyle({ backgroundColor: theme.colors.secondary })
    })
  }
}

export const Small: Story = {
  args: {
    size: 'small'
  },
  play: async ({ canvasElement, step }) => {
    const canvas = within(canvasElement)
    const ribbon = canvas.getByText(/new release/i)

    step('Font 10px and height 24px', () => {
      expect(ribbon).toHaveStyle({
        fontSize: remToPx(theme.font.sizes.xxsmall),
        height: remToPx('2.4rem')
      })
    })
  }
}
