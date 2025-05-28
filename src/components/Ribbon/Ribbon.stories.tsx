import type { Meta, StoryObj } from '@storybook/react'
import { expect, within } from '@storybook/test'
import { getTailwindValue } from 'utils/getTailwindValue'
import { Ribbon } from './Ribbon'

const meta: Meta<typeof Ribbon> = {
  title: 'Components/Atoms/Ribbon',
  component: Ribbon,
  args: {
    label: 'New release'
  },
  decorators: [
    (Story) => (
      <div className='relative w-[300px] aspect-video bg-[#eee]'>
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

export const Large: Story = {
  name: 'Large (default)',
  play: async ({ canvasElement, step }) => {
    const canvas = within(canvasElement)
    const ribbon = canvas.getByText(/new release/i)

    await step('Ribbon text', () => {
      expect(ribbon).toBeInTheDocument()
    })

    await step('Primary color as default', () => {
      expect(ribbon).toHaveStyle({ backgroundColor: getTailwindValue('--color-theme-primary') })
    })

    step('Size large as default', () => {
      expect(ribbon).toHaveStyle({ fontSize: '14px', height: '33px' })
    })
  }
}

export const Secondary: Story = {
  args: {
    color: 'secondary'
  },
  play: ({ canvasElement, step }) => {
    const canvas = within(canvasElement)
    const ribbon = canvas.getByText(/new release/i)

    step('Secondary color', () => {
      expect(ribbon).toHaveStyle({ backgroundColor: getTailwindValue('--color-theme-secondary') })
    })
  }
}

export const Small: Story = {
  args: {
    size: 'small'
  },
  play: ({ canvasElement, step }) => {
    const canvas = within(canvasElement)
    const ribbon = canvas.getByText(/new release/i)

    step('Font 10px and height 24px', () => {
      expect(ribbon).toHaveStyle({ fontSize: '10px', height: '24px' })
    })
  }
}
