import { gql } from '@apollo/client'

export const GET_ALL_GAMES = gql`
  query getAllGames($limit: Int!) {
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
