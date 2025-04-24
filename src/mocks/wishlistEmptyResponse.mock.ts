import { MockedResponse } from '@apollo/client/testing'
import { WISHLIST } from 'graphql/queries/wishlist'
import { WishlistQuery } from 'types/generated'

export const wishlistEmptyResponseMock: MockedResponse<WishlistQuery> = {
  request: {
    query: WISHLIST
  },
  result: {
    data: {
      wishlists: {
        data: []
      }
    }
  }
}
