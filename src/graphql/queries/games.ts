import { gql } from '@apollo/client'

export const QUERY_GAMES = gql`
  query GetGames {
    games {
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
