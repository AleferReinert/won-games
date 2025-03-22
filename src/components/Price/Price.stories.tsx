import type { Meta, StoryObj } from '@storybook/react'
import { expect, within } from '@storybook/test'
import { remToPx } from 'polished'
import theme from 'styles/theme'
import PriceComponent from './Price'

const meta: Meta<typeof PriceComponent> = {
  title: 'Components/Atoms/Price',
  component: PriceComponent,
  args: {
    price: 215
  },
  parameters: {
    layout: 'centered'
  },
  tags: ['autodocs']
}

export default meta

type Story = StoryObj<typeof PriceComponent>

export const Default: Story = {
  play: async ({ canvasElement, step }) => {
    const canvas = within(canvasElement)
    const price = canvas.getByLabelText('Price')

    await step('Price with background secondary and color white', () => {
      expect(price).toHaveStyle({
        'background-color': theme.colors.secondary,
        color: theme.colors.white
      })
    })

    await step('Size small', () => {
      expect(price).toHaveStyle({
        height: remToPx('2.2rem'),
        fontSize: remToPx(theme.font.sizes.small)
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
      expect(oldPrice).toHaveStyle({
        color: theme.colors.gray,
        'text-decoration-line': 'line-through'
      })
    })

    await step('Promotional price with background secondary and color white', () => {
      expect(promotionalPrice).toHaveStyle({
        'background-color': theme.colors.secondary,
        color: theme.colors.white
      })
    })

    await step('Promotional price small', () => {
      expect(promotionalPrice).toHaveStyle({
        height: remToPx('2.2rem'),
        fontSize: remToPx(theme.font.sizes.small)
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
        height: remToPx('3.8rem'),
        fontSize: remToPx(theme.font.sizes.xlarge)
      })
    })

    await step('Promotional price large', () => {
      const promotionalPrice = canvas.getByLabelText('Promotional price')
      expect(promotionalPrice).toHaveStyle({
        height: remToPx('3.8rem'),
        fontSize: remToPx(theme.font.sizes.xlarge)
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
