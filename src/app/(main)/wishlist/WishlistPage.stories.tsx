import { MockedProvider } from '@apollo/client/testing'
import type { Meta, StoryObj } from '@storybook/react'
import { expect, waitFor, within } from '@storybook/test'
import { WishlistContext } from 'contexts/WishlistContext'
import { companyHandler } from 'mocks/handlers/companyHandler'
import { recommendedProductsHandler } from 'mocks/handlers/recommendedProductsHandler'
import { nextAuthSessionMock } from 'mocks/nextAuthSession.mock'
import { wishlistContextMock } from 'mocks/wishlistContext.mock'
import { wishlistEmptyResponseMock } from 'mocks/wishlistEmptyResponse.mock'
import { wishlistResponseMock } from 'mocks/wishlistResponse.mock'
import { apolloCache } from 'utils/apolloCache'
import { NextAuthSessionArgs } from '../../../../.storybook/preview'
import WishlistPage from './page'

const meta: Meta<typeof WishlistPage> & { args?: NextAuthSessionArgs } = {
  title: 'Pages/Wishlist',
  component: WishlistPage,
  args: {
    nextAuthSession: nextAuthSessionMock
  },
  parameters: {
    layout: 'padded',
    msw: {
      handlers: [companyHandler, recommendedProductsHandler]
    },
    options: {
      showPanel: false
    }
  },
  tags: ['!dev', '!test']
}

export default meta

type Story = StoryObj<typeof WishlistPage>

export const Empty: Story = {
  decorators: [
    (Story) => (
      <WishlistContext.Provider value={{ ...wishlistContextMock, products: [] }}>
        <MockedProvider mocks={[wishlistEmptyResponseMock]} cache={apolloCache}>
          <Story />
        </MockedProvider>
      </WishlistContext.Provider>
    )
  ],
  play: async ({ canvasElement, step }) => {
    const canvas = within(canvasElement)
    const wishlistPageComponent = await waitFor(() => within(canvas.getByTestId('WishlistPage')))

    // await step('Page title as h1', () => {
    //   const title = canvas.getByRole('heading', { name: 'Wishlist', level: 1 })
    //   expect(title).toBeVisible()
    // })

    await step('Empty component', () => {
      const emptyComponent = wishlistPageComponent.getByTestId('EmptyComponent')
      expect(emptyComponent).toBeVisible()
    })

    // step('Required recommended section: title, highlight and products', () => {
    //   const title = wishlistPageComponent.getByRole('heading', { name: 'Recommended', level: 2 })
    //   const highlight = wishlistPageComponent.getByTestId('HighlightComponent')
    //   const products = wishlistPageComponent.getByTestId('ProductSliderComponent')

    //   expect(title).toBeVisible()
    //   expect(highlight).toBeVisible()
    //   expect(products).toBeVisible()
    // })
  }
}

export const WithProducts: Story = {
  decorators: [
    (Story) => (
      <WishlistContext.Provider value={wishlistContextMock}>
        <MockedProvider mocks={[wishlistResponseMock]} cache={apolloCache}>
          <Story />
        </MockedProvider>
      </WishlistContext.Provider>
    )
  ],
  play: ({ canvasElement, step }) => {
    const canvas = within(canvasElement)
    const wrapperWishlist = within(canvas.getByRole('heading', { name: 'Wishlist', level: 1 }).parentElement!)
    const products = wrapperWishlist.queryAllByTestId('ProductComponent')

    step('Products', () => {
      expect(products.length).toBeGreaterThan(0)
    })
  }
}
