import type { Meta, StoryObj } from '@storybook/react'
import { expect, within } from '@storybook/test'
import { remToPx } from 'polished'
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

    await step('Size medium', () => {
      const wrapper = canvas.getByTestId('LogoComponent')
      expect(wrapper).toHaveStyle({ width: remToPx('11.1rem') })
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

export const Small: Story = {
  args: {
    size: 'small'
  },
  play: async ({ canvasElement, step }) => {
    const canvas = within(canvasElement)

    await step('Size small', () => {
      const wrapper = canvas.getByTestId('LogoComponent')
      expect(wrapper).toHaveStyle({ width: remToPx('6rem') })
    })
  }
}

export const Large: Story = {
  args: {
    size: 'large'
  },
  play: async ({ canvasElement, step }) => {
    const canvas = within(canvasElement)

    await step('Size large', () => {
      const wrapper = canvas.getByTestId('LogoComponent')
      expect(wrapper).toHaveStyle({
        width: remToPx('20.3rem')
      })
    })
  }
}

export const WithoutText: Story = {
  args: {
    $withoutText: true
  },
  play: async ({ canvasElement, step }) => {
    const canvas = within(canvasElement)

    await step('Width 42px', () => {
      const wrapper = canvas.getByTestId('LogoComponent')
      expect(wrapper).toHaveStyle({
        width: remToPx('4.2rem')
      })
    })
  }
}
