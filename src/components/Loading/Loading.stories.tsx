import type { Meta, StoryObj } from '@storybook/react'
import { expect, within } from '@storybook/test'
import { Loading as LoadingComponent } from './Loading'

const meta: Meta<typeof LoadingComponent> = {
  title: 'Components/Atoms/Loading',
  component: LoadingComponent,
  parameters: {
    layout: 'centered'
  },
  tags: ['autodocs']
}

export default meta

type Story = StoryObj<typeof LoadingComponent>

export const Dots: Story = {
  name: 'Dots (default)',
  parameters: {
    backgrounds: {
      default: 'Dark'
    }
  },
  play: async ({ canvasElement, step }) => {
    const canvas = within(canvasElement)
    const loading = canvas.getByTestId('LoadingComponent')

    await step('Width full as default', () => {
      expect(loading).toHaveClass('w-full')
    })

    step('3 dots', () => {
      expect(loading.children[0].children.length).toBe(3)
    })
  }
}

export const Spinner: Story = {
  args: {
    animation: 'spinner'
  },
  play: ({ canvasElement, step }) => {
    const canvas = within(canvasElement)
    const loading = canvas.getByTestId('LoadingComponent')

    step('Spinner animation', () => {
      expect(loading.children[0]).toHaveClass('animate-spin')
    })
  }
}

export const Inline: Story = {
  args: {
    inline: true
  },
  play: ({ canvasElement, step }) => {
    const canvas = within(canvasElement)
    const loading = canvas.getByTestId('LoadingComponent')

    step('Width fit-content', () => {
      expect(loading).toHaveClass('w-fit')
    })
  }
}

export const Custom: Story = {
  args: {
    className: 'border-r-theme-primary!',
    animation: 'spinner'
  },
  play: ({ canvasElement, step }) => {
    const canvas = within(canvasElement)
    const loading = canvas.getByTestId('LoadingComponent')

    step('Custom class', () => {
      expect(loading.children[0]).toHaveClass('border-r-theme-primary!')
    })
  }
}
