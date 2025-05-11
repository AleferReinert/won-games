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
      wishlists: {
        data: [
          {
            id: '40',
            attributes: {
              products: {
                data: [
                  {
                    id: '1',
                    attributes: {
                      slug: 'wasteland-3-colorado-collection',
                      cover: {
                        data: {
                          attributes: {
                            url: '/img/test/product.jpg',
                            alternativeText: ''
                          }
                        }
                      },
                      name: 'Wasteland 3 Colorado Collection',
                      developers: {
                        data: [
                          {
                            attributes: {
                              name: 'inXile Entertainment'
                            }
                          }
                        ]
                      },
                      price: 49,
                      promotional_price: 30,
                      ribbon_label: '20% off'
                    }
                  },
                  {
                    id: '2',
                    attributes: {
                      slug: 'god-of-war',
                      cover: {
                        data: {
                          attributes: {
                            url: '/img/test/product.jpg',
                            alternativeText: ''
                          }
                        }
                      },
                      name: 'God of War',
                      developers: {
                        data: [
                          {
                            attributes: {
                              name: 'Santa Monica Studio'
                            }
                          }
                        ]
                      },
                      price: 30,
                      promotional_price: 0,
                      ribbon_label: ''
                    }
                  }
                ]
              }
            }
          }
        ]
      }
    }
  }
}
