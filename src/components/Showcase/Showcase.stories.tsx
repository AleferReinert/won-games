import type { Meta, StoryObj } from '@storybook/react'
import { expect, within } from '@storybook/test'
import Container from 'components/Container/Container'
import { highlightMock } from 'mocks/highlight.mock'
import { productsMock } from 'mocks/products.mock'
import ShowcaseComponent from './Showcase'

const meta: Meta<typeof ShowcaseComponent> = {
  title: 'Components/Showcase',
  component: ShowcaseComponent,
  argTypes: {
    highlight: {
      control: 'boolean',
      mapping: {
        true: highlightMock
      }
    },
    products: {
      control: 'boolean',
      mapping: {
        true: productsMock
      }
    }
  },
  decorators: [
    (Story) => (
      <div style={{ padding: '20px 0' }}>
        <Container>
          <Story />
        </Container>
      </div>
    )
  ],
  tags: ['autodocs']
}

export default meta

type Story = StoryObj<typeof ShowcaseComponent>

export const Title: Story = {
  args: {
    title: 'Most populars'
  },
  play: async ({ canvasElement, step }) => {
    const canvas = within(canvasElement)

    await step('HeadingComponent', () => {
      const HeadingComponent = canvas.getByTestId('HeadingComponent')
      expect(HeadingComponent).toBeVisible()
    })
  }
}

export const Highlight: Story = {
  args: {
    highlight: highlightMock
  },
  play: async ({ canvasElement, step }) => {
    const canvas = within(canvasElement)

    await step('HighlightComponent', () => {
      const HighlightComponent = canvas.getByTestId('HighlightComponent')
      expect(HighlightComponent).toBeVisible()
    })
  }
}

export const Products: Story = {
  args: {
    products: productsMock
  },
  parameters: {
    viewport: {
      defaultViewport: 'large'
    }
  },
  play: async ({ canvasElement, step }) => {
    const canvas = within(canvasElement)

    await step('ProductSliderComponent', () => {
      const ProductSliderComponent = canvas.getByTestId('ProductSliderComponent')
      expect(ProductSliderComponent).toBeVisible()
    })
  }
}
