import { gql } from '@apollo/client'

export const GET_ALL_CATEGORIES = gql`
  query getAllCategories {
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
