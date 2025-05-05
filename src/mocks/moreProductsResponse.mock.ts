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
                    url: '/img/product-test.jpg',
                    alternativeText: ''
                  }
                }
              },
              developers: {
                data: []
              },
              name: 'Cyberpunk 2077',
              price: 24,
              slug: 'cyberpunk-2077',
              promotional_price: 0,
              ribbon_label: ''
            }
          },
          {
            id: '5',
            attributes: {
              cover: {
                data: {
                  attributes: {
                    url: '/img/product-test.jpg',
                    alternativeText: ''
                  }
                }
              },
              developers: {
                data: []
              },
              name: 'Red Dead Redemption 2',
              price: 40,
              slug: 'red-dead-redemption-2',
              promotional_price: 0,
              ribbon_label: ''
            }
          },
          {
            id: '6',
            attributes: {
              cover: {
                data: {
                  attributes: {
                    url: '/img/product-test.jpg',
                    alternativeText: ''
                  }
                }
              },
              developers: {
                data: []
              },
              name: 'Horizon Zero Dawn',
              price: 35,
              slug: 'horizon-zero-dawn',
              promotional_price: 0,
              ribbon_label: ''
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
