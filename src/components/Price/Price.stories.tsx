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
  tags: ['autodocs'],
  parameters: {
    layout: 'centered'
  }
}

export default meta

type Story = StoryObj<typeof PriceComponent>

export const Default: Story = {
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)
    const price = canvas.getByLabelText('price')

    expect(price).toHaveStyle({
      'background-color': theme.colors.secondary,
      color: theme.colors.white
    })
  }
}

export const Promotional: Story = {
  args: {
    promotionalPrice: 185
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)
    const oldPrice = canvas.getByLabelText('price')
    const promotionalPrice = canvas.getByLabelText('promotional price')

    expect(oldPrice).toHaveStyle({
      color: theme.colors.gray,
      'text-decoration-line': 'line-through'
    })
    expect(promotionalPrice).toHaveStyle({
      'background-color': theme.colors.secondary,
      color: theme.colors.white
    })

    // size small as default
    expect(oldPrice).toHaveStyle({
      height: remToPx('2.2rem'),
      fontSize: remToPx(theme.font.sizes.small)
    })
    expect(promotionalPrice).toHaveStyle({
      height: remToPx('2.2rem'),
      fontSize: remToPx(theme.font.sizes.small)
    })
  }
}

export const Large: Story = {
  args: {
    promotionalPrice: 185,
    size: 'large'
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)
    const oldPrice = canvas.getByLabelText('price')
    const promotionalPrice = canvas.getByLabelText('promotional price')

    expect(oldPrice).toHaveStyle({
      height: remToPx('3.8rem'),
      fontSize: remToPx(theme.font.sizes.xlarge)
    })
    expect(promotionalPrice).toHaveStyle({
      height: remToPx('3.8rem'),
      fontSize: remToPx(theme.font.sizes.xlarge)
    })
  }
}

export const Free: Story = {
  args: {
    price: 0
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)
    const price = canvas.getByLabelText('price')

    expect(price).toContainHTML('Free')
  }
}
