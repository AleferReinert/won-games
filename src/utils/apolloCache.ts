import { InMemoryCache } from '@apollo/client'

export const apolloCache = new InMemoryCache({
  typePolicies: {
    Query: {
      fields: {
        products: {
          keyArgs: ['filters', 'sort'],
          merge(existing = { data: [] }, incoming) {
            return {
              ...incoming,
              data: [...existing.data, ...incoming.data]
            }
          }
        }
      }
    }
  }
})
