import { gql } from '@apollo/client'

export const GET_ALL_PLATFORMS = gql`
  query getAllPlatforms {
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
