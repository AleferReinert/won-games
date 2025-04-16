import type { Meta, StoryObj } from '@storybook/react'
import { expect, within } from '@storybook/test'
import theme from 'styles/theme'
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

export const Default: Story = {
  name: 'Light (default)',
  parameters: {
    backgrounds: {
      default: 'Dark'
    }
  },
  play: ({ canvasElement, step }) => {
    const canvas = within(canvasElement)
    const loading = canvas.getByTestId('3dotsLoadingComponent')

    step('Fill white', () => {
      expect(loading).toHaveAttribute('fill', theme.colors.white)
    })

    step('Size 40', () => {
      expect(loading).toHaveAttribute('width', '40')
    })
  }
}

export const Size: Story = {
  args: {
    size: 100
  },
  play: ({ canvasElement, step }) => {
    const canvas = within(canvasElement)

    step('Size', () => {
      const loading = canvas.getByRole('img', { name: 'Loading...' })
      expect(loading).toHaveAttribute('width', '100')
    })
  }
}

export const Spinner: Story = {
  args: {
    animation: 'spinner'
  },
  play: ({ canvasElement, step }) => {
    const canvas = within(canvasElement)
    const loading = canvas.getByTestId('SpinnerLoadingComponent')

    step('Spinner animation', () => {
      expect(loading).toBeVisible()
    })
  }
}
