import { graphql, HttpResponse } from 'msw'

export const productsHandler = graphql.query('Products', () => {
  return HttpResponse.json({
    data: {
      products: {
        data: [],
        meta: {
          pagination: {
            total: 0
          }
        }
      }
    }
  })
})
