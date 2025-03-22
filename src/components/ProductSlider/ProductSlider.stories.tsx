import type { Meta, StoryObj } from '@storybook/react'
import { expect, waitFor, within } from '@storybook/test'
import Container from 'components/Container/Container'
import theme from 'styles/theme'
import { productsMock } from '../../mocks/products.mock'
import ProductSliderComponent from './ProductSlider'

const meta: Meta<typeof ProductSliderComponent> = {
  title: 'Components/ProductSlider',
  component: ProductSliderComponent,
  args: { products: productsMock },
  argTypes: {
    products: {
      table: { disable: true }
    }
  },
  decorators: [
    (Story) => (
      <Container style={{ padding: '20px 0' }}>
        <Story />
      </Container>
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

type Story = StoryObj<typeof ProductSliderComponent>

export const Default: Story = {
  play: async ({ canvasElement, step }) => {
    const canvas = within(canvasElement)

    await step('Multiple items', () => {
      const items = canvas.getAllByRole('heading', { name: /population zero/i })
      expect(items.length).toBeGreaterThanOrEqual(2)
    })

    await step('ArrowColor white', async () => {
      const nextIcon = await waitFor(() => canvas.getByRole('img', { name: 'Next games', hidden: true }))
      expect(nextIcon).toHaveStyle({ fill: theme.colors.white })
    })
  }
}

export const ArrowBlack: Story = {
  args: {
    $arrowColor: 'black'
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
      expect(nextIcon).toHaveStyle({ fill: theme.colors.black })
    })
  }
}
