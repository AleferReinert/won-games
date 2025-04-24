import type { Meta, StoryObj } from '@storybook/react'
import { expect, within } from '@storybook/test'
import { highlightMock } from 'mocks/highlight.mock'
import { productsMock } from 'mocks/products.mock'
import DefaultTemplate from 'templates/Default/Default'
import SuccessPage from './index'

const meta: Meta<typeof SuccessPage> = {
  title: 'Pages/Success',
  component: SuccessPage,
  args: {
    recommendedShowcase: {
      title: 'You may like these games',
      highlight: highlightMock,
      products: productsMock
    }
  },
  decorators: [
    (Story) => (
      <DefaultTemplate>
        <Story />
      </DefaultTemplate>
    )
  ],
  parameters: {
    layout: 'fullscreen'
  }
}

export default meta

type Story = StoryObj<typeof SuccessPage>

export const Success: Story = {
  play: async ({ canvasElement, step }) => {
    const canvas = within(canvasElement)

    await step('Heading', () => {
      const heading = canvas.getByRole('heading', { level: 1 })
      expect(heading).toHaveTextContent('Your purchase was successful!')
    })

    await step('Description', () => {
      const description = canvas.getAllByRole('paragraph')[0]
      expect(description).toHaveTextContent(
        'Save your payment details by email. Your game is now available for download here.'
      )
    })

    await step('Link to account/orders', () => {
      const link = canvas.getByRole('link', { name: 'here' })
      expect(link).toHaveAttribute('href', '/account/orders')
    })

    await step('Section you may like these products: title, highlight and products', () => {
      const title = canvas.getByRole('heading', { name: 'You may like these games', level: 2 })
      const highlight = canvas.getByTestId('HighlightComponent')
      const products = canvas.getByTestId('ProductSliderComponent')
      expect(title).toBeVisible()
      expect(highlight).toBeVisible()
      expect(products).toBeVisible()
    })
  }
}
