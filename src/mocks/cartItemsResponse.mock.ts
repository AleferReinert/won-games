import { MockedResponse } from '@apollo/client/testing'
import { PRODUCTS } from 'graphql/queries/products'

export const cartItemsResponseMock: MockedResponse = {
  request: {
    query: PRODUCTS,
    variables: {
      filters: { id: { in: ['2', '4'] } }
    }
  },
  result: {
    data: {
      products: {
        data: [
          {
            id: '2',
            attributes: {
              cover: {
                data: {
                  attributes: {
                    url: '/img/test/product.jpg'
                  }
                }
              },
              developers: {
                data: []
              },
              name: 'Population Zero',
              price: 89,
              slug: 'population-zero'
            }
          },
          {
            id: '4',
            attributes: {
              cover: {
                data: {
                  attributes: {
                    url: '/img/test/product.jpg'
                  }
                }
              },
              developers: {
                data: [
                  {
                    attributes: {
                      name: '4A Games'
                    }
                  }
                ]
              },
              name: 'Borderlands 2',
              price: 129,
              slug: 'borderlands-2'
            }
          }
        ],
        meta: {
          pagination: {
            total: 2
          }
        }
      }
    }
  }
}
