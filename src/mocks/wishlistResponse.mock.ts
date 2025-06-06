import { MockedResponse } from '@apollo/client/testing'
import { WISHLIST } from 'graphql/queries/wishlist'
import { WishlistQuery } from 'types/generated'

export const wishlistResponseMock: MockedResponse<WishlistQuery> = {
  request: {
    query: WISHLIST,
    variables: {
      userEmail: { eq: 'johndoe@example.com' }
    }
  },
  result: {
    data: {
      wishlists: [
        {
          documentId: '40',
          products: [
            {
              documentId: '1',
              slug: 'wasteland-3-colorado-collection',
              cover: {
                url: '/img/test/product.jpg',
                alternativeText: ''
              },
              name: 'Wasteland 3 Colorado Collection',
              developers: [{ name: 'inXile Entertainment' }],
              price: 49,
              promotional_price: 30,
              ribbon_label: '20% off'
            },
            {
              documentId: '2',
              slug: 'god-of-war',
              cover: {
                url: '/img/test/product.jpg',
                alternativeText: ''
              },
              name: 'God of War',
              developers: [
                {
                  name: 'Santa Monica Studio'
                }
              ],
              price: 30,
              promotional_price: 0,
              ribbon_label: ''
            }
          ]
        }
      ]
    }
  }
}
