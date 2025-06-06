import { MockedResponse } from '@apollo/client/testing'
import { productsLimit } from 'app/(main)/explore/page'
import { PRODUCTS } from 'graphql/queries/products'
import { ProductsQuery } from 'types/generated'

export const emptyProductsResponseMock: MockedResponse<ProductsQuery> = {
  request: {
    query: PRODUCTS,
    variables: {
      filters: { and: [] },
      limit: productsLimit
    }
  },
  result: {
    data: {
      products: [],
      products_connection: {
        pageInfo: {
          total: 0
        }
      }
    }
  }
}
