import { MockedProvider } from '@apollo/client/testing'
import type { Meta, StoryObj } from '@storybook/react'
import { expect, within } from '@storybook/test'
import { WishlistContext } from 'contexts/WishlistContext'
import { highlightMock } from 'mocks/highlight.mock'
import { nextAuthSessionMock } from 'mocks/nextAuthSession.mock'
import { productsMock } from 'mocks/products.mock'
import { wishlistContextMock } from 'mocks/wishlistContext.mock'
import { wishlistEmptyResponseMock } from 'mocks/wishlistEmptyResponse.mock'
import { wishlistResponseMock } from 'mocks/wishlistResponse.mock'
import DefaultTemplate from 'templates/Default/Default'
import { apolloCache } from 'utils/apolloCache'
import WishlistPage from '.'
import { NextAuthSessionArgs } from '../../../.storybook/preview'

const meta: Meta<typeof WishlistPage> & { args?: NextAuthSessionArgs } = {
  title: 'Pages/Wishlist',
  component: WishlistPage,
  args: {
    nextAuthSession: nextAuthSessionMock,
    recommendedShowcase: {
      title: 'Recommended',
      highlight: highlightMock,
      products: productsMock
    }
  },
  parameters: {
    layout: 'fullscreen',
    options: {
      showPanel: false
    }
  },
  decorators: [
    (Story) => (
      <DefaultTemplate>
        <Story />
      </DefaultTemplate>
    )
  ]
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
    const wishlistPageComponent = within(canvas.getByTestId('WishlistPageComponent'))

    await step('Page title as h1', () => {
      const title = canvas.getByRole('heading', { name: 'Wishlist', level: 1 })
      expect(title).toBeVisible()
    })

    await step('Empty component', () => {
      const emptyComponent = wishlistPageComponent.getByTestId('EmptyComponent')
      expect(emptyComponent).toBeVisible()
    })

    step('Required recommended section: title, highlight and products', () => {
      const title = wishlistPageComponent.getByRole('heading', { name: 'Recommended', level: 2 })
      const highlight = wishlistPageComponent.getByTestId('HighlightComponent')
      const products = wishlistPageComponent.getByTestId('ProductSliderComponent')

      expect(title).toBeVisible()
      expect(highlight).toBeVisible()
      expect(products).toBeVisible()
    })
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
