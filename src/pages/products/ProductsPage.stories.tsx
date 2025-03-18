import { MockedProvider } from '@apollo/client/testing'
import type { Meta, StoryObj } from '@storybook/react'
import { expect, waitFor, within } from '@storybook/test'
import { emptyProductsResponseMock } from 'mocks/emptyProductsResponse.mock'
import { filterMock } from 'mocks/filter.mock'
import { moreProductsResponseMock } from 'mocks/moreProductsResponse.mock'
import { productsResponseMock } from 'mocks/productsResponse.mock'
import DefaultTemplate from 'templates/Default/Default'
import { apolloCache } from 'utils/apolloCache'
import ProductsPage, { productsLimit } from '.'

const meta: Meta<typeof ProductsPage> = {
  title: 'Pages/Products',
  component: ProductsPage,
  args: {
    filterOptions: filterMock
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

type Story = StoryObj<typeof ProductsPage>

export const Empty: Story = {
  decorators: (Story) => (
    <MockedProvider mocks={[emptyProductsResponseMock]}>
      <Story />
    </MockedProvider>
  ),
  play: async ({ canvasElement, step }) => {
    const canvas = within(canvasElement)
    const productsPage = within(canvas.getByTestId('ProductsPage'))

    await step('FilterComponent', () => {
      const filterComponent = productsPage.getByTestId('FilterComponent')
      expect(filterComponent).toBeVisible()
    })

    await step('EmptyComponent', () => {
      const emptyComponent = productsPage.getByTestId('FilterComponent')
      expect(emptyComponent).toBeVisible()
    })
  }
}

export const WithProducts: Story = {
  decorators: (Story) => (
    <MockedProvider mocks={[productsResponseMock, moreProductsResponseMock]} cache={apolloCache}>
      <Story />
    </MockedProvider>
  ),
  play: async ({ canvasElement, step }) => {
    const canvas = within(canvasElement)

    await step(`First ${productsLimit} products on load page`, () => {
      const firstProducts = canvas.getAllByTestId('ProductComponent')
      expect(firstProducts).toHaveLength(productsLimit)
    })

    await step('Show more products on click button Show More', async () => {
      const buttonShowMore = await waitFor(() => canvas.getByRole('button', { name: /show more/i }))
      buttonShowMore.click()

      await waitFor(() => {
        const moreProducts = canvas.getAllByTestId('ProductComponent')
        expect(moreProducts).toHaveLength(productsLimit * 2)
      })
    })

    await step('Hidden Show more button on all products loaded', async () => {
      const buttonShowMore = await waitFor(() => canvas.queryByRole('button', { name: /show more/i }))
      await expect(buttonShowMore).not.toBeInTheDocument()
    })
  }
}
