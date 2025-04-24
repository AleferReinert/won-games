// src\mocks\moreProductsResponse.mock.ts
import { MockedResponse } from '@apollo/client/testing'
import { PRODUCTS } from 'graphql/queries/products'
import { productsLimit } from 'pages/products'
import { ProductsQuery } from 'types/generated'

export const moreProductsResponseMock: MockedResponse<ProductsQuery> = {
  request: {
    query: PRODUCTS,
    variables: {
      limit: productsLimit,
      start: 9,
      filters: { price: {}, and: [] }
    }
  },
  result: {
    data: {
      products: {
        data: [
          {
            id: '4',
            attributes: {
              cover: {
                data: {
                  attributes: {
                    url: '/img/product-test.jpg'
                  }
                }
              },
              developers: {
                data: []
              },
              name: 'Cyberpunk 2077',
              price: 24,
              slug: 'cyberpunk-2077'
            }
          },
          {
            id: '5',
            attributes: {
              cover: {
                data: {
                  attributes: {
                    url: '/img/product-test.jpg'
                  }
                }
              },
              developers: {
                data: []
              },
              name: 'Red Dead Redemption 2',
              price: 40,
              slug: 'red-dead-redemption-2'
            }
          },
          {
            id: '6',
            attributes: {
              cover: {
                data: {
                  attributes: {
                    url: '/img/product-test.jpg'
                  }
                }
              },
              developers: {
                data: []
              },
              name: 'Horizon Zero Dawn',
              price: 35,
              slug: 'horizon-zero-dawn'
            }
          }
        ],
        meta: {
          pagination: {
            total: 12
          }
        }
      }
    }
  }
}
