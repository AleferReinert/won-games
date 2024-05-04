import { gql } from '@apollo/client'

export const QUERY_GAMES = gql`
  query GetGames($limit: Int!) {
    games(pagination: { start: 0, limit: $limit }) {
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
    }
  }
`
