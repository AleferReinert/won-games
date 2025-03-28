import { gql } from '@apollo/client'

export const PLATFORMS = gql`
  query Platforms {
    platforms(sort: "name:asc", pagination: { start: 0, limit: 50 }) {
      data {
        attributes {
          name
          slug
        }
      }
    }
  }
`
