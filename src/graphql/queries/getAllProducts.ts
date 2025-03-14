import { gql } from '@apollo/client'

export const GET_ALL_PRODUCTS = gql`
  query getAllProducts(
    $limit: Int!
    $start: Int
    $filters: GameFiltersInput
    $sort: [String]
  ) {
    games(
      pagination: { start: $start, limit: $limit }
      filters: $filters
      sort: $sort
    ) {
      data {
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
