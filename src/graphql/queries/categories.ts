import { gql } from '@apollo/client'

export const CATEGORIES = gql`
  query Categories {
    categories(sort: "name:asc", pagination: { start: 0, limit: 100 }) {
      data {
        attributes {
          name
          slug
        }
      }
    }
  }
`
