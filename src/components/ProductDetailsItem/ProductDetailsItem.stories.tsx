import type { Meta, StoryObj } from '@storybook/react'
import { expect, within } from '@storybook/test'
import { ProductDetailsItem } from './ProductDetailsItem'

const meta: Meta<typeof ProductDetailsItem> = {
  title: 'Components/Atoms/ProductDetailsItem',
  component: ProductDetailsItem,
  args: {
    title: 'Custom title',
    children: <p>Custom children</p>
  },
  parameters: {
    layout: 'padded'
  }
}

export default meta

type Story = StoryObj<typeof ProductDetailsItem>

export const Default: Story = {
  name: 'ProductDetailsItem',
  play: async ({ canvasElement, step }) => {
    const canvas = within(canvasElement)

    await step('Title', () => {
      const title = canvas.getByText('Custom title')
      expect(title).toBeVisible()
    })

    await step('Children', () => {
      const children = canvas.getByText('Custom children')
      expect(children).toBeVisible()
    })
  }
}
