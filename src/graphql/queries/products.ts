import { gql } from '@apollo/client'

export const PRODUCTS = gql`
  query Products($limit: Int, $start: Int, $filters: ProductFiltersInput, $sort: [String]) {
    products(pagination: { start: $start, limit: $limit }, filters: $filters, sort: $sort) {
      data {
        id
        attributes {
          cover {
            data {
              attributes {
                url
              }
            }
          }
          developers {
            data {
              attributes {
                name
              }
            }
          }
          name
          price
          slug
        }
      }
      meta {
        pagination {
          total
        }
      }
    }
  }
`
