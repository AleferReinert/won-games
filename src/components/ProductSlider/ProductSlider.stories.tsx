import type { Meta, StoryObj } from '@storybook/react'
import { expect, waitFor, within } from '@storybook/test'
import { getTailwindValue } from 'utils/getTailwindValue'
import { productsMock } from '../../mocks/products.mock'
import { ProductSlider } from './ProductSlider'

const meta: Meta<typeof ProductSlider> = {
  title: 'Components/ProductSlider',
  component: ProductSlider,
  args: { products: productsMock },
  argTypes: {
    products: {
      table: { disable: true }
    }
  },
  decorators: [
    (Story) => (
      <div className='my-5'>
        <Story />
      </div>
    )
  ],
  parameters: {
    viewport: {
      defaultViewport: 'large'
    }
  },
  tags: ['autodocs']
}
export default meta

type Story = StoryObj<typeof ProductSlider>

export const Default: Story = {
  play: async ({ canvasElement, step }) => {
    const canvas = within(canvasElement)

    await step('Multiple items', () => {
      const items = canvas.getAllByRole('heading', { name: /population zero/i })
      expect(items.length).toBeGreaterThanOrEqual(2)
    })

    await step('ArrowColor white', async () => {
      const nextIcon = await waitFor(() => canvas.getByRole('img', { name: 'Next games', hidden: true }))
      expect(nextIcon).toHaveStyle({ fill: getTailwindValue('--color-zinc-50') })
    })
  }
}

export const ArrowBlack: Story = {
  args: {
    arrowColor: 'black'
  },
  parameters: {
    backgrounds: {
      default: 'Light'
    }
  },
  play: async ({ canvasElement, step }) => {
    const canvas = within(canvasElement)

    await step('ArrowColor black', async () => {
      const nextIcon = await waitFor(() => canvas.getByRole('img', { name: 'Next games', hidden: true }))
      expect(nextIcon).toHaveStyle({ fill: getTailwindValue('--color-theme-gray-950') })
    })
  }
}
