import { MockedResponse } from '@apollo/client/testing'
import { GET_ALL_PRODUCTS } from 'graphql/queries/getAllProducts'

export const cartItemResponseMock: MockedResponse = {
  request: {
    query: GET_ALL_PRODUCTS,
    variables: {
      filters: { id: { in: ['2'] } }
    }
  },
  result: {
    data: {
      games: {
        data: [
          {
            id: '2',
            attributes: {
              cover: {
                data: {
                  attributes: {
                    url: '/uploads/wolfenstein_ii_the_new_colossus_digital_deluxe_edition_228d01b9ae_27396bd6d8.jpg'
                  }
                }
              },
              developers: {
                data: []
              },
              name: 'jogo-gratuito',
              price: 0,
              slug: 'jogo-gratuito'
            }
          }
        ],
        meta: {
          pagination: {
            total: 1
          }
        }
      }
    }
  }
}
