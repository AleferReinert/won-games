import { MockedResponse } from '@apollo/client/testing'
import { PRODUCTS } from 'graphql/queries/products'
import { GameEntityResponseCollection } from 'types/generated'

export const emptyProductsResponseMock: MockedResponse<{
  games: GameEntityResponseCollection
}> = {
  request: {
    query: PRODUCTS,
    variables: {
      limit: 3,
      filters: { price: {}, and: [] }
    }
  },
  result: {
    data: {
      games: {
        data: [],
        meta: {
          pagination: {
            page: 1,
            pageCount: 4,
            pageSize: 3,
            total: 0
          }
        },
        __typename: 'GameEntityResponseCollection'
      }
    }
  }
}
