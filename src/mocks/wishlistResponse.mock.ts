// src/mocks/wishlistResponse.mock.ts
import { MockedResponse } from '@apollo/client/testing'
import { WISHLIST } from 'graphql/queries/wishlist'

export const wishlistResponseMock: MockedResponse<{
  wishlists: {
    data: Array<{
      id: string
      attributes: {
        products: {
          data: Array<{
            id: string
            attributes: {
              slug: string
              cover: {
                data: {
                  attributes: {
                    url: string
                    alternativeText: string
                  }
                }
              }
              name: string
              developers: {
                data: Array<{
                  attributes: {
                    name: string
                  }
                }>
              }
              price: number
            }
          }>
        }
      }
    }>
  }
}> = {
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
                            url: '/uploads/wasteland_3_colorado_collection_fcbc522edb_f447fafd45.jpg',
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
                      price: 49
                    }
                  },
                  {
                    id: '2',
                    attributes: {
                      slug: 'god-of-war',
                      cover: {
                        data: {
                          attributes: {
                            url: '/uploads/god-of-war.jpg',
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
                      price: 30
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
