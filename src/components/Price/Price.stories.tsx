import type { Meta, StoryObj } from '@storybook/react'
import { expect, within } from '@storybook/test'
import { Price } from './Price'

const meta: Meta<typeof Price> = {
  title: 'Components/Atoms/Price',
  component: Price,
  args: {
    price: 215
  },
  parameters: {
    layout: 'centered'
  },
  tags: ['autodocs']
}

export default meta

type Story = StoryObj<typeof Price>

export const Default: Story = {
  name: 'Small (default)',
  play: async ({ canvasElement, step }) => {
    const canvas = within(canvasElement)
    const price = canvas.getByLabelText('Price')

    await step('Price with background secondary and color white', () => {
      expect(price).toHaveClass('bg-theme-secondary text-zinc-50')
    })

    await step('Size small', () => {
      expect(price).toHaveStyle({
        height: '22px',
        fontSize: '14px'
      })
    })
  }
}

export const Promotional: Story = {
  args: {
    promotionalPrice: 185
  },
  play: async ({ canvasElement, step }) => {
    const canvas = within(canvasElement)
    const promotionalPrice = canvas.getByLabelText('Promotional price')

    await step('Old price with color gray and line-through', () => {
      const oldPrice = canvas.getByLabelText('Price')
      expect(oldPrice).toHaveClass('text-theme-gray-500 line-through')
    })

    await step('Promotional price with background secondary and color white', () => {
      expect(promotionalPrice).toHaveClass('bg-theme-secondary text-zinc-50')
    })

    await step('Promotional price small', () => {
      expect(promotionalPrice).toHaveStyle({
        height: '22px',
        fontSize: '14px'
      })
    })
  }
}

export const Medium: Story = {
  args: {
    promotionalPrice: 185,
    size: 'medium'
  },
  play: async ({ canvasElement, step }) => {
    const canvas = within(canvasElement)

    await step('Old price medium', () => {
      const oldPrice = canvas.getByLabelText('Price')
      expect(oldPrice).toHaveStyle({
        height: '33px',
        fontSize: '16px'
      })
    })

    await step('Promotional price medium', () => {
      const promotionalPrice = canvas.getByLabelText('Promotional price')
      expect(promotionalPrice).toHaveStyle({
        height: '33px',
        fontSize: '16px'
      })
    })
  }
}

export const Large: Story = {
  args: {
    promotionalPrice: 185,
    size: 'large'
  },
  play: async ({ canvasElement, step }) => {
    const canvas = within(canvasElement)

    await step('Old price large', () => {
      const oldPrice = canvas.getByLabelText('Price')
      expect(oldPrice).toHaveStyle({
        height: '38px',
        fontSize: '20px'
      })
    })

    await step('Promotional price large', () => {
      const promotionalPrice = canvas.getByLabelText('Promotional price')
      expect(promotionalPrice).toHaveStyle({
        height: '38px',
        fontSize: '20px'
      })
    })
  }
}

export const Free: Story = {
  args: {
    price: 0
  },
  play: async ({ canvasElement, step }) => {
    const canvas = within(canvasElement)

    await step('Free', () => {
      const price = canvas.getByLabelText('Price')
      expect(price).toContainHTML('Free')
    })
  }
}
