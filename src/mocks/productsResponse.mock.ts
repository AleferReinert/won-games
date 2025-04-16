import { MockedResponse } from '@apollo/client/testing'
import { PRODUCTS } from 'graphql/queries/products'
import { productsLimit } from 'pages/products'
import { ProductsQuery } from 'types/generated'

export const productsResponseMock: MockedResponse<ProductsQuery> = {
  request: {
    query: PRODUCTS,
    variables: {
      limit: productsLimit,
      filters: { price: {}, and: [] }
    }
  },
  result: {
    data: {
      products: {
        data: [
          {
            id: '3',
            attributes: {
              cover: {
                data: {
                  attributes: {
                    url: '/img/product-test.jpg'
                  }
                }
              },
              developers: {
                data: [
                  {
                    attributes: {
                      name: 'Troika Games'
                    }
                  }
                ]
              },
              name: 'The Legend of Zelda: Breath of the Wild',
              price: 24,
              slug: 'the-legend-of-zelda-breath-of-the-wild'
            }
          },
          {
            id: '2',
            attributes: {
              cover: {
                data: {
                  attributes: {
                    url: '/img/product-test.jpg'
                  }
                }
              },
              developers: {
                data: [
                  {
                    attributes: {
                      name: 'Troika Games'
                    }
                  }
                ]
              },
              name: 'Vampire: The Masquerade – Bloodlines',
              price: 99,
              slug: 'vampire-the-masquerade-bloodlines'
            }
          },
          {
            id: '1',
            attributes: {
              cover: {
                data: {
                  attributes: {
                    url: '/img/product-test.jpg'
                  }
                }
              },
              developers: {
                data: [
                  {
                    attributes: {
                      name: 'inXile Entertainment'
                    }
                  }
                ]
              },
              name: 'Wasteland 3 Colorado Collection',
              price: 49,
              slug: 'wasteland-3-colorado-collection'
            }
          }
        ],
        meta: {
          pagination: {
            total: 4
          }
        }
      }
    }
  }
}
