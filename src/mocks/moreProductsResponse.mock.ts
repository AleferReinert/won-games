import { MockedResponse } from '@apollo/client/testing'
import { productsLimit } from 'app/(main)/explore/page'
import { PRODUCTS } from 'graphql/queries/products'
import { ProductsQuery } from 'types/generated'

export const moreProductsResponseMock: MockedResponse<ProductsQuery> = {
  request: {
    query: PRODUCTS,
    variables: {
      filters: { and: [] },
      limit: productsLimit,
      start: productsLimit
    }
  },
  result: {
    data: {
      products: [
        {
          documentId: '4',
          cover: {
            url: '/img/test/product.jpg',
            alternativeText: ''
          },
          developers: [
            {
              name: 'CD Projekt'
            }
          ],
          name: 'Cyberpunk 2077',
          price: 24,
          slug: 'cyberpunk-2077',
          ribbon_label: '',
          promotional_price: 0
        },
        {
          documentId: '5',
          cover: {
            url: '/img/test/product.jpg',
            alternativeText: ''
          },
          developers: [
            {
              name: 'Rockstar Games'
            }
          ],
          name: 'Red Dead Redemption 2',
          price: 40,
          slug: 'red-dead-redemption-2',
          ribbon_label: '',
          promotional_price: 0
        },
        {
          documentId: '6',
          cover: {
            url: '/img/test/product.jpg',
            alternativeText: ''
          },
          developers: [
            {
              name: 'Square Enix'
            }
          ],
          name: 'Horizon Zero Dawn',
          price: 35,
          slug: 'horizon-zero-dawn',
          ribbon_label: '',
          promotional_price: 0
        }
      ],
      products_connection: {
        pageInfo: {
          total: 12
        }
      }
    }
  }
}
