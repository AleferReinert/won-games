import { gql } from '@apollo/client'

export const PRODUCTS = gql`
  query Products($limit: Int, $start: Int, $filters: ProductFiltersInput, $sort: [String]) {
    products(pagination: { start: $start, limit: $limit }, filters: $filters, sort: $sort) {
      documentId
      cover {
        url
        alternativeText
      }
      developers {
        name
      }
      name
      price
      slug
      promotional_price
      ribbon_label
    }
    products_connection(filters: $filters) {
      pageInfo {
        total
      }
    }
  }
`
