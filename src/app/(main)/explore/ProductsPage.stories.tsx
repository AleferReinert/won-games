import { MockedProvider } from '@apollo/client/testing'
import type { Meta, StoryObj } from '@storybook/react'
import { expect, waitFor, within } from '@storybook/test'
import { FilterContext } from 'contexts/FilterContext'
import { categoriesResponseMock } from 'mocks/categoriesResponseMock'
import { emptyProductsResponseMock } from 'mocks/emptyProductsResponse.mock'
import { filterContextMock } from 'mocks/filterContext.mock'
import { categoriesHandler } from 'mocks/handlers/categoriesHandler'
import { companyHandler } from 'mocks/handlers/companyHandler'
import { platformsHandler } from 'mocks/handlers/platformsHandler'
import { productsHandler } from 'mocks/handlers/productsHandler'
import { moreProductsResponseMock } from 'mocks/moreProductsResponse.mock'
import { platformsResponseMock } from 'mocks/platformsResponseMock'
import { productsResponseMock } from 'mocks/productsResponse.mock'
import MainLayout from '../layout'
import LayoutProducts from './layout'
import ExplorePage, { productsLimit } from './page'

const meta: Meta<typeof ExplorePage> = {
  title: 'Pages/Explore',
  component: ExplorePage,
  decorators: (Story) => (
    <MainLayout>
      <LayoutProducts searchParams={{}}>
        <Story />
      </LayoutProducts>
    </MainLayout>
  ),
  parameters: {
    layout: 'fullscreen',
    msw: {
      handlers: [companyHandler, productsHandler, platformsHandler, categoriesHandler]
    }
  }
}

export default meta

type Story = StoryObj<typeof ExplorePage>

export const Empty: Story = {
  decorators: (Story) => (
    <FilterContext.Provider value={filterContextMock}>
      <MockedProvider mocks={[emptyProductsResponseMock, platformsResponseMock, categoriesResponseMock]}>
        <Story />
      </MockedProvider>
    </FilterContext.Provider>
  ),
  play: async ({ canvasElement, step }) => {
    const canvas = within(canvasElement)
    const productsPage = await waitFor(() => within(canvas.getByTestId('ExplorePage')))

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
    <MockedProvider
      mocks={[productsResponseMock, moreProductsResponseMock, platformsResponseMock, categoriesResponseMock]}
    >
      <Story />
    </MockedProvider>
  ),
  play: async ({ canvasElement, step }) => {
    const canvas = within(canvasElement)

    await step(`First ${productsLimit} products on load page`, async () => {
      const firstProducts = await waitFor(() => canvas.getAllByTestId('ProductComponent'))
      expect(firstProducts).toHaveLength(productsLimit)
    })

    await step('Show more products on click button Show More', async () => {
      const buttonShowMore = await waitFor(() => canvas.getByRole('button', { name: /show more/i }))
      buttonShowMore.click()

      await waitFor(async () => {
        const moreProducts = await waitFor(() => canvas.getAllByTestId('ProductComponent'))
        expect(moreProducts).toHaveLength(12)
      })
    })

    await step('Hidden Show more button on all products loaded', async () => {
      const buttonShowMore = await waitFor(() => canvas.queryByRole('button', { name: /show more/i }))
      await expect(buttonShowMore).not.toBeInTheDocument()
    })
  }
}
