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
                alternativeText
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
          promotional_price
          ribbon_label
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
