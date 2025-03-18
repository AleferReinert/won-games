import type { Meta, StoryObj } from '@storybook/react'
import { expect, within } from '@storybook/test'
import Container from 'components/Container/Container'
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
      <Container>
        <Story />
      </Container>
    )
  ],
  parameters: {
    viewport: {
      defaultViewport: 'large'
    }
  }
}
export default meta

type Story = StoryObj<typeof ProductSliderComponent>

export const Default: Story = {
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)
    const items = canvas.getAllByRole('heading', { name: /population zero/i })

    expect(items.length).toBeGreaterThanOrEqual(2)

    // todo: not working in terminal
    // const nextIcon = await waitFor(() =>
    //   canvas.getByRole('img', { name: /next games/i })
    // )
    // expect(nextIcon).toHaveStyle({ fill: theme.colors.white })
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
  }
  // play: async ({ canvasElement }) => {
  // const canvas = within(canvasElement)
  // todo: not working in terminal
  // const nextIcon = await waitFor(() =>
  //   canvas.getByRole('img', {
  //     name: /next games/i
  //   })
  // )
  // expect(nextIcon).toHaveStyle({ fill: theme.colors['black'] })
  // }
}
