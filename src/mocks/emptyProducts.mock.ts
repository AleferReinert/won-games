import { MockedResponse } from '@apollo/client/testing'
import { GET_ALL_PRODUCTS } from 'graphql/queries/getAllProducts'
import { GameEntityResponseCollection } from 'types/generated'

export const emptyProductsMock: MockedResponse<{
  games: GameEntityResponseCollection
}> = {
  request: {
    query: GET_ALL_PRODUCTS,
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
