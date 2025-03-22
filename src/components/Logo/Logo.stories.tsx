import type { Meta, StoryObj } from '@storybook/react'
import { expect, within } from '@storybook/test'
import { remToPx } from 'polished'
import theme from 'styles/theme'
import Logo from './Logo'

const meta: Meta<typeof Logo> = {
  title: 'Components/Atoms/Logo',
  component: Logo,
  parameters: {
    layout: 'centered'
  },
  tags: ['autodocs']
}

export default meta

type Story = StoryObj<typeof Logo>

export const Default: Story = {
  play: async ({ canvasElement, step }) => {
    const canvas = within(canvasElement)

    await step('Color white', () => {
      const logo = canvas.getByRole('img', { name: 'Won Games' })
      expect(logo).toHaveStyle({ color: theme.colors.white })
    })

    await step('Size medium', () => {
      const wrapper = canvas.getByTestId('LogoComponent')
      expect(wrapper).toHaveStyle({ width: remToPx('11rem') })
    })
  }
}

export const Black: Story = {
  args: {
    color: 'black'
  },
  parameters: {
    backgrounds: {
      default: 'Light'
    }
  },
  play: async ({ canvasElement, step }) => {
    const canvas = within(canvasElement)

    await step('Color black', () => {
      const logo = canvas.getByRole('img', { name: 'Won Games' })
      expect(logo).toHaveStyle({ color: theme.colors.black })
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
      expect(wrapper).toHaveStyle({ width: remToPx('5.8rem') })
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
        width: remToPx('20rem')
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

    await step('Logo visible', () => {
      const wrapper = canvas.getByTestId('LogoComponent')
      expect(wrapper).toBeVisible()
    })

    await step('Text not visible', () => {
      const text = canvas.getByTestId('LogoText')
      expect(text).not.toBeVisible()
    })
  }
}
