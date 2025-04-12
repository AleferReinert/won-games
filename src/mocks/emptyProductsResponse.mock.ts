import { MockedResponse } from '@apollo/client/testing'
import { PRODUCTS } from 'graphql/queries/products'
import { ProductEntityResponseCollection } from 'types/generated'

export const emptyProductsResponseMock: MockedResponse<{
  products: ProductEntityResponseCollection
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
      products: {
        data: [],
        meta: {
          pagination: {
            page: 1,
            pageCount: 4,
            pageSize: 3,
            total: 0
          }
        },
        __typename: 'ProductEntityResponseCollection'
      }
    }
  }
}
