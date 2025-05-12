import type { Meta, StoryObj } from '@storybook/react'
import { expect, within } from '@storybook/test'
import Logo from './Logo'

const meta: Meta<typeof Logo> = {
  title: 'Components/Atoms/Logo',
  component: Logo,
  parameters: {
    layout: 'padded'
  },
  tags: ['autodocs']
}

export default meta

type Story = StoryObj<typeof Logo>

export const Light: Story = {
  name: 'Light (default)',
  play: async ({ canvasElement, step }) => {
    const canvas = within(canvasElement)

    await step('Light in src', () => {
      const logo = canvas.getByRole('img', { name: 'Won Games' })
      expect(logo.getAttribute('src')).toContain('light')
    })

    await step('Width 200', () => {
      const wrapper = canvas.getByTestId('LogoComponent')
      expect(wrapper).toHaveStyle({ width: '200px' })
    })
  }
}

export const Dark: Story = {
  args: {
    variant: 'dark'
  },
  parameters: {
    backgrounds: {
      default: 'Light'
    }
  },
  play: async ({ canvasElement, step }) => {
    const canvas = within(canvasElement)

    await step('Dark in src', () => {
      const logo = canvas.getByRole('img', { name: 'Won Games' })
      expect(logo.getAttribute('src')).toContain('dark')
    })
  }
}

export const Icon: Story = {
  args: {
    variant: 'icon'
  },
  play: async ({ canvasElement, step }) => {
    const canvas = within(canvasElement)

    await step('Icon in src', () => {
      const logo = canvas.getByRole('img', { name: 'Won Games' })
      expect(logo.getAttribute('src')).toContain('icon')
    })
  }
}
