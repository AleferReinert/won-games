import type { Meta, StoryObj } from '@storybook/react'
import { expect, waitFor, within } from '@storybook/test'
import { companyHandler } from 'mocks/handlers/companyHandler'
import { recommendedProductsHandler } from 'mocks/handlers/recommendedProductsHandler'
import SuccessPage from './page'

const meta: Meta<typeof SuccessPage> = {
  title: 'Pages/Success',
  component: SuccessPage,
  parameters: {
    layout: 'fullscreen',
    msw: {
      handlers: [companyHandler, recommendedProductsHandler]
    }
  },
  tags: ['!dev', '!test']
}

export default meta

type Story = StoryObj<typeof SuccessPage>

export const Success: Story = {
  play: async ({ canvasElement, step }) => {
    const canvas = within(canvasElement)

    await step('Heading', () => {
      waitFor(() => {
        const heading = canvas.getByRole('heading', { level: 1 })
        expect(heading).toHaveTextContent('Your purchase was successful!')
      })
    })

    await step('Description', () => {
      const description = waitFor(() =>
        canvas.getByText('Save your payment details by email. Your game is now available for download here.')
      )
      expect(description).toBeVisible()
    })

    await step('Link to account/orders', () => {
      const link = canvas.getByRole('link', { name: 'here' })
      expect(link).toHaveAttribute('href', '/account/orders')
    })

    // await step('Section you may like these products: title, highlight and products', () => {
    //   const title = canvas.getByRole('heading', { name: 'You may like these games', level: 2 })
    //   const highlight = canvas.getByTestId('HighlightComponent')
    //   const products = canvas.getByTestId('ProductSliderComponent')
    //   expect(title).toBeVisible()
    //   expect(highlight).toBeVisible()
    //   expect(products).toBeVisible()
    // })
  }
}
