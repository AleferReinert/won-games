import { gql } from '@apollo/client'

export const QUERY_GAME_BY_SLUG = gql`
  # Write your query or mutation here
  query QueryGamesBySlug($slug: String!) {
    games(filters: { slug: { eq: $slug } }) {
      data {
        attributes {
          cover {
            data {
              attributes {
                url
              }
            }
          }
          name
          short_description
          description
          price
          gallery {
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
          release_date
          platforms {
            data {
              attributes {
                name
              }
            }
          }
          publisher {
            data {
              attributes {
                name
              }
            }
          }
          rating
          categories {
            data {
              attributes {
                name
              }
            }
          }
        }
      }
    }
  }
`
