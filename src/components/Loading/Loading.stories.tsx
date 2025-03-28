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

    step('SVG with fill white', () => {
      const loading = canvas.getByRole('img', { name: 'Carregando...' })
      expect(loading).toHaveAttribute('fill', theme.colors.white)
    })
  }
}

export const Dark: Story = {
  args: {
    color: 'dark'
  },
  parameters: {
    backgrounds: {
      default: 'Light'
    }
  },
  play: ({ canvasElement, step }) => {
    const canvas = within(canvasElement)

    step('SVG with fill dark', () => {
      const loading = canvas.getByRole('img', { name: 'Carregando...' })
      expect(loading).toHaveAttribute('fill', theme.colors.black)
    })
  }
}
